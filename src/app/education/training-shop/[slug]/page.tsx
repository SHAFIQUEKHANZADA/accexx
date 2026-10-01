import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CatalogCourseDetail } from "@/components/education/CatalogCourseDetail";
import { getTrainingShopCourse, trainingShopCourses } from "@/data/trainingShop";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return trainingShopCourses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = getTrainingShopCourse(slug);
  if (!c) return {};
  return {
    title: c.name,
    description: c.description,
    alternates: { canonical: `/education/training-shop/${c.slug}` },
  };
}

export default async function TrainingShopPage({ params }: Props) {
  const { slug } = await params;
  const course = getTrainingShopCourse(slug);
  if (!course) notFound();
  return (
    <CatalogCourseDetail
      course={course}
      family={{ label: "Project Unify© Training Shop", href: "/education/training-shop", indexLabel: "All Training Shop courses" }}
    />
  );
}
