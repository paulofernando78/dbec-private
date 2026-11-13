import type { GrammarTopic } from "./types";

export const coreGrammarTopics = [
  {
    id: "who-and-what-questions",
    title: "Who and What Questions",
    description: "Aprenda a fazer perguntas sobre o sujeito e o objeto com who e what.",
    introduction:
      "Use who para perguntar sobre uma pessoa e what para perguntar sobre uma coisa ou um acontecimento. Nesta prática, observe quando usar do, does ou did no presente e no passado simples. Para saber se você precisa de do, does ou did, descubra qual parte da frase a resposta completa.",
    usages: [
      {
        title: "Perguntas sobre o sujeito",
        meaning:
          "Quando who ou what ocupa o lugar do sujeito, mantenha a ordem da frase afirmativa. No presente e no passado simples afirmativos, use a forma normal do verbo, sem acrescentar do, does ou did.",
        pattern: "who/what + verbo + restante da frase?",
        examples: [
          { english: "Who called you? — Paola called me.", portuguese: "Quem ligou para você? — A Paola ligou para mim." },
          { english: "What broke the window? — A ball broke it.", portuguese: "O que quebrou a janela? — Uma bola quebrou a janela." },
          { english: "Who opens the door? — Mrs. White opens it.", portuguese: "Quem abre a porta? — A Sra. White abre a porta." },
        ],
      },
      {
        title: "Perguntas sobre o objeto",
        meaning:
          "Quando a frase já tem um sujeito, como you ou Jessica, e a pergunta é sobre o objeto, use do ou does no presente simples e did no passado simples. Depois do auxiliar e do sujeito, use o verbo na forma base.",
        pattern: "who/what + do/does/did + sujeito + verbo na forma base?",
        examples: [
          { english: "Who did you call? — I called Paola.", portuguese: "Para quem você ligou? — Liguei para a Paola." },
          { english: "What did the ball break? — It broke the window.", portuguese: "O que a bola quebrou? — Quebrou a janela." },
          { english: "What does Jessica find? — She finds a phone.", portuguese: "O que Jessica encontra? — Ela encontra um celular." },
        ],
      },
    ],
    quickRule:
      "Complete a resposta primeiro. Em «___ called you», falta o sujeito: Who called you? Em «You called ___», falta o objeto: Who did you call?",
  },
  {
    id: "verb-be-present-past",
    title: "Verb Be: Present and Past",
    description: "Use o verbo be para identificar, descrever e localizar pessoas e coisas.",
    introduction:
      "O verbo be muda de acordo com o sujeito e conforme a frase se refere ao presente ou ao passado.",
    usages: [
      {
        title: "Presente: am, is, are",
        meaning:
          "Use am com I, is com he, she e it, e are com you, we e they.",
        pattern: "sujeito + am/is/are + complemento",
        examples: [
          { english: "I am ready.", portuguese: "Eu estou pronto." },
          { english: "They are at school.", portuguese: "Eles estão na escola." },
        ],
      },
      {
        title: "Passado: was, were",
        meaning:
          "Use was com I, he, she e it. Use were com you, we e they.",
        pattern: "sujeito + was/were + complemento",
        examples: [
          { english: "She was tired yesterday.", portuguese: "Ela estava cansada ontem." },
          { english: "We were in Recife last week.", portuguese: "Nós estávamos em Recife na semana passada." },
        ],
      },
      {
        title: "Negativas e perguntas",
        meaning:
          "Acrescente not nas negativas. Coloque be antes do sujeito para formar perguntas.",
        pattern: "sujeito + be + not · be + sujeito + complemento?",
        examples: [
          { english: "He isn't busy.", portuguese: "Ele não está ocupado." },
          { english: "Were you at home?", portuguese: "Você estava em casa?" },
        ],
      },
    ],
    quickRule:
      "O verbo be não usa do ou did: diga Is she ready? e Was he there?",
  },
  {
    id: "present-continuous",
    title: "Present Progressive",
    description: "Fale sobre ações em andamento, situações temporárias, mudanças e planos futuros.",
    introduction:
      "O present progressive, também chamado de present continuous, combina am, is ou are com um verbo terminado em -ing.",
    usages: [
      {
        title: "Ações acontecendo agora",
        meaning: "Use para algo que está acontecendo no momento da fala ou próximo dele.",
        pattern: "sujeito + am/is/are + verbo-ing",
        examples: [
          { english: "I'm studying right now.", portuguese: "Estou estudando agora." },
          { english: "They're waiting outside.", portuguese: "Eles estão esperando lá fora." },
        ],
      },
      {
        title: "Situações temporárias",
        meaning: "Use para situações verdadeiras por um período limitado.",
        pattern: "sujeito + be + verbo-ing + expressão de tempo temporária",
        examples: [
          { english: "She's working from home this week.", portuguese: "Ela está trabalhando de casa esta semana." },
          { english: "We're staying with friends.", portuguese: "Estamos hospedados com amigos." },
        ],
      },
      {
        title: "Mudanças ao longo do tempo",
        meaning: "Use para situações que estão se desenvolvendo ou mudando.",
        pattern: "sujeito + be + verbo-ing",
        examples: [
          { english: "The weather is getting warmer.", portuguese: "O clima está ficando mais quente." },
          { english: "Your English is improving.", portuguese: "Seu inglês está melhorando." },
        ],
      },
      {
        title: "Compromissos futuros",
        meaning: "Use para um plano futuro que já foi combinado ou organizado.",
        pattern: "sujeito + be + verbo-ing + tempo futuro",
        examples: [
          { english: "I'm meeting Ana tomorrow.", portuguese: "Vou encontrar a Ana amanhã." },
          { english: "We're flying on Friday.", portuguese: "Vamos viajar de avião na sexta-feira." },
        ],
      },
      {
        title: "Negativas e perguntas",
        meaning: "Acrescente not depois de be nas negativas. Coloque be antes do sujeito nas perguntas.",
        pattern: "sujeito + be + not + verbo-ing · be + sujeito + verbo-ing?",
        examples: [
          { english: "She isn't working today.", portuguese: "Ela não está trabalhando hoje." },
          { english: "Are you waiting for someone?", portuguese: "Você está esperando alguém?" },
        ],
      },
    ],
    warnings: [
      {
        title: "Verbos de estado",
        explanation:
          "Verbos que descrevem estados, como know, want, need, believe e understand, normalmente não são usados na forma progressiva.",
        examples: [
          { english: "I understand the question.", portuguese: "Eu entendo a pergunta." },
          { english: "She wants a new phone.", portuguese: "Ela quer um celular novo." },
        ],
      },
    ],
    quickRule:
      "Sempre use am, is ou are antes da forma em -ing: She is working, e não She working.",
  },
  {
    id: "simple-present",
    title: "Simple Present",
    description: "Descreva rotinas, ações repetidas, fatos e situações permanentes.",
    introduction:
      "O simple present expressa o que acontece habitualmente ou o que é verdadeiro de modo geral.",
    usages: [
      {
        title: "Hábitos e rotinas",
        meaning: "Use com expressões de frequência para ações repetidas.",
        pattern: "sujeito + verbo base · he/she/it + verbo-s",
        examples: [
          { english: "I exercise every morning.", portuguese: "Eu me exercito todas as manhãs." },
          { english: "He takes the bus to work.", portuguese: "Ele pega o ônibus para o trabalho." },
        ],
      },
      {
        title: "Fatos e situações permanentes",
        meaning: "Use para verdades gerais e estados relativamente permanentes.",
        pattern: "sujeito + verbo no simple present",
        examples: [
          { english: "Water boils at 100°C.", portuguese: "A água ferve a 100°C." },
          { english: "She lives in São Paulo.", portuguese: "Ela mora em São Paulo." },
        ],
      },
      {
        title: "Negativas e perguntas",
        meaning: "Use do ou does com a forma base do verbo principal.",
        pattern: "do/does + sujeito + verbo base? · sujeito + don't/doesn't + verbo base",
        examples: [
          { english: "Does he speak English?", portuguese: "Ele fala inglês?" },
          { english: "She doesn't drive.", portuguese: "Ela não dirige." },
        ],
      },
    ],
    quickRule:
      "Somente he, she e it recebem -s na afirmativa; depois de does ou doesn't, use o verbo na forma base.",
  },
  {
    id: "simple-past",
    title: "Simple Past",
    description: "Fale sobre ações concluídas e situações encerradas no passado.",
    introduction:
      "O simple past situa uma ação ou estado em um período já encerrado no passado.",
    usages: [
      {
        title: "Ações concluídas no passado",
        meaning: "Use a forma do passado quando a ação estiver concluída.",
        pattern: "sujeito + verbo regular-ed / forma irregular do passado",
        examples: [
          { english: "We watched a movie last night.", portuguese: "Assistimos a um filme ontem à noite." },
          { english: "She went to Salvador in July.", portuguese: "Ela foi a Salvador em julho." },
        ],
      },
      {
        title: "Sequência de ações passadas",
        meaning: "Use para acontecimentos consecutivos em uma narrativa.",
        pattern: "ação passada + ação passada + ação passada",
        examples: [
          { english: "He opened the door and walked inside.", portuguese: "Ele abriu a porta e entrou." },
          { english: "I woke up, got dressed, and left.", portuguese: "Acordei, me vesti e saí." },
        ],
      },
      {
        title: "Negativas e perguntas",
        meaning: "Use did com a forma base do verbo principal.",
        pattern: "did + sujeito + verbo base? · sujeito + didn't + verbo base",
        examples: [
          { english: "Did you call her?", portuguese: "Você ligou para ela?" },
          { english: "They didn't arrive early.", portuguese: "Eles não chegaram cedo." },
        ],
      },
    ],
    quickRule:
      "Depois de did ou didn't, use o verbo na forma base: Did she go?, e não Did she went?",
  },
  {
    id: "present-perfect",
    title: "Present Perfect",
    description: "Relacione ações e experiências passadas ao presente.",
    introduction:
      "O present perfect usa have ou has mais o particípio passado quando o resultado ou o período presente é relevante.",
    usages: [
      {
        title: "Experiências de vida",
        meaning: "Use para experiências sem informar exatamente quando aconteceram.",
        pattern: "sujeito + have/has + particípio passado",
        examples: [
          { english: "I've visited Argentina.", portuguese: "Eu já visitei a Argentina." },
          { english: "Has she ever tried sushi?", portuguese: "Ela já experimentou sushi?" },
        ],
      },
      {
        title: "Ações recentes e resultados no presente",
        meaning: "Use quando uma ação concluída apresenta um resultado no presente.",
        pattern: "have/has + just/already/not yet + particípio passado",
        examples: [
          { english: "He's just finished the report.", portuguese: "Ele acabou de terminar o relatório." },
          { english: "We haven't eaten yet.", portuguese: "Ainda não comemos." },
        ],
      },
      {
        title: "Períodos ainda não encerrados",
        meaning: "Use since para indicar o ponto inicial e for para indicar a duração.",
        pattern: "have/has + particípio passado + since/for",
        examples: [
          { english: "I've lived here for five years.", portuguese: "Moro aqui há cinco anos." },
          { english: "She's known him since 2022.", portuguese: "Ela o conhece desde 2022." },
        ],
      },
    ],
    quickRule:
      "Use o simple past com um tempo já encerrado, como yesterday ou in 2024.",
  },
  {
    id: "future-forms",
    title: "Simple Future: Will and Going To",
    description: "Escolha entre will e be going to para decisões, intenções, promessas e previsões.",
    introduction:
      "O inglês costuma usar will ou be going to para falar do futuro. A escolha depende de a ideia representar uma decisão espontânea, um plano anterior, uma promessa ou uma previsão.",
    usages: [
      {
        title: "Will: decisões, ofertas e promessas",
        meaning: "Use will para decisões tomadas no momento, ofertas, promessas e previsões baseadas em opinião.",
        pattern: "sujeito + will + verbo base",
        examples: [
          { english: "I'll help you with that.", portuguese: "Vou ajudar você com isso." },
          { english: "I think it'll be sunny.", portuguese: "Acho que fará sol." },
        ],
      },
      {
        title: "Be going to: planos e evidências",
        meaning: "Use para intenções anteriores e previsões baseadas em evidências presentes.",
        pattern: "sujeito + be + going to + verbo base",
        examples: [
          { english: "We're going to move next year.", portuguese: "Vamos nos mudar no próximo ano." },
          { english: "Look at the sky. It's going to rain.", portuguese: "Olhe para o céu. Vai chover." },
        ],
      },
      {
        title: "Negativas",
        meaning: "Coloque not depois de will ou da forma correta de be. Will not geralmente se contrai para won't.",
        pattern: "sujeito + won't + verbo base · sujeito + be + not + going to + verbo base",
        examples: [
          { english: "I won't forget your birthday.", portuguese: "Não vou esquecer seu aniversário." },
          { english: "She isn't going to buy it.", portuguese: "Ela não vai comprar isso." },
        ],
      },
      {
        title: "Perguntas",
        meaning: "Coloque will ou a forma correta de be antes do sujeito.",
        pattern: "will + sujeito + verbo base? · be + sujeito + going to + verbo base?",
        examples: [
          { english: "Will you call me later?", portuguese: "Você vai me ligar mais tarde?" },
          { english: "Are they going to travel?", portuguese: "Eles vão viajar?" },
        ],
      },
    ],
    warnings: [
      {
        title: "Will e going to nem sempre são intercambiáveis",
        explanation:
          "Use will para uma decisão tomada no momento da fala. Use going to quando o plano já existia antes da conversa ou quando uma evidência presente sustenta a previsão.",
        examples: [
          { english: "The phone is ringing. I'll answer it.", portuguese: "O telefone está tocando. Eu vou atender." },
          { english: "I've bought the tickets. We're going to travel in July.", portuguese: "Comprei as passagens. Vamos viajar em julho." },
        ],
      },
    ],
    quickRule:
      "Use will para uma decisão tomada agora ou uma opinião; use going to para uma intenção anterior ou evidência visível.",
  },
  {
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
  },
  {
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
  },
  {
    id: "modal-verbs",
    title: "Modal Verbs",
    description: "Expresse capacidade, possibilidade, permissão, conselho e obrigação.",
    introduction:
      "Os modal verbs aparecem antes da forma base e não mudam com he, she ou it.",
    usages: [
      {
        title: "Capacidade e possibilidade",
        meaning: "Use can para capacidade e may, might ou could para possibilidade.",
        pattern: "sujeito + can/may/might/could + verbo base",
        examples: [
          { english: "She can swim.", portuguese: "Ela sabe nadar." },
          { english: "It might rain later.", portuguese: "Talvez chova mais tarde." },
        ],
      },
      {
        title: "Conselho e obrigação",
        meaning: "Use should para conselhos e must ou have to para obrigação forte.",
        pattern: "sujeito + should/must + verbo base",
        examples: [
          { english: "You should get some rest.", portuguese: "Você deveria descansar." },
          { english: "Employees must wear an ID badge.", portuguese: "Os funcionários devem usar crachá." },
        ],
      },
      {
        title: "Permissão e pedidos",
        meaning: "Use can, could ou may para pedir permissão ou fazer pedidos.",
        pattern: "can/could/may + sujeito + verbo base?",
        examples: [
          { english: "Could you open the window?", portuguese: "Você poderia abrir a janela?" },
          { english: "May I come in?", portuguese: "Posso entrar?" },
        ],
      },
    ],
    warnings: [
      {
        title: "Maybe × may be",
        explanation:
          "Maybe é uma única palavra e significa talvez. May be é o modal may seguido do verbo be na forma base.",
        examples: [
          {
            english: "Maybe she is busy.",
            portuguese: "Talvez ela esteja ocupada.",
          },
          {
            english: "She may be busy.",
            portuguese: "Ela talvez esteja ocupada.",
          },
        ],
      },
    ],
    quickRule:
      "Use o verbo na forma base depois de um modal: She can drive, e não She can drives.",
  },
  {
    id: "conditionals",
    title: "Conditionals",
    description: "Descreva fatos, possibilidades, situações imaginárias e arrependimentos do passado.",
    introduction:
      "As orações condicionais relacionam uma condição, apresentada pela oração com if, ao seu resultado.",
    usages: [
      {
        title: "Zero e first conditional",
        meaning: "Use a zero conditional para fatos gerais e a first conditional para possibilidades futuras reais.",
        pattern: "if + presente, presente · if + presente, will + verbo base",
        examples: [
          { english: "If you heat ice, it melts.", portuguese: "Se você aquece gelo, ele derrete." },
          { english: "If it rains, we'll stay home.", portuguese: "Se chover, ficaremos em casa." },
        ],
      },
      {
        title: "Second conditional",
        meaning: "Use para situações presentes ou futuras imaginárias ou improváveis.",
        pattern: "if + simple past, would + verbo base",
        examples: [
          { english: "If I had more time, I'd travel more.", portuguese: "Se eu tivesse mais tempo, viajaria mais." },
          { english: "What would you do if you won?", portuguese: "O que você faria se ganhasse?" },
        ],
      },
      {
        title: "Third conditional",
        meaning: "Use para uma condição irreal no passado e seu resultado imaginado.",
        pattern: "if + past perfect, would have + particípio passado",
        examples: [
          { english: "If we'd left earlier, we wouldn't have missed the train.", portuguese: "Se tivéssemos saído antes, não teríamos perdido o trem." },
          { english: "She would have passed if she'd studied.", portuguese: "Ela teria passado se tivesse estudado." },
        ],
      },
    ],
    quickRule:
      "Normalmente, não use will diretamente depois de if em uma oração condicional.",
  },
  {
    id: "passive-voice",
    title: "Passive Voice",
    description: "Dê destaque à ação ou ao resultado, em vez de destacar quem realiza a ação.",
    introduction:
      "A passive voice usa be mais o particípio passado e é útil quando o agente é desconhecido, óbvio ou menos importante.",
    usages: [
      {
        title: "Simple Present",
        meaning: "Use am, is ou are mais o particípio passado para fatos e processos no presente.",
        pattern: "sujeito + am/is/are + particípio passado",
        examples: [
          { english: "Coffee is grown in Brazil.", portuguese: "Café é cultivado no Brasil." },
          { english: "The rooms are cleaned daily.", portuguese: "Os quartos são limpos diariamente." },
        ],
      },
      {
        title: "Simple Past",
        meaning: "Use was ou were mais o particípio passado para ações concluídas no passado.",
        pattern: "sujeito + was/were + particípio passado",
        examples: [
          { english: "The bridge was built in 1950.", portuguese: "A ponte foi construída em 1950." },
          { english: "The documents were sent yesterday.", portuguese: "Os documentos foram enviados ontem." },
        ],
      },
      {
        title: "Present Continuous",
        meaning: "A ação está em andamento no presente.",
        pattern: "sujeito + am/is/are being + particípio passado",
        examples: [
          { english: "The bridge is being repaired.", portuguese: "A ponte está sendo consertada." },
        ],
      },
      {
        title: "Present Perfect",
        meaning: "A ação aconteceu antes de agora e tem relevância no presente.",
        pattern: "sujeito + has/have been + particípio passado",
        examples: [
          { english: "The bridge has already been repaired.", portuguese: "A ponte já foi consertada." },
        ],
      },
      {
        title: "Present Perfect Continuous (uso raro)",
        meaning: "Enfatiza a duração até o presente. Na prática, prefira reformular na voz ativa quando possível.",
        pattern: "sujeito + has/have been being + particípio passado",
        examples: [
          { english: "The bridge has been being repaired since May.", portuguese: "A ponte vem sendo consertada desde maio." },
        ],
      },
      {
        title: "Past Continuous",
        meaning: "A ação estava em andamento em um momento passado.",
        pattern: "sujeito + was/were being + particípio passado",
        examples: [
          { english: "The bridge was being repaired when we arrived.", portuguese: "A ponte estava sendo consertada quando chegamos." },
        ],
      },
      {
        title: "Past Perfect",
        meaning: "A ação já havia acontecido antes de outro momento passado.",
        pattern: "sujeito + had been + particípio passado",
        examples: [
          { english: "The bridge had been repaired before the storm.", portuguese: "A ponte tinha sido consertada antes da tempestade." },
        ],
      },
      {
        title: "Past Perfect Continuous (uso raro)",
        meaning: "Enfatiza a duração até um momento passado. Na prática, prefira reformular na voz ativa quando possível.",
        pattern: "sujeito + had been being + particípio passado",
        examples: [
          { english: "The bridge had been being repaired for weeks before the storm.", portuguese: "A ponte vinha sendo consertada havia semanas antes da tempestade." },
        ],
      },
      {
        title: "Future Simple",
        meaning: "A ação acontecerá no futuro.",
        pattern: "sujeito + will be + particípio passado",
        examples: [
          { english: "The bridge will be repaired next year.", portuguese: "A ponte será consertada no ano que vem." },
        ],
      },
      {
        title: "Future Continuous (uso raro)",
        meaning: "A ação estará em andamento em um momento futuro. Na prática, prefira reformular na voz ativa quando possível.",
        pattern: "sujeito + will be being + particípio passado",
        examples: [
          { english: "The bridge will be being repaired this time tomorrow.", portuguese: "A ponte estará sendo consertada a esta hora amanhã." },
        ],
      },
      {
        title: "Future Perfect",
        meaning: "A ação estará concluída até um momento futuro.",
        pattern: "sujeito + will have been + particípio passado",
        examples: [
          { english: "The bridge will have been repaired by Friday.", portuguese: "A ponte terá sido consertada até sexta-feira." },
        ],
      },
      {
        title: "Future Perfect Continuous (uso raro)",
        meaning: "Enfatiza a duração até um momento futuro. Na prática, prefira reformular na voz ativa quando possível.",
        pattern: "sujeito + will have been being + particípio passado",
        examples: [
          { english: "By Friday, the bridge will have been being repaired for a month.", portuguese: "Na sexta-feira, fará um mês que a ponte vem sendo consertada." },
        ],
      },
      {
        title: "Indicação do agente",
        meaning: "Use by somente quando a pessoa ou coisa que realiza a ação for relevante.",
        pattern: "forma passiva + by + agente",
        examples: [
          { english: "The novel was written by George Orwell.", portuguese: "O romance foi escrito por George Orwell." },
          { english: "The window was broken.", portuguese: "A janela foi quebrada." },
        ],
      },
    ],
    quickRule:
      "Marque o tempo verbal em be; o verbo principal permanece no particípio passado.",
  },
  {
    id: "reported-speech",
    title: "Reported Speech",
    description: "Relate afirmações, perguntas e pedidos sem citar exatamente as palavras originais.",
    introduction:
      "O reported speech frequentemente altera pronomes, referências de tempo e tempos verbais para adequá-los ao contexto do relato.",
    usages: [
      {
        title: "Relato de afirmações",
        meaning: "Use say ou tell e, em geral, recue o tempo verbal original em um nível.",
        pattern: "said (that) + oração · told + pessoa + oração",
        examples: [
          { english: "“I'm tired.” → She said she was tired.", portuguese: "“Estou cansada.” → Ela disse que estava cansada." },
          { english: "He told me he had finished.", portuguese: "Ele me disse que tinha terminado." },
        ],
      },
      {
        title: "Relato de perguntas",
        meaning: "Use a ordem de uma frase afirmativa e omita do, does e did.",
        pattern: "asked + palavra interrogativa/if + sujeito + verbo",
        examples: [
          { english: "“Where do you live?” → She asked where I lived.", portuguese: "“Onde você mora?” → Ela perguntou onde eu morava." },
          { english: "“Are you ready?” → He asked if I was ready.", portuguese: "“Você está pronto?” → Ele perguntou se eu estava pronto." },
        ],
      },
      {
        title: "Relato de pedidos e ordens",
        meaning: "Use ask ou tell mais uma pessoa e o infinitivo com to.",
        pattern: "asked/told + pessoa + (not) to + verbo base",
        examples: [
          { english: "“Please wait.” → She asked me to wait.", portuguese: "“Por favor, espere.” → Ela pediu que eu esperasse." },
          { english: "“Don't touch it.” → He told us not to touch it.", portuguese: "“Não toque nisso.” → Ele nos disse para não tocar." },
        ],
      },
    ],
    quickRule:
      "Use say something, mas tell someone something; perguntas relatadas seguem a ordem de uma frase afirmativa.",
  },
  {
    id: "present-perfect-progressive",
    title: "Present Perfect Progressive",
    description: "Descreva ações que começaram no passado e continuam ou apresentam resultado no presente.",
    introduction:
      "O present perfect progressive usa have ou has been mais um verbo terminado em -ing.",
    usages: [
      {
        title: "Ações que continuam até agora",
        meaning: "Use quando uma atividade começou no passado e ainda está em andamento.",
        pattern: "sujeito + have/has been + verbo-ing + since/for",
        examples: [
          { english: "I've been studying for two hours.", portuguese: "Estou estudando há duas horas." },
          { english: "She's been working here since May.", portuguese: "Ela trabalha aqui desde maio." },
        ],
      },
      {
        title: "Atividade recente com resultado presente",
        meaning: "Use quando uma atividade recente explica algo que podemos observar agora.",
        pattern: "sujeito + have/has been + verbo-ing",
        examples: [
          { english: "It's been raining.", portuguese: "Tem chovido." },
          { english: "You've been running.", portuguese: "Você esteve correndo." },
        ],
      },
    ],
    quickRule: "Use have/has been + verbo-ing e destaque a atividade ou sua duração.",
  },
  {
    id: "past-perfect",
    title: "Past Perfect",
    description: "Mostre que uma ação passada aconteceu antes de outra ação ou momento no passado.",
    introduction:
      "O past perfect usa had mais o particípio passado para deixar claro qual acontecimento ocorreu primeiro.",
    usages: [
      {
        title: "Ação anterior no passado",
        meaning: "Use para uma ação concluída antes de outra ação passada.",
        pattern: "sujeito + had + particípio passado",
        examples: [
          { english: "The train had left before we arrived.", portuguese: "O trem tinha partido antes de chegarmos." },
          { english: "She had finished when I called.", portuguese: "Ela já tinha terminado quando liguei." },
        ],
      },
      {
        title: "Causa ou explicação no passado",
        meaning: "Use para explicar a causa anterior de uma situação passada.",
        pattern: "resultado passado + because + sujeito + had + particípio passado",
        examples: [
          { english: "He was tired because he hadn't slept.", portuguese: "Ele estava cansado porque não tinha dormido." },
          { english: "They knew the city because they had visited it before.", portuguese: "Eles conheciam a cidade porque já a tinham visitado." },
        ],
      },
    ],
    quickRule: "Use had + particípio passado para o primeiro de dois acontecimentos passados.",
  },
  {
    id: "past-perfect-progressive",
    title: "Past Perfect Progressive",
    description: "Enfatize a duração de uma atividade anterior a outro momento no passado.",
    introduction:
      "O past perfect progressive usa had been mais um verbo terminado em -ing.",
    usages: [
      {
        title: "Atividade contínua anterior a um acontecimento passado",
        meaning: "Use para uma atividade que continuou até outro momento no passado.",
        pattern: "sujeito + had been + verbo-ing + since/for",
        examples: [
          { english: "They had been waiting for an hour when the bus arrived.", portuguese: "Eles estavam esperando havia uma hora quando o ônibus chegou." },
          { english: "I'd been working there since January.", portuguese: "Eu trabalhava lá desde janeiro." },
        ],
      },
      {
        title: "Atividade passada com resultado visível",
        meaning: "Use quando uma atividade anterior explica uma condição posterior no passado.",
        pattern: "resultado passado + because + sujeito + had been + verbo-ing",
        examples: [
          { english: "The ground was wet because it had been raining.", portuguese: "O chão estava molhado porque tinha chovido." },
          { english: "She was tired because she had been studying.", portuguese: "Ela estava cansada porque estava estudando." },
        ],
      },
    ],
    quickRule: "Use had been + verbo-ing para enfatizar a duração antes de um momento passado.",
  },
] as const satisfies readonly GrammarTopic[];
