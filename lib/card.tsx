import type { Item } from "@/data/safety";
import { title, shortAnswer } from "@/data/safety";
import { site } from "@/data/site";

// Shared artwork for link previews (1200x630) and square social posts (1080x1080).
// Rendered with next/og, so only flexbox layout and inline styles are available.

const COLOURS = {
  yes: { bg: "#1f5c4a", ink: "#ffffff", chip: "#e2f0ea", chipInk: "#1f5c4a" },
  care: { bg: "#b9820a", ink: "#ffffff", chip: "#fdf3dc", chipInk: "#7a5200" },
  hazard: { bg: "#b5412b", ink: "#ffffff", chip: "#fdecea", chipInk: "#8a2416" },
  toxic: { bg: "#b5412b", ink: "#ffffff", chip: "#fdecea", chipInk: "#8a2416" },
} as const;

export function Paw({ size, colour }: { size: number; colour: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <ellipse cx="50" cy="66" rx="24" ry="20" fill={colour} />
      <ellipse cx="20" cy="42" rx="10" ry="13" fill={colour} />
      <ellipse cx="40" cy="24" rx="10" ry="14" fill={colour} />
      <ellipse cx="62" cy="24" rx="10" ry="14" fill={colour} />
      <ellipse cx="81" cy="42" rx="10" ry="13" fill={colour} />
    </svg>
  );
}

export function ItemCard({ item, square }: { item: Item; square: boolean }) {
  const c = COLOURS[item.verdict];
  const q = title(item);
  const pad = square ? 80 : 64;
  const qSize = square ? (q.length > 34 ? 84 : 100) : q.length > 34 ? 62 : 76;
  return (
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: c.bg, color: c.ink, padding: pad, fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", alignItems: "center", fontSize: square ? 36 : 30, fontWeight: 700 }}>
        <Paw size={square ? 52 : 44} colour={c.ink} />
        <span style={{ marginLeft: 16 }}>{site.name}</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: qSize, fontWeight: 800, lineHeight: 1.08, letterSpacing: -1 }}>{q}</div>
        <div style={{ display: "flex", marginTop: square ? 48 : 32 }}>
          <div style={{ display: "flex", background: c.chip, color: c.chipInk, fontSize: square ? 60 : 46, fontWeight: 800, padding: square ? "18px 36px" : "12px 28px", borderRadius: 999 }}>
            {shortAnswer(item).replace(/\.$/, "")}
          </div>
        </div>
      </div>
      <div style={{ display: "flex", fontSize: square ? 30 : 26, opacity: 0.9 }}>
        Sourced from UK animal charities. Not veterinary advice.
      </div>
    </div>
  );
}

export function SiteCard() {
  return (
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", background: "#1f5c4a", color: "#ffffff", padding: 72, fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Paw size={96} colour="#ffffff" />
        <span style={{ marginLeft: 28, fontSize: 96, fontWeight: 800, letterSpacing: -2 }}>{site.name}</span>
      </div>
      <div style={{ display: "flex", marginTop: 36, fontSize: 40, lineHeight: 1.3, maxWidth: 980 }}>{site.tagline}</div>
    </div>
  );
}
