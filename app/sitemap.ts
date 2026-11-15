import type { MetadataRoute } from "next";
import { hubs } from "@/data/hubs";
import { site, tools } from "@/data/site";
import { items } from "@/data/safety";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["", "/gear", "/about", "/sources", "/feeding", ...tools.map((t) => t.href)];
  return [
    ...staticPaths.map((p) => ({ url: `${site.url}${p}` })),
    ...items.map((i) => ({ url: `${site.url}/safe-for-dogs/${i.slug}` })),
    ...hubs.map((h) => ({ url: `${site.url}/behaviour/${h.slug}`, lastModified: h.updated })),
  ];
}
