import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hubs, getHub } from "@/data/hubs";
import { site } from "@/data/site";
import SourceList, { formatDate } from "@/components/SourceList";
import GearList from "@/components/GearList";
import EmailCapture from "@/components/EmailCapture";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return hubs.map((h) => ({ slug: h.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const hub = getHub(slug);
  if (!hub) return {};
  return {
    title: hub.title,
    description: hub.summary,
    alternates: { canonical: `/behaviour/${hub.slug}` },
  };
}

export default async function HubPage({ params }: Props) {
  const { slug } = await params;
  const hub = getHub(slug);
  if (!hub) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: hub.title,
    description: hub.summary,
    dateModified: hub.updated,
    inLanguage: "en-GB",
    publisher: { "@type": "Organization", name: site.name },
    mainEntityOfPage: `${site.url}/behaviour/${hub.slug}`,
    ...(hub.reviewedBy
      ? { reviewedBy: { "@type": "Person", name: hub.reviewedBy.name, description: hub.reviewedBy.credentials } }
      : {}),
  };

  return (
    <article className="wrap article">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header>
        <p className="card-kicker">{hub.short}</p>
        <h1>{hub.title}</h1>
        <p className="lede">{hub.summary}</p>
        <p className="meta">
          Updated {formatDate(hub.updated)}
          {hub.reviewedBy
            ? `. Reviewed by ${hub.reviewedBy.name}, ${hub.reviewedBy.credentials}, ${formatDate(hub.reviewedBy.date)}`
            : ""}
          .
        </p>
      </header>

      <section>
        <h2>{hub.signs.heading}</h2>
        <ul>{hub.signs.items.map((i) => <li key={i}>{i}</li>)}</ul>
        {hub.signs.note ? <p className="note">{hub.signs.note}</p> : null}
      </section>

      <section>
        <h2>{hub.why.heading}</h2>
        <ul>{hub.why.items.map((i) => <li key={i}>{i}</li>)}</ul>
      </section>

      <section>
        <h2>{hub.steps.heading}</h2>
        {hub.steps.intro ? <p>{hub.steps.intro}</p> : null}
        <ol className="steps">
          {hub.steps.items.map((s) => (
            <li key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section>
        <h2>What to avoid</h2>
        <ul>{hub.avoid.map((i) => <li key={i}>{i}</li>)}</ul>
      </section>

      <section className="callout">
        <h2>When to get help</h2>
        <p>{hub.help}</p>
      </section>

      <GearList ids={hub.gearIds} />
      <SourceList ids={hub.sourceIds} />
      <EmailCapture source={`hub-${hub.slug}`} />
    </article>
  );
}
