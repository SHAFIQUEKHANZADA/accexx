import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProgramDetail, type Fact } from "@/components/education/ProgramDetail";
import { hoursLabel, usd } from "@/components/education/format";
import { certifications, getCertification, showCeus } from "@/data/certifications";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return certifications.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = getCertification(slug);
  if (!c) return {};
  return {
    title: `${c.name} (${c.code})`,
    description: c.tagline,
    alternates: { canonical: `/education/certifications/${c.slug}` },
  };
}

export default async function CertificationPage({ params }: Props) {
  const { slug } = await params;
  const c = getCertification(slug);
  if (!c) notFound();

  const facts: Fact[] = [
    { label: "Code", value: c.code },
    { label: "Contact hours", value: hoursLabel(c.contactHours) },
    { label: "Format", value: c.format },
    { label: "Credential", value: "Certification" },
  ];
  if (showCeus) facts.push({ label: "Recommended CEUs", value: c.ceus });
  if (c.selectiveEntry) facts.push({ label: "Entry", value: "Advanced · selective entry" });

  return (
    <ProgramDetail
      family={{ label: "HOC™ Flagship Certification", href: "/education/certifications", indexLabel: "All certifications" }}
      code={c.code}
      name={c.name}
      tagline={c.tagline}
      badge={c.selectiveEntry ? "Advanced · selective entry" : undefined}
      facts={facts}
      facilitator={c.facilitator}
      outcome={c.outcome}
      modules={c.modules.map(({ number, title, hours }) => ({ number, title, hours }))}
      prices={[
        { label: "In-Person", note: "per cohort, up to 15", value: usd(c.prices.inPerson) },
        { label: "Virtual", note: "per cohort, up to 15", value: usd(c.prices.virtual) },
        { label: "Hybrid", note: "per cohort, up to 15", value: usd(c.prices.hybrid) },
        { label: "Each additional participant", value: usd(c.prices.additionalParticipant) },
      ]}
      priceNotes={["Additional participants beyond 15, up to a maximum cohort of 25.", "Prices in USD."]}
    />
  );
}
