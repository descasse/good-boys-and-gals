import type { Metadata } from "next";
import { items, title, cap } from "@/data/safety";

export const metadata: Metadata = {
  title: "Social kit",
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <div className="wrap section">
      <h1>Social kit</h1>
      <p className="lede">
        One square graphic per food and plant, 1080 × 1080. Right-click an image to save it, or use
        the link underneath. Each one updates automatically if the data changes.
      </p>
      <ul className="kit-grid">
        {items.map((i) => (
          <li key={i.slug}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`/social/${i.slug}.png`} alt={title(i)} width={270} height={270} loading="lazy" />
            <a href={`/social/${i.slug}.png`} download>{cap(i.name)}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
