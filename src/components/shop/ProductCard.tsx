"use client";

import Link from "next/link";
import { defaultVariant, formatPrice, type Product } from "@/data/products";
import { ProductImage } from "./ProductImage";
import { Heart } from "./icons";
import { cart, useWishlist, wishlist } from "./store";

export function WishlistButton({ slug, name, className = "" }: { slug: string; name: string; className?: string }) {
  const saved = useWishlist().includes(slug);
  return (
    <button
      type="button"
      onClick={() => wishlist.toggle(slug)}
      aria-pressed={saved}
      aria-label={saved ? `Remove ${name} from wishlist` : `Save ${name} to wishlist`}
      className={`grid size-10 place-items-center rounded-full bg-white/95 shadow-sm ring-1 ring-line transition-colors hover:text-gold-deep ${
        saved ? "text-gold-deep" : "text-navy"
      } ${className}`}
    >
      <Heart filled={saved} width={18} height={18} />
    </button>
  );
}

export function ProductCard({ product }: { product: Product }) {
  const variant = defaultVariant(product);
  const purchasable = !product.variants?.length || !!variant;
  const href = `/shop/${product.slug}`;

  return (
    <article className="group relative flex flex-col">
      <div className="relative aspect-4/5 overflow-hidden rounded-2xl ring-1 ring-line">
        <Link href={href} aria-label={product.name} className="block h-full transition-transform duration-500 group-hover:scale-[1.02]">
          <ProductImage product={product} sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 92vw" />
        </Link>
        <WishlistButton slug={product.slug} name={product.name} className="absolute right-3 top-3" />
        {product.badge && (
          <span
            className={`absolute left-3 top-3 rounded-full px-3 py-1 text-[0.65rem] font-bold tracking-[0.16em] ${
              product.badge === "NEW" ? "bg-teal text-white" : "bg-gold text-white"
            }`}
          >
            {product.badge}
          </span>
        )}
      </div>
      <div className="mt-4 flex flex-1 flex-col items-center text-center">
        <h3 className="font-serif text-2xl font-semibold leading-tight text-navy">
          <Link href={href} className="hover:text-gold-deep">
            {product.name}
          </Link>
        </h3>
        {product.author && <p className="mt-1 text-xs text-muted">by {product.author}</p>}
        <p className="mt-2 text-ink">
          {product.pricePending ? (
            <span className="text-sm font-semibold text-gold-deep">Price coming soon</span>
          ) : (
            <>
              <span className="font-semibold">{formatPrice(product.price)}</span>
              {product.compareAt && <s className="ml-2 text-sm text-muted">{formatPrice(product.compareAt)}</s>}
            </>
          )}
        </p>
        {variant?.checkoutUrl ? (
          <a
            href={variant.checkoutUrl}
            className="mt-4 inline-flex h-11 w-full max-w-56 items-center justify-center rounded-full bg-gold text-sm font-semibold tracking-wide text-white transition-colors hover:bg-gold-deep"
          >
            Buy now · {variant.label}
          </a>
        ) : product.giftCard || product.pricePending || product.price <= 0 ? (
          <Link
            href={`/shop/${product.slug}`}
            className="mt-4 inline-flex h-11 w-full max-w-56 items-center justify-center rounded-full border border-navy/25 text-sm font-semibold tracking-wide text-navy transition-colors hover:border-navy hover:bg-navy hover:text-white"
          >
            View details
          </Link>

        ) : (
          <button
            type="button"
            disabled={!purchasable}
            onClick={() => cart.add(product.slug, variant?.id)}
            className="mt-4 h-11 w-full max-w-56 rounded-full border border-navy/25 text-sm font-semibold tracking-wide text-navy transition-colors hover:border-navy hover:bg-navy hover:text-white disabled:opacity-50"
          >
            {variant ? `Add to bag · ${variant.label}` : "Add to bag"}
          </button>
        )}
      </div>
    </article>
  );
}
