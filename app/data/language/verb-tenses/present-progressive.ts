import type { GrammarExercise } from "../grammar/exercises/types";
import type { GrammarTopic } from "../grammar/types";

export const presentProgressive = {
  id: "present-continuous",
  title: "Present Progressive",
  description: "Fale sobre ações em andamento, situações temporárias, mudanças e planos futuros.",
  introduction:
    "O present progressive, também chamado de present continuous, combina am, is ou are com um verbo terminado em -ing.",
  usages: [
    {
      title: "Ações acontecendo agora",
      meaning: "Use para algo que está acontecendo no momento da fala ou próximo dele.",
      pattern: "sujeito + am/is/are + verbo-ing",
      examples: [
        { english: "I'm studying right now.", portuguese: "Estou estudando agora." },
        { english: "They're waiting outside.", portuguese: "Eles estão esperando lá fora." },
      ],
    },
    {
      title: "Situações temporárias",
      meaning: "Use para situações verdadeiras por um período limitado.",
      pattern: "sujeito + be + verbo-ing + expressão de tempo temporária",
      examples: [
        { english: "She's working from home this week.", portuguese: "Ela está trabalhando de casa esta semana." },
        { english: "We're staying with friends.", portuguese: "Estamos hospedados com amigos." },
      ],
    },
    {
      title: "Mudanças ao longo do tempo",
      meaning: "Use para situações que estão se desenvolvendo ou mudando.",
      pattern: "sujeito + be + verbo-ing",
      examples: [
        { english: "The weather is getting warmer.", portuguese: "O clima está ficando mais quente." },
        { english: "Your English is improving.", portuguese: "Seu inglês está melhorando." },
      ],
    },
    {
      title: "Compromissos futuros",
      meaning: "Use para um plano futuro que já foi combinado ou organizado.",
      pattern: "sujeito + be + verbo-ing + tempo futuro",
      examples: [
        { english: "I'm meeting Ana tomorrow.", portuguese: "Vou encontrar a Ana amanhã." },
        { english: "We're flying on Friday.", portuguese: "Vamos viajar de avião na sexta-feira." },
      ],
    },
    {
      title: "Negativas e perguntas",
      meaning: "Acrescente not depois de be nas negativas. Coloque be antes do sujeito nas perguntas.",
      pattern: "sujeito + be + not + verbo-ing · be + sujeito + verbo-ing?",
      examples: [
        { english: "She isn't working today.", portuguese: "Ela não está trabalhando hoje." },
        { english: "Are you waiting for someone?", portuguese: "Você está esperando alguém?" },
      ],
    },
  ],
  warnings: [
    {
      title: "Verbos de estado",
      explanation:
        "Verbos que descrevem estados, como know, want, need, believe e understand, normalmente não são usados na forma progressiva.",
      examples: [
        { english: "I understand the question.", portuguese: "Eu entendo a pergunta." },
        { english: "She wants a new phone.", portuguese: "Ela quer um celular novo." },
      ],
    },
  ],
  quickRule:
    "Sempre use am, is ou are antes da forma em -ing: She is working, e não She working.",
} as const satisfies GrammarTopic;

export const presentProgressiveExercises = [
  {
    id: "present-progressive-use",
    title: "1. Uso e contexto",
    type: "radio",
    instruction: "Escolha a alternativa mais adequada para cada contexto.",
    questions: [
      {
        question: "Please be quiet. The baby ___ right now.",
        options: [
          { option: "sleeps" },
          { option: "is sleeping", isCorrect: true },
          { option: "sleep" },
        ],
      },
      {
        question: "Carla usually works at the office, but this week she ___ from home.",
        options: [
          { option: "works" },
          { option: "is working", isCorrect: true },
          { option: "work" },
        ],
      },
      {
        question: "Which sentence describes a changing situation?",
        options: [
          { option: "The days are getting longer.", isCorrect: true },
          { option: "The sun rises in the east." },
          { option: "I know the answer." },
        ],
      },
      {
        question: "We ___ our science teacher after class tomorrow. Everything is arranged.",
        options: [
          { option: "meet" },
          { option: "are meeting", isCorrect: true },
          { option: "meeting" },
        ],
      },
      {
        question: "Which sentence is normally correct with a stative verb?",
        options: [
          { option: "I am understanding the lesson." },
          { option: "I understand the lesson.", isCorrect: true },
          { option: "I understanding the lesson." },
        ],
      },
    ],
  },
  {
    id: "present-progressive-form",
    title: "2. Formação",
    type: "fill",
    instruction: "Complete com a forma correta do present progressive.",
    showWordBank: false,
    blocks: [
      { block: [{ text: "Lucas " }, { blank: ["is studying", "'s studying"] }, { text: " for the exam now. (study)" }] },
      { block: [{ text: "We " }, { blank: ["are not watching", "aren't watching"] }, { text: " television at the moment. (not watch)" }] },
      { block: [{ blank: ["Are they waiting"] }, { text: " for the bus? (they / wait)" }] },
      { block: [{ text: "I " }, { blank: ["am writing", "'m writing"] }, { text: " an email to my teacher. (write)" }] },
      { block: [{ text: "The climate " }, { blank: ["is changing", "'s changing"] }, { text: " rapidly. (change)" }] },
    ],
  },
  {
    id: "present-progressive-errors",
    title: "3. Correção de erros",
    type: "error-correction",
    items: [
      {
        sentence: "She studying for the test now.",
        answer: ["She is studying for the test now.", "She's studying for the test now."],
        explanation: "O present progressive exige am, is ou are antes do verbo em -ing.",
      },
      {
        sentence: "They is playing outside.",
        answer: ["They are playing outside.", "They're playing outside."],
        explanation: "Com they, use are.",
      },
      {
        sentence: "Are you study for the exam?",
        answer: "Are you studying for the exam?",
        explanation: "Depois de be, o verbo principal deve terminar em -ing.",
      },
      {
        sentence: "I am knowing the answer.",
        answer: "I know the answer.",
        explanation: "Know é normalmente um stative verb e não costuma ser usado no progressive.",
      },
    ],
  },
  {
    id: "present-progressive-transform",
    title: "4. Transformação de frases",
    type: "sentence-transformation",
    instruction: "Reescreva conforme a orientação, sem alterar a informação principal.",
    items: [
      {
        sentence: "She is reading the article.",
        cue: "Passe para a forma negativa.",
        answer: ["She is not reading the article.", "She isn't reading the article."],
      },
      {
        sentence: "They are preparing dinner.",
        cue: "Transforme em pergunta.",
        answer: "Are they preparing dinner?",
      },
      {
        sentence: "I have an arranged meeting with the principal tomorrow.",
        cue: "Use o present progressive.",
        answer: ["I am meeting the principal tomorrow.", "I'm meeting the principal tomorrow."],
      },
      {
        sentence: "The number of students increases every year.",
        cue: "Destaque que a mudança está acontecendo atualmente.",
        answer: [
          "The number of students is increasing.",
          "The number of students is increasing every year.",
        ],
      },
    ],
  },
] as const satisfies readonly GrammarExercise[];
