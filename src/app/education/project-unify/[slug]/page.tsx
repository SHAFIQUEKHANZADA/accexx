import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CatalogCourseDetail } from "@/components/education/CatalogCourseDetail";
import { getProjectUnifyCertificate, projectUnifyCertificates } from "@/data/projectUnify";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projectUnifyCertificates.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = getProjectUnifyCertificate(slug);
  if (!c) return {};
  return {
    title: c.name,
    description: c.description,
    alternates: { canonical: `/education/project-unify/${c.slug}` },
  };
}

export default async function ProjectUnifyPage({ params }: Props) {
  const { slug } = await params;
  const course = getProjectUnifyCertificate(slug);
  if (!course) notFound();
  return (
    <CatalogCourseDetail
      course={course}
      family={{ label: "Project Unify© Certificate", href: "/education/project-unify", indexLabel: "All Project Unify© certificates" }}
    />
  );
}
