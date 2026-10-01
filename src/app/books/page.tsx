import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { Gallery } from "@/components/ui/Gallery";
import { ButtonLink } from "@/components/ui/Button";
import { SignupForm } from "@/components/ui/SignupForm";
import { VideoFeature } from "@/components/ui/VideoFeature";
import { books, formatPrice } from "@/data/products";
import { bookLaunch, conference2026, insideThePages } from "@/data/events";
import styledBook from "../../../public/images/why-move-my-cheese-styled.jpg";
import insideThePagesSet from "../../../public/images/inside-the-pages-set.jpg";

export const metadata: Metadata = {
  title: "Books & Events",
  description:
    "Books by Dr. Laide R. Alexander (The Unfinished Leader and Why Move My Cheese?), plus the Why Move My Cheese? Leadership Conference and Inside the Pages with Dr. A.",
  alternates: { canonical: "/books" },
};

export default function BooksPage() {
  return (
    <>
      <PageHero
        eyebrow="Books & Events"
        title={
          <>
            Every Page. <em className="text-gold">A New Possibility.</em>
          </>
        }
        intro={
          <>
            <p className="font-serif text-2xl font-medium italic text-navy/80">
              Read. Imagine. Become. <span className="font-sans text-sm font-bold not-italic tracking-wider text-gold-deep">#R.I.B</span>
            </p>
            <p className="mt-4">
              Practical wisdom and proven strategies to help you navigate change, own your &lsquo;why,&rsquo; and lead a life that lasts.
            </p>
          </>
        }
        image={styledBook}
        imageAlt="Why Move My Cheese? by Dr. Laide R. Alexander on a reading table"
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/shop">Shop Books</ButtonLink>
          <ButtonLink href="#conference" variant="outline">
            The Conference
          </ButtonLink>
        </div>
      </PageHero>

      {/* Books ---------------------------------------------------------------- */}
      <section className="bg-white py-20 lg:py-28" aria-labelledby="books-heading">
        <div className="container-site">
          <p className="eyebrow">Books by Dr. A</p>
          <h2 id="books-heading" className="heading mt-4 text-4xl sm:text-5xl">
            Two books. <em className="text-gold">One transformative journey.</em>
          </h2>

          <div className="mt-14 grid gap-16 lg:gap-20">
            {books.map((b, i) => (
              <article
                key={b.slug}
                className={`grid items-center gap-10 md:grid-cols-2 lg:gap-20 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}
                data-reveal
              >
                <div className="mx-auto w-full max-w-sm md:max-w-md">
                  {b.cover && (
                    <div className="relative aspect-[2/3] overflow-hidden rounded-l-sm rounded-r-md shadow-[0_30px_60px_-20px_rgba(31,56,100,0.45)]">
                      <Image
                        src={b.cover}
                        alt={`${b.name} book cover`}
                        fill
                        placeholder="blur"
                        sizes="(min-width: 768px) 448px, 384px"
                        className="object-cover"
                      />
                    </div>
                  )}
                </div>
                <div>
                  {b.flag && <p className="eyebrow">{b.flag}</p>}
                  <h3 className="heading mt-3 text-4xl sm:text-5xl">{b.name}</h3>
                  {b.subtitle && <p className="mt-4 font-serif text-2xl font-medium italic leading-snug text-navy/80">{b.subtitle}</p>}
                  <p className="mt-3 text-sm font-medium text-muted">by {b.author}</p>

                  {/* Kindle (Amazon-only) is held back until Dr. A decides whether to list it (TODO_CLIENT.md). */}
                  <ul className="mt-8 divide-y divide-line overflow-hidden rounded-2xl border border-line">
                    {b.formats
                      ?.filter((f) => f.format !== "Kindle")
                      .map((f) => (
                        <li key={f.format} className="flex items-center justify-between gap-4 bg-white px-5 py-4">
                          <span className="font-semibold text-navy">{f.format}</span>
                          {f.status === "available" && f.price ? (
                            <span className="text-ink">
                              <span className="font-semibold">{formatPrice(f.price)}</span>
                              {f.format === "Hardcover" && b.compareAt && (
                                <s className="ml-2 text-sm text-muted">{formatPrice(b.compareAt)}</s>
                              )}
                            </span>
                          ) : (
                            <span className="rounded-full bg-gold-soft px-3 py-1 text-xs font-semibold text-gold-deep">
                              {f.note ?? "Coming soon"}
                            </span>
                          )}
                        </li>
                      ))}
                  </ul>
                  <div className="mt-8">
                    <ButtonLink href={`/shop/${b.slug}`} variant="navy">
                      Buy {b.name}
                    </ButtonLink>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Conference ----------------------------------------------------------- */}
      <section id="conference" className="scroll-mt-20 bg-cream py-20 lg:py-28" aria-labelledby="conference-heading">
        <div className="container-site">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:items-end lg:gap-16">
            <div data-reveal>
              <p className="eyebrow">The annual conference</p>
              <h2 id="conference-heading" className="heading mt-4 text-4xl sm:text-5xl lg:text-[3.4rem]">
                Why Move My Cheese? <em className="text-gold">Leadership Conference</em>
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-body">
                Created and hosted by Dr. Laide R. Alexander, the annual Why Move My Cheese? Conference brings leaders across corporate,
                education, and nonprofit sectors together to navigate change and transformation.
              </p>
            </div>
            <div className="rounded-3xl border border-gold/40 bg-white p-7 shadow-sm sm:p-8" data-reveal data-reveal-delay="120">
              <p className="eyebrow">The next conference</p>
              <p className="heading mt-3 text-3xl">Details coming soon.</p>
              <p className="mt-2 text-[0.95rem] text-body">Be the first to hear the dates and venue.</p>
              <div className="mt-6">
                <SignupForm
                  formType="conference-interest"
                  cta="Notify me"
                  success="Thank you. We'll let you know as soon as the dates are announced."
                />
              </div>
            </div>
          </div>

          <div className="mt-16" data-reveal>
            <VideoFeature src={conference2026.video} poster={conference2026.videoPoster} title={conference2026.title} />
          </div>

          <h3 className="mt-16 text-sm font-bold uppercase tracking-[0.18em] text-navy">{conference2026.title}: highlights</h3>
          <div className="mt-6">
            <Gallery photos={conference2026.people} />
          </div>
        </div>
      </section>

      {/* Book launch ---------------------------------------------------------- */}
      <section className="bg-white py-20 lg:py-28" aria-labelledby="launch-heading">
        <div className="container-site">
          <p className="eyebrow">Moments</p>
          <h2 id="launch-heading" className="heading mt-4 text-4xl sm:text-5xl">
            {bookLaunch.title}
          </h2>
          <div className="mt-10" data-reveal>
            <VideoFeature src={bookLaunch.video} poster={bookLaunch.videoPoster} title={bookLaunch.title} />
          </div>
          <div className="mt-8">
            <Gallery photos={bookLaunch.photos} />
          </div>
        </div>
      </section>

      {/* Inside the Pages teaser ---------------------------------------------- */}
      <section className="bg-navy py-20 text-white lg:py-24">
        <div className="container-site">
          <div className="relative aspect-[1465/794] overflow-hidden rounded-3xl shadow-2xl shadow-black/30" data-reveal>
            <Image
              src={insideThePagesSet}
              alt="The Inside the Pages with Dr. A set"
              fill
              placeholder="blur"
              sizes="(min-width: 1280px) 1200px, 100vw"
              className="object-cover"
            />
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-end lg:gap-16" data-reveal data-reveal-delay="120">
            <div>
              <p className="eyebrow text-gold-light!">New event series</p>
              <h2 className="mt-4 font-serif text-4xl font-semibold sm:text-5xl">
                Inside the Pages <em className="text-gold-light">with Dr. A</em>
              </h2>
            </div>
            <div>
              <p className="font-serif text-2xl italic text-gold-light">
                &ldquo;{insideThePages.tagline}&rdquo; {insideThePages.lede}
              </p>
              <p className="mt-5 text-white/80">
                First session: <span className="font-semibold text-white">{insideThePages.schedule[0].label}</span> at{" "}
                <span className="font-semibold text-white">{insideThePages.schedule[0].venue}</span>.
              </p>
              <div className="mt-8">
                <ButtonLink href="/inside-the-pages">Discover Inside the Pages</ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
