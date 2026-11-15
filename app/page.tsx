import Link from "next/link";
import { hubs } from "@/data/hubs";
import { site, tools } from "@/data/site";
import { guides } from "@/data/guides";
import EmailCapture from "@/components/EmailCapture";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <h1>{site.tagline}</h1>
          <p className="lede">
            Plain-English guides to the behaviour problems that wear owners down, free tools, and
            kit worth buying. Every fact links to where it came from.
          </p>
        </div>
      </section>

      <section className="wrap section" aria-labelledby="guides">
        <h2 id="guides">Start with the problem</h2>
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
        <h2 id="guides-h">Buying guides</h2>
        <ul className="card-grid">
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

      <div className="wrap section">
        <EmailCapture source="home" />
      </div>
    </>
  );
}
