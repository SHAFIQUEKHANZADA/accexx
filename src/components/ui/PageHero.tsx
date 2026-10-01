import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";
import { UnfinishedCircle } from "@/components/ui/UnfinishedCircle";

/** Bright page header used by every inner page: eyebrow, title, intro, optional photo. */
export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt = "",
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  image?: StaticImageData;
  imageAlt?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-cream">
      <UnfinishedCircle className="pointer-events-none absolute -right-32 -top-32 size-[30rem] text-gold/50" />
      <div
        className={`container-site relative grid items-center gap-10 py-14 sm:py-16 lg:py-20 ${
          image ? "lg:grid-cols-[minmax(0,6fr)_minmax(0,5fr)] lg:gap-16" : ""
        }`}
      >
        <div className={image ? "" : "max-w-3xl"}>
          <p className="eyebrow animate-fade-up">{eyebrow}</p>
          <h1 className="heading mt-4 animate-fade-up text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-[4rem]" style={{ animationDelay: "80ms" }}>
            {title}
          </h1>
          {intro && (
            <div className="mt-6 max-w-2xl animate-fade-up text-lg leading-relaxed text-body sm:text-xl" style={{ animationDelay: "160ms" }}>
              {intro}
            </div>
          )}
          {children && (
            <div className="mt-8 animate-fade-up" style={{ animationDelay: "240ms" }}>
              {children}
            </div>
          )}
        </div>
        {image && (
          <div className="relative aspect-[4/3] animate-fade-up overflow-hidden rounded-[2rem] shadow-xl shadow-navy/15" style={{ animationDelay: "160ms" }}>
            <Image src={image} alt={imageAlt} fill preload placeholder="blur" sizes="(min-width: 1024px) 42vw, 100vw" className="object-cover" />
          </div>
        )}
      </div>
    </section>
  );
}
