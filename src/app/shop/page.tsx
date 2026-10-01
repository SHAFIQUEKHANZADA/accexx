import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { ShopCatalog } from "@/components/shop/ShopCatalog";
import { ShopPopup } from "@/components/shop/ShopPopup";
import { books } from "@/data/products";
import { conference2026, insideThePages } from "@/data/events";
import headshot from "../../../public/images/dr-laide-headshot.jpg";
import insideThePagesSet from "../../../public/images/inside-the-pages-set.jpg";
import { UnfinishedCircle } from "@/components/ui/UnfinishedCircle";

export const metadata: Metadata = {
  title: { absolute: "Accexx Insight Shop | Books & Swag" },
  description:
    "Every Page. A New Possibility. Shop books by Dr. Laide R. Alexander, The Unfinished Leader and Why Move My Cheese?, plus Accexx Insight merch and gift cards.",
  alternates: { canonical: "/shop" },
  openGraph: { title: "Accexx Insight Shop | Books & Swag" },
  twitter: { title: "Accexx Insight Shop | Books & Swag" },
};

export default function ShopPage() {
  const conferencePhoto = conference2026.photos[0];
  const firstSession = insideThePages.schedule[0];

  return (
    <>
      {/* Hero ------------------------------------------------------------------ */}
      <section className="relative overflow-hidden border-b border-line bg-cream">
        <UnfinishedCircle className="pointer-events-none absolute -left-40 -top-40 size-[32rem] text-gold/40" />
        <div className="container-site relative grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-14 lg:py-20">
          <div className="lg:order-2">
            <p className="eyebrow animate-fade-up">Accexx Insight Shop</p>
            <h1 className="heading mt-4 animate-fade-up text-[2.75rem] leading-[1.02] sm:text-6xl lg:text-[4.25rem]" style={{ animationDelay: "80ms" }}>
              Every Page. <em className="text-gold">A New Possibility.</em>
            </h1>
            <span aria-hidden className="mt-6 block h-[3px] w-20 rounded-full bg-linear-to-r from-gold to-transparent" />
            <p className="mt-6 animate-fade-up font-serif text-3xl font-medium italic text-navy/85 sm:text-4xl" style={{ animationDelay: "160ms" }}>
              Read. Imagine. Become.{" "}
              <span className="whitespace-nowrap font-sans text-sm font-bold not-italic tracking-wider text-gold-deep">#R.I.B</span>
            </p>
            <p className="mt-5 max-w-xl animate-fade-up text-lg leading-relaxed text-body" style={{ animationDelay: "200ms" }}>
              Practical wisdom and proven strategies to help you navigate change, own your &lsquo;why,&rsquo; and lead a life that lasts.
            </p>
            <div className="mt-8 flex animate-fade-up flex-col gap-3 sm:flex-row" style={{ animationDelay: "240ms" }}>
              <ButtonLink href="#shop-grid" variant="navy">
                Shop Books
              </ButtonLink>
              <ButtonLink href="/books" variant="outline">
                Learn More
              </ButtonLink>
            </div>
          </div>

          {/* Photo + both covers */}
          <div className="relative animate-fade-up lg:order-1" style={{ animationDelay: "120ms" }}>
            <div className="relative mr-[28%] aspect-4/5 overflow-hidden rounded-[2rem] shadow-xl shadow-navy/15 sm:mr-[34%]">
              <Image src={headshot} alt="Dr. Laide R. Alexander" fill preload placeholder="blur" sizes="(min-width: 1024px) 28vw, 66vw" className="object-cover object-top" />
              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-navy-deep/90 via-navy-deep/50 to-transparent p-5 pt-16 text-white">
                <p className="font-serif text-2xl italic text-gold-light">Dr. Laide R. Alexander</p>
                <p className="mt-1 text-xs font-medium text-white/85 sm:text-sm">Author. Speaker. Transformation Leader.</p>
              </div>
            </div>
            <div className="absolute bottom-[8%] right-0 flex w-[52%] items-end sm:w-[48%]">
              {books.map((b, i) =>
                b.cover ? (
                  <div
                    key={b.slug}
                    className={`relative aspect-2/3 w-[62%] shrink-0 overflow-hidden rounded-l-[2px] rounded-r-md bg-white shadow-[0_24px_50px_-18px_rgba(31,56,100,0.6)] ring-1 ring-black/5 ${
                      i === 0 ? "z-10 -mr-[24%]" : "mb-[10%]"
                    }`}
                  >
                    <Image src={b.cover} alt={`${b.name} book cover`} fill placeholder="blur" sizes="(min-width: 1024px) 14vw, 32vw" className="object-cover" />
                  </div>
                ) : null,
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Catalog --------------------------------------------------------------- */}
      <section id="shop-grid" className="scroll-mt-20 bg-white py-14 lg:py-20" aria-labelledby="shop-heading">
        <div className="container-site">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Shop</p>
              <h2 id="shop-heading" className="heading mt-3 text-4xl sm:text-5xl">
                Books &amp; <em className="text-gold">swag</em>
              </h2>
            </div>
          </div>
          <ShopCatalog />
        </div>
      </section>

      {/* Inside the Pages ------------------------------------------------------- */}
      <section className="bg-cream py-16 lg:py-24" aria-labelledby="itp-heading">
        <div className="container-site grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[1465/794] overflow-hidden rounded-3xl shadow-lg shadow-navy/10" data-reveal>
            <Image src={insideThePagesSet} alt="The Inside the Pages with Dr. A set: mustard backdrop and armchairs" fill placeholder="blur" sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
          <div data-reveal data-reveal-delay="120">
            <p className="eyebrow">New event series</p>
            <h2 id="itp-heading" className="heading mt-4 text-4xl sm:text-5xl">
              Inside the Pages <em className="text-gold">with Dr. A</em>
            </h2>
            <p className="mt-4 font-serif text-2xl italic text-navy/80">
              &ldquo;{insideThePages.tagline}&rdquo; {insideThePages.lede}
            </p>
            {firstSession.venue && (
              <p className="mt-5 text-body">
                First session: <span className="font-semibold text-navy">{firstSession.label}</span> at{" "}
                <span className="font-semibold text-navy">{firstSession.venue}</span>.
              </p>
            )}
            <div className="mt-8">
              <ButtonLink href="/inside-the-pages">Discover Inside the Pages</ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* Conference ------------------------------------------------------------- */}
      <section className="bg-navy py-16 text-white lg:py-24" aria-labelledby="conf-heading">
        <div className="container-site grid items-center gap-10 lg:grid-cols-[minmax(0,6fr)_minmax(0,5fr)] lg:gap-16">
          <div data-reveal>
            <p className="eyebrow text-gold-light!">The annual conference</p>
            <h2 id="conf-heading" className="mt-4 font-serif text-4xl font-semibold sm:text-5xl">
              Why Move My Cheese? <em className="text-gold-light">Leadership Conference</em>
            </h2>
            <p className="mt-5 max-w-xl leading-relaxed text-white/80">
              Created and hosted by Dr. Laide R. Alexander, the annual Why Move My Cheese? Conference brings leaders across corporate,
              education, and nonprofit sectors together to navigate change and transformation.
            </p>
            <p className="mt-4 text-sm font-semibold text-gold-light">Next conference: details coming soon.</p>
            <div className="mt-8">
              <ButtonLink href="/books#conference" variant="outline-light">
                See the conference
              </ButtonLink>
            </div>
          </div>
          {conferencePhoto && (
            <div className="relative aspect-3/2 overflow-hidden rounded-3xl" data-reveal data-reveal-delay="120">
              <Image src={conferencePhoto.src} alt={conferencePhoto.alt} fill sizes="(min-width: 1024px) 42vw, 100vw" className="object-cover" />
            </div>
          )}
        </div>
      </section>

      <ShopPopup />
    </>
  );
}
