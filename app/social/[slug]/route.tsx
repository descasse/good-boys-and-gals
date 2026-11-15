import { ImageResponse } from "next/og";
import { items, getItem } from "@/data/safety";
import { ItemCard } from "@/lib/card";

// Square 1080x1080 graphic for Instagram, Facebook and Pinterest, one per item.
// URL: /social/strawberries.png

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return items.map((i) => ({ slug: `${i.slug}.png` }));
}

export async function GET(_req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getItem(slug.replace(/\.png$/, ""));
  if (!item) return new Response("Not found", { status: 404 });
  return new ImageResponse(<ItemCard item={item} square />, { width: 1080, height: 1080 });
}
