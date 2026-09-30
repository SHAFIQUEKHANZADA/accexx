import Link from "next/link";

/** Placeholder wordmark until the client's logo files arrive (see TODO_CLIENT.md). */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" aria-label="Accexx Insight — home" className={`group inline-flex items-center gap-2.5 ${className}`}>
      <span className="grid size-9 place-items-center rounded-full border border-white/25 font-serif text-lg italic text-white transition-colors group-hover:border-gold">
        A
      </span>
      <span className="font-serif text-[1.35rem] leading-none tracking-tight text-white">
        Accexx <em className="text-gold">Insight</em>
      </span>
    </Link>
  );
}
