import { discoverGhlObjects, type DiscoveredGhlObjects } from "./discovery";
import {
  findExistingContact,
  getContact,
  createContact,
  updateContact,
  findActiveOpportunity,
  createOpportunity,
  updateOpportunity,
  type GhlCustomFieldValue,
  type GhlContactData,
} from "./client";
import { resolveProgram, resolveConsulting, resolveCoaching } from "./catalog";

export interface FormSubmissionInput {
  formType: string;
  name?: string;
  firstName?: string;
  lastName?: string;
  email: string;
  phone?: string;
  organization?: string;
  company?: string; // honeypot
  message?: string;
  topic?: string;
  preferredFormat?: string;
  programCode?: string;
  programName?: string;
  pageUrl?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  consent?: boolean;
  smsConsent?: boolean;
  isAuthor?: boolean;
  authorBookTitle?: string;
  estimatedCohortSize?: number | string;
  preferredStartDate?: string;
  deliveryCity?: string;
  deliveryState?: string;
  deliveryCountry?: string;
  consultingCategory?: string;
  consultingStart?: string;
  consultingDelivery?: string;
  coachingParticipantType?: string;
  coachingPackage?: string;
  coachingStart?: string;
  coachingSponsor?: string;
  eventName?: string;
  eventType?: string;
  eventDate?: string;
  eventStartTime?: string;
  eventTimeZone?: string;
  eventFormat?: string;
  eventVenue?: string;
  eventCity?: string;
  eventState?: string;
  eventCountry?: string;
  audienceSize?: number | string;
  speakingTopic?: string;
  travelRequired?: boolean;
  circleInterests?: string[];
  registeredEventName?: string;
  registeredEventDate?: string;
  resourcePartnerType?: string;
}

export interface FormSubmissionResult {
  ok: boolean;
  message: string;
  contactId?: string;
  opportunityId?: string;
  isUpdatedContact?: boolean;
  isUpdatedOpportunity?: boolean;
}

function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

function normalizePhone(phone?: string): string | undefined {
  if (!phone) return undefined;
  const trimmed = phone.trim();
  const digits = trimmed.replace(/\D/g, "");
  if (!digits) return undefined;
  if (trimmed.startsWith("+")) {
    return `+${digits}`;
  }
  // If 10 digits without country code, assume US (+1)
  if (digits.length === 10) {
    return `+1${digits}`;
  }
  if (digits.length === 11 && digits.startsWith("1")) {
    return `+${digits}`;
  }
  return `+${digits}`;
}

function parseName(input: FormSubmissionInput): {
  fullName: string;
  firstName: string;
  lastName: string;
} {
  if (input.firstName || input.lastName) {
    const f = (input.firstName || "").trim();
    const l = (input.lastName || "").trim();
    return {
      fullName: [f, l].filter(Boolean).join(" ") || "Friend",
      firstName: f || "Friend",
      lastName: l,
    };
  }

  const raw = (input.name || "").trim();
  if (!raw) {
    return { fullName: "Friend", firstName: "Friend", lastName: "" };
  }

  const parts = raw.split(/\s+/);
  const firstName = parts[0];
  const lastName = parts.slice(1).join(" ");
  return { fullName: raw, firstName, lastName };
}

function formatDate(date: Date = new Date()): string {
  return date.toISOString().split("T")[0];
}

class CustomFieldsBuilder {
  private fields: GhlCustomFieldValue[] = [];
  private discovery: DiscoveredGhlObjects;

  constructor(discovery: DiscoveredGhlObjects) {
    this.discovery = discovery;
  }

  set(fieldNameOrKey: string, value: unknown): this {
    if (value === undefined || value === null || value === "") {
      return this;
    }

    const lower = fieldNameOrKey.toLowerCase().trim();
    const keyCandidate = "contact." + lower.replace(/[^a-z0-9]/g, "_");
    const def =
      this.discovery.customFields.get(lower) ||
      this.discovery.customFields.get(keyCandidate);

    if (!def) {
      console.warn(`[GHL Custom Field] Unresolved field: "${fieldNameOrKey}"`);
      return this;
    }

    let processedValue = value;
    if (def.dataType === "CHECKBOX") {
      processedValue = Boolean(value);
    } else if (def.dataType === "NUMERICAL") {
      const num = Number(value);
      if (!isNaN(num)) processedValue = num;
    } else if (def.dataType === "DATE") {
      if (typeof value === "string") {
        const parsed = new Date(value);
        if (!isNaN(parsed.getTime())) {
          processedValue = parsed.toISOString().split("T")[0];
        }
      } else if (value instanceof Date) {
        processedValue = value.toISOString().split("T")[0];
      }
    }

    this.fields.push({
      id: def.id,
      key: def.fieldKey,
      field_value: processedValue,
    });
    return this;
  }

  build(): GhlCustomFieldValue[] {
    return this.fields;
  }
}

export async function submitFormToGhl(
  input: FormSubmissionInput
): Promise<FormSubmissionResult> {
  const discovery = await discoverGhlObjects();
  const normalizedEmail = normalizeEmail(input.email);
  const normalizedPhone = normalizePhone(input.phone);
  const { fullName, firstName, lastName } = parseName(input);
  const companyName = (input.organization || "").trim() || undefined;

  // Search GHL for existing contact by email first, phone second
  const existingSummary = await findExistingContact(normalizedEmail, normalizedPhone);
  let existingContact: GhlContactData | null = null;
  if (existingSummary?.id) {
    existingContact = await getContact(existingSummary.id);
  }

  // Check existing custom fields to preserve Original Lead Source, Original Inquiry Date, and Circle Join Date
  let hasExistingLeadSource = false;
  let hasExistingInquiryDate = false;
  let hasExistingCircleJoinDate = false;

  const leadSourceDef = discovery.customFields.get("original lead source");
  const inquiryDateDef = discovery.customFields.get("original inquiry date");
  const circleJoinDef = discovery.customFields.get("accexx circle join date");

  if (existingContact?.customFields) {
    for (const f of existingContact.customFields) {
      const val = f.value ?? f.fieldValue;
      if (val !== undefined && val !== null && val !== "") {
        if (leadSourceDef && f.id === leadSourceDef.id) hasExistingLeadSource = true;
        if (inquiryDateDef && f.id === inquiryDateDef.id) hasExistingInquiryDate = true;
        if (circleJoinDef && f.id === circleJoinDef.id) hasExistingCircleJoinDate = true;
      }
    }
  }

  const fb = new CustomFieldsBuilder(discovery);
  const today = formatDate();

  // Set lead source and inquiry date ONLY when empty
  if (!hasExistingLeadSource) {
    fb.set("Original Lead Source", "Website");
  }
  if (!hasExistingInquiryDate) {
    fb.set("Original Inquiry Date", today);
  }

  // Source page & UTMs
  if (input.pageUrl) {
    fb.set("Original Source Page", input.pageUrl);
  }
  if (input.utmSource) fb.set("UTM Source", input.utmSource);
  if (input.utmMedium) fb.set("UTM Medium", input.utmMedium);
  if (input.utmCampaign) fb.set("UTM Campaign", input.utmCampaign);

  // Common Consent
  const marketingConsent = Boolean(input.consent);
  const smsConsent = Boolean(input.smsConsent);
  fb.set("Marketing Consent", marketingConsent);
  fb.set("SMS Consent", smsConsent);
  if (marketingConsent || smsConsent) {
    fb.set("Consent Date and Time", today);
  }

  let friendlyMessage = "Thank you. Your message has been received.";
  let targetPipeline = discovery.pipelines.generalInquiry;
  let opportunityName = "";
  let shouldCreateOpportunity = false;
  const newTags: string[] = [];

  const formType = input.formType;

  // FORM 1 — GENERAL CONTACT
  if (formType === "contact") {
    fb.set("Inquiry Type", "General Contact");
    if (input.topic) {
      fb.set("Primary Interest", input.topic);
    }
    fb.set("Inquiry Message", input.message || "");

    targetPipeline = discovery.pipelines.generalInquiry;
    opportunityName = `General Inquiry — ${fullName}`;
    shouldCreateOpportunity = true;
    friendlyMessage =
      "Thank you. Your message has been received, and the Accexx Insight team will follow up.";
  }

  // FORM 2 — REQUEST A COHORT
  else if (formType === "cohort-request") {
    const prog = resolveProgram(input.programCode, input.programName, input.pageUrl);

    fb.set("Inquiry Type", "Cohort Request");
    fb.set("Primary Interest", prog.primaryInterest);
    fb.set("Program Family", prog.programFamily);
    fb.set("Requested Program", prog.programName);
    fb.set("Program Code", prog.programCode);

    if (input.estimatedCohortSize) {
      fb.set("Estimated Cohort Size", input.estimatedCohortSize);
    }

    let prefFormat = input.preferredFormat || "";
    if (prefFormat.toLowerCase() === "virtual") prefFormat = "Live Virtual";
    else if (!prefFormat || prefFormat.toLowerCase() === "no preference") {
      prefFormat = "No Preference";
    }
    fb.set("Preferred Delivery Format", prefFormat);

    if (input.preferredStartDate) {
      fb.set("Preferred Start Date", input.preferredStartDate);
    }
    if (input.deliveryCity) fb.set("Delivery City", input.deliveryCity);
    if (input.deliveryState) fb.set("Delivery State or Region", input.deliveryState);
    if (input.deliveryCountry) fb.set("Delivery Country", input.deliveryCountry);
    fb.set("Cohort Request Notes", input.message || "");

    targetPipeline = discovery.pipelines.cohortSales;
    const orgOrName = companyName || fullName;
    opportunityName = `${prog.programCode} Cohort — ${orgOrName}`;
    shouldCreateOpportunity = true;
    friendlyMessage =
      "Thank you. Your cohort request has been received. Our team will contact you to discuss your group and next steps.";
  }

  // FORM 3 — CONSULTING PROPOSAL
  else if (formType === "consulting-proposal") {
    const consult = resolveConsulting(input.topic || input.consultingCategory);

    fb.set("Inquiry Type", "Consulting");
    fb.set("Primary Interest", "Consulting");
    fb.set("Consulting Category", consult.consultingCategory);
    fb.set("Consulting Engagement", consult.consultingEngagement);
    fb.set("Consulting Engagement Code", consult.consultingEngagementCode);
    fb.set("Organizational Challenge", input.message || "");

    if (input.consultingStart) {
      fb.set("Preferred Consulting Start", input.consultingStart);
    }
    if (input.consultingDelivery) {
      fb.set("Consulting Delivery Preference", input.consultingDelivery);
    }

    targetPipeline = discovery.pipelines.consultingSales;
    const orgPart = companyName || fullName;
    const engagementDescriptor =
      consult.consultingEngagementCode && consult.consultingEngagementCode !== "CONSULTING"
        ? consult.consultingEngagementCode
        : consult.consultingCategory;
    opportunityName = `Consulting — ${engagementDescriptor} — ${orgPart}`;
    shouldCreateOpportunity = true;
    friendlyMessage =
      "Thank you. Your consulting request has been received. We’ll review the information and follow up.";
  }

  // FORM 4 — COACHING INQUIRY
  else if (formType === "coaching-inquiry") {
    const coach = resolveCoaching(input.topic);

    fb.set("Inquiry Type", "Coaching");
    fb.set("Primary Interest", coach.primaryInterest);
    fb.set("Coaching Stream", coach.coachingStream);
    if (input.coachingParticipantType) {
      fb.set("Coaching Participant Type", input.coachingParticipantType);
    }
    if (input.coachingPackage) {
      fb.set("Preferred Coaching Package", input.coachingPackage);
    }
    fb.set("Coaching Goals", input.message || "");
    if (input.coachingStart) {
      fb.set("Preferred Coaching Start", input.coachingStart);
    }
    if (input.coachingSponsor) {
      fb.set("Coaching Sponsor", input.coachingSponsor);
    }

    targetPipeline = discovery.pipelines.coachingSales;
    const who = fullName || companyName || "Client";
    opportunityName = `Coaching — ${coach.coachingStream} — ${who}`;
    shouldCreateOpportunity = true;
    friendlyMessage =
      "Thank you. Your coaching inquiry has been received. Our team will contact you about the appropriate next step.";
  }

  // FORM 5 — SPEAKING INQUIRY
  else if (formType === "speaking-inquiry") {
    fb.set("Inquiry Type", "Speaking");
    fb.set("Primary Interest", "Speaking");
    if (input.eventName) fb.set("Event Name", input.eventName);
    if (input.eventType) fb.set("Event Type", input.eventType);
    if (input.eventDate) fb.set("Event Date", input.eventDate);
    if (input.eventStartTime) fb.set("Event Start Time", input.eventStartTime);
    if (input.eventTimeZone) fb.set("Event Time Zone", input.eventTimeZone);
    if (input.eventFormat) fb.set("Event Format", input.eventFormat);
    if (input.eventVenue) fb.set("Event Venue", input.eventVenue);
    if (input.eventCity) fb.set("Event City", input.eventCity);
    if (input.eventState) fb.set("Event State or Region", input.eventState);
    if (input.eventCountry) fb.set("Event Country", input.eventCountry);
    if (input.audienceSize) fb.set("Estimated Audience Size", input.audienceSize);
    fb.set("Requested Speaking Topic", input.speakingTopic || input.topic || "");
    fb.set("Speaking Request Details", input.message || "");
    if (input.travelRequired !== undefined) {
      fb.set("Travel Required", input.travelRequired);
    }

    targetPipeline = discovery.pipelines.speakingEngagements;
    const eventOrName = input.eventName || fullName;
    opportunityName = `Speaking — ${eventOrName}`;
    shouldCreateOpportunity = true;
    friendlyMessage =
      "Thank you. Your speaking inquiry has been received. We’ll review your event details and follow up.";
  }

  // FORM 6 — ACCEXX CIRCLE
  else if (formType === "accexx-circle") {
    fb.set("Inquiry Type", "Accexx Circle");
    fb.set("Accexx Circle Status", "Active");
    if (!hasExistingCircleJoinDate) {
      fb.set("Accexx Circle Join Date", today);
    }
    if (input.circleInterests && input.circleInterests.length > 0) {
      fb.set("Circle Interest", input.circleInterests);
    }
    // Circle forms imply marketing consent
    fb.set("Marketing Consent", true);
    if (input.smsConsent) {
      fb.set("SMS Consent", true);
    }
    fb.set("Consent Date and Time", today);

    newTags.push("ACCEXX CIRCLE — ACTIVE");
    shouldCreateOpportunity = false;
    friendlyMessage = "Welcome to the Accexx Circle. Please check your inbox for confirmation.";
  }

  // FORM 7 — EVENT / INSIDE THE PAGES
  else if (
    formType === "inside-the-pages-interest" ||
    formType === "conference-interest" ||
    formType === "event-registration"
  ) {
    const isConference = formType === "conference-interest";
    const inqType = isConference ? "Event Registration" : "Inside the Pages";
    fb.set("Inquiry Type", inqType);
    fb.set("Primary Interest", isConference ? "Other" : "Inside the Pages");
    fb.set(
      "Registered Event Name",
      input.registeredEventName ||
        (isConference ? "Why Move My Cheese? Leadership Conference" : "Inside the Pages with Dr. A")
    );
    if (input.registeredEventDate) {
      fb.set("Registered Event Date", input.registeredEventDate);
    }
    fb.set("Event Registration Status", "Registered");

    const isAuthor = Boolean(input.isAuthor);
    fb.set("Event Attendee Type", isAuthor ? "Author" : "General Attendee");
    if (!isConference) {
      fb.set("Inside the Pages Interest", true);
    }
    fb.set("Open Floor Author Interest", isAuthor);
    if (input.authorBookTitle) fb.set("Author Book Title", input.authorBookTitle);
    if (input.resourcePartnerType) {
      fb.set("Resource Partner Type", input.resourcePartnerType);
    }
    fb.set("Event Registration Notes", input.message || "");
    fb.set("Marketing Consent", true);
    if (input.smsConsent) fb.set("SMS Consent", true);
    fb.set("Consent Date and Time", today);

    newTags.push("INSIDE THE PAGES — REGISTERED");
    shouldCreateOpportunity = false;
    friendlyMessage =
      "Thank you. Your registration has been received. Event information will be sent to your email.";
  }

  // SHOP POPUP
  else if (formType === "shop-popup") {
    fb.set("Inquiry Type", "Shop");
    fb.set("Primary Interest", "Merchandise");
    fb.set("Marketing Consent", true);
    if (input.smsConsent) fb.set("SMS Consent", true);
    fb.set("Consent Date and Time", today);
    newTags.push("SHOP — LEAD");
    shouldCreateOpportunity = false;
    friendlyMessage = "Thank you! Watch your inbox for your code.";
  }

  // Fallback for other forms (e.g. product review)
  else {
    fb.set("Inquiry Type", "General Contact");
    fb.set("Inquiry Message", input.message || "");
    shouldCreateOpportunity = false;
    friendlyMessage = "Thank you. Your submission has been received.";
  }

  // Save / Upsert Contact in GoHighLevel
  let contact: GhlContactData;
  let isUpdatedContact = false;

  const customFieldsToUpdate = fb.build();

  if (existingContact) {
    isUpdatedContact = true;
    const mergedTags = Array.from(
      new Set([...(existingContact.tags || []), ...newTags])
    );

    contact = await updateContact(existingContact.id, {
      firstName: firstName !== "Friend" ? firstName : existingContact.firstName,
      lastName: lastName || existingContact.lastName,
      name: fullName !== "Friend" ? fullName : existingContact.name,
      email: normalizedEmail || existingContact.email,
      phone: normalizedPhone || existingContact.phone,
      companyName: companyName || existingContact.companyName,
      tags: mergedTags,
      customFields: customFieldsToUpdate,
    });
  } else {
    contact = await createContact({
      firstName,
      lastName,
      name: fullName,
      email: normalizedEmail,
      phone: normalizedPhone,
      companyName,
      tags: newTags,
      customFields: customFieldsToUpdate,
    });
  }

  // Handle Sales Opportunity
  let opportunityId: string | undefined;
  let isUpdatedOpportunity = false;

  if (shouldCreateOpportunity && targetPipeline) {
    const existingOpp = await findActiveOpportunity(contact.id, targetPipeline.id);

    if (existingOpp) {
      isUpdatedOpportunity = true;
      const updatedOpp = await updateOpportunity(existingOpp.id, {
        name: opportunityName,
        pipelineStageId: targetPipeline.firstStageId,
        source: "Website",
        status: "open",
      });
      opportunityId = updatedOpp.id;
    } else {
      const newOpp = await createOpportunity({
        pipelineId: targetPipeline.id,
        pipelineStageId: targetPipeline.firstStageId,
        name: opportunityName,
        status: "open",
        contactId: contact.id,
        source: "Website",
      });
      opportunityId = newOpp.id;
    }
  }

  return {
    ok: true,
    message: friendlyMessage,
    contactId: contact.id,
    opportunityId,
    isUpdatedContact,
    isUpdatedOpportunity,
  };
}
