import { collocations } from "./collocations";
import { coreGrammarTopics } from "./core-topics";
import { prepositions } from "./prepositions";
import { punctuation } from "./punctuation";

export const allGrammarTopics = [...coreGrammarTopics, prepositions, collocations, punctuation] as const;

export type GrammarTopicId = (typeof allGrammarTopics)[number]["id"];

export const grammarTopicsById = Object.fromEntries(
  allGrammarTopics.map((topic) => [topic.id, topic]),
) as Record<GrammarTopicId, (typeof allGrammarTopics)[number]>;

