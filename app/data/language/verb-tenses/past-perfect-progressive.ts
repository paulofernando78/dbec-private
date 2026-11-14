import type { GrammarExercise } from "../grammar/exercises/types";
import type { GrammarTopic } from "../grammar/types";

export const pastPerfectProgressive = {
  id: "past-perfect-progressive",
  title: "Past Perfect Progressive",
  description: "Enfatize a duração de uma atividade anterior a outro momento no passado.",
  introduction:
    "O past perfect progressive usa had been mais um verbo terminado em -ing.",
  usages: [
    {
      title: "Atividade contínua anterior a um acontecimento passado",
      meaning: "Use para uma atividade que continuou até outro momento no passado.",
      pattern: "sujeito + had been + verbo-ing + since/for",
      examples: [
        { english: "They had been waiting for an hour when the bus arrived.", portuguese: "Eles estavam esperando havia uma hora quando o ônibus chegou." },
        { english: "I'd been working there since January.", portuguese: "Eu trabalhava lá desde janeiro." },
      ],
    },
    {
      title: "Atividade passada com resultado visível",
      meaning: "Use quando uma atividade anterior explica uma condição posterior no passado.",
      pattern: "resultado passado + because + sujeito + had been + verbo-ing",
      examples: [
        { english: "The ground was wet because it had been raining.", portuguese: "O chão estava molhado porque tinha chovido." },
        { english: "She was tired because she had been studying.", portuguese: "Ela estava cansada porque estava estudando." },
      ],
    },
  ],
  quickRule: "Use had been + verbo-ing para enfatizar a duração antes de um momento passado.",
} as const satisfies GrammarTopic;

export const pastPerfectProgressiveExercises = [
  {
    id: "past-perfect-progressive-use", title: "1. Duração anterior no passado", type: "radio",
    instruction: "Escolha a forma que enfatiza uma atividade contínua anterior a outro fato passado.",
    questions: [
      { question: "They ___ for an hour when the bus finally arrived.", options: [{ option: "had been waiting", isCorrect: true }, { option: "have waited" }, { option: "are waiting" }] },
      { question: "The ground was wet because it ___.", options: [{ option: "had been raining", isCorrect: true }, { option: "has rained" }, { option: "rains" }] },
      { question: "She was exhausted because she ___ all morning.", options: [{ option: "had been running", isCorrect: true }, { option: "has been running" }, { option: "will run" }] },
      { question: "Which sentence emphasizes duration before a past event?", options: [{ option: "He studied yesterday." }, { option: "He had been studying for hours when I called.", isCorrect: true }, { option: "He has studied for hours." }] },
    ],
  },
  {
    id: "past-perfect-progressive-form", title: "2. Formação", type: "fill", showWordBank: false,
    instruction: "Complete com had been + verbo em -ing.",
    blocks: [
      { block: [{ text: "We " }, { blank: ["had been studying", "'d been studying"] }, { text: " for two hours when the lights went out. (study)" }] },
      { block: [{ text: "He " }, { blank: ["had not been feeling", "hadn't been feeling"] }, { text: " well before the trip. (not feel)" }] },
      { block: [{ blank: "Had they been working" }, { text: " there for long before they moved? (they / work)" }] },
      { block: [{ text: "Her eyes were red because she " }, { blank: ["had been crying", "'d been crying"] }, { text: ". (cry)" }] },
    ],
  },
  {
    id: "past-perfect-progressive-errors", title: "3. Correção de erros", type: "error-correction",
    items: [
      { sentence: "They had waiting for thirty minutes.", answer: "They had been waiting for thirty minutes.", explanation: "A estrutura exige had been + verbo em -ing." },
      { sentence: "She had been work all day.", answer: "She had been working all day.", explanation: "Depois de been, use o verbo em -ing." },
      { sentence: "Had he been studied before the exam started?", answer: "Had he been studying before the exam started?", explanation: "A forma progressiva usa studying, não studied." },
      { sentence: "I have been sleeping for an hour when you called.", answer: "I had been sleeping for an hour when you called.", explanation: "A atividade ocorreu antes de outro fato passado; use had been." },
    ],
  },
] as const satisfies readonly GrammarExercise[];
