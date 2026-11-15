"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { items, verdictLabel, cap, type Item } from "@/data/safety";

const esc = (v: string) => v.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

function matches(i: Item, term: string) {
  // Word-boundary matching so "steak" does not hit "tea" and "coconut" does not hit "nut".
  const starts = new RegExp(`\\b${esc(term)}`);
  const names = [i.name.toLowerCase(), ...i.aliases];
  return names.some((n) => starts.test(n) || new RegExp(`\\b${esc(n)}(s|es)?\\b`).test(term));
}

export default function Search() {
  const [q, setQ] = useState("");
  const term = q.trim().toLowerCase();
  const results = useMemo(() => (term ? items.filter((i) => matches(i, term)) : []), [term]);

  return (
    <div className="tool">
      <label htmlFor="safe-q">Type a food or plant</label>
      <input
        id="safe-q"
        type="search"
        placeholder="e.g. strawberries, cheese, tulips"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        autoComplete="off"
      />
      {term ? (
        <p className="result-count" role="status">
          {results.length ? `${results.length} match${results.length === 1 ? "" : "es"}` : "Not in our list"}
        </p>
      ) : null}

      {term && results.length === 0 ? (
        <div className="callout">
          <p>
            <strong>“{q.trim()}” is not in our list. That does not mean it is safe.</strong> We only
            list items a named source has given a verdict on. If your dog has eaten something you are
            unsure about, call your vet.
          </p>
        </div>
      ) : null}

      {results.length ? (
        <ul className="food-list">
          {results.map((i) => (
            <li key={i.slug} className={`food food-${i.verdict}`}>
              <div className="food-head">
                <h3><Link href={`/safe-for-dogs/${i.slug}`}>{cap(i.name)}</Link></h3>
                <span className={`badge badge-${i.verdict}`}>
                  {i.kind === "plant" ? "Poisonous" : verdictLabel[i.verdict]}
                </span>
              </div>
              <p>{i.summary}</p>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
