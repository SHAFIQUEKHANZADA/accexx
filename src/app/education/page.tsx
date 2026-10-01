import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { ButtonLink } from "@/components/ui/Button";
import { ArrowRight } from "@/components/ui/icons";
import { CohortPricingNote } from "@/components/education/CohortPricingNote";
import { certifications } from "@/data/certifications";
import { leadershipPrograms } from "@/data/leadership";
import { beinspireWorkshops } from "@/data/beinspire";
import { projectUnifyCertificates } from "@/data/projectUnify";
import { hocShortCourses } from "@/data/shortCourses";
import { trainingShopCourses } from "@/data/trainingShop";
import { links } from "@/lib/site";
import lecture from "../../../public/images/education-lecture.jpg";

export const metadata: Metadata = {
  title: "Education",
  description:
    "Certifications, leadership development, career workshops and short courses from Accexx Insight, all built on the Human Operating Code™ framework and delivered to cohorts in person or virtually.",
  alternates: { canonical: "/education" },
};

/** Family descriptions: glossary section intros, the LD curriculum guide, and the module document's intros / track names. */
const families = [
  {
    href: "/education/certifications",
    title: "HOC Certifications",
    count: certifications.length,
    unit: "certifications",
    text: "The HOC™ Flagship Certification Suite: credential-bearing certifications, each carrying a graded capstone project and recommended CEUs.",
  },
  {
    href: "/education/leadership",
    title: "Leadership Development",
    count: leadershipPrograms.length,
    unit: "programs",
    text: "Flexible, high-impact workshops targeting specific leadership skills. Stand-alone or combinable with each other. Certificate of Participation.",
  },
  {
    href: "/education/beinspire",
    title: "BEInspire© Career Series",
    count: beinspireWorkshops.length,
    unit: "workshops",
    text: "Single-session career-readiness workshops for students and early-career professionals.",
  },
  {
    href: "/education/project-unify",
    title: "Project Unify© Certificates",
    count: projectUnifyCertificates.length,
    unit: "certificates",
    text: "Credentialed certificate programs, built to the HOC Flagship graded standard: measurable objectives, formal contact hours, and a graded capstone.",
  },
  {
    href: "/education/short-courses",
    title: "HOC Short Courses & Workshops",
    count: hocShortCourses.length,
    unit: "courses",
    text: "Personal Mastery & Self-Leadership · Emotional Intelligence & Relationship Systems · High-Performance Habits & Productivity · Change, Resilience & Adaptability.",
  },
  {
    href: "/education/training-shop",
    title: "Project Unify© Training Shop",
    count: trainingShopCourses.length,
    unit: "courses",
    text: "Lifelong Learning Pathways · Career Services & Development · Organization & Workforce Development · Practical AI Literacy.",
  },
];

export default function EducationPage() {
  return (
    <>
      <PageHero
        eyebrow="Education"
        title={
          <>
            Programs built on the <em className="text-gold">Human Operating Code™</em>
          </>
        }
        intro={
          <p>
            The Human Operating Code™ is the proprietary framework underlying every Accexx Insight program. Choose a program
            family below, then bring it to your team as a cohort, in person or virtually.
          </p>
        }
        image={lecture}
        imageAlt="A presenter leading a session in a lecture room"
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="#programs">Explore programs</ButtonLink>
          <ButtonLink href={links.coursePortal} variant="outline">
            Student Login
          </ButtonLink>
        </div>
      </PageHero>

      <section id="programs" className="scroll-mt-20 bg-white py-16 lg:py-24" aria-labelledby="programs-heading">
        <div className="container-site">
          <p className="eyebrow">Program families</p>
          <h2 id="programs-heading" className="heading mt-4 text-4xl sm:text-5xl">
            Six ways to <em className="text-gold">learn with Accexx.</em>
          </h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {families.map((f, i) => (
              <Link
                key={f.href}
                href={f.href}
                data-reveal
                data-reveal-delay={String((i % 3) * 80)}
                className="group flex flex-col rounded-3xl border border-line bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/60 hover:shadow-lg hover:shadow-navy/5"
              >
                <p className="flex items-baseline gap-2">
                  <span className="font-serif text-5xl font-semibold text-gold">{f.count}</span>
                  <span className="text-sm font-semibold uppercase tracking-[0.14em] text-muted">{f.unit}</span>
                </p>
                <h3 className="heading mt-4 text-2xl">{f.title}</h3>
                <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-body">{f.text}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-deep group-hover:text-navy">
                  View programs
                  <ArrowRight width={16} height={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-cream py-16 lg:py-24" aria-labelledby="pricing-heading">
        <div className="container-site">
          <div className="max-w-3xl">
            <p className="eyebrow">How pricing works</p>
            <h2 id="pricing-heading" className="heading mt-4 text-4xl sm:text-5xl">
              One price for <em className="text-gold">your whole group.</em>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-body">
              Programs are booked by an organization for its group and priced per cohort. Each program page lists its
              in-person, virtual and additional-participant prices.
            </p>
          </div>
          <div className="mt-10">
            <CohortPricingNote />
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact">Talk to us about a cohort</ButtonLink>
            <ButtonLink href={links.coursePortal} variant="outline">
              Go to the course portal
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
