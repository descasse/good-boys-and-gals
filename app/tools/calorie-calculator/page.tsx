import type { Metadata } from "next";
import Calculator from "./Calculator";
import SourceList from "@/components/SourceList";

export const metadata: Metadata = {
  title: "Dog calorie calculator",
  description:
    "Work out a daily calorie range for a healthy adult dog from their ideal weight, and convert it to grams of your own food.",
  alternates: { canonical: "/tools/calorie-calculator" },
};

export default function Page() {
  return (
    <div className="wrap article">
      <h1>Dog calorie calculator</h1>
      <p className="lede">
        A starting range for a healthy adult dog, using the standard veterinary formula. Adjust from
        there by watching your dog's weight and shape over a few weeks.
      </p>
      <Calculator />
      <section>
        <h2>How it works</h2>
        <p>
          Resting energy requirement (RER) is 70 × body weight in kg to the power of 0.75. Daily need
          is RER multiplied by a factor: 1.4 to 1.6 for a neutered adult, 1.6 to 1.8 for an entire
          adult, 1.0 to 1.2 for an inactive adult.
        </p>
        <h2>When not to use it</h2>
        <p>
          It is for healthy adults at a sensible weight. It does not apply to puppies, pregnant or
          nursing dogs, working dogs, dogs with a medical condition, or a dog you are trying to slim
          down. For any of those, ask your vet for a feeding plan.
        </p>
      </section>
      <SourceList ids={["vetstreetCalories"]} />
    </div>
  );
}
