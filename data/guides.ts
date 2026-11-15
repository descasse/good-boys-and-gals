// Buying guides. Each explains a product category using charity and trade-body
// sources, then lists brands as affiliate slots (data/gear.ts).
// Brand slots describe what the brand sells and nothing more: no claims about
// what a product does unless a source in data/sources.ts says it.

export type GuideSection = { heading: string; paras?: string[]; items?: string[] };

export type Guide = {
  slug: string;
  title: string;
  kicker: string;
  summary: string;
  updated: string;
  reviewedBy: { name: string; credentials: string; date: string } | null;
  sections: GuideSection[];
  help: string;
  brandHeading: string;
  brandIds: string[];
  sourceIds: string[];
};

export const guides: Guide[] = [
  {
    slug: "joint-supplements-for-dogs",
    title: "Joint supplements for dogs: what they are and who they're for",
    kicker: "Supplements",
    summary:
      "What vet charities say joint supplements do, which dogs they're given to, what's in them, and what they can't do.",
    updated: "2026-11-15",
    reviewedBy: null,
    sections: [
      {
        heading: "What they are",
        paras: [
          "Joint supplements are products used to support joint health in dogs with arthritis. They come as tablets, capsules and liquids, and are also added to some dog foods.",
          "PDSA says they are thought to work in three ways: an anti-inflammatory action that soothes stiff joints, keeping joint fluid healthy, and supporting cartilage.",
        ],
      },
      {
        heading: "Which dogs they're given to",
        items: [
          "Dogs with arthritis, or with a high chance of developing it",
          "Older dogs, because joint wear and tear is common",
          "Dogs that have had a joint problem or injury, which raises the risk of arthritis later",
          "Working dogs, who are at higher risk because of the amount of exercise they do",
        ],
      },
      {
        heading: "What's in them",
        paras: ["PDSA lists these as the most common ingredients. Most products combine several."],
        items: [
          "Glucosamine",
          "Chondroitin",
          "Green-lipped mussel",
          "Omega 3",
          "Hyaluronic acid",
          "Beta glucans",
          "Vitamin C and vitamin E",
          "Manganese",
          "Turmeric",
        ],
      },
      {
        heading: "Do they work?",
        paras: [
          "PDSA's answer is measured: joint supplements help some dogs, but not all. They are thought to slow the progression of arthritis and reduce joint pain. For dogs with hip or elbow dysplasia, PDSA says they might slow the development of arthritis.",
          "They are not a painkiller and not a treatment on their own. Blue Cross describes them as something a vet may discuss alongside anti-inflammatories and pain relief.",
        ],
      },
      {
        heading: "Are they safe?",
        items: [
          "PDSA says no major side effects are associated with them and they can be given very safely over a long period.",
          "They are safe to use alongside most other medicines, including the anti-inflammatories and pain relief used for arthritis.",
        ],
      },
      {
        heading: "Before you buy",
        items: [
          "Ask your vet whether your dog is likely to benefit and which product suits them. That is PDSA's advice, and it matters most if your dog is already on medication.",
          "Check which of the ingredients above a product contains, and how much per dose.",
          "Work out the cost per day for your dog's weight, not the cost per tub.",
          "Keep your dog slim. PDSA says a fit, slim dog has less pressure on their joints and slower development of arthritis.",
        ],
      },
    ],
    help: "Limping or stiffness means something is wrong, and some dogs hide pain well. PDSA advises seeing your vet even if it looks minor, and immediately if your dog is in severe pain or can't put a leg down. A supplement is not a substitute for that visit.",
    brandHeading: "Brands that sell joint supplements",
    brandIds: ["yumove", "poochAndMutt"],
    sourceIds: ["pdsaJoint", "pdsaHip", "pdsaLimping", "pdsaCruciate", "bcArthritis"],
  },
  {
    slug: "how-to-choose-dog-food",
    title: "How to choose a dog food",
    kicker: "Feeding",
    summary:
      "Four things to check on any dog food, how to read the label, and where fresh, raw and subscription foods fit.",
    updated: "2026-11-15",
    reviewedBy: null,
    sections: [
      {
        heading: "The four checks",
        paras: ["PDSA's advice comes down to four things. Any food that passes all four is a reasonable choice, at any price."],
        items: [
          "Complete: the word 'complete' on the label means the food contains all the nutrients a dog needs, in the right amounts. It is a legal term.",
          "Commercially made: PDSA recommends buying food over making your own, because homemade diets are extremely difficult to get right.",
          "Made by a UK Pet Food member: members meet quality standards above the legal minimum. (UK Pet Food was formerly the Pet Food Manufacturers' Association.)",
          "Right for your dog's life stage: puppy, adult or senior.",
        ],
      },
      {
        heading: "Complete or complementary?",
        paras: [
          "A complete food can be the whole diet. A complementary food, such as mixer biscuits, treats and dental chews, is meant to be fed alongside one. Some look alike, so read the packet.",
          "If you feed complementary foods, PDSA says to cut down the main meal and make sure most of what your dog eats is the complete food.",
        ],
      },
      {
        heading: "Reading the label",
        items: [
          "It must say whether the food is complete or complementary, which species it is for, and how to feed it.",
          "It must list protein, oils and fats, fibre and ash as percentages, and moisture if that is over 14%.",
          "Ingredients are listed in descending order by weight. They can be given as category names, such as 'meat and animal derivatives', or as individual names, such as 'lamb'.",
          "If the pack highlights an ingredient, for example 'with chicken', the percentage of that ingredient must be shown.",
        ],
      },
      {
        heading: "Dry, wet, fresh or raw?",
        paras: [
          "PDSA notes that complete foods come in many forms, including wet, dry, raw, grain free and vegetarian, and that what they have in common is providing everything a dog needs. The form matters less than the four checks above.",
        ],
        items: [
          "Raw: PDSA does not advise making raw food at home. If you choose raw after speaking to your vet, pick a commercially prepared complete one, defrost it in the fridge in a sealed container, use it within 24 hours and keep everything used to handle it separate and clean.",
          "Bones: PDSA does not recommend feeding bones ever, cooked or raw.",
          "Homemade: UK Pet Food says there is a strong chance a homemade diet won't provide the right nutrients in the right proportions.",
          "Price: UK Pet Food says complete foods are available at every price point and all are subject to the same legislation.",
        ],
      },
      {
        heading: "Changing food",
        paras: [
          "A sudden change can upset a dog's stomach. UK Pet Food advises switching gradually over five to seven days, mixing a little of the new food into the old and increasing it each day.",
          "Follow the feeding guide on the new pack, since amounts vary between brands, then check your dog's shape after a few weeks.",
        ],
      },
    ],
    help: "Speak to your vet before changing diet if your dog has a medical condition, is a puppy, or you are considering a raw or vegetarian diet. PDSA specifically advises a vet conversation before either of those.",
    brandHeading: "Dog food delivered",
    brandIds: ["butternutBox", "tails", "poochAndMutt"],
    sourceIds: ["pdsaDiet", "pdsaDietTypes", "pdsaRaw", "ukpfLabels", "ukpfLabelFactsheet", "ukpfBudget"],
  },
];

export function getGuide(slug: string) {
  return guides.find((g) => g.slug === slug);
}
