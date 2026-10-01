import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";
import { UnfinishedCircle } from "@/components/ui/UnfinishedCircle";
import { GoldWaves } from "@/components/home/GoldWaves";

/**
 * Page header used by every inner page: eyebrow, title, intro, optional photo.
 * `full`: the photo fills the whole header edge to edge, text on top (Dr. A, 2026-10-01:
 * "the picture should be full" for Consulting, Speaking and Education).
 * `waves`: no photo, the home page's dark navy + gold light-waves (Dr. A, 2026-10-02, About page).
 */
export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt = "",
  full = false,
  waves = false,
  imagePosition = "center",
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  image?: StaticImageData;
  imageAlt?: string;
  full?: boolean;
  waves?: boolean;
  /** CSS object-position for the full-bleed photo, e.g. "60% center". */
  imagePosition?: string;
  children?: ReactNode;
}) {
  if ((full && image) || waves) {
    return (
      <section
        className={`relative isolate flex items-end overflow-hidden bg-night ${waves ? "min-h-[64svh] lg:min-h-[70svh]" : "min-h-[72svh] lg:min-h-[82svh]"}`}
      >
        {waves ? (
          <div aria-hidden className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_65%,rgba(31,56,100,0.75),transparent_65%)]" />
            <GoldWaves className="absolute inset-0 size-full" />
            <div className="absolute inset-0 bg-linear-to-r from-night via-night/70 to-transparent lg:via-night/40" />
          </div>
        ) : (
          image && (
            <>
              <Image
                src={image}
                alt={imageAlt}
                fill
                preload
                placeholder="blur"
                sizes="100vw"
                className="-z-10 object-cover"
                style={{ objectPosition: imagePosition }}
              />
              <div aria-hidden className="absolute inset-0 -z-10 bg-linear-to-t from-night/95 via-night/45 to-night/10" />
              <div aria-hidden className="absolute inset-0 -z-10 bg-linear-to-r from-night/80 via-night/30 to-transparent" />
            </>
          )
        )}
        <div className="container-site w-full pb-14 pt-32 sm:pb-16 lg:pb-20">
          <div className="max-w-3xl">
            <p className="eyebrow animate-fade-up text-gold-light!">{eyebrow}</p>
            <h1
              className="mt-4 animate-fade-up font-serif text-[2.6rem] font-semibold leading-[1.05] text-white sm:text-6xl lg:text-[4.2rem] [&_em]:text-gold-light"
              style={{ animationDelay: "80ms" }}
            >
              {title}
            </h1>
            {intro && (
              <div
                className="mt-6 max-w-2xl animate-fade-up text-lg leading-relaxed text-white/90 sm:text-xl"
                style={{ animationDelay: "160ms" }}
              >
                {intro}
              </div>
            )}
            {children && (
              <div className="mt-8 animate-fade-up" style={{ animationDelay: "240ms" }}>
                {children}
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }

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
          <h1
            className="heading mt-4 animate-fade-up text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-[4rem]"
            style={{ animationDelay: "80ms" }}
          >
            {title}
          </h1>
          {intro && (
            <div
              className="mt-6 max-w-2xl animate-fade-up text-lg leading-relaxed text-body sm:text-xl"
              style={{ animationDelay: "160ms" }}
            >
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
          <div
            className="relative aspect-[4/3] animate-fade-up overflow-hidden rounded-[2rem] shadow-xl shadow-navy/15"
            style={{ animationDelay: "160ms" }}
          >
            <Image
              src={image}
              alt={imageAlt}
              fill
              preload
              placeholder="blur"
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover"
            />
          </div>
        )}
      </div>
    </section>
  );
}
