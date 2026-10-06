import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { TeamCard } from "@/components/about/TeamCard";
import { consultants, leadership, maxConsultants } from "@/data/team";
import { corePromise, coreValues, partners, presentRoles, whatWeDo, whoWeAre, whoWeServe } from "@/data/about";
import { links } from "@/lib/site";
import headshot from "../../../public/images/dr-laide-headshot.jpg";
import { UnfinishedCircle } from "@/components/ui/UnfinishedCircle";

export const metadata: Metadata = {
  title: "About Accexx Insight",
  description:
    "Accexx Insight is a strategy, leadership, and transformation partner helping individuals and organizations move from uncertainty to clear, purposeful action.",
  alternates: { canonical: "/about" },
};

// Dr. A (email, 2026-10-01): About leads with the organization (who we are, what we do, core values),
// not with her. Her story has its own page: /about/dr-a.
export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Accexx Insight"
        title={
          <>
            From uncertainty to <em className="text-gold">confident action.</em>
          </>
        }
        intro={whoWeAre[0]}
        waves
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={links.booking}>Book a Discovery Call</ButtonLink>
          <ButtonLink href="#team" variant="outline-light">
            Meet the Team
          </ButtonLink>
        </div>
      </PageHero>

      {/* Who we are ------------------------------------------------------------ */}
      <section className="bg-white py-20 lg:py-28" aria-labelledby="who-heading">
        <div className="container-site grid gap-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,7fr)] lg:gap-20">
          <div data-reveal>
            <p className="eyebrow">Who we are</p>
            <h2 id="who-heading" className="heading mt-4 text-4xl leading-[1.08] sm:text-5xl">
              Clarity for complex challenges. <em className="text-gold">Practical direction for meaningful progress.</em>
            </h2>
          </div>
          <div className="space-y-5 text-[1.05rem] leading-relaxed text-body sm:text-lg" data-reveal data-reveal-delay="120">
            {whoWeAre.slice(1).map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* What we do ------------------------------------------------------------ */}
      <section className="bg-white py-20 lg:py-28" aria-labelledby="what-heading">
        <div className="container-site grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
          <div data-reveal>
            <p className="eyebrow">What we do</p>
            <h2 id="what-heading" className="heading mt-4 text-4xl leading-[1.08] sm:text-5xl">
              Clarity, decisions, <em className="text-gold">action.</em>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-body">{whatWeDo.intro}</p>
            <p className="mt-5 leading-relaxed text-body">{whatWeDo.outro}</p>
          </div>
          <div data-reveal data-reveal-delay="120">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-navy">{whatWeDo.lead}</p>
            <ul className="mt-4 grid border-t border-line sm:grid-cols-2 sm:gap-x-10">
              {whatWeDo.items.map((item) => (
                <li key={item} className="flex gap-3 border-b border-line py-4 text-[1rem] text-ink">
                  <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Core values ---------------------------------------------------------- */}
      <section className="border-t border-line bg-white py-20 lg:py-24" aria-labelledby="values-heading">
        <div className="container-site">
          <div className="max-w-3xl" data-reveal>
            <p className="eyebrow">Our core values</p>
            <h2 id="values-heading" className="heading mt-4 text-4xl sm:text-5xl">
              What <em className="text-gold">guides us.</em>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-body">
              Our values shape how we think, work, and show up for our clients. They guide our decisions, strengthen our
              relationships, and keep our work focused on meaningful, lasting progress.
            </p>
          </div>
          <ul className="mt-10 grid grid-cols-2 border-l border-t border-line sm:grid-cols-4">
            {coreValues.map((v, i) => (
              <li key={v} className="border-b border-r border-line px-5 py-7 sm:px-7" data-reveal data-reveal-delay={String((i % 4) * 80)}>
                <span className="font-serif text-lg font-semibold text-gold-deep">{String(i + 1).padStart(2, "0")}</span>
                <span className="mt-2 block font-serif text-2xl font-semibold text-navy">{v}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Who we serve ---------------------------------------------------------- */}
      <section id="who-we-serve" className="scroll-mt-20 bg-cream py-20 lg:py-28" aria-labelledby="serve-heading">
        <div className="container-site">
          <div className="max-w-3xl" data-reveal>
            <p className="eyebrow">Who we serve</p>
            <h2 id="serve-heading" className="heading mt-4 text-4xl sm:text-5xl">
              Built for people <em className="text-gold">ready to move.</em>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-body">
              We work with organizations, leaders, entrepreneurs, founders, and professionals who are ready to create clarity,
              build momentum, and turn intention into meaningful progress.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {whoWeServe.map((g, i) => (
              <article
                key={g.name}
                className="rounded-3xl border border-line bg-white p-7 shadow-sm sm:p-9"
                data-reveal
                data-reveal-delay={String((i % 2) * 100)}
              >
                <h3 className="heading text-3xl">{g.name}</h3>
                <p className="mt-3 leading-relaxed text-body">{g.summary}</p>
                <p className="mt-6 text-xs font-bold uppercase tracking-[0.16em] text-gold-deep">{g.lead}</p>
                <ul className="mt-3 space-y-2">
                  {g.items.map((item) => (
                    <li key={item} className="flex gap-3 text-[0.95rem] text-ink">
                      <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Core promise ---------------------------------------------------------- */}
      <section className="relative overflow-hidden bg-navy py-20 text-white lg:py-24" aria-labelledby="promise-heading">
        <UnfinishedCircle className="pointer-events-none absolute -left-24 -top-24 size-[22rem] text-gold-light/60" />
        <div className="container-site relative max-w-4xl text-center" data-reveal>
          <p id="promise-heading" className="eyebrow text-gold-light!">
            Our core promise
          </p>
          <p className="mt-6 font-serif text-3xl font-medium leading-snug sm:text-4xl lg:text-[2.75rem]">{corePromise}</p>
        </div>
      </section>

      {/* Partners -------------------------------------------------------------- */}
      <section className="bg-white py-16 lg:py-20" aria-labelledby="partners-heading">
        <div className="container-site">
          <p id="partners-heading" className="eyebrow text-center">
            Organizations Dr. Alexander has partnered with
          </p>
          <ul className="mx-auto mt-8 flex max-w-5xl flex-wrap justify-center gap-x-8 gap-y-4 sm:gap-x-12">
            {partners.map((p) => (
              <li key={p} className="font-serif text-xl font-semibold text-navy/80 sm:text-2xl">
                {p}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-center text-sm text-muted">and more.</p>
        </div>
      </section>

      {/* Meet Dr. A: teaser for her own page ---------------------------------- */}
      <section className="bg-white py-20 lg:py-24" aria-labelledby="dra-heading">
        <div className="container-site grid items-center gap-10 md:grid-cols-[minmax(0,4fr)_minmax(0,7fr)] lg:gap-16">
          <div
            className="relative mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden rounded-[2rem] shadow-xl shadow-navy/15 md:max-w-none"
            data-reveal
          >
            <Image
              src={headshot}
              alt="Dr. Laide R. Alexander"
              fill
              placeholder="blur"
              sizes="(min-width: 768px) 34vw, 20rem"
              className="object-cover object-top"
            />
          </div>
          <div data-reveal data-reveal-delay="120">
            <p className="eyebrow">Meet Dr. A</p>
            <h2 id="dra-heading" className="heading mt-4 text-4xl sm:text-5xl">
              The Visionary Behind <em className="text-gold">Accexx Insight</em>
            </h2>
            <ul className="mt-6 space-y-2 text-[1.02rem] text-ink">
              {presentRoles.map((r) => (
                <li key={r.org} className="flex gap-3">
                  <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-gold" />
                  <span>
                    <span className="font-semibold text-navy">{r.title}</span>, {r.org}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <ButtonLink href="/about/dr-a" variant="navy">
                Read her full story
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* Team ------------------------------------------------------------------ */}
      <section id="team" className="scroll-mt-20 border-t border-line bg-cream py-20 lg:py-28" aria-labelledby="team-heading">
        <div className="container-site">
          <div className="max-w-3xl" data-reveal>
            <p className="eyebrow">Team</p>
            <h2 id="team-heading" className="heading mt-4 text-4xl sm:text-5xl">
              Meet the Accexx Insight <em className="text-gold">team</em>
            </h2>
            <p className="mt-4 text-lg text-body">The people behind the platform</p>
          </div>
          {/* Leadership + executive consultants in one row (room for 8 consultants, see data/team.ts). */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[...leadership, ...consultants].map((m, i) => (
              <div key={m.name} data-reveal data-reveal-delay={String((i % 3) * 100)}>
                <TeamCard member={m} />
              </div>
            ))}
          </div>
          {consultants.length < maxConsultants && (
            <div
              data-reveal
              className="mt-6 flex flex-col items-start justify-between gap-3 rounded-3xl border border-dashed border-gold/50 bg-white/60 px-7 py-6 sm:flex-row sm:items-center"
            >
              <div>
                <p className="font-serif text-2xl font-semibold text-navy">More consultants joining the collective</p>
                <p className="mt-1 text-sm text-body">Dr. A + Executive Consultants: A Collective of Breakthrough.</p>
              </div>
              <a href="/contact" className="text-sm font-semibold text-gold-deep hover:text-navy">
                Interested in working with us? Contact us →
              </a>
            </div>
          )}
        </div>
      </section>

      {/* CTA ------------------------------------------------------------------- */}
      <section className="bg-white py-20 lg:py-24">
        <div className="container-site">
          <div
            className="relative overflow-hidden rounded-[2rem] border border-gold/40 bg-gold-soft px-6 py-12 text-center sm:px-12 lg:py-16"
            data-reveal
          >
            <UnfinishedCircle className="pointer-events-none absolute -bottom-24 -right-20 size-72 text-gold" />
            <h2 className="heading relative text-4xl sm:text-5xl">
              Let&apos;s Talk About Your <em className="text-gold-deep">Business.</em>
            </h2>
            <p className="relative mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-body">
              Tell us what you&apos;re operating today, where you&apos;re going, and where the complexity is getting in the way.
            </p>
            <div className="relative mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <ButtonLink href={links.booking}>Book Dr. A</ButtonLink>
              <ButtonLink href="/contact" variant="outline">
                Start a Conversation
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
