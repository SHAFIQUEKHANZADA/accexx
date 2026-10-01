import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
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
      {/* Dr. A (2026-10-02): the dark-dress photo as a big background, like the other pages; along the x01works About path. */}
      <PageHero
        eyebrow="Meet Dr. A"
        title={
          <>
            The Visionary Behind <em>Accexx Insight</em>
          </>
        }
        intro={
          <>
            <p className="font-serif text-2xl font-semibold text-white sm:text-3xl">Dr. Laide R. Alexander</p>
            <ul className="mt-4 space-y-1.5 text-base text-white/90 sm:text-lg">
              {presentRoles.map((r) => (
                <li key={r.org} className="flex gap-3">
                  <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-gold" />
                  <span>
                    <span className="font-semibold text-white">{r.title}</span>, {r.org}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-5 font-serif text-xl italic text-gold-light sm:text-2xl">We more than find solutions. We ensure transformation.</p>
          </>
        }
        image={headshot}
        imageAlt="Dr. Laide R. Alexander, Founder & CEO of Accexx Insight"
        full
        imagePosition="center 18%"
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={links.booking}>Book Dr. A</ButtonLink>
          <ButtonLink href="#story" variant="outline-light">
            Read the full story
          </ButtonLink>
        </div>
      </PageHero>

      {/* Intro ------------------------------------------------------------------- */}
      <section className="border-b border-line bg-cream py-14 lg:py-16">
        <div className="container-site">
          <p className="max-w-3xl text-lg leading-relaxed text-body sm:text-xl" data-reveal>
            {shortBio}
          </p>
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
