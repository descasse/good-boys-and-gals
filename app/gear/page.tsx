import type { Metadata } from "next";
import Link from "next/link";
import { hubs } from "@/data/hubs";
import GearList from "@/components/GearList";

export const metadata: Metadata = {
  title: "Kit that helps",
  description: "The equipment our behaviour guides recommend, grouped by the problem it helps with.",
  alternates: { canonical: "/gear" },
};

export default function Page() {
  return (
    <div className="wrap article">
      <h1>Kit that helps</h1>
      <p className="lede">
        Equipment is never the whole answer, but the right piece makes the training easier. Each
        list comes from the guide it belongs to.
      </p>
      {hubs.map((h) => (
        <div key={h.slug}>
          <GearList ids={h.gearIds} heading={h.short} />
          <p><Link href={`/behaviour/${h.slug}`}>Read the guide: {h.title}</Link></p>
        </div>
      ))}
    </div>
  );
}
