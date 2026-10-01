import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Accexx Insight collects, uses and protects the personal information you share through this website.",
  alternates: { canonical: "/privacy" },
};

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="border-t border-line pt-8 first:border-t-0 first:pt-0">
      <h2 className="heading text-3xl">{title}</h2>
      <div className="mt-4 space-y-4 text-[1.02rem] leading-relaxed text-body">{children}</div>
    </section>
  );
}

function List({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-gold" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy Policy"
        title={
          <>
            Your privacy, <em className="text-gold">in plain words.</em>
          </>
        }
        intro={<p>Last updated: October 2026</p>}
      />

      <div className="bg-white py-16 lg:py-24">
        <div className="container-site max-w-3xl space-y-10">
          <Section title="Who we are">
            <p>
              This website is run by Accexx Insight, LLC (&ldquo;Accexx Insight&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;). This
              policy explains what personal information we collect through the site, why we collect it, and the choices you
              have.
            </p>
          </Section>

          <Section title="What we collect">
            <p>We only collect information you choose to give us:</p>
            <List
              items={[
                <>
                  <strong className="text-ink">Form submissions:</strong> when you contact us, request a cohort, or send an
                  inquiry, we collect your name, email address, phone number (if you give it) and your message.
                </>,
                <>
                  <strong className="text-ink">Newsletter and event signups:</strong> when you join the Accexx Circle or ask to
                  hear about an event, we collect your name and email address.
                </>,
              ]}
            />
            <p>
              Like most websites, our hosting provider also keeps basic technical logs (such as IP address and browser type)
              to keep the site running and secure.
            </p>
          </Section>

          <Section title="How we use it">
            <List
              items={[
                "To reply to your message or inquiry.",
                "To send you the updates, newsletters or event news you asked for.",
                "To process and deliver your orders once our online shop launches.",
              ]}
            />
            <p>We do not sell your personal information, and we do not use it for advertising.</p>
          </Section>

          <Section title="Who processes it for us">
            <p>We use a small number of trusted service providers to run our business:</p>
            <List
              items={[
                <>
                  <strong className="text-ink">GoHighLevel</strong>, our customer relationship (CRM) provider, which stores
                  form submissions and signups and sends our emails.
                </>,
                <>
                  <strong className="text-ink">A payment provider</strong>, once online checkout is enabled, to take payments
                  securely. We will not see or store your full card details.
                </>,
              ]}
            />
            <p>These providers only use your information to provide their service to us.</p>
          </Section>

          <Section title="Cookies">
            <p>
              We only use cookies and similar storage that are essential for the site to work (for example, remembering the
              items in your shopping cart). We do not currently use advertising or tracking cookies. If that changes, we will
              update this policy and ask for your consent where required.
            </p>
          </Section>

          <Section title="How long we keep it">
            <p>
              We keep your information only for as long as we need it for the purposes above, or as long as the law requires.
              You can ask us to delete it at any time.
            </p>
          </Section>

          <Section title="Your rights">
            <p>You can ask us to:</p>
            <List
              items={[
                "Show you the personal information we hold about you.",
                "Correct anything that is wrong or out of date.",
                "Delete your information.",
                "Stop sending you emails. Every email we send also has an unsubscribe link.",
              ]}
            />
            <p>
              To make a request, please get in touch through our{" "}
              <Link href="/contact" className="font-semibold text-gold-deep underline-offset-4 hover:underline">
                contact page
              </Link>
              .
            </p>
          </Section>

          <Section title="Changes to this policy">
            <p>
              If we change how we handle your information, we will update this page and the &ldquo;Last updated&rdquo; date
              above.
            </p>
          </Section>
        </div>
      </div>
    </>
  );
}
