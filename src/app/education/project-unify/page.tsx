import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ButtonLink } from "@/components/ui/Button";
import { CatalogGrid } from "@/components/education/CatalogGrid";
import { CohortPricingNote } from "@/components/education/CohortPricingNote";
import { projectUnifyCertificates, projectUnifyIntro } from "@/data/projectUnify";

export const metadata: Metadata = {
  title: "Project Unify© Certificates",
  description:
    "15 Project Unify© Certificate Programs from Accexx Insight: credentialed workforce certificates built to the HOC Flagship graded standard, delivered globally to cohorts in person or virtually.",

  alternates: { canonical: "/education/project-unify" },
};

export default function ProjectUnifyIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="Education · Project Unify© Certificate Programs"
        title={
          <>
            Project Unify© <em className="text-gold">Certificates</em>
          </>
        }
        intro={<p>{projectUnifyIntro}</p>}
      >
        <ButtonLink href="#programs">See all {projectUnifyCertificates.length} certificates</ButtonLink>
      </PageHero>

      <section id="programs" className="scroll-mt-20 bg-white py-16 lg:py-24" aria-label="Project Unify© Certificates">
        <div className="container-site">
          <CatalogGrid courses={projectUnifyCertificates} basePath="/education/project-unify" />
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
