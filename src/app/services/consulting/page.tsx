import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { ButtonLink } from "@/components/ui/Button";
import { ArrowRight } from "@/components/ui/icons";
import { BookingBand } from "@/components/services/Blocks";
import { InquiryForm } from "@/components/services/InquiryForm";
import {
  consultingDayRate,
  consultingEngagements,
  consultingFraming,
  consultingGroups,
  notGradedIntro,
  showConsultingFees,
} from "@/data/consulting";
import consultingMeeting from "../../../../public/images/consulting-meeting.jpg";

export const metadata: Metadata = {
  title: "Consulting",
  description:
    "AXI Consult: 24 consulting engagements across HR & People Systems, Organizational Culture & Strategy, and Education Institutions. We don't just diagnose. We redesign the systems, behaviors, and beliefs that shape your organization's performance.",
  alternates: { canonical: "/services/consulting" },
};

export default function ConsultingPage() {
  return (
    <>
      <PageHero
        eyebrow="AXI Consult"
        title={
          <>
            Consulting that <em className="text-gold">redesigns.</em>
          </>
        }
        intro={
          <>
            <p>
              We don&apos;t just diagnose. We redesign the systems, behaviors, and beliefs that shape your organization&apos;s
              performance.
            </p>
            <p className="mt-3 text-base text-white/75 sm:text-lg">
              {consultingEngagements.length} engagements across HR &amp; people systems, culture &amp; strategy, and education
              institutions.
            </p>
          </>
        }
        image={consultingMeeting}
        imageAlt="A consultant presenting to a team around a meeting table"
        full
        imagePosition="center 35%"
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="#engagements">Browse engagements</ButtonLink>
          <ButtonLink href="#proposal" variant="outline-light">
            Request a proposal
          </ButtonLink>
        </div>
      </PageHero>

      {/* Framing + group jump links -------------------------------------------- */}
      <section id="engagements" className="scroll-mt-20 bg-white pt-16 lg:pt-20" aria-label="Consulting groups">
        <div className="container-site">
          <div className="grid gap-6 rounded-3xl border border-line bg-cream/70 p-6 sm:p-8 lg:grid-cols-2 lg:gap-12" data-reveal>
            <p className="leading-relaxed text-body">{consultingFraming}</p>
            <p className="leading-relaxed text-body">{notGradedIntro}</p>
          </div>
          <nav aria-label="Jump to a group" className="mt-8 flex flex-wrap gap-2">
            {consultingGroups.map((g) => (
              <a
                key={g.id}
                href={`#${g.id}`}
                className="rounded-full border border-navy/15 px-4 py-2 text-sm font-semibold text-navy transition-colors hover:border-gold hover:text-gold-deep"
              >
                {g.title} <span className="text-muted">({g.engagements.length})</span>
              </a>
            ))}
          </nav>
          {showConsultingFees && (
            <p className="mt-6 text-sm text-muted">Standard consulting day rate: {consultingDayRate}.</p>
          )}
        </div>
      </section>

      {/* Groups ---------------------------------------------------------------- */}
      {consultingGroups.map((g, gi) => (
        <section
          key={g.id}
          id={g.id}
          className={`scroll-mt-20 py-16 lg:py-20 ${gi % 2 === 0 ? "bg-white" : "bg-cream"}`}
          aria-labelledby={`${g.id}-heading`}
        >
          <div className="container-site">
            <div className="max-w-3xl" data-reveal>
              <p className="eyebrow">
                {g.engagements.length} engagements · {g.engagements[0].code.split("-")[0]}-01 to {g.engagements.at(-1)?.code}
              </p>
              <h2 id={`${g.id}-heading`} className="heading mt-4 text-3xl sm:text-4xl lg:text-5xl">
                {g.title} <em className="text-gold">Consulting</em>
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-body">{g.intro}</p>
            </div>

            <ul className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {g.engagements.map((e, i) => (
                <li key={e.slug} data-reveal data-reveal-delay={String(Math.min(i, 5) * 60)}>
                  <Link
                    href={`/services/consulting/${e.slug}`}
                    className="group flex h-full flex-col rounded-3xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/60 hover:shadow-lg hover:shadow-navy/5 sm:p-7"
                  >
                    <span className="self-start rounded-full bg-gold-soft px-3 py-1 text-xs font-bold tracking-wider text-gold-deep">
                      {e.code}
                    </span>
                    <h3 className="mt-4 font-serif text-2xl font-semibold leading-snug text-navy">{e.name}</h3>
                    <p className="mt-3 text-[0.95rem] leading-relaxed text-body">{e.description}</p>
                    <dl className="mt-5 space-y-3 border-t border-line pt-5 text-sm">
                      <div>
                        <dt className="font-semibold text-navy">Who it&apos;s for</dt>
                        <dd className="mt-0.5 text-body">{e.whoFor}</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-navy">Duration</dt>
                        <dd className="mt-0.5 text-body">{e.duration}</dd>
                      </div>
                      {showConsultingFees && (
                        <div>
                          <dt className="font-semibold text-navy">Fee</dt>
                          <dd className="mt-0.5 text-body">{e.pricing.fee}</dd>
                        </div>
                      )}
                    </dl>
                    <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-gold-deep group-hover:text-navy">
                      {showConsultingFees ? "View engagement" : "View engagement & request a proposal"}
                      <ArrowRight width={15} height={15} className="shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      {/* Proposal form ---------------------------------------------------------- */}
      <section id="proposal" className="scroll-mt-20 border-t border-line bg-white py-20 lg:py-24" aria-labelledby="proposal-heading">
        <div className="container-site grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          <div data-reveal>
            <p className="eyebrow">Request a proposal</p>
            <h2 id="proposal-heading" className="heading mt-4 text-4xl sm:text-5xl">
              Let&apos;s scope it <em className="text-gold">together.</em>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-body">
              Every engagement is scoped to your organization. Tell us what you&apos;re operating today, where you&apos;re going,
              and where the complexity is getting in the way.
            </p>
          </div>
          <div className="rounded-3xl border border-line bg-cream/60 p-6 sm:p-8" data-reveal data-reveal-delay="100">
            <InquiryForm
              formType="consulting-proposal"
              topicOptions={[
                "Not sure yet, help me choose",
                ...consultingEngagements.map((e) => `${e.code} ${e.name}`),
              ]}
              cta="Request a proposal"
              success="Thank you. Your consulting request has been received. We’ll review the information and follow up."
              messageLabel="What's happening in your organization?"
            />
          </div>
        </div>
      </section>

      <BookingBand
        title={
          <>
            Prefer to <em className="text-gold-light">talk it through?</em>
          </>
        }
        body="Book a discovery call and we'll help you find the right engagement."
      />
    </>
  );
}
