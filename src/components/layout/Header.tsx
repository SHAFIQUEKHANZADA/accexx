"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { callHref, mainNav, type NavItem } from "@/lib/site";
import { Logo } from "@/components/ui/Logo";
import { ChevronDown, Close, Menu, Phone } from "@/components/ui/icons";

function isActive(pathname: string, item: NavItem) {
  if (item.href === "/") return pathname === "/";
  return pathname === item.href || pathname.startsWith(`${item.href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const open = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(label);
  };
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 140);
  };

  const solid = scrolled || mobileOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
        solid ? "border-b border-white/10 bg-ink/85 backdrop-blur-xl" : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-site flex h-[72px] items-center justify-between gap-6">
        <Logo />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {mainNav.map((item) => (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && open(item.label)}
                onMouseLeave={() => item.children && scheduleClose()}
              >
                {item.children ? (
                  <DesktopDropdown
                    item={item}
                    active={isActive(pathname, item)}
                    expanded={openMenu === item.label}
                    onToggle={() => setOpenMenu((m) => (m === item.label ? null : item.label))}
                    onNavigate={() => setOpenMenu(null)}
                  />
                ) : (
                  <Link
                    href={item.href}
                    className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                      isActive(pathname, item) ? "text-gold-light" : "text-white/85 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2.5">
          <a
            href={callHref}
            className="hidden h-10 items-center gap-2 rounded-full border border-white/25 px-4 text-sm font-medium text-white transition-colors hover:border-gold hover:text-gold-light md:inline-flex"
          >
            <Phone width={15} height={15} />
            Call Now
          </a>
          <Link
            href="/#circle"
            className="hidden h-10 items-center rounded-full bg-gold px-5 text-sm font-medium text-ink transition-colors hover:bg-gold-light sm:inline-flex"
          >
            Join the Accexx Circle
          </Link>
          <button
            type="button"
            className="grid size-10 place-items-center rounded-full border border-white/20 text-white lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <Close /> : <Menu />}
          </button>
        </div>
      </div>

      <MobileMenu open={mobileOpen} pathname={pathname} onNavigate={() => setMobileOpen(false)} />
    </header>
  );
}

function DesktopDropdown({
  item,
  active,
  expanded,
  onToggle,
  onNavigate,
}: {
  item: NavItem;
  active: boolean;
  expanded: boolean;
  onToggle: () => void;
  onNavigate: () => void;
}) {
  const id = useId();
  return (
    <>
      <button
        type="button"
        aria-expanded={expanded}
        aria-controls={id}
        onClick={onToggle}
        className={`inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
          active || expanded ? "text-gold-light" : "text-white/85 hover:text-white"
        }`}
      >
        {item.label}
        <ChevronDown width={14} height={14} className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} />
      </button>
      <div
        id={id}
        className={`absolute left-1/2 top-full w-72 -translate-x-1/2 pt-3 transition-all duration-300 ${
          expanded ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0"
        }`}
      >
        <ul className="rounded-2xl border border-white/10 bg-ink-2/95 p-2 shadow-2xl shadow-black/60 backdrop-blur-xl">
          {item.children!.map((child) => (
            <li key={child.href + child.label}>
              <Link
                href={child.href}
                onClick={onNavigate}
                className="block rounded-xl px-4 py-3 transition-colors hover:bg-white/5"
              >
                <span className="block text-sm font-medium text-white">{child.label}</span>
                {child.description && <span className="mt-0.5 block text-xs text-mist">{child.description}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

function MobileMenu({ open, pathname, onNavigate }: { open: boolean; pathname: string; onNavigate: () => void }) {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div
      id="mobile-menu"
      className={`fixed inset-x-0 bottom-0 top-[72px] overflow-y-auto bg-ink transition-[opacity,visibility] duration-300 lg:hidden ${
        open ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <nav aria-label="Mobile" className="container-site py-6">
        <ul className="divide-y divide-white/10 border-y border-white/10">
          {mainNav.map((item) => (
            <li key={item.label}>
              {item.children ? (
                <>
                  <button
                    type="button"
                    aria-expanded={expanded === item.label}
                    onClick={() => setExpanded((e) => (e === item.label ? null : item.label))}
                    className={`flex w-full items-center justify-between py-4 text-left font-serif text-2xl ${
                      isActive(pathname, item) ? "text-gold-light" : "text-white"
                    }`}
                  >
                    {item.label}
                    <ChevronDown className={`transition-transform ${expanded === item.label ? "rotate-180" : ""}`} />
                  </button>
                  <div className={`grid transition-[grid-template-rows] duration-300 ${expanded === item.label ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                    <ul className="overflow-hidden">
                      {item.children.map((child) => (
                        <li key={child.href + child.label}>
                          <Link href={child.href} onClick={onNavigate} className="block py-2.5 pl-4 text-[0.95rem] text-white/75 hover:text-gold-light">
                            {child.label}
                          </Link>
                        </li>
                      ))}
                      <li className="h-3" aria-hidden />
                    </ul>
                  </div>
                </>
              ) : (
                <Link
                  href={item.href}
                  onClick={onNavigate}
                  className={`block py-4 font-serif text-2xl ${isActive(pathname, item) ? "text-gold-light" : "text-white"}`}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
        <div className="mt-8 grid gap-3">
          <Link href="/#circle" onClick={onNavigate} className="flex h-12 items-center justify-center rounded-full bg-gold font-medium text-ink">
            Join the Accexx Circle
          </Link>
          <a href={callHref} onClick={onNavigate} className="flex h-12 items-center justify-center gap-2 rounded-full border border-white/25 font-medium text-white">
            <Phone width={16} height={16} /> Call Now
          </a>
        </div>
      </nav>
    </div>
  );
}
