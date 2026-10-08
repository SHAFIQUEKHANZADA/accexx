import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ButtonLink } from "@/components/ui/Button";
import { ProgramCard } from "@/components/education/ProgramCard";
import { CohortPricingNote } from "@/components/education/CohortPricingNote";
import { hoursLabel, usd } from "@/components/education/format";
import { certifications } from "@/data/certifications";

export const metadata: Metadata = {
  title: "HOC Certifications",
  description:
    "The HOC™ Flagship Certification Suite: 10 certifications built on the Human Operating Codes™ framework, delivered globally to cohorts live virtually or in person.",

  alternates: { canonical: "/education/certifications" },
};

export default function CertificationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Education · HOC™ Flagship Certification Suite"
        title={
          <>
            HOC <em className="text-gold">Certifications</em>
          </>
        }
        intro={<p>The {certifications.length} credential-bearing certifications, each carrying a graded capstone project.</p>}
      >
        <ButtonLink href="#programs">See the certifications</ButtonLink>
      </PageHero>

      <section id="programs" className="scroll-mt-20 bg-white py-16 lg:py-24" aria-label="Certifications">
        <div className="container-site grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c) => (
            <div key={c.slug} data-reveal>
              <ProgramCard
                href={`/education/certifications/${c.slug}`}
                code={c.code}
                badge={c.selectiveEntry ? "Advanced · selective entry" : undefined}
                name={c.name}
                description={c.tagline}
                meta={[hoursLabel(c.contactHours), c.format]}
                price={`from ${usd(c.prices.virtual)} per cohort`}
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
          <div className="mt-8">
            <CohortPricingNote />
          </div>
        </div>
      </section>
    </>
  );
}
