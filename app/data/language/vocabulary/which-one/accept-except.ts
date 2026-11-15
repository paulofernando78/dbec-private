import type { VocabularyTopic } from "./types";
import { bold } from "@/helpers/content";

export const acceptVsExcept = {
  id: "accept-vs-except",
  title: "Accept vs. Except",
  description: ["Aprenda a distinguir ", bold("accept"), " de ", bold("except"), "."],
  introduction: [
    bold("Accept"),
    " e ",
    bold("except"),
    " têm grafias parecidas. Observe se alguém está aceitando algo ou se a frase está deixando alguém ou algo de fora.",
  ],
  usages: [
    {
      word: "Accept",
      meaning: "É um verbo que significa aceitar, como aceitar um presente, um convite ou uma proposta.",
      pattern: "accept + presente / convite / proposta",
      examples: [
        { english: "She gladly accepted the gift.", portuguese: "Ela aceitou o presente com alegria." },
        { english: "I accepted the job offer.", portuguese: "Aceitei a oferta de emprego." },
      ],
    },
    {
      word: "Except",
      meaning: "Significa “exceto” ou “com exceção de”. Indica quem ou o que fica de fora de um grupo ou de uma regra.",
      pattern: "everyone except + pessoa · every day except + dia",
      examples: [
        { english: "Everyone went to class except him.", portuguese: "Todos foram à aula, exceto ele." },
        { english: "The library opens every day except Sunday.", portuguese: "A biblioteca abre todos os dias, exceto aos domingos." },
      ],
    },
  ],
  quickRule: "Associe accept a “aceitar” e except a “excluir”.",
  image: {
    src: "/media/images/language/vocabulary/which-one/accept-vs-except.avif?v=2",
    alt: "Uma aluna aceita um presente. Em outra cena, um garoto fica triste do lado de fora enquanto os colegas entram na sala.",
    width: 1440,
    height: 720,
  },
  practice: [
    { question: "I will ___ your request soon.", choices: ["accept", "except"], answer: "accept" },
    { question: "Everyone finished the test ___ Lucas.", choices: ["accept", "except"], answer: "except" },
    { question: "She ___ the invitation yesterday.", choices: ["except", "accepted"], answer: "accepted" },
    { question: "All the answers are correct ___ the last one.", choices: ["except", "accept"], answer: "except" },
    { question: "The shop will ___ returns within 30 days.", choices: ["except", "accept"], answer: "accept" },
  ],
} as const satisfies VocabularyTopic;
