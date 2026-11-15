// Affiliate slots. Each slot is a product TYPE the content recommends.
// Fill in `url` and `merchant` once an affiliate programme approves the site.
// A slot with no url renders as plain text, never as a dead link.

export type GearSlot = {
  id: string;
  name: string;
  use: string;
  url?: string;
  merchant?: string;
};

export const gear: Record<string, GearSlot> = {
  puzzleFeeder: {
    id: "puzzleFeeder",
    name: "Puzzle feeder or stuffable food toy",
    use: "Gives your dog a long-lasting job to do when you leave or when it is noisy outside.",
  },
  lickMat: {
    id: "lickMat",
    name: "Lick mat",
    use: "Spread with something dog-safe for a calm, repetitive activity.",
  },
  petCamera: {
    id: "petCamera",
    name: "Pet camera",
    use: "Shows what your dog actually does when you are out, including quiet signs of distress.",
  },
  crateOrDen: {
    id: "crateOrDen",
    name: "Crate or covered den",
    use: "A small, enclosed space your dog can choose to retreat to. Introduce it well before you need it.",
  },
  blankets: {
    id: "blankets",
    name: "Heavy blankets or crate cover",
    use: "Muffles sound and blocks flashes around a safe space.",
  },
  yHarness: {
    id: "yHarness",
    name: "Y-shaped fixed harness",
    use: "Spreads pressure across the chest so the lead is not pulling on the neck.",
  },
  doubleLead: {
    id: "doubleLead",
    name: "Double-ended lead",
    use: "Clips to two points on a harness for extra control without a tight lead.",
  },
  longLine: {
    id: "longLine",
    name: "Long line",
    use: "Gives distance and freedom in open spaces. Always attach it to a harness, never a collar.",
  },
  basketMuzzle: {
    id: "basketMuzzle",
    name: "Basket muzzle",
    use: "Lets your dog pant, drink and take treats. A safety tool, not a fix: train your dog to accept it first.",
  },
  treatPouch: {
    id: "treatPouch",
    name: "Treat pouch and small training treats",
    use: "Rewards have to arrive within a second or two to mean anything.",
  },
  settleMat: {
    id: "settleMat",
    name: "Settle mat or blanket",
    use: "A portable cue for relaxing that you can take to a cafe or a friend's house.",
  },
  longChew: {
    id: "longChew",
    name: "Long-lasting chew",
    use: "Chewing is naturally calming. Take its calories off the daily food allowance.",
  },
};

export function getGear(ids: string[]): GearSlot[] {
  return ids.map((id) => gear[id]).filter(Boolean);
}
