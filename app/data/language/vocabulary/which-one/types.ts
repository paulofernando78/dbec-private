export type VocabularyExample = {
  english: string;
  portuguese: string;
};

export type WordUsage = {
  word: string;
  meaning: string;
  pattern: string;
  examples: readonly VocabularyExample[];
};

export type VocabularyTopic = {
  id: string;
  title: string;
  description: string;
  introduction: string;
  usages: readonly WordUsage[];
  quickRule: string;
  image?: { src: string; alt: string; width: number; height: number };
  practice?: readonly { question: string; choices: readonly string[]; answer: string }[];
};

