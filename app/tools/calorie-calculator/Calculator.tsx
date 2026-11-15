"use client";

import { useState } from "react";
import { breeds, kcUrl, type Breed } from "@/data/breeds";
import { sources } from "@/data/sources";

// RER = 70 x (kg ^ 0.75). Daily need = RER x a factor range.
// Factor ranges are the AAHA ones reported by the source on the page.
const PROFILES = {
  neutered: { label: "Neutered adult", hint: "Most pet dogs", lo: 1.4, hi: 1.6 },
  intact: { label: "Entire adult", hint: "Not neutered", lo: 1.6, hi: 1.8 },
  inactive: { label: "Less active adult", hint: "Short, gentle walks", lo: 1.0, hi: 1.2 },
} as const;

type ProfileKey = keyof typeof PROFILES;
type Sex = "male" | "female";

export function rer(kg: number) {
  return 70 * Math.pow(kg, 0.75);
}

const n = (v: number) => Math.round(v).toLocaleString("en-GB");
const kgText = (r: [number, number]) => (r[0] === r[1] ? `${r[0]} kg` : `${r[0]} to ${r[1]} kg`);
const mid = (r: [number, number]) => Math.round(((r[0] + r[1]) / 2) * 2) / 2;
// A standard that only gives a maximum starts at that maximum.
const startOf = (b: Breed, s: Sex) => (b.ceiling ? b[s][1] : mid(b[s]));
const recordedFor = (b: Breed, s: Sex) => b.recorded?.[s] ?? b.recorded?.all;

export default function Calculator() {
  const [breedName, setBreedName] = useState("");
  const [crossName, setCrossName] = useState("");
  const [sex, setSex] = useState<Sex>("male");
  const [kg, setKg] = useState(12);
  const [profile, setProfile] = useState<ProfileKey>("neutered");
  const [density, setDensity] = useState("");
  const [treats, setTreats] = useState("");
  const [meals, setMeals] = useState(2);

  const breed = breeds.find((b) => b.name === breedName);
  const cross = breed ? breeds.find((b) => b.name === crossName && b.name !== breedName) : undefined;

  // One breed: that breed's range. Two breeds: the span covering both parents,
  // because a cross can take after either. The starting weight is the average
  // of the two midpoints. This is a rough guide, not a sourced figure.
  function rangeFor(a: typeof breed, b: typeof breed, s: Sex): [number, number] | null {
    if (!a) return null;
    if (!b) return a[s];
    return [Math.min(a[s][0], b[s][0]), Math.max(a[s][1], b[s][1])];
  }
  function startFor(a: typeof breed, b: typeof breed, s: Sex) {
    if (!a) return null;
    if (!b) return startOf(a, s);
    return Math.round(((startOf(a, s) + startOf(b, s)) / 2) * 2) / 2;
  }
  const range = rangeFor(breed, cross, sex);

  function pick(name: string, crossWith: string, s: Sex) {
    const a = breeds.find((x) => x.name === name);
    const b = a ? breeds.find((x) => x.name === crossWith && x.name !== name) : undefined;
    setBreedName(name);
    setCrossName(a ? crossWith : "");
    setSex(s);
    const start = startFor(a, b, s);
    if (start !== null) setKg(start);
  }

  // Vet-record averages are not limits, so they never trigger the warning.
  // A maximum-only standard only warns above the maximum.
  const parents = [breed, cross].filter(Boolean) as Breed[];
  const averagesOnly = parents.some((b) => b.basis === "vetcompass");
  const noFloor = parents.some((b) => b.ceiling);
  const outside = range && !averagesOnly
    ? (!noFloor && kg < range[0] * 0.9) || kg > range[1] * 1.1
    : false;
  const rec = breed && !cross ? recordedFor(breed, sex) : undefined;
  const recSource = breed?.recorded ? sources[breed.recorded.sourceId] : undefined;
  const recLink = recSource ? (
    <a href={recSource.url} rel="noopener noreferrer" target="_blank">Royal Veterinary College study</a>
  ) : null;

  const p = PROFILES[profile];
  const base = rer(kg);
  const lo = base * p.lo;
  const hi = base * p.hi;
  const midKcal = (lo + hi) / 2;

  const t = Math.max(0, parseFloat(treats) || 0);
  const foodLo = Math.max(0, lo - t);
  const foodHi = Math.max(0, hi - t);
  const treatShare = midKcal > 0 ? Math.round((t / midKcal) * 100) : 0;

  const d = parseFloat(density);
  const hasDensity = Number.isFinite(d) && d >= 50 && d <= 700;
  const gLo = hasDensity ? (foodLo / d) * 100 : 0;
  const gHi = hasDensity ? (foodHi / d) * 100 : 0;

  return (
    <div className="tool calc">
      <div className="calc-cols">
        <div className="field">
          <label htmlFor="breed">Breed</label>
          <select id="breed" value={breedName} onChange={(e) => pick(e.target.value, crossName, sex)}>
            <option value="">Not listed</option>
            {breeds.map((b) => <option key={b.name} value={b.name}>{b.name}</option>)}
          </select>
        </div>
        <div className="field">
          <label htmlFor="cross">Crossed with <span className="fineprint">(optional)</span></label>
          <select id="cross" value={cross ? crossName : ""} disabled={!breed}
            onChange={(e) => pick(breedName, e.target.value, sex)}>
            <option value="">Not a cross</option>
            {breeds.filter((b) => b.name !== breedName).map((b) => <option key={b.name} value={b.name}>{b.name}</option>)}
          </select>
        </div>
        <fieldset className="field">
          <legend>Sex</legend>
          <div className="seg">
            {(["male", "female"] as Sex[]).map((s) => (
              <label key={s} className={sex === s ? "seg-on" : ""}>
                <input type="radio" name="sex" checked={sex === s} onChange={() => pick(breedName, crossName, s)} />
                {s === "male" ? "Male" : "Female"}
              </label>
            ))}
          </div>
        </fieldset>
      </div>

      {range && cross ? (
        <p className="note calc-note">
          A {sex} {breed!.name} × {cross.name} cross could weigh anywhere from{" "}
          <strong>{kgText(range)}</strong> as an adult, depending on which parent they take after.
          We've started you at {kg} kg, halfway between the two breeds. That is a rough guide: if
          you know what your dog should weigh, enter it.
        </p>
      ) : range && breed!.basis === "kc" ? (
        <p className="note calc-note">
          The{" "}
          <a href={kcUrl(breed!.kc!)} rel="noopener noreferrer" target="_blank">Royal Kennel Club breed standard</a>{" "}
          puts an adult {sex} {breed!.name} at{" "}
          <strong>{breed!.ceiling ? `up to ${range[1]} kg` : kgText(range)}</strong>. We've set the weight to match.
          {rec ? <> Dogs of this breed seen by UK vets average {rec} kg ({recLink}), a figure that includes overweight dogs.</> : null}
          {" "}Change it if your vet has given you a different target.
        </p>
      ) : range && breed!.basis === "vetcompass" ? (
        <p className="note calc-note">
          The breed standard gives no weight for a {breed!.name}. UK vet records put the average adult{" "}
          {breed!.recorded?.[sex] ? `${sex} ` : ""}at <strong>{rec} kg</strong> ({recLink}). That is an average of real
          dogs, some of them overweight, so it is not a target. If your vet has given you a weight, use that.
        </p>
      ) : range ? (
        <p className="note calc-note">
          A typical adult {sex} {breed!.name} weighs <strong>{kgText(range)}</strong>, according to a vet-group
          chart. Neither the Kennel Club standard nor a Royal Veterinary College study gives a weight for this
          breed. Change it if your vet has given you a different target.
        </p>
      ) : (
        <p className="fineprint">
          If your dog's breed isn't listed, enter the ideal weight your vet has given you.
        </p>
      )}

      <div className="field">
        <label htmlFor="kg">Ideal weight: <strong>{kg} kg</strong></label>
        <input id="kg" type="range" min={1} max={90} step={0.5} value={Math.min(kg, 90)}
          onChange={(e) => setKg(parseFloat(e.target.value))} />
        <div className="calc-row">
          <input aria-label="Ideal weight in kilograms" type="number" inputMode="decimal" min={1} max={100} step={0.1}
            value={kg} onChange={(e) => {
              const v = parseFloat(e.target.value);
              if (Number.isFinite(v)) setKg(Math.min(100, Math.max(1, v)));
            }} />
          <span className="fineprint">The weight your dog should be, which may not be what they weigh today.</span>
        </div>
        {outside ? (
          <p className="calc-warn">
            That's outside the typical range for {cross ? "these breeds" : "this breed"} and sex. If it's your dog's current
            weight, ask your vet what their target should be and feed for that.
          </p>
        ) : null}
      </div>

      <fieldset className="field">
        <legend>Which fits best?</legend>
        <div className="choice-grid">
          {(Object.keys(PROFILES) as ProfileKey[]).map((k) => (
            <label key={k} className={`choice ${profile === k ? "choice-on" : ""}`}>
              <input type="radio" name="profile" checked={profile === k} onChange={() => setProfile(k)} />
              <span className="choice-title">{PROFILES[k].label}</span>
              <span className="choice-hint">{PROFILES[k].hint}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="result" role="status" aria-live="polite">
        <p className="result-big">{n(lo)} to {n(hi)} kcal a day</p>
        <p className="fineprint">
          Resting need of {n(base)} kcal × {p.lo} to {p.hi}. This is the total for the day, treats included.
        </p>
      </div>

      <h3 className="calc-sub">Turn it into portions</h3>
      <div className="calc-cols">
        <div className="field">
          <label htmlFor="density">Calories in your food</label>
          <div className="calc-row">
            <input id="density" type="number" inputMode="decimal" min={50} max={700}
              value={density} onChange={(e) => setDensity(e.target.value)} placeholder="e.g. 360" />
            <span>kcal per 100g</span>
          </div>
          <p className="fineprint">Printed on the pack, usually near the ingredients.</p>
        </div>
        <div className="field">
          <label htmlFor="treats">Treats and chews today</label>
          <div className="calc-row">
            <input id="treats" type="number" inputMode="decimal" min={0} max={2000}
              value={treats} onChange={(e) => setTreats(e.target.value)} placeholder="0" />
            <span>kcal</span>
          </div>
          <p className="fineprint">Add up what's on the treat packets.</p>
        </div>
        <fieldset className="field">
          <legend>Meals a day</legend>
          <div className="seg">
            {[1, 2, 3].map((m) => (
              <label key={m} className={meals === m ? "seg-on" : ""}>
                <input type="radio" name="meals" checked={meals === m} onChange={() => setMeals(m)} />
                {m}
              </label>
            ))}
          </div>
        </fieldset>
      </div>

      {hasDensity ? (
        <div className="result" role="status" aria-live="polite">
          <p className="result-big">{n(gLo)} to {n(gHi)}g of food a day</p>
          {meals > 1 ? <p><strong>{n(gLo / meals)} to {n(gHi / meals)}g per meal</strong>, across {meals} meals.</p> : null}
          {t > 0 ? (
            <p className="fineprint">
              After {n(t)} kcal of treats, which is about {treatShare}% of the day's calories.
            </p>
          ) : null}
        </div>
      ) : (
        <p className="fineprint">Enter your food's calories to see grams per day and per meal.</p>
      )}
    </div>
  );
}
