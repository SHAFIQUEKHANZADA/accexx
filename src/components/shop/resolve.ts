import { getProduct, variantPrice, type Product, type ProductVariant } from "@/data/products";

export type ResolvedLine = {
  product: Product;
  variant?: ProductVariant;
  unitPrice: number;
  qty: number;
  meta?: Record<string, string>;
};


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

  // Never allow $0, pricePending, or unlaunched products to enter the cart
  if (product.pricePending || product.price <= 0) return null;

  // Gift Card is currently unavailable
  if (product.slug === "store-gift-card" || product.giftCard) return null;

  let variant: ProductVariant | undefined;
  if (product.variants?.length) {
    variant = product.variants.find((v) => v.id === variantId);
    if (!variant || variant.status !== "available") return null;
  } else if (variantId) {
    return null;
  }
  const q = Math.floor(qty);
  if (!Number.isFinite(q) || q < 1) return null;

  const unitPrice = variantPrice(product, variant);
  if (!Number.isFinite(unitPrice) || unitPrice <= 0) return null;

  return { product, variant, unitPrice, qty: q, ...(meta ? { meta } : {}) };
}

