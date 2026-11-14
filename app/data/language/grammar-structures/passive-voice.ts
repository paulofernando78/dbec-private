import type { GrammarExercise } from "../grammar/exercises/types";
import type { GrammarTopic } from "../grammar/types";

export const passiveVoice = {
  id: "passive-voice",
  title: "Passive Voice",
  description: "Dê destaque à ação ou ao resultado, em vez de destacar quem realiza a ação.",
  introduction:
    "A passive voice usa be mais o particípio passado e é útil quando o agente é desconhecido, óbvio ou menos importante.",
  usages: [
    {
      title: "Simple Present",
      meaning: "Use am, is ou are mais o particípio passado para fatos e processos no presente.",
      pattern: "sujeito + am/is/are + particípio passado",
      examples: [
        { english: "Coffee is grown in Brazil.", portuguese: "Café é cultivado no Brasil." },
        { english: "The rooms are cleaned daily.", portuguese: "Os quartos são limpos diariamente." },
      ],
    },
    {
      title: "Simple Past",
      meaning: "Use was ou were mais o particípio passado para ações concluídas no passado.",
      pattern: "sujeito + was/were + particípio passado",
      examples: [
        { english: "The bridge was built in 1950.", portuguese: "A ponte foi construída em 1950." },
        { english: "The documents were sent yesterday.", portuguese: "Os documentos foram enviados ontem." },
      ],
    },
    {
      title: "Present Continuous",
      meaning: "A ação está em andamento no presente.",
      pattern: "sujeito + am/is/are being + particípio passado",
      examples: [
        { english: "The bridge is being repaired.", portuguese: "A ponte está sendo consertada." },
      ],
    },
    {
      title: "Present Perfect",
      meaning: "A ação aconteceu antes de agora e tem relevância no presente.",
      pattern: "sujeito + has/have been + particípio passado",
      examples: [
        { english: "The bridge has already been repaired.", portuguese: "A ponte já foi consertada." },
      ],
    },
    {
      title: "Present Perfect Continuous (uso raro)",
      meaning: "Enfatiza a duração até o presente. Na prática, prefira reformular na voz ativa quando possível.",
      pattern: "sujeito + has/have been being + particípio passado",
      examples: [
        { english: "The bridge has been being repaired since May.", portuguese: "A ponte vem sendo consertada desde maio." },
      ],
    },
    {
      title: "Past Continuous",
      meaning: "A ação estava em andamento em um momento passado.",
      pattern: "sujeito + was/were being + particípio passado",
      examples: [
        { english: "The bridge was being repaired when we arrived.", portuguese: "A ponte estava sendo consertada quando chegamos." },
      ],
    },
    {
      title: "Past Perfect",
      meaning: "A ação já havia acontecido antes de outro momento passado.",
      pattern: "sujeito + had been + particípio passado",
      examples: [
        { english: "The bridge had been repaired before the storm.", portuguese: "A ponte tinha sido consertada antes da tempestade." },
      ],
    },
    {
      title: "Past Perfect Continuous (uso raro)",
      meaning: "Enfatiza a duração até um momento passado. Na prática, prefira reformular na voz ativa quando possível.",
      pattern: "sujeito + had been being + particípio passado",
      examples: [
        { english: "The bridge had been being repaired for weeks before the storm.", portuguese: "A ponte vinha sendo consertada havia semanas antes da tempestade." },
      ],
    },
    {
      title: "Future Simple",
      meaning: "A ação acontecerá no futuro.",
      pattern: "sujeito + will be + particípio passado",
      examples: [
        { english: "The bridge will be repaired next year.", portuguese: "A ponte será consertada no ano que vem." },
      ],
    },
    {
      title: "Future Continuous (uso raro)",
      meaning: "A ação estará em andamento em um momento futuro. Na prática, prefira reformular na voz ativa quando possível.",
      pattern: "sujeito + will be being + particípio passado",
      examples: [
        { english: "The bridge will be being repaired this time tomorrow.", portuguese: "A ponte estará sendo consertada a esta hora amanhã." },
      ],
    },
    {
      title: "Future Perfect",
      meaning: "A ação estará concluída até um momento futuro.",
      pattern: "sujeito + will have been + particípio passado",
      examples: [
        { english: "The bridge will have been repaired by Friday.", portuguese: "A ponte terá sido consertada até sexta-feira." },
      ],
    },
    {
      title: "Future Perfect Continuous (uso raro)",
      meaning: "Enfatiza a duração até um momento futuro. Na prática, prefira reformular na voz ativa quando possível.",
      pattern: "sujeito + will have been being + particípio passado",
      examples: [
        { english: "By Friday, the bridge will have been being repaired for a month.", portuguese: "Na sexta-feira, fará um mês que a ponte vem sendo consertada." },
      ],
    },
    {
      title: "Indicação do agente",
      meaning: "Use by somente quando a pessoa ou coisa que realiza a ação for relevante.",
      pattern: "forma passiva + by + agente",
      examples: [
        { english: "The novel was written by George Orwell.", portuguese: "O romance foi escrito por George Orwell." },
        { english: "The window was broken.", portuguese: "A janela foi quebrada." },
      ],
    },
  ],
  quickRule:
    "Marque o tempo verbal em be; o verbo principal permanece no particípio passado.",
} as const satisfies GrammarTopic;

export const passiveVoiceExercises = [
  {
    id: "passive-recognition", title: "1. Voz ativa e passiva", type: "radio",
    instruction: "Escolha a frase passiva correta, mantendo o tempo verbal original.",
    questions: [
      { question: "People speak Portuguese in Brazil.", options: [{ option: "Portuguese speaks in Brazil." }, { option: "Portuguese is spoken in Brazil.", isCorrect: true }, { option: "Portuguese was spoken in Brazil." }] },
      { question: "The scientist discovered the cure.", options: [{ option: "The cure was discovered by the scientist.", isCorrect: true }, { option: "The cure is discovered by the scientist." }, { option: "The cure discovered the scientist." }] },
      { question: "Which sentence correctly omits an unimportant agent?", options: [{ option: "My phone was stolen.", isCorrect: true }, { option: "My phone stole." }, { option: "My phone was stole by someone." }] },
      { question: "They clean the classrooms every day.", options: [{ option: "The classrooms are cleaned every day.", isCorrect: true }, { option: "The classrooms were clean every day." }, { option: "The classrooms cleaned every day." }] },
    ],
  },
  {
    id: "passive-transform", title: "2. Transformação", type: "sentence-transformation",
    instruction: "Passe da voz ativa para a passiva. Inclua o agente somente quando ele for relevante.",
    items: [
      { sentence: "Shakespeare wrote Hamlet.", cue: "Use a voz passiva no passado.", answer: "Hamlet was written by Shakespeare." },
      { sentence: "People use smartphones worldwide.", cue: "Use a voz passiva no presente.", answer: "Smartphones are used worldwide." },
      { sentence: "The school organizes the event every year.", cue: "Mantenha o agente.", answer: "The event is organized by the school every year." },
      { sentence: "Someone broke the window last night.", cue: "Omita o agente desconhecido.", answer: "The window was broken last night." },
    ],
  },
  {
    id: "passive-errors", title: "3. Correção de erros", type: "error-correction",
    items: [
      { sentence: "English is speak in many countries.", answer: "English is spoken in many countries.", explanation: "A passiva usa be + past participle: spoken." },
      { sentence: "The letters were send yesterday.", answer: "The letters were sent yesterday.", explanation: "O particípio de send é sent." },
      { sentence: "The book was wrote by George Orwell.", answer: "The book was written by George Orwell.", explanation: "O particípio de write é written." },
      { sentence: "The meals is prepared every morning.", answer: "The meals are prepared every morning.", explanation: "Meals está no plural; use are." },
    ],
  },
] as const satisfies readonly GrammarExercise[];
