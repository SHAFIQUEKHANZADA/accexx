import Link from "next/link";
import { footerNav, links, site } from "@/lib/site";
import { Logo } from "@/components/ui/Logo";

const connect = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/laidealexander/" },
  { label: "Instagram", href: "https://www.instagram.com/iamdrlaidea/" },
  { label: "YouTube", href: "https://www.youtube.com/@Dr.LaideAlexander" },
  { label: "TikTok", href: "https://www.tiktok.com/@drlaidealexander/" },
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61584887520106" },
  { label: "Email", href: links.email ? `mailto:${links.email}` : "/contact" },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative bg-navy-deep text-white">
      <div className="container-site grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_repeat(4,1fr)] lg:py-20">
        <div className="max-w-sm">
          <Logo tone="light" />
          <p className="mt-5 text-sm leading-relaxed text-white/75">{site.collective}</p>
          <p className="mt-3 font-serif text-lg italic text-gold-light">{site.tagline}</p>
        </div>

        {footerNav.map((col) => (
          <div key={col.title}>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-gold-light">{col.title}</h2>
            <ul className="mt-5 space-y-3">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/75 transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-gold-light">Connect</h2>
          <ul className="mt-5 space-y-3">
            {connect.map(({ label, href }) => {
              const external = href.startsWith("http");
              return (
                <li key={label}>
                  <a
                    href={href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="text-sm text-white/75 transition-colors hover:text-white"
                  >
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>
          <ul className="mt-6 space-y-3 border-t border-white/15 pt-6">
            <li>
              <a href={links.booking} className="text-sm font-semibold text-gold-light hover:text-white">
                Book Dr. A
              </a>
            </li>
            <li>
              <Link href="#accexx-circle" className="text-sm font-semibold text-gold-light hover:text-white">
                Join the Accexx Circle
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="container-site flex flex-col gap-3 py-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Accexx Insight. All rights reserved.</p>
          <Link href="/privacy" className="hover:text-white">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
