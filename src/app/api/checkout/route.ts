import { createCheckout, type CheckoutItem } from "./provider";

/** POST { items: [{ slug, variantId?, qty }] } → CheckoutResult. Provider chosen by CHECKOUT_PROVIDER. */
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ status: "error", message: "Invalid request." }, { status: 400 });
  }

  const raw = (body as { items?: unknown })?.items;
  if (!Array.isArray(raw) || raw.length === 0 || raw.length > 50) {
    return Response.json({ status: "error", message: "Your bag is empty." }, { status: 400 });
  }

  const items: CheckoutItem[] = raw
    .filter((i): i is Record<string, unknown> => !!i && typeof i === "object")
    .map((i) => ({
      slug: String(i.slug ?? ""),
      variantId: typeof i.variantId === "string" ? i.variantId : undefined,
      qty: Number(i.qty),
      meta: cleanMeta(i.meta),
    }));

  const result = await createCheckout(items, new URL(request.url).origin);
  const status = result.status === "redirect" ? 200 : result.status === "not-configured" ? 503 : 400;
  return Response.json(result, { status });
}

// Gift card details only: known keys, short strings.
const META_KEYS = ["recipientEmail", "recipientName", "message", "sendDate", "amount"] as const;
function cleanMeta(raw: unknown): Record<string, string> | undefined {
  if (!raw || typeof raw !== "object") return undefined;
  const out: Record<string, string> = {};
  for (const k of META_KEYS) {
    const v = (raw as Record<string, unknown>)[k];
    if (typeof v === "string" && v.trim()) out[k] = v.trim().slice(0, k === "message" ? 500 : 120);
  }
  return Object.keys(out).length ? out : undefined;
}
