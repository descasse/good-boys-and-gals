// PDSA minimum-cost figures, last calculated by PDSA in 2024.
// Lifespan ranges are the ones PDSA uses (O'Neill et al. 2013).

export type SizeKey = "small" | "medium" | "large";

export type SizeCost = {
  label: string;
  setup: number; // one-off getting-started cost, GBP
  monthly: number; // minimum monthly cost, GBP
  lifeMin: number; // years
  lifeMax: number; // years
};

export const costs: Record<SizeKey, SizeCost> = {
  small: { label: "Small dog", setup: 415, monthly: 69, lifeMin: 7.1, lifeMax: 14.2 },
  medium: { label: "Medium dog", setup: 531, monthly: 83, lifeMin: 8.4, lifeMax: 13.5 },
  large: { label: "Large dog", setup: 560, monthly: 116, lifeMin: 5.5, lifeMax: 13.1 },
};

export const costsIncluded = [
  "Starter kit: bed, lead, collar and tag, bowls, grooming and dental supplies, toys, car restraint",
  "Initial vaccinations, wormers to six months, neutering",
  "Yearly health checks and boosters, flea and worm treatments",
  "Insurance, food, toys, poo bags, toothpaste",
];

export const costsExcluded = [
  "The price of the dog",
  "Microchipping, if the breeder has not done it",
  "Vet fees for illness or injury",
  "Special diets",
  "Day care, boarding, grooming and training classes",
];

export const costsSourceId = "pdsaDogCost";
export const costsYear = 2024;
