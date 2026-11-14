import type { RichContent } from "@/helpers/content";

export type PronunciationExample = {
  english?: string | RichContent;
  translation?: string;
  audio?: string;
};

export type PronunciationItem = {
  title?: string;
  english?: string | RichContent;
  translation?: string;
  phoneme?: string | string[];
  audio?: string | string[];
  group?: PronunciationExample[];
};

export type PronunciationSection = {
  title: string;
  items: PronunciationItem[];
};
