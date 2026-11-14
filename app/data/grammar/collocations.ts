import type { GrammarTopic } from "./types";

export const collocations = {
  id: "collocations",
  title: "Collocations",
  description: "Aprenda combinações de palavras que soam naturais em inglês.",
  introduction:
    "Collocations são palavras que costumam aparecer juntas. Em português, dizemos “tomar uma decisão” e “tomar um banho”. Em inglês, usamos make a decision e take a shower. Aprender a expressão inteira ajuda a escolher o verbo na hora de falar.",
  usages: [
    {
      title: "Verbo + substantivo",
      meaning:
        "O verbo faz parte da expressão. Em português, “fazer” aparece em “fazer a lição” e “fazer uma pergunta”. Em inglês, essas expressões usam verbos diferentes.",
      pattern: "do your homework · ask a question · make a mistake",
      examples: [
        { english: "I did my homework after dinner.", portuguese: "Fiz minha lição de casa depois do jantar." },
        { english: "Can I ask a question?", portuguese: "Posso fazer uma pergunta?" },
        { english: "Everyone makes mistakes.", portuguese: "Todo mundo comete erros." },
      ],
    },
    {
      title: "Adjetivo + substantivo",
      meaning:
        "O inglês costuma usar heavy para descrever chuva ou trânsito intensos e strong para descrever café forte.",
      pattern: "heavy rain · heavy traffic · strong coffee",
      examples: [
        { english: "We stayed home because of the heavy rain.", portuguese: "Ficamos em casa por causa da chuva forte." },
        { english: "We got stuck in heavy traffic.", portuguese: "Ficamos presos em um trânsito intenso." },
        { english: "I like strong coffee.", portuguese: "Gosto de café forte." },
      ],
    },
    {
      title: "Advérbio + adjetivo",
      meaning:
        "Alguns advérbios aparecem com frequência ao lado de certos adjetivos. Por exemplo, fast asleep descreve alguém que está dormindo profundamente.",
      pattern: "fast asleep · deeply concerned · fully aware",
      examples: [
        { english: "The baby is fast asleep.", portuguese: "O bebê está dormindo profundamente." },
        { english: "She’s deeply concerned about the cost.", portuguese: "Ela está muito preocupada com o custo." },
        { english: "We’re fully aware of the risks.", portuguese: "Estamos plenamente cientes dos riscos." },
      ],
    },
  ],
  warnings: [
    {
      title: "Common mistakes",
      explanation:
        "Veja como expressões como “tomar uma decisão”, “tirar uma foto” e “perder o ônibus” ficam em inglês.",
      examples: [
        { incorrect: "We need to do a decision.", english: "We need to make a decision.", portuguese: "Precisamos tomar uma decisão." },
        { incorrect: "Can you make a photo of us?", english: "Can you take a photo of us?", portuguese: "Você pode tirar uma foto nossa?" },
        { incorrect: "I lost the bus this morning.", english: "I missed the bus this morning.", portuguese: "Perdi o ônibus hoje de manhã." },
        { incorrect: "Please give attention to the instructions.", english: "Please pay attention to the instructions.", portuguese: "Por favor, preste atenção às instruções." },
        { incorrect: "Let’s make a short break.", english: "Let’s take a short break.", portuguese: "Vamos fazer uma pausa rápida." },
      ],
    },
  ],
  quickRule:
    "Ao aprender uma palavra nova, anote uma frase com uma combinação comum. Com decision, por exemplo, anote We need to make a decision.",
} as const satisfies GrammarTopic;
