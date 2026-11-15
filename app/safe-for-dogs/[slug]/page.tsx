import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { items, getItem, title, shortAnswer, verdictLabel, cap } from "@/data/safety";
import { site } from "@/data/site";
import SourceList from "@/components/SourceList";
import EmailCapture from "@/components/EmailCapture";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return items.map((i) => ({ slug: i.slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getItem(slug);
  if (!item) return {};
  return {
    title: title(item),
    description: `${shortAnswer(item)} ${item.summary}`.slice(0, 155),
    alternates: { canonical: `/safe-for-dogs/${item.slug}` },
  };
}

export default async function ItemPage({ params }: Props) {
  const { slug } = await params;
  const item = getItem(slug);
  if (!item) notFound();

  const isFood = item.kind === "food";
  const ok = item.verdict === "yes" || item.verdict === "care";
  const related = items
    .filter((i) => i.slug !== item.slug && i.kind === item.kind && i.verdict === item.verdict)
    .slice(0, 8);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: title(item),
        acceptedAnswer: { "@type": "Answer", text: `${shortAnswer(item)} ${item.summary}` },
      },
    ],
  };

  return (
    <article className="wrap article">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <p className="card-kicker">
        <Link href="/safe-for-dogs">Is it safe for my dog?</Link>
      </p>
      <h1>{title(item)}</h1>

      <div className={`verdict verdict-${item.verdict}`}>
        <p className="verdict-answer">{shortAnswer(item)}</p>
        <p>{item.summary}</p>
      </div>

      {!ok ? (
        <div className="callout callout-urgent">
          <h2>If your dog has eaten {isFood ? "this" : "any"}</h2>
          <p>
            Call your vet now. Don't wait for symptoms. Tell them what was eaten, how much and when,
            and keep any packaging or a piece of the plant.
          </p>
        </div>
      ) : null}

      {item.prep ? (
        <section>
          <h2>How to give it</h2>
          <p>{item.prep}</p>
        </section>
      ) : null}

      {ok ? (
        <section>
          <h2>The rules for any human food</h2>
          <ul>
            <li>Cut it into bite-sized pieces and remove pips, stones, seeds and cores.</li>
            <li>Serve it plain: no oil, butter, salt or flavourings.</li>
            <li>Keep it occasional. Dogs don't need fruit or vegetables, and most fruit is high in sugar.</li>
            <li>Cut back the next meal to allow for treats. <Link href="/tools/calorie-calculator">Work out your dog's daily calories</Link>.</li>
            <li>
              Even a food that is usually fine can upset an individual dog. Dogs Trust advises
              speaking to your vet before giving a food your dog hasn't had before.
            </li>
          </ul>
          <p><Link href="/feeding">What should I feed my dog?</Link></p>
        </section>
      ) : null}

      {related.length ? (
        <section>
          <h2>{isFood ? `Other foods: ${verdictLabel[item.verdict].toLowerCase()}` : "Other poisonous plants"}</h2>
          <ul className="chip-list">
            {related.map((r) => (
              <li key={r.slug}><Link href={`/safe-for-dogs/${r.slug}`}>{cap(r.name)}</Link></li>
            ))}
          </ul>
        </section>
      ) : null}

      <SourceList ids={[...item.sourceIds, ...(ok ? ["pdsaDiet", "dtToxicFoods"] : [])].filter((v, n, a) => a.indexOf(v) === n)} />
      <EmailCapture source={`safe-${item.slug}`} />
      <p className="fineprint">{site.name} is general information, not veterinary advice.</p>
    </article>
  );
}
