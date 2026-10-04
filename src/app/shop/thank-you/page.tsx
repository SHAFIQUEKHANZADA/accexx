import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";
import { LogoMark } from "@/components/ui/Logo";

export const metadata: Metadata = {
  title: "Thank you for your order",
  description: "Your Accexx Insight order is confirmed.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/shop/thank-you" },
};

// GHL payment links redirect here after a successful payment ("Enable redirection to custom URL").
export default function ThankYouPage() {
  return (
    <section className="bg-cream py-24 lg:py-32">
      <div className="container-site max-w-2xl text-center">
        <LogoMark className="mx-auto size-16" />
        <p className="eyebrow mt-8">Order confirmed</p>
        <h1 className="heading mt-4 text-4xl sm:text-5xl">
          Thank you for <em className="text-gold">your order.</em>
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-body">
          Your payment went through. A confirmation with your order details is on its way to your email.
        </p>
        <p className="mt-4 font-serif text-2xl italic text-navy/80">
          Read. Imagine. Become. <span className="font-sans text-sm font-bold not-italic tracking-wider text-gold-deep">#R.I.B</span>
        </p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href="/shop" variant="navy">
            Continue shopping
          </ButtonLink>
          <ButtonLink href="/inside-the-pages" variant="outline">
            Inside the Pages with Dr. A
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
