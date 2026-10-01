import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { ButtonLink } from "@/components/ui/Button";
import { ArrowRight } from "@/components/ui/icons";
import { BookingBand, CheckList, InfoCard } from "@/components/services/Blocks";
import { InquiryForm } from "@/components/services/InquiryForm";
import { coachingFraming, coachingStreams } from "@/data/coaching";
import { links } from "@/lib/site";
import portrait from "../../../../public/images/dr-laide-portrait-bw.jpg";

export const metadata: Metadata = {
  title: "Coaching",
  description:
    "Executive & Leadership Coaching (1:1) and Group & Team Coaching with Dr. Laide R. Alexander. Coaching that goes deeper than goals — at the level of beliefs, stories, and habits.",
  alternates: { canonical: "/services/coaching" },
};

export default function CoachingPage() {
  return (
    <>
      <PageHero
        eyebrow="Coaching"
        title={
          <>
            Coaching that goes <em className="text-gold">deeper than goals.</em>
          </>
        }
        intro="We work at the level of beliefs, stories, and habits — your Human Operating System."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={links.booking}>Book a Discovery Call</ButtonLink>
          <ButtonLink href="#pricing" variant="outline">
            Packages &amp; pricing
          </ButtonLink>
        </div>
      </PageHero>

      {/* Intro + stream picker -------------------------------------------------- */}
      <section className="bg-white py-20 lg:py-24" aria-labelledby="streams-heading">
        <div className="container-site grid items-center gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] shadow-xl shadow-navy/10" data-reveal>
            <Image
              src={portrait}
              alt="Portrait of Dr. Laide R. Alexander"
              fill
              placeholder="blur"
              sizes="(min-width: 1024px) 35vw, 90vw"
              className="object-cover object-top"
            />
          </div>
          <div data-reveal data-reveal-delay="100">
            <p className="eyebrow">Choose your stream</p>
            <h2 id="streams-heading" className="heading mt-4 text-4xl sm:text-5xl">
              One-to-one or <em className="text-gold">together.</em>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-body">
              One-on-one transformation guided by Dr. A and supported by a network of executive consultants who understand
              the overcomer and creator journey.
            </p>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-muted">{coachingFraming}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {coachingStreams.map((s) => (
                <a
                  key={s.slug}
                  href={`#${s.slug}`}
                  className="group flex flex-col rounded-3xl border border-line bg-cream/60 p-6 transition-colors hover:border-gold/60"
                >
                  <span className="font-serif text-xl font-semibold leading-snug text-navy">{s.name}</span>
                  <span className="mt-2 text-sm text-body">From {s.pricing.perSession}/session</span>
                  <span className="mt-auto inline-flex items-center gap-2 pt-4 text-sm font-semibold text-gold-deep group-hover:text-navy">
                    Explore <ArrowRight width={14} height={14} />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Streams ------------------------------------------------------------------ */}
      {coachingStreams.map((s, si) => (
        <section
          key={s.slug}
          id={s.slug}
          className={`scroll-mt-20 py-20 lg:py-24 ${si % 2 === 0 ? "bg-cream" : "bg-white"}`}
          aria-labelledby={`${s.slug}-heading`}
        >
          <div className="container-site">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-16">
              <div data-reveal>
                <p className="eyebrow">Stream {si + 1}</p>
                <h2 id={`${s.slug}-heading`} className="heading mt-4 text-4xl sm:text-5xl">
                  {s.name}
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-body">{s.description}</p>
                <p className="mt-6 rounded-2xl border border-line bg-white px-5 py-4 text-[0.95rem] leading-relaxed text-body">
                  <span className="font-semibold text-navy">Who it&apos;s for: </span>
                  {s.whoFor}
                </p>
              </div>
              <div className="rounded-3xl border border-gold/40 bg-white p-6 sm:p-8" data-reveal data-reveal-delay="100">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-navy">Focus areas</p>
                <CheckList items={s.focusAreas} className="mt-5" />
              </div>
            </div>

            {/* Session structure */}
            <div className="mt-14" data-reveal>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <h3 className="heading text-2xl sm:text-3xl">Standard session structure</h3>
                <p className="text-sm font-semibold text-gold-deep">Session length: {s.sessionLength}</p>
              </div>
              <p className="mt-2 text-[0.95rem] text-muted">{s.engagementStructure}</p>
              <ol className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {s.sessionStructure.map((step, i) => (
                  <li key={step.title} className="flex flex-col rounded-3xl border border-line bg-white p-6">
                    <span className="flex size-9 items-center justify-center rounded-full bg-gold text-sm font-bold text-white">{i + 1}</span>
                    <span className="mt-4 font-serif text-xl font-semibold leading-snug text-navy">{step.title}</span>
                    <span className="mt-1 text-xs font-semibold uppercase tracking-wider text-gold-deep">{step.minutes}</span>
                    <span className="mt-3 text-[0.95rem] leading-relaxed text-body">{step.summary}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              <InfoCard title="Tools & frameworks used">
                <CheckList items={s.tools} />
              </InfoCard>
              <InfoCard title="What's delivered">
                <CheckList items={s.delivered} />
              </InfoCard>
            </div>
            <div className="mt-5 rounded-3xl bg-navy-soft p-6 sm:p-8">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-navy">How progress is reviewed</p>
              <p className="mt-3 leading-relaxed text-body">{s.progressReview}</p>
            </div>
          </div>
        </section>
      ))}

      {/* Pricing ------------------------------------------------------------------ */}
      <section id="pricing" className="scroll-mt-20 border-t border-line bg-white py-20 lg:py-24" aria-labelledby="pricing-heading">
        <div className="container-site">
          <div className="max-w-3xl" data-reveal>
            <p className="eyebrow">Packages &amp; pricing</p>
            <h2 id="pricing-heading" className="heading mt-4 text-4xl sm:text-5xl">
              Invest in your <em className="text-gold">breakthrough.</em>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-body">
              Priced per session, with a package discount for booking a full engagement upfront.
            </p>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {coachingStreams.map((s, i) => (
              <article
                key={s.slug}
                className="flex flex-col rounded-3xl border border-line bg-cream/60 p-6 sm:p-8"
                data-reveal
                data-reveal-delay={String(i * 100)}
              >
                <h3 className="font-serif text-2xl font-semibold text-navy">{s.name}</h3>
                <p className="mt-2 text-body">
                  <span className="font-serif text-4xl font-semibold text-navy">{s.pricing.perSession}</span>
                  <span className="ml-1 text-sm text-muted">/ session · {s.sessionLength}</span>
                </p>
                <ul className="mt-6 divide-y divide-line overflow-hidden rounded-2xl border border-line bg-white">
                  {s.pricing.packages.map((p) => (
                    <li key={p.label} className="flex items-center justify-between gap-4 px-5 py-4">
                      <span className="font-semibold text-navy">{p.label}</span>
                      <span className="text-right font-semibold text-ink">
                        {p.price}
                        {p.note && <span className="ml-1 text-sm font-normal text-muted">{p.note}</span>}
                      </span>
                    </li>
                  ))}
                </ul>
                {s.pricing.note && <p className="mt-4 text-sm text-muted">{s.pricing.note}</p>}
                <div className="mt-auto pt-7">
                  <ButtonLink href="#inquiry" variant="navy" size="sm">
                    Ask about {s.slug === "group-team" ? "group coaching" : "1:1 coaching"}
                  </ButtonLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry ------------------------------------------------------------------ */}
      <section id="inquiry" className="scroll-mt-20 bg-cream py-20 lg:py-24" aria-labelledby="inquiry-heading">
        <div className="container-site grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          <div data-reveal>
            <p className="eyebrow">Coaching inquiry</p>
            <h2 id="inquiry-heading" className="heading mt-4 text-4xl sm:text-5xl">
              Start the <em className="text-gold">conversation.</em>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-body">
              Tell us a little about you or your team, and we&apos;ll be in touch to find the right coaching stream.
            </p>
            <div className="mt-8">
              <ButtonLink href={links.booking} variant="outline">
                Or book a discovery call
              </ButtonLink>
            </div>
          </div>
          <div className="rounded-3xl border border-line bg-white p-6 sm:p-8" data-reveal data-reveal-delay="100">
            <InquiryForm
              formType="coaching-inquiry"
              topicOptions={[...coachingStreams.map((s) => s.name), "Not sure yet"]}
              cta="Send inquiry"
              success="Thank you. We've received your coaching inquiry and will be in touch soon."
              messageLabel="What would you like to work on?"
            />
          </div>
        </div>
      </section>

      <BookingBand
        title={
          <>
            Ready for your <em className="text-gold-light">breakthrough?</em>
          </>
        }
        body="We more than find solutions. We ensure transformation."
      />
    </>
  );
}
