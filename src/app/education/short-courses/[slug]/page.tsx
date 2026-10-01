import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CatalogCourseDetail } from "@/components/education/CatalogCourseDetail";
import { getShortCourse, hocShortCourses } from "@/data/shortCourses";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return hocShortCourses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = getShortCourse(slug);
  if (!c) return {};
  return {
    title: c.name,
    description: c.description,
    alternates: { canonical: `/education/short-courses/${c.slug}` },
  };
}

export default async function ShortCoursePage({ params }: Props) {
  const { slug } = await params;
  const course = getShortCourse(slug);
  if (!course) notFound();
  return (
    <CatalogCourseDetail
      course={course}
      family={{ label: "HOC Short Course", href: "/education/short-courses", indexLabel: "All HOC Short Courses" }}
    />
  );
}
