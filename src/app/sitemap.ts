import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Add each route here as its page is built (data-driven detail pages get appended from src/data).
const routes = ["/"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({
    url: `${site.url}${path === "/" ? "" : path}`,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
