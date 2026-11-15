import type { MetadataRoute } from "next";
import { hubs } from "@/data/hubs";
import { site, tools } from "@/data/site";
import { items } from "@/data/safety";
import { guides } from "@/data/guides";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["", "/gear", "/about", "/sources", "/feeding", "/behaviour", ...tools.map((t) => t.href)];
  return [
    ...staticPaths.map((p) => ({ url: `${site.url}${p}` })),
    ...items.map((i) => ({ url: `${site.url}/safe-for-dogs/${i.slug}` })),
    ...guides.map((g) => ({ url: `${site.url}/guides/${g.slug}`, lastModified: g.updated })),
    ...hubs.map((h) => ({ url: `${site.url}/behaviour/${h.slug}`, lastModified: h.updated })),
  ];
}
