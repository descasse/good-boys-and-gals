import type { Metadata } from "next";
import Link from "next/link";
import SourceList from "@/components/SourceList";
import EmailCapture from "@/components/EmailCapture";

export const metadata: Metadata = {
  title: "What should I feed my dog?",
  description:
    "The short version of what UK vet charities say about feeding a dog: main meals, treats, human food and how much.",
  alternates: { canonical: "/feeding" },
};

export default function Page() {
  return (
    <article className="wrap article">
      <h1>What should I feed my dog?</h1>
      <p className="lede">
        The short version of what PDSA and Dogs Trust say, with the tools to put a number on it.
      </p>

      <h2>The main meal</h2>
      <p>
        PDSA recommends buying a commercially made dog food instead of cooking your own, because
        homemade diets are extremely difficult to get right.
      </p>

      <p>
        <Link href="/guides/how-to-choose-dog-food">How to choose a dog food</Link> covers the four
        checks to make and how to read the label.
      </p>

      <h2>How much</h2>
      <p>
        Start from your dog's ideal weight, not their current one.{" "}
        <Link href="/tools/calorie-calculator">The calorie calculator</Link> gives a daily range and
        converts it to grams of your own food. Then watch your dog's shape over a few weeks and
        adjust.
      </p>

      <h2>Treats</h2>
      <ul>
        <li>Treats are fine occasionally, but too many cause weight gain.</li>
        <li>When you give a treat, reduce meals to match.</li>
        <li>Small pieces of lean cooked meat such as chicken breast or turkey work well.</li>
      </ul>

      <h2>Human food</h2>
      <ul>
        <li>Dogs don't need fruit or vegetables, but a small amount is fine as an occasional treat.</li>
        <li>Serve it plain, in bite-sized pieces, with pips, stones and seeds removed.</li>
        <li>Fruit should be occasional only, as most is high in sugar.</li>
        <li>
          Dogs Trust advises speaking to your vet before giving a food your dog hasn't tried, because
          even a usually safe food can upset an individual dog.
        </li>
      </ul>
      <p>
        <Link className="btn" href="/safe-for-dogs">Check a food or plant</Link>
      </p>

      <h2>Never feed</h2>
      <p>
        Chocolate, grapes and raisins, onions and garlic, xylitol, macadamia nuts, alcohol and
        caffeine are all dangerous to dogs. The{" "}
        <Link href="/safe-for-dogs">full list is here</Link>.
      </p>

      <SourceList ids={["pdsaDiet", "dtToxicFoods"]} />
      <EmailCapture source="feeding" />
    </article>
  );
}
