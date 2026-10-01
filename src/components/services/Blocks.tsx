import type { ReactNode } from "react";
import { ButtonLink } from "@/components/ui/Button";
import { links } from "@/lib/site";

/** Gold-tick list used across the services pages. */
export function CheckList({ items, className = "" }: { items: string[]; className?: string }) {
  return (
    <ul className={`space-y-3 ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-[0.98rem] leading-relaxed text-body">
          <svg aria-hidden viewBox="0 0 20 20" className="mt-1 size-4 shrink-0 text-gold" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M4 10.5l4 4 8-9" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** White card with a small uppercase title. */
export function InfoCard({ title, children, className = "" }: { title: string; children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-3xl border border-line bg-white p-6 sm:p-8 ${className}`}>
      <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-navy">{title}</h3>
      <div className="mt-5">{children}</div>
    </div>
  );
}

/** Closing booking band shared by the services pages. */
export function BookingBand({
  title,
  body,
  cta = "Book a Discovery Call",
  secondary,
}: {
  title: ReactNode;
  body: ReactNode;
  cta?: string;
  secondary?: { href: string; label: string };
}) {
  return (
    <section className="bg-navy py-16 text-white lg:py-20">
      <div className="container-site flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl" data-reveal>
          <h2 className="font-serif text-4xl font-semibold leading-tight sm:text-5xl">{title}</h2>
          <p className="mt-4 text-lg text-white/80">{body}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row" data-reveal data-reveal-delay="100">
          <ButtonLink href={links.booking}>{cta}</ButtonLink>
          {secondary && (
            <ButtonLink href={secondary.href} variant="outline-light">
              {secondary.label}
            </ButtonLink>
          )}
        </div>
      </div>
    </section>
  );
}
