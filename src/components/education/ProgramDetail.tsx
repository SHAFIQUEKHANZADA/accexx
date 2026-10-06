import Link from "next/link";
import type { ReactNode } from "react";
import { PageHero } from "@/components/ui/PageHero";
import { ButtonLink } from "@/components/ui/Button";
import { CohortRequestForm } from "./CohortRequestForm";
import { hrs } from "./format";

export type Fact = { label: string; value: ReactNode };
export type PriceRow = { label: string; value: string; note?: string };

/**
 * Public program page (teaser only): title, code, one-liner, audience, hours, format, credential,
 * module titles, outcome and price. Objectives, lesson detail, capstones and materials stay in the
 * course portal, so they are never passed in here.
 */
export function ProgramDetail({
  family,
  code,
  name,
  tagline,
  badge,
  facts,
  audience,
  prerequisites,
  facilitator,
  outcome,
  outcomes,
  modulesHeading = "Modules",
  modules,
  prices,
  priceNotes,
  enrollHref,
  selfPacedNote,
  formats,
  aside,
}: {
  family: { label: string; href: string; indexLabel: string };
  code?: string;
  name: string;
  tagline: string;
  badge?: string;
  facts: Fact[];
  audience?: string;
  prerequisites?: string;
  facilitator?: string;
  outcome?: string;
  outcomes?: string[];
  modulesHeading?: string;
  modules: { number: number; title: string; hours?: number }[];
  prices: PriceRow[];
  priceNotes: string[];
  enrollHref?: string;
  selfPacedNote?: string;
  formats?: string[];
  /** Extra content under the price card (e.g. a series bundle). */
  aside?: ReactNode;
}) {
  const programCode = code ?? name;

  return (
    <>
      <PageHero eyebrow={family.label} title={<span className="break-words">{name}</span>} intro={tagline}>
        {(code || badge) && (
          <div className="mb-6 flex flex-wrap gap-2">
            {code && (
              <span className="rounded-full border border-navy/20 bg-white px-3 py-1 text-xs font-bold tracking-wider text-navy">{code}</span>
            )}
            {badge && <span className="rounded-full bg-gold-soft px-3 py-1 text-xs font-bold tracking-wider text-gold-deep">{badge}</span>}
          </div>
        )}
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="#request">Request a Cohort</ButtonLink>
        </div>
      </PageHero>

      <section className="bg-white py-16 lg:py-24">
        <div className="container-site grid gap-12 lg:grid-cols-[minmax(0,7fr)_minmax(0,4fr)] lg:gap-16">
          <div className="min-w-0 space-y-12">
            <div data-reveal>
              <h2 className="heading text-3xl">At a glance</h2>
              <dl className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
                {facts.map((f, i) => (
                  <div
                    key={f.label}
                    className={`bg-white px-5 py-4 ${facts.length % 2 === 1 && i === facts.length - 1 ? "sm:col-span-2" : ""}`}
                  >
                    <dt className="text-xs font-bold uppercase tracking-[0.14em] text-muted">{f.label}</dt>
                    <dd className="mt-1 font-semibold text-ink">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {(audience || prerequisites) && (
              <div data-reveal className="space-y-6">
                {audience && (
                  <div>
                    <h2 className="heading text-3xl">Who it&apos;s for</h2>
                    <p className="mt-3 text-lg leading-relaxed text-body">{audience}</p>
                  </div>
                )}
                {prerequisites && (
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-navy">Prerequisites</h3>
                    <p className="mt-2 leading-relaxed text-body">{prerequisites}</p>
                  </div>
                )}
              </div>
            )}

            {facilitator && (
              <div data-reveal>
                <h2 className="heading text-3xl">Facilitator</h2>
                <p className="mt-3 text-lg leading-relaxed text-body">{facilitator}</p>
              </div>
            )}

            {(outcome || (outcomes && outcomes.length > 0)) && (
              <div data-reveal>
                <h2 className="heading text-3xl">{outcome ? "Expected outcome" : "Program outcomes"}</h2>
                {outcome && <p className="mt-3 text-lg leading-relaxed text-body">{outcome}</p>}
                {outcomes && (
                  <ul className="mt-4 space-y-2.5">
                    {outcomes.map((o) => (
                      <li key={o} className="flex gap-3 leading-relaxed text-body">
                        <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-gold" />
                        {o}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}

            <div data-reveal>
              <h2 className="heading text-3xl">{modulesHeading}</h2>
              <ol className="mt-6 divide-y divide-line overflow-hidden rounded-2xl border border-line">
                {modules.map((m) => (
                  <li key={m.number} className="flex items-start gap-4 bg-white px-5 py-4">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-navy-soft text-sm font-bold text-navy">
                      {m.number}
                    </span>
                    <span className="min-w-0 flex-1 pt-1 font-medium text-ink">{m.title}</span>
                    {m.hours !== undefined && <span className="shrink-0 pt-1 text-sm font-semibold text-gold-deep">{hrs(m.hours)}</span>}
                  </li>
                ))}
              </ol>
              <p className="mt-4 text-sm text-muted">
                Full curriculum, materials and assessments are provided to enrolled participants in the course portal.
              </p>
            </div>
          </div>

          <aside className="min-w-0 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-3xl border border-line bg-cream p-6 shadow-sm sm:p-8">
              <p className="eyebrow">Cohort pricing</p>
              <dl className="mt-5 divide-y divide-line">
                {prices.map((p) => (
                  <div key={p.label} className="flex items-baseline justify-between gap-4 py-3">
                    <dt className="text-sm text-body">
                      {p.label}
                      {p.note && <span className="block text-xs text-muted">{p.note}</span>}
                    </dt>
                    <dd className="shrink-0 text-lg font-semibold text-navy">{p.value}</dd>
                  </div>
                ))}
              </dl>
              <ul className="mt-4 space-y-1.5 text-xs leading-relaxed text-muted">
                {priceNotes.map((n) => (
                  <li key={n}>{n}</li>
                ))}
              </ul>
              {selfPacedNote && (
                <p className="mt-5 rounded-xl bg-white px-4 py-3 text-sm text-body">
                  <span className="font-semibold text-navy">Self-paced: </span>
                  {selfPacedNote}
                </p>
              )}
              <div className="mt-6 flex flex-col gap-3">
                <ButtonLink href="#request">Request a Cohort</ButtonLink>
              </div>
            </div>
            {aside}
          </aside>
        </div>
      </section>

      <section id="request" className="scroll-mt-20 border-t border-line bg-cream py-16 lg:py-24" aria-labelledby="request-heading">
        <div className="container-site grid gap-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,7fr)] lg:gap-16">
          <div>
            <p className="eyebrow">For your team or organization</p>
            <h2 id="request-heading" className="heading mt-4 text-4xl sm:text-5xl">
              Request a <em className="text-gold">Cohort</em>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-body">
              Tell us about your group and we&apos;ll follow up to plan {name}.
            </p>
            <Link href={family.href} className="mt-8 inline-block text-sm font-semibold text-gold-deep hover:text-navy">
              &larr; {family.indexLabel}
            </Link>
          </div>
          <div className="rounded-3xl border border-line bg-white p-6 shadow-sm sm:p-8">
            <CohortRequestForm programCode={programCode} programName={name} formats={formats} />
          </div>
        </div>
      </section>
    </>
  );
}
