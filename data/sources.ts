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
  pdsaDiet: {
    id: "pdsaDiet",
    publisher: "PDSA",
    title: "Your dog's diet",
    url: "https://www.pdsa.org.uk/pet-help-and-advice/looking-after-your-pet/puppies-dogs/your-dogs-diet",
    retrieved: "2026-11-15",
  },
  dtToxicFoods: {
    id: "dtToxicFoods",
    publisher: "Dogs Trust",
    title: "What foods are toxic to dogs and the human foods you can feed them",
    url: "https://www.dogstrust.org.uk/dog-advice/health-wellbeing/at-home/toxic-foods",
    retrieved: "2026-11-15",
  },
  dtToxicItems: {
    id: "dtToxicItems",
    publisher: "Dogs Trust",
    title: "Items in the home and garden that are poisonous to dogs",
    url: "https://www.dogstrust.org.uk/dog-advice/health-wellbeing/at-home/toxic-items-for-dogs",
    retrieved: "2026-11-15",
  },
  dtConkers: {
    id: "dtConkers",
    publisher: "Dogs Trust",
    title: "Conkers and acorns: why they're harmful to your dog",
    url: "https://www.dogstrust.org.uk/about-us/what-we-do/stories/conkers-and-acorns",
    retrieved: "2026-11-15",
  },
  bcPlants: {
    id: "bcPlants",
    publisher: "Blue Cross",
    title: "Plants poisonous to dogs",
    url: "https://www.bluecross.org.uk/advice/dog/health-and-injuries/plants-poisonous-to-dogs",
    retrieved: "2026-11-15",
  },
  bcSpringPlants: {
    id: "bcSpringPlants",
    publisher: "Blue Cross",
    title: "Spring plants poisonous to dogs",
    url: "https://www.bluecross.org.uk/advice/dog/health-and-injuries/spring-plants-poisonous-to-dogs",
    retrieved: "2026-11-15",
  },
  pdsaPlants: {
    id: "pdsaPlants",
    publisher: "PDSA",
    title: "Which plants are poisonous to pets?",
    url: "https://www.pdsa.org.uk/pet-help-and-advice/looking-after-your-pet/all-pets/poisonous-plants",
    retrieved: "2026-11-15",
  },
  pdsaJoint: {
    id: "pdsaJoint",
    publisher: "PDSA",
    title: "Joint supplements for dogs",
    url: "https://www.pdsa.org.uk/pet-help-and-advice/pet-health-hub/medications/joint-supplements-for-dogs",
    retrieved: "2026-11-15",
  },
  pdsaHip: {
    id: "pdsaHip",
    publisher: "PDSA",
    title: "Hip dysplasia in dogs",
    url: "https://www.pdsa.org.uk/pet-help-and-advice/pet-health-hub/conditions/hip-dysplasia-in-dogs",
    retrieved: "2026-11-15",
  },
  pdsaLimping: {
    id: "pdsaLimping",
    publisher: "PDSA",
    title: "Limping and stiffness in dogs",
    url: "https://www.pdsa.org.uk/pet-help-and-advice/pet-health-hub/symptoms/limping-and-stiffness-in-dogs",
    retrieved: "2026-11-15",
  },
  pdsaCruciate: {
    id: "pdsaCruciate",
    publisher: "PDSA",
    title: "Cruciate ligament damage in dogs",
    url: "https://www.pdsa.org.uk/pet-help-and-advice/pet-health-hub/conditions/cruciate-ligament-damage-in-dogs",
    retrieved: "2026-11-15",
  },
  bcArthritis: {
    id: "bcArthritis",
    publisher: "Blue Cross",
    title: "Arthritis in dogs",
    url: "https://www.bluecross.org.uk/advice/dog/health-and-injuries/arthritis-in-dogs",
    retrieved: "2026-11-15",
  },
  pdsaDietTypes: {
    id: "pdsaDietTypes",
    publisher: "PDSA",
    title: "Doggy dinners: different types of diets for dogs",
    url: "https://www.pdsa.org.uk/what-we-do/blog/doggy-dinners-different-types-of-diets-for-dogs",
    retrieved: "2026-11-15",
  },
  pdsaRaw: {
    id: "pdsaRaw",
    publisher: "PDSA",
    title: "Feeding your pet a raw diet",
    url: "https://www.pdsa.org.uk/pet-help-and-advice/looking-after-your-pet/all-pets/raw-diets",
    retrieved: "2026-11-15",
  },
  ukpfLabels: {
    id: "ukpfLabels",
    publisher: "UK Pet Food",
    title: "Pet food labels have nothing to hide",
    url: "https://www.ukpetfood.org/resource/pet-food-labels-have-nothing-to-hide.html",
    retrieved: "2026-11-15",
  },
  ukpfLabelFactsheet: {
    id: "ukpfLabelFactsheet",
    publisher: "UK Pet Food",
    title: "Understanding pet food labels",
    url: "https://www.ukpetfood.org/resource/labelling-factsheet.html",
    retrieved: "2026-11-15",
  },
  ukpfBudget: {
    id: "ukpfBudget",
    publisher: "UK Pet Food",
    title: "Feeding your pet on a budget",
    url: "https://www.ukpetfood.org/static/f7a4be31-2da2-427e-9fe09cfe3d615aa3/UKPetFoodFS31Feeding-Your-Pet-on-a-Budget-1.pdf",
    retrieved: "2026-11-15",
  },
  phcWeights: {
    id: "phcWeights",
    publisher: "Pet Health Club (vet reviewed)",
    title: "How heavy should my dog be?",
    url: "https://www.pethealthclub.com/pet-advice/how-heavy-should-my-dog-be",
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
