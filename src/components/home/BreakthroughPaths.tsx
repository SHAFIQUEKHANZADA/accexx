"use client";

import Link from "next/link";
import { useId, useRef, useState, type KeyboardEvent } from "react";
import { ArrowRight } from "@/components/ui/icons";

type Path = {
  id: string;
  label: string;
  intro: string;
  outcomes: string[];
  routes: { label: string; href: string }[];
};

// Copy: reference/text/Accexx Insight - Who We Are.txt ("Who We Serve").
// Routes are site navigation only (which services/programs to explore next).
const paths: Path[] = [
  {
    id: "organizations",
    label: "Organizations",
    intro:
      "We serve organizations navigating growth, transition, change, performance challenges, or strategic uncertainty.",
    outcomes: [
      "Clearer organizational priorities",
      "Better team alignment",
      "Stronger execution",
      "Improved processes and performance",
      "More effective change management",
      "Greater accountability and measurable progress",
    ],
    routes: [
      { label: "Consulting", href: "/services/consulting" },
      { label: "Certificate Programs", href: "/education/certifications" },
      { label: "Speaking", href: "/services/speaking" },
    ],
  },
  {
    id: "leaders",
    label: "Leaders & Executives",
    intro:
      "We work with leaders who want to make better decisions, lead through change, and improve the performance of their teams and organizations.",
    outcomes: [
      "Greater clarity and confidence",
      "More effective communication",
      "Stronger decision-making skills",
      "Increased accountability",
      "Better team engagement",
      "A practical approach to leading change",
    ],
    routes: [
      { label: "Executive Coaching", href: "/services/coaching" },
      { label: "Leadership Development", href: "/education/leadership" },
      { label: "Certificate Programs", href: "/education/certifications" },
    ],
  },
  {
    id: "founders",
    label: "Entrepreneurs & Founders",
    intro:
      "We support entrepreneurs and founders who have a vision but need greater clarity, structure, strategy, or momentum.",
    outcomes: [
      "Define a clear direction",
      "Set focused goals",
      "Turn ideas into actionable plans",
      "Strengthen their business positioning",
      "Use their time and resources more effectively",
      "Move from planning to implementation",
    ],
    routes: [
      { label: "Coaching", href: "/services/coaching" },
      { label: "Consulting", href: "/services/consulting" },
    ],
  },
  {
    id: "professionals",
    label: "Professionals",
    intro:
      "We serve professionals seeking career clarity, leadership development, or a more intentional path forward.",
    outcomes: [
      "Clarify their career goals",
      "Strengthen their confidence and communication",
      "Identify their next opportunity",
      "Create a practical development plan",
      "Prepare for greater responsibility",
      "Take purposeful action toward their goals",
    ],
    routes: [
      { label: "BEInspire© Career Series", href: "/education/beinspire" },
      { label: "Leadership Development", href: "/education/leadership" },
      { label: "Coaching", href: "/services/coaching" },
    ],
  },
];

export function BreakthroughPaths() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const baseId = useId();
  const path = paths[active];

  function onKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    const dir = e.key === "ArrowRight" || e.key === "ArrowDown" ? 1 : e.key === "ArrowLeft" || e.key === "ArrowUp" ? -1 : 0;
    if (!dir) return;
    e.preventDefault();
    const next = (active + dir + paths.length) % paths.length;
    setActive(next);
    tabs.current[next]?.focus();
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-14">
      <div role="tablist" aria-label="I am…" aria-orientation="vertical" onKeyDown={onKeyDown} className="flex flex-col gap-2">
        {paths.map((p, i) => {
          const selected = i === active;
          return (
            <button
              key={p.id}
              ref={(el) => {
                tabs.current[i] = el;
              }}
              id={`${baseId}-tab-${p.id}`}
              role="tab"
              type="button"
              aria-selected={selected}
              aria-controls={`${baseId}-panel`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(i)}
              className={`group flex items-center justify-between rounded-2xl border px-6 py-5 text-left transition-all duration-300 ${
                selected
                  ? "border-gold/60 bg-gold/10 text-white"
                  : "border-white/10 text-white/60 hover:border-white/25 hover:text-white"
              }`}
            >
              <span className="flex items-baseline gap-4">
                <span className={`text-xs tabular-nums ${selected ? "text-gold" : "text-white/35"}`}>0{i + 1}</span>
                <span className="font-serif text-2xl sm:text-[1.7rem]">{p.label}</span>
              </span>
              <ArrowRight
                className={`shrink-0 transition-all duration-300 ${selected ? "translate-x-0 text-gold opacity-100" : "-translate-x-2 opacity-0 group-hover:opacity-60"}`}
              />
            </button>
          );
        })}
      </div>

      <div
        id={`${baseId}-panel`}
        role="tabpanel"
        aria-labelledby={`${baseId}-tab-${path.id}`}
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-ink p-7 sm:p-10"
      >
        <div aria-hidden className="absolute -right-24 -top-24 size-72 rounded-full bg-[radial-gradient(circle,rgba(201,151,75,0.18),transparent_70%)]" />
        <div key={path.id} className="relative animate-fade-up">
          <p className="eyebrow">For {path.label}</p>
          <p className="mt-4 font-serif text-2xl leading-snug text-white sm:text-3xl">{path.intro}</p>
          <p className="mt-8 text-sm font-medium text-white/50">We help you achieve</p>
          <ul className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2">
            {path.outcomes.map((o) => (
              <li key={o} className="flex gap-3 text-[0.95rem] text-white/80">
                <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />
                {o}
              </li>
            ))}
          </ul>
          <div className="mt-10 border-t border-white/10 pt-6">
            <p className="text-sm font-medium text-white/50">Where to start</p>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {path.routes.map((r) => (
                <li key={r.href}>
                  <Link
                    href={r.href}
                    className="group inline-flex h-10 items-center gap-2 rounded-full border border-white/20 px-4 text-sm text-white transition-colors hover:border-gold hover:text-gold-light"
                  >
                    {r.label}
                    <ArrowRight width={14} height={14} className="transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
