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
  // Starter
  {
    slug: "starter-beginner",
    title: "Starter",
    wordCount: "200 headwords",
    titles: [
      {
        slug: "a-new-zealand-adventure",
        title: "A New Zealand Adventure",
        description:
          "Two friends search New Zealand for the owner of a lost phone.",
        duration: "05:12",
      },
      {
        slug: "flying-home",
        title: "Flying Home",
        description: "A bird escapes from New York and flies home to Brazil.",
        duration: "00:46",
      },
      {
        slug: "marcel-and-the-mona-lisa",
        title: "Marcel and the Mona Lisa",
        description:
          "A French mouse detective follows the thief who stole the Mona Lisa.",
        duration: "01:08",
      },
      {
        slug: "marcel-and-the-white-star",
        title: "Marcel and the White Star",
        description: "A detective mouse follows two thieves across Paris.",
        duration: "--",
      },
      {
        slug: "newspaper-chase",
        title: "Newspaper Chase",
        description: "A thief hides a painting inside the wrong newspaper.",
        duration: "--",
      },
      {
        slug: "simon-and-the-spy",
        title: "Simon and the Spy",
        description: "Simon accidentally takes a spy's secret letter.",
        duration: "--",
      },
      {
        slug: "the-fireboy",
        title: "The Fireboy",
        description: "A poor boy makes a gold necklace for Queen Cleopatra.",
        duration: "--",
      },
      {
        slug: "the-last-photo",
        title: "The Last Photo",
        description: "An accidental photo helps the police find a wanted man.",
        duration: "--",
      },
      {
        slug: "the-leopard-and-the-lighthouse",
        title: "The Leopard and the Lighthouse",
        description:
          "The people of Sindi try to rescue a leopard from a lighthouse.",
        duration: "--",
      },
      {
        slug: "the-pearl-girl",
        title: "The Pearl Girl",
        description:
          "A young visitor witnesses the theft of a famous painting.",
        duration: "--",
      },
      {
        slug: "the-troy-stone",
        title: "The Troy Stone",
        description:
          "A boy on holiday in Turkey touches a yellow stone and travels back to ancient Troy.",
        duration: "--",
      },
      {
        slug: "the-white-oryx",
        title: "The White Oryx",
        description:
          "A ranger and a writer chase poachers in the desert to save a young oryx.",
        duration: "--",
      },
      {
        slug: "tinkers-island",
        title: "Tinkers Island",
        description:
          "A girl disguises herself as a boy to rescue her father from a prison ship bound for Australia.",
        duration: "--",
      },
      {
        slug: "who-wants-to-be-a-star",
        title: "Who Wants to Be a Star?",
        description: "A young star runs away to find a quieter, happier life.",
        duration: "--",
      },
    ],
  },
  // Beginner
  {
    slug: "beginner-elementary-a1",
    title: "Beginner",
    wordCount: "300 headwords",
    titles: [
      {
        slug: "marcel-and-the-shakespeare-letters",
        title: "Marcel and the Shakespeare Letters",
        description:
          "Marcel, a French detective mouse, teams up with his friend Henry in London to rescue stolen Shakespeare letters before a flight to New York.",
        duration: "--",
      },

      {
        slug: "the-adventures-of-tom-sawyer",
        title: "The Adventures of Tom Sawyer",
        description:
          "Follow Tom Sawyer and Huck Finn through midnight adventures, caves, and buried money.",
        duration: "--",
      },
    ],
  },
  // Elementary
  {
    slug: "elementary-a2",
    title: "Elementary",
    exam: "KET",
    wordCount: "600 headwords",
    titles: [
      {
        slug: "alice-in-wonderland",
        title: "Alice in Wonderland",
        description: "Lewis Carroll’s story retold by Mary Tomalin.",
        duration: "1:13:06",
      },
      {
        slug: "don-quixote",
        title: "Don Quixote",
        description:
          "The complete six-chapter reader about Don Quixote and Sancho Panza.",
        duration: "--",
      },
      {
        slug: "project-omega",
        title: "Project Omega",
        description: "Eight-chapter audiobook.",
        duration: "38:11",
      },
      {
        slug: "treasure-island",
        title: "Treasure Island",
        description: "Robert Louis Stevenson · Penguin Readers",
        duration: "52:03",
      },
      {
        slug: "moby-dick",
        title: "Moby Dick",
        description: "Herman Melville · complete 13-chapter Elementary reader.",
        duration: "--",
      },
    ],
  },
  // Pre-Intermediate
  {
    slug: "pre-intermediate-a2-b1",
    title: "Pre-intermediate",
    exam: "PET",
    wordCount: "1200 headwords",
    titles: [
      {
        slug: "pirates-of-caribbean-at-worlds-end",
        title: "Pirates of the Caribbean: At World’s End",
        description:
          "Captain Jack Sparrow returns as the Pirate Lords gather to fight Lord Beckett and the East India Trading Company.",
        duration: "--",
      },
    ],
  },
  // Intermediate
  {
    slug: "intermediate-b1",
    title: "Intermediate",
    exam: "PET",
    wordCount: "1700 headwords",
    titles: [],
  },
  // Upper-Intermediate
  {
    slug: "upper-intermediate-b2",
    title: "Upper-intermediate",
    exam: "FCE",
    wordCount: "2300 headwords",
    titles: [],
  },
  // Advanced
  {
    slug: "advanced-c1",
    title: "Advanced",
    exam: "CAE",
    wordCount: "3000 words",
    titles: [
      {
        slug: "brave-new-world",
        title: "Brave New World",
        description: "Aldous Huxley · complete 17-chapter Advanced reader.",
        duration: "8:59:09",
      },
    ],
  },
];
