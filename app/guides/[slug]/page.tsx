import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { guides, getGuide } from "@/data/guides";
import { site } from "@/data/site";
import SourceList, { formatDate } from "@/components/SourceList";
import GearList from "@/components/GearList";
import EmailCapture from "@/components/EmailCapture";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return {
    title: guide.title,
    description: guide.summary,
    alternates: { canonical: `/guides/${guide.slug}` },
  };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.summary,
    dateModified: guide.updated,
    inLanguage: "en-GB",
    publisher: { "@type": "Organization", name: site.name },
    mainEntityOfPage: `${site.url}/guides/${guide.slug}`,
  };

  return (
    <article className="wrap article">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header>
        <p className="card-kicker">{guide.kicker}</p>
        <h1>{guide.title}</h1>
        <p className="lede">{guide.summary}</p>
        <p className="meta">
          Updated {formatDate(guide.updated)}
          {guide.reviewedBy
            ? `. Reviewed by ${guide.reviewedBy.name}, ${guide.reviewedBy.credentials}, ${formatDate(guide.reviewedBy.date)}`
            : ""}
          .
        </p>
      </header>

      {guide.sections.map((s) => (
        <section key={s.heading}>
          <h2>{s.heading}</h2>
          {s.paras?.map((p) => <p key={p}>{p}</p>)}
          {s.items ? <ul>{s.items.map((i) => <li key={i}>{i}</li>)}</ul> : null}
        </section>
      ))}

      <section className="callout">
        <h2>When to see your vet</h2>
        <p>{guide.help}</p>
      </section>

      <GearList ids={guide.brandIds} heading={guide.brandHeading} />
      <SourceList ids={guide.sourceIds} />
      <EmailCapture source={`guide-${guide.slug}`} />
    </article>
  );
}
