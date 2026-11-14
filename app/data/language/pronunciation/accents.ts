export type AccentSection = {
  id: string;
  title: string;
  note: string;
  examples: readonly string[];
};

export const accentSections: readonly AccentSection[] = [
  { id: "final-r-er", title: "Final R / -er", note: "American English usually pronounces the final r; British English often does not.", examples: ["This car is better.", "Work smarter, not harder.", "I parked the car near the garden."] },
  { id: "ask-last-class", title: "Ask / Last / Class", note: "The vowel in these words differs between many American and British accents.", examples: ["Can I have a glass of water, please?", "Ask the last dancer to pass the glass.", "I can't dance after class."] },
  { id: "t-sound", title: "T Sound", note: "In some American accents, /t/ may sound more like a quick flap in connected speech.", examples: ["The bottle of water is on the table."] },
  { id: "word-differences", title: "Word Differences", note: "Some everyday words are pronounced differently in American and British English.", examples: ["The tomato sauce is in the garage.", "What's your schedule for Tuesday?"] },
];
