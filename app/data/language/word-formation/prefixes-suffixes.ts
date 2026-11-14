import type { GrammarExercise } from "../grammar/exercises/types";
import type { GrammarTopic } from "../grammar/types";

export const prefixesSuffixes = {
  id: "prefixes-suffixes",
  title: "Prefixes and Suffixes",
  description: "Forme e compreenda palavras acrescentando elementos antes ou depois de uma palavra-base.",
  introduction:
    "Na morfologia, derivação é a formação de uma palavra a partir de outra. Um prefixo vem antes da base e geralmente altera seu significado. Um sufixo vem depois e pode mudar a classe gramatical, como em dark (adjetivo) → darken (verbo).",
  usages: [
    {
      title: "Prefixos de negação e oposição",
      meaning: "Prefixos como un-, in-, im-, il-, ir- e dis- podem dar à palavra um sentido negativo ou oposto.",
      pattern: "prefixo negativo + palavra-base",
      examples: [
        { english: "This answer is incorrect.", portuguese: "Esta resposta está incorreta." },
        { english: "They disagreed with the decision.", portuguese: "Eles discordaram da decisão." },
        { english: "The door was unlocked.", portuguese: "A porta estava destrancada." },
        { english: "Parking here is illegal.", portuguese: "É proibido estacionar aqui." },
        { english: "It is impossible to open this jar.", portuguese: "É impossível abrir este pote." },
        { english: "His work schedule is irregular.", portuguese: "O horário de trabalho dele é irregular." },
      ],
    },
    {
      title: "Prefixos de tempo, repetição e intensidade",
      meaning: "Entre os prefixos comuns estão pre- (antes), re- (novamente), over- (em excesso) e under- (insuficiente ou abaixo).",
      pattern: "pre-/re-/over-/under- + palavra-base",
      examples: [
        { english: "Please rewrite the sentence.", portuguese: "Por favor, reescreva a frase." },
        { english: "The meat is undercooked.", portuguese: "A carne está malpassada." },
        { english: "Preheat the oven before baking.", portuguese: "Preaqueça o forno antes de assar." },
        { english: "Try not to overfill the bottle.", portuguese: "Evite encher demais a garrafa." },
      ],
    },
    {
      title: "Substantivos com -ness e -hood",
      meaning: "-ness indica uma qualidade ou estado. -hood indica uma fase da vida, uma condição ou um vínculo.",
      pattern: "adjetivo + -ness → substantivo (dark → darkness) · substantivo + -hood → substantivo (child → childhood)",
      examples: [
        { english: "The room was in complete darkness.", portuguese: "O quarto estava em completa escuridão." },
        { english: "Her kindness made everyone feel welcome.", portuguese: "A gentileza dela fez todos se sentirem bem-vindos." },
        { english: "She spent her childhood by the sea.", portuguese: "Ela passou a infância à beira-mar." },
        { english: "Their friendship lasted into adulthood.", portuguese: "A amizade deles durou até a vida adulta." },
        { english: "The room fell silent, and the sudden quietness surprised us.", portuguese: "O quarto ficou em silêncio, e a tranquilidade repentina nos surpreendeu." },
      ],
    },
    {
      title: "Outros sufixos de substantivos",
      meaning: "-ment e -tion podem formar substantivos que indicam uma ação, um processo ou seu resultado.",
      pattern: "verbo + -ment/-tion → substantivo (develop → development · educate → education)",
      examples: [
        { english: "Education opens doors.", portuguese: "A educação abre portas." },
        { english: "The development of the app took six months.", portuguese: "O desenvolvimento do aplicativo levou seis meses." },
        { english: "The construction of the bridge began in May.", portuguese: "A construção da ponte começou em maio." },
      ],
    },
    {
      title: "Adjetivos com -ful, -less, -able e -ous",
      meaning: "-ful, escrito com um só l, indica presença de uma qualidade; -less indica ausência. -able indica possibilidade e -ous pode indicar uma característica.",
      pattern: "care → careful/careless · read → readable · danger → dangerous",
      examples: [
        { english: "Be careful with that glass.", portuguese: "Tenha cuidado com esse copo." },
        { english: "This information is useful.", portuguese: "Esta informação é útil." },
        { english: "It was a careless mistake.", portuguese: "Foi um erro por descuido." },
        { english: "The handwriting is readable.", portuguese: "A letra é legível." },
        { english: "The road is dangerous at night.", portuguese: "A estrada é perigosa à noite." },
      ],
    },
    {
      title: "Verbos com -en, -ize e -ify",
      meaning: "-en forma verbos a partir de alguns adjetivos e indica tornar ou ficar de determinada maneira. -ize e -ify também podem formar verbos.",
      pattern: "dark → darken · short → shorten · wide → widen · modern → modernize · simple → simplify",
      examples: [
        { english: "The sky darkened before the storm.", portuguese: "O céu escureceu antes da tempestade." },
        { english: "They widened the road.", portuguese: "Eles alargaram a estrada." },
        { english: "We need to simplify the instructions.", portuguese: "Precisamos simplificar as instruções." },
        { english: "Can you shorten this paragraph?", portuguese: "Você pode encurtar este parágrafo?" },
        { english: "They plan to modernize the library.", portuguese: "Eles pretendem modernizar a biblioteca." },
      ],
    },
    {
      title: "Advérbios com -ly",
      meaning: "-ly costuma formar advérbios que descrevem como uma ação é realizada.",
      pattern: "adjetivo + -ly → advérbio (clear → clearly)",
      examples: [
        { english: "She explained it clearly.", portuguese: "Ela explicou isso claramente." },
        { english: "He spoke softly.", portuguese: "Ele falou baixinho." },
        { english: "Read the instructions carefully.", portuguese: "Leia as instruções com atenção." },
      ],
    },
    {
      title: "Adjetivos em -ing e -ed",
      meaning: "Em pares como boring/bored, -ing descreve quem ou o que provoca a reação, enquanto -ed descreve quem a sente. Uma pessoa também pode provocar a reação, como em an inspiring teacher.",
      pattern: "an interesting book → the book is interesting · an interested reader → the reader is interested",
      examples: [
        { english: "The lecture was boring, so the students were bored.", portuguese: "A palestra foi entediante, por isso os alunos ficaram entediados." },
        { english: "We were surprised by the surprising result.", portuguese: "Ficamos surpresos com o resultado surpreendente." },
        { english: "She is an inspiring teacher. Her students feel inspired.", portuguese: "Ela é uma professora inspiradora. Seus alunos se sentem inspirados." },
      ],
    },
    {
      title: "-ing para nomear atividades e formar substantivos",
      meaning: "Uma expressão em -ing pode funcionar como sujeito ou complemento e apresentar uma atividade. Ela ainda pode ter objeto, como em reading books. Algumas palavras em -ing também são substantivos que nomeiam coisas ou eventos, como a painting ou a meeting, e podem ter plural.",
      pattern: "Reading books is fun (sujeito) · I enjoy reading books (complemento) · a painting / two paintings (substantivo)",
      examples: [
        { english: "Swimming helps me relax.", portuguese: "Nadar me ajuda a relaxar." },
        { english: "I enjoy reading books on the train.", portuguese: "Gosto de ler livros no trem." },
        { english: "She is good at solving puzzles.", portuguese: "Ela é boa em resolver quebra-cabeças." },
        { english: "The museum has three paintings by the same artist.", portuguese: "O museu tem três pinturas do mesmo artista." },
      ],
    },
    {
      title: "-ing em tempos contínuos",
      meaning: "Depois de uma forma do auxiliar be, o verbo em -ing pode indicar uma ação em andamento. Compare The film is boring, que descreve o filme, com The film is starting, que indica que ele está começando.",
      pattern: "sujeito + be + verbo em -ing",
      examples: [
        { english: "She is reading a book now.", portuguese: "Ela está lendo um livro agora." },
        { english: "They were swimming when it started to rain.", portuguese: "Eles estavam nadando quando começou a chover." },
      ],
    },
  ],
  warnings: [
    {
      title: "A grafia pode mudar",
      explanation:
        "Acrescentar um sufixo pode alterar as letras finais da palavra-base. Aprenda a palavra derivada completa em vez de acrescentar qualquer sufixo mecanicamente.",
      examples: [
        { english: "happy → happiness", portuguese: "feliz → felicidade" },
        { english: "possible → possibility", portuguese: "possível → possibilidade" },
        { english: "wide → widen", portuguese: "largo → alargar" },
        { english: "simple → simplify", portuguese: "simples → simplificar" },
      ],
    },
  ],
  quickRule:
    "Observe a posição: prefixos vêm antes da base; sufixos vêm depois. Em seguida, identifique como o elemento altera o sentido ou a classe gramatical.",
} as const satisfies GrammarTopic;

export const prefixesSuffixesExercises = [
  {
    id: "affix-meaning",
    title: "1. Significado dos afixos",
    type: "matching",
    instruction: "Selecione um item da coluna esquerda e depois sua correspondência na coluna direita.",
    pairs: [
      { left: "un-", right: "negação ou sentido oposto" },
      { left: "re-", right: "novamente" },
      { left: "pre-", right: "antes" },
      { left: "-less", right: "sem ou ausência de" },
      { left: "-ness", right: "estado ou qualidade" },
      { left: "-ly", right: "modo como uma ação acontece" },
      { left: "-en", right: "tornar ou ficar de certa maneira" },
      { left: "-hood", right: "fase da vida ou condição" },
      { left: "-ful", right: "presença de uma qualidade" },
      { left: "over-", right: "em excesso" },
    ],
  },
  {
    id: "affix-formation",
    title: "2. Formação de palavras",
    type: "fill",
    instruction: "Complete com a palavra derivada correta a partir da palavra entre parênteses.",
    showWordBank: false,
    blocks: [
      { block: [{ text: "Her " }, { blank: "kindness", placeholder: "kind" }, { text: " made everyone feel welcome. (kind)" }] },
      { block: [{ text: "Please " }, { blank: "rewrite", placeholder: "write" }, { text: " the final paragraph. (write)" }] },
      { block: [{ text: "This chair is very " }, { blank: "comfortable", placeholder: "comfort" }, { text: ". (comfort)" }] },
      { block: [{ text: "The instructions were " }, { blank: "unclear", placeholder: "clear" }, { text: ". (clear)" }] },
      { block: [{ text: "She answered the question " }, { blank: "carefully", placeholder: "careful" }, { text: ". (careful)" }] },
      { block: [{ text: "The sky began to " }, { blank: "darken", placeholder: "dark" }, { text: " as the storm approached. (dark)" }] },
      { block: [{ text: "He spent most of his " }, { blank: "childhood", placeholder: "child" }, { text: " in a small town. (child)" }] },
      { block: [{ text: "Can you " }, { blank: "simplify", placeholder: "simple" }, { text: " this explanation? (simple)" }] },
      { block: [{ text: "The tiny print is barely " }, { blank: "readable", placeholder: "read" }, { text: ". (read)" }] },
      { block: [{ text: "The team discussed the " }, { blank: "development", placeholder: "develop" }, { text: " of the new app. (develop)" }] },
      { block: [{ text: "I felt " }, { blank: "bored", placeholder: "bore" }, { text: " during the lecture. (bore)" }] },
      { block: [{ text: "The lecture was " }, { blank: "boring", placeholder: "bore" }, { text: " enough to make me yawn. (bore)" }] },
      { block: [{ text: "I enjoy " }, { blank: "swimming", placeholder: "swim" }, { text: " in the morning. (swim)" }] },
    ],
  },
  {
    id: "affix-word-class",
    title: "3. Classe e sentido das palavras",
    type: "radio",
    instruction: "Escolha a alternativa correta de acordo com a formação da palavra.",
    questions: [
      {
        question: "Which word is a noun formed from an adjective?",
        options: [
          { option: "happiness", isCorrect: true },
          { option: "happily" },
          { option: "unhappy" },
        ],
      },
      {
        question: "Which word means ‘to make or become wider’?",
        options: [
          { option: "widely" },
          { option: "widen", isCorrect: true },
          { option: "width" },
        ],
      },
      {
        question: "In ‘Reading books helps me relax’, what is the subject?",
        options: [
          { option: "Reading books", isCorrect: true },
          { option: "helps me" },
          { option: "relax" },
        ],
      },
      {
        question: "In which sentence does -ing form a countable noun?",
        options: [
          { option: "She is painting the wall." },
          { option: "The painting is on the wall.", isCorrect: true },
          { option: "The artist enjoys painting walls." },
        ],
      },
      {
        question: "Which sentence uses -ing as part of a continuous verb form?",
        options: [
          { option: "The story is exciting." },
          { option: "Reading is fun." },
          { option: "The children are reading.", isCorrect: true },
        ],
      },
      {
        question: "In the word overcook, what does over- mean?",
        options: [
          { option: "before" },
          { option: "again" },
          { option: "too much", isCorrect: true },
        ],
      },
      {
        question: "Which word describes something that causes danger?",
        options: [
          { option: "dangerous", isCorrect: true },
          { option: "dangerously" },
          { option: "danger" },
        ],
      },
      {
        question: "In the word careless, the suffix -less means:",
        options: [
          { option: "full of care" },
          { option: "without care", isCorrect: true },
          { option: "care again" },
        ],
      },
      {
        question: "Which word means to organize again?",
        options: [
          { option: "preorganize" },
          { option: "reorganize", isCorrect: true },
          { option: "organization" },
        ],
      },
      {
        question: "Which suffix commonly changes an adjective into an adverb?",
        options: [
          { option: "-ness" },
          { option: "-ment" },
          { option: "-ly", isCorrect: true },
        ],
      },
      {
        question: "Which spelling is correct?",
        options: [
          { option: "happyment" },
          { option: "happyness" },
          { option: "happiness", isCorrect: true },
        ],
      },
    ],
  },
] as const satisfies readonly GrammarExercise[];
