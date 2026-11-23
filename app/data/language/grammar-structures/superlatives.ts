import type { GrammarExercise } from "../grammar/exercises/types";
import type { GrammarTopic } from "../grammar/types";

export const superlatives = {
  id: "superlatives",
  title: "Superlatives",
  description: "Identifique o maior, o menor ou o mais marcante em um grupo.",
  introduction:
    "Use o superlativo para destacar uma pessoa ou coisa dentro de um grupo de três ou mais. Normalmente, coloque the antes da forma superlativa.",
  usages: [
    {
      title: "Adjetivos curtos: the + -est",
      meaning:
        "Acrescente -est à maioria dos adjetivos curtos. Se terminam em -e, acrescente só -st. Em consoante + vogal + consoante, a última consoante geralmente se repete.",
      pattern: "the + adjetivo curto + -est",
      examples: [
        { english: "Mia is the tallest student in the class.", portuguese: "Mia é a aluna mais alta da turma." },
        { english: "This is the largest room in the house.", portuguese: "Este é o maior cômodo da casa." },
        { english: "August was the hottest month.", portuguese: "Agosto foi o mês mais quente." },
      ],
    },
    {
      title: "Adjetivos longos: the most / the least",
      meaning: "Use the most para 'o mais' e the least para 'o menos' antes de adjetivos mais longos.",
      pattern: "the most / the least + adjetivo",
      examples: [
        { english: "This is the most interesting chapter.", portuguese: "Este é o capítulo mais interessante." },
        { english: "That was the least expensive option.", portuguese: "Aquela era a opção menos cara." },
      ],
    },
    {
      title: "Adjetivos terminados em -y e formas irregulares",
      meaning:
        "Troque -y por -iest quando houver consoante antes do y. Memorize good → best, bad → worst e far → farthest/furthest.",
      pattern: "happy → the happiest · good → the best · bad → the worst",
      examples: [
        { english: "It was the happiest day of my life.", portuguese: "Foi o dia mais feliz da minha vida." },
        { english: "She gave the best answer.", portuguese: "Ela deu a melhor resposta." },
        { english: "That was the worst result.", portuguese: "Aquele foi o pior resultado." },
      ],
    },
    {
      title: "Indique o grupo ou o lugar",
      meaning: "Use in com lugares ou grupos e of com conjuntos definidos por quantidade ou período.",
      pattern: "the + superlativo + in / of + grupo",
      examples: [
        { english: "Leo is the youngest in the family.", portuguese: "Leo é o mais novo da família." },
        { english: "This was the best of the three ideas.", portuguese: "Esta foi a melhor das três ideias." },
      ],
    },
  ],
  quickRule:
    "Destaque um elemento do grupo: the smallest, the most useful, the best. Use -est em adjetivos curtos e most com os mais longos.",
} as const satisfies GrammarTopic;

export const superlativesExercises = [
  {
    id: "superlatives-form",
    title: "Forme superlativos",
    type: "radio",
    instruction: "Escolha a forma adequada para destacar um elemento do grupo.",
    questions: [
      { question: "This is ___ room in the house. (small)", options: [{ option: "the smallest", isCorrect: true }, { option: "the smaller" }, { option: "the most small" }] },
      { question: "It is ___ chapter in the book. (interesting)", options: [{ option: "the interestingest" }, { option: "the most interesting", isCorrect: true }, { option: "more interesting" }] },
      { question: "August was ___ month of the year. (hot)", options: [{ option: "the hotest" }, { option: "the hottest", isCorrect: true }, { option: "hotter" }] },
      { question: "She gave ___ answer. (good)", options: [{ option: "the goodest" }, { option: "the better" }, { option: "the best", isCorrect: true }] },
      { question: "It was ___ day of the trip. (happy)", options: [{ option: "the happiest", isCorrect: true }, { option: "the happyest" }, { option: "the most happyest" }] },
    ],
  },
] as const satisfies readonly GrammarExercise[];
