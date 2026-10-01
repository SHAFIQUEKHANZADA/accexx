import { getProduct, variantPrice, type Product, type ProductVariant } from "@/data/products";

export type ResolvedLine = {
  product: Product;
  variant?: ProductVariant;
  unitPrice: number;
  qty: number;
  meta?: Record<string, string>;
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Looks a bag line up in the catalog. Returns null for anything unknown or not purchasable
 * (removed product, coming-soon format, Kindle, invalid gift card). Shared by the bag UI and the
 * checkout route, so prices always come from src/data/products.ts and never from the browser,
 * except a gift card "Custom" amount, which is validated against the product's min/max.
 */
export function resolveLine(
  slug: string,
  variantId: string | undefined,
  qty: number,
  meta?: Record<string, string>,
): ResolvedLine | null {
  const product = getProduct(slug);
  if (!product) return null;
  let variant: ProductVariant | undefined;
  if (product.variants?.length) {
    variant = product.variants.find((v) => v.id === variantId);
    if (!variant || variant.status !== "available") return null;
  } else if (variantId) {
    return null;
  }
  const q = Math.floor(qty);
  if (!Number.isFinite(q) || q < 1) return null;

  let unitPrice = variantPrice(product, variant);
  if (product.giftCard) {
    // A gift card needs a recipient; a custom amount must be inside the allowed range.
    if (!meta?.recipientEmail || !EMAIL.test(meta.recipientEmail)) return null;
    if (variant?.custom) {
      const amount = Math.round(Number(meta.amount) * 100) / 100;
      if (!Number.isFinite(amount) || amount < product.giftCard.min || amount > product.giftCard.max) return null;
      unitPrice = amount;
    }
  }
  return { product, variant, unitPrice, qty: q, ...(meta ? { meta } : {}) };
}
