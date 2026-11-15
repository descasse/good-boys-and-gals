export const site = {
  name: "The Dog Index",
  tagline: "What's safe, what it costs and what helps: every answer sourced",
  description:
    "UK dog wellbeing: plain-English behaviour guides, free tools and carefully chosen kit, with every fact linked to its source.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
};

export const tools = [
  {
    href: "/safe-for-dogs",
    title: "Is it safe for my dog?",
    blurb: "Search foods and plants: what dogs can eat, what to avoid, and why.",
  },
  {
    href: "/tools/calorie-calculator",
    title: "Calorie calculator",
    blurb: "Pick a breed, get daily calories and grams of your own food per meal.",
  },
  {
    href: "/tools/cost-estimator",
    title: "Lifetime cost estimator",
    blurb: "What a small, medium or large dog costs as a minimum, using PDSA figures.",
  },
];
