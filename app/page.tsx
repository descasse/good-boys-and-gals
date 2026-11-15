import Link from "next/link";
import { hubs } from "@/data/hubs";
import { tools } from "@/data/site";
import { guides } from "@/data/guides";
import { items, getItem, cap, type Item } from "@/data/safety";
import Search from "./safe-for-dogs/Search";
import EmailCapture from "@/components/EmailCapture";

// The most-searched checks, shown as shortcuts under the search box.
const POPULAR = ["strawberries", "bananas", "cheese", "grapes", "watermelon", "peanut-butter", "tomatoes", "eggs", "chocolate", "tulips"];

export default function Home() {
  const foods = items.filter((i) => i.kind === "food").length;
  const plants = items.filter((i) => i.kind === "plant").length;
  const popular = POPULAR.map(getItem).filter((i): i is Item => !!i);

  return (
    <>
      <section className="hero">
        <div className="wrap">
          <h1>Is it safe for my dog?</h1>
          <p className="lede">
            Check {foods} foods and {plants} plants. Every answer comes from a UK animal charity and
            links to its source.
          </p>
        </div>
      </section>

      <section className="wrap section" aria-label="Search">
        <Search />
        <ul className="chip-list" aria-label="Popular checks">
          {popular.map((i) => (
            <li key={i.slug}><Link href={`/safe-for-dogs/${i.slug}`}>{cap(i.name)}</Link></li>
          ))}
          <li><Link href="/safe-for-dogs">See all</Link></li>
        </ul>
      </section>

      <section className="wrap section" aria-labelledby="tools-h" id="tools">
        <h2 id="tools-h">Free tools</h2>
        <ul className="card-grid card-grid-3">
          {tools.map((t) => (
            <li key={t.href}>
              <Link className="card" href={t.href}>
                <h3>{t.title}</h3>
                <p>{t.blurb}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="wrap section" aria-labelledby="guides-h">
        <h2 id="guides-h">Feeding and buying guides</h2>
        <ul className="card-grid">
          <li>
            <Link className="card" href="/feeding">
              <span className="card-kicker">Feeding</span>
              <h3>What should I feed my dog?</h3>
              <p>Main meals, treats and human food: the short version of what vet charities say.</p>
            </Link>
          </li>
          {guides.map((g) => (
            <li key={g.slug}>
              <Link className="card" href={`/guides/${g.slug}`}>
                <span className="card-kicker">{g.kicker}</span>
                <h3>{g.title}</h3>
                <p>{g.summary}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="wrap section" aria-labelledby="behaviour-h">
        <h2 id="behaviour-h">Behaviour</h2>
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
      </section>

      <div className="wrap section">
        <EmailCapture source="home" />
      </div>
    </>
  );
}
