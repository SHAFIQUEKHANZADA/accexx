import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProgramDetail } from "@/components/education/ProgramDetail";
import { cohortPriceNotes, cohortPriceRows, hoursLabel, usd } from "@/components/education/format";
import { beinspirePricing, beinspireWorkshops, getBeinspireWorkshop } from "@/data/beinspire";
import { links } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return beinspireWorkshops.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const w = getBeinspireWorkshop(slug);
  if (!w) return {};
  return {
    title: `${w.name} (${w.code}) · BEInspire© Career Series`,
    description: w.description,
    alternates: { canonical: `/education/beinspire/${w.slug}` },
  };
}

export default async function BeinspireWorkshopPage({ params }: Props) {
  const { slug } = await params;
  const w = getBeinspireWorkshop(slug);
  if (!w) notFound();
  const cap = beinspirePricing.cohortCap;

  return (
    <ProgramDetail
      family={{ label: "BEInspire© Career Series", href: "/education/beinspire", indexLabel: "All BEInspire© workshops" }}
      code={w.code}
      name={w.name}
      tagline={w.description}
      facts={[
        { label: "Code", value: w.code },
        { label: "Contact hours", value: hoursLabel(w.live.contactHours) },
        { label: "Format", value: w.live.delivery },
        { label: "Series", value: "BEInspire© Career Series" },
      ]}
      audience={w.audience}
      modulesHeading="Segments"
      modules={w.segments.map((s) => ({ number: s.number, title: s.title }))}
      prices={cohortPriceRows(beinspirePricing, cap)}
      priceNotes={cohortPriceNotes(cap)}
      enrollHref={links.coursePortal}
      selfPacedNote="price coming soon."
      formats={["In-Person", "Live Virtual"]}
      aside={
        <Link
          href="/education/beinspire#request"
          className="mt-5 block rounded-3xl border border-gold/40 bg-gold-soft p-6 transition-colors hover:border-gold"
        >
          <p className="eyebrow">Full series bundle</p>
          <p className="mt-2 font-semibold text-navy">
            All {beinspireWorkshops.length} workshops for {usd(beinspirePricing.bundle.price)}{" "}
            <s className="font-normal text-muted">{usd(beinspirePricing.bundle.individualTotal)}</s>
          </p>
        </Link>
      }
    />
  );
}
