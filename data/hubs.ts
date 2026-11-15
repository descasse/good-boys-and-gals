// Behaviour hubs. Content is written in our own words from the sources listed
// on each hub. `reviewedBy` stays null until a qualified person has actually
// reviewed the page; the template shows nothing rather than a placeholder.

export type Hub = {
  slug: string;
  title: string;
  short: string; // nav / card label
  summary: string;
  updated: string;
  reviewedBy: { name: string; credentials: string; date: string } | null;
  signs: { heading: string; items: string[]; note?: string };
  why: { heading: string; items: string[] };
  steps: { heading: string; intro?: string; items: { title: string; body: string }[] };
  avoid: string[];
  help: string;
  gearIds: string[];
  sourceIds: string[];
};

export const hubs: Hub[] = [
  {
    slug: "separation",
    title: "When your dog can't cope with being left alone",
    short: "Home alone",
    summary:
      "Barking, chewing or toileting when you go out is usually distress, not naughtiness. Here is how to spot it, including the quiet signs, and what to change first.",
    updated: "2026-11-15",
    reviewedBy: null,
    signs: {
      heading: "What it looks like",
      items: [
        "Chewing or scratching, often around doors and windows",
        "Howling, barking or whining after you leave",
        "Toileting indoors only when alone",
        "Over-the-top greetings, or getting anxious as you get ready to go",
        "Quieter signs: trembling, panting, drooling, pacing or circling",
        "Not touching food, treats or food toys until you are back",
      ],
      note: "The RSPCA says research suggests around 8 in 10 dogs find it hard to cope when left, and about half of them show no obvious sign. Behaviour usually starts within half an hour of you leaving, which is why a camera is the fastest way to find out.",
    },
    why: {
      heading: "Why it happens",
      items: [
        "There is no single cause, which is why a plan has to fit the individual dog",
        "Your dog has not been taught, gradually and positively, that being alone is fine",
        "Health problems, which can cause or worsen it",
        "Being told off on your return, which makes the anxiety worse",
      ],
    },
    steps: {
      heading: "What to do",
      intro: "Start with the changes that cost nothing. Build absences up slowly rather than testing how long your dog can last.",
      items: [
        { title: "Film an absence", body: "Record the first 30 minutes after you leave. You are looking for when the behaviour starts and whether your dog ever settles." },
        { title: "Exercise and toilet first", body: "Walk your dog before you go, and aim to be back home about half an hour before leaving so they have time to wind down." },
        { title: "Don't leave them hungry", body: "A small meal or a food toy before you go helps them relax." },
        { title: "Give them a job", body: "Leave a stuffed food toy, long-lasting chew or treat ball. Take what goes in it out of the day's food." },
        { title: "Cut down disturbances", body: "Close curtains, use a quieter room and leave the radio on." },
        { title: "Shorten the absences", body: "Adult dogs should not be left for more than four hours, and puppies far less. Use a sitter, walker or neighbour to break up longer days." },
        { title: "Come home calmly", body: "Whatever you find, don't react. Punishment after the fact makes the next absence worse." },
      ],
    },
    avoid: [
      "Punishing or showing disapproval when you get back",
      "Leaving your dog to 'cry it out'",
      "Jumping from short absences to a full working day",
    ],
    help: "See your vet if you are worried or if the steps above have not eased things: health problems can cause or worsen this. Your vet can refer you to a clinical animal behaviourist, who will find the underlying cause and write a plan for your dog.",
    gearIds: ["petCamera", "puzzleFeeder", "longChew", "lickMat"],
    sourceIds: ["rspcaSrb", "rspcaAlone"],
  },
  {
    slug: "fireworks",
    title: "Fireworks and loud noises",
    short: "Fireworks",
    summary:
      "Most of what helps on the night has to be set up beforehand. A plan for before, during and after, plus the longer-term fix.",
    updated: "2026-11-15",
    reviewedBy: null,
    signs: {
      heading: "What it looks like",
      items: [
        "Hiding, or heading for a small enclosed spot",
        "Seeking you out for reassurance",
        "Being too stressed to eat or play",
        "Trying to run away",
        "Destructive behaviour",
      ],
    },
    why: {
      heading: "Why it happens",
      items: [
        "Loud, unexpected noises are frightening for many dogs",
        "Fear can escalate with each event unless something changes",
        "Medical problems can contribute to a fear of noises",
        "Sounds are best introduced gradually and positively in puppyhood, especially before 13 weeks; dogs who missed that are more likely to struggle",
      ],
    },
    steps: {
      heading: "What to do",
      items: [
        { title: "Before: find out the dates", body: "Check local displays and neighbourhood groups, ask neighbours, and make sure someone your dog trusts will be home on those nights." },
        { title: "Before: build the safe space early", body: "Pick a spot your dog already likes, ideally central in the house and small. Add bedding and covering blankets, and feed treats there for days beforehand so it is already a good place." },
        { title: "Before: move the routine", body: "Walk and feed earlier so your dog has eaten, toileted and settled indoors before dark." },
        { title: "Before: secure the house", body: "Check doors, windows and fences. Make sure microchip details are up to date." },
        { title: "During: block it out", body: "Close windows and curtains, turn the lights on, and put on music or the TV. Dogs Trust publishes a free Sound Blanket made to mask firework noise." },
        { title: "During: let your dog choose", body: "If they hide, leave them be. If they come to you, comfort them calmly: Dogs Trust is clear that ignoring a frightened dog does not help. If they seem fine, keep them busy with toys or games." },
        { title: "During: stay in, stay calm", body: "Don't leave them alone and never force them outside. They read your mood, so keep yours ordinary." },
        { title: "After: back to normal", body: "Return to your usual routine and note what worked. Fireworks rarely stop after one night." },
        { title: "Long term: change how the sound feels", body: "Sound therapy pairs very quiet recordings with food or play and raises the volume over weeks. It takes time, so start well outside firework season, when your dog is calm." },
      ],
    },
    avoid: [
      "Telling your dog off, even for destructive behaviour",
      "Dragging them out of their hiding place",
      "Taking them out after dark on firework nights",
      "Introducing the den for the first time once they are already scared",
    ],
    help: "If your dog shows fear of fireworks or other loud noises, speak to your vet as soon as you can, not on the day. They can check for medical causes, refer you to a clinical behaviourist, and advise on medication, which often has to be given before the noise starts. Dogs Trust also runs a free Behaviour Support Line on 0303 003 6666.",
    gearIds: ["crateOrDen", "blankets", "lickMat", "puzzleFeeder"],
    sourceIds: ["dtFireworks", "dtFireworksPrep", "dtLoudNoises", "dtSafeSpace"],
  },
  {
    slug: "reactivity",
    title: "Barking and lunging on the lead",
    short: "Lead reactivity",
    summary:
      "A reactive dog is usually a worried or frustrated dog, not an aggressive one. Start with distance, not discipline.",
    updated: "2026-11-15",
    reviewedBy: null,
    signs: {
      heading: "What it looks like",
      items: [
        "Barking, lunging or pulling towards other dogs, people or things outside",
        "Growling or snapping",
        "It varies: how it shows depends on how the individual dog feels and how they have learned to cope",
      ],
    },
    why: {
      heading: "Why it happens",
      items: [
        "Fear: your dog wants more distance, and barking usually works because the other dog walks on",
        "Frustration: they want to get to something and the lead stops them",
        "Over-arousal in busy places or after long play without a break",
        "Past experience: little early socialisation, a bad encounter, or lots of thwarted greetings",
        "Pain or illness, which lowers tolerance",
        "A tight lead, which can make a dog feel trapped",
      ],
    },
    steps: {
      heading: "What to do",
      intro: "Dogs Trust sets these out in this order, and the order matters.",
      items: [
        { title: "Get a vet check", body: "Rule out pain or illness first, especially if this is new or sudden. Take videos or notes." },
        { title: "Learn the early signals", body: "Outbursts are rarely the first sign. Learning your dog's body language lets you spot stress early and act before the bark." },
        { title: "Keep a trigger diary", body: "Note what, where, how far away and what kind of day it had been. Patterns appear quickly." },
        { title: "Avoid triggers for now", body: "Walk at quiet times on wide routes with good visibility. Turn or cross early. Every outburst your dog doesn't have is practice they don't get." },
        { title: "Change how the trigger feels", body: "At a distance where your dog notices but stays calm, pair the trigger with something good. Close the gap over weeks, ideally with a professional guiding you." },
        { title: "Build the supporting habits", body: "Reward calm, teach focus and 'find it' games, keep routines steady and give a quiet day after a hard one." },
      ],
    },
    avoid: [
      "Scolding or shouting: it adds fear and can suppress the warning signs",
      "Making your dog 'face their fear' or forcing greetings",
      "Punishment or intimidation-based training",
      "Walking with a constantly tight lead",
      "Letting the behaviour be rehearsed daily on the same route",
    ],
    help: "See your vet promptly for any sudden change. For ongoing reactivity or any aggression, and always after a dog-on-dog incident or injury, work with a qualified clinical behaviourist. Dogs Trust's free Behaviour Support Line is 0303 003 6666.",
    gearIds: ["yHarness", "doubleLead", "longLine", "treatPouch", "basketMuzzle"],
    sourceIds: ["dtReactive"],
  },
  {
    slug: "settling",
    title: "Teaching your dog to settle",
    short: "Settling",
    summary:
      "Relaxing is a skill, and it can be taught. A seven-step method that rewards calm without ever asking for it.",
    updated: "2026-11-15",
    reviewedBy: null,
    signs: {
      heading: "When it helps",
      items: [
        "When you are busy at home: guests, cooking, cleaning",
        "Out and about, in a cafe or pub",
        "For dogs that pull, stare or struggle to switch off",
      ],
    },
    why: {
      heading: "Why teach it",
      items: [
        "Dogs need to be able to relax and spend time on their own",
        "A dog who chooses to settle, without being asked, can do it anywhere",
        "It has to be built up in easy places before it works in hard ones",
      ],
    },
    steps: {
      heading: "What to do",
      intro: "You need a quiet spot, a lead, a blanket, a chair and very small treats. Say nothing throughout: the aim is for your dog to choose to settle, not to be told.",
      items: [
        { title: "Start quietly", body: "Sit down with your dog on the lead and the blanket on the floor. Drop a treat for any calm behaviour, such as stepping onto the blanket." },
        { title: "Narrow what earns a reward", body: "Once they are calm, pay only for lying down. Then pay for signs of real relaxation: a sigh, a shift of weight, a head resting down." },
        { title: "Stretch the gaps", body: "Add a couple of seconds between rewards each session." },
        { title: "Drop the lead", body: "When your dog is shifting their weight comfortably and looks relaxed, practise without it." },
        { title: "Add distractions slowly", body: "Move somewhere a little busier, or have someone walk past. Work up to things like sweeping." },
        { title: "Handle setbacks without fuss", body: "If your dog gets up, ignore it and wait. If they can't settle, move further from the distraction or make it duller." },
        { title: "Take it on the road", body: "Once it is solid at home, practise in new places with the same blanket." },
      ],
    },
    avoid: [
      "Starting somewhere distracting",
      "Rewarding while your dog is pulling, staring or barking",
      "Talking to or directing your dog during a session",
      "Rushing: dogs that find this hard need smaller steps, such as rewarding standing quietly",
    ],
    help: "Go at your dog's pace and drop back a step whenever they struggle. If restlessness is new, or comes with other changes in behaviour, speak to your vet.",
    gearIds: ["settleMat", "treatPouch", "longChew"],
    sourceIds: ["dtSettle"],
  },
];

export function getHub(slug: string): Hub | undefined {
  return hubs.find((h) => h.slug === slug);
}
