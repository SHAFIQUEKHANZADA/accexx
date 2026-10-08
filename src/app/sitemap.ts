import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { certifications } from "@/data/certifications";
import { leadershipPrograms } from "@/data/leadership";
import { beinspireWorkshops } from "@/data/beinspire";
import { projectUnifyCertificates } from "@/data/projectUnify";
import { hocShortCourses } from "@/data/shortCourses";
import { trainingShopCourses } from "@/data/trainingShop";
import { consultingEngagements } from "@/data/consulting";

const staticRoutes = [
  "/",
  "/about",
  "/about/dr-a",
  "/services",
  "/services/consulting",
  "/services/coaching",
  "/services/speaking",
  "/education",
  "/education/certifications",
  "/education/leadership",
  "/education/beinspire",
  "/education/project-unify",
  "/education/short-courses",
  "/education/training-shop",
  "/books",
  "/inside-the-pages",
  "/contact",
  "/privacy",
];

// Detail pages are generated from the same data files as the pages themselves.
const dataRoutes = [
  ...certifications.map((c) => `/education/certifications/${c.slug}`),
  ...leadershipPrograms.map((p) => `/education/leadership/${p.slug}`),
  ...beinspireWorkshops.map((w) => `/education/beinspire/${w.slug}`),
  ...projectUnifyCertificates.map((c) => `/education/project-unify/${c.slug}`),
  ...hocShortCourses.map((c) => `/education/short-courses/${c.slug}`),
  ...trainingShopCourses.map((c) => `/education/training-shop/${c.slug}`),
  ...consultingEngagements.map((e) => `/services/consulting/${e.slug}`),
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [...staticRoutes, ...dataRoutes].map((path) => ({
    url: `${site.url}${path === "/" ? "" : path}`,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : staticRoutes.includes(path) ? 0.8 : 0.6,
  }));
}
