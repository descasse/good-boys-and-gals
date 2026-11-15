import type { Metadata } from "next";
import Estimator from "./Estimator";
import SourceList from "@/components/SourceList";
import { costsIncluded, costsExcluded, costsYear } from "@/data/costs";

export const metadata: Metadata = {
  title: "Lifetime cost of a dog estimator",
  description:
    "The minimum a small, medium or large dog costs over its life in the UK, using PDSA's published figures.",
  alternates: { canonical: "/tools/cost-estimator" },
};

export default function Page() {
  return (
    <div className="wrap article">
      <h1>What does a dog cost over its lifetime?</h1>
      <p className="lede">
        A minimum, by size, built from PDSA's set-up and monthly figures. Real spending is usually
        higher: see what is left out below.
      </p>
      <Estimator />
      <section>
        <h2>What the figures include</h2>
        <ul>{costsIncluded.map((i) => <li key={i}>{i}</li>)}</ul>
        <h2>What they leave out</h2>
        <ul>{costsExcluded.map((i) => <li key={i}>{i}</li>)}</ul>
        <p className="note">
          PDSA last calculated these costs in {costsYear}, from online prices at the time. We work
          out the total the same way PDSA does: set-up cost plus monthly cost for each month of the
          dog's life.
        </p>
      </section>
      <SourceList ids={["pdsaDogCost"]} />
    </div>
  );
}
