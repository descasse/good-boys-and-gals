// Every entry here comes from the PDSA page listed in sources.ts (pdsaPoisons).
// Do not add a food without a source. A food that is missing from this list
// has NOT been checked: the tool says so rather than implying it is safe.

export type FoodRisk = "poisonous" | "hazard";

export type Food = {
  name: string;
  aliases: string[];
  risk: FoodRisk;
  why: string;
  foundIn?: string;
  sourceId: string;
};

export const foods: Food[] = [
  {
    name: "Chocolate",
    aliases: ["cocoa", "cocoa powder", "brownie", "chocolate cake"],
    risk: "poisonous",
    why: "Contains theobromine, which dogs cannot process well. It can be fatal, and the darker the chocolate the higher the risk.",
    foundIn: "Cakes, sweets, biscuits, cocoa powder",
    sourceId: "pdsaPoisons",
  },
  {
    name: "Caffeine",
    aliases: ["coffee", "tea", "energy drink", "tea bags", "coffee grounds"],
    risk: "poisonous",
    why: "Affects the heart and blood pressure and can cause seizures.",
    foundIn: "Tea, coffee, energy drinks, chocolate, some human painkillers",
    sourceId: "pdsaPoisons",
  },
  {
    name: "Grapes, raisins, sultanas and currants",
    aliases: ["grape", "raisin", "sultana", "currant", "mince pie", "fruit cake", "hot cross bun", "christmas pudding"],
    risk: "poisonous",
    why: "The toxin is not fully understood, but they can cause kidney failure and can be fatal. Call your vet if your dog has eaten any.",
    foundIn: "Fresh fruit and any baking that contains dried fruit",
    sourceId: "pdsaPoisons",
  },
  {
    name: "Onions, garlic, leeks and chives",
    aliases: ["onion", "garlic", "leek", "chive", "spring onion", "gravy", "stuffing"],
    risk: "poisonous",
    why: "Contain compounds that damage red blood cells and can cause anaemia.",
    foundIn: "Any food cooked with them",
    sourceId: "pdsaPoisons",
  },
  {
    name: "Macadamia nuts",
    aliases: ["macadamia"],
    risk: "poisonous",
    why: "Toxic even in small amounts. Cause weakness, tremors, vomiting and diarrhoea.",
    sourceId: "pdsaPoisons",
  },
  {
    name: "Xylitol (birch sugar)",
    aliases: ["xylitol", "birch sugar", "sweetener", "sugar free gum", "chewing gum", "sugar-free", "peanut butter"],
    risk: "poisonous",
    why: "Extremely harmful to dogs and can be fatal. Check ingredient lists: it may be labelled as birch sugar.",
    foundIn: "Sugar-free gum and sweets, some medications, some nut butters, nicotine gum",
    sourceId: "pdsaPoisons",
  },
  {
    name: "Alcohol",
    aliases: ["beer", "wine", "spirits", "cider", "mouthwash"],
    risk: "poisonous",
    why: "Toxic to dogs.",
    foundIn: "Drinks, and also mouthwash, perfume, aftershave and glue",
    sourceId: "pdsaPoisons",
  },
  {
    name: "Salt",
    aliases: ["salty food", "salty"],
    risk: "poisonous",
    why: "A large amount eaten quickly without water can be fatal.",
    sourceId: "pdsaPoisons",
  },
  {
    name: "Mouldy food",
    aliases: ["mould", "mold", "compost", "food waste", "bin"],
    risk: "poisonous",
    why: "Mould can produce toxins that cause vomiting, tremors and seizures. It can be fatal if untreated.",
    foundIn: "Food bins, compost bins, food waste",
    sourceId: "pdsaPoisons",
  },
  {
    name: "Blue cheese",
    aliases: ["stilton", "roquefort", "gorgonzola"],
    risk: "poisonous",
    why: "The fungus used to make it can cause vomiting, diarrhoea, a high temperature and seizures.",
    sourceId: "pdsaPoisons",
  },
  {
    name: "Avocado",
    aliases: ["guacamole", "avocado stone"],
    risk: "hazard",
    why: "The flesh is high in fat and can upset the stomach. The stone can cause a blockage.",
    sourceId: "pdsaPoisons",
  },
  {
    name: "Peaches (the stone)",
    aliases: ["peach", "peach stone"],
    risk: "hazard",
    why: "The stone can cause a blockage.",
    sourceId: "pdsaPoisons",
  },
  {
    name: "Corn on the cob",
    aliases: ["corn cob", "sweetcorn cob"],
    risk: "hazard",
    why: "The cob can cause a blockage.",
    sourceId: "pdsaPoisons",
  },
  {
    name: "Nuts (other than macadamia)",
    aliases: ["nut", "peanut", "almond", "walnut", "cashew", "pecan"],
    risk: "hazard",
    why: "High in fat, which can cause stomach upset and pancreatitis.",
    sourceId: "pdsaPoisons",
  },
  {
    name: "Bones (cooked or raw)",
    aliases: ["bone", "chicken bone", "cooked bone", "rib", "lamb bone"],
    risk: "hazard",
    why: "Can injure the mouth and teeth, damage the throat, and cause constipation or blockages. Cooked bones splinter more easily.",
    sourceId: "pdsaPoisons",
  },
];
