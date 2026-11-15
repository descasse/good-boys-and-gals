import type { MetadataRoute } from "next";
import { hubs } from "@/data/hubs";
import { site, tools } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["", "/gear", "/about", "/sources", ...tools.map((t) => t.href)];
  return [
    ...staticPaths.map((p) => ({ url: `${site.url}${p}` })),
    ...hubs.map((h) => ({ url: `${site.url}/behaviour/${h.slug}`, lastModified: h.updated })),
  ];
}
