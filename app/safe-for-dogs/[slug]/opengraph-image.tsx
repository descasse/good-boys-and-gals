import { ImageResponse } from "next/og";
import { items, getItem, title } from "@/data/safety";
import { ItemCard, SiteCard } from "@/lib/card";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return items.map((i) => ({ slug: i.slug }));
}

export async function generateImageMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getItem(slug);
  return [{ id: "card", alt: item ? title(item) : "The Dog Index", size, contentType }];
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getItem(slug);
  return new ImageResponse(item ? <ItemCard item={item} square={false} /> : <SiteCard />, size);
}
