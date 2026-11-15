"use client";

import { useState } from "react";

// RER = 70 x (kg ^ 0.75). Daily need = RER x a factor range.
// Factor ranges are the AAHA ones reported by the source on the page.
const PROFILES = {
  neutered: { label: "Neutered adult", hint: "Most pet dogs", lo: 1.4, hi: 1.6 },
  intact: { label: "Entire adult", hint: "Not neutered", lo: 1.6, hi: 1.8 },
  inactive: { label: "Less active adult", hint: "Short, gentle walks", lo: 1.0, hi: 1.2 },
} as const;

type ProfileKey = keyof typeof PROFILES;

export function rer(kg: number) {
  return 70 * Math.pow(kg, 0.75);
}

const n = (v: number) => Math.round(v).toLocaleString("en-GB");

export default function Calculator() {
  const [kg, setKg] = useState(12);
  const [profile, setProfile] = useState<ProfileKey>("neutered");
  const [density, setDensity] = useState("");
  const [treats, setTreats] = useState("");
  const [meals, setMeals] = useState(2);

  const p = PROFILES[profile];
  const base = rer(kg);
  const lo = base * p.lo;
  const hi = base * p.hi;
  const mid = (lo + hi) / 2;

  const t = Math.max(0, parseFloat(treats) || 0);
  const foodLo = Math.max(0, lo - t);
  const foodHi = Math.max(0, hi - t);
  const treatShare = mid > 0 ? Math.round((t / mid) * 100) : 0;

  const d = parseFloat(density);
  const hasDensity = Number.isFinite(d) && d >= 50 && d <= 700;
  const gLo = hasDensity ? (foodLo / d) * 100 : 0;
  const gHi = hasDensity ? (foodHi / d) * 100 : 0;

  return (
    <div className="tool calc">
      <div className="field">
        <label htmlFor="kg">Your dog's ideal weight: <strong>{kg} kg</strong></label>
        <input id="kg" type="range" min={1} max={80} step={0.5} value={kg}
          onChange={(e) => setKg(parseFloat(e.target.value))} />
        <div className="calc-row">
          <input aria-label="Ideal weight in kilograms" type="number" inputMode="decimal" min={1} max={100} step={0.1}
            value={kg} onChange={(e) => {
              const v = parseFloat(e.target.value);
              if (Number.isFinite(v)) setKg(Math.min(100, Math.max(1, v)));
            }} />
          <span className="fineprint">Use the weight your dog should be, which may not be what they weigh today.</span>
        </div>
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
