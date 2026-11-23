import type { GrammarExercise } from "../grammar/exercises/types";
import type { GrammarTopic } from "../grammar/types";

export const thereIsThereAre = {
  id: "there-is-there-are",
  title: "There Is / There Are",
  description: "Diga que algo existe ou está presente em um lugar.",
  introduction:
    "Use there is com um substantivo singular ou incontável e there are com substantivos plurais. Em português, a ideia costuma corresponder a 'há' ou 'existe/existem'.",
  usages: [
    {
      title: "Afirmativas",
      meaning: "A forma do verbo depende do substantivo que vem depois dele.",
      pattern: "there is + singular/incontável · there are + plural",
      examples: [
        { english: "There is a book on the desk.", portuguese: "Há um livro sobre a mesa." },
        { english: "There are books on the desk.", portuguese: "Há livros sobre a mesa." },
        { english: "There is some milk in the fridge.", portuguese: "Há um pouco de leite na geladeira." },
      ],
      image: {
        src: "/media/images/language/grammar-structures/there-is-there-are/there-is-there-are.avif?v=1",
        alt: "Comparação entre 'There is a book on the desk.' com um livro e 'There are books on the desk.' com três livros.",
        width: 1536,
        height: 1024,
      },
    },
    {
      title: "Negativas e perguntas",
      meaning:
        "Nas negativas, acrescente not ao verbo. Nas perguntas, coloque is ou are antes de there. Use any com frequência em negativas e perguntas.",
      pattern: "there isn't/aren't ... · is/are there ...?",
      examples: [
        { english: "There isn't a pen on the table.", portuguese: "Não há uma caneta sobre a mesa." },
        { english: "There aren't any pens here.", portuguese: "Não há canetas aqui." },
        { english: "Is there a cat on the chair?", portuguese: "Há um gato na cadeira?" },
        { english: "Are there any cats on the sofa?", portuguese: "Há gatos no sofá?" },
      ],
    },
    {
      title: "Perguntas com how many",
      meaning: "Use how many para perguntar a quantidade de itens contáveis.",
      pattern: "How many + substantivo plural + are there ...?",
      examples: [
        { english: "How many students are there in your class?", portuguese: "Quantos alunos há na sua turma?" },
        { english: "How many days are there in February?", portuguese: "Quantos dias há em fevereiro?" },
      ],
    },
  ],
  quickRule:
    "Um item ou algo incontável: there is. Dois ou mais itens: there are. Na pergunta, inverta: Is there...? / Are there...?",
} as const satisfies GrammarTopic;

export const thereIsThereAreExercises = [
  {
    id: "there-is-there-are-form",
    title: "Escolha is ou are",
    type: "radio",
    instruction: "Escolha a forma que concorda com o substantivo.",
    questions: [
      { question: "There ___ a book on the table.", options: [{ option: "is", isCorrect: true }, { option: "are" }] },
      { question: "There ___ three books on the table.", options: [{ option: "is" }, { option: "are", isCorrect: true }] },
      { question: "There ___ some water in the glass.", options: [{ option: "is", isCorrect: true }, { option: "are" }] },
      { question: "___ there any chairs in the room?", options: [{ option: "Is" }, { option: "Are", isCorrect: true }] },
    ],
  },
] as const satisfies readonly GrammarExercise[];
