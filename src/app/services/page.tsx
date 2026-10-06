import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { ButtonLink } from "@/components/ui/Button";
import { ArrowRight, Cap, Compass, Mic, Spark } from "@/components/ui/icons";
import { BookingBand, CheckList } from "@/components/services/Blocks";
import { consultingEngagements } from "@/data/consulting";
import { coachingStreams } from "@/data/coaching";
import { links } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Consulting, coaching, speaking and education from Accexx Insight. We help leaders, entrepreneurs, professionals, and organizations turn uncertainty into clarity, strategy, action, and measurable progress.",
  alternates: { canonical: "/services" },
};

const services = [
  {
    title: "Consulting",
    href: "/services/consulting",
    icon: Compass,
    lead: "We don't just diagnose. We redesign the systems, behaviors, and beliefs that shape your organization's performance.",
    body: "Strategic transformation for organizations ready to break through limitations and operate at their highest level.",
    meta: `${consultingEngagements.length} engagements · HR & People Systems · Culture & Strategy · Education Institutions`,
    cta: "Explore consulting",
  },
  {
    title: "Coaching",
    href: "/services/coaching",
    icon: Spark,
    lead: "Coaching that goes deeper than goals. We work at the level of beliefs, stories, and habits: your Human Operating System.",
    body: "One-on-one transformation guided by Dr. A and supported by a network of executive consultants who understand what it takes to lead, grow, and change.",
    meta: `${coachingStreams.length} streams · Executive & Leadership (1:1) · Group & Team`,
    cta: "Explore coaching",
  },
  {
    title: "Speaking",
    href: "/services/speaking",
    icon: Mic,
    lead: "Keynotes, panels, and talks that don't just inform. They shift how people think about leadership, culture, and human behavior.",
    body: "Keynotes and workshops that inspire, equip, and activate audiences to move from surviving to thriving.",
    meta: "Keynotes · Panels · Workshops",
    cta: "Book Dr. A",
  },
  {
    title: "Education",
    href: "/education",
    icon: Cap,
    lead: "Transferable skills from globally recognized certifications to practical short courses and career development programs.",
    body: "From 10 certificate programs rooted in Dr. A's applied HOS approach to leadership development, career workshops, and short courses.",
    meta: "Certifications · Leadership Development · BEInspire© · Project Unify©",
    cta: "Explore education",
  },
];

const whatWeDo = [
  "Identify what is holding them back",
  "Clarify their goals, priorities, and direction",
  "Develop practical strategies and action plans",
  "Strengthen leadership and decision-making",
  "Improve communication, alignment, and accountability",
  "Navigate growth, transition, and organizational change",
  "Build stronger teams and more effective ways of working",
  "Track progress and turn intentions into measurable results",
];

const audiences = [
  {
    title: "Organizations",
    body: "We serve organizations navigating growth, transition, change, performance challenges, or strategic uncertainty.",
    helpLabel: "We help them achieve:",
    help: [
      "Clearer organizational priorities",
      "Better team alignment",
      "Stronger execution",
      "Improved processes and performance",
      "More effective change management",
      "Greater accountability and measurable progress",
    ],
    links: [
      { label: "Consulting", href: "/services/consulting" },
      { label: "Group & Team Coaching", href: "/services/coaching#group-team" },
    ],
  },
  {
    title: "Leaders and Executives",
    body: "We work with leaders who want to make better decisions, lead through change, and improve the performance of their teams and organizations.",
    helpLabel: "We help leaders develop:",
    help: [
      "Greater clarity and confidence",
      "More effective communication",
      "Stronger decision-making skills",
      "Increased accountability",
      "Better team engagement",
      "A practical approach to leading change",
    ],
    links: [
      { label: "Executive Coaching", href: "/services/coaching#executive-leadership" },
      { label: "Culture & Strategy Consulting", href: "/services/consulting#culture" },
    ],
  },
  {
    title: "Entrepreneurs and Founders",
    body: "We support entrepreneurs and founders who have a vision but need greater clarity, structure, strategy, or momentum.",
    helpLabel: "We help them:",
    help: [
      "Define a clear direction",
      "Set focused goals",
      "Turn ideas into actionable plans",
      "Strengthen their business positioning",
      "Use their time and resources more effectively",
      "Move from planning to implementation",
    ],
    links: [{ label: "Executive Coaching", href: "/services/coaching#executive-leadership" }],
  },
  {
    title: "Professionals",
    body: "We serve professionals seeking career clarity, leadership development, or a more intentional path forward.",
    helpLabel: "We help them:",
    help: [
      "Clarify their career goals",
      "Strengthen their confidence and communication",
      "Identify their next opportunity",
      "Create a practical development plan",
      "Prepare for greater responsibility",
      "Take purposeful action toward their goals",
    ],
    links: [
      { label: "Coaching", href: "/services/coaching" },
      { label: "Education", href: "/education" },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            We do more than find solutions. <em className="text-gold">We enable transformation.</em>
          </>
        }
        intro="Accexx Insight helps leaders, entrepreneurs, professionals, and organizations turn uncertainty into clarity, strategy, action, and measurable progress."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={links.booking}>Book a Discovery Call</ButtonLink>
          <ButtonLink href="#who-we-serve" variant="outline">
            Who we serve
          </ButtonLink>
        </div>
      </PageHero>

      {/* Services ------------------------------------------------------------- */}
      <section className="bg-white py-20 lg:py-28" aria-labelledby="services-heading">
        <div className="container-site">
          <div className="max-w-3xl" data-reveal>
            <p className="eyebrow">What we offer</p>
            <h2 id="services-heading" className="heading mt-4 text-4xl sm:text-5xl">
              A collective of <em className="text-gold">breakthrough.</em>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-body">
              Dr. A and her team of executive consultants partner with organizations ready to break through limitations and
              operate at their highest level.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {services.map((s, i) => (
              <Link
                key={s.title}
                href={s.href}
                data-reveal
                data-reveal-delay={String(i * 80)}
                className="group flex flex-col rounded-3xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/60 hover:shadow-lg hover:shadow-navy/5 sm:p-9"
              >
                <span className="flex size-12 items-center justify-center rounded-full bg-gold-soft text-gold-deep">
                  <s.icon width={22} height={22} />
                </span>
                <h3 className="heading mt-6 text-3xl sm:text-4xl">{s.title}</h3>
                <p className="mt-4 font-medium leading-relaxed text-ink">{s.lead}</p>
                <p className="mt-3 leading-relaxed text-body">{s.body}</p>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-muted">{s.meta}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-deep group-hover:text-navy">
                  {s.cta}
                  <ArrowRight width={15} height={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* What we do ----------------------------------------------------------- */}
      <section className="bg-cream py-20 lg:py-24" aria-labelledby="what-heading">
        <div className="container-site grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div data-reveal>
            <p className="eyebrow">What we do</p>
            <h2 id="what-heading" className="heading mt-4 text-4xl sm:text-5xl">
              Clarify. Decide. <em className="text-gold">Act.</em>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-body">
              Accexx Insight helps clients clarify challenges, make informed decisions, and turn ideas into action.
            </p>
            <p className="mt-4 leading-relaxed text-body">
              We do not believe in one-size-fits-all solutions. We work alongside our clients to develop strategies and
              solutions that fit their goals, people, culture, and circumstances.
            </p>
          </div>
          <div className="rounded-3xl border border-line bg-white p-7 sm:p-9" data-reveal data-reveal-delay="100">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-navy">Our work supports clients to:</p>
            <CheckList items={whatWeDo} className="mt-6" />
          </div>
        </div>
      </section>

      {/* Who we serve --------------------------------------------------------- */}
      <section id="who-we-serve" className="scroll-mt-20 bg-white py-20 lg:py-28" aria-labelledby="serve-heading">
        <div className="container-site">
          <div className="max-w-3xl" data-reveal>
            <p className="eyebrow">Who we serve</p>
            <h2 id="serve-heading" className="heading mt-4 text-4xl sm:text-5xl">
              Find the right <em className="text-gold">starting point.</em>
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {audiences.map((a, i) => (
              <article
                key={a.title}
                className="flex flex-col rounded-3xl border border-line bg-cream/60 p-7 sm:p-8"
                data-reveal
                data-reveal-delay={String(i * 80)}
              >
                <h3 className="heading text-2xl sm:text-3xl">{a.title}</h3>
                <p className="mt-3 leading-relaxed text-body">{a.body}</p>
                <p className="mt-6 text-sm font-semibold text-navy">{a.helpLabel}</p>
                <CheckList items={a.help} className="mt-4" />
                <div className="mt-auto flex flex-wrap gap-2 pt-7">
                  {a.links.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="inline-flex items-center gap-1.5 rounded-full border border-navy/15 bg-white px-4 py-2 text-sm font-semibold text-navy transition-colors hover:border-gold hover:text-gold-deep"
                    >
                      {l.label}
                      <ArrowRight width={13} height={13} />
                    </Link>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 rounded-3xl bg-gold-soft px-7 py-10 text-center sm:px-12" data-reveal>
            <p className="eyebrow">Our core promise</p>
            <p className="mx-auto mt-4 max-w-3xl font-serif text-2xl font-medium italic leading-snug text-navy sm:text-3xl">
              Accexx Insight helps you see what is really happening, decide what to do next, and take action that produces
              measurable results.
            </p>
          </div>
        </div>
      </section>

      <BookingBand
        title={
          <>
            Ready for your <em className="text-gold-light">breakthrough?</em>
          </>
        }
        body="Tell us what you're operating today, where you're going, and where the complexity is getting in the way. We help you determine what needs to happen next, and how to make it happen."
        secondary={{ href: "/contact", label: "Contact us" }}
      />
    </>
  );
}
