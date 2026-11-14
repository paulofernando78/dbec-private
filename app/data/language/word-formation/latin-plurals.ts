import type { GrammarExercise } from "../grammar/exercises/types";
import type { GrammarTopic } from "../grammar/types";

export const latinPlurals = {
  id: "latin-plurals",
  title: "Latin Plurals",
  description:
    "Aprenda quando palavras terminadas em -us formam o plural em -i e quando seguem o plural regular do inglês.",
  introduction:
    "Algumas palavras que chegaram ao inglês pelo latim preservam um plural latino, mas outras usam -es. Em vários casos, as duas formas são aceitas. Por isso, não transforme automaticamente toda palavra terminada em -us em uma forma terminada em -i.",
  usages: [
    {
      title: "Formas latinas comuns: -us → -i",
      meaning:
        "Algumas palavras latinas masculinas preservam o plural em -i no inglês formal e acadêmico.",
      pattern: "-us → -i",
      examples: [
        { english: "one alumnus → two alumni", portuguese: "um ex-aluno → dois ex-alunos" },
        { english: "one nucleus → several nuclei", portuguese: "um núcleo → vários núcleos" },
        { english: "one stimulus → many stimuli", portuguese: "um estímulo → muitos estímulos" },
      ],
    },
    {
      title: "Duas formas aceitas",
      meaning:
        "Algumas palavras aceitam tanto o plural latino quanto o plural regular do inglês. A preferência depende do contexto e do estilo.",
      pattern: "-us → -i ou -uses",
      examples: [
        { english: "cactus → cacti / cactuses", portuguese: "cacto → cactos" },
        { english: "fungus → fungi / funguses", portuguese: "fungo → fungos" },
        { english: "syllabus → syllabi / syllabuses", portuguese: "programa de curso → programas de curso" },
      ],
    },
    {
      title: "Plural regular em -es",
      meaning:
        "Muitas palavras terminadas em -us já pertencem plenamente ao vocabulário inglês e formam o plural regularmente com -es.",
      pattern: "-us → -uses",
      examples: [
        { english: "campus → campuses", portuguese: "campus → campi ou campus" },
        { english: "virus → viruses", portuguese: "vírus → vírus" },
        { english: "status → statuses", portuguese: "status → status" },
      ],
    },
  ],
  warnings: [
    {
      title: "Campus não vira campi em inglês padrão",
      explanation:
        "Embora campus tivesse campi como plural em latim, o plural normal em inglês é campuses. Campi pode aparecer em textos sobre latim, mas não é a escolha padrão para universidades modernas.",
      examples: [
        { english: "The university has three campuses.", portuguese: "A universidade tem três campi." },
        { english: "Not: The university has three campi.", portuguese: "Evite campi nessa frase em inglês." },
      ],
    },
    {
      title: "Não aplique -i a qualquer palavra terminada em -us",
      explanation:
        "Virus forma viruses e status forma statuses. Octopus veio do grego: octopuses é a forma inglesa mais segura; octopi é comum, mas não é um plural latino historicamente regular.",
      examples: [
        { english: "Computer viruses spread quickly.", portuguese: "Vírus de computador se espalham rapidamente." },
        { english: "We saw two octopuses.", portuguese: "Vimos dois polvos." },
      ],
    },
  ],
  quickRule:
    "Memorize cada palavra: use alumni, nuclei e stimuli; aceite cacti/cactuses e fungi/funguses; use campuses, viruses, statuses e, de preferência, octopuses.",
} as const satisfies GrammarTopic;

export const latinPluralsExercises = [
  {
    id: "latin-plural-matching",
    title: "1. Singular e plural",
    type: "matching",
    instruction: "Associe cada forma singular ao plural mais adequado.",
    pairs: [
      { left: "campus", right: "campuses" },
      { left: "cactus", right: "cacti / cactuses" },
      { left: "nucleus", right: "nuclei" },
      { left: "stimulus", right: "stimuli" },
      { left: "virus", right: "viruses" },
      { left: "octopus", right: "octopuses" },
    ],
  },
  {
    id: "latin-plural-choice",
    title: "2. Escolha a forma correta",
    type: "radio",
    instruction: "Escolha o plural mais adequado no inglês atual.",
    questions: [
      {
        question: "The university has two ___.",
        options: [
          { option: "campi" },
          { option: "campuses", isCorrect: true },
          { option: "campus" },
        ],
      },
      {
        question: "The laboratory examined the cell ___.",
        options: [
          { option: "nucleuses" },
          { option: "nuclei", isCorrect: true },
          { option: "nucleus" },
        ],
      },
      {
        question: "Which two plurals are both accepted?",
        options: [
          { option: "cacti and cactuses", isCorrect: true },
          { option: "viri and viruses" },
          { option: "stati and statuses" },
        ],
      },
      {
        question: "Which plural is the safest standard choice?",
        options: [
          { option: "octopi" },
          { option: "octopuses", isCorrect: true },
          { option: "octopus" },
        ],
      },
    ],
  },
  {
    id: "latin-plural-correction",
    title: "3. Correção de erros",
    type: "error-correction",
    items: [
      {
        sentence: "Our company has offices on three campi.",
        answer: "Our company has offices on three campuses.",
        explanation: "Em inglês padrão, o plural de campus é campuses.",
      },
      {
        sentence: "These computer viri are dangerous.",
        answer: "These computer viruses are dangerous.",
        explanation: "O plural inglês de virus é viruses, não viri.",
      },
      {
        sentence: "The experiment used several stimuluses.",
        answer: "The experiment used several stimuli.",
        explanation: "Stimulus normalmente preserva o plural latino stimuli.",
      },
      {
        sentence: "The report compares the current stati of the projects.",
        answer: "The report compares the current statuses of the projects.",
        explanation: "O plural padrão de status é statuses.",
      },
    ],
  },
] as const satisfies readonly GrammarExercise[];
