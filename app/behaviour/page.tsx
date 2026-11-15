import type { Metadata } from "next";
import Link from "next/link";
import { hubs } from "@/data/hubs";

export const metadata: Metadata = {
  title: "Dog behaviour guides",
  description: "Step-by-step guides to common dog behaviour problems, based on advice from UK animal charities.",
  alternates: { canonical: "/behaviour" },
};

export default function Page() {
  return (
    <div className="wrap article">
      <h1>Behaviour guides</h1>
      <p className="lede">
        What it looks like, why it happens and what to do first, taken from RSPCA and Dogs Trust
        advice.
      </p>
      <ul className="card-grid">
        {hubs.map((h) => (
          <li key={h.slug}>
            <Link className="card" href={`/behaviour/${h.slug}`}>
              <span className="card-kicker">{h.short}</span>
              <h3>{h.title}</h3>
              <p>{h.summary}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
