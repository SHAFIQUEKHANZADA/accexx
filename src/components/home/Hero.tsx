import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import heroPhoto from "../../../public/images/hero-dr-laide-speaking.jpg";
import { UnfinishedCircle } from "@/components/ui/UnfinishedCircle";

const values = ["Empathy", "Integrity", "Transformation", "Empowerment", "Resilience", "Growth", "Connection", "Accountability"];

const delay = (ms: number) => ({ animationDelay: `${ms}ms` });

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="container-site grid items-center gap-12 py-12 sm:py-16 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-16 lg:py-20">
        <div>
          <p className="eyebrow animate-fade-up" style={delay(0)}>
            Accexx Insight
          </p>

          <h1 className="heading mt-5 text-[2.7rem] leading-[1.04] sm:text-6xl lg:text-[4.6rem]">
            <span className="sr-only">From Access to Accexx — Unlock Your Breakthrough</span>
            <span aria-hidden className="block animate-fade-up" style={delay(100)}>
              From Access to{" "}
              {/* "Access" becomes "Accexx": the door becomes the key. Final state is the SSR/no-motion state. */}
              <span className="access-swap">
                <span className="access-from">Access</span>
                <em className="access-to text-gold">Accexx</em>
                <span className="access-key" />
              </span>
            </span>
            <span aria-hidden className="block animate-fade-up" style={delay(200)}>
              — Unlock Your Breakthrough
            </span>
          </h1>

          <p className="mt-6 max-w-xl animate-fade-up text-lg leading-relaxed text-body sm:text-xl" style={delay(300)}>
            Helping the overcomer and creator become the best and live the best life.
          </p>
          <p className="mt-3 animate-fade-up font-serif text-xl font-medium italic text-gold-deep sm:text-2xl" style={delay(380)}>
            We more than find solutions. We ensure transformation.
          </p>

          <ul aria-label="Our values" className="mt-7 flex max-w-2xl animate-fade-up flex-wrap gap-2" style={delay(460)}>
            {values.map((v) => (
              <li key={v} className="rounded-full border border-navy/15 bg-white px-3.5 py-1.5 text-xs font-semibold text-navy">
                {v}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex animate-fade-up flex-col gap-3 sm:flex-row" style={delay(540)}>
            <ButtonLink href="#breakthrough">Find Your Breakthrough</ButtonLink>
            <ButtonLink href="#accexx-circle" variant="outline">
              Join the Accexx Circle
            </ButtonLink>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md animate-fade-up lg:max-w-none" style={delay(200)}>
          <UnfinishedCircle className="pointer-events-none absolute -inset-[9%] size-[118%] text-gold" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl shadow-navy/20">
            <Image
              src={heroPhoto}
              alt="Dr. Laide R. Alexander speaking at the Why Move My Cheese? Leadership Conference 2026"
              fill
              preload
              placeholder="blur"
              sizes="(min-width: 1024px) 38vw, 90vw"
              className="object-cover"
            />
          </div>
          <Link
            href="/books#conference"
            className="absolute -bottom-5 left-4 max-w-[16rem] rounded-2xl border border-line bg-white px-5 py-4 shadow-lg shadow-navy/10 transition-colors hover:border-gold sm:left-auto sm:right-6"
          >
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-gold-deep">Why Move My Cheese?</p>
            <p className="mt-1 font-serif text-lg font-semibold leading-tight text-navy">Leadership Conference 2026</p>
          </Link>
        </div>
      </div>
    </section>
  );
}
