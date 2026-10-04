import Image, { type StaticImageData } from "next/image";
import type { Product } from "@/data/products";
import { UnfinishedCircle } from "@/components/ui/UnfinishedCircle";

/**
 * Product visual: book cover, merch photo (or the selected variant's photo), otherwise a
 * typographic placeholder tile in brand colours (never a stock photo).
 * Fills its parent; give the parent an aspect ratio.
 */
export function ProductImage({
  product,
  sizes,
  preload = false,
  image,
  imageAlt,
  className = "",
}: {
  product: Product;
  sizes: string;
  preload?: boolean;
  /** Overrides the product photo (e.g. the selected colour). */
  image?: StaticImageData;
  imageAlt?: string;
  className?: string;
}) {
  if (product.cover) {
    return (
      <div className={`relative h-full w-full bg-sand/60 ${className}`}>
        <div className="absolute inset-[9%] shadow-[0_18px_40px_-18px_rgba(31,56,100,0.5)]">
          <Image
            src={product.cover}
            alt={`${product.name} book cover`}
            fill
            preload={preload}
            placeholder="blur"
            sizes={sizes}
            className="rounded-l-[2px] rounded-r-sm object-contain"
          />
        </div>
      </div>
    );
  }

  const photo = image ?? product.photo;
  if (photo) {
    // Photos shot at the frame's 4:5 fill it edge to edge (no inner gap). Square or wide ones
    // (O Face Cap colours, gift card) are fitted inside so nothing gets cut off.
    const ratio = photo.width / photo.height;
    const fills = ratio > 0.74 && ratio < 0.86;
    return (
      <div className={`relative h-full w-full bg-white ${className}`}>
        <Image
          src={photo}
          alt={imageAlt ?? product.photoAlt ?? product.name}
          fill
          preload={preload}
          placeholder="blur"
          sizes={sizes}
          className={fills ? "object-cover" : "object-contain p-[6%]"}
        />
      </div>
    );
  }

  return (
    <div
      className={`relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-navy text-center text-white ${className}`}
      role="img"
      aria-label={`${product.name}: photo coming soon`}
    >
      <UnfinishedCircle className="absolute size-[78%] text-gold-light" />
      <p className="relative text-[0.62rem] font-bold uppercase tracking-[0.28em] text-gold-light">Accexx Insight</p>
      <p className="relative mt-2 px-6 font-serif text-3xl font-semibold italic leading-tight">{product.placeholderLabel ?? product.name}</p>
      <p className="relative mt-3 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-white/60">Photo coming soon</p>
    </div>
  );
}
