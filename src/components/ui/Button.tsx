import Link from "next/link";
import type { ReactNode } from "react";
import { isExternal } from "@/lib/site";
import { ArrowRight } from "./icons";

type Variant = "gold" | "navy" | "outline" | "outline-light" | "link";

const styles: Record<Variant, string> = {
  gold: "bg-gold text-white shadow-sm shadow-gold/30 hover:bg-gold-deep",
  navy: "bg-navy text-white hover:bg-navy-deep",
  outline: "border border-navy/25 text-navy hover:border-navy hover:bg-navy hover:text-white",
  "outline-light": "border border-white/40 text-white hover:bg-white hover:text-navy",
  link: "px-0! text-gold-deep hover:text-navy",
};

export function ButtonLink({
  href,
  children,
  variant = "gold",
  arrow = true,
  size = "md",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  arrow?: boolean;
  size?: "sm" | "md";
  className?: string;
}) {
  const sizing = size === "sm" ? "h-10 px-5 text-sm" : "h-12 px-6 text-[0.95rem]";
  const cls = `group inline-flex items-center justify-center gap-2.5 rounded-full font-semibold transition-colors duration-300 ${sizing} ${styles[variant]} ${className}`;
  const content = (
    <>
      <span>{children}</span>
      {arrow && <ArrowRight width={16} height={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />}
    </>
  );

  if (isExternal(href)) {
    const newTab = href.startsWith("http");
    return (
      <a href={href} className={cls} {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {content}
    </Link>
  );
}
