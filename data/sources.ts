export type Source = {
  id: string;
  publisher: string;
  title: string;
  url: string;
  retrieved: string; // ISO date the page was last checked
};

export const sources: Record<string, Source> = {
  pdsaPoisons: {
    id: "pdsaPoisons",
    publisher: "PDSA",
    title: "Poisons and hazards for pets",
    url: "https://www.pdsa.org.uk/poisons-and-hazards",
    retrieved: "2026-11-15",
  },
  pdsaDogCost: {
    id: "pdsaDogCost",
    publisher: "PDSA",
    title: "The cost of owning a dog",
    url: "https://www.pdsa.org.uk/dogcost",
    retrieved: "2026-11-15",
  },
  rspcaSrb: {
    id: "rspcaSrb",
    publisher: "RSPCA",
    title: "Recognising separation-related behaviour and anxiety in dogs",
    url: "https://www.rspca.org.uk/adviceandwelfare/pets/dogs/behaviour/separationrelatedbehaviour",
    retrieved: "2026-11-15",
  },
  rspcaAlone: {
    id: "rspcaAlone",
    publisher: "RSPCA",
    title: "Training your dog to be left alone",
    url: "https://www.rspca.org.uk/adviceandwelfare/pets/dogs/behaviour/alone",
    retrieved: "2026-11-15",
  },
  dtFireworks: {
    id: "dtFireworks",
    publisher: "Dogs Trust",
    title: "Helping your dog cope with fireworks",
    url: "https://www.dogstrust.org.uk/dog-advice/life-with-your-dog/seasonal/fireworks",
    retrieved: "2026-11-15",
  },
  dtFireworksPrep: {
    id: "dtFireworksPrep",
    publisher: "Dogs Trust",
    title: "Fireworks are coming, prepare ahead",
    url: "https://www.dogstrust.org.uk/about-us/what-we-do/stories/preparing-for-fireworks",
    retrieved: "2026-11-15",
  },
  dtLoudNoises: {
    id: "dtLoudNoises",
    publisher: "Dogs Trust",
    title: "What to do if your dog is scared of loud noises",
    url: "https://www.dogstrust.org.uk/dog-advice/understanding-your-dog/scared-loud-noises",
    retrieved: "2026-11-15",
  },
  dtSafeSpace: {
    id: "dtSafeSpace",
    publisher: "Dogs Trust",
    title: "Creating a safe space for your dog",
    url: "https://www.dogstrust.org.uk/dog-advice/life-with-your-dog/at-home/creating-safe-space",
    retrieved: "2026-11-15",
  },
  dtReactive: {
    id: "dtReactive",
    publisher: "Dogs Trust",
    title: "Reactive dogs: why it happens and how to help",
    url: "https://www.dogstrust.org.uk/dog-advice/training/unwanted-behaviours/reactive-dog",
    retrieved: "2026-11-15",
  },
  dtSettle: {
    id: "dtSettle",
    publisher: "Dogs Trust",
    title: "How to train your dog to be calm, relax and settle",
    url: "https://www.dogstrust.org.uk/help-advice/training/settle-training",
    retrieved: "2026-11-15",
  },
  vetstreetCalories: {
    id: "vetstreetCalories",
    publisher: "Vetstreet (reporting AAHA nutrition guidelines)",
    title: "How many calories should my dog eat?",
    url: "https://www.vetstreet.com/our-pet-experts/how-many-calories-should-my-dog-eat",
    retrieved: "2026-11-15",
  },
};

export function getSources(ids: string[]): Source[] {
  return ids.map((id) => sources[id]).filter(Boolean);
}
