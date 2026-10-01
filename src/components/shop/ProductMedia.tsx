"use client";

import type { Product } from "@/data/products";
import { ProductImage } from "./ProductImage";
import { useSelectedVariant } from "./store";

/** Product page photo that follows the colour picker (falls back to the product photo/cover). */
export function ProductMedia({ product }: { product: Product }) {
  const selectedId = useSelectedVariant(product.slug);
  const variant = product.variants?.find((v) => v.id === selectedId);
  return (
    <ProductImage
      product={product}
      preload
      sizes="(min-width: 768px) 45vw, 92vw"
      image={variant?.image}
      imageAlt={variant?.image ? `${product.name} in ${variant.label}` : undefined}
    />
  );
}
