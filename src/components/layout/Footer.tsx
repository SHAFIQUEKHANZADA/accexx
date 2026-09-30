import Link from "next/link";
import { footerNav, links, site } from "@/lib/site";
import { Logo } from "@/components/ui/Logo";
import { Instagram, LinkedIn, Mail } from "@/components/ui/icons";

// Email / social URLs have not been supplied yet; until they are, each falls back to /contact.
const connect = [
  { label: "Email", href: links.email ? `mailto:${links.email}` : "/contact", Icon: Mail },
  { label: "LinkedIn", href: links.linkedin ?? "/contact", Icon: LinkedIn },
  { label: "Instagram", href: links.instagram ?? "/contact", Icon: Instagram },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-white/10 bg-ink">
      <div className="container-site grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_repeat(4,1fr)] lg:py-20">
        <div className="max-w-sm">
          <Logo />
          <p className="mt-5 text-sm leading-relaxed text-white/70">{site.collective}</p>
          <p className="mt-3 font-serif text-lg italic text-gold">{site.tagline}</p>
        </div>

        {footerNav.map((col) => (
          <div key={col.title}>
            <h2 className="eyebrow">{col.title}</h2>
            <ul className="mt-5 space-y-3">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/70 transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h2 className="eyebrow">Connect</h2>
          <ul className="mt-5 space-y-3">
            {connect.map(({ label, href, Icon }) => {
              const external = href.startsWith("http");
              return (
                <li key={label}>
                  <a
                    href={href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="inline-flex items-center gap-2.5 text-sm text-white/70 transition-colors hover:text-white"
                  >
                    <Icon width={16} height={16} /> {label}
                  </a>
                </li>
              );
            })}
          </ul>
          <ul className="mt-6 space-y-3 border-t border-white/10 pt-6">
            <li>
              <Link href="/books" className="text-sm text-white/70 hover:text-white">Books</Link>
            </li>
            <li>
              <a href={links.booking} className="text-sm text-gold hover:text-gold-light">Book Dr. A</a>
            </li>
            <li>
              <Link href="/#circle" className="text-sm text-gold hover:text-gold-light">Join the Accexx Circle</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-3 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Accexx Insight. All rights reserved.</p>
          <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
