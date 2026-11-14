import type { GrammarExercise } from "../grammar/exercises/types";
import type { GrammarTopic } from "../grammar/types";

export const willGoingTo = {
  id: "future-forms",
  title: "Simple Future: Will and Going To",
  description: "Escolha entre will e be going to para decisões, intenções, promessas e previsões.",
  introduction:
    "O inglês costuma usar will ou be going to para falar do futuro. A escolha depende de a ideia representar uma decisão espontânea, um plano anterior, uma promessa ou uma previsão.",
  usages: [
    {
      title: "Will: decisões, ofertas e promessas",
      meaning: "Use will para decisões tomadas no momento, ofertas, promessas e previsões baseadas em opinião.",
      pattern: "sujeito + will + verbo base",
      examples: [
        { english: "I'll help you with that.", portuguese: "Vou ajudar você com isso." },
        { english: "I think it'll be sunny.", portuguese: "Acho que fará sol." },
      ],
    },
    {
      title: "Be going to: planos e evidências",
      meaning: "Use para intenções anteriores e previsões baseadas em evidências presentes.",
      pattern: "sujeito + be + going to + verbo base",
      examples: [
        { english: "We're going to move next year.", portuguese: "Vamos nos mudar no próximo ano." },
        { english: "Look at the sky. It's going to rain.", portuguese: "Olhe para o céu. Vai chover." },
      ],
    },
    {
      title: "Negativas",
      meaning: "Coloque not depois de will ou da forma correta de be. Will not geralmente se contrai para won't.",
      pattern: "sujeito + won't + verbo base · sujeito + be + not + going to + verbo base",
      examples: [
        { english: "I won't forget your birthday.", portuguese: "Não vou esquecer seu aniversário." },
        { english: "She isn't going to buy it.", portuguese: "Ela não vai comprar isso." },
      ],
    },
    {
      title: "Perguntas",
      meaning: "Coloque will ou a forma correta de be antes do sujeito.",
      pattern: "will + sujeito + verbo base? · be + sujeito + going to + verbo base?",
      examples: [
        { english: "Will you call me later?", portuguese: "Você vai me ligar mais tarde?" },
        { english: "Are they going to travel?", portuguese: "Eles vão viajar?" },
      ],
    },
  ],
  warnings: [
    {
      title: "Will e going to nem sempre são intercambiáveis",
      explanation:
        "Use will para uma decisão tomada no momento da fala. Use going to quando o plano já existia antes da conversa ou quando uma evidência presente sustenta a previsão.",
      examples: [
        { english: "The phone is ringing. I'll answer it.", portuguese: "O telefone está tocando. Eu vou atender." },
        { english: "I've bought the tickets. We're going to travel in July.", portuguese: "Comprei as passagens. Vamos viajar em julho." },
      ],
    },
  ],
  quickRule:
    "Use will para uma decisão tomada agora ou uma opinião; use going to para uma intenção anterior ou evidência visível.",
} as const satisfies GrammarTopic;

export const willGoingToExercises = [
  {
    id: "future-choice",
    title: "1. Will ou going to?",
    type: "radio",
    instruction: "Escolha a forma que melhor corresponde ao contexto.",
    questions: [
      {
        question: "The phone is ringing. I ___ it.",
        options: [
          { option: "am going to answer" },
          { option: "will answer", isCorrect: true },
          { option: "answering" },
        ],
      },
      {
        question: "We bought the tickets yesterday. We ___ to Recife in July.",
        options: [
          { option: "are going to travel", isCorrect: true },
          { option: "will travel" },
          { option: "travel" },
        ],
      },
      {
        question: "Look at those dark clouds! It ___ rain.",
        options: [
          { option: "will" },
          { option: "is going to", isCorrect: true },
          { option: "going" },
        ],
      },
      {
        question: "I think our team ___ the championship.",
        options: [
          { option: "will win", isCorrect: true },
          { option: "is going to winning" },
          { option: "will wins" },
        ],
      },
      {
        question: "Don't worry. I ___ anyone your secret.",
        options: [
          { option: "won't tell", isCorrect: true },
          { option: "am not tell" },
          { option: "won't telling" },
        ],
      },
    ],
  },
  {
    id: "future-form",
    title: "2. Formação",
    type: "fill",
    instruction: "Complete com will, won't ou a forma correta de be going to.",
    showWordBank: false,
    blocks: [
      { block: [{ text: "I promise I " }, { blank: ["will call", "'ll call"] }, { text: " you after the exam. (call)" }] },
      { block: [{ text: "They have a plan. They " }, { blank: ["are going to open", "'re going to open"] }, { text: " a new store. (open)" }] },
      { block: [{ text: "She " }, { blank: ["will not forget", "won't forget"] }, { text: " your message. (not forget)" }] },
      { block: [{ blank: ["Are you going to study"] }, { text: " tonight? (you / study)" }] },
      { block: [{ text: "I think technology " }, { blank: ["will change", "'ll change"] }, { text: " education. (change)" }] },
    ],
  },
  {
    id: "future-transform",
    title: "3. Transformação de frases",
    type: "sentence-transformation",
    instruction: "Reescreva usando a forma futura indicada.",
    items: [
      {
        sentence: "I decided before this conversation to study medicine.",
        cue: "Use be going to.",
        answer: ["I am going to study medicine.", "I'm going to study medicine."],
      },
      {
        sentence: "The doorbell is ringing. I have decided now to open the door.",
        cue: "Use will.",
        answer: ["I will open the door.", "I'll open the door."],
      },
      {
        sentence: "They are going to move next month.",
        cue: "Passe para a forma negativa.",
        answer: ["They are not going to move next month.", "They aren't going to move next month."],
      },
      {
        sentence: "She will participate in the competition.",
        cue: "Transforme em pergunta.",
        answer: "Will she participate in the competition?",
      },
    ],
  },
  {
    id: "future-errors",
    title: "4. Correção de erros",
    type: "error-correction",
    items: [
      {
        sentence: "She will to travel tomorrow.",
        answer: "She will travel tomorrow.",
        explanation: "Depois de will, use o verbo na forma base sem to.",
      },
      {
        sentence: "They is going to study tonight.",
        answer: "They are going to study tonight.",
        explanation: "Com they, a forma correta de be é are.",
      },
      {
        sentence: "Will he goes to college next year?",
        answer: "Will he go to college next year?",
        explanation: "Depois de will, o verbo permanece na forma base.",
      },
      {
        sentence: "I going to buy a new notebook.",
        answer: ["I am going to buy a new notebook.", "I'm going to buy a new notebook."],
        explanation: "Be going to exige a forma adequada do verbo be.",
      },
    ],
  },
] as const satisfies readonly GrammarExercise[];
