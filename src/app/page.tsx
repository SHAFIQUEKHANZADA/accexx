import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/home/Hero";
import { Counter } from "@/components/home/Counter";
import { ButtonLink } from "@/components/ui/Button";
import { BookCover } from "@/components/ui/Placeholders";
import { UnfinishedCircle } from "@/components/ui/UnfinishedCircle";
import { ArrowRight, Cap, Compass, Quote, Spark } from "@/components/ui/icons";
import { testimonials } from "@/data/testimonials";
import { books, formatPrice } from "@/data/products";
import { bookLaunch, conference2026, insideThePages } from "@/data/events";
import { links, site } from "@/lib/site";
import { corePromise, presentRoles, whatWeDo, whoWeAre, whoWeServe } from "@/data/about";
import headshot from "../../public/images/dr-laide-headshot.jpg";
import forbesGraphic from "../../public/images/forbes-editors-choice.jpg";
import insideThePagesSet from "../../public/images/inside-the-pages-set.jpg";

export const metadata: Metadata = {
  title: { absolute: `${site.name} | From Access to Accexx. Unlock Your Breakthrough.` },
  description:
    "Consulting, coaching, speaking and education from Dr. Laide R. Alexander and her team of executive consultants. We do more than find solutions, we enable transformation.",
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
      <InTheRoom />
      <Books />
      <InsideThePages />
      <Voices />
      <Faq />
      <FinalCta />
    </>
  );
}

function SectionHeading({ eyebrow, children, className = "" }: { eyebrow: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={className} data-reveal>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="heading mt-4 text-4xl leading-[1.08] sm:text-5xl lg:text-[3.4rem]">{children}</h2>
    </div>
  );
}

/* Credibility: Forbes recognition + organizations served ----------------------- */

// From the live site bio: "partnered with organizations including …".
const clients = ["McDonald’s", "PSCC", "HCC", "Serasana", "The Alexander Group", "AOPE", "Primrose", "Corinthian Colleges"];

function Credibility() {
  return (
    <section aria-label="Recognition" className="border-y border-line bg-white">
      <div className="container-site grid items-center gap-8 py-8 lg:grid-cols-[auto_1fr] lg:gap-14">
        {/* TODO_CLIENT: link to the Forbes article once the URL is supplied. */}
        <figure className="flex items-center gap-5">
          <Image
            src={forbesGraphic}
            alt="Forbes Coaches Council Editor's Choice: The Greed In It: A Look At Modern Leadership, by Dr. Laide Alexander"
            sizes="80px"
            className="size-20 shrink-0 rounded-xl shadow-md"
          />
          <figcaption>
            <p className="eyebrow text-[0.62rem]">Forbes Coaches Council · Editor&apos;s Choice</p>
            <p className="mt-1.5 font-serif text-xl font-semibold leading-tight text-navy sm:text-2xl">
              &ldquo;The Greed In It: A Look At Modern Leadership&rdquo;
            </p>
          </figcaption>
        </figure>

        <div className="min-w-0 lg:border-l lg:border-line lg:pl-14">
          <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-muted">Trusted by leading teams</p>
          <div className="relative mt-3 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
            <ul className="marquee-track flex w-max gap-10">
              {[...clients, ...clients].map((c, i) => (
                <li
                  key={`${c}-${i}`}
                  aria-hidden={i >= clients.length}
                  className="whitespace-nowrap font-serif text-2xl font-semibold text-navy/60"
                >
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
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      <UnfinishedCircle className="pointer-events-none absolute -right-24 top-1/2 hidden size-[34rem] -translate-y-1/2 text-gold/60 lg:block" />
      <div className="container-site relative grid gap-10 lg:grid-cols-[5fr_6fr] lg:gap-20">
        <SectionHeading eyebrow="The Philosophy">
          Accexx Is More Than <em className="text-gold">Access.</em>
        </SectionHeading>
        <div className="space-y-5 text-lg leading-relaxed text-body" data-reveal data-reveal-delay="120">
          <p className="font-serif text-3xl font-semibold leading-snug text-navy sm:text-[2.1rem]">
            Access is the door. <em className="text-gold-deep">Accexx is the key.</em>
          </p>
          <p>
            It is the bridge between where you are and where you are meant to be. It is action. It is accountability. It is
            the breakthrough you have been waiting for.
          </p>
          <p>
            Accexx Insight exists to equip leaders and organizations with the tools, strategies, and mindset to step fully
            into their purpose.
          </p>
        </div>
      </div>
    </section>
  );
}

/* Find your breakthrough (who we serve) ---------------------------------------- */

// Where each audience usually starts (site navigation only). Dr. A (2026-10-01): photos on the
// first two cards only, very large with the text below; none on cards 3 and 4.
const audienceCards: Record<string, { photo?: string; alt?: string; links: { label: string; href: string }[] }> = {
  Organizations: {
    photo: "/images/consulting-meeting.jpg",
    alt: "A leadership team in a working session",
    links: [
      { label: "Consulting", href: "/services/consulting" },
      { label: "Certifications", href: "/education/certifications" },
    ],
  },
  "Leaders and Executives": {
    photo: "/images/events/wmmc-2026-02.jpg",
    alt: "Leaders on a panel at the Why Move My Cheese? Leadership Conference 2026",
    links: [
      { label: "Coaching", href: "/services/coaching" },
      { label: "Leadership programs", href: "/education/leadership" },
    ],
  },
  "Entrepreneurs and Founders": {
    links: [
      { label: "Coaching", href: "/services/coaching" },
      { label: "Consulting", href: "/services/consulting" },
    ],
  },
  Professionals: {
    links: [
      { label: "BEInspire© workshops", href: "/education/beinspire" },
      { label: "Coaching", href: "/services/coaching" },
    ],
  },
};

function Paths() {
  return (
    <section id="breakthrough" className="scroll-mt-20 bg-cream py-20 lg:py-28">
      <div className="container-site">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-16" data-reveal>
          <div>
            <p className="eyebrow">Who we serve</p>
            <h2 className="heading mt-4 text-4xl leading-[1.08] sm:text-5xl">Find your breakthrough</h2>
          </div>
          <p className="max-w-xl text-lg leading-relaxed text-body lg:justify-self-end">{corePromise}</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {whoWeServe.map((group) => {
            const card = audienceCards[group.name];
            return (
              <article key={group.name} className="flex flex-col overflow-hidden rounded-2xl border border-line bg-white" data-reveal>
                {card?.photo && (
                  <div className="relative aspect-[16/10]">
                    <Image src={card.photo} alt={card.alt ?? ""} fill sizes="(min-width: 1280px) 600px, (min-width: 768px) 50vw, 100vw" className="object-cover" />
                  </div>
                )}
                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <h3 className="font-serif text-2xl font-semibold leading-tight text-navy sm:text-[1.75rem]">{group.name}</h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-body">{group.summary}</p>
                  <ul className="mb-6 mt-4 space-y-1.5 text-[0.92rem] text-ink">
                    {group.items.slice(0, 3).map((item) => (
                      <li key={item} className="flex gap-2.5">
                        <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-auto flex flex-col items-start gap-1.5 border-t border-line pt-4 text-sm font-semibold">
                    {card?.links.map((l) => (
                      <Link key={l.href} href={l.href} className="text-gold-deep underline-offset-4 hover:text-navy hover:underline">
                        {l.label} →
                      </Link>
                    ))}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* What we offer --------------------------------------------------------------------- */

function OfferCard({ title, body, href, cta, icon }: { title: string; body: string; href: string; cta: string; icon: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col rounded-3xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-xl hover:shadow-navy/10 sm:p-8"
    >
      <span className="grid size-12 place-items-center rounded-full bg-gold-soft text-gold-deep">{icon}</span>
      <h3 className="heading mt-6 text-3xl">{title}</h3>
      <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-body">{body}</p>
      <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-gold-deep transition-colors group-hover:text-navy">
        {cta}
        <ArrowRight width={15} height={15} className="transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </Link>
  );
}

function Offerings() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-site">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <SectionHeading eyebrow="What we offer">
            A collective of <em className="text-gold">breakthrough.</em>
          </SectionHeading>
          <p className="max-w-lg text-lg leading-relaxed text-body lg:justify-self-end" data-reveal data-reveal-delay="100">
            Dr. A and her team of executive consultants partner with organizations ready to break through limitations and
            operate at their highest level.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:mt-16">
          <div data-reveal>
            <OfferCard
              title="Consulting"
              icon={<Compass width={20} height={20} />}
              body="We don't just diagnose. We redesign the systems, behaviors, and beliefs that shape your organization's performance."
              href="/services/consulting"
              cta="Learn More"
            />
          </div>
          <div data-reveal data-reveal-delay="90">
            <OfferCard
              title="Coaching"
              icon={<Spark width={20} height={20} />}
              body="Coaching that goes deeper than goals. We work at the level of beliefs, stories, and habits: your Human Operating System."
              href="/services/coaching"
              cta="Learn More"
            />
          </div>

          <div data-reveal>
            <OfferCard
              title="Speaking"
              icon={<Quote width={20} height={20} />}
              body="Keynotes, panels, and talks that don't just inform. They shift how people think about leadership, culture, and human behavior."
              href="/services/speaking"
              cta="Book Dr. A"
            />
          </div>
          <div data-reveal data-reveal-delay="90">
            <OfferCard
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

/* The Human Operating Codes™ ------------------------------------------------------ */

// Copy: glossary (HOC, BSEH) + HOC-LP Module 1 (BSEH self-diagnostic prompts).
const bseh = [
  { letter: "B", name: "Beliefs", line: "What you would have to believe for your story to be true." },
  { letter: "S", name: "Stories", line: "The narrative you tell yourself about why a situation is the way it is." },
  { letter: "E", name: "Emotions", line: "What you actually feel, not what you think you should feel." },
  { letter: "H", name: "Habits", line: "The recurring behavior at the end of the chain." },
];

function Method() {
  return (
    <section className="bg-cream py-20 lg:py-28">
      {/* No photo here (Dr. A, 2026-10-01: "the organization needs to be bigger than me"). */}
      <div className="container-site">
        <div data-reveal>
          <p className="eyebrow">Our method</p>
          <h2 className="heading mt-4 text-4xl leading-[1.08] sm:text-5xl">The Human Operating Codes™</h2>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-body">
            The proprietary framework underlying every Accexx Insight program, created by Dr. Laide R. Alexander. Its lens
            (Beliefs, Stories, Emotions, Habits) explains what actually drives behavior, beneath the surface-level action.
          </p>

          <dl className="mt-10 grid gap-x-10 gap-y-8 border-t border-line pt-10 sm:grid-cols-2 lg:grid-cols-4">
            {bseh.map((item) => (
              <div key={item.letter} className="flex gap-4">
                <dt className="w-8 shrink-0 font-serif text-4xl font-semibold leading-none text-gold-deep">{item.letter}</dt>
                <dd>
                  <span className="block font-semibold text-navy">{item.name}</span>
                  <span className="mt-1 block text-[0.95rem] leading-relaxed text-body">{item.line}</span>
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/education/certifications" variant="navy">
              Explore HOC Certifications
            </ButtonLink>
            <ButtonLink href="/services/coaching" variant="outline">
              Work with Dr. A
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Meet Dr. A ---------------------------------------------------------------------- */

function MeetDrA() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-site grid items-center gap-14 lg:grid-cols-[5fr_6fr] lg:gap-20">
        <div className="relative mx-auto w-full max-w-md lg:max-w-none" data-reveal>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-xl shadow-navy/15">
            <Image
              src={headshot}
              alt="Dr. Laide R. Alexander, Founder & CEO of Accexx Insight"
              fill
              placeholder="blur"
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 right-4 rounded-2xl border border-line bg-white px-5 py-4 shadow-lg shadow-navy/10 sm:right-8">
            <p className="eyebrow text-[0.62rem]">Member</p>
            <p className="mt-1 font-serif text-xl font-semibold text-navy">Forbes Coaches Council</p>
          </div>
        </div>

        <div data-reveal data-reveal-delay="120">
          <p className="eyebrow">Meet Dr. A</p>
          <h2 className="heading mt-4 text-4xl leading-[1.08] sm:text-5xl lg:text-[3.4rem]">
            Dr. Laide R. <em className="text-gold">Alexander.</em>
          </h2>
          <p className="mt-3 text-sm font-medium text-muted">Founder &amp; CEO, Accexx Insight LLC · Houston, Texas</p>
          <div className="mt-7 space-y-5 text-[1.05rem] leading-relaxed text-body">
            <p>
              Dr. Laide R. Alexander is a member of the Forbes Coaches Council, Founder &amp; CEO of Accexx Insight LLC, and a
              distinguished leadership development practitioner. She has served as a college president, professor, and
              business founder.
            </p>
            <p>
              She is also Founder &amp; Chairperson of The Transformation Platform (Thetplat), the author of{" "}
              <em className="font-semibold text-navy">The Unfinished Leader</em> and{" "}
              <em className="font-semibold text-navy">Why Move My Cheese?</em>, and host of the annual Why Move My Cheese?
              Conference.
            </p>
          </div>
          <blockquote className="mt-8 border-l-2 border-gold pl-5 font-serif text-xl italic leading-snug text-navy">
            True power in leadership is not found in perfection, but in purpose, presence, and the courage to keep evolving.
          </blockquote>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/about/dr-a" variant="navy">
              Full Bio
            </ButtonLink>
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
    <section aria-label="Impact" className="bg-night text-white">
      <dl className="container-site grid grid-cols-2 divide-white/10 py-14 lg:grid-cols-4 lg:divide-x lg:py-16">
        {stats.map((s, i) => (
          <div key={s.label} className="flex flex-col px-2 py-5 text-center lg:px-6" data-reveal data-reveal-delay={String(i * 90)}>
            <dt className="order-2 mt-2 text-sm font-medium text-white/70">{s.label}</dt>
            <dd className="text-6xl font-extralight tracking-tight text-white lg:text-7xl">
              <Counter value={s.value} suffix={s.suffix} />
            </dd>
          </div>
        ))}
        <div className="flex flex-col px-2 py-5 text-center lg:px-6" data-reveal data-reveal-delay="270">
          <dt className="order-2 mt-2 text-sm font-medium text-white/70">Programs delivered in both regions</dt>
          <dd className="whitespace-nowrap font-serif text-[2.6rem] font-semibold italic leading-[1.4] text-gold sm:text-5xl lg:text-[3.3rem] lg:leading-[1.32]">
            US &amp; Africa
          </dd>
        </div>
      </dl>
    </section>
  );
}

/* In the room: real event photos ----------------------------------------------------- */

function InTheRoom() {
  const [lead, ...rest] = conference2026.photos;
  const tiles = [rest[0], rest[2], bookLaunch.photos[0], bookLaunch.photos[1]];
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-site">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <SectionHeading eyebrow="In the room with Dr. A">
            Conversations that <em className="text-gold">move people.</em>
          </SectionHeading>
          <div className="lg:justify-self-end" data-reveal data-reveal-delay="100">
            <p className="max-w-lg text-lg leading-relaxed text-body">
              Moments from the {conference2026.title} and her {bookLaunch.title.toLowerCase()}.
            </p>
            <div className="mt-4">
              <ButtonLink href="/books#conference" variant="link">
                See the conference highlights
              </ButtonLink>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:mt-14 lg:grid-cols-4 lg:grid-rows-2">
          <figure className="relative col-span-2 aspect-[4/3] overflow-hidden rounded-3xl lg:row-span-2 lg:aspect-auto" data-reveal>
            <Image src={lead.src} alt={lead.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </figure>
          {tiles.map((p, i) => (
            <figure
              key={p.src}
              className="relative aspect-square overflow-hidden rounded-2xl sm:rounded-3xl"
              data-reveal
              data-reveal-delay={String(80 + i * 70)}
            >
              <Image src={p.src} alt={p.alt} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover transition-transform duration-700 hover:scale-105" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Books ----------------------------------------------------------------------------- */

function Books() {
  return (
    <section className="relative overflow-hidden bg-cream py-20 lg:py-28">
      <div className="container-site grid items-center gap-16 lg:grid-cols-[5fr_6fr] lg:gap-20">
        <div data-reveal>
          <p className="eyebrow">Books by Dr. A</p>
          {/* Tagline wording pending confirmation: her email says "Every New Page." (see TODO_CLIENT.md) */}
          <h2 className="heading mt-4 text-4xl leading-[1.08] sm:text-5xl lg:text-[3.4rem]">
            Every Page. <em className="text-gold">A New Possibility.</em>
          </h2>
          <p className="mt-4 font-serif text-2xl font-medium italic text-navy/80">
            Read. Imagine. Become.{" "}
            <span className="font-sans text-sm font-bold not-italic tracking-wider text-gold-deep">#R.I.B</span>
          </p>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-body">
            Practical wisdom and proven strategies to help you navigate change, own your &lsquo;why,&rsquo; and lead a life that
            lasts.
          </p>
          <p className="mt-5 text-sm font-medium text-muted">Hardcover · Paperback · Audiobook coming October 2026</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/shop" variant="navy">
              Shop Books
            </ButtonLink>
            <ButtonLink href="/books" variant="outline">
              Books &amp; Events
            </ButtonLink>
          </div>
        </div>

        <div className="relative">
          <UnfinishedCircle className="pointer-events-none absolute left-1/2 top-[38%] w-[108%] max-w-none -translate-x-1/2 -translate-y-1/2 text-gold [mask-image:linear-gradient(to_bottom,#000_70%,transparent_85%)]" />
          <ul className="relative grid grid-cols-2 gap-5 sm:gap-8">
            {books.map((b, i) => (
              <li key={b.slug} data-reveal data-reveal-delay={String(120 + i * 120)} className={i === 1 ? "mt-12" : ""}>
                <Link href={`/shop/${b.slug}`} className="group block">
                  <div className="relative aspect-[2/3] overflow-hidden rounded-l-sm rounded-r-md shadow-[0_30px_60px_-20px_rgba(31,56,100,0.45)] transition-transform duration-500 group-hover:-translate-y-2">
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
                  </div>
                  {b.flag && <p className="mt-5 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-gold-deep">{b.flag}</p>}
                  <p className="mt-1.5 font-serif text-xl font-semibold leading-tight text-navy group-hover:text-gold-deep">{b.name}</p>
                  <p className="mt-1 text-sm text-ink">
                    <span className="text-muted">Hardcover </span>
                    <span className="font-semibold">{formatPrice(b.price)}</span>
                    {b.compareAt && <s className="ml-2 text-muted">{formatPrice(b.compareAt)}</s>}
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
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-site grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
        <div className="relative" data-reveal>
          <div className="relative aspect-[1465/794] overflow-hidden rounded-3xl shadow-xl shadow-navy/15">
            <Image
              src={insideThePagesSet}
              alt="The Inside the Pages with Dr. A set: mustard backdrop, armchairs and reading lounge"
              fill
              placeholder="blur"
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 left-4 rounded-2xl border border-line bg-white px-5 py-4 shadow-lg shadow-navy/10 sm:left-8">
            <p className="eyebrow text-[0.62rem]">{insideThePages.scheduleTitle}</p>
            <p className="mt-1 text-2xl font-light tracking-tight text-navy">{next.label}</p>
            <p className="text-sm font-semibold text-gold-deep">{next.venue}</p>
          </div>
        </div>

        <div data-reveal data-reveal-delay="120">
          <p className="eyebrow">New event series</p>
          <h2 className="heading mt-4 text-4xl leading-[1.08] sm:text-5xl lg:text-[3.4rem]">
            Inside the Pages <em className="text-gold">with Dr. A</em>
          </h2>
          <p className="mt-4 font-serif text-2xl font-medium italic text-navy/80">
            &ldquo;{insideThePages.tagline}&rdquo; {insideThePages.lede}
          </p>
          <p className="mt-6 text-lg leading-relaxed text-body">{insideThePages.summary}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/inside-the-pages">Discover Inside the Pages</ButtonLink>
            <ButtonLink href="#accexx-circle" variant="outline">
              Join the Accexx Circle
            </ButtonLink>
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
    <section className="bg-cream py-20 lg:py-28">
      <div className="container-site">
        <SectionHeading eyebrow="Voices" className="max-w-2xl">
          What People Are <em className="text-gold">Saying</em>
        </SectionHeading>
        <ul className="mt-12 grid gap-5 lg:mt-14 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <li key={t.role} data-reveal data-reveal-delay={String(i * 100)}>
              <figure className="flex h-full flex-col rounded-3xl border border-line bg-white p-8 shadow-sm">
                <Quote className="text-gold" />
                <blockquote className="mt-5 flex-1 font-serif text-2xl font-medium leading-snug text-navy">{t.quote}</blockquote>
                <figcaption className="mt-8 border-t border-line pt-5">
                  <p className="text-sm font-semibold text-ink">{t.role}</p>
                  <p className="text-sm text-muted">{t.organization}</p>
                  {showPendingFlag && !t.confirmed && (
                    <p className="mt-3 inline-block rounded-full border border-dashed border-gold-deep/50 px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider text-gold-deep">
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

/* FAQ: more useful content on the home page for Google and AI search (meeting 2026-10-03).
   Every answer comes from existing client copy (about.ts, the course data, her bio). ------------------- */

const faqs: { q: string; a: string }[] = [
  { q: "What does Accexx Insight do?", a: `${whoWeAre[0]} ${whatWeDo.intro}` },
  {
    q: "Who does Accexx Insight work with?",
    a: `${whoWeServe.map((g) => g.name).join(", ").replace(/, ([^,]*)$/, ", and $1")}. ${corePromise}`,
  },
  {
    q: "What are the Human Operating Codes™?",
    a: "The Human Operating Codes™ are the proprietary framework underlying every Accexx Insight program, created by Dr. Laide R. Alexander. Its lens (Beliefs, Stories, Emotions, Habits) explains what actually drives behavior, beneath the surface-level action.",
  },
  {
    q: "What services and programs do you offer?",
    a: "Consulting, coaching, speaking, and education. The education catalogue includes 10 HOC certifications, 12 leadership development programs, 10 BEInspire© career workshops, 15 Project Unify© certificates, 8 HOC short courses, and 10 Project Unify© Training Shop courses, delivered to cohorts in person or virtually.",
  },
  {
    q: "Who is Dr. Laide R. Alexander?",
    a: `${presentRoles.map((r) => `${r.title}, ${r.org}`).join("; ")}. She is the author of The Unfinished Leader and Why Move My Cheese?, and host of the annual Why Move My Cheese? Conference.`,
  },
  {
    q: "How do I get started?",
    a: "Book a discovery call with Dr. A, or send us a message through the contact page. Tell us what you are working on, and we will help you decide what needs to happen next.",
  },
];

function Faq() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: site.name,
        url: site.url,
        slogan: site.tagline,
        founder: { "@type": "Person", name: "Dr. Laide R. Alexander" },
        address: { "@type": "PostalAddress", addressLocality: "Houston", addressRegion: "TX", addressCountry: "US" },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
    ],
  };
  return (
    <section className="bg-white py-20 lg:py-28" aria-labelledby="faq-heading">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <div className="container-site grid gap-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,7fr)] lg:gap-20">
        <div data-reveal>
          <p className="eyebrow">Questions</p>
          <h2 id="faq-heading" className="heading mt-4 text-4xl leading-[1.08] sm:text-5xl">
            Frequently asked <em className="text-gold">questions.</em>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-body">Still have a question? We are happy to talk it through.</p>
          <div className="mt-8">
            <ButtonLink href="/contact" variant="outline">
              Contact Us
            </ButtonLink>
          </div>
        </div>
        <div className="divide-y divide-line border-y border-line" data-reveal data-reveal-delay="120">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-serif text-xl font-semibold text-navy sm:text-2xl [&::-webkit-details-marker]:hidden">
                {f.q}
                <span aria-hidden className="grid size-8 shrink-0 place-items-center rounded-full border border-line text-gold-deep transition-transform group-open:rotate-45">
                  <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                    <path d="M8 3v10M3 8h10" />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 max-w-2xl leading-relaxed text-body">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Final CTA (the Accexx Circle signup + Contact Us band follows on every page, from the layout) */

function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 text-white lg:py-24">
      <UnfinishedCircle className="pointer-events-none absolute -bottom-72 -right-56 size-[40rem] text-gold/30" />
      <div className="container-site relative max-w-4xl text-center" data-reveal>
        <p className="font-serif text-2xl italic text-gold-light sm:text-3xl">
          &ldquo;You are not hiring one person. You are activating a team.&rdquo;
        </p>
        <h2 className="mt-8 font-serif text-5xl font-semibold leading-[1.04] sm:text-6xl lg:text-7xl">
          Ready for Your <em className="text-gold-light">Breakthrough?</em>
        </h2>
        <p className="mt-6 text-lg text-white/80">We do more than find solutions, we enable transformation.</p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href={links.booking}>Book a Discovery Call</ButtonLink>
          <ButtonLink href="#accexx-circle" variant="outline-light">
            Join the Accexx Circle
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
