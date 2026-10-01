const FORM_TYPES = new Set([
  "contact",
  "cohort-request",
  "coaching-inquiry",
  "speaking-inquiry",
  "accexx-circle",
  "shop-popup",
  "conference-interest",
  "inside-the-pages-interest",
  "consulting-proposal",
  "product-review",
]);

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Every site form posts here; this forwards to the GoHighLevel inbound webhook (server-side only). */
export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const formType = String(body.formType ?? "");
  if (!FORM_TYPES.has(formType)) {
    return Response.json({ error: "Unknown form." }, { status: 400 });
  }
  // Honeypot filled in: pretend success, drop silently.
  if (body.company) return Response.json({ ok: true });

  const email = String(body.email ?? "").trim();
  if (!EMAIL.test(email)) {
    return Response.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const webhook = process.env.GHL_FORM_WEBHOOK_URL;
  if (!webhook) {
    if (process.env.NODE_ENV !== "production") {
      console.info("[forms] GHL_FORM_WEBHOOK_URL not set; submission not delivered:", { formType, email });
      return Response.json({ ok: true, delivered: false });
    }
    return Response.json({ error: "Sign-ups are temporarily unavailable. Please try again soon." }, { status: 503 });
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { company, ...fields } = body;
  const payload = {
    ...fields,
    email,
    formType,
    source: "accexxinsight.com",
    submittedAt: new Date().toISOString(),
  };

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
  } catch (err) {
    console.error("[forms] delivery failed", err);
    return Response.json({ error: "We couldn't submit that just now. Please try again." }, { status: 502 });
  }

  return Response.json({ ok: true });
}
