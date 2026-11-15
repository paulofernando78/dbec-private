import type { VocabularyTopic } from "./types";

export const robVsSteal = {
  id: "rob-vs-steal",
  title: "Rob vs. Steal",
  description: "Aprenda a escolher o verbo de acordo com o foco: a vítima, o lugar ou o objeto levado.",
  introduction:
    "Rob e steal podem ser traduzidos como “roubar”, mas não recebem o mesmo complemento. Use rob antes da pessoa ou do lugar que sofreu o roubo. Use steal antes do objeto que foi levado.",
  usages: [
    {
      word: "Rob",
      meaning:
        "Destaca quem ou qual lugar sofreu o roubo. Por isso, o complemento direto é uma pessoa, um banco, uma loja, uma casa etc. Quando o objeto também é mencionado, pode-se usar rob someone of something.",
      pattern: "rob + pessoa / lugar · rob someone of something",
      examples: [
        { english: "The thieves robbed the bank.", portuguese: "Os ladrões roubaram o banco." },
        { english: "They robbed the tourist of his wallet.", portuguese: "Eles roubaram a carteira do turista." },
      ],
    },
    {
      word: "Steal",
      meaning:
        "Destaca aquilo que foi levado sem permissão. Por isso, o complemento direto é um objeto, dinheiro, uma ideia etc. A origem pode ser acrescentada com from.",
      pattern: "steal + objeto · steal something from someone / somewhere",
      examples: [
        { english: "Someone stole my bicycle.", portuguese: "Alguém roubou minha bicicleta." },
        { english: "They stole money from the bank.", portuguese: "Eles roubaram dinheiro do banco." },
      ],
    },
  ],
  quickRule:
    "Pergunte o que vem logo depois do verbo: pessoa ou lugar → rob; objeto levado → steal. Compare rob the bank com steal money from the bank.",
  image: {
    src: "/media/images/language/vocabulary/which-one/rob-vs-steal.avif?v=2",
    alt: "Em dois painéis, uma pessoa percebe sinais de que sua casa foi roubada e outra nota que seu livro desapareceu do banco do parque; os painéis estão identificados como ROB e STEAL.",
    width: 1774,
    height: 887,
  },
  practice: [
    { question: "The criminals ___ the small bank.", choices: ["stole", "robbed"], answer: "robbed" },
    { question: "Someone ___ my phone on the train.", choices: ["robbed", "stole"], answer: "stole" },
    { question: "They ___ him of his passport.", choices: ["robbed", "stole"], answer: "robbed" },
    { question: "Who ___ the painting from the gallery?", choices: ["robbed", "stole"], answer: "stole" },
    { question: "The store was ___ last night.", choices: ["stolen", "robbed"], answer: "robbed" },
  ],
} as const satisfies VocabularyTopic;
