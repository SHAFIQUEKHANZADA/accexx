import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { SignupForm } from "@/components/ui/SignupForm";
import { books } from "@/data/products";
import { insideThePages, insideThePagesPage } from "@/data/events";
import setPhoto from "../../../public/images/inside-the-pages-set.jpg";
import { UnfinishedCircle } from "@/components/ui/UnfinishedCircle";

export const metadata: Metadata = {
  title: "Inside the Pages with Dr. A",
  description:
    "Every Book. Different Perspective. Inside the Pages with Dr. A is where books become conversations: armchairs, a passage read aloud together, and space for people to say something true.",
  alternates: { canonical: "/inside-the-pages" },
};

export default function InsideThePagesPage() {
  const next = insideThePages.schedule[0];
  return (
    <>
      {/* Hero: the set itself */}
      <section className="relative overflow-hidden bg-cream">
        <UnfinishedCircle className="pointer-events-none absolute -bottom-56 -right-40 size-[34rem] text-gold/50" />
        {/* Dr. A (2026-10-01): the set photo larger and catchy, so it spans the full container width. */}
        <div className="container-site relative py-14 sm:py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:items-end lg:gap-14">
            <div>
              <p className="eyebrow animate-fade-up">Inside the Pages with Dr. A</p>
              <h1
                className="heading mt-4 animate-fade-up text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-[4rem]"
                style={{ animationDelay: "80ms" }}
              >
                Every Book. <em className="text-gold">Different Perspective.</em>
              </h1>
              <p className="mt-5 animate-fade-up font-serif text-2xl font-medium italic text-navy/80" style={{ animationDelay: "160ms" }}>
                {insideThePages.lede}
              </p>
            </div>
            <div>
              <div className="animate-fade-up rounded-2xl border border-line bg-white p-5 shadow-sm" style={{ animationDelay: "240ms" }}>
                <p className="eyebrow text-[0.65rem]">{insideThePages.scheduleTitle}</p>
                <p className="mt-2 flex flex-wrap items-baseline gap-x-3">
                  <span className="text-3xl font-light tracking-tight text-navy">{next.label}</span>
                  <span className="font-semibold text-gold-deep">{next.venue}</span>
                </p>
                {/* Time, address and ticketing pending from Dr. A (TODO_CLIENT.md). */}
                <p className="mt-1 text-sm text-muted">Time and address to be announced to the Accexx Circle.</p>
              </div>
              <div className="mt-8 flex animate-fade-up flex-col gap-3 sm:flex-row" style={{ animationDelay: "300ms" }}>
                <ButtonLink href="#join">Join the conversation</ButtonLink>
                <ButtonLink href="#schedule" variant="outline">
                  See the schedule
                </ButtonLink>
              </div>
            </div>
          </div>
          <div
            className="relative mt-12 aspect-[1465/794] animate-fade-up overflow-hidden rounded-[2rem] shadow-2xl shadow-navy/20"
            style={{ animationDelay: "120ms" }}
          >
            <Image
              src={setPhoto}
              alt="The Inside the Pages with Dr. A set: mustard backdrop, armchairs, reading lounge and event banner"
              fill
              preload
              placeholder="blur"
              sizes="(min-width: 1280px) 1200px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* How it came about */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-site grid gap-10 lg:grid-cols-[4fr_7fr] lg:gap-20">
          <div data-reveal>
            <p className="eyebrow">How this came about</p>
            <h2 className="heading mt-4 text-4xl leading-[1.08] sm:text-5xl">
              Where books become <em className="text-gold">conversations.</em>
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-body" data-reveal data-reveal-delay="120">
            {insideThePagesPage.story.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* The signature experience */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="container-site">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-end lg:gap-16">
            <div data-reveal>
              <p className="eyebrow">The signature experience</p>
              <h2 className="heading mt-4 text-4xl leading-[1.08] sm:text-5xl">
                The room signals it <em className="text-gold">before anyone speaks.</em>
              </h2>
            </div>
            <div className="space-y-4 text-lg leading-relaxed text-body" data-reveal data-reveal-delay="100">
              <p>{insideThePagesPage.staging}</p>
              <p>{insideThePagesPage.stagingDetail}</p>
            </div>
          </div>
          <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {insideThePages.sequence.map((step, i) => (
              <li
                key={step.title}
                className="rounded-3xl border border-line bg-white p-7 shadow-sm"
                data-reveal
                data-reveal-delay={String(i * 80)}
              >
                <span className="grid size-11 place-items-center rounded-full bg-gold text-sm font-bold text-white">{i + 1}</span>
                <h3 className="heading mt-5 text-2xl">{step.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-body">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Open floor + resource corner */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-site">
          <div className="max-w-3xl" data-reveal>
            <p className="eyebrow">For writers in the room</p>
            <h2 className="heading mt-4 text-4xl leading-[1.08] sm:text-5xl">
              The Open Floor <em className="text-gold">&amp; Resource Corner</em>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-body">{insideThePagesPage.openFloorIntro}</p>
          </div>

          <div className="mt-14 grid items-start gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-line bg-cream p-8 sm:p-10" data-reveal>
              <h3 className="heading text-3xl">Other authors: the Open Floor</h3>
              <ul className="mt-6 space-y-4">
                {insideThePagesPage.openFloor.map((item) => (
                  <li key={item.slice(0, 24)} className="flex gap-3 text-body">
                    <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-line bg-white p-8 shadow-sm sm:p-10" data-reveal data-reveal-delay="100">
              <h3 className="heading text-3xl">Invited resources: the Resource Corner</h3>
              <dl className="mt-6 divide-y divide-line">
                {insideThePagesPage.resources.map((r) => (
                  <div key={r.type} className="grid gap-1 py-4 sm:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] sm:gap-6">
                    <dt className="font-semibold text-navy">{r.type}</dt>
                    <dd className="text-body">{r.offer}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 text-sm text-muted">{insideThePagesPage.resourcesNote}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section id="schedule" className="scroll-mt-20 bg-navy py-20 text-white lg:py-28">
        <div className="container-site">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
            <div data-reveal>
              <p className="eyebrow text-gold-light!">Upcoming schedule</p>
              <h2 className="mt-4 font-serif text-4xl font-semibold sm:text-5xl">{insideThePages.scheduleTitle}</h2>
            </div>
            <p className="text-lg text-white/75 lg:justify-self-end" data-reveal data-reveal-delay="100">
              Sessions are planned through November 2028. {insideThePagesPage.closing}
            </p>
          </div>
          <ol className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {insideThePages.schedule.map((e, i) => (
              <li
                key={e.number}
                className={`rounded-2xl border p-5 ${i === 0 ? "border-gold bg-gold text-white" : "border-white/15 bg-white/[0.04]"}`}
                data-reveal
                data-reveal-delay={String(Math.min(i, 8) * 40)}
              >
                <p className={`text-xs font-bold uppercase tracking-[0.16em] ${i === 0 ? "text-white/85" : "text-gold-light"}`}>
                  Session #{e.number}
                </p>
                <p className="mt-2 text-2xl font-light tracking-tight">{e.label}</p>
                <p className={`mt-1 text-sm ${i === 0 ? "font-semibold" : "text-white/60"}`}>{e.venue ?? "Venue TBA"}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Join */}
      <section id="join" className="scroll-mt-20 bg-cream py-20 lg:py-28">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div data-reveal>
            <p className="eyebrow">Join the conversation</p>
            <h2 className="heading mt-4 text-4xl leading-[1.08] sm:text-5xl">
              Pull up a chair. <em className="text-gold">Bring a date.</em>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-body">{insideThePagesPage.closing}</p>
            <p className="mt-4 text-body">
              The conversation starts with Dr. A&apos;s books:{" "}
              {books.map((b, i) => (
                <span key={b.slug}>
                  <em className="font-semibold text-navy">{b.name}</em>
                  {i < books.length - 1 ? " and " : "."}
                </span>
              ))}
            </p>
            <div className="mt-6">
              <ButtonLink href="/shop" variant="link">
                Get the books
              </ButtonLink>
            </div>
          </div>
          <div className="rounded-3xl border border-line bg-white p-7 shadow-sm sm:p-9" data-reveal data-reveal-delay="120">
            <h3 className="heading text-3xl">Reserve your interest</h3>
            <p className="mt-2 text-[0.95rem] text-body">We&apos;ll send session details to the Accexx Circle first.</p>
            <div className="mt-6">
              <SignupForm
                formType="inside-the-pages-interest"
                cta="Join the conversation"
                success="Thank you. Your registration has been received. Event information will be sent to your email."
                authorOption
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
