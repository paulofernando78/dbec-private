import type { GrammarTopic } from "../grammar/types";

export const punctuation = {
  id: "punctuation",
  title: "Punctuation",
  description: "Veja como uma vírgula pode mudar o sentido de uma frase.",
  introduction:
    "A vírgula ajuda o leitor a entender quais palavras funcionam juntas. Os quadrinhos mostram dois casos em que mudar a pontuação muda a mensagem.",
  usages: [
    {
      title: "Commas · Chamando alguém",
      meaning:
        "Quando falamos diretamente com alguém, separamos o nome ou a forma de chamar essa pessoa com uma vírgula. Em “Let’s eat, kids!”, kids indica com quem o dinossauro está falando. Sem a vírgula, kids vira o objeto de eat.",
      examples: [
        { english: "Let’s eat, kids!", portuguese: "Vamos comer, crianças!" },
        { english: "Let’s eat kids!", portuguese: "Vamos comer crianças!" },
      ],
      image: {
        src: "/media/images/language/grammar-structures/punctuation/lets-eat-kids.avif?v=2",
        alt: "Sem vírgula, o dinossauro persegue as crianças. Com vírgula, convida as crianças para comer à mesa.",
        width: 1123,
        height: 1401,
      },
    },
    {
      title: "Commas · Separando uma resposta",
      meaning:
        "Imagine que alguém pergunta “Are you done?” Em “No, more cake!”, No responde à pergunta e more cake é um pedido. Em “No more cake!”, no more funciona como um bloco. Dependendo do contexto, a frase informa que o bolo acabou ou indica que ninguém deve comer mais.",
      examples: [
        { english: "No, more cake!", portuguese: "Não, quero mais bolo!" },
        { english: "No more cake!", portuguese: "Não tem mais bolo! / Chega de bolo!" },
      ],
      image: {
        src: "/media/images/language/grammar-structures/punctuation/no-more-cake.avif?v=2",
        alt: "Com vírgula, o menino pede mais bolo. Sem vírgula, ele vê que o bolo acabou.",
        width: 1122,
        height: 1402,
      },
    },
  ],
  quickRule:
    "Use a vírgula para separar a pessoa com quem você fala ou uma resposta como yes ou no do restante da frase.",
} as const satisfies GrammarTopic;
