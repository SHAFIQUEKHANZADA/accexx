import Link from "next/link";
import type { ReactNode } from "react";
import { isExternal } from "@/lib/site";
import { ArrowRight } from "./icons";

type Variant = "gold" | "outline" | "ghost";

const styles: Record<Variant, string> = {
  gold: "bg-gold text-ink hover:bg-gold-light",
  outline: "border border-white/30 text-white hover:border-gold hover:text-gold-light",
  ghost: "text-white hover:text-gold-light",
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
  const cls = `group inline-flex items-center justify-center gap-3 rounded-full font-medium transition-colors duration-300 ${sizing} ${styles[variant]} ${className}`;
  const content = (
    <>
      <span>{children}</span>
      {arrow && (
        <span
          className={`grid size-6 place-items-center rounded-full transition-transform duration-300 group-hover:translate-x-0.5 ${
            variant === "gold" ? "bg-ink/10" : "bg-white/10"
          }`}
        >
          <ArrowRight width={14} height={14} />
        </span>
      )}
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
