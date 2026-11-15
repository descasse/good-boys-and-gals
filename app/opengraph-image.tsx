import { ImageResponse } from "next/og";
import { SiteCard } from "@/lib/card";
import { site } from "@/data/site";

export const alt = site.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(<SiteCard />, size);
}
