import type { Metadata } from "next";
import Link from "next/link";
import Calculator from "./Calculator";
import SourceList from "@/components/SourceList";
import { breedSourceIds } from "@/data/breeds";

export const metadata: Metadata = {
  title: "Dog calorie and feeding calculator",
  description:
    "Choose from 88 breeds, with weights from Royal Kennel Club standards and Royal Veterinary College research, to get daily calories and grams of your own food per meal.",
  alternates: { canonical: "/tools/calorie-calculator" },
};

export default function Page() {
  return (
    <div className="wrap article">
      <h1>Dog calorie and feeding calculator</h1>
      <p className="lede">
        Pick your dog's breed to start from a typical adult weight, then see daily calories and
        grams of your own food per meal, with treats taken off.
      </p>
      <Calculator />

      <section>
        <h2>How to use the result</h2>
        <ul>
          <li>Treat it as a starting point. Feed in the middle of the range for two to three weeks.</li>
          <li>Then look at your dog's shape. If they're gaining, move towards the lower end; if they're losing, the higher end.</li>
          <li>Count everything: treats, chews and anything from your plate all come out of the same total.</li>
        </ul>

        <h2>Why breed matters, and why it doesn't</h2>
        <p>
          Calorie needs follow body weight, not breed: a 30kg Labrador and a 30kg crossbreed need
          about the same. What breed tells you is roughly what a healthy adult should weigh, which
          is the number most owners don't have. So the breed sets the weight, and the weight sets
          the calories.
        </p>
        <p>
          For a cross of two listed breeds, pick both. The calculator shows the full span from the
          lighter parent to the heavier one and starts halfway between. Crosses vary a lot, so
          treat that as a first guess and go by your dog's shape and your vet's advice.
        </p>

        <h2>Where the breed weights come from</h2>
        <p>
          Three places, and the calculator tells you which one it used for your breed.
        </p>
        <ul>
          <li>
            <strong>The Royal Kennel Club breed standard</strong>, for the 50 listed breeds whose standard states a
            weight. A standard describes the show ideal, so pet dogs often weigh more.
          </li>
          <li>
            <strong>Royal Veterinary College VetCompass studies</strong>, which report the average adult weight
            recorded by UK vets. We use these for breeds whose standard gives no weight, such as the Labrador
            and German Shepherd, and show them alongside the standard where both exist. These are averages of
            real dogs, some of them overweight, so they are not targets.
          </li>
          <li>
            <strong>A vet-group chart</strong>, for breeds where neither of the first two publishes a weight.
          </li>
        </ul>

        <h2>How it works</h2>
        <p>
          Vets start from a dog's resting energy requirement: 70 × body weight in kilograms to the
          power of 0.75. That is multiplied by a factor for the dog's life: 1.4 to 1.6 for a
          neutered adult, 1.6 to 1.8 for an entire adult, and 1.0 to 1.2 for a less active one.
        </p>

        <h2>Who it's for</h2>
        <p>
          The calculator is built for healthy adult dogs. Puppies, pregnant or nursing dogs, working
          dogs, dogs on a weight-loss plan and dogs with a health condition have different needs, so
          for them your vet's feeding plan is the one to follow.
        </p>
        <p>
          Next: <Link href="/guides/how-to-choose-dog-food">how to choose a dog food</Link> and{" "}
          <Link href="/safe-for-dogs">which human foods are safe</Link>.
        </p>
      </section>
      <SourceList ids={["vetstreetCalories", ...breedSourceIds]} />
    </div>
  );
}
