import type { GrammarExercise } from "../grammar/exercises/types";
import type { GrammarTopic } from "../grammar/types";

export const comparatives = {
  id: "comparatives",
  title: "Comparatives",
  description: "Compare duas pessoas, coisas ou situações em inglês.",
  introduction:
    "Use o comparativo para dizer que uma pessoa ou coisa tem mais ou menos de uma característica do que outra. A comparação geralmente termina com than.",
  usages: [
    {
      title: "Adjetivos curtos: -er + than",
      meaning:
        "Adicione -er à maioria dos adjetivos curtos. Se terminam em -e, acrescente só -r. Em consoante + vogal + consoante, a última consoante geralmente se repete.",
      pattern: "adjetivo curto + -er + than",
      examples: [
        { english: "My room is smaller than yours.", portuguese: "Meu quarto é menor que o seu." },
        { english: "This road is wider than that one.", portuguese: "Esta estrada é mais larga que aquela." },
        { english: "Today is hotter than yesterday.", portuguese: "Hoje está mais quente que ontem." },
      ],
    },
    {
      title: "Adjetivos longos: more / less + than",
      meaning:
        "Use more antes de adjetivos mais longos para 'mais' e less para 'menos'. Não acrescente -er nesses casos.",
      pattern: "more / less + adjetivo + than",
      examples: [
        { english: "This book is more interesting than that one.", portuguese: "Este livro é mais interessante que aquele." },
        { english: "The train is less expensive than the plane.", portuguese: "O trem é menos caro que o avião." },
      ],
    },
    {
      title: "Adjetivos terminados em -y e formas irregulares",
      meaning:
        "Troque -y por -ier quando houver consoante antes do y. Alguns adjetivos mudam completamente: good → better, bad → worse, far → farther/further.",
      pattern: "happy → happier · good → better · bad → worse",
      examples: [
        { english: "She is happier than before.", portuguese: "Ela está mais feliz do que antes." },
        { english: "This answer is better than mine.", portuguese: "Esta resposta é melhor que a minha." },
        { english: "The weather is worse than yesterday.", portuguese: "O tempo está pior que ontem." },
      ],
    },
    {
      title: "Igualdade: as ... as",
      meaning: "Para dizer que duas coisas têm o mesmo grau de uma característica, use as antes e depois do adjetivo na forma base.",
      pattern: "as + adjetivo + as",
      examples: [
        { english: "This bag is as heavy as mine.", portuguese: "Esta bolsa é tão pesada quanto a minha." },
        { english: "My phone isn't as old as yours.", portuguese: "Meu celular não é tão velho quanto o seu." },
      ],
    },
  ],
  quickRule:
    "Compare dois elementos: smaller than, more useful than, better than. Para igualdade, use as + adjetivo + as.",
} as const satisfies GrammarTopic;

export const comparativesExercises = [
  {
    id: "comparatives-form",
    title: "Forme comparativos",
    type: "radio",
    instruction: "Escolha a forma adequada para completar a comparação.",
    questions: [
      { question: "My house is ___ than yours. (small)", options: [{ option: "smaller", isCorrect: true }, { option: "more small" }, { option: "smallest" }] },
      { question: "This lesson is ___ than the last one. (interesting)", options: [{ option: "interestinger" }, { option: "more interesting", isCorrect: true }, { option: "most interesting" }] },
      { question: "Today is ___ than yesterday. (hot)", options: [{ option: "hoter" }, { option: "hotter", isCorrect: true }, { option: "hottest" }] },
      { question: "This result is ___ than mine. (good)", options: [{ option: "gooder" }, { option: "better", isCorrect: true }, { option: "best" }] },
      { question: "She is ___ her sister. (tall / equality)", options: [{ option: "as tall as", isCorrect: true }, { option: "taller as" }, { option: "more tall than" }] },
    ],
  },
] as const satisfies readonly GrammarExercise[];
