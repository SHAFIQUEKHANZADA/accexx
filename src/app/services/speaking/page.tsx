import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { ButtonLink } from "@/components/ui/Button";
import { BookingBand, CheckList } from "@/components/services/Blocks";
import { InquiryForm } from "@/components/services/InquiryForm";
import { links } from "@/lib/site";
import stageAudience from "../../../../public/images/speaking-stage-audience-bw.jpg";
import conferenceGroup from "../../../../public/images/events/wmmc-2026-p01.jpg";
import conferenceRoom from "../../../../public/images/events/wmmc-2026-p02.jpg";
import launchAudience from "../../../../public/images/events/book-launch-p07.jpg";

export const metadata: Metadata = {
  title: "Speaking: Book Dr. A",
  description:
    "Keynotes, panels, and talks by Dr. Laide R. Alexander that don't just inform. They shift how people think about leadership, culture, and human behavior.",
  alternates: { canonical: "/services/speaking" },
};

// Credentials: all from Dr. A's bio on the live site and the draft site.
const credentials = [
  "Member, Forbes Coaches Council",
  "Author of The Unfinished Leader and Why Move My Cheese?",
  "Creator and host of the annual Why Move My Cheese? Conference",
  "Designed and delivered over 72 workshops across 8 school types in the United States and Africa",
  "Has served as a college president, professor, and business founder",
  "Doctorate in Educational & Leadership Management; MBA in Human Resources Management",
];

const clients = ["McDonald's", "PSCC", "HCC", "Serasana", "the Alexander Group", "AOPE", "Primrose", "Corinthian Colleges"];

const formats = ["Keynotes", "Panels", "Talks", "Workshops"];
const themes = ["Leadership", "Culture", "Human behavior", "Change & transformation"];

export default function SpeakingPage() {
  return (
    <>
      <PageHero
        eyebrow="Speaking"
        title={
          <>
            Talks that <em className="text-gold">shift</em> how people think.
          </>
        }
        intro="Keynotes, panels, and talks that don't just inform. They shift how people think about leadership, culture, and human behavior."
        image={stageAudience}
        imageAlt="Dr. Laide R. Alexander on stage at the lectern, facing a full auditorium"
        full
        imagePosition="center 40%"
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={links.booking}>Book Dr. A</ButtonLink>
          <ButtonLink href="#inquiry" variant="outline-light">
            Send a speaking inquiry
          </ButtonLink>
        </div>
      </PageHero>

      {/* What Dr. A brings -------------------------------------------------------- */}
      <section className="bg-white py-20 lg:py-24" aria-labelledby="brings-heading">
        <div className="container-site grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div data-reveal>
            <p className="eyebrow">On stage with Dr. A</p>
            <h2 id="brings-heading" className="heading mt-4 text-4xl sm:text-5xl">
              From surviving <em className="text-gold">to thriving.</em>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-body">
              Keynotes and workshops that inspire, equip, and activate audiences to move from surviving to thriving.
            </p>
            <div className="mt-8 space-y-5">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-navy">Formats</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {formats.map((f) => (
                    <li key={f} className="rounded-full bg-gold-soft px-4 py-2 text-sm font-semibold text-gold-deep">
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-navy">Themes</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {themes.map((t) => (
                    <li key={t} className="rounded-full border border-navy/15 px-4 py-2 text-sm font-semibold text-navy">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="rounded-3xl border border-line bg-cream/60 p-7 sm:p-9" data-reveal data-reveal-delay="100">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-navy">Why Dr. A</p>
            <CheckList items={credentials} className="mt-6" />
          </div>
        </div>
      </section>

      {/* In the room -------------------------------------------------------------- */}
      <section className="bg-cream py-20 lg:py-24" aria-labelledby="room-heading">
        <div className="container-site">
          <div className="max-w-3xl" data-reveal>
            <p className="eyebrow">In the room</p>
            <h2 id="room-heading" className="heading mt-4 text-4xl sm:text-5xl">
              Recent <em className="text-gold">stages.</em>
            </h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
            <figure className="md:col-span-2 lg:col-span-1 lg:row-span-2" data-reveal>
              {/* Dr. A (2026-10-02): "For the speaking, please show the people as much as possible." */}
              <div className="relative aspect-[1502/1000] overflow-hidden rounded-3xl lg:aspect-auto lg:h-full lg:min-h-[28rem]">
                <Image
                  src={conferenceRoom}
                  alt="Attendees at round tables during the Why Move My Cheese? Leadership Conference 2026"
                  fill
                  placeholder="blur"
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-sm text-muted">
                Attendees in session · <span className="font-semibold text-navy">Why Move My Cheese? Leadership Conference 2026</span>
              </figcaption>
            </figure>
            <figure data-reveal data-reveal-delay="100">
              <div className="relative aspect-[1439/785] overflow-hidden rounded-3xl">
                <Image
                  src={conferenceGroup}
                  alt="Attendees together at the Why Move My Cheese? backdrop"
                  fill
                  placeholder="blur"
                  sizes="(min-width: 1024px) 40vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-sm text-muted">
                <span className="font-semibold text-navy">Why Move My Cheese? Leadership Conference 2026</span>
              </figcaption>
            </figure>
            <figure data-reveal data-reveal-delay="160">
              <div className="relative aspect-[1600/1066] overflow-hidden rounded-3xl">
                <Image
                  src={launchAudience}
                  alt="The audience at the Book Launch & Signing"
                  fill
                  placeholder="blur"
                  sizes="(min-width: 1024px) 40vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-sm text-muted">
                <span className="font-semibold text-navy">Book Launch &amp; Signing</span>
              </figcaption>
            </figure>
          </div>
          <div className="mt-8">
            <ButtonLink href="/books#conference" variant="link">
              More from the conference
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* Clients ------------------------------------------------------------------ */}
      <section className="border-y border-line bg-white py-14" aria-labelledby="clients-heading">
        <div className="container-site text-center">
          <h2 id="clients-heading" className="eyebrow">
            Organizations Dr. A has partnered with
          </h2>
          <ul className="mx-auto mt-6 flex max-w-4xl flex-wrap justify-center gap-x-8 gap-y-3">
            {clients.map((c) => (
              <li key={c} className="font-serif text-xl font-semibold text-navy/80 sm:text-2xl">
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Inquiry ------------------------------------------------------------------ */}
      <section id="inquiry" className="scroll-mt-20 bg-cream py-20 lg:py-24" aria-labelledby="inquiry-heading">
        <div className="container-site grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          <div data-reveal>
            <p className="eyebrow">Speaking inquiry</p>
            <h2 id="inquiry-heading" className="heading mt-4 text-4xl sm:text-5xl">
              Bring Dr. A to <em className="text-gold">your stage.</em>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-body">
              Tell us about your event: the audience, the date, the location, and what you&apos;d like people to walk away with.
            </p>
            <div className="mt-8">
              <ButtonLink href={links.booking} variant="outline">
                Book Dr. A
              </ButtonLink>
            </div>
          </div>
          <div className="rounded-3xl border border-line bg-white p-6 sm:p-8" data-reveal data-reveal-delay="100">
            <InquiryForm
              formType="speaking-inquiry"
              topicOptions={["Keynote", "Panel", "Talk", "Workshop", "Other"]}
              cta="Send speaking inquiry"
              success="Thank you. Your speaking inquiry has been received. We’ll review your event details and follow up."
              messageLabel="About your event (date, audience, location)"
            />
          </div>
        </div>
      </section>

      <BookingBand
        title={
          <>
            Ready to <em className="text-gold-light">book Dr. A?</em>
          </>
        }
        body="Keynotes, panels, and talks on leadership, culture, and human behavior."
        cta="Book Dr. A"
      />
    </>
  );
}
