import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import stagePhoto from "../../../public/images/dr-laide-keynote-stage.jpg";

const values = ["Empathy", "Integrity", "Transformation", "Empowerment", "Resilience", "Growth", "Connection", "Accountability"];

const delay = (ms: number) => ({ animationDelay: `${ms}ms` });

export function Hero() {
  return (
    <section className="relative isolate flex min-h-svh flex-col overflow-hidden bg-ink">
      {/* Background: Dr. A on stage, gold-toned, with the draft's light-waves over it */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <Image
          src={stagePhoto}
          alt=""
          fill
          preload
          placeholder="blur"
          sizes="100vw"
          className="hero-photo object-cover object-[62%_40%]"
        />
        <div className="absolute inset-0 bg-[#2a1c08] mix-blend-color" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/10 lg:via-ink/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-ink/60" />
      </div>

      <div className="container-site flex flex-1 flex-col justify-end pb-14 pt-32 sm:pb-20 lg:pb-24 lg:pt-40">
        <div className="max-w-3xl">
          <p className="eyebrow animate-fade-up" style={delay(0)}>
            Accexx Insight
          </p>

          <h1 className="mt-5 font-serif text-[2.8rem] font-normal leading-[1.02] tracking-[-0.01em] text-white sm:text-6xl lg:text-[5.4rem]">
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
          <p className="mt-3 animate-fade-up font-serif text-xl italic text-gold sm:text-2xl" style={delay(400)}>
            We more than find solutions. We ensure transformation.
          </p>

          <ul aria-label="Our values" className="mt-7 flex max-w-2xl animate-fade-up flex-wrap gap-2" style={delay(480)}>
            {values.map((v) => (
              <li
                key={v}
                className="rounded-full border border-white/15 bg-ink/40 px-3.5 py-1.5 text-xs font-medium text-white/80 backdrop-blur-sm"
              >
                {v}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex animate-fade-up flex-col gap-3 sm:flex-row" style={delay(560)}>
            <ButtonLink href="#breakthrough">Find Your Breakthrough</ButtonLink>
            <ButtonLink href="#circle" variant="outline" className="bg-ink/30 backdrop-blur-sm">
              Join the Accexx Circle
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
