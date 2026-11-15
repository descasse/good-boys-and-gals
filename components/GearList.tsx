import { getGear } from "@/data/gear";

export default function GearList({ ids, heading = "Kit that helps" }: { ids: string[]; heading?: string }) {
  const list = getGear(ids);
  if (!list.length) return null;
  const hasLinks = list.some((g) => g.url);
  return (
    <section className="gear" aria-label={heading}>
      <h2>{heading}</h2>
      <ul className="gear-grid">
        {list.map((g) => (
          <li key={g.id} className="gear-card">
            <h3>{g.name}</h3>
            <p>{g.use}</p>
            {g.url ? (
              <a className="btn btn-small" href={g.url} rel="sponsored noopener" target="_blank">
                View{g.merchant ? ` at ${g.merchant}` : ""}
              </a>
            ) : null}
          </li>
        ))}
      </ul>
      {hasLinks ? (
        <p className="fineprint">
          Some links are affiliate links: we may earn a commission if you buy, at no cost to you.
        </p>
      ) : null}
    </section>
  );
}
