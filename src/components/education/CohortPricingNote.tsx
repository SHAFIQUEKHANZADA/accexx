/**
 * How cohort pricing works, from "UPDATED Curriculum_Library_Pricing_Master_CFO_Copy (2).txt"
 * (Pricing Methodology & Assumptions, section 1).
 */
export function CohortPricingNote({ compact = false }: { compact?: boolean }) {
  const points = [
    { title: "Priced per cohort", text: "One fee for the whole program for your group, not per participant." },
    { title: "Up to 15 participants", text: "Standard cohort cap (20 for the BEInspire© Career Series)." },
    { title: "Virtual 85% · Hybrid 92.5%", text: "Virtual and hybrid delivery are priced as a share of the in-person fee." },
    { title: "Additional participants", text: "8% of the in-person price per person beyond the cap, up to a maximum cohort of 25." },
  ];
  return (
    <div className={`grid gap-4 ${compact ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-4"}`}>
      {points.map((p) => (
        <div key={p.title} className="rounded-2xl border border-line bg-white p-5">
          <p className="font-semibold text-navy">{p.title}</p>
          <p className="mt-1.5 text-sm leading-relaxed text-body">{p.text}</p>
        </div>
      ))}
    </div>
  );
}
