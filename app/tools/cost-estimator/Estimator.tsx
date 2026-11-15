"use client";

import { useState } from "react";
import { costs, type SizeKey } from "@/data/costs";

const gbp = (n: number) =>
  n.toLocaleString("en-GB", { style: "currency", currency: "GBP", maximumFractionDigits: 0 });

export function lifetime(size: SizeKey, years: number) {
  const c = costs[size];
  return c.setup + c.monthly * 12 * years;
}

export default function Estimator() {
  const [size, setSize] = useState<SizeKey>("medium");
  const c = costs[size];
  const [years, setYears] = useState<number>(11);
  const y = Math.min(Math.max(years, c.lifeMin), c.lifeMax);

  return (
    <div className="tool">
      <fieldset className="field">
        <legend>Size of dog</legend>
        {(Object.keys(costs) as SizeKey[]).map((k) => (
          <label key={k} className="radio">
            <input type="radio" name="size" checked={size === k} onChange={() => setSize(k)} />
            {costs[k].label}
          </label>
        ))}
      </fieldset>

      <div className="field">
        <label htmlFor="years">Lifespan to plan for: {y.toFixed(1)} years</label>
        <input id="years" type="range" min={c.lifeMin} max={c.lifeMax} step={0.1}
          value={y} onChange={(e) => setYears(parseFloat(e.target.value))} />
        <p className="fineprint">
          Typical range for a {c.label.toLowerCase()}: {c.lifeMin} to {c.lifeMax} years.
        </p>
      </div>

      <div className="result" role="status" aria-live="polite">
        <p className="result-big">At least {gbp(lifetime(size, y))}</p>
        <dl className="breakdown">
          <div><dt>Getting started</dt><dd>{gbp(c.setup)}</dd></div>
          <div><dt>Each month</dt><dd>{gbp(c.monthly)}</dd></div>
          <div><dt>Each year</dt><dd>{gbp(c.monthly * 12)}</dd></div>
          <div><dt>Full range for this size</dt><dd>{gbp(lifetime(size, c.lifeMin))} to {gbp(lifetime(size, c.lifeMax))}</dd></div>
        </dl>
      </div>
    </div>
  );
}
