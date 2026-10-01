"use client";

import Link from "next/link";
import { defaultVariant, formatPrice, variantPrice, type Product } from "@/data/products";
import { ProductImage } from "./ProductImage";
import { addMany } from "./store";

/** "Frequently bought together" (as on her current shop): the items with one "Add all to bag". */
export function BoughtTogether({ items }: { items: Product[] }) {
  const picks = items.map((p) => ({ product: p, variant: defaultVariant(p) }));
  const total = picks.reduce((sum, { product, variant }) => sum + variantPrice(product, variant), 0);

  return (
    <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_auto]">
      <ul className="flex flex-wrap items-center gap-3 sm:gap-4">
        {picks.map(({ product, variant }, i) => (
          <li key={product.slug} className="flex items-center gap-3 sm:gap-4">
            {i > 0 && (
              <span aria-hidden className="text-2xl font-light text-muted">
                +
              </span>
            )}
            <Link href={`/shop/${product.slug}`} className="group block w-28 sm:w-36">
              <span className="relative block aspect-4/5 overflow-hidden rounded-2xl ring-1 ring-line transition-shadow group-hover:ring-gold">
                <ProductImage product={product} sizes="144px" image={variant?.image} />
              </span>
              <span className="mt-2 block truncate text-sm font-semibold text-navy">{product.name}</span>
              <span className="block text-xs text-muted">
                {variant ? `${variant.label} · ` : ""}
                {formatPrice(variantPrice(product, variant))}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="lg:text-right">
        <p className="text-sm text-muted">Total for {picks.length} items</p>
        <p className="text-3xl font-semibold text-navy">{formatPrice(total)}</p>
        <button
          type="button"
          onClick={() => addMany(picks.map(({ product, variant }) => ({ slug: product.slug, variantId: variant?.id })))}
          className="mt-4 h-12 rounded-full bg-navy px-7 font-semibold text-white transition-colors hover:bg-navy-deep"
        >
          Add all to bag
        </button>
      </div>
    </div>
  );
}
