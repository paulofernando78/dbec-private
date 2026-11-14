import type { GrammarExercise } from "../grammar/exercises/types";
import type { GrammarTopic } from "../grammar/types";

export const pastPerfect = {
  id: "past-perfect",
  title: "Past Perfect",
  description: "Mostre que uma ação passada aconteceu antes de outra ação ou momento no passado.",
  introduction:
    "O past perfect usa had mais o particípio passado para deixar claro qual acontecimento ocorreu primeiro.",
  usages: [
    {
      title: "Ação anterior no passado",
      meaning: "Use para uma ação concluída antes de outra ação passada.",
      pattern: "sujeito + had + particípio passado",
      examples: [
        { english: "The train had left before we arrived.", portuguese: "O trem tinha partido antes de chegarmos." },
        { english: "She had finished when I called.", portuguese: "Ela já tinha terminado quando liguei." },
      ],
    },
    {
      title: "Causa ou explicação no passado",
      meaning: "Use para explicar a causa anterior de uma situação passada.",
      pattern: "resultado passado + because + sujeito + had + particípio passado",
      examples: [
        { english: "He was tired because he hadn't slept.", portuguese: "Ele estava cansado porque não tinha dormido." },
        { english: "They knew the city because they had visited it before.", portuguese: "Eles conheciam a cidade porque já a tinham visitado." },
      ],
    },
  ],
  quickRule: "Use had + particípio passado para o primeiro de dois acontecimentos passados.",
} as const satisfies GrammarTopic;

export const pastPerfectExercises = [
  {
    id: "past-perfect-order", title: "1. Ordem dos acontecimentos", type: "radio",
    instruction: "Identifique a ação que aconteceu primeiro e escolha a forma adequada.",
    questions: [
      { question: "When I arrived, the film ___.", options: [{ option: "already started" }, { option: "had already started", isCorrect: true }, { option: "has started" }] },
      { question: "She was tired because she ___ well the night before.", options: [{ option: "hadn't slept", isCorrect: true }, { option: "doesn't sleep" }, { option: "hasn't slept" }] },
      { question: "After they ___ dinner, they went for a walk.", options: [{ option: "had finished", isCorrect: true }, { option: "have finished" }, { option: "finish" }] },
      { question: "Which action happened first: ‘He had left before I called’ ?", options: [{ option: "I called." }, { option: "He left.", isCorrect: true }, { option: "They happened at the same time." }] },
    ],
  },
  {
    id: "past-perfect-form", title: "2. Formação", type: "fill", showWordBank: false,
    instruction: "Complete com had + past participle.",
    blocks: [
      { block: [{ text: "The train " }, { blank: "had left" }, { text: " before we reached the station. (leave)" }] },
      { block: [{ text: "I " }, { blank: ["had not seen", "hadn't seen"] }, { text: " that place before. (not see)" }] },
      { block: [{ blank: "Had she finished" }, { text: " the test when the bell rang? (she / finish)" }] },
      { block: [{ text: "They were hungry because they " }, { blank: ["had not eaten", "hadn't eaten"] }, { text: ". (not eat)" }] },
    ],
  },
  {
    id: "past-perfect-errors", title: "3. Correção de erros", type: "error-correction",
    items: [
      { sentence: "When we arrived, they have left.", answer: "When we arrived, they had left.", explanation: "Para uma ação anterior a outra ação passada, use past perfect." },
      { sentence: "She had went home before the storm.", answer: "She had gone home before the storm.", explanation: "O particípio de go é gone." },
      { sentence: "Had you saw the message before class?", answer: "Had you seen the message before class?", explanation: "O particípio de see é seen." },
      { sentence: "He didn't had finished the work.", answer: ["He had not finished the work.", "He hadn't finished the work."], explanation: "A negativa do past perfect é had not; não use did." },
    ],
  },
] as const satisfies readonly GrammarExercise[];
