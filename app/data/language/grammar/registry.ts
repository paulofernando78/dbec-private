import { collocations } from "../grammar-structures/collocations";
import { coreGrammarTopics } from "./core-topics";
import { prepositions } from "../grammar-structures/prepositions";
import { punctuation } from "../grammar-structures/punctuation";
import { toVsFor } from "../grammar-structures/to-vs-for";

export const allGrammarTopics = [...coreGrammarTopics, prepositions, toVsFor, collocations, punctuation] as const;

export type GrammarTopicId = (typeof allGrammarTopics)[number]["id"];

export const grammarTopicsById = Object.fromEntries(
  allGrammarTopics.map((topic) => [topic.id, topic]),
) as Record<GrammarTopicId, (typeof allGrammarTopics)[number]>;

