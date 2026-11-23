import type { GrammarTopic } from "./types";
import { whoAndWhatQuestions } from "../grammar-structures/who-and-what-questions";
import { soToo } from "../grammar-structures/so-too";
import { thereIsThereAre } from "../grammar-structures/there-is-there-are";
import { comparatives } from "../grammar-structures/comparatives";
import { superlatives } from "../grammar-structures/superlatives";
import { relativePronouns } from "../grammar-structures/relative-pronouns";
import { verbBePresentPast } from "../verb-tenses/verb-be-present-past";
import { presentProgressive } from "../verb-tenses/present-progressive";
import { simplePresent } from "../verb-tenses/simple-present";
import { simplePast } from "../verb-tenses/simple-past";
import { presentPerfect } from "../verb-tenses/present-perfect";
import { willGoingTo } from "../verb-tenses/will-going-to";
import { prefixesSuffixes } from "../word-formation/prefixes-suffixes";
import { latinPlurals } from "../word-formation/latin-plurals";
import { modalVerbs } from "../grammar-structures/modal-verbs";
import { conditionals } from "../grammar-structures/conditionals";
import { passiveVoice } from "../grammar-structures/passive-voice";
import { reportedSpeech } from "../grammar-structures/reported-speech";
import { presentPerfectProgressive } from "../verb-tenses/present-perfect-progressive";
import { pastPerfect } from "../verb-tenses/past-perfect";
import { pastPerfectProgressive } from "../verb-tenses/past-perfect-progressive";

export const coreGrammarTopics = [
  whoAndWhatQuestions,
  soToo,
  thereIsThereAre,
  comparatives,
  superlatives,
  relativePronouns,
  verbBePresentPast,
  presentProgressive,
  simplePresent,
  simplePast,
  presentPerfect,
  willGoingTo,
  prefixesSuffixes,
  latinPlurals,
  modalVerbs,
  conditionals,
  passiveVoice,
  reportedSpeech,
  presentPerfectProgressive,
  pastPerfect,
  pastPerfectProgressive,
] as const satisfies readonly GrammarTopic[];
