"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Fades in any element marked with `data-reveal` as it scrolls into view.
 * Content stays visible without JS; the `reveal-ready` class opts in.
 * Optional `data-reveal-delay="120"` staggers siblings.
 */
export function RevealProvider() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const root = document.documentElement;
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-visible)"));
    const vh = window.innerHeight;

    // Anything already on screen shows immediately, so above-the-fold content never flashes.
    const pending = nodes.filter((el) => {
      const delay = el.dataset.revealDelay;
      if (delay) el.style.setProperty("--reveal-delay", `${delay}ms`);
      if (el.getBoundingClientRect().top < vh * 0.9) {
        el.classList.add("is-visible");
        return false;
      }
      return true;
    });
    root.classList.add("reveal-ready");

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    );
    pending.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
