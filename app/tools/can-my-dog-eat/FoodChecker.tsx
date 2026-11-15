"use client";

import { useMemo, useState } from "react";
import { foods } from "@/data/foods";

const esc = (v: string) => v.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const LABEL = { poisonous: "Poisonous", hazard: "Hazard" } as const;

export default function FoodChecker() {
  const [q, setQ] = useState("");
  const term = q.trim().toLowerCase();

  const results = useMemo(() => {
    if (!term) return foods;
    // Match on word boundaries so "steak" does not hit "tea" and "coconut" does not hit "nut".
    const startsWord = new RegExp(`\\b${esc(term)}`);
    return foods.filter(
      (f) =>
        startsWord.test(f.name.toLowerCase()) ||
        f.aliases.some(
          (a) => startsWord.test(a) || new RegExp(`\\b${esc(a)}(s|es)?\\b`).test(term)
        )
    );
  }, [term]);

  return (
    <div className="tool">
      <label htmlFor="food-q">Type a food</label>
      <input
        id="food-q"
        type="search"
        placeholder="e.g. grapes, chewing gum, cheese"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        autoComplete="off"
      />

      <p className="result-count" role="status">
        {term
          ? results.length
            ? `${results.length} match${results.length === 1 ? "" : "es"} in our list`
            : "Not in our list"
          : `${foods.length} foods on the list`}
      </p>

      {term && results.length === 0 ? (
        <div className="callout">
          <p>
            <strong>“{q.trim()}” is not in our list. That does not mean it is safe.</strong> We only
            list foods a named source says are harmful, and the list is not complete. If your dog has
            eaten something you are unsure about, call your vet.
          </p>
        </div>
      ) : (
        <ul className="food-list">
          {results.map((f) => (
            <li key={f.name} className={`food food-${f.risk}`}>
              <div className="food-head">
                <h3>{f.name}</h3>
                <span className={`badge badge-${f.risk}`}>{LABEL[f.risk]}</span>
              </div>
              <p>{f.why}</p>
              {f.foundIn ? <p className="fineprint">Found in: {f.foundIn}</p> : null}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
