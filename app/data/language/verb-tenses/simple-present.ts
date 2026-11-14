import type { GrammarExercise } from "../grammar/exercises/types";
import type { GrammarTopic } from "../grammar/types";

export const simplePresent = {
  id: "simple-present",
  title: "Simple Present",
  description: "Descreva rotinas, ações repetidas, fatos e situações permanentes.",
  introduction:
    "O simple present expressa o que acontece habitualmente ou o que é verdadeiro de modo geral.",
  usages: [
    {
      title: "Hábitos e rotinas",
      meaning: "Use com expressões de frequência para ações repetidas.",
      pattern: "sujeito + verbo base · he/she/it + verbo-s",
      examples: [
        { english: "I exercise every morning.", portuguese: "Eu me exercito todas as manhãs." },
        { english: "He takes the bus to work.", portuguese: "Ele pega o ônibus para o trabalho." },
      ],
    },
    {
      title: "Fatos e situações permanentes",
      meaning: "Use para verdades gerais e estados relativamente permanentes.",
      pattern: "sujeito + verbo no simple present",
      examples: [
        { english: "Water boils at 100°C.", portuguese: "A água ferve a 100°C." },
        { english: "She lives in São Paulo.", portuguese: "Ela mora em São Paulo." },
      ],
    },
    {
      title: "Negativas e perguntas",
      meaning: "Use do ou does com a forma base do verbo principal.",
      pattern: "do/does + sujeito + verbo base? · sujeito + don't/doesn't + verbo base",
      examples: [
        { english: "Does he speak English?", portuguese: "Ele fala inglês?" },
        { english: "She doesn't drive.", portuguese: "Ela não dirige." },
      ],
    },
  ],
  quickRule:
    "Somente he, she e it recebem -s na afirmativa; depois de does ou doesn't, use o verbo na forma base.",
} as const satisfies GrammarTopic;

export const simplePresentExercises = [
  {
    id: "simple-present-use", title: "1. Hábitos e fatos", type: "radio",
    instruction: "Escolha a alternativa adequada para hábitos, rotinas e fatos gerais.",
    questions: [
      { question: "Marina ___ English every evening.", options: [{ option: "study" }, { option: "studies", isCorrect: true }, { option: "is study" }] },
      { question: "Water ___ at 100°C at sea level.", options: [{ option: "boils", isCorrect: true }, { option: "is boiling" }, { option: "boil" }] },
      { question: "My brothers ___ coffee in the morning.", options: [{ option: "drinks" }, { option: "drink", isCorrect: true }, { option: "drinking" }] },
      { question: "Which sentence expresses a routine?", options: [{ option: "She is reading now." }, { option: "She reads before bed.", isCorrect: true }, { option: "She read yesterday." }] },
    ],
  },
  {
    id: "simple-present-form", title: "2. Formação", type: "fill", showWordBank: false,
    instruction: "Complete com a forma correta do simple present.",
    blocks: [
      { block: [{ text: "He " }, { blank: "watches" }, { text: " the news every night. (watch)" }] },
      { block: [{ text: "We " }, { blank: ["do not live", "don't live"] }, { text: " near the school. (not live)" }] },
      { block: [{ blank: "Does she speak" }, { text: " Spanish? (she / speak)" }] },
      { block: [{ text: "The bus " }, { blank: "leaves" }, { text: " at seven. (leave)" }] },
    ],
  },
  {
    id: "simple-present-errors", title: "3. Erros frequentes", type: "error-correction",
    items: [
      { sentence: "He don't like mathematics.", answer: ["He does not like mathematics.", "He doesn't like mathematics."], explanation: "Com he, use does not ou doesn't." },
      { sentence: "Does she studies every day?", answer: "Does she study every day?", explanation: "Depois de does, o verbo volta à forma base." },
      { sentence: "My sister go to school by bus.", answer: "My sister goes to school by bus.", explanation: "Na terceira pessoa do singular, acrescente -s ou -es." },
      { sentence: "They doesn't understand the question.", answer: ["They do not understand the question.", "They don't understand the question."], explanation: "Com they, use do not ou don't." },
    ],
  },
] as const satisfies readonly GrammarExercise[];
