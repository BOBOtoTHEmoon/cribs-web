import type { MetadataRoute } from "next";
import { SITE } from "@/lib/seo";

const ROUTES = [
  { path: "", priority: 1 },
  { path: "/how-it-works", priority: 0.9 },
  { path: "/tenants", priority: 0.9 },
  { path: "/landlords", priority: 0.9 },
  { path: "/agents", priority: 0.9 },
  { path: "/services", priority: 0.8 },
  { path: "/about", priority: 0.7 },
  { path: "/blog", priority: 0.6 },
  { path: "/help", priority: 0.6 },
  { path: "/safety", priority: 0.5 },
  { path: "/contact", priority: 0.5 },
  { path: "/terms", priority: 0.3 },
  { path: "/privacy", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((r) => ({
    url: `${SITE.url}${r.path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: r.priority,
  }));
}
