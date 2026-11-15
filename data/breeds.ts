// Adult weights by breed, in kg, as [low, high]. Every figure is the source's own.
//
// basis "kc":         The Royal Kennel Club breed standard (the show ideal). `kc` is the
//                     path of the standard on royalkennelclub.com. Checked 2026-11-15.
// basis "vetcompass": The breed standard gives no weight, so the figure is the average adult
//                     weight recorded by UK vets (Royal Veterinary College VetCompass study).
//                     An average of real dogs, some overweight: not a target.
// basis "chart":      Neither of the above publishes a weight. Figure is from the
//                     Pet Health Club chart (source id: phcWeights).
//
// `recorded` holds the VetCompass average where a study exists, whatever the basis.
// `ceiling` means the standard gives a maximum only ("up to", "not exceeding").
// Do not add a breed or a number by estimate.

export type Basis = "kc" | "vetcompass" | "chart";
export type Recorded = { sourceId: string; male?: number; female?: number; all?: number };
export type Breed = {
  name: string;
  basis: Basis;
  male: [number, number];
  female: [number, number];
  kc?: string;
  ceiling?: boolean;
  recorded?: Recorded;
};

export const kcUrl = (path: string) => `https://www.royalkennelclub.com/breed-standards/${path}/`;

export const breeds: Breed[] = [
  {name: "Airedale Terrier", basis: "chart", male: [20, 23], female: [20, 23]},
  {name: "Akita", basis: "chart", male: [38.6, 49.9], female: [38.6, 49.9]},
  {name: "Alaskan Malamute", basis: "kc", male: [39, 39], female: [34, 34], kc: "working/alaskan-malamute"},
  {name: "American Cocker Spaniel", basis: "chart", male: [11, 13], female: [11, 13]},
  {name: "Australian Terrier", basis: "kc", male: [6.5, 6.5], female: [6.5, 6.5], kc: "terrier/australian-terrier"},
  {name: "Basenji", basis: "kc", male: [11, 11], female: [9.5, 9.5], kc: "hound/basenji"},
  {name: "Basset Hound", basis: "chart", male: [18, 27], female: [16, 23]},
  {name: "Beagle", basis: "vetcompass", male: [19.7, 19.7], female: [16.59, 16.59], recorded: {sourceId: "vcBeagle", male: 19.7, female: 16.59, all: 18.19}},
  {name: "Bedlington Terrier", basis: "kc", male: [8, 10], female: [8, 10], kc: "terrier/bedlington-terrier"},
  {name: "Bichon Frise", basis: "chart", male: [8, 9], female: [7, 8]},
  {name: "Bloodhound", basis: "kc", male: [41, 50], female: [36, 45.5], kc: "hound/bloodhound"},
  {name: "Border Collie", basis: "chart", male: [19, 24], female: [18, 22]},
  {name: "Border Terrier", basis: "kc", male: [6, 7], female: [5, 6.5], kc: "terrier/border-terrier", recorded: {sourceId: "vcBorderTerrier", male: 10.9, female: 9.1}},
  {name: "Boston Terrier", basis: "chart", male: [4.5, 11], female: [4.5, 11]},
  {name: "Boxer", basis: "kc", male: [30, 32], female: [25, 27], kc: "working/boxer", recorded: {sourceId: "vcBoxer", male: 32.99, female: 27.56}},
  {name: "Bulldog", basis: "kc", male: [25, 25], female: [23, 23], kc: "utility/bulldog"},
  {name: "Bullmastiff", basis: "kc", male: [50, 59], female: [41, 50], kc: "working/bullmastiff"},
  {name: "Cairn Terrier", basis: "kc", male: [6, 7.5], female: [6, 7.5], kc: "terrier/cairn-terrier"},
  {name: "Cardigan Welsh Corgi", basis: "chart", male: [9.1, 11.8], female: [9, 10]},
  {name: "Cavalier King Charles Spaniel", basis: "kc", male: [5.4, 8.2], female: [5.4, 8.2], kc: "toy/cavalier-king-charles-spaniel"},
  {name: "Chihuahua", basis: "kc", male: [1.8, 2.7], female: [1.8, 2.7], kc: "toy/chihuahua-smooth-coat", recorded: {sourceId: "vcChihuahua", male: 3.7, female: 3.2, all: 3.4}},
  {name: "Chow Chow", basis: "chart", male: [23, 32], female: [18, 32]},
  {name: "Clumber Spaniel", basis: "kc", male: [29.5, 34], female: [25, 29.5], kc: "gundog/spaniel-clumber"},
  {name: "Cocker Spaniel", basis: "kc", male: [13, 14.5], female: [13, 14.5], kc: "gundog/spaniel-cocker", recorded: {sourceId: "vcCocker", all: 15.05}},
  {name: "Dachshund", basis: "kc", male: [9, 12], female: [9, 12], kc: "hound/dachshund-smooth-haired"},
  {name: "Dalmatian", basis: "chart", male: [27, 27], female: [25, 25]},
  {name: "Deerhound", basis: "kc", male: [45.5, 45.5], female: [36.5, 36.5], kc: "hound/deerhound"},
  {name: "Dobermann", basis: "chart", male: [34, 41], female: [29.5, 36]},
  {name: "English Springer Spaniel", basis: "chart", male: [23, 23], female: [23, 23]},
  {name: "Field Spaniel", basis: "kc", male: [18, 25], female: [18, 25], kc: "gundog/spaniel-field"},
  {name: "Flat Coated Retriever", basis: "kc", male: [27, 36], female: [25, 32], kc: "gundog/retriever-flat-coated"},
  {name: "Fox Terrier (Smooth)", basis: "kc", male: [7.5, 8], female: [7, 7.5], kc: "terrier/fox-terrier-smooth"},
  {name: "French Bulldog", basis: "kc", male: [12.5, 12.5], female: [11, 11], kc: "utility/french-bulldog"},
  {name: "German Shepherd", basis: "vetcompass", male: [40.1, 40.1], female: [34.8, 34.8], recorded: {sourceId: "vcGsd", male: 40.1, female: 34.8}},
  {name: "German Shorthaired Pointer", basis: "chart", male: [25, 32], female: [20, 27]},
  {name: "German Wirehaired Pointer", basis: "kc", male: [25, 34], female: [20.5, 29], kc: "gundog/german-wirehaired-pointer"},
  {name: "Golden Retriever", basis: "chart", male: [31.7, 36.3], female: [27.2, 31.7]},
  {name: "Gordon Setter", basis: "kc", male: [29.5, 29.5], female: [25.5, 25.5], kc: "gundog/gordon-setter"},
  {name: "Greyhound", basis: "vetcompass", male: [32.3, 32.3], female: [27.2, 27.2], recorded: {sourceId: "vcGreyhound", male: 32.3, female: 27.2, all: 29.7}},
  {name: "Hungarian Vizsla", basis: "kc", male: [20, 30], female: [20, 30], kc: "gundog/hungarian-vizsla"},
  {name: "Irish Setter", basis: "chart", male: [27, 30], female: [25, 27]},
  {name: "Italian Greyhound", basis: "kc", male: [3.6, 4.5], female: [3.6, 4.5], kc: "toy/italian-greyhound"},
  {name: "Italian Spinone", basis: "kc", male: [34, 39], female: [29, 34], kc: "gundog/italian-spinone"},
  {name: "Jack Russell Terrier", basis: "chart", male: [6.4, 8.2], female: [6.4, 8.2]},
  {name: "Japanese Chin", basis: "kc", male: [1.8, 3.2], female: [1.8, 3.2], kc: "toy/japanese-chin"},
  {name: "King Charles Spaniel", basis: "kc", male: [3.6, 6.3], female: [3.6, 6.3], kc: "toy/king-charles-spaniel"},
  {name: "Labrador Retriever", basis: "vetcompass", male: [35.2, 35.2], female: [30.4, 30.4], recorded: {sourceId: "vcLabrador", male: 35.2, female: 30.4, all: 33.0}},
  {name: "Lagotto Romagnolo", basis: "kc", male: [13, 16], female: [11, 14], kc: "gundog/lagotto-romagnolo"},
  {name: "Lakeland Terrier", basis: "kc", male: [8, 8], female: [7, 7], kc: "terrier/lakeland-terrier"},
  {name: "Lhasa Apso", basis: "chart", male: [7, 7], female: [6, 7]},
  {name: "Maltese", basis: "chart", male: [2, 4], female: [2, 4]},
  {name: "Mastiff", basis: "chart", male: [57, 89], female: [57, 89]},
  {name: "Miniature Dachshund", basis: "kc", male: [4.5, 5], female: [4.5, 5], kc: "hound/dachshund-miniature-smooth-haired"},
  {name: "Miniature Poodle", basis: "chart", male: [5.5, 7], female: [5.5, 7]},
  {name: "Miniature Schnauzer", basis: "vetcompass", male: [9.9, 9.9], female: [9.9, 9.9], recorded: {sourceId: "vcMiniSchnauzer", all: 9.9}},
  {name: "Newfoundland", basis: "kc", male: [64, 69], female: [50, 54.5], kc: "working/newfoundland"},
  {name: "Norwegian Elkhound", basis: "kc", male: [23, 23], female: [20, 20], kc: "hound/norwegian-elkhound"},
  {name: "Old English Sheepdog", basis: "chart", male: [27, 41], female: [23, 27]},
  {name: "Pekingese", basis: "kc", male: [5, 5], female: [5.4, 5.4], kc: "toy/pekingese", ceiling: true},
  {name: "Pembroke Welsh Corgi", basis: "kc", male: [10, 12], female: [9, 11], kc: "pastoral/welsh-corgi-pembroke"},
  {name: "Pomeranian", basis: "kc", male: [1.8, 2], female: [2, 2.5], kc: "toy/pomeranian"},
  {name: "Portuguese Water Dog", basis: "kc", male: [19, 25], female: [16, 22], kc: "working/portuguese-water-dog"},
  {name: "Pug", basis: "kc", male: [6.3, 8.1], female: [6.3, 8.1], kc: "toy/pug"},
  {name: "Rhodesian Ridgeback", basis: "chart", male: [34, 38.5], female: [29.5, 34]},
  {name: "Rottweiler", basis: "vetcompass", male: [48.5, 48.5], female: [41.5, 41.5], recorded: {sourceId: "vcRottweiler", male: 48.5, female: 41.5, all: 44.9}},
  {name: "Rough Collie", basis: "chart", male: [20.5, 29.5], female: [18, 25]},
  {name: "Samoyed", basis: "chart", male: [20, 25], female: [16, 20.5]},
  {name: "Schipperke", basis: "kc", male: [5.5, 7.5], female: [5.5, 7.5], kc: "utility/schipperke"},
  {name: "Schnauzer", basis: "chart", male: [16, 20.5], female: [16, 20.5]},
  {name: "Scottish Terrier", basis: "kc", male: [8.5, 10.5], female: [8.5, 10.5], kc: "terrier/scottish-terrier"},
  {name: "Sealyham Terrier", basis: "kc", male: [9, 9], female: [8, 8], kc: "terrier/sealyham-terrier"},
  {name: "Shetland Sheepdog", basis: "chart", male: [8, 10], female: [8, 10]},
  {name: "Shih Tzu", basis: "kc", male: [4.5, 8], female: [4.5, 8], kc: "utility/shih-tzu"},
  {name: "Siberian Husky", basis: "kc", male: [20, 27], female: [16, 23], kc: "working/siberian-husky"},
  {name: "Smooth Collie", basis: "kc", male: [20.5, 29.5], female: [18, 25], kc: "pastoral/collie-smooth"},
  {name: "Spanish Water Dog", basis: "kc", male: [18, 22], female: [14, 18], kc: "gundog/spanish-water-dog"},
  {name: "St Bernard", basis: "chart", male: [73, 78], female: [63.5, 73.5]},
  {name: "Staffordshire Bull Terrier", basis: "kc", male: [13, 17], female: [11, 15.4], kc: "terrier/staffordshire-bull-terrier"},
  {name: "Standard Poodle", basis: "chart", male: [20, 31], female: [20, 31]},
  {name: "Sussex Spaniel", basis: "kc", male: [23, 23], female: [23, 23], kc: "gundog/spaniel-sussex"},
  {name: "Swedish Vallhund", basis: "kc", male: [11.5, 16], female: [11.5, 16], kc: "pastoral/swedish-vallhund"},
  {name: "Tibetan Spaniel", basis: "kc", male: [4, 7], female: [4, 7], kc: "utility/tibetan-spaniel"},
  {name: "Tibetan Terrier", basis: "chart", male: [11, 13.5], female: [11, 13.5]},
  {name: "Toy Poodle", basis: "chart", male: [3.5, 5.5], female: [3.5, 5.5]},
  {name: "Welsh Terrier", basis: "kc", male: [9, 9.5], female: [9, 9.5], kc: "terrier/welsh-terrier"},
  {name: "West Highland White Terrier", basis: "vetcompass", male: [10.1, 10.1], female: [9.0, 9.0], recorded: {sourceId: "vcWesthie", male: 10.1, female: 9.0, all: 9.6}},
  {name: "Whippet", basis: "chart", male: [10, 13], female: [8, 11]},
  {name: "Yorkshire Terrier", basis: "kc", male: [3.2, 3.2], female: [3.2, 3.2], kc: "toy/yorkshire-terrier", ceiling: true},
];

export const breedSourceIds = [
  "kcStandards",
  ...Array.from(new Set(breeds.flatMap((b) => (b.recorded ? [b.recorded.sourceId] : [])))),
  "phcWeights",
];
