import type { GrammarExercise } from "../grammar/exercises/types";
import type { GrammarTopic } from "../grammar/types";
import { bold, mark } from "@/helpers/content";

export const prefixesSuffixes = {
  id: "prefixes-suffixes",
  title: "Prefixos e sufixos",
  englishTitle: "Prefixes and Suffixes",
  description: "Forme e compreenda palavras acrescentando elementos antes ou depois de uma palavra-base.",
  introduction:
    "Na morfologia, derivação é a formação de uma palavra a partir de outra. Um prefixo vem antes da base e geralmente altera seu significado. Um sufixo vem depois e pode mudar a classe gramatical, como em dark (adjetivo) → darken (verbo).",
  usages: [
    {
      title: "Prefixos de negação e oposição",
      meaning: "Prefixos como un-, in-, im-, il-, ir- e dis- podem dar à palavra um sentido negativo ou oposto.",
      pattern: "prefixo negativo + palavra-base",
      examples: [
        { english: "This answer is incorrect.", englishContent: ["This answer is ", mark("incorrect"), "."], portuguese: "Esta resposta está incorreta." },
        { english: "They disagreed with the decision.", englishContent: ["They ", mark("disagreed"), " with the decision."], portuguese: "Eles discordaram da decisão." },
        { english: "The door was unlocked.", englishContent: ["The door was ", mark("unlocked"), "."], portuguese: "A porta estava destrancada." },
        { english: "Parking here is illegal.", englishContent: ["Parking here is ", mark("illegal"), "."], portuguese: "É proibido estacionar aqui." },
        { english: "It is impossible to open this jar.", englishContent: ["It is ", mark("impossible"), " to open this jar."], portuguese: "É impossível abrir este pote." },
        { english: "His work schedule is irregular.", englishContent: ["His work schedule is ", mark("irregular"), "."], portuguese: "O horário de trabalho dele é irregular." },
      ],
    },
    {
      title: "Prefixos de tempo, repetição e intensidade",
      meaning: "Entre os prefixos comuns estão pre- (antes), re- (novamente), over- (em excesso) e under- (insuficiente ou abaixo).",
      pattern: "pre-/re-/over-/under- + palavra-base",
      examples: [
        { english: "Please rewrite the sentence.", englishContent: ["Please ", mark("rewrite"), " the sentence."], portuguese: "Por favor, reescreva a frase." },
        { english: "The meat is undercooked.", englishContent: ["The meat is ", mark("undercooked"), "."], portuguese: "A carne está malpassada." },
        { english: "Preheat the oven before baking.", englishContent: [mark("Preheat"), " the oven before baking."], portuguese: "Preaqueça o forno antes de assar." },
        { english: "Try not to overfill the bottle.", englishContent: ["Try not to ", mark("overfill"), " the bottle."], portuguese: "Evite encher demais a garrafa." },
      ],
    },
    {
      title: "Substantivos com -ness e -hood",
      meaning: "-ness indica uma qualidade ou estado. -hood indica uma fase da vida, uma condição ou um vínculo.",
      pattern: "adjetivo + -ness → substantivo (dark → darkness) · substantivo + -hood → substantivo (child → childhood)",
      examples: [
        { english: "Her happiness was obvious.", englishContent: ["Her ", mark("happiness"), " was obvious."], portuguese: "A felicidade dela era evidente." },
        { english: "The easiness of the task surprised us.", englishContent: ["The ", mark("easiness"), " of the task surprised us."], portuguese: "A facilidade da tarefa nos surpreendeu." },
        { english: "Loneliness can affect anyone.", englishContent: [mark("Loneliness"), " can affect anyone."], portuguese: "A solidão pode afetar qualquer pessoa." },
        { english: "The room was in complete darkness.", englishContent: ["The room was in complete ", mark("darkness"), "."], portuguese: "O quarto estava em completa escuridão." },
        { english: "Her kindness made everyone feel welcome.", englishContent: ["Her ", mark("kindness"), " made everyone feel welcome."], portuguese: "A gentileza dela fez todos se sentirem bem-vindos." },
        { english: "She spent her childhood by the sea.", englishContent: ["She spent her ", mark("childhood"), " by the sea."], portuguese: "Ela passou a infância à beira-mar." },
        { english: "Their friendship lasted into adulthood.", englishContent: ["Their ", mark("friendship"), " lasted into ", mark("adulthood"), "."], portuguese: "A amizade deles durou até a vida adulta." },
        { english: "The room fell silent, and the sudden quietness surprised us.", englishContent: ["The room fell silent, and the sudden ", mark("quietness"), " surprised us."], portuguese: "O quarto ficou em silêncio, e a tranquilidade repentina nos surpreendeu." },
      ],
    },
    {
      title: "Outros sufixos de substantivos",
      meaning: "-ment, -tion e -ity podem formar substantivos que indicam uma ação, um processo, uma qualidade ou seu resultado.",
      pattern: "develop → development · educate → education · possible → possibility",
      examples: [
        { english: "There is a possibility of rain.", englishContent: ["There is a ", mark("possibility"), " of rain."], portuguese: "Há possibilidade de chuva." },
        { english: "This job is a big responsibility.", englishContent: ["This job is a big ", mark("responsibility"), "."], portuguese: "Este trabalho é uma grande responsabilidade." },
        { english: "Physical activity is good for your health.", englishContent: ["Physical ", mark("activity"), " is good for your health."], portuguese: "A atividade física faz bem à saúde." },
        { english: "Education opens doors.", englishContent: [mark("Education"), " opens doors."], portuguese: "A educação abre portas." },
        { english: "The development of the app took six months.", englishContent: ["The ", mark("development"), " of the app took six months."], portuguese: "O desenvolvimento do aplicativo levou seis meses." },
        { english: "The construction of the bridge began in May.", englishContent: ["The ", mark("construction"), " of the bridge began in May."], portuguese: "A construção da ponte começou em maio." },
      ],
    },
    {
      title: "Adjetivos com -ful, -less, -able e -ous",
      meaning: "-ful, escrito com um só l, indica presença de uma qualidade; -less indica ausência. -able indica possibilidade e -ous pode indicar uma característica.",
      pattern: "care → careful/careless · read → readable · danger → dangerous",
      examples: [
        { english: "Be careful with that glass.", englishContent: ["Be ", mark("careful"), " with that glass."], portuguese: "Tenha cuidado com esse copo." },
        { english: "This information is useful.", englishContent: ["This information is ", mark("useful"), "."], portuguese: "Esta informação é útil." },
        { english: "It was a careless mistake.", englishContent: ["It was a ", mark("careless"), " mistake."], portuguese: "Foi um erro por descuido." },
        { english: "The handwriting is readable.", englishContent: ["The handwriting is ", mark("readable"), "."], portuguese: "A letra é legível." },
        { english: "The road is dangerous at night.", englishContent: ["The road is ", mark("dangerous"), " at night."], portuguese: "A estrada é perigosa à noite." },
      ],
    },
    {
      title: "Adjetivos com -y: palavras terminadas em -e",
      meaning: "O sufixo -y pode formar adjetivos com sentido de 'cheio de' ou 'com característica de'. Em muitos casos, o -e final da base desaparece antes de -y. Aprenda cada par como vocabulário: a semelhança entre heave e heavy não basta para aplicar essa formação a toda palavra terminada em -e.",
      pattern: "ease → easy · noise → noisy · grease → greasy · spice → spicy · ice → icy · shine → shiny · smoke → smoky · taste → tasty · wave → wavy",
      examples: [
        { english: "The instructions are easy to follow.", englishContent: ["The instructions are ", mark("easy"), " to follow."], portuguese: "As instruções são fáceis de seguir." },
        { english: "The street is noisy at night.", englishContent: ["The street is ", mark("noisy"), " at night."], portuguese: "A rua é barulhenta à noite." },
        { english: "The pan is greasy.", englishContent: ["The pan is ", mark("greasy"), "."], portuguese: "A frigideira está engordurada." },
        { english: "This soup is spicy.", englishContent: ["This soup is ", mark("spicy"), "."], portuguese: "Esta sopa é apimentada." },
        { english: "Be careful on the icy road.", englishContent: ["Be careful on the ", mark("icy"), " road."], portuguese: "Tenha cuidado na estrada coberta de gelo." },
        { english: "She has shiny shoes.", englishContent: ["She has ", mark("shiny"), " shoes."], portuguese: "Ela tem sapatos brilhantes." },
        { english: "The room was smoky.", englishContent: ["The room was ", mark("smoky"), "."], portuguese: "O cômodo estava cheio de fumaça." },
        { english: "This sauce is tasty.", englishContent: ["This sauce is ", mark("tasty"), "."], portuguese: "Este molho é saboroso." },
        { english: "She has wavy hair.", englishContent: ["She has ", mark("wavy"), " hair."], portuguese: "Ela tem cabelo ondulado." },
      ],
    },
    {
      title: "Verbos com -en, -ize e -ify",
      meaning: "-en forma verbos a partir de alguns adjetivos e indica tornar ou ficar de determinada maneira. -ize e -ify também podem formar verbos.",
      examples: [],
      groups: [
        {
          title: "Verbos com -en",
          pattern: "dark → darken · short → shorten · wide → widen · strength → strengthen · worse → worsen",
          examples: [
            { english: "The sky darkened before the storm.", englishContent: ["The sky ", mark("darkened"), " before the storm."], portuguese: "O céu escureceu antes da tempestade." },
            { english: "Can you shorten this paragraph?", englishContent: ["Can you ", mark("shorten"), " this paragraph?"], portuguese: "Você pode encurtar este parágrafo?" },
            { english: "They widened the road.", englishContent: ["They ", mark("widened"), " the road."], portuguese: "Eles alargaram a estrada." },
            { english: "Regular exercise strengthens your muscles.", englishContent: ["Regular exercise ", mark("strengthens"), " your muscles."], portuguese: "O exercício regular fortalece seus músculos." },
            { english: "The weather worsened overnight.", englishContent: ["The weather ", mark("worsened"), " overnight. · ", bold("Mais natural:"), " The weather got worse overnight."], portuguese: "O tempo piorou durante a noite." },
          ],
        },
        {
          title: "Verbos com -ize",
          pattern: "modern → modernize · final → finalize · priority → prioritize · standard → standardize",
          examples: [
            { english: "They plan to modernize the library.", englishContent: ["They plan to ", mark("modernize"), " the library."], portuguese: "Eles pretendem modernizar a biblioteca." },
            { english: "We need to finalize the report today.", englishContent: ["We need to ", mark("finalize"), " the report today. · ", bold("Mais natural:"), " We need to finish the report today."], portuguese: "Precisamos finalizar o relatório hoje." },
            { english: "You should prioritize the most urgent tasks.", englishContent: ["You should ", mark("prioritize"), " the most urgent tasks."], portuguese: "Você deve priorizar as tarefas mais urgentes." },
            { english: "The company standardized its procedures.", englishContent: ["The company ", mark("standardized"), " its procedures. · ", bold("Mais natural:"), " The company made its procedures consistent."], portuguese: "A empresa padronizou seus procedimentos." },
          ],
        },
        {
          title: "Verbos com -ify",
          pattern: "simple → simplify · clear → clarify · class → classify · pure → purify",
          examples: [
            { english: "We need to simplify the instructions.", englishContent: ["We need to ", mark("simplify"), " the instructions."], portuguese: "Precisamos simplificar as instruções." },
            { english: "Could you clarify that?", englishContent: ["Could you ", mark("clarify"), " that? · ", bold("Mais natural:"), " Can you explain that?"], portuguese: "Você poderia esclarecer isso?" },
            { english: "Scientists classify animals into groups.", englishContent: ["Scientists ", mark("classify"), " animals into groups."], portuguese: "Os cientistas classificam os animais em grupos." },
            { english: "This filter purifies the water.", englishContent: ["This filter ", mark("purifies"), " the water."], portuguese: "Este filtro purifica a água." },
          ],
        },
      ],
    },
    {
      title: "Advérbios com -ly",
      meaning: "-ly costuma formar advérbios que descrevem como uma ação é realizada.",
      pattern: "adjetivo + -ly → advérbio (clear → clearly)",
      examples: [
        { english: "She explained it clearly.", englishContent: ["She explained it ", mark("clearly"), "."], portuguese: "Ela explicou isso claramente." },
        { english: "He spoke softly.", englishContent: ["He spoke ", mark("softly"), "."], portuguese: "Ele falou baixinho." },
        { english: "Read the instructions carefully.", englishContent: ["Read the instructions ", mark("carefully"), "."], portuguese: "Leia as instruções com atenção." },
      ],
    },
    {
      title: "Adjetivos em -ing e -ed",
      meaning: "Em pares como boring/bored, -ing descreve quem ou o que provoca a reação, enquanto -ed descreve quem a sente. Uma pessoa também pode provocar a reação, como em an inspiring teacher.",
      pattern: "an interesting book → the book is interesting · an interested reader → the reader is interested",
      examples: [
        { english: "The lecture was boring, so the students were bored.", englishContent: ["The lecture was ", mark("boring"), ", so the students were ", mark("bored"), "."], portuguese: "A palestra foi entediante, por isso os alunos ficaram entediados." },
        { english: "We were surprised by the surprising result.", englishContent: ["We were ", mark("surprised"), " by the ", mark("surprising"), " result."], portuguese: "Ficamos surpresos com o resultado surpreendente." },
        { english: "She is an inspiring teacher. Her students feel inspired.", englishContent: ["She is an ", mark("inspiring"), " teacher. Her students feel ", mark("inspired"), "."], portuguese: "Ela é uma professora inspiradora. Seus alunos se sentem inspirados." },
      ],
    },
    {
      title: "-ing para nomear atividades e formar substantivos",
      meaning: "Uma forma em -ing pode nomear uma atividade ou funcionar como sujeito ou complemento.",
      pattern: "teaching → ensino · reading → leitura · listening → escuta · writing → escrita · learning → aprendizagem",
      examples: [
        { english: "Teaching requires patience.", englishContent: [mark("Teaching"), " requires patience."], portuguese: "O ensino exige paciência." },
        { english: "Reading improves your vocabulary.", englishContent: [mark("Reading"), " improves your vocabulary."], portuguese: "A leitura melhora seu vocabulário." },
        { english: "Listening is an important language skill.", englishContent: [mark("Listening"), " is an important language skill."], portuguese: "A escuta é uma habilidade linguística importante." },
        { english: "Writing takes practice.", englishContent: [mark("Writing"), " takes practice."], portuguese: "A escrita exige prática." },
        { english: "Learning takes time.", englishContent: [mark("Learning"), " takes time."], portuguese: "A aprendizagem leva tempo." },
        { english: "Swimming helps me relax.", englishContent: [mark("Swimming"), " helps me relax."], portuguese: "Nadar me ajuda a relaxar." },
        { english: "I enjoy reading books on the train.", englishContent: ["I enjoy ", mark("reading"), " books on the train."], portuguese: "Gosto de ler livros no trem." },
        { english: "She is good at solving puzzles.", englishContent: ["She is good at ", mark("solving"), " puzzles."], portuguese: "Ela é boa em resolver quebra-cabeças." },
        { english: "The museum has three paintings by the same artist.", englishContent: ["The museum has three ", mark("paintings"), " by the same artist."], portuguese: "O museu tem três pinturas do mesmo artista." },
      ],
    },
    {
      title: "-ing em tempos contínuos",
      meaning: "Depois de uma forma do auxiliar be, o verbo em -ing pode indicar uma ação em andamento. Compare The film is boring, que descreve o filme, com The film is starting, que indica que ele está começando.",
      pattern: "sujeito + be + verbo em -ing",
      examples: [
        { english: "She is reading a book now.", englishContent: ["She is ", mark("reading"), " a book now."], portuguese: "Ela está lendo um livro agora." },
        { english: "They were swimming when it started to rain.", englishContent: ["They were ", mark("swimming"), " when it started to rain."], portuguese: "Eles estavam nadando quando começou a chover." },
      ],
    },
  ],
  warnings: [] as NonNullable<GrammarTopic["warnings"]>,
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
      { block: [{ text: "The kitchen became " }, { blank: "smoky", placeholder: "smoke" }, { text: ". (smoke)" }] },
      { block: [{ text: "The road was " }, { blank: "icy", placeholder: "ice" }, { text: " this morning. (ice)" }] },
      { block: [{ text: "The room was too " }, { blank: "noisy", placeholder: "noise" }, { text: " to study. (noise)" }] },
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
        question: "Which adjective is formed from the noun spice?",
        options: [
          { option: "spicey" },
          { option: "spicy", isCorrect: true },
          { option: "spicely" },
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
