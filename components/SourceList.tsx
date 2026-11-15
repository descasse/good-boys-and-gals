import { getSources } from "@/data/sources";

export default function SourceList({ ids }: { ids: string[] }) {
  const list = getSources(ids);
  if (!list.length) return null;
  return (
    <section className="sources" aria-label="Sources">
      <h2>Sources</h2>
      <ol>
        {list.map((s) => (
          <li key={s.id}>
            {s.publisher},{" "}
            <a href={s.url} rel="noopener" target="_blank">
              {s.title}
            </a>
            . Checked {formatDate(s.retrieved)}.
          </li>
        ))}
      </ol>
    </section>
  );
}

export function formatDate(iso: string) {
  return new Date(iso + "T00:00:00Z").toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
