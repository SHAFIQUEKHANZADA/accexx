import Image from "next/image";
import type { GalleryPhoto } from "@/data/events";

/** Simple responsive photo grid; the first photo is featured larger on wide screens. */
export function Gallery({ photos, featureFirst = true }: { photos: GalleryPhoto[]; featureFirst?: boolean }) {
  return (
    <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
      {photos.map((p, i) => {
        const feature = featureFirst && i === 0;
        return (
          <li
            key={p.src}
            data-reveal
            data-reveal-delay={String(Math.min(i, 6) * 60)}
            className={`relative overflow-hidden rounded-2xl bg-sand sm:rounded-3xl ${
              feature ? "col-span-2 row-span-2 aspect-square lg:aspect-auto" : "aspect-square"
            }`}
          >
            <Image
              src={p.src}
              alt={p.alt}
              fill
              sizes={feature ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 25vw, 50vw"}
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </li>
        );
      })}
    </ul>
  );
}
