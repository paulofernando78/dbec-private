import type { GrammarTopic } from "../grammar/types";

export const toVsFor = {
  id: "to-vs-for",
  title: "To vs. For",
  description: "Aprenda a distinguir destino, destinatário, benefício e finalidade em inglês.",
  introduction: "To e for podem ser traduzidos como «para». Em inglês, a escolha depende da relação entre as palavras na frase.",
  usages: [
    {
      title: "To · destino ou destinatário",
      meaning: "Use to para indicar aonde alguém vai ou quem recebe algo.",
      examples: [
        { english: "I went to the library.", portuguese: "Fui à biblioteca." },
        { english: "I sent the file to Ana.", portuguese: "Enviei o arquivo para a Ana." },
      ],
    },
    {
      title: "To · opinião ou impressão",
      meaning: "Com seem, look e feel, use to me para indicar de quem é a impressão.",
      examples: [
        { english: "It seems important to me.", portuguese: "Isso me parece importante." },
        { english: "It looks attractive to me.", portuguese: "Isso me parece atraente." },
        { english: "It feels bad to me.", portuguese: "Isso me dá uma sensação ruim." },
      ],
    },
    {
      title: "For · benefício, efeito ou uso",
      meaning: "Use for para indicar quem se beneficia, quem é afetado ou para que serve um objeto. É comum com good, bad e useful.",
      examples: [
        { english: "I bought a book for Ana.", portuguese: "Comprei um livro para a Ana." },
        { english: "Eating vegetables is good for everyone.", portuguese: "Comer verduras e legumes faz bem para todo mundo." },
        { english: "Exercising regularly is good for me.", portuguese: "Fazer exercícios regularmente me faz bem." },
        { english: "Smoking is bad for everyone.", portuguese: "Fumar faz mal para todo mundo." },
        { english: "This tool is useful for me.", portuguese: "Esta ferramenta é útil para mim." },
        { english: "This knife is for cutting bread.", portuguese: "Esta faca serve para cortar pão." },
      ],
    },
    {
      title: "To + verbo · objetivo de uma ação",
      meaning: "Use to seguido do verbo na forma base para explicar por que você fez algo.",
      pattern: "action + to + base verb",
      examples: [
        { english: "I went to the library to study.", portuguese: "Fui à biblioteca para estudar." },
        { english: "I called Ana to ask a question.", portuguese: "Liguei para a Ana para fazer uma pergunta." },
      ],
    },
    {
      title: "For · duração",
      meaning: "Use for com um período de tempo para dizer quanto tempo algo dura.",
      examples: [
        { english: "We studied for two hours.", portuguese: "Estudamos por duas horas." },
      ],
    },
  ],
  warnings: [
    {
      title: "It looks good to me × It’s good for me",
      explanation: "To me indica a minha impressão. For me indica o efeito que algo tem sobre mim.",
      examples: [
        { english: "It looks good to me.", portuguese: "Isso me parece bom." },
        { english: "It’s good for me.", portuguese: "Isso me faz bem." },
      ],
    },
    {
      title: "Compare a mesma situação",
      explanation: "For Ana diz para quem o presente foi comprado. To Ana indica quem o recebeu.",
      examples: [
        { english: "I bought a gift for Ana.", portuguese: "Comprei um presente para a Ana." },
        { english: "I gave the gift to Ana.", portuguese: "Entreguei o presente à Ana." },
      ],
    },
  ],
  quickRule: "Destino, destinatário ou impressão? To. Benefício, efeito, uso ou duração? For. Para dizer o objetivo de uma ação, use to + verbo.",
} as const satisfies GrammarTopic;
