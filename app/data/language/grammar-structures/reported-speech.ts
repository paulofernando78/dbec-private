import type { GrammarExercise } from "../grammar/exercises/types";
import type { GrammarTopic } from "../grammar/types";

export const reportedSpeech = {
  id: "reported-speech",
  title: "Reported Speech",
  description: "Relate afirmações, perguntas e pedidos sem citar exatamente as palavras originais.",
  introduction:
    "O reported speech frequentemente altera pronomes, referências de tempo e tempos verbais para adequá-los ao contexto do relato.",
  usages: [
    {
      title: "Relato de afirmações",
      meaning: "Use say ou tell e, em geral, recue o tempo verbal original em um nível.",
      pattern: "said (that) + oração · told + pessoa + oração",
      examples: [
        { english: "“I'm tired.” → She said she was tired.", portuguese: "“Estou cansada.” → Ela disse que estava cansada." },
        { english: "He told me he had finished.", portuguese: "Ele me disse que tinha terminado." },
      ],
    },
    {
      title: "Relato de perguntas",
      meaning: "Use a ordem de uma frase afirmativa e omita do, does e did.",
      pattern: "asked + palavra interrogativa/if + sujeito + verbo",
      examples: [
        { english: "“Where do you live?” → She asked where I lived.", portuguese: "“Onde você mora?” → Ela perguntou onde eu morava." },
        { english: "“Are you ready?” → He asked if I was ready.", portuguese: "“Você está pronto?” → Ele perguntou se eu estava pronto." },
      ],
    },
    {
      title: "Relato de pedidos e ordens",
      meaning: "Use ask ou tell mais uma pessoa e o infinitivo com to.",
      pattern: "asked/told + pessoa + (not) to + verbo base",
      examples: [
        { english: "“Please wait.” → She asked me to wait.", portuguese: "“Por favor, espere.” → Ela pediu que eu esperasse." },
        { english: "“Don't touch it.” → He told us not to touch it.", portuguese: "“Não toque nisso.” → Ele nos disse para não tocar." },
      ],
    },
  ],
  quickRule:
    "Use say something, mas tell someone something; perguntas relatadas seguem a ordem de uma frase afirmativa.",
} as const satisfies GrammarTopic;

export const reportedSpeechExercises = [
  {
    id: "reported-statements", title: "1. Relato de afirmações", type: "sentence-transformation",
    instruction: "Reescreva em reported speech, considerando que o relato é posterior à fala.",
    items: [
      { sentence: "Anna said, ‘I am tired.’", answer: "Anna said that she was tired." },
      { sentence: "Pedro said, ‘I finished the project.’", answer: "Pedro said that he had finished the project." },
      { sentence: "They said, ‘We will call you.’", answer: "They said that they would call me." },
      { sentence: "Laura said, ‘I can help.’", answer: "Laura said that she could help." },
    ],
  },
  {
    id: "reported-questions-commands", title: "2. Perguntas, pedidos e ordens", type: "sentence-transformation",
    instruction: "Passe as perguntas e ordens para o discurso indireto.",
    items: [
      { sentence: "He asked me, ‘Where do you live?’", answer: "He asked me where I lived." },
      { sentence: "She asked, ‘Are you ready?’", answer: "She asked if I was ready." },
      { sentence: "The teacher said, ‘Open your books.’", answer: "The teacher told us to open our books." },
      { sentence: "My mother said, ‘Don't be late.’", answer: "My mother told me not to be late." },
    ],
  },
  {
    id: "reported-errors", title: "3. Correção de erros", type: "error-correction",
    items: [
      { sentence: "She said me that she was busy.", answer: "She told me that she was busy.", explanation: "Use tell + objeto; say não recebe objeto diretamente nessa estrutura." },
      { sentence: "He asked where did I live.", answer: "He asked where I lived.", explanation: "Perguntas indiretas seguem a ordem de uma afirmação, sem did." },
      { sentence: "The teacher told that we should study.", answer: "The teacher told us that we should study.", explanation: "Tell precisa indicar a pessoa que recebe a informação." },
      { sentence: "She asked me that I was tired.", answer: "She asked me if I was tired.", explanation: "Perguntas de sim ou não usam if ou whether." },
    ],
  },
] as const satisfies readonly GrammarExercise[];
