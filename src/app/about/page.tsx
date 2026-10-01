import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { Quote } from "@/components/ui/icons";
import { TeamCard } from "@/components/about/TeamCard";
import { consultants, leadership, maxConsultants } from "@/data/team";
import { bio, corePromise, partners, shortBio, whatWeDo, whoWeAre, whoWeServe } from "@/data/about";
import { links } from "@/lib/site";
import headshot from "../../../public/images/dr-laide-headshot.jpg";
import portraitBw from "../../../public/images/dr-laide-portrait-bw.jpg";
import forbesGraphic from "../../../public/images/forbes-editors-choice.jpg";
import { UnfinishedCircle } from "@/components/ui/UnfinishedCircle";

export const metadata: Metadata = {
  title: "About Dr. A",
  description:
    "Meet Dr. Laide R. Alexander and the Accexx Insight team: a strategy, leadership, and transformation partner helping individuals and organizations move from uncertainty to clear, purposeful action.",
  alternates: { canonical: "/about" },
};

const bioParts = [
  { title: "Educator, Author, Thought Leader", text: bio.educator },
  { title: "Builder of Communities and Platforms", text: bio.builder },
  { title: "Coach, Consultant, and Speaker", text: bio.coach },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero: same shell as PageHero, but with a portrait frame so the headshot isn't cropped at the forehead. */}
      <section className="relative overflow-hidden border-b border-line bg-cream">
        <UnfinishedCircle className="pointer-events-none absolute -right-32 -top-32 size-[30rem] text-gold/50" />
        <div className="container-site relative grid items-center gap-10 py-14 sm:py-16 lg:grid-cols-[minmax(0,7fr)_minmax(0,4fr)] lg:gap-16 lg:py-20">
          <div>
            <p className="eyebrow animate-fade-up">About Dr. A</p>
            <h1
              className="heading mt-4 animate-fade-up text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-[4rem]"
              style={{ animationDelay: "80ms" }}
            >
              Dr. Laide R. <em className="text-gold">Alexander</em>
            </h1>
            <p className="mt-4 animate-fade-up text-sm font-semibold text-navy/80" style={{ animationDelay: "120ms" }}>
              Founder &amp; CEO, Accexx Insight LLC · Member, Forbes Coaches Council
            </p>
            <p
              className="mt-6 max-w-2xl animate-fade-up text-lg leading-relaxed text-body sm:text-xl"
              style={{ animationDelay: "160ms" }}
            >
              {shortBio}
            </p>
            <div className="mt-8 flex animate-fade-up flex-col gap-3 sm:flex-row" style={{ animationDelay: "240ms" }}>
              <ButtonLink href={links.booking}>Book Dr. A</ButtonLink>
              <ButtonLink href="#team" variant="outline">
                Meet the Team
              </ButtonLink>
            </div>
          </div>
          <div
            className="relative mx-auto aspect-[4/5] w-full max-w-sm animate-fade-up overflow-hidden rounded-[2rem] shadow-xl shadow-navy/15 lg:max-w-none"
            style={{ animationDelay: "160ms" }}
          >
            <Image
              src={headshot}
              alt="Dr. Laide R. Alexander, Founder & CEO of Accexx Insight"
              fill
              preload
              placeholder="blur"
              sizes="(min-width: 1024px) 34vw, (min-width: 640px) 24rem, 100vw"
              className="object-cover object-top"
            />
          </div>
        </div>
      </section>

      {/* Who we are ------------------------------------------------------------ */}
      <section className="bg-white py-20 lg:py-28" aria-labelledby="who-heading">
        <div className="container-site grid gap-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,7fr)] lg:gap-20">
          <div data-reveal>
            <p className="eyebrow">Who we are</p>
            <h2 id="who-heading" className="heading mt-4 text-4xl leading-[1.08] sm:text-5xl">
              From uncertainty to <em className="text-gold">clear, purposeful action.</em>
            </h2>
          </div>
          <div className="space-y-5 text-[1.05rem] leading-relaxed text-body sm:text-lg" data-reveal data-reveal-delay="120">
            {whoWeAre.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Full bio --------------------------------------------------------------- */}
      <section className="bg-cream py-20 lg:py-28" aria-labelledby="bio-heading">
        <div className="container-site">
          <div className="max-w-3xl" data-reveal>
            <p className="eyebrow">About me</p>
            <h2 id="bio-heading" className="heading mt-4 text-4xl sm:text-5xl">
              The full <em className="text-gold">story.</em>
            </h2>
            <p className="mt-4 text-sm font-medium text-muted">{bio.roles}</p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {bioParts.map((part, i) => (
              <article
                key={part.title}
                className="rounded-3xl border border-line bg-white p-7 shadow-sm sm:p-8"
                data-reveal
                data-reveal-delay={String(i * 100)}
              >
                <span className="font-serif text-4xl font-semibold text-gold">0{i + 1}</span>
                <h3 className="heading mt-3 text-2xl leading-tight sm:text-[1.7rem]">{part.title}</h3>
                <p className="mt-4 text-[0.95rem] leading-relaxed text-body">{part.text}</p>
              </article>
            ))}
          </div>

          {/* The person behind the title */}
          <div className="mt-16 grid items-center gap-10 md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:mt-20 lg:gap-16">
            <div className="relative mx-auto w-full max-w-md md:max-w-none" data-reveal>
              <div className="relative aspect-[1299/1464] overflow-hidden rounded-[2rem] shadow-xl shadow-navy/15">
                <Image
                  src={portraitBw}
                  alt="Dr. Laide R. Alexander, black-and-white portrait"
                  fill
                  placeholder="blur"
                  sizes="(min-width: 768px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
              <UnfinishedCircle className="pointer-events-none absolute -bottom-10 -left-10 size-40 text-gold" />
            </div>
            <div data-reveal data-reveal-delay="120">
              <span className="font-serif text-4xl font-semibold text-gold">04</span>
              <h3 className="heading mt-3 text-3xl sm:text-4xl">The Person Behind the Title</h3>
              <p className="mt-5 text-[1.05rem] leading-relaxed text-body sm:text-lg">{bio.person}</p>
              <figure className="mt-10 border-l-2 border-gold pl-6">
                <Quote className="text-gold" width={28} height={28} />
                <blockquote className="mt-3 font-serif text-2xl font-medium italic leading-snug text-navy sm:text-3xl">
                  {bio.philosophy}
                </blockquote>
                <figcaption className="eyebrow mt-4">Philosophy in Practice</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* Forbes recognition ---------------------------------------------------- */}
      <section className="border-y border-line bg-white" aria-label="Recognition">
        {/* TODO_CLIENT: link to the Forbes article once the URL is supplied. */}
        <div className="container-site flex flex-col items-start gap-6 py-10 sm:flex-row sm:items-center sm:gap-8">
          <Image
            src={forbesGraphic}
            alt="Forbes Coaches Council Editor's Choice: The Greed In It — A Look At Modern Leadership, by Dr. Laide Alexander"
            sizes="112px"
            className="size-24 shrink-0 rounded-2xl shadow-md sm:size-28"
          />
          <div>
            <p className="eyebrow">Forbes Coaches Council · Editor&apos;s Choice</p>
            <p className="mt-2 font-serif text-2xl font-semibold leading-tight text-navy sm:text-3xl">
              &ldquo;The Greed In It: A Look At Modern Leadership&rdquo;
            </p>
            <p className="mt-2 text-[0.95rem] text-body">
              As a member of the Forbes Coaches Council, Dr. Alexander is recognized among a select group of the world&apos;s
              most respected leadership authorities.
            </p>
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
                  <span aria-hidden className="text-gold-deep">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
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
          <h3 className="mt-12 text-sm font-bold uppercase tracking-[0.18em] text-navy">Leadership</h3>
          <div className="mt-5 grid max-w-4xl gap-6 sm:grid-cols-2">
            {leadership.map((m, i) => (
              <div key={m.name} data-reveal data-reveal-delay={String(i * 100)}>
                <TeamCard member={m} />
              </div>
            ))}
          </div>

          <h3 className="mt-16 text-sm font-bold uppercase tracking-[0.18em] text-navy">Executive Consultants</h3>
          <p className="mt-2 max-w-2xl text-body">Dr. A + Executive Consultants — A Collective of Breakthrough.</p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {consultants.map((m, i) => (
              <div key={m.name} data-reveal data-reveal-delay={String(i * 80)}>
                <TeamCard member={m} />
              </div>
            ))}
            {consultants.length < maxConsultants && (
              <div data-reveal className="flex min-h-64 flex-col justify-center rounded-3xl border border-dashed border-gold/50 bg-white/60 p-7 text-center">
                <p className="font-serif text-2xl font-semibold text-navy">More consultants joining the collective</p>
                <p className="mt-2 text-sm text-body">Interested in working with Accexx Insight?</p>
                <a href="/contact" className="mt-4 text-sm font-semibold text-gold-deep hover:text-navy">
                  Contact us →
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA ------------------------------------------------------------------- */}
      <section className="bg-white py-20 lg:py-24">
        <div className="container-site">
          <div className="relative overflow-hidden rounded-[2rem] border border-gold/40 bg-gold-soft px-6 py-12 text-center sm:px-12 lg:py-16" data-reveal>
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
