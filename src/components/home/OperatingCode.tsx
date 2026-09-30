"use client";

import { useState } from "react";

// Copy: Accexx_Insight_Training_Course_Glossary.txt (HOC, BSEH) and
// HOC-LP_Modules 1-6 + Cover.txt (Module 1 overview and BSEH self-diagnostic prompts).
const layers = [
  {
    letter: "B",
    name: "Beliefs",
    line: "For this story to be true, what would I have to believe?",
  },
  {
    letter: "S",
    name: "Stories",
    line: "The narrative you tell yourself about why this situation is the way it is.",
  },
  {
    letter: "E",
    name: "Emotions",
    line: "What you actually feel — not what you think you should feel.",
  },
  {
    letter: "H",
    name: "Habits",
    line: "The end of the chain: the recurring behavior everyone else can see.",
  },
];

export function OperatingCode() {
  const [active, setActive] = useState(0);

  return (
    <div className="relative">
      {/* Above the surface */}
      <div className="rounded-t-3xl border border-b-0 border-white/10 bg-white/[0.03] px-6 py-6 sm:px-8">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-white/40">Above the surface</p>
        <p className="mt-2 font-serif text-2xl text-white/90">The behavior you see</p>
      </div>

      {/* Waterline */}
      <div aria-hidden className="relative h-px bg-gradient-to-r from-transparent via-gold to-transparent">
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/50 bg-ink px-3 py-0.5 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-gold">
          Beneath it
        </span>
      </div>

      {/* Below the surface: the BSEH chain */}
      <div className="rounded-b-3xl border border-t-0 border-white/10 bg-gradient-to-b from-ink-2 to-[#17120b] p-3 sm:p-4">
        <ol className="grid gap-2">
          {layers.map((l, i) => {
            const on = i === active;
            return (
              <li key={l.letter}>
                <button
                  type="button"
                  aria-expanded={on}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className={`flex w-full items-start gap-5 rounded-2xl px-4 py-4 text-left transition-colors duration-300 sm:px-5 ${
                    on ? "bg-gold/10" : "hover:bg-white/[0.03]"
                  }`}
                >
                  <span
                    className={`grid size-12 shrink-0 place-items-center rounded-full border font-serif text-2xl italic transition-colors duration-300 ${
                      on ? "border-gold bg-gold text-ink" : "border-white/20 text-white/70"
                    }`}
                  >
                    {l.letter}
                  </span>
                  <span className="min-w-0 pt-1">
                    <span className={`block font-serif text-2xl transition-colors ${on ? "text-white" : "text-white/70"}`}>{l.name}</span>
                    <span
                      className={`grid transition-[grid-template-rows,opacity] duration-500 ${on ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                    >
                      <span className="overflow-hidden">
                        <span className="block pt-1.5 text-[0.95rem] leading-relaxed text-white/70">{l.line}</span>
                      </span>
                    </span>
                  </span>
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
