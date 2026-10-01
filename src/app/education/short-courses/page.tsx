import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ButtonLink } from "@/components/ui/Button";
import { CatalogGrid } from "@/components/education/CatalogGrid";
import { CohortPricingNote } from "@/components/education/CohortPricingNote";
import { hocShortCourses, shortCoursesIntro } from "@/data/shortCourses";

export const metadata: Metadata = {
  title: "HOC Short Courses & Workshops",
  description:
    "8 HOC Short Courses & Workshops from Accexx Insight in self-leadership, emotional intelligence, productivity, resilience and change. Certificate of Participation.",
  alternates: { canonical: "/education/short-courses" },
};

export default function ShortCourseIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="Education · HOC Short Courses & Workshops"
        title={
          <>
            HOC Short Courses <em className="text-gold">&amp; Workshops</em>
          </>
        }
        intro={<p>{shortCoursesIntro}</p>}
      >
        <ButtonLink href="#programs">See all {hocShortCourses.length} courses</ButtonLink>
      </PageHero>

      <section id="programs" className="scroll-mt-20 bg-white py-16 lg:py-24" aria-label="HOC Short Courses & Workshops">
        <div className="container-site">
          <CatalogGrid courses={hocShortCourses} basePath="/education/short-courses" />
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
