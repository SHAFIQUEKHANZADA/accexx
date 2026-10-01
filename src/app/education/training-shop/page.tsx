import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ButtonLink } from "@/components/ui/Button";
import { CatalogGrid } from "@/components/education/CatalogGrid";
import { CohortPricingNote } from "@/components/education/CohortPricingNote";
import { trainingShopCourses, trainingShopIntro } from "@/data/trainingShop";

export const metadata: Metadata = {
  title: "Project Unify© Training Shop",
  description:
    "Project Unify© Training Shop courses from Accexx Insight: lifelong learning, career development, workforce collaboration and practical AI literacy. Certificate of Participation.",
  alternates: { canonical: "/education/training-shop" },
};

export default function TrainingShopIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="Education · Project Unify© Training Shop"
        title={
          <>
            Project Unify© <em className="text-gold">Training Shop</em>
          </>
        }
        intro={<p>{trainingShopIntro}</p>}
      >
        <ButtonLink href="#programs">See all {trainingShopCourses.length} courses</ButtonLink>
      </PageHero>

      <section id="programs" className="scroll-mt-20 bg-white py-16 lg:py-24" aria-label="Project Unify© Training Shop">
        <div className="container-site">
          <CatalogGrid courses={trainingShopCourses} basePath="/education/training-shop" />
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
