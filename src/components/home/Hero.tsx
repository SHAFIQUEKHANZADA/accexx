import { ButtonLink } from "@/components/ui/Button";
import { GoldWaves } from "./GoldWaves";

const values = ["Empathy", "Integrity", "Transformation", "Empowerment", "Resilience", "Growth", "Connection", "Accountability"];

const delay = (ms: number) => ({ animationDelay: `${ms}ms` });

// After the x01works draft Dr. A preferred (2026-10-01): dark hero with the gold light-waves,
// in her navy + gold, no photo ("the organization needs to be bigger than me").
export function Hero() {
  return (
    <section className="relative isolate flex min-h-[calc(100svh-72px)] flex-col overflow-hidden bg-night">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_65%,rgba(31,56,100,0.75),transparent_65%)]" />
        <GoldWaves className="absolute inset-0 size-full" />
        <div className="absolute inset-0 bg-linear-to-r from-night via-night/70 to-transparent lg:via-night/40" />
      </div>

      <div className="container-site flex flex-1 flex-col justify-center py-20 sm:py-24 lg:py-28">
        <div className="max-w-3xl">
          <p className="eyebrow animate-fade-up text-gold-light!" style={delay(0)}>
            Accexx Insight
          </p>

          <h1 className="mt-5 font-serif text-[2.8rem] font-normal leading-[1.03] tracking-[-0.01em] text-white sm:text-6xl lg:text-[5.2rem]">
            <span className="sr-only">From Access to Accexx — Unlock Your Breakthrough</span>
            <span aria-hidden className="block animate-fade-up" style={delay(120)}>
              From Access to{" "}
              {/* "Access" becomes "Accexx": the door becomes the key. Final state is the SSR/no-motion state. */}
              <span className="access-swap">
                <span className="access-from">Access</span>
                <em className="access-to text-gold">Accexx</em>
                <span className="access-key" />
              </span>
            </span>
            <span aria-hidden className="block animate-fade-up" style={delay(220)}>
              — Unlock Your Breakthrough
            </span>
          </h1>

          <p className="mt-6 max-w-xl animate-fade-up text-lg leading-relaxed text-white/85 sm:text-xl" style={delay(320)}>
            Helping the overcomer and creator become the best and live the best life.
          </p>
          <p className="mt-3 animate-fade-up font-serif text-xl italic text-gold-light sm:text-2xl" style={delay(400)}>
            We more than find solutions. We ensure transformation.
          </p>

          <ul aria-label="Our values" className="mt-7 flex max-w-2xl animate-fade-up flex-wrap gap-2" style={delay(480)}>
            {values.map((v) => (
              <li key={v} className="rounded-full border border-white/20 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-white/85">
                {v}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex animate-fade-up flex-col gap-3 sm:flex-row" style={delay(560)}>
            <ButtonLink href="#breakthrough">Find Your Breakthrough</ButtonLink>
            <ButtonLink href="#accexx-circle" variant="outline-light">
              Join the Accexx Circle
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
