import Link from "next/link";

/**
 * Accexx Insight mark (2026-10-04): an "A" shaped as an open doorway, with a gold crossbar.
 * Source files: public/brand/ (from public/Logo). Drawn inline so it stays sharp and takes the
 * right colour on light (navy) and dark (white) backgrounds.
 */
export function LogoMark({ tone = "dark", className = "" }: { tone?: "dark" | "light"; className?: string }) {
  return (
    <svg viewBox="0 0 200 200" aria-hidden className={className}>
      <path
        d="M100 16 L173 184 L27 184 Z M86 184 L86 132 A14 14 0 0 1 114 132 L114 184 Z"
        fill={tone === "dark" ? "#1F3864" : "#FFFFFF"}
        fillRule="evenodd"
      />
      <rect x="64" y="92" width="72" height="9" rx="2" fill="#B08D57" />
    </svg>
  );
}

/** Mark + wordmark ("ACCEXX Insight"), as in the full lockup. */
export function Logo({ tone = "dark", className = "" }: { tone?: "dark" | "light"; className?: string }) {
  const dark = tone === "dark";
  return (
    <Link href="/" aria-label="Accexx Insight home" className={`inline-flex shrink-0 items-center gap-2.5 ${className}`}>
      <LogoMark tone={tone} className="size-10 sm:size-11" />
      <span className="flex items-baseline gap-1.5 font-serif leading-none">
        <span className={`text-[1.35rem] font-bold tracking-[0.08em] sm:text-[1.5rem] ${dark ? "text-navy" : "text-white"}`}>ACCEXX</span>
        <span className={`text-[1.45rem] italic sm:text-[1.6rem] ${dark ? "text-gold-deep" : "text-gold-light"}`}>Insight</span>
      </span>
    </Link>
  );
}
