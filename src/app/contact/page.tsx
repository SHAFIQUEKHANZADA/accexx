import type { Metadata } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import { PageHero } from "@/components/ui/PageHero";
import { ButtonLink } from "@/components/ui/Button";
import { Clock, Instagram, LinkedIn, Mail, MapPin, Phone } from "@/components/ui/icons";
import { ContactForm } from "@/components/contact/ContactForm";
import { Facebook, TikTok, YouTube } from "@/components/contact/SocialIcons";
import { callHref, links } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation with Dr. Laide R. Alexander and the Accexx Insight team, or book a consultation online.",
  alternates: { canonical: "/contact" },
};

const socials: { label: string; handle: string; href: string; icon: ReactNode }[] = [
  { label: "LinkedIn", handle: "Dr. Laide Alexander", href: links.linkedin, icon: <LinkedIn width={20} height={20} /> },
  { label: "Instagram", handle: "@iamdrlaidea", href: links.instagram, icon: <Instagram width={20} height={20} /> },
  { label: "YouTube", handle: "@Dr.LaideAlexander", href: links.youtube, icon: <YouTube /> },
  { label: "TikTok", handle: "@drlaidealexander", href: links.tiktok, icon: <TikTok /> },
  { label: "Facebook", handle: "Dr. Laide Alexander", href: links.facebook, icon: <Facebook /> },
];

// The GHL "Consultation with Dr. Laide" calendar (NEXT_PUBLIC_GHL_BOOKING_URL), embedded below.
const bookingEmbed = links.bookingEmbed;

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let&apos;s Talk About <em className="text-gold">Your Business.</em>
          </>
        }
        intro={
          <p>
            Tell us what you&apos;re operating today, where you&apos;re going, and where the complexity is getting in the way.
          </p>
        }
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="#message">Send a Message</ButtonLink>
          <ButtonLink href="#book" variant="outline">
            Book a Discovery Call
          </ButtonLink>
        </div>
      </PageHero>

      {/* Form + details --------------------------------------------------------- */}
      <section id="message" className="scroll-mt-20 bg-white py-16 lg:py-24" aria-labelledby="form-heading">
        <div className="container-site grid gap-12 lg:grid-cols-[minmax(0,7fr)_minmax(0,4fr)] lg:gap-16">
          <div>
            <p className="eyebrow">Start a conversation</p>
            <h2 id="form-heading" className="heading mt-4 text-4xl sm:text-5xl">
              Send us a <em className="text-gold">message.</em>
            </h2>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-line bg-cream p-7">
              <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-navy">Office & Direct Contact</h2>

              {/* Address */}
              <div className="mt-4 flex items-start gap-3">
                <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-full bg-gold/15 text-gold-deep">
                  <MapPin width={16} height={16} />
                </span>
                <div>
                  <p className="font-semibold text-navy">Houston Office</p>
                  <address className="not-italic text-sm leading-relaxed text-body mt-0.5">
                    1334 Brittmoore Road, Suite 1000B<br />
                    Houston, TX 77043
                  </address>
                </div>
              </div>

              {/* Phone Number */}
              <div className="mt-5 border-t border-line/70 pt-5 space-y-2.5">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted">Phone Line</p>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="text-xs text-muted block">Contact number</span>
                    <a href={callHref} className="inline-flex items-center gap-2 font-medium text-navy hover:text-gold-deep transition-colors">
                      <Phone width={15} height={15} className="text-gold-deep" />
                      {links.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Dedicated Emails */}
              <div className="mt-5 border-t border-line/70 pt-5 space-y-2.5">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted">Dedicated Support & Inquiries</p>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="text-xs text-muted block">General & Calendar</span>
                    <a href={`mailto:${links.email}`} className="inline-flex items-center gap-2 font-medium text-navy hover:text-gold-deep transition-colors">
                      <Mail width={15} height={15} className="text-gold-deep" />
                      {links.email}
                    </a>
                  </div>
                  <div>
                    <span className="text-xs text-muted block">Student Support</span>
                    <a href={`mailto:${links.studentSupportEmail}`} className="inline-flex items-center gap-2 font-medium text-navy hover:text-gold-deep transition-colors">
                      <Mail width={15} height={15} className="text-gold-deep" />
                      {links.studentSupportEmail}
                    </a>
                  </div>
                  <div>
                    <span className="text-xs text-muted block">Faculty Support</span>
                    <a href={`mailto:${links.facultySupportEmail}`} className="inline-flex items-center gap-2 font-medium text-navy hover:text-gold-deep transition-colors">
                      <Mail width={15} height={15} className="text-gold-deep" />
                      {links.facultySupportEmail}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Consultation Hours */}
            <div className="rounded-3xl border border-line bg-white p-7">
              <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-navy">Consultation Availability</h2>
              <div className="mt-4 flex items-start gap-3">
                <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-full bg-gold/15 text-gold-deep">
                  <Clock width={16} height={16} />
                </span>
                <div className="text-sm">
                  <p className="font-semibold text-navy">{links.consultationHours}</p>
                  <p className="text-muted mt-1">Conducted virtually via {links.meetingMethod}.</p>
                  <p className="text-xs text-muted mt-2 border-t border-line/60 pt-2">
                    Calendar invitations sent from <span className="font-medium text-navy">{links.email}</span>.
                  </p>
                </div>
              </div>
            </div>

            {/* Social Profiles */}
            <div className="rounded-3xl border border-line bg-white p-7">
              <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-navy">Follow Dr. A</h2>
              <ul className="mt-4 space-y-1">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 rounded-2xl px-3 py-2.5 -mx-3 transition-colors hover:bg-cream"
                    >
                      <span className="grid size-10 shrink-0 place-items-center rounded-full bg-gold-soft text-gold-deep transition-colors group-hover:bg-gold group-hover:text-white">
                        {s.icon}
                      </span>
                      <span className="min-w-0">
                        <span className="block text-sm font-semibold text-navy">{s.label}</span>
                        <span className="block truncate text-sm text-muted">{s.handle}</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* Booking --------------------------------------------------------------- */}
      <section id="book" className="scroll-mt-20 border-t border-line bg-cream py-16 lg:py-24" aria-labelledby="book-heading">
        <div className="container-site">
          <div className="max-w-3xl">
            <p className="eyebrow">Book a consultation</p>
            <h2 id="book-heading" className="heading mt-4 text-4xl sm:text-5xl">
              Consultation with <em className="text-gold">Dr. Laide</em>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-body">
              Available {links.consultationHours}. Sessions are held virtually via {links.meetingMethod}, and calendar confirmations are sent directly from {links.email}.
            </p>
          </div>

          {bookingEmbed ? (
            <div className="mt-10 overflow-hidden rounded-3xl border border-line bg-white shadow-sm p-1 sm:p-3">
              <iframe
                id="oGs0SikqVymjpRw8ibHe_1791494634518"
                src={bookingEmbed}
                title="Book a consultation with Dr. Laide"
                allow="payment"
                scrolling="no"
                loading="lazy"
                className="block min-h-[720px] w-full border-0"
                style={{ width: "100%", border: "none", overflow: "hidden" }}
              />
              <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
            </div>
          ) : (
            // TODO_CLIENT: set NEXT_PUBLIC_GHL_BOOKING_URL to the GHL "Consultation with Dr. Laide" calendar.
            <div className="mt-10 rounded-3xl border border-dashed border-gold/60 bg-white p-8 text-center sm:p-12">
              <span className="inline-block rounded-full bg-gold-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-gold-deep">
                Placeholder
              </span>
              <p className="heading mt-4 text-3xl">Online booking coming soon</p>
              <p className="mx-auto mt-3 max-w-xl text-body">
                In the meantime, send us a message using the form above and we&apos;ll get back to you to arrange a time.
              </p>
              <div className="mt-6">
                <ButtonLink href="#message" variant="navy">
                  Send a Message
                </ButtonLink>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
