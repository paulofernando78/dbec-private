import type { VocabularyTopic } from "./types";

export const poisonousVsVenomous = {
  id: "poisonous-vs-venomous",
  title: "Poisonous vs. Venomous",
  description:
    "Compare duas formas de descrever seres ou substâncias tóxicas.",
  introduction:
    "Para interpretar a palavra, observe como a toxina entra em contato com o organismo.",
  usages: [
    {
      word: "Poisonous",
      meaning:
        "Pode causar intoxicação quando ingerido, tocado, inalado ou absorvido. Pode descrever plantas, fungos, substâncias e animais.",
      pattern: "poisonous + substantivo · be poisonous to + pessoa / animal",
      examples: [
        {
          english: "Those berries are poisonous, so don't eat them.",
          portuguese: "Essas frutas são venenosas, então não as coma.",
        },
        {
          english: "Some frogs have poisonous skin.",
          portuguese: "Alguns sapos têm a pele venenosa.",
        },
        {
          english: "The mushroom may be poisonous to humans.",
          portuguese: "O cogumelo pode ser venenoso para os seres humanos.",
        },
      ],
    },
    {
      word: "Venomous",
      meaning:
        "Descreve um animal capaz de injetar peçonha por meio de uma mordida, picada ou ferimento semelhante.",
      pattern: "venomous + animal · venomous bite / sting",
      examples: [
        {
          english: "The cobra is a venomous snake.",
          portuguese: "A cobra é uma serpente peçonhenta.",
        },
        {
          english: "A venomous spider bit his hand.",
          portuguese: "Uma aranha peçonhenta mordeu a mão dele.",
        },
        {
          english: "The scorpion delivers venom through its sting.",
          portuguese: "O escorpião injeta peçonha por meio do ferrão.",
        },
      ],
    },
  ],
  quickRule:
    "Em português, poisonous geralmente é “venenoso”. Para animais que injetam peçonha, venomous corresponde a “peçonhento”.",
  image: {
    src: "/media/images/language/vocabulary/which-one/poisonous-vs-venomous.avif?v=1",
    alt: "Um cogumelo venenoso em uma floresta e uma cobra peçonhenta em seu habitat natural.",
    width: 1774,
    height: 887,
  },
} satisfies VocabularyTopic;
