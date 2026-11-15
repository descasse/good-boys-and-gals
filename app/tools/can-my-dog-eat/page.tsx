import type { Metadata } from "next";
import FoodChecker from "./FoodChecker";
import SourceList from "@/components/SourceList";

export const metadata: Metadata = {
  title: "Can my dog eat this? Poisonous foods checker",
  description:
    "Search foods that are poisonous or hazardous to dogs, with the reason for each and the source it came from.",
  alternates: { canonical: "/tools/can-my-dog-eat" },
};

export default function Page() {
  return (
    <div className="wrap article">
      <h1>Can my dog eat this?</h1>
      <p className="lede">
        Search the foods PDSA lists as poisonous or hazardous to dogs. “Poisonous” means the food
        itself is toxic. “Hazard” means the risk is a blockage, injury or a high-fat stomach upset.
      </p>
      <div className="callout callout-urgent">
        <p>
          <strong>If your dog has already eaten something harmful, don't wait for symptoms.</strong>{" "}
          Call your vet now and tell them what, how much and when.
        </p>
      </div>
      <FoodChecker />
      <SourceList ids={["pdsaPoisons"]} />
    </div>
  );
}
