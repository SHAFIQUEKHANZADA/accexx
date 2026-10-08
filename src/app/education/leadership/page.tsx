import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ButtonLink } from "@/components/ui/Button";
import { ProgramCard } from "@/components/education/ProgramCard";
import { CohortPricingNote } from "@/components/education/CohortPricingNote";
import { hoursLabel, usd } from "@/components/education/format";
import { leadershipPrograms } from "@/data/leadership";

export const metadata: Metadata = {
  title: "Leadership Development",
  description:
    "12 Leadership Development programs from Accexx Insight: flexible, high-impact workshops targeting specific leadership skills, delivered globally in person or virtually. Certificate of Participation.",
  alternates: { canonical: "/education/leadership" },
};

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Education · Leadership Development"
        title={
          <>
            Leadership <em className="text-gold">Development</em>
          </>
        }
        intro={
          <p>
            {leadershipPrograms.length} flexible, high-impact workshops targeting specific leadership skills. Stand-alone or
            combinable with each other. Delivered globally, in person or virtually. Attendees receive a Certificate of
            Participation.
          </p>
        }
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="#programs">See the programs</ButtonLink>
          <ButtonLink href="#programs" variant="outline">
            Request a Cohort
          </ButtonLink>
        </div>
      </PageHero>

      <section id="programs" className="scroll-mt-20 bg-white py-16 lg:py-24" aria-label="Leadership Development programs">
        <div className="container-site grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {leadershipPrograms.map((p) => (
            <div key={p.slug} data-reveal>
              <ProgramCard
                href={`/education/leadership/${p.slug}`}
                code={p.code}
                name={p.name}
                description={p.description}
                meta={[hoursLabel(p.cohort.contactHours), "In-person or virtual"]}
                price={`from ${usd(p.cohort.virtual)} per cohort`}
              />
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-cream py-16 lg:py-20" aria-labelledby="pricing-heading">
        <div className="container-site">
          <h2 id="pricing-heading" className="heading text-3xl sm:text-4xl">
            How cohort pricing works
          </h2>
          <p className="mt-4 max-w-2xl text-body">
            Each program also has a self-paced companion track; self-paced pricing is coming soon.
          </p>
          <div className="mt-8">
            <CohortPricingNote />
          </div>
        </div>
      </section>
    </>
  );
}
