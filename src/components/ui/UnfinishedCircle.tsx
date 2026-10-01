/**
 * Brand motif. Dr. A: "the circle is almost closed — it speaks to the unfinished leader
 * or people that we are." Always drawn open, never as a closed ring. Colour via `text-*`.
 */
export function UnfinishedCircle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" aria-hidden className={className} fill="none" stroke="currentColor" strokeLinecap="round">
      <path d="M 132 22 A 84 84 0 1 0 178 86" strokeWidth="1.6" strokeOpacity="0.55" />
      <path d="M 126 30 A 76 76 0 1 0 170 90" strokeWidth="0.7" strokeOpacity="0.35" />
    </svg>
  );
}
