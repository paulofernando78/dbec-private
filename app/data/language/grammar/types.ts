import type { RichContent } from "@/helpers/content";

export type GrammarExample = {
  incorrect?: string;
  english: string;
  englishContent?: RichContent;
  portuguese: string;
};

export type GrammarUsage = {
  image?: { src: string; alt: string; width: number; height: number };
  title: string;
  meaning: string;
  pattern?: string;
  examples: readonly GrammarExample[];
  groups?: readonly {
    title: string;
    pattern?: string;
    examples: readonly GrammarExample[];
  }[];
};

export type GrammarWarning = {
  title: string;
  explanation: string;
  examples: readonly GrammarExample[];
};

export type GrammarTopic = {
  id: string;
  title: string;
  englishTitle?: string;
  description: string;
  introduction: string;
  usages: readonly GrammarUsage[];
  warnings?: readonly GrammarWarning[];
  quickRule: string;
};

