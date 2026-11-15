"use client";

import { useState } from "react";

// RER = 70 x (kg ^ 0.75). Daily need = RER x a factor range.
// Factor ranges are the AAHA ones reported by the source on the page.
const PROFILES = {
  neutered: { label: "Neutered adult", lo: 1.4, hi: 1.6 },
  intact: { label: "Entire (not neutered) adult", lo: 1.6, hi: 1.8 },
  inactive: { label: "Inactive adult", lo: 1.0, hi: 1.2 },
} as const;

type ProfileKey = keyof typeof PROFILES;

export function rer(kg: number) {
  return 70 * Math.pow(kg, 0.75);
}

export default function Calculator() {
  const [kg, setKg] = useState("");
  const [profile, setProfile] = useState<ProfileKey>("neutered");
  const [density, setDensity] = useState("");

  const w = parseFloat(kg);
  const valid = Number.isFinite(w) && w >= 1 && w <= 100;
  const p = PROFILES[profile];
  const base = valid ? rer(w) : 0;
  const lo = Math.round(base * p.lo);
  const hi = Math.round(base * p.hi);

  const d = parseFloat(density);
  const hasDensity = Number.isFinite(d) && d >= 50 && d <= 700;
  const gLo = hasDensity ? Math.round((lo / d) * 100) : 0;
  const gHi = hasDensity ? Math.round((hi / d) * 100) : 0;

  return (
    <div className="tool">
      <div className="field">
        <label htmlFor="kg">Your dog's ideal weight (kg)</label>
        <input id="kg" type="number" inputMode="decimal" min={1} max={100} step={0.1}
          value={kg} onChange={(e) => setKg(e.target.value)} placeholder="e.g. 12" />
        <p className="fineprint">Use the weight your dog should be, not their current weight if they are over or under.</p>
      </div>

      <fieldset className="field">
        <legend>Which fits best?</legend>
        {(Object.keys(PROFILES) as ProfileKey[]).map((k) => (
          <label key={k} className="radio">
            <input type="radio" name="profile" checked={profile === k} onChange={() => setProfile(k)} />
            {PROFILES[k].label}
          </label>
        ))}
      </fieldset>

      <div className="field">
        <label htmlFor="density">Calories in your food (kcal per 100g), optional</label>
        <input id="density" type="number" inputMode="decimal" min={50} max={700}
          value={density} onChange={(e) => setDensity(e.target.value)} placeholder="on the pack, e.g. 360" />
      </div>

      <div className="result" role="status" aria-live="polite">
        {valid ? (
          <>
            <p className="result-big">{lo.toLocaleString("en-GB")} to {hi.toLocaleString("en-GB")} kcal a day</p>
            <p>
              Resting need {Math.round(base).toLocaleString("en-GB")} kcal × {p.lo} to {p.hi} for a{" "}
              {p.label.toLowerCase()}. This includes treats and chews.
            </p>
            {hasDensity ? (
              <p><strong>About {gLo} to {gHi}g of this food a day</strong>, less whatever you give in treats.</p>
            ) : null}
          </>
        ) : (
          <p>Enter a weight between 1 and 100kg.</p>
        )}
      </div>
    </div>
  );
}
