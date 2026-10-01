/**
 * Large 16:9 video frame. With `src` it plays the file (self-hosted mp4) with native controls;
 * without it shows a "video coming soon" frame over the poster photo.
 * Dr. A (2026-10-01): conference + book launch videos should "play on a larger screen". Files pending.
 */
export function VideoFeature({
  src,
  poster,
  title,
  className = "",
}: {
  src?: string | null;
  poster: string;
  title: string;
  className?: string;
}) {
  return (
    <figure className={`relative aspect-video overflow-hidden rounded-3xl bg-night shadow-2xl shadow-navy/25 ${className}`}>
      {src ? (
        <video controls playsInline preload="metadata" poster={poster} className="size-full object-cover" aria-label={title}>
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element -- decorative poster behind the placeholder */}
          <img src={poster} alt="" aria-hidden className="absolute inset-0 size-full object-cover opacity-45" />
          <div className="absolute inset-0 bg-linear-to-t from-night via-night/40 to-transparent" />
          <figcaption className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
            <span className="flex size-20 items-center justify-center rounded-full border border-white/40 bg-white/10 backdrop-blur-sm sm:size-24">
              <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor" aria-hidden className="ml-1">
                <path d="M8 5.5v13a.75.75 0 0 0 1.14.64l10.4-6.5a.75.75 0 0 0 0-1.28L9.14 4.86A.75.75 0 0 0 8 5.5Z" />
              </svg>
            </span>
            <span className="mt-5 font-serif text-2xl font-semibold sm:text-3xl">{title}</span>
            <span className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-gold-light">Video coming soon</span>
          </figcaption>
        </>
      )}
    </figure>
  );
}
