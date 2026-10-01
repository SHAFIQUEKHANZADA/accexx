import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { Quote } from "@/components/ui/icons";
import { UnfinishedCircle } from "@/components/ui/UnfinishedCircle";
import { bio, pastRoles, presentRoles, shortBio } from "@/data/about";
import { links } from "@/lib/site";
import headshot from "../../../../public/images/dr-laide-headshot.jpg";
import portraitBw from "../../../../public/images/dr-laide-portrait-bw.jpg";
import forbesGraphic from "../../../../public/images/forbes-editors-choice.jpg";

export const metadata: Metadata = {
  title: "Meet Dr. A: The Visionary Behind Accexx Insight",
  description:
    "Dr. Laide R. Alexander: Founder & CEO of Accexx Insight, Founder & Chairperson of The Transformation Platform (Thetplat), and member of the Forbes Coaches Council.",
  alternates: { canonical: "/about/dr-a" },
};

// TODO_CLIENT: Dr. A texted Hilal a layout for this page (2026-10-01, ~1:32pm her time). Match it once received.

const bioParts = [
  { title: "Educator, Author, Thought Leader", text: bio.educator },
  { title: "Builder of Communities and Platforms", text: bio.builder },
  { title: "Coach, Consultant, and Speaker", text: bio.coach },
];

export default function MeetDrAPage() {
  return (
    <>
      {/* Hero: portrait frame so the headshot isn't cropped at the forehead. */}
      <section className="relative overflow-hidden border-b border-line bg-cream">
        <UnfinishedCircle className="pointer-events-none absolute -right-32 -top-32 size-[30rem] text-gold/50" />
        <div className="container-site relative grid items-center gap-10 py-14 sm:py-16 lg:grid-cols-[minmax(0,7fr)_minmax(0,4fr)] lg:gap-16 lg:py-20">
          <div>
            <p className="eyebrow animate-fade-up">Meet Dr. A</p>
            <h1
              className="heading mt-4 animate-fade-up text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-[4rem]"
              style={{ animationDelay: "80ms" }}
            >
              The Visionary Behind <em className="text-gold">Accexx Insight</em>
            </h1>
            <p className="mt-5 animate-fade-up font-serif text-2xl font-semibold text-navy" style={{ animationDelay: "120ms" }}>
              Dr. Laide R. Alexander
            </p>
            <ul className="mt-4 animate-fade-up space-y-1.5 text-[0.95rem] text-ink" style={{ animationDelay: "140ms" }}>
              {presentRoles.map((r) => (
                <li key={r.org} className="flex gap-3">
                  <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />
                  <span>
                    <span className="font-semibold text-navy">{r.title}</span>, {r.org}
                  </span>
                </li>
              ))}
            </ul>
            <p
              className="mt-6 max-w-2xl animate-fade-up text-lg leading-relaxed text-body"
              style={{ animationDelay: "160ms" }}
            >
              {shortBio}
            </p>
            <div className="mt-8 flex animate-fade-up flex-col gap-3 sm:flex-row" style={{ animationDelay: "240ms" }}>
              <ButtonLink href={links.booking}>Book Dr. A</ButtonLink>
              <ButtonLink href="#story" variant="outline">
                Read the full story
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

      {/* Full story --------------------------------------------------------------- */}
      <section id="story" className="scroll-mt-20 bg-white py-20 lg:py-28" aria-labelledby="bio-heading">
        <div className="container-site">
          <div className="max-w-3xl" data-reveal>
            <p className="eyebrow">About me</p>
            <h2 id="bio-heading" className="heading mt-4 text-4xl sm:text-5xl">
              The full <em className="text-gold">story.</em>
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {bioParts.map((part, i) => (
              <article
                key={part.title}
                className="rounded-3xl border border-line bg-cream p-7 sm:p-8"
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
      <section className="border-y border-line bg-cream" aria-label="Recognition">
        {/* TODO_CLIENT: link to the Forbes article once the URL is supplied. */}
        <div className="container-site flex flex-col items-start gap-6 py-10 sm:flex-row sm:items-center sm:gap-8">
          <Image
            src={forbesGraphic}
            alt="Forbes Coaches Council Editor's Choice: The Greed In It: A Look At Modern Leadership, by Dr. Laide Alexander"
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

      {/* Today + history ------------------------------------------------------- */}
      <section className="bg-white py-20 lg:py-24" aria-labelledby="roles-heading">
        <div className="container-site grid gap-12 md:grid-cols-2 lg:gap-20">
          <div data-reveal>
            <p className="eyebrow">Today</p>
            <h2 id="roles-heading" className="heading mt-4 text-3xl sm:text-4xl">
              Present roles
            </h2>
            <ul className="mt-6 border-t border-line">
              {presentRoles.map((r) => (
                <li key={r.org} className="border-b border-line py-4">
                  <span className="block font-semibold text-navy">{r.title}</span>
                  <span className="text-body">{r.org}</span>
                </li>
              ))}
            </ul>
          </div>
          <div data-reveal data-reveal-delay="120">
            <p className="eyebrow">Career history</p>
            <h2 className="heading mt-4 text-3xl sm:text-4xl">Where she has served</h2>
            <ul className="mt-6 border-t border-line">
              {pastRoles.map((r) => (
                <li key={r} className="border-b border-line py-4 text-body">
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA ------------------------------------------------------------------- */}
      <section className="bg-navy py-20 text-white lg:py-24">
        <div className="container-site text-center" data-reveal>
          <h2 className="font-serif text-4xl font-semibold sm:text-5xl">
            Work with <em className="text-gold-light">Dr. A</em>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">Keynotes, coaching, and consulting with the founder of Accexx Insight.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href={links.booking}>Book Dr. A</ButtonLink>
            <ButtonLink href="/about" variant="outline-light">
              About Accexx Insight
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
