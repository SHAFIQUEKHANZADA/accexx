import Link from "next/link";
import { ArrowRight } from "@/components/ui/icons";

/** Index card for one program: code, name, one-liner, key facts and "from" price. */
export function ProgramCard({
  href,
  code,
  name,
  description,
  meta,
  price,
  badge,
}: {
  href: string;
  code?: string;
  name: string;
  description: string;
  meta: string[];
  price?: string;
  badge?: string;
}) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col rounded-3xl border border-line bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/60 hover:shadow-lg hover:shadow-navy/5 sm:p-7"
    >
      {(code || badge) && (
        <div className="flex flex-wrap items-center gap-2">
          {code && <span className="text-xs font-bold tracking-[0.16em] text-gold-deep">{code}</span>}
          {badge && <span className="rounded-full bg-gold-soft px-2.5 py-0.5 text-[0.7rem] font-bold text-gold-deep">{badge}</span>}
        </div>
      )}
      <h3 className="heading mt-3 text-2xl leading-tight">{name}</h3>
      <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-body">{description}</p>
      <ul className="mt-5 flex flex-wrap gap-2">
        {meta.map((m) => (
          <li key={m} className="rounded-full bg-cream px-3 py-1 text-xs font-medium text-body">
            {m}
          </li>
        ))}
      </ul>
      <div className="mt-5 flex items-center justify-between gap-4 border-t border-line pt-4">
        {price ? <span className="text-sm font-semibold text-navy">{price}</span> : <span />}
        <ArrowRight width={18} height={18} className="shrink-0 text-gold-deep transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
