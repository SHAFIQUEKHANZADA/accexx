import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/home/Hero";
import { Counter } from "@/components/home/Counter";
import { CircleSignup } from "@/components/home/CircleSignup";
import { BreakthroughPaths } from "@/components/home/BreakthroughPaths";
import { OperatingCode } from "@/components/home/OperatingCode";
import { ButtonLink } from "@/components/ui/Button";
import { BookCover } from "@/components/ui/Placeholders";
import { ArrowRight, Cap, Compass, Quote, Spark } from "@/components/ui/icons";
import { testimonials } from "@/data/testimonials";
import { books, formatPrice } from "@/data/products";
import { insideThePages } from "@/data/events";
import { links, site } from "@/lib/site";
import headshot from "../../public/images/dr-laide-headshot.jpg";
import speakingPhoto from "../../public/images/dr-laide-speaking.jpg";
import forbesGraphic from "../../public/images/forbes-editors-choice.jpg";

export const metadata: Metadata = {
  title: { absolute: `${site.name} — From Access to Accexx. Unlock Your Breakthrough.` },
  description:
    "Consulting, coaching, speaking and education from Dr. Laide R. Alexander and her team of executive consultants. We more than find solutions. We ensure transformation.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Credibility />
      <Philosophy />
      <Paths />
      <Offerings />
      <Method />
      <MeetDrA />
      <Stats />
      <Books />
      <InsideThePages />
      <Voices />
      <FinalCta />
    </>
  );
}

function SectionHeading({ eyebrow, children, className = "" }: { eyebrow: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={className} data-reveal>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 font-serif text-4xl font-normal leading-[1.05] text-white sm:text-5xl lg:text-6xl">{children}</h2>
    </div>
  );
}

/* Credibility: Forbes recognition + organizations served ----------------------- */

// From the live site bio: "partnered with organizations including …".
const clients = ["McDonald’s", "PSCC", "HCC", "Serasana", "The Alexander Group", "AOPE", "Primrose", "Corinthian Colleges"];

function Credibility() {
  return (
    <section aria-label="Recognition" className="border-y border-white/10 bg-ink-2">
      <div className="container-site grid items-center gap-8 py-8 lg:grid-cols-[auto_1fr] lg:gap-14">
        {/* TODO_CLIENT: link to the Forbes article once the URL is supplied. */}
        <figure className="flex items-center gap-5">
          <Image src={forbesGraphic} alt="Forbes Coaches Council Editor's Choice: The Greed In It — A Look At Modern Leadership, by Dr. Laide Alexander" sizes="80px" className="size-20 shrink-0 rounded-xl" />
          <figcaption>
            <p className="eyebrow text-[0.62rem]">Forbes Coaches Council · Editor&apos;s Choice</p>
            <p className="mt-1.5 font-serif text-xl leading-tight text-white sm:text-2xl">
              &ldquo;The Greed In It: A Look At Modern Leadership&rdquo;
            </p>
          </figcaption>
        </figure>

        <div className="min-w-0 lg:border-l lg:border-white/10 lg:pl-14">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-white/40">Trusted by leading teams</p>
          <div className="relative mt-3 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
            <ul className="marquee-track flex w-max gap-10">
              {[...clients, ...clients].map((c, i) => (
                <li key={`${c}-${i}`} aria-hidden={i >= clients.length} className="whitespace-nowrap font-serif text-2xl text-white/65">
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Philosophy --------------------------------------------------------------------- */

function Philosophy() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 lg:py-36">
      <span
        aria-hidden
        className="pointer-events-none absolute -right-8 top-10 select-none font-serif text-[14rem] italic leading-none text-white/[0.025] lg:text-[22rem]"
      >
        Accexx
      </span>
      <div className="container-site relative grid gap-12 lg:grid-cols-[5fr_6fr] lg:gap-20">
        <SectionHeading eyebrow="The Philosophy">
          Accexx Is More Than <em className="text-gold">Access.</em>
        </SectionHeading>
        <div className="space-y-6 text-lg leading-relaxed text-white/75" data-reveal data-reveal-delay="120">
          <p className="font-serif text-3xl leading-snug text-white sm:text-[2.1rem]">
            Access is the door. <em className="text-gold">Accexx is the key.</em>
          </p>
          <p>
            It is the bridge between where you are and where you are meant to be. It is action. It is accountability. It is
            the breakthrough you have been waiting for.
          </p>
          <p>
            Accexx Insight exists to equip the overcomer and creator with the tools, strategies, and mindset to step fully
            into their purpose.
          </p>
        </div>
      </div>
    </section>
  );
}

/* Find your breakthrough (who we serve) ---------------------------------------- */

function Paths() {
  return (
    <section id="breakthrough" className="scroll-mt-20 bg-ink-2 py-24 lg:py-32">
      <div className="container-site">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <SectionHeading eyebrow="Find your breakthrough">
            Where are you <em className="text-gold">starting from?</em>
          </SectionHeading>
          <p className="max-w-lg text-lg leading-relaxed text-white/70 lg:justify-self-end" data-reveal data-reveal-delay="100">
            Accexx Insight helps you see what is really happening, decide what to do next, and take action that produces
            measurable results.
          </p>
        </div>
        <div className="mt-12 lg:mt-16" data-reveal data-reveal-delay="120">
          <BreakthroughPaths />
        </div>
      </div>
    </section>
  );
}

/* What we offer (bento) ---------------------------------------------------------- */

function OfferCard({
  title,
  body,
  href,
  cta,
  index,
  icon,
  className = "",
}: {
  title: string;
  body: string;
  href: string;
  cta: string;
  index: number;
  icon: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-ink-2 p-7 transition-colors duration-500 hover:border-gold/50 sm:p-8 ${className}`}
    >
      <span
        aria-hidden
        className="absolute inset-x-0 -bottom-24 h-48 bg-[radial-gradient(ellipse_at_center,rgba(201,151,75,0.22),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
      <span className="flex items-center justify-between">
        <span className="grid size-12 place-items-center rounded-full border border-gold/40 text-gold">{icon}</span>
        <span className="text-xs tabular-nums text-white/35">0{index}</span>
      </span>
      <h3 className="mt-8 font-serif text-3xl text-white">{title}</h3>
      <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-white/65">{body}</p>
      <span className="relative mt-8 inline-flex items-center gap-2 text-sm font-medium text-gold transition-colors group-hover:text-gold-light">
        {cta}
        <ArrowRight width={15} height={15} className="transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </Link>
  );
}

function Offerings() {
  return (
    <section className="bg-ink py-24 lg:py-32">
      <div className="container-site">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <SectionHeading eyebrow="What we offer">
            A collective of <em className="text-gold">breakthrough.</em>
          </SectionHeading>
          <p className="max-w-lg text-lg leading-relaxed text-white/70 lg:justify-self-end" data-reveal data-reveal-delay="100">
            Dr. A and her team of executive consultants partner with organizations ready to break through limitations and
            operate at their highest level.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:grid-rows-[auto_auto]">
          <div data-reveal>
            <OfferCard
              index={1}
              title="Consulting"
              icon={<Compass width={20} height={20} />}
              body="We don't just diagnose. We redesign the systems, behaviors, and beliefs that shape your organization's performance."
              href="/services/consulting"
              cta="Learn More"
            />
          </div>
          <div data-reveal data-reveal-delay="90">
            <OfferCard
              index={2}
              title="Coaching"
              icon={<Spark width={20} height={20} />}
              body="Coaching that goes deeper than goals. We work at the level of beliefs, stories, and habits — your Human Operating System."
              href="/services/coaching"
              cta="Learn More"
            />
          </div>

          {/* Speaking: photo card spanning two rows on desktop */}
          <div data-reveal data-reveal-delay="180" className="md:col-span-2 lg:col-span-1 lg:row-span-2">
            <Link
              href="/services/speaking"
              className="group relative flex h-full min-h-[26rem] flex-col justify-end overflow-hidden rounded-3xl border border-white/10"
            >
              <Image
                src={speakingPhoto}
                alt="Dr. Laide Alexander speaking to an audience"
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 100vw, 100vw"
                className="object-cover object-[45%_center] transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <span aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
              <span className="relative p-7 sm:p-8">
                <span className="text-xs tabular-nums text-white/50">03</span>
                <span className="mt-3 block font-serif text-3xl text-white">Speaking</span>
                <span className="mt-3 block text-[0.95rem] leading-relaxed text-white/80">
                  Keynotes, panels, and talks that don&apos;t just inform — they shift how people think about leadership,
                  culture, and human behavior.
                </span>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-gold group-hover:text-gold-light">
                  Book Dr. A
                  <ArrowRight width={15} height={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </span>
            </Link>
          </div>

          <div data-reveal data-reveal-delay="90" className="md:col-span-2">
            <OfferCard
              index={4}
              title="Education"
              icon={<Cap width={20} height={20} />}
              body="Transferable skills from globally recognized certifications to practical short courses and career development programs."
              href="/education"
              cta="Explore Programs"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* The Human Operating Code™ ------------------------------------------------------ */

function Method() {
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-ink py-24 lg:py-32">
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_85%_60%,rgba(201,151,75,0.1),transparent_70%)]" />
      <div className="container-site relative grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div data-reveal>
          <p className="eyebrow">Our method · The Human Operating Code™</p>
          <h2 className="mt-4 font-serif text-4xl leading-[1.05] text-white sm:text-5xl lg:text-6xl">
            Invisible beliefs drive visible <em className="text-gold">behavior.</em>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/75">
            The Human Operating Code™ is the proprietary framework underlying every Accexx Insight program, created by Dr.
            Laide R. Alexander.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-white/75">
            Its diagnostic lens — Beliefs, Stories, Emotions, Habits — explains what actually drives behavior, beneath the
            surface-level action.
          </p>
          <blockquote className="mt-8 border-l-2 border-gold pl-5 font-serif text-xl italic leading-snug text-gold-light sm:text-2xl">
            If you wanted to change the habit at the end of this chain, where would it be most effective to intervene — at
            the habit itself, or further up the chain?
          </blockquote>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/education/certifications">Explore HOC Certifications</ButtonLink>
            <ButtonLink href="/services/coaching" variant="outline">
              Work with Dr. A
            </ButtonLink>
          </div>
        </div>
        <div data-reveal data-reveal-delay="140">
          <OperatingCode />
        </div>
      </div>
    </section>
  );
}

/* Meet Dr. A ---------------------------------------------------------------------- */

function MeetDrA() {
  return (
    <section className="bg-ink-2 py-24 lg:py-32">
      <div className="container-site grid items-center gap-14 lg:grid-cols-[5fr_6fr] lg:gap-20">
        <div className="relative mx-auto w-full max-w-md lg:max-w-none" data-reveal>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10">
            <Image
              src={headshot}
              alt="Dr. Laide R. Alexander, Founder & CEO of Accexx Insight"
              fill
              placeholder="blur"
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 right-4 rounded-2xl border border-white/10 bg-ink/90 px-5 py-4 backdrop-blur sm:right-8">
            <p className="eyebrow text-[0.62rem]">Member</p>
            <p className="mt-1 font-serif text-xl text-white">Forbes Coaches Council</p>
          </div>
        </div>

        <div data-reveal data-reveal-delay="120">
          <p className="eyebrow">Meet Dr. A</p>
          <h2 className="mt-4 font-serif text-4xl leading-[1.05] text-white sm:text-5xl lg:text-6xl">
            Dr. Laide R. <em className="text-gold">Alexander.</em>
          </h2>
          <p className="mt-3 text-sm text-mist">Founder &amp; CEO, Accexx Insight LLC · Houston, Texas</p>
          <div className="mt-8 space-y-5 text-[1.05rem] leading-relaxed text-white/75">
            <p>
              Dr. Laide R. Alexander is a member of the Forbes Coaches Council, Founder &amp; CEO of Accexx Insight LLC, and a
              distinguished leadership development practitioner. She has served as a college president, professor, and
              business founder.
            </p>
            <p>
              She currently serves as Regional Director of Enrollment for the State of Texas at Galen College of Nursing,
              where she leads growth, fiscal sustainability, and business continuity strategy. She is the author of{" "}
              <em className="text-white">The Unfinished Leader</em> and <em className="text-white">Why Move My Cheese?</em>,
              and host of the annual Why Move My Cheese? Conference.
            </p>
          </div>
          <blockquote className="mt-8 border-l-2 border-gold pl-5 font-serif text-xl italic leading-snug text-white/90">
            True power in leadership is not found in perfection, but in purpose, presence, and the courage to keep evolving.
          </blockquote>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/about">Full Bio</ButtonLink>
            <ButtonLink href={links.booking} variant="outline">
              Book Dr. A
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Stats ----------------------------------------------------------------------------- */

// From Dr. A's bio on the live site: "over 72 workshops across 8 school types in the
// United States and Africa, developed 10 certificate programs".
const stats = [
  { value: 72, suffix: "+", label: "Workshops designed and delivered" },
  { value: 10, suffix: "", label: "Certificate programs developed" },
  { value: 8, suffix: "", label: "School types served" },
];

function Stats() {
  return (
    <section aria-label="Impact" className="relative overflow-hidden border-y border-white/10 bg-ink">
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_60%_100%_at_50%_120%,rgba(201,151,75,0.12),transparent)]" />
      <dl className="container-site relative grid grid-cols-2 divide-white/10 py-16 lg:grid-cols-4 lg:divide-x lg:py-20">
        {stats.map((s, i) => (
          <div key={s.label} className="flex flex-col px-2 py-6 text-center lg:px-6" data-reveal data-reveal-delay={String(i * 90)}>
            <dt className="order-2 mt-2 text-sm text-white/60">{s.label}</dt>
            <dd className="font-sans text-6xl font-extralight tracking-tight text-white lg:text-7xl">
              <Counter value={s.value} suffix={s.suffix} />
            </dd>
          </div>
        ))}
        <div className="flex flex-col px-2 py-6 text-center lg:px-6" data-reveal data-reveal-delay="270">
          <dt className="order-2 mt-2 text-sm text-white/60">Programs delivered in both regions</dt>
          <dd className="whitespace-nowrap font-serif text-[2.6rem] italic leading-[1.4] text-gold sm:text-5xl lg:text-[3.4rem] lg:leading-[1.32]">US &amp; Africa</dd>
        </div>
      </dl>
    </section>
  );
}

/* Books ----------------------------------------------------------------------------- */

/** Dr. A: "the circle is almost closed — it speaks to the unfinished leader or people that we are." */
function UnfinishedCircle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" aria-hidden className={className}>
      <defs>
        <linearGradient id="uc-g" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#c9974b" stopOpacity="0.15" />
          <stop offset="1" stopColor="#c9974b" stopOpacity="0.7" />
        </linearGradient>
      </defs>
      <path d="M 132 22 A 84 84 0 1 0 178 86" fill="none" stroke="url(#uc-g)" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M 126 30 A 76 76 0 1 0 170 90" fill="none" stroke="url(#uc-g)" strokeWidth="0.6" strokeLinecap="round" />
    </svg>
  );
}

function Books() {
  return (
    <section className="relative overflow-hidden bg-paper py-24 text-ink lg:py-32">
      <div className="container-site grid items-center gap-16 lg:grid-cols-[5fr_6fr] lg:gap-20">
        <div data-reveal>
          <p className="eyebrow text-gold-deep">Books by Dr. A</p>
          {/* Tagline wording pending confirmation: her email says "Every New Page." (see TODO_CLIENT.md) */}
          <h2 className="mt-4 font-serif text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
            Every Page. <em className="text-gold-deep">A New Possibility.</em>
          </h2>
          <p className="mt-4 font-serif text-2xl italic text-ink/80">
            Read. Imagine. Become.{" "}
            <span className="font-sans text-sm font-semibold not-italic tracking-wider text-gold-deep">#R.I.B</span>
          </p>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/70">
            Practical wisdom and proven strategies to help you navigate change, own your &lsquo;why,&rsquo; and lead a life that
            lasts.
          </p>
          <p className="mt-6 text-sm text-ink/60">Hardcover · Paperback · Audiobook coming October 2026</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/shop" className="bg-ink! text-white! hover:bg-navy!">
              Shop Books
            </ButtonLink>
            <ButtonLink href="/books" variant="outline" className="border-ink/25! text-ink! hover:border-gold-deep!">
              Books &amp; Events
            </ButtonLink>
          </div>
        </div>

        <div className="relative">
          <UnfinishedCircle className="pointer-events-none absolute left-1/2 top-[38%] w-[108%] max-w-none -translate-x-1/2 -translate-y-1/2 [mask-image:linear-gradient(to_bottom,#000_70%,transparent_85%)]" />
          <ul className="relative grid grid-cols-2 gap-5 sm:gap-8">
            {books.map((b, i) => (
              <li key={b.slug} data-reveal data-reveal-delay={String(120 + i * 120)} className={i === 1 ? "mt-12" : ""}>
                <Link href={`/shop/${b.slug}`} className="group block">
                  <div className="relative aspect-[2/3] overflow-hidden rounded-l-sm rounded-r-md shadow-[0_30px_60px_-20px_rgba(20,14,6,0.45)] transition-transform duration-500 group-hover:-translate-y-2">
                    {b.cover ? (
                      <Image
                        src={b.cover}
                        alt={`${b.name} by ${b.author}, book cover`}
                        fill
                        placeholder="blur"
                        sizes="(min-width: 1024px) 22vw, 45vw"
                        className="object-cover"
                      />
                    ) : (
                      <BookCover title={b.name} author={b.author} />
                    )}
                    <span aria-hidden className="absolute inset-y-0 left-0 w-2.5 bg-gradient-to-r from-black/25 to-transparent" />
                  </div>
                  {b.flag && <p className="mt-5 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-gold-deep">{b.flag}</p>}
                  <p className="mt-1.5 font-serif text-xl leading-tight group-hover:text-gold-deep">{b.name}</p>
                  <p className="mt-1 text-sm">
                    <span className="text-ink/55">Hardcover </span>
                    <span className="font-semibold">{formatPrice(b.price)}</span>
                    {b.compareAt && <s className="ml-2 text-ink/45">{formatPrice(b.compareAt)}</s>}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* Inside the Pages with Dr. A ----------------------------------------------------------- */

function InsideThePages() {
  const next = insideThePages.schedule[0];
  const upcoming = insideThePages.schedule.slice(1, 4);
  return (
    <section className="relative overflow-hidden bg-ink-2 py-24 lg:py-32">
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_90%_10%,rgba(201,151,75,0.12),transparent_70%)]" />
      <div className="container-site relative grid gap-14 lg:grid-cols-2 lg:gap-20">
        <div data-reveal>
          <p className="eyebrow">New event series</p>
          <h2 className="mt-4 font-serif text-4xl leading-[1.05] text-white sm:text-5xl lg:text-6xl">
            Inside the Pages <em className="text-gold">with Dr. A</em>
          </h2>
          <p className="mt-4 font-serif text-2xl italic text-gold-light">
            &ldquo;{insideThePages.tagline}&rdquo; {insideThePages.lede}
          </p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">{insideThePages.summary}</p>

          <ol className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
            {insideThePages.sequence.map((step, i) => (
              <li key={step.title} className="bg-ink-2 p-5">
                <p className="text-xs tabular-nums text-gold">0{i + 1}</p>
                <p className="mt-1 font-serif text-xl text-white">{step.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-white/60">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="lg:pt-10" data-reveal data-reveal-delay="140">
          <div className="rounded-3xl border border-gold/40 bg-ink p-8 sm:p-10">
            <p className="eyebrow">{insideThePages.scheduleTitle}</p>
            <p className="mt-6 text-sm text-white/50">Event #{next.number}</p>
            <p className="mt-1 text-5xl font-extralight tracking-tight text-white sm:text-6xl">{next.label}</p>
            <p className="mt-2 text-lg text-gold-light">{next.venue}</p>
            <ul className="mt-8 divide-y divide-white/10 border-y border-white/10">
              {upcoming.map((e) => (
                <li key={e.number} className="flex items-baseline justify-between gap-4 py-3.5 text-sm">
                  <span className="text-white/80">Event #{e.number}</span>
                  <span className="text-right text-white/60">
                    {e.label} · {e.venue ?? "Venue TBA"}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-white/40">{insideThePages.schedule.length} sessions planned through Nov 2028. More to come.</p>
            <div className="mt-8">
              <ButtonLink href="#circle">Join the Accexx Circle</ButtonLink>
            </div>
            <p className="mt-3 text-sm text-white/50">Become a member of the Accexx Circle to join the conversation.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Voices ------------------------------------------------------------------------------ */

function Voices() {
  const showPendingFlag = process.env.NODE_ENV !== "production";
  return (
    <section className="bg-ink py-24 lg:py-32">
      <div className="container-site">
        <SectionHeading eyebrow="Voices" className="max-w-2xl">
          What People Are <em className="text-gold">Saying</em>
        </SectionHeading>
        <ul className="mt-14 grid gap-5 lg:mt-20 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <li key={t.role} data-reveal data-reveal-delay={String(i * 100)}>
              <figure className="flex h-full flex-col rounded-3xl border border-white/10 bg-ink-2 p-8">
                <Quote className="text-gold" />
                <blockquote className="mt-6 flex-1 font-serif text-2xl leading-snug text-white">{t.quote}</blockquote>
                <figcaption className="mt-8 border-t border-white/10 pt-5">
                  <p className="text-sm font-medium text-white">{t.role}</p>
                  <p className="text-sm text-mist">{t.organization}</p>
                  {showPendingFlag && !t.confirmed && (
                    <p className="mt-3 inline-block rounded-full border border-dashed border-gold/50 px-2.5 py-0.5 text-[0.65rem] uppercase tracking-wider text-gold">
                      Pending client confirmation
                    </p>
                  )}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* Accexx Circle + final CTA ------------------------------------------------------------ */

function FinalCta() {
  return (
    <section id="circle" className="relative scroll-mt-20 overflow-hidden border-t border-white/10 bg-ink py-24 lg:py-32">
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_15%_100%,rgba(201,151,75,0.16),transparent_70%)]" />
      <div className="container-site relative grid items-center gap-14 lg:grid-cols-[7fr_5fr] lg:gap-20">
        <div data-reveal>
          <p className="font-serif text-2xl italic text-gold sm:text-3xl">
            &ldquo;You are not hiring one person. You are activating a team.&rdquo;
          </p>
          <h2 className="mt-8 font-serif text-5xl leading-[1.02] text-white sm:text-6xl lg:text-7xl">
            Ready for Your <em className="text-gold">Breakthrough?</em>
          </h2>
          <p className="mt-6 text-lg text-white/70">We more than find solutions. We ensure transformation.</p>
          <div className="mt-9">
            <ButtonLink href={links.booking}>Book a Discovery Call</ButtonLink>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-ink-2/80 p-7 backdrop-blur sm:p-9" data-reveal data-reveal-delay="140">
          <p className="eyebrow">Join the Accexx Circle</p>
          <h3 className="mt-3 font-serif text-3xl text-white">Stay in the loop.</h3>
          <p className="mt-2 text-[0.95rem] text-white/65">Get updates and news delivered to your inbox.</p>
          <div className="mt-7">
            <CircleSignup />
          </div>
        </div>
      </div>
    </section>
  );
}
