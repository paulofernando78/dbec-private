import type { VocabularyTopic } from "./types";

export const lieVsLay = {
  id: "lie-vs-lay",
  title: "Lie vs. Lay",
  description: "Aprenda a distinguir “deitar-se” de “colocar algo ou alguém”.",
  introduction:
    "As formas se sobrepõem. Lay é a forma base de “colocar” e também o passado de lie no sentido de “deitar-se”.",
  usages: [
    {
      word: "Lie",
      meaning: "Significa “deitar-se” ou “estar deitado”, sem objeto direto. O lugar pode aparecer depois do verbo, como em on the table.",
      pattern: "lie → lay → lain · lie + lugar / posição",
      examples: [
        { english: "I need to lie down.", portuguese: "Preciso me deitar." },
        { english: "The keys are lying on the table.", portuguese: "As chaves estão sobre a mesa." },
      ],
    },
    {
      word: "Lay",
      meaning: "Significa “colocar” algo ou alguém em determinada posição. A coisa ou a pessoa colocada é o objeto direto.",
      pattern: "lay → laid → laid · lay + objeto direto + lugar / posição",
      examples: [
        { english: "Lay the keys on the table.", portuguese: "Coloque as chaves sobre a mesa." },
        { english: "She laid the baby down.", portuguese: "Ela colocou o bebê para deitar." },
      ],
    },
  ],
  quickRule:
    "Em questões de prova, confira o tempo verbal e procure o objeto direto. Yesterday I lay down significa “Ontem me deitei”. Yesterday I laid the book on the table significa “Ontem coloquei o livro sobre a mesa”. Lie no sentido de “mentir” tem outras formas: lie, lied, lied.",
} satisfies VocabularyTopic;
