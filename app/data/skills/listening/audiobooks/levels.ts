export type ListeningTitle = {
  slug: string;
  title: string;
  description: string;
  duration: string;
};

export type ListeningLevel = {
  slug: string;
  title: string;
  exam?: string;
  wordCount: string;
  titles: readonly ListeningTitle[];
};

export const listeningLevels: readonly ListeningLevel[] = [
  {
    slug: "starter-beginner",
    title: "Starter",
    wordCount: "200 headwords",
    titles: [
      { slug: "a-new-zealand-adventure", title: "A New Zealand Adventure", description: "Two friends search New Zealand for the owner of a lost phone.", duration: "05:29" },
      { slug: "flying-home", title: "Flying Home", description: "A bird escapes from New York and flies home to Brazil.", duration: "--" },
      { slug: "marcel-and-the-white-star", title: "Marcel and the White Star", description: "A detective mouse follows two thieves across Paris.", duration: "--" },
      { slug: "newspaper-chase", title: "Newspaper Chase", description: "A thief hides a painting inside the wrong newspaper.", duration: "--" },
      { slug: "simon-and-the-spy", title: "Simon and the Spy", description: "Simon accidentally takes a spy's secret letter.", duration: "--" },
      { slug: "the-fireboy", title: "The Fireboy", description: "A poor boy makes a gold necklace for Queen Cleopatra.", duration: "--" },
      { slug: "the-last-photo", title: "The Last Photo", description: "An accidental photo helps the police find a wanted man.", duration: "--" },
      { slug: "the-leopard-and-the-lighthouse", title: "The Leopard and the Lighthouse", description: "The people of Sindi try to rescue a leopard from a lighthouse.", duration: "--" },
      { slug: "the-pearl-girl", title: "The Pearl Girl", description: "A young visitor witnesses the theft of a famous painting.", duration: "--" },
      { slug: "who-wants-to-be-a-star", title: "Who Wants to Be a Star?", description: "A young star runs away to find a quieter, happier life.", duration: "--" },
    ],
  },
  { slug: "beginner-elementary-a1", title: "Beginner", wordCount: "300 headwords", titles: [] },
  {
    slug: "elementary-a2",
    title: "Elementary",
    exam: "KET",
    wordCount: "600 headwords",
    titles: [
      {
        slug: "alice-in-wonderland",
        title: "Alice in Wonderland",
        description: "Lewis Carroll’s story retold by Mary Tomalin for Penguin Readers Level 2.",
        duration: "1:13:06",
      },
      {
        slug: "treasure-island",
        title: "Treasure Island",
        description: "Robert Louis Stevenson · Penguin Readers",
        duration: "50:19",
      },
    ],
  },
  { slug: "lower-intermediate-a2-b1", title: "Lower-intermediate", exam: "PET", wordCount: "1200 headwords", titles: [] },
  { slug: "intermediate-b1", title: "Intermediate", exam: "PET", wordCount: "1700 headwords", titles: [] },
  { slug: "upper-intermediate-b2", title: "Upper-intermediate", exam: "FCE", wordCount: "2300 headwords", titles: [] },
  { slug: "advanced-c1", title: "Advanced", exam: "CAE", wordCount: "3000 words", titles: [] },
];
