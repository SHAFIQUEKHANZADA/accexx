import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProgramDetail } from "@/components/education/ProgramDetail";
import { cohortPriceNotes, cohortPriceRows, hoursLabel } from "@/components/education/format";
import { getLeadershipProgram, leadershipPrograms } from "@/data/leadership";
import { links } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return leadershipPrograms.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getLeadershipProgram(slug);
  if (!p) return {};
  return {
    title: `${p.name} (${p.code})`,
    description: p.description,
    alternates: { canonical: `/education/leadership/${p.slug}` },
  };
}

export default async function LeadershipProgramPage({ params }: Props) {
  const { slug } = await params;
  const p = getLeadershipProgram(slug);
  if (!p) notFound();

  return (
    <ProgramDetail
      family={{ label: "Leadership Development", href: "/education/leadership", indexLabel: "All Leadership Development programs" }}
      code={p.code}
      name={p.name}
      tagline={p.description}
      facts={[
        { label: "Code", value: p.code },
        { label: "Contact hours", value: hoursLabel(p.cohort.contactHours) },
        { label: "Duration", value: p.live.duration },
        // Source format line, minus "(see duration options above); stand-alone or combinable…".
        { label: "Format", value: p.live.format.split(" (")[0] },
        { label: "Credential", value: p.credential },
      ]}
      audience={p.audience}
      outcomes={p.live.outcomes}
      modules={p.live.modules.map((m, i) => ({ number: i + 1, title: m.title }))}
      prices={cohortPriceRows(p.cohort)}
      priceNotes={cohortPriceNotes()}
      enrollHref={links.coursePortal}
      selfPacedNote="price coming soon."
    />
  );
}
