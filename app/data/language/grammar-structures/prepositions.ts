import type { GrammarTopic } from "../grammar/types";

export const prepositions = {
  id: "prepositions",
  title: "Prepositions",
  description: "Use in, on e at para tempo e lugar e entenda a diferença entre since e for.",
  introduction:
    "Em português, a mesma preposição aparece em expressões como “em julho”, “na segunda-feira” e “na estação”. Em inglês, a escolha depende do contexto. Algumas palavras também pedem uma preposição específica, como depend on e married to.",
  usages: [
    {
      title: "In, on, at · Tempo",
      meaning: "Use in para períodos mais amplos, on para dias e datas e at para horários e expressões como at noon.",
      pattern: "in + mês/ano · on + dia/data · at + horário",
      examples: [
        { english: "We’re traveling in July.", portuguese: "Vamos viajar em julho." },
        { english: "The meeting is on Monday.", portuguese: "A reunião é na segunda-feira." },
        { english: "The train leaves at 5 p.m.", portuguese: "O trem sai às cinco da tarde." },
      ],
    },
    {
      title: "In, on, at · Lugar",
      meaning: "Use in para áreas e espaços delimitados, on para superfícies e nomes de ruas e at para indicar um ponto, um endereço completo ou o local de uma atividade.",
      pattern: "in London · on the table · at the station",
      examples: [
        { english: "She lives in London.", portuguese: "Ela mora em Londres." },
        { english: "The keys are on the table.", portuguese: "As chaves estão na mesa." },
        { english: "The café is on Main Street.", portuguese: "O café fica na Main Street." },
        { english: "Meet me at 123 Main Street.", portuguese: "Me encontre no número 123 da Main Street." },
      ],
    },
    {
      title: "Since ou for?",
      meaning: "Since marca quando algo começou. For indica quanto tempo durou ou vem durando. Quando a situação começou no passado e continua até agora, o present perfect é comum.",
      pattern: "since + ponto de partida · for + duração",
      examples: [
        { english: "I’ve lived here since 2018.", portuguese: "Moro aqui desde 2018." },
        { english: "I’ve lived here for eight years.", portuguese: "Moro aqui há oito anos." },
        { english: "I lived there for two years.", portuguese: "Morei lá por dois anos." },
      ],
    },
  ],
  warnings: [
    {
      title: "Erros comuns",
      explanation:
        "Compare as frases. O português pode sugerir outra preposição ou nenhuma. Aprenda as combinações como parte da expressão.",
      examples: [
        {
          incorrect: "She’s married with John.",
          english: "She’s married to John.",
          portuguese: "Ela é casada com John.",
        },
        {
          incorrect: "It depends of the weather.",
          english: "It depends on the weather.",
          portuguese: "Depende do tempo.",
        },
        {
          incorrect: "I’m interested on photography.",
          english: "I’m interested in photography.",
          portuguese: "Tenho interesse em fotografia.",
        },
        {
          incorrect: "She’s good in math.",
          english: "She’s good at math.",
          portuguese: "Ela é boa em matemática.",
        },
        {
          incorrect: "I listen music every day.",
          english: "I listen to music every day.",
          portuguese: "Eu ouço música todos os dias.",
        },
        {
          incorrect: "I’m waiting you.",
          english: "I’m waiting for you.",
          portuguese: "Estou esperando você.",
        },
        {
          incorrect: "He asked me a help.",
          english: "He asked me for help.",
          portuguese: "Ele me pediu ajuda.",
        },
        {
          incorrect: "We arrived to London yesterday.",
          english: "We arrived in London yesterday.",
          portuguese: "Chegamos a Londres ontem.",
        },
        {
          incorrect: "We arrived to the airport at noon.",
          english: "We arrived at the airport at noon.",
          portuguese: "Chegamos ao aeroporto ao meio-dia.",
        },
        {
          incorrect: "I go to work on bus.",
          english: "I go to work by bus.",
          portuguese: "Vou para o trabalho de ônibus.",
        },
        {
          incorrect: "See you in Monday.",
          english: "See you on Monday.",
          portuguese: "Até segunda-feira.",
        },
        {
          incorrect: "The class starts in 8 a.m.",
          english: "The class starts at 8 a.m.",
          portuguese: "A aula começa às oito da manhã.",
        },
        {
          incorrect: "I’ve lived here since three years.",
          english: "I’ve lived here for three years.",
          portuguese: "Moro aqui há três anos.",
        },
        {
          incorrect: "I’ve lived here for 2020.",
          english: "I’ve lived here since 2020.",
          portuguese: "Moro aqui desde 2020.",
        },
      ],
    },
  ],
  quickRule:
    "Para tempo, pense em período, dia ou horário. Para duração, pergunte quando começou (since) ou quanto tempo durou (for). Para expressões fixas, memorize a combinação inteira.",
} as const satisfies GrammarTopic;
