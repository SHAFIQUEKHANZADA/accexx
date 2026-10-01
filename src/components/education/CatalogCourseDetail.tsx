import type { CatalogCourse } from "@/data/types";
import { showCeus } from "@/data/certifications";
import { ProgramDetail, type Fact } from "./ProgramDetail";
import { cohortPriceNotes, cohortPriceRows, hoursLabel } from "./format";

/** Detail page for Project Unify© certificates, HOC Short Courses and Training Shop courses. */
export function CatalogCourseDetail({
  course,
  family,
}: {
  course: CatalogCourse;
  family: { label: string; href: string; indexLabel: string };
}) {
  const facts: Fact[] = [
    { label: "Contact hours", value: hoursLabel(course.cohort.contactHours) },
    { label: "Delivery", value: "In-person or virtual" },
    { label: "Credential", value: course.credential },
  ];
  if (showCeus && course.recommendedCeus !== undefined) facts.push({ label: "Recommended CEUs", value: course.recommendedCeus });
  if (course.track) facts.push({ label: "Track", value: course.track.replace(/^(Track|Stream) \d+:\s*/, "") });

  return (
    <ProgramDetail
      family={family}
      name={course.name}
      tagline={course.description}
      facts={facts}
      audience={course.audience}
      prerequisites={course.prerequisites}
      modules={course.modules}
      prices={cohortPriceRows(course.cohort)}
      priceNotes={cohortPriceNotes()}
      formats={["In-Person", "Virtual", "Hybrid"]}
    />
  );
}
