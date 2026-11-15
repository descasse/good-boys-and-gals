import type { Metadata } from "next";
import { sources } from "@/data/sources";
import { formatDate } from "@/components/SourceList";

export const metadata: Metadata = {
  title: "All sources",
  description: "Every source used across our guides and tools, with the date each was last checked.",
  alternates: { canonical: "/sources" },
};

export default function Page() {
  const list = Object.values(sources).sort((a, b) =>
    (a.publisher + a.title).localeCompare(b.publisher + b.title)
  );
  return (
    <div className="wrap article">
      <h1>All sources</h1>
      <p className="lede">Everything our guides and tools draw on.</p>
      <table className="source-table">
        <thead>
          <tr><th scope="col">Publisher</th><th scope="col">Page</th><th scope="col">Last checked</th></tr>
        </thead>
        <tbody>
          {list.map((s) => (
            <tr key={s.id}>
              <td>{s.publisher}</td>
              <td><a href={s.url} rel="noopener" target="_blank">{s.title}</a></td>
              <td>{formatDate(s.retrieved)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
