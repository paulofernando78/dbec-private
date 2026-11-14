import { presentProgressiveExercises } from "../../verb-tenses/present-progressive";
import { willGoingToExercises } from "../../verb-tenses/will-going-to";
import { prefixesSuffixesExercises } from "../../word-formation/prefixes-suffixes";
import { latinPluralsExercises } from "../../word-formation/latin-plurals";
import { whoAndWhatQuestionsExercises } from "../../grammar-structures/who-and-what-questions";
import { verbBePresentPastExercises } from "../../verb-tenses/verb-be-present-past";
import { simplePresentExercises } from "../../verb-tenses/simple-present";
import { simplePastExercises } from "../../verb-tenses/simple-past";
import { presentPerfectExercises } from "../../verb-tenses/present-perfect";
import { modalVerbsExercises } from "../../grammar-structures/modal-verbs";
import { conditionalsExercises } from "../../grammar-structures/conditionals";
import { passiveVoiceExercises } from "../../grammar-structures/passive-voice";
import { reportedSpeechExercises } from "../../grammar-structures/reported-speech";
import { presentPerfectProgressiveExercises } from "../../verb-tenses/present-perfect-progressive";
import { pastPerfectExercises } from "../../verb-tenses/past-perfect";
import { pastPerfectProgressiveExercises } from "../../verb-tenses/past-perfect-progressive";

export const grammarExercisesByTopicId = {
  "present-continuous": presentProgressiveExercises,
  "future-forms": willGoingToExercises,
  "prefixes-suffixes": prefixesSuffixesExercises,
  "latin-plurals": latinPluralsExercises,
  "who-and-what-questions": whoAndWhatQuestionsExercises,
  "verb-be-present-past": verbBePresentPastExercises,
  "simple-present": simplePresentExercises,
  "simple-past": simplePastExercises,
  "present-perfect": presentPerfectExercises,
  "modal-verbs": modalVerbsExercises,
  "conditionals": conditionalsExercises,
  "passive-voice": passiveVoiceExercises,
  "reported-speech": reportedSpeechExercises,
  "present-perfect-progressive": presentPerfectProgressiveExercises,
  "past-perfect": pastPerfectExercises,
  "past-perfect-progressive": pastPerfectProgressiveExercises,
};

export type { GrammarExercise } from "./types";
