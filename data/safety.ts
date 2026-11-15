// "Is it safe for my dog?" dataset. One page is generated per item.
// Rules: every item cites at least one source in data/sources.ts, and the
// text says only what that source says. Where two sources differ, say so.
// Do not add an item without a source.

export type Verdict = "yes" | "care" | "hazard" | "toxic";
export type Kind = "food" | "plant";

export type Item = {
  slug: string;
  name: string; // as it reads in "Can dogs eat {name}?"
  kind: Kind;
  verdict: Verdict;
  summary: string;
  prep?: string;
  aliases: string[];
  sourceIds: string[];
};

const D = "pdsaDiet";
const T = "dtToxicFoods";
const P = "pdsaPoisons";

function food(
  slug: string, name: string, verdict: Verdict, summary: string,
  sourceIds: string[], prep?: string, aliases: string[] = []
): Item {
  return { slug, name, kind: "food", verdict, summary, prep, aliases, sourceIds };
}
function plant(
  slug: string, name: string, verdict: Verdict, summary: string,
  sourceIds: string[], aliases: string[] = []
): Item {
  return { slug, name, kind: "plant", verdict, summary, aliases, sourceIds };
}

export const items: Item[] = [
  // ---------- Fruit ----------
  food("strawberries", "strawberries", "yes", "PDSA and Dogs Trust both list strawberries as fine for dogs as an occasional treat.", [D, T], undefined, ["strawberry"]),
  food("bananas", "bananas", "yes", "PDSA and Dogs Trust both list bananas as fine for dogs as an occasional treat.", [D, T], "Peeled.", ["banana"]),
  food("watermelon", "watermelon", "yes", "Dogs Trust lists watermelon among human foods that are usually safe for dogs in moderation. PDSA lists melon as a dog-friendly fruit.", [T, D], "Rind and seeds removed.", []),
  food("melon", "melon", "yes", "PDSA lists melon as a dog-friendly fruit.", [D], "Rind and seeds removed.", ["cantaloupe", "honeydew"]),
  food("pineapple", "pineapple", "yes", "PDSA and Dogs Trust both list pineapple as fine for dogs as an occasional treat.", [D, T], "Skin removed.", []),
  food("apples", "apples", "yes", "PDSA and Dogs Trust both list apples as fine for dogs, without the core and seeds.", [D, T], "Cored and de-seeded.", ["apple"]),
  food("blueberries", "blueberries", "yes", "PDSA and Dogs Trust both list blueberries as fine for dogs as an occasional treat.", [D, T], undefined, ["blueberry"]),
  food("blackberries", "blackberries", "yes", "Dogs Trust lists blackberries among human foods that are usually safe for dogs in moderation.", [T], undefined, ["blackberry"]),
  food("cranberries", "cranberries", "yes", "PDSA lists cranberries as a dog-friendly fruit.", [D], undefined, ["cranberry"]),
  food("oranges", "oranges", "yes", "PDSA lists orange as a dog-friendly fruit once the skin and seeds are removed.", [D], "Skin and seeds removed.", ["orange", "satsuma"]),
  food("mango", "mango", "yes", "PDSA lists mango as a dog-friendly fruit once the stone and skin are removed.", [D], "Stone and skin removed.", []),
  food("pears", "pears", "yes", "PDSA lists pears as a dog-friendly fruit once the seeds and core are removed.", [D], "Seeds and core removed.", ["pear"]),
  food("nectarines", "nectarines", "yes", "PDSA lists nectarine as a dog-friendly fruit once the stone is removed.", [D], "Stone removed.", ["nectarine"]),
  food("peaches", "peaches", "care", "PDSA lists peach as a dog-friendly fruit once the stone is removed. The stone itself is on PDSA's hazards list because it can cause a blockage.", [D, P], "Stone removed. Never give the stone.", ["peach"]),
  food("apricots", "apricots", "care", "Dogs Trust lists apricots as usually safe in moderation, without the pit.", [T], "Pit removed.", ["apricot"]),
  food("coconut", "coconut", "yes", "Dogs Trust lists coconuts among human foods that are usually safe for dogs in moderation.", [T], undefined, []),
  food("grapes", "grapes", "toxic", "Grapes can cause kidney failure in dogs and can be fatal. Dogs Trust says any amount is potentially dangerous. Speak to your vet right away if your dog has eaten any.", [T, D, P], undefined, ["grape"]),
  food("raisins", "raisins, sultanas or currants", "toxic", "Raisins, sultanas and currants can cause kidney failure in dogs, raw or baked into foods such as fruit cake, mince pies, malt loaf and scones. Dogs Trust says any amount is potentially dangerous.", [T, D, P], undefined, ["raisin", "sultana", "sultanas", "currant", "currants", "mince pie", "fruit cake", "malt loaf", "hot cross bun"]),
  food("avocado", "avocado", "toxic", "The two sources differ on how serious it is, and neither recommends it. Dogs Trust says avocado contains a toxin called persin in the leaves, bark, pit, skin and flesh, and advises avoiding it altogether. PDSA lists it as a hazard: the flesh is high in fat and the stone can cause a blockage.", [T, P], undefined, ["guacamole"]),

  // ---------- Vegetables ----------
  food("tomatoes", "tomatoes", "care", "Dogs Trust lists ripe tomatoes as usually safe in moderation. Green fruit, stems and leaves of the tomato plant are on its list of things poisonous to dogs.", [T, "dtToxicItems"], "Ripe fruit only. Keep dogs away from the plant.", ["tomato"]),
  food("broccoli", "broccoli", "care", "PDSA says broccoli is fine raw or steamed but only in very small quantities, as large amounts can make dogs ill. Dogs Trust lists it as usually safe in moderation.", [D, T], "Raw or steamed, very small amounts.", []),
  food("cauliflower", "cauliflower", "yes", "Dogs Trust lists cauliflower among human foods that are usually safe for dogs in moderation.", [T], undefined, []),
  food("carrots", "carrots", "yes", "PDSA and Dogs Trust both list carrots as fine for dogs.", [D, T], "Raw or cooked.", ["carrot"]),
  food("celery", "celery", "yes", "PDSA suggests raw celery as a crunchy snack, and Dogs Trust lists it as usually safe in moderation.", [D, T], "Raw.", []),
  food("cucumber", "cucumber", "yes", "Dogs Trust lists cucumbers among human foods that are usually safe for dogs in moderation.", [T], undefined, ["cucumbers"]),
  food("peas", "peas", "yes", "PDSA lists peas, raw or cooked, as a dog-friendly vegetable. Dogs Trust lists frozen peas as usually safe.", [D, T], "Raw or cooked.", ["pea", "frozen peas"]),
  food("green-beans", "green beans", "yes", "PDSA lists green beans, raw or cooked, as a dog-friendly vegetable.", [D], "Raw or cooked.", ["green bean"]),
  food("brussels-sprouts", "Brussels sprouts", "care", "PDSA says Brussels sprouts are fine steamed or boiled, in very small quantities only.", [D], "Steamed or boiled, very small amounts.", ["sprouts", "brussel sprouts"]),
  food("potatoes", "potatoes", "care", "PDSA says cooked potato is fine in small quantities, with the skin removed and no oil, butter, salt or seasoning. Raw potatoes contain solanine, which is toxic.", [D], "Cooked only, skin removed, plain, small amounts. Never raw.", ["potato", "mash", "mashed potato"]),
  food("sweet-potato", "sweet potato", "yes", "PDSA lists sweet potato as a dog-friendly vegetable when cooked and peeled.", [D], "Cooked and peeled.", ["sweet potatoes"]),
  food("sweetcorn", "sweetcorn", "care", "PDSA and Dogs Trust both say sweetcorn is fine once cooked and cut off the cob. The cob itself can block the gut.", [D, T], "Cooked and off the cob.", ["corn"]),
  food("corn-on-the-cob", "corn on the cob", "hazard", "The cob can cause a life-threatening blockage in a dog's gut that may need emergency surgery. Dogs Trust says to contact your vet immediately if your dog eats one. The corn itself is fine off the cob.", [T, D, P], undefined, ["corn cob", "cob"]),
  food("mushrooms", "mushrooms", "care", "Dogs Trust lists mushrooms among human foods that are usually safe in moderation. PDSA lists mushrooms and fungi among plants that can cause serious symptoms, so treat anything growing wild as dangerous.", [T, P], "Shop-bought only. Never wild mushrooms.", ["mushroom"]),
  food("asparagus", "asparagus", "yes", "Dogs Trust lists asparagus among human foods that are usually safe for dogs in moderation.", [T], undefined, []),
  food("aubergine", "aubergine", "yes", "Dogs Trust lists aubergine among human foods that are usually safe for dogs in moderation.", [T], undefined, ["eggplant"]),
  food("beetroot", "beetroot", "yes", "Dogs Trust lists beetroot among human foods that are usually safe for dogs in moderation.", [T], undefined, []),
  food("onions", "onions", "toxic", "Onions can cause severe anaemia in dogs. Dogs Trust says they are toxic even when cooked and that traces in other food count, including gravy. Call your vet as soon as possible; don't wait for signs.", [T, D, P], undefined, ["onion", "spring onion", "gravy", "stuffing"]),
  food("garlic", "garlic", "toxic", "Garlic can cause severe anaemia in dogs. Dogs Trust says it is toxic even when cooked and that traces in other food count. Call your vet as soon as possible; don't wait for signs.", [T, D, P], undefined, ["garlic bread"]),
  food("leeks", "leeks", "toxic", "Leeks are in the same family as onions and garlic and can cause severe anaemia in dogs, even when cooked.", [T, D, P], undefined, ["leek"]),
  food("chives", "chives", "toxic", "Chives are in the same family as onions and garlic and can cause anaemia in dogs, even when cooked.", [T, P], undefined, ["chive"]),

  // ---------- Meat, fish, dairy, eggs ----------
  food("chicken", "chicken", "yes", "PDSA suggests small pieces of cooked chicken breast as a treat, and Dogs Trust lists chicken as usually safe. Bones are a separate hazard.", [D, T], "Cooked, lean, small pieces. No bones.", []),
  food("turkey", "turkey", "yes", "PDSA suggests small pieces of lean cooked turkey as a treat.", [D], "Cooked, lean, small pieces. No bones.", []),
  food("ham", "ham", "yes", "PDSA lists small pieces of lean ham as an occasional treat.", [D], "Small pieces, occasionally.", []),
  food("tuna", "tuna", "yes", "Dogs Trust lists tuna among human foods that are usually safe for dogs in moderation.", [T], undefined, []),
  food("prawns", "prawns", "yes", "Dogs Trust lists prawns among human foods that are usually safe for dogs in moderation.", [T], undefined, ["prawn", "shrimp"]),
  food("anchovies", "anchovies", "care", "Dogs Trust lists anchovies as usually safe but warns they are high in salt and dangerous if eaten in quantity.", [T], "Very small amounts.", ["anchovy"]),
  food("eggs", "eggs", "yes", "Dogs Trust lists eggs among human foods that are usually safe for dogs in moderation, and says cooked eggshells are also allowed.", [T], undefined, ["egg", "scrambled egg"]),
  food("cheese", "cheese", "care", "Dogs Trust lists cheese among human foods that are usually safe in moderation. Blue cheese is the exception: PDSA lists it as poisonous.", [T, P], "Small amounts. Never blue cheese.", ["cheddar"]),
  food("blue-cheese", "blue cheese", "toxic", "PDSA lists blue cheese as poisonous to dogs. The fungus used to make it can cause vomiting, diarrhoea, a high temperature and seizures.", [P], undefined, ["stilton", "roquefort", "gorgonzola"]),
  food("greek-yoghurt", "Greek yoghurt", "yes", "Dogs Trust lists Greek yoghurt among human foods that are usually safe for dogs in moderation.", [T], undefined, ["yoghurt", "yogurt", "greek yogurt"]),
  food("hot-dogs", "hot dogs", "yes", "Dogs Trust lists hot dogs among human foods that are usually safe for dogs in moderation.", [T], undefined, ["hot dog", "frankfurter"]),
  food("bones", "bones", "hazard", "Dogs Trust and PDSA both warn against bones. They can cause constipation, block the throat or gut, and pierce the gut, which can be fatal. PDSA adds that cooked bones splinter more easily.", [T, P], undefined, ["bone", "chicken bones", "cooked bones", "rib"]),

  // ---------- Nuts ----------
  food("peanut-butter", "peanut butter", "care", "Dogs Trust lists peanut butter as usually safe only if it is free from xylitol and additives. Xylitol, sometimes labelled birch sugar or E967, is extremely dangerous to dogs, so check the label every time.", [T, P], "Xylitol-free and additive-free only.", []),
  food("peanuts", "peanuts", "care", "Dogs Trust lists peanuts as usually safe if free from xylitol and additives. PDSA notes that nuts are high in fat, which can cause stomach upset and pancreatitis.", [T, P], "Free from xylitol and additives, small amounts.", ["peanut"]),
  food("nuts", "nuts", "hazard", "PDSA lists nuts as a hazard because they are high in fat, which can cause stomach upset and pancreatitis. Macadamia nuts are poisonous.", [P], undefined, ["almonds", "walnuts", "cashews", "pecans", "almond", "walnut", "cashew"]),
  food("macadamia-nuts", "macadamia nuts", "toxic", "Macadamia nuts are poisonous to dogs. Dogs Trust says even a tiny amount can cause weakness, vomiting, tremors and difficulty walking. Call your vet right away.", [T, D, P], undefined, ["macadamia"]),

  // ---------- Cupboard ----------
  food("bread", "bread", "care", "Dogs Trust lists plain white or brown bread, without additives, as usually safe in moderation. Uncooked bread and pizza dough are dangerous because they produce alcohol in the body.", [T], "Plain, baked. Never raw dough.", ["toast", "dough", "pizza dough"]),
  food("pasta", "pasta", "yes", "Dogs Trust lists pasta among human foods that are usually safe for dogs in moderation.", [T], undefined, ["spaghetti"]),
  food("noodles", "noodles", "care", "Dogs Trust lists plain noodles as usually safe in moderation.", [T], "Plain only.", []),
  food("popcorn", "popcorn", "care", "Dogs Trust lists plain popcorn as usually safe in moderation.", [T], "Plain only.", []),
  food("honey", "honey", "yes", "Dogs Trust lists honey among human foods that are usually safe for dogs in moderation.", [T], undefined, []),
  food("baked-beans", "baked beans", "yes", "Dogs Trust lists baked beans among human foods that are usually safe for dogs in moderation.", [T], undefined, ["beans"]),
  food("marmite", "Marmite", "care", "Dogs Trust lists Marmite as usually safe but warns it is high in salt and dangerous if eaten in quantity.", [T], "A tiny amount.", []),
  food("weetabix", "Weetabix", "care", "Dogs Trust lists Weetabix Original as usually safe in moderation, not the chocolate varieties.", [T], "Original only.", []),
  food("quinoa", "quinoa", "yes", "Dogs Trust lists quinoa among human foods that are usually safe for dogs in moderation.", [T], undefined, []),
  food("quorn", "Quorn", "care", "Dogs Trust lists plain Quorn as usually safe in moderation.", [T], "Plain only.", []),
  food("yorkshire-puddings", "Yorkshire puddings", "yes", "Dogs Trust lists Yorkshire puddings among human foods that are usually safe for dogs in moderation.", [T], undefined, ["yorkshire pudding"]),
  food("cat-food", "cat food", "yes", "Dogs Trust lists cat food among foods that are usually safe for dogs in moderation.", [T], undefined, []),

  // ---------- Never ----------
  food("chocolate", "chocolate", "toxic", "Chocolate contains theobromine, which dogs cannot process well. It causes vomiting and diarrhoea, and higher doses can cause seizures or death. The darker the chocolate, the higher the risk. Speak to your vet immediately and have the packaging to hand.", [T, D, P], undefined, ["cocoa", "cocoa powder", "brownie", "hot chocolate"]),
  food("xylitol", "xylitol (birch sugar)", "toxic", "Xylitol, also labelled birch sugar or E967, causes a crash in blood sugar and can cause liver failure. Dogs Trust says signs can appear within an hour or take up to 12 hours. It is found in sugar-free gum, mints and sweets, some baked goods, some peanut butter and some dental products. Contact your vet immediately.", [T, D, P], undefined, ["birch sugar", "sugar free gum", "chewing gum", "sweetener", "e967"]),
  food("alcohol", "alcohol", "toxic", "Alcohol is toxic to dogs and can cause drowsiness, tremors, coma and death. It is also in some medicines, perfume, mouthwash and hand sanitiser. Speak to your vet immediately.", [T, D, P], undefined, ["beer", "wine", "cider", "spirits"]),
  food("coffee-and-tea", "coffee or tea", "toxic", "Caffeine over-stimulates a dog's nervous system, muscles and heart. Dogs Trust lists tea, coffee and hot chocolate as harmful, and notes caffeine is also in many soft drinks. Call your vet as soon as possible.", [T, D, P], undefined, ["coffee", "tea", "caffeine", "energy drink", "tea bag", "coffee grounds"]),
  food("salt", "salt", "toxic", "PDSA lists salt as poisonous: a large amount eaten quickly without water can be fatal.", [P], undefined, ["salty food"]),
  food("mouldy-food", "mouldy food", "toxic", "Mould can produce toxins that cause vomiting, tremors, a raised temperature and seizures. Keep food bins and compost out of reach.", [P, D], undefined, ["mould", "mold", "compost", "food waste"]),

  // ---------- Plants ----------
  plant("tulips", "tulips", "toxic", "Blue Cross says tulips can irritate a dog's mouth and stomach, usually causing drooling, sickness and diarrhoea. Heart problems and difficulty breathing are signs of more serious cases. The bulbs are the most poisonous part.", ["bcSpringPlants", "bcPlants", "pdsaPlants"], ["tulip", "tulip bulbs"]),
  plant("bluebells", "bluebells", "toxic", "Blue Cross says bluebells contain a toxin that affects the heart. Poisoning normally causes an upset stomach, but eating very large amounts can be fatal.", ["bcSpringPlants", "bcPlants"], ["bluebell"]),
  plant("daffodils", "daffodils", "toxic", "Daffodils are on the poisonous plant lists of Blue Cross, Dogs Trust and PDSA. Dogs Trust and Blue Cross single out the bulbs as the most dangerous part.", ["bcPlants", "dtToxicItems", "pdsaPlants"], ["daffodil", "narcissus", "daffodil bulbs"]),
  plant("conkers", "conkers", "toxic", "Dogs Trust says conkers are toxic to dogs and in some cases can be deadly. They can make a dog unwell within hours, and are also a choking hazard that can block the gut. Signs include sickness, diarrhoea, stomach pain, restlessness and collapse. Speak to a vet right away.", ["dtConkers", "bcPlants"], ["conker", "horse chestnut"]),
  plant("acorns", "acorns", "toxic", "Dogs Trust says acorns are toxic to dogs and in some cases can be deadly. They can make a dog unwell within hours, and can also cause choking or a gut blockage. Speak to a vet right away.", ["dtConkers", "bcPlants"], ["acorn", "oak"]),
  plant("lilies", "lilies", "toxic", "PDSA lists lilies among plants that can cause serious symptoms in pets. It describes them as highly toxic to cats in particular; its page gives no dog-specific detail, so treat them as dangerous and ask your vet.", ["pdsaPlants", "pdsaPoisons"], ["lily"]),
  plant("lily-of-the-valley", "lily of the valley", "toxic", "Lily of the valley is on the poisonous plant lists of Blue Cross and PDSA. Neither page gives detail on effects.", ["bcPlants", "pdsaPlants"], []),
  plant("hydrangeas", "hydrangeas", "toxic", "Dogs Trust lists hydrangea among garden plants that are poisonous to dogs. Its list gives no detail on effects or severity.", ["dtToxicItems"], ["hydrangea"]),
  plant("ivy", "ivy", "toxic", "Ivy is on the poisonous plant lists of Blue Cross, Dogs Trust and PDSA. Dogs Trust lists both English ivy and devil's ivy.", ["bcPlants", "dtToxicItems", "pdsaPlants"], ["english ivy", "devil's ivy"]),
  plant("lavender", "lavender", "toxic", "Dogs Trust includes lavender on its list of plants poisonous to dogs, both indoors and in the garden. Its list gives no detail on effects or severity.", ["dtToxicItems"], []),
  plant("eucalyptus", "eucalyptus", "toxic", "Dogs Trust includes eucalyptus on its list of plants poisonous to dogs, both indoors and in the garden. Its list gives no detail on effects or severity.", ["dtToxicItems"], []),
  plant("foxgloves", "foxgloves", "toxic", "Foxgloves are on the poisonous plant lists of Blue Cross and Dogs Trust. Blue Cross names the leaves and seeds.", ["bcPlants", "bcSpringPlants", "dtToxicItems"], ["foxglove", "digitalis"]),
  plant("yew", "yew", "toxic", "Yew is on the poisonous plant lists of Blue Cross, Dogs Trust and PDSA.", ["bcPlants", "dtToxicItems", "pdsaPlants"], []),
  plant("rhododendrons", "rhododendrons and azaleas", "toxic", "Rhododendrons and azaleas are on the poisonous plant lists of Blue Cross, Dogs Trust and PDSA. Blue Cross says the whole plant is poisonous.", ["bcPlants", "bcSpringPlants", "dtToxicItems"], ["rhododendron", "azalea", "azaleas"]),
  plant("laburnum", "laburnum", "toxic", "Laburnum is on Blue Cross's list of plants toxic to dogs. Its list gives no detail on effects.", ["bcPlants"], []),
  plant("hyacinths", "hyacinths", "toxic", "Hyacinths are on Blue Cross's lists of plants toxic to dogs, which name the bulbs.", ["bcPlants", "bcSpringPlants"], ["hyacinth"]),
  plant("crocuses", "crocuses", "toxic", "Crocuses and autumn crocus are both on Blue Cross's list of plants toxic to dogs.", ["bcPlants", "bcSpringPlants"], ["crocus", "autumn crocus"]),
  plant("snowdrops", "snowdrops", "toxic", "Snowdrops are on the poisonous plant lists of Blue Cross and PDSA.", ["bcPlants", "pdsaPlants"], ["snowdrop"]),
  plant("holly", "holly", "toxic", "Holly is on Blue Cross's list of plants toxic to dogs. Its list gives no detail on effects.", ["bcPlants"], []),
  plant("mistletoe", "mistletoe", "toxic", "Mistletoe is on the poisonous plant lists of Blue Cross, Dogs Trust and PDSA.", ["bcPlants", "dtToxicItems", "pdsaPlants"], []),
  plant("poinsettia", "poinsettia", "toxic", "Poinsettia is on the poisonous house plant lists of Dogs Trust and PDSA.", ["dtToxicItems", "pdsaPlants"], []),
  plant("aloe-vera", "aloe vera", "toxic", "Aloe vera is on the poisonous plant lists of Dogs Trust and PDSA.", ["dtToxicItems", "pdsaPlants"], ["aloe"]),
  plant("wisteria", "wisteria", "toxic", "Dogs Trust lists wisteria among garden plants that are poisonous to dogs. Its list gives no detail on effects or severity.", ["dtToxicItems"], []),
];

export const verdictLabel: Record<Verdict, string> = {
  yes: "Yes, in moderation",
  care: "Yes, with care",
  hazard: "No: it's a hazard",
  toxic: "No",
};

export function cap(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export function getItem(slug: string) {
  return items.find((i) => i.slug === slug);
}

const HAVE = new Set(["alcohol", "coffee-and-tea", "xylitol", "salt"]);

export function question(i: Item) {
  if (i.kind === "plant") return `Are ${i.name} poisonous to dogs?`;
  if (HAVE.has(i.slug)) return `Can dogs have ${i.name}?`;
  return `Can dogs eat ${i.name}?`;
}

// Singular plant names read better with "Is".
const SINGULAR = new Set(["ivy", "lavender", "eucalyptus", "yew", "laburnum", "holly", "mistletoe", "poinsettia", "aloe-vera", "wisteria", "lily-of-the-valley"]);
export function title(i: Item) {
  if (i.kind === "plant" && SINGULAR.has(i.slug)) return `Is ${i.name} poisonous to dogs?`;
  return question(i);
}

export function shortAnswer(i: Item) {
  if (i.kind === "plant") return "Yes. Keep your dog away.";
  return verdictLabel[i.verdict] + ".";
}
