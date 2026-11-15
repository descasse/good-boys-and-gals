export const site = {
  name: "Good Boys & Gals",
  tagline: "Practical help for dogs who find life a bit much",
  description:
    "UK dog wellbeing: plain-English behaviour guides, free tools and carefully chosen kit, with every fact linked to its source.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
};

export const tools = [
  {
    href: "/tools/can-my-dog-eat",
    title: "Can my dog eat this?",
    blurb: "Search foods that are poisonous or hazardous to dogs.",
  },
  {
    href: "/tools/calorie-calculator",
    title: "Calorie calculator",
    blurb: "A daily calorie range for a healthy adult dog, and what that is in grams of your food.",
  },
  {
    href: "/tools/cost-estimator",
    title: "Lifetime cost estimator",
    blurb: "What a small, medium or large dog costs as a minimum, using PDSA figures.",
  },
];
