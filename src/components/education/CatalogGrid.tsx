import type { CatalogCourse } from "@/data/types";
import { showCeus } from "@/data/certifications";
import { ProgramCard } from "./ProgramCard";
import { hoursLabel, usd } from "./format";

/** Card grid for a catalog family, grouped by track/stream when the courses have one. */
export function CatalogGrid({ courses, basePath }: { courses: CatalogCourse[]; basePath: string }) {
  const groups = new Map<string, CatalogCourse[]>();
  for (const c of courses) {
    const key = c.track ?? "";
    groups.set(key, [...(groups.get(key) ?? []), c]);
  }

  return (
    <div className="space-y-14">
      {[...groups.entries()].map(([track, list]) => (
        <div key={track || "all"}>
          {track && <h2 className="mb-6 text-sm font-bold uppercase tracking-[0.16em] text-navy">{track}</h2>}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((c) => (
              <div key={c.slug} data-reveal>
                <ProgramCard
                  href={`${basePath}/${c.slug}`}
                  name={c.name}
                  description={c.description}
                  meta={[
                    hoursLabel(c.cohort.contactHours),
                    ...(showCeus && c.recommendedCeus !== undefined ? [`${c.recommendedCeus} Recommended CEUs`] : []),
                    c.credential,
                  ]}
                  price={`from ${usd(c.cohort.virtual)} per cohort`}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
