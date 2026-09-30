/**
 * Tasteful stand-ins until the client's photos and cover files arrive.
 * Deliberately abstract: never a stock person presented as Dr. A.
 */

export function PortraitPlaceholder({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div
      role="img"
      aria-label={`${label} (photo coming soon)`}
      className={`relative overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(ellipse_at_30%_20%,#3b2c16_0%,#161412_55%,#0e0e0f_100%)] ${className}`}
    >
      <svg viewBox="0 0 400 500" className="absolute inset-0 size-full" aria-hidden>
        <defs>
          <linearGradient id="pp-g" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#e2bd7f" stopOpacity="0.55" />
            <stop offset="1" stopColor="#c9974b" stopOpacity="0.05" />
          </linearGradient>
        </defs>
        {Array.from({ length: 9 }).map((_, i) => (
          <path
            key={i}
            d={`M-20 ${330 + i * 16} C 120 ${270 + i * 12}, 260 ${400 - i * 6}, 420 ${300 + i * 10}`}
            fill="none"
            stroke="url(#pp-g)"
            strokeWidth={i === 3 ? 1.4 : 0.7}
          />
        ))}
      </svg>
      <div className="absolute inset-0 grid place-items-center">
        <span className="font-serif text-[9rem] italic leading-none text-gold/25">A</span>
      </div>
      <span className="absolute bottom-4 left-4 rounded-full bg-black/40 px-3 py-1 text-[0.7rem] uppercase tracking-[0.18em] text-white/50 backdrop-blur">
        Portrait coming soon
      </span>
    </div>
  );
}

const coverThemes = {
  navy: "from-[#1f3864] via-[#16284a] to-[#0d1830]",
  ink: "from-[#2a2118] via-[#18140f] to-[#0b0b0c]",
};

export function BookCover({
  title,
  author,
  theme = "ink",
  className = "",
}: {
  title: string;
  author?: string;
  theme?: keyof typeof coverThemes;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={`${title} book cover (cover image coming soon)`}
      className={`relative aspect-[2/3] overflow-hidden rounded-r-md rounded-l-sm bg-gradient-to-br shadow-[0_30px_60px_-20px_rgba(0,0,0,0.7)] ${coverThemes[theme]} ${className}`}
    >
      <span className="absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-black/50 to-transparent" aria-hidden />
      <div className="absolute inset-3 flex flex-col justify-between rounded-sm border border-gold/40 p-4">
        <span className="h-px w-8 bg-gold" aria-hidden />
        <p className="font-serif text-[1.35rem] leading-[1.05] text-white sm:text-2xl">{title}</p>
        {author && <p className="text-[0.6rem] uppercase tracking-[0.2em] text-gold-light">{author}</p>}
      </div>
    </div>
  );
}
