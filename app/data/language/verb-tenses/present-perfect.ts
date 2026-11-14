import type { GrammarExercise } from "../grammar/exercises/types";
import type { GrammarTopic } from "../grammar/types";

export const presentPerfect = {
  id: "present-perfect",
  title: "Present Perfect",
  description: "Relacione ações e experiências passadas ao presente.",
  introduction:
    "O present perfect usa have ou has mais o particípio passado quando o resultado ou o período presente é relevante.",
  usages: [
    {
      title: "Experiências de vida",
      meaning: "Use para experiências sem informar exatamente quando aconteceram.",
      pattern: "sujeito + have/has + particípio passado",
      examples: [
        { english: "I've visited Argentina.", portuguese: "Eu já visitei a Argentina." },
        { english: "Has she ever tried sushi?", portuguese: "Ela já experimentou sushi?" },
        { english: "I've lived in London before.", portuguese: "Já morei em Londres." },
      ],
    },
    {
      title: "Ações recentes e resultados no presente",
      meaning: "Use quando uma ação concluída apresenta um resultado no presente.",
      pattern: "have/has + just/already/not yet + particípio passado",
      examples: [
        { english: "He's just finished the report.", portuguese: "Ele acabou de terminar o relatório." },
        { english: "We haven't eaten yet.", portuguese: "Ainda não comemos." },
      ],
    },
    {
      title: "Situações que continuam até agora",
      meaning:
        "Em I've lived here since 2018, a pessoa começou a morar aqui em 2018 e ainda mora aqui. Esse é um uso normal do present perfect. Use since para indicar quando a situação começou e for para dizer quanto tempo ela dura. Em português, normalmente usamos o presente com desde ou há.",
      pattern: "have/has + particípio passado + since/for",
      examples: [
        { english: "I've lived here since 2018.", portuguese: "Moro aqui desde 2018." },
        { english: "I've lived here for five years.", portuguese: "Moro aqui há cinco anos." },
        { english: "I've been here for two hours.", portuguese: "Estou aqui há duas horas." },
      ],
    },
  ],
  warnings: [
    {
      title: "I've been in London × I've been to London",
      explanation:
        "Been é o particípio de be. Em I've been in London since Monday, in London indica onde a pessoa está e since Monday mostra que a estadia começou na segunda e continua. Já I've been to London fala de uma visita concluída, sem dizer quando. O mesmo verbo pode ter leituras diferentes: I've lived in London before conta uma experiência anterior e não diz onde a pessoa mora hoje.",
      examples: [
        { english: "I've been in London since Monday.", portuguese: "Estou em Londres desde segunda-feira." },
        { english: "I've been to London.", portuguese: "Já estive em Londres." },
      ],
    },
    {
      title: "For indica duração",
      explanation:
        "For five years significa por cinco anos. Na primeira frase, os cinco anos chegam até o presente; na segunda, correspondem a um período já encerrado.",
      examples: [
        { english: "I've lived here for five years.", portuguese: "Moro aqui há cinco anos." },
        { english: "I lived there for five years.", portuguese: "Morei lá por cinco anos." },
      ],
    },
  ],
  quickRule:
    "Use o simple past com um tempo já encerrado, como yesterday ou in 2024.",
} as const satisfies GrammarTopic;

export const presentPerfectExercises = [
  {
    id: "present-perfect-choice", title: "1. Present perfect ou simple past?", type: "radio",
    instruction: "Observe os marcadores temporais e escolha o tempo verbal adequado.",
    questions: [
      { question: "I ___ that film three times.", options: [{ option: "saw yesterday" }, { option: "have seen", isCorrect: true }, { option: "am seeing" }] },
      { question: "She ___ to Salvador in 2024.", options: [{ option: "has gone" }, { option: "went", isCorrect: true }, { option: "has went" }] },
      { question: "We ___ our homework yet.", options: [{ option: "didn't finish" }, { option: "haven't finished", isCorrect: true }, { option: "don't finished" }] },
      { question: "Which sentence refers to an unfinished period?", options: [{ option: "I read two books last month." }, { option: "I have read two books this month.", isCorrect: true }, { option: "I was reading two books." }] },
    ],
  },
  {
    id: "present-perfect-form", title: "2. Formação e particípios", type: "fill", showWordBank: false,
    instruction: "Complete com have/has e o past participle correto.",
    blocks: [
      { block: [{ text: "He " }, { blank: ["has already finished", "has finished"] }, { text: " the report. (finish)" }] },
      { block: [{ text: "They " }, { blank: ["have never visited", "haven't visited"] }, { text: " London. (visit)" }] },
      { block: [{ blank: "Have you ever eaten" }, { text: " sushi? (you / eat)" }] },
      { block: [{ text: "My teacher " }, { blank: "has written" }, { text: " three books. (write)" }] },
    ],
  },
  {
    id: "present-perfect-errors", title: "3. Correção de erros", type: "error-correction",
    items: [
      { sentence: "She has went to the library.", answer: "She has gone to the library.", explanation: "O past participle de go é gone." },
      { sentence: "I have seen him yesterday.", answer: "I saw him yesterday.", explanation: "Yesterday indica tempo passado encerrado; use simple past." },
      { sentence: "Did you ever visit Argentina?", answer: "Have you ever visited Argentina?", explanation: "Para experiência de vida sem tempo definido, use present perfect." },
      { sentence: "He haven't finished yet.", answer: ["He has not finished yet.", "He hasn't finished yet."], explanation: "Com he, use has ou hasn't." },
    ],
  },
] as const satisfies readonly GrammarExercise[];
