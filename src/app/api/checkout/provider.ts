import { resolveLine, type ResolvedLine } from "@/components/shop/resolve";
import { MAX_QTY } from "@/components/shop/limits";

export type CheckoutItem = { slug: string; variantId?: string; qty: number; meta?: Record<string, string> };

export type CheckoutResult =
  | { status: "redirect"; url: string }
  | { status: "not-configured"; message: string }
  | { status: "error"; message: string };

/** Which payment provider handles checkout. Unset = "Checkout coming soon". */
export const checkoutProvider = () => (process.env.CHECKOUT_PROVIDER ?? "").trim().toLowerCase();

export const isCheckoutConfigured = () => checkoutProvider() !== "";

const NOT_CONFIGURED: CheckoutResult = {
  status: "not-configured",
  message: "Online checkout is coming soon. Your bag is saved on this device.",
};

/**
 * The single server-side checkout entry point. The bag sends only ids + quantities;
 * lines are re-priced here from the catalog.
 */
export async function createCheckout(items: CheckoutItem[], origin: string): Promise<CheckoutResult> {
  const lines = items
    .map((i) => resolveLine(i.slug, i.variantId, Math.min(MAX_QTY, i.qty), i.meta))
    .filter((l): l is ResolvedLine => l !== null);
  if (!lines.length) return { status: "error", message: "Your bag is empty." };

  switch (checkoutProvider()) {
    case "":
      return NOT_CONFIGURED;

    case "stripe":
      return createStripeCheckout(lines, origin);

    default:
      console.error(`[checkout] unknown CHECKOUT_PROVIDER "${checkoutProvider()}"`);
      return NOT_CONFIGURED;
  }
}

/**
 * TODO(stripe): drop Stripe Checkout in here once Dr. A confirms the provider (TODO_CLIENT.md).
 *  1. `npm i stripe`; env STRIPE_SECRET_KEY (server only). Optional STRIPE_SHIPPING_RATE_IDS (comma list).
 *  2. `stripe.checkout.sessions.create({ mode: "payment", line_items, ... })` with
 *     line_items built from `lines`: price_data { currency: "usd", unit_amount: Math.round(unitPrice * 100),
 *     product_data: { name: product.name + (variant ? ` (${variant.label})` : ""), tax_code } }, quantity.
 *     Use "txcd_35010000" (books) / "txcd_99999999" (general goods) or set tax codes per product type.
 *  3. Taxes: `automatic_tax: { enabled: true }` (Stripe Tax; register tax locations in the dashboard).
 *  4. Shipping: `shipping_address_collection: { allowed_countries: [...] }` and
 *     `shipping_options: [{ shipping_rate: id }]` (rates set up in Stripe; countries pending from Dr. A).
 *     The gift card (if digital) needs no shipping: skip collection when the bag has only digital items.
 *  5. Multiple currencies: enable Adaptive Pricing in the Stripe dashboard (prices stay in USD here;
 *     Stripe localises at checkout). Discount codes (10% first order): `allow_promotion_codes: true`.
 *  6. success_url `${origin}/shop?checkout=success`, cancel_url `${origin}/shop?checkout=cancelled`;
 *     return `{ status: "redirect", url: session.url }`. Add a webhook route for fulfilment.
 */
async function createStripeCheckout(lines: ResolvedLine[], origin: string): Promise<CheckoutResult> {
  void lines;
  void origin;
  console.error("[checkout] CHECKOUT_PROVIDER=stripe but the Stripe integration is not installed yet.");
  return NOT_CONFIGURED;
}
