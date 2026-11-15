import type { Metadata } from "next";
import Link from "next/link";
import Search from "./Search";
import { items, verdictLabel, cap, type Verdict } from "@/data/safety";
import SourceList from "@/components/SourceList";

export const metadata: Metadata = {
  title: "Is it safe for my dog? Foods and plants checker",
  description:
    "What dogs can and can't eat, and which plants are poisonous, with the reason for each and the charity source it came from.",
  alternates: { canonical: "/safe-for-dogs" },
};

const FOOD_GROUPS: { verdict: Verdict; heading: string }[] = [
  { verdict: "toxic", heading: "Never feed" },
  { verdict: "hazard", heading: "Hazards" },
  { verdict: "care", heading: "Fine with care" },
  { verdict: "yes", heading: "Fine in moderation" },
];

export default function Page() {
  const foods = items.filter((i) => i.kind === "food");
  const plants = items.filter((i) => i.kind === "plant");
  const sourceIds = [...new Set(items.flatMap((i) => i.sourceIds))];

  return (
    <div className="wrap article">
      <h1>Is it safe for my dog?</h1>
      <p className="lede">
        {foods.length} foods and {plants.length} plants, each with a verdict from a UK animal
        charity and a link to where it came from.
      </p>
      <div className="callout callout-urgent">
        <p>
          <strong>If your dog has already eaten something harmful, don't wait for symptoms.</strong>{" "}
          Call your vet now and tell them what, how much and when.
        </p>
      </div>

      <Search />

      <h2>Foods</h2>
      {FOOD_GROUPS.map((g) => {
        const list = foods.filter((i) => i.verdict === g.verdict);
        return (
          <section key={g.verdict}>
            <h3>
              <span className={`badge badge-${g.verdict}`}>{verdictLabel[g.verdict]}</span> {g.heading}
            </h3>
            <ul className="chip-list">
              {list.map((i) => (
                <li key={i.slug}><Link href={`/safe-for-dogs/${i.slug}`}>{cap(i.name)}</Link></li>
              ))}
            </ul>
          </section>
        );
      })}

      <h2>Poisonous plants</h2>
      <ul className="chip-list">
        {plants.map((i) => (
          <li key={i.slug}><Link href={`/safe-for-dogs/${i.slug}`}>{cap(i.name)}</Link></li>
        ))}
      </ul>
      <p className="note">
        These lists are not complete. A food or plant that is missing has not been checked: it has
        not been found safe.
      </p>

      <SourceList ids={sourceIds} />
    </div>
  );
}
