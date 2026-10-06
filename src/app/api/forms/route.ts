import { submitFormToGhl, type FormSubmissionInput } from "@/lib/ghl/submitForm";
import { checkRateLimit } from "@/lib/rateLimit";

const VALID_FORM_TYPES = new Set([
  "contact",
  "cohort-request",
  "consulting-proposal",
  "coaching-inquiry",
  "speaking-inquiry",
  "accexx-circle",
  "inside-the-pages-interest",
  "conference-interest",
  "event-registration",
  "shop-popup",
  "product-review",
]);

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function sanitizeString(val: unknown, maxLength = 1000): string | undefined {
  if (typeof val !== "string") return undefined;
  // Remove control characters (except newline and carriage return)
  const cleaned = val.replace(/[\x00-\x09\x0B\x0C\x0E-\x1F\x7F]/g, "").trim();
  return cleaned.slice(0, maxLength);
}

export async function POST(request: Request) {
  // 1. Rate Limiting
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "127.0.0.1";

  const rateCheck = checkRateLimit(ip, 20, 60 * 1000);
  if (!rateCheck.allowed) {
    return Response.json(
      { error: "Too many submissions. Please wait a moment and try again." },
      { status: 429 }
    );
  }

  // 2. Parse request body
  let rawBody: Record<string, unknown>;
  try {
    rawBody = await request.json();
  } catch {
    return Response.json({ error: "Invalid request payload." }, { status: 400 });
  }

  // 3. Honeypot check
  // Hidden input named "company" is never filled by real humans.
  if (rawBody.company) {
    return Response.json({
      ok: true,
      message: "Thank you. Your message has been received.",
    });
  }

  const formType = String(rawBody.formType ?? "").trim();
  if (!VALID_FORM_TYPES.has(formType)) {
    return Response.json({ error: "Unknown form type." }, { status: 400 });
  }

  // 4. Validate & sanitize email
  const emailRaw = String(rawBody.email ?? "").trim();
  if (!EMAIL_REGEX.test(emailRaw)) {
    return Response.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  // 5. Fallback for pageUrl from request Referer
  const referer = request.headers.get("referer") || undefined;
  const pageUrl = (sanitizeString(rawBody.pageUrl, 2048) || referer) ?? "";

  // 6. Build sanitized input
  const input: FormSubmissionInput = {
    formType,
    email: emailRaw,
    name: sanitizeString(rawBody.name, 200),
    firstName: sanitizeString(rawBody.firstName, 100),
    lastName: sanitizeString(rawBody.lastName, 100),
    phone: sanitizeString(rawBody.phone, 50),
    organization: sanitizeString(rawBody.organization, 200),
    message: sanitizeString(rawBody.message, 5000),
    topic: sanitizeString(rawBody.topic, 200),
    preferredFormat: sanitizeString(rawBody.preferredFormat, 50),
    programCode: sanitizeString(rawBody.programCode, 100),
    programName: sanitizeString(rawBody.programName, 200),
    pageUrl,
    utmSource: sanitizeString(rawBody.utmSource, 100),
    utmMedium: sanitizeString(rawBody.utmMedium, 100),
    utmCampaign: sanitizeString(rawBody.utmCampaign, 100),
    consent: Boolean(rawBody.consent),
    smsConsent: Boolean(rawBody.smsConsent),
    isAuthor: Boolean(rawBody.isAuthor),
    authorBookTitle: sanitizeString(rawBody.authorBookTitle, 200),
    estimatedCohortSize: rawBody.estimatedCohortSize
      ? Number(rawBody.estimatedCohortSize) || undefined
      : undefined,
    preferredStartDate: sanitizeString(rawBody.preferredStartDate, 50),
    deliveryCity: sanitizeString(rawBody.deliveryCity, 100),
    deliveryState: sanitizeString(rawBody.deliveryState, 100),
    deliveryCountry: sanitizeString(rawBody.deliveryCountry, 100),
    consultingCategory: sanitizeString(rawBody.consultingCategory, 100),
    consultingStart: sanitizeString(rawBody.consultingStart, 50),
    consultingDelivery: sanitizeString(rawBody.consultingDelivery, 50),
    coachingParticipantType: sanitizeString(rawBody.coachingParticipantType, 50),
    coachingPackage: sanitizeString(rawBody.coachingPackage, 50),
    coachingStart: sanitizeString(rawBody.coachingStart, 50),
    coachingSponsor: sanitizeString(rawBody.coachingSponsor, 200),
    eventName: sanitizeString(rawBody.eventName, 200),
    eventType: sanitizeString(rawBody.eventType, 100),
    eventDate: sanitizeString(rawBody.eventDate, 50),
    eventStartTime: sanitizeString(rawBody.eventStartTime, 50),
    eventTimeZone: sanitizeString(rawBody.eventTimeZone, 50),
    eventFormat: sanitizeString(rawBody.eventFormat, 50),
    eventVenue: sanitizeString(rawBody.eventVenue, 200),
    eventCity: sanitizeString(rawBody.eventCity, 100),
    eventState: sanitizeString(rawBody.eventState, 100),
    eventCountry: sanitizeString(rawBody.eventCountry, 100),
    audienceSize: rawBody.audienceSize
      ? Number(rawBody.audienceSize) || undefined
      : undefined,
    speakingTopic: sanitizeString(rawBody.speakingTopic, 200),
    travelRequired:
      rawBody.travelRequired !== undefined
        ? Boolean(rawBody.travelRequired)
        : undefined,
    circleInterests: Array.isArray(rawBody.circleInterests)
      ? (rawBody.circleInterests.map((x) => String(x).slice(0, 50)) as string[])
      : undefined,
    registeredEventName: sanitizeString(rawBody.registeredEventName, 200),
    registeredEventDate: sanitizeString(rawBody.registeredEventDate, 50),
    resourcePartnerType: sanitizeString(rawBody.resourcePartnerType, 100),
  };

  // 7. Execute GoHighLevel integration
  try {
    const result = await submitFormToGhl(input);
    return Response.json({
      ok: true,
      message: result.message,
    });
  } catch (error) {
    const errorMsg = error instanceof Error ? error.message : String(error);
    console.error("[forms API error]", { formType, error: errorMsg });

    return Response.json(
      {
        error:
          "We couldn't process your request right now. Please try again or contact us directly.",
      },
      { status: 500 }
    );
  }
}
