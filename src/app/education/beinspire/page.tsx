import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ButtonLink } from "@/components/ui/Button";
import { ProgramCard } from "@/components/education/ProgramCard";
import { CohortPricingNote } from "@/components/education/CohortPricingNote";
import { CohortRequestForm } from "@/components/education/CohortRequestForm";
import { hoursLabel, usd } from "@/components/education/format";
import { beinspirePricing, beinspireWorkshops } from "@/data/beinspire";
import { links } from "@/lib/site";

export const metadata: Metadata = {
  title: "BEInspire© Career Series",
  description:
    "The BEInspire© Career Series: 10 single-session career-readiness workshops for students and early-career professionals, 3 contact hours each, in person or live-virtual.",
  alternates: { canonical: "/education/beinspire" },
};

export default function BeinspirePage() {
  const { bundle } = beinspirePricing;
  return (
    <>
      <PageHero
        eyebrow="Education · BEInspire© Career Series"
        title={
          <>
            BEInspire© <em className="text-gold">Career Series</em>
          </>
        }
        intro={
          <p>
            {beinspireWorkshops.length} single-session career-readiness workshops for students and early-career
            professionals. Each runs {beinspirePricing.contactHours} contact hours, in-person or live-virtual.
          </p>
        }
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="#programs">See the workshops</ButtonLink>
          <ButtonLink href="#request" variant="outline">
            Request a Cohort
          </ButtonLink>
        </div>
      </PageHero>

      <section id="programs" className="scroll-mt-20 bg-white py-16 lg:py-24" aria-label="BEInspire workshops">
        <div className="container-site">
          <div className="mb-10 flex flex-col gap-4 rounded-3xl border border-gold/40 bg-gold-soft p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <p className="eyebrow">Full series bundle</p>
              <p className="heading mt-2 text-2xl sm:text-3xl">
                All {beinspireWorkshops.length} workshops for {usd(bundle.price)}{" "}
                <s className="font-sans text-base font-normal text-muted">{usd(bundle.individualTotal)}</s>
              </p>
              <p className="mt-1 text-sm text-body">Booked together as a full career-readiness series.</p>
            </div>
            <ButtonLink href="#request" className="shrink-0">
              Request the series
            </ButtonLink>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {beinspireWorkshops.map((w) => (
              <div key={w.slug} data-reveal>
                <ProgramCard
                  href={`/education/beinspire/${w.slug}`}
                  code={w.code}
                  name={w.name}
                  description={w.description}
                  meta={[hoursLabel(w.live.contactHours), w.live.delivery]}
                  price={`from ${usd(beinspirePricing.virtual)} per cohort`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-cream py-16 lg:py-20" aria-labelledby="pricing-heading">
        <div className="container-site">
          <h2 id="pricing-heading" className="heading text-3xl sm:text-4xl">
            How cohort pricing works
          </h2>
          <p className="mt-4 max-w-2xl text-body">
            BEInspire© cohorts take up to {beinspirePricing.cohortCap} participants. Self-paced pricing is coming soon.
          </p>
          <div className="mt-8">
            <CohortPricingNote />
          </div>
        </div>
      </section>

      <section id="request" className="scroll-mt-20 border-t border-line bg-white py-16 lg:py-24" aria-labelledby="request-heading">
        <div className="container-site grid gap-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,7fr)] lg:gap-16">
          <div>
            <p className="eyebrow">For your school or organization</p>
            <h2 id="request-heading" className="heading mt-4 text-4xl sm:text-5xl">
              Request the <em className="text-gold">full series</em>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-body">
              Tell us about your group and we&apos;ll follow up to plan the series. To book a single workshop, open its page.
            </p>
          </div>
          <div className="rounded-3xl border border-line bg-cream p-6 sm:p-8">
            <CohortRequestForm
              programCode="BEI-SERIES"
              programName="BEInspire© Career Series (full series bundle)"
              formats={["In-Person", "Live Virtual"]}
            />
          </div>
        </div>
      </section>
    </>
  );
}
