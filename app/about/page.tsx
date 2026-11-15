import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About and how we work",
  description: `Who ${site.name} is for, where our information comes from and how we make money.`,
  alternates: { canonical: "/about" },
};

export default function Page() {
  return (
    <div className="wrap article">
      <h1>About {site.name}</h1>
      <p className="lede">
        We turn reputable advice on common dog behaviour problems into something you can act on
        tonight.
      </p>

      <h2>What we are, and are not</h2>
      <p>
        We are not vets and we are not a dog training business. We read what the UK's animal
        welfare charities and veterinary bodies publish, and put it into plain English with the
        practical steps first.
      </p>

      <h2>Where the information comes from</h2>
      <p>
        Every guide and tool lists its sources at the bottom, with the date we last checked them.
        If a fact has no source, it does not go in. You can see the full list on the{" "}
        <Link href="/sources">sources page</Link>.
      </p>
      <p>
        When a page has been reviewed by a vet or clinical behaviourist, their name, qualification
        and the review date appear at the top of that page.
      </p>

      <h2>How we make money</h2>
      <p>
        Some product links are affiliate links, which means we may earn a commission if you buy.
        It costs you nothing extra and it does not decide what we recommend: the guides name the
        type of kit that helps, whether or not we have a link for it.
      </p>
    </div>
  );
}
