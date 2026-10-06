import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { ButtonLink } from "@/components/ui/Button";
import { ArrowRight } from "@/components/ui/icons";
import { CheckList, InfoCard } from "@/components/services/Blocks";
import { InquiryForm } from "@/components/services/InquiryForm";
import {
  consultingEngagements,
  getEngagement,
  getEngagementGroup,
  notGradedNote,
  showConsultingFees,
} from "@/data/consulting";
import { links } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return consultingEngagements.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const e = getEngagement(slug);
  if (!e) return {};
  return {
    title: `${e.name} (${e.code}) | Consulting`,
    description: e.description,
    alternates: { canonical: `/services/consulting/${e.slug}` },
  };
}

export default async function EngagementPage({ params }: Props) {
  const { slug } = await params;
  const e = getEngagement(slug);
  const group = getEngagementGroup(slug);
  if (!e || !group) notFound();

  const idx = group.engagements.findIndex((x) => x.slug === e.slug);
  const others = group.engagements.filter((x) => x.slug !== e.slug);
  // The next three engagements in the group, wrapping around.
  const related = [...others.slice(idx), ...others.slice(0, idx)].slice(0, 3);

  return (
    <>
      <nav aria-label="Breadcrumb" className="border-b border-line bg-white">
        <ol className="container-site flex flex-wrap items-center gap-x-2 gap-y-1 py-3 text-sm text-muted">
          <li>
            <Link href="/services" className="hover:text-navy">
              Services
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li>
            <Link href="/services/consulting" className="hover:text-navy">
              Consulting
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li>
            <Link href={`/services/consulting#${group.id}`} className="hover:text-navy">
              {group.title}
            </Link>
          </li>
        </ol>
      </nav>

      <PageHero
        eyebrow={`AXI Consult · ${e.code}`}
        title={e.name}
        intro={e.description}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="#proposal">Request a proposal</ButtonLink>
          <ButtonLink href={links.booking} variant="outline">
            Book a discovery call
          </ButtonLink>
        </div>
      </PageHero>

      {/* At a glance -------------------------------------------------------------- */}
      <section className="bg-white pt-14 lg:pt-16" aria-label="At a glance">
        <div className="container-site">
          <dl className={`grid gap-4 ${showConsultingFees ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
            <div className="rounded-3xl border border-line bg-cream/60 p-6">
              <dt className="text-xs font-bold uppercase tracking-[0.16em] text-gold-deep">Who it&apos;s for</dt>
              <dd className="mt-2 leading-relaxed text-ink">{e.whoFor}</dd>
            </div>
            <div className="rounded-3xl border border-line bg-cream/60 p-6">
              <dt className="text-xs font-bold uppercase tracking-[0.16em] text-gold-deep">Duration</dt>
              <dd className="mt-2 leading-relaxed text-ink">{e.duration}</dd>
            </div>
            {showConsultingFees && (
              <div className="rounded-3xl border border-line bg-cream/60 p-6">
                <dt className="text-xs font-bold uppercase tracking-[0.16em] text-gold-deep">Fee</dt>
                <dd className="mt-2 leading-relaxed text-ink">
                  {e.pricing.fee}
                  <span className="mt-1 block text-sm text-muted">Est. {e.pricing.estimatedDays}</span>
                </dd>
              </div>
            )}
          </dl>
        </div>
      </section>

      {/* Objectives + process ------------------------------------------------------ */}
      <section className="bg-white py-14 lg:py-16" aria-labelledby="objectives-heading">
        <div className="container-site grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          <div data-reveal>
            <p className="eyebrow">Engagement objectives</p>
            <h2 id="objectives-heading" className="heading mt-4 text-3xl sm:text-4xl">
              What we&apos;ll <em className="text-gold">achieve.</em>
            </h2>
            <CheckList items={e.objectives} className="mt-7" />
          </div>

          <div data-reveal data-reveal-delay="100">
            <p className="eyebrow">Engagement process</p>
            <h2 className="heading mt-4 text-3xl sm:text-4xl">
              How it <em className="text-gold">unfolds.</em>
            </h2>
            <ol className="relative mt-8 ml-3.5 space-y-7 border-l-2 border-gold/30 pl-7 sm:pl-8">
              {e.process.map((p, i) => (
                <li key={p.phase} className="relative">
                  <span
                    aria-hidden
                    className="absolute -left-[2.7rem] top-0.5 flex size-7 items-center justify-center rounded-full bg-gold text-xs font-bold text-white sm:-left-[2.95rem]"
                  >
                    {i + 1}
                  </span>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="font-serif text-xl font-semibold text-navy">{p.phase}</h3>
                    <span className="rounded-full bg-navy-soft px-2.5 py-0.5 text-xs font-semibold text-navy">{p.timing}</span>
                  </div>
                  <p className="mt-2 leading-relaxed text-body">{p.whatHappens}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Tools / deliverables / qualifications / success -------------------------- */}
      <section className="bg-cream py-16 lg:py-20" aria-label="Engagement details">
        <div className="container-site grid gap-5 md:grid-cols-2">
          <InfoCard title="Tools & frameworks used">
            <CheckList items={e.tools} />
          </InfoCard>
          <InfoCard title="Deliverables">
            <CheckList items={e.deliverables} />
          </InfoCard>
          <InfoCard title="Consultant qualifications">
            <CheckList items={e.qualifications} />
          </InfoCard>
          <InfoCard title="Success measures">
            <p className="mb-5 rounded-2xl bg-gold-soft px-4 py-3 text-sm leading-relaxed text-gold-deep">{notGradedNote}</p>
            <CheckList items={e.successMeasures} />
          </InfoCard>
        </div>
      </section>

      {/* Proposal form ------------------------------------------------------------ */}
      <section id="proposal" className="scroll-mt-20 bg-white py-20 lg:py-24" aria-labelledby="proposal-heading">
        <div className="container-site grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          <div>
            <p className="eyebrow">Request a proposal</p>
            <h2 id="proposal-heading" className="heading mt-4 text-3xl sm:text-4xl">
              {e.name}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-body">
              Every engagement is scoped to your organization. Share a little about your context and we&apos;ll prepare a
              proposal.
            </p>
          </div>
          <div className="rounded-3xl border border-line bg-cream/60 p-6 sm:p-8">
            <InquiryForm
              formType="consulting-proposal"
              topic={`${e.code} ${e.name}`}
              cta="Request a proposal"
              success="Thank you. Your consulting request has been received. We’ll review the information and follow up."
              messageLabel="What's happening in your organization?"
            />
          </div>
        </div>
      </section>

      {/* Related ------------------------------------------------------------------- */}
      {related.length > 0 && (
        <section className="border-t border-line bg-cream py-16 lg:py-20" aria-labelledby="related-heading">
          <div className="container-site">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <h2 id="related-heading" className="heading text-3xl">
                More in {group.title}
              </h2>
              <ButtonLink href="/services/consulting" variant="link" size="sm">
                All consulting engagements
              </ButtonLink>
            </div>
            <ul className="mt-8 grid gap-4 md:grid-cols-3">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link
                    href={`/services/consulting/${r.slug}`}
                    className="group flex h-full flex-col rounded-3xl border border-line bg-white p-6 transition-colors hover:border-gold/60"
                  >
                    <span className="text-xs font-bold tracking-wider text-gold-deep">{r.code}</span>
                    <span className="mt-2 font-serif text-xl font-semibold leading-snug text-navy">{r.name}</span>
                    <span className="mt-3 text-sm text-muted">{r.duration}</span>
                    <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-gold-deep group-hover:text-navy">
                      View <ArrowRight width={14} height={14} />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
}
