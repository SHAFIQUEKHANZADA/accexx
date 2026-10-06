import Link from "next/link";
import { SignupForm } from "@/components/ui/SignupForm";
import { ArrowRight, Phone } from "@/components/ui/icons";
import { callHref, links } from "@/lib/site";
import { UnfinishedCircle } from "@/components/ui/UnfinishedCircle";

/**
 * Shown on every page (CLIENT_UPDATES.md #9): "every page must have Contact Us and Join the
 * Accexx Circle — these are people that follow us, that receive our newsletter and other info
 * first. There will be a membership number assigned to them."
 * The membership number is assigned in GoHighLevel when the "accexx-circle" form arrives.
 */
export function JoinBand() {
  return (
    <section id="accexx-circle" aria-labelledby="accexx-circle-heading" className="relative scroll-mt-20 overflow-hidden border-t border-line bg-gold-soft">
      <UnfinishedCircle className="pointer-events-none absolute -bottom-56 -left-40 size-[32rem] text-gold/50" />
      <div className="container-site relative grid gap-8 py-14 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-12 lg:py-16">
        <div className="rounded-3xl border border-line bg-white p-7 shadow-sm sm:p-9">
          <p className="eyebrow">Join the Accexx Circle</p>
          <h2 id="accexx-circle-heading" className="heading mt-3 text-3xl sm:text-4xl">
            Hear it <em className="text-gold">first.</em>
          </h2>
          <p className="mt-3 text-[0.95rem] leading-relaxed text-body">
            The Accexx Circle is the community that follows us. Members receive our newsletter and other information first,
            and each member is assigned an Accexx Circle membership number.
          </p>
          <div className="mt-6">
            <SignupForm
              formType="accexx-circle"
              cta="Join the Accexx Circle"
              success="Welcome to the Accexx Circle. Please check your inbox for confirmation."
            />
          </div>
        </div>

        <div className="flex flex-col justify-center rounded-3xl bg-navy p-7 text-white sm:p-9">
          <p className="eyebrow text-gold-light!">Contact us</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">Let&apos;s talk about your breakthrough.</h2>
          <p className="mt-3 text-[0.95rem] text-white/80">We do more than find solutions. We enable transformation.</p>
          <div className="mt-7 grid gap-3">
            <Link
              href="/contact"
              className="group inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-gold px-6 font-semibold text-white transition-colors hover:bg-gold-deep"
            >
              Contact Us
              <ArrowRight width={16} height={16} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a
              href={links.booking}
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/40 px-6 font-semibold text-white transition-colors hover:bg-white hover:text-navy"
            >
              Book a Discovery Call
            </a>
            {links.phone && (
              <a href={callHref} className="inline-flex items-center justify-center gap-2 pt-1 text-sm font-semibold text-gold-light hover:text-white">
                <Phone width={15} height={15} /> {links.phone}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
