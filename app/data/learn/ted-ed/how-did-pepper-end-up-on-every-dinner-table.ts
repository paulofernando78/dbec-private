import { content, mark, underline } from "@/helpers/content";
import { shuffle } from "@/utils/shuffle";

const words = [
  { word: "peppercorn", phonetic: "/ˈpep.ɚ.kɔːrn/", img: 0 },
  { word: "spice", phonetic: "/spaɪs/", img: 0 },
  { word: "piperine", phonetic: "/ˈpɪp.ə.riːn/", img: 0 },
  { word: "capsaicin", phonetic: "/kæpˈseɪ.ɪ.sɪn/", img: 0 },
  { word: "ransom", phonetic: "/ˈræn.səm/", img: 0 },
  { word: "garnish", phonetic: "/ˈɡɑːr.nɪʃ/", img: 0 },
  { word: "shaker", phonetic: "/ˈʃeɪ.kɚ/", img: 0 },
  { word: "trade", phonetic: "/ˈtreɪd/", img: 0 },
];

export const howDidPepperEndUpOnEveryDinnerTable = {
  metadata: {
    title: "C1-C2 Videos",
    subtitle: "TED-Ed",
    description: "The Spice That Conquered the World",
  },
  whiteboard: {
    title: "C1-C2 Videos",
    descriptions: ["The Spice That Conquered the World"],
  },
  sections: {
    beforeWatching: {
      type: "ol" as const,
      image:
        "/media/images/learn/ted-ed/how-did-pepper-end-up-on-every-dinner-table/before-watching/lead-in.avif?v=1",
      imageAlt:
        "Bowls of black peppercorns, salt and spices on a table beside fresh chilies.",
      instruction: "Discuss the questions below before watching the video.",
      items: [
        {
          suggestedAnswer:
            "Salt and pepper are the two I reach for without thinking, but I also use a lot of paprika and garlic.",
          content: [
            "Which spices are always in your kitchen, and which one could you not cook without?",
          ],
        },
        {
          suggestedAnswer:
            "When a product is rare or hard to transport, only rich people can afford it, so it becomes a way of showing status.",
          content: [
            "Some everyday ingredients were once luxuries. Why do you think that happens?",
          ],
        },
        {
          suggestedAnswer:
            "They show peppercorns, salt, dried spices and fresh chilies, so maybe they are comparing how different seasonings are used and how valuable each one was.",
          content: [
            "Look at the picture. What do these bowls tell us about how spices are used and valued?",
          ],
        },
      ],
    },
    vocabulary: { words },
    gist: {
      videoPlayer: {
        videoId: "aDblEBU41nA",
        title: "Why is pepper such a popular spice? - Carolyn Beans",
        instruction: "Watch the video and answer the question.",
      },
      radio: {
        exercise: {
          questions: [
            {
              question: "What is the video mainly about?",
              options: shuffle([
                {
                  option:
                    "How black pepper became a global commodity and ended up beside salt on tables around the world.",
                  isCorrect: true,
                },
                {
                  option:
                    "Why modern chefs should replace black pepper with stronger spices such as chili and Sichuan pepper.",
                  isCorrect: false,
                },
                {
                  option:
                    "How Portuguese sailors invented the first pepper plantations in South America.",
                  isCorrect: false,
                },
                {
                  option:
                    "Why black pepper is the most expensive spice in the world today.",
                  isCorrect: false,
                },
              ]),
            },
          ],
        },
      },
    },
    details: {
      radio: {
        instruction: "Watch again and listen for specific information.",
        exercise: {
          questions: shuffle([
            {
              question:
                "What were locals in Lisbon looking for when a trading ship struck a rock in 1606?",
              options: shuffle([
                {
                  option: "Black peppercorns floating on the water.",
                  isCorrect: true,
                },
                { option: "Precious metals and gemstones.", isCorrect: false },
                { option: "Silks and fine fabrics.", isCorrect: false },
                { option: "Barrels of wine from the ship.", isCorrect: false },
              ]),
            },
            {
              question: "How are black peppercorns produced?",
              options: shuffle([
                {
                  option:
                    "The fruits are picked before they ripen and left to dry and darken in the sun.",
                  isCorrect: true,
                },
                {
                  option:
                    "The fruits are boiled and then covered in black ash.",
                  isCorrect: false,
                },
                {
                  option:
                    "The seeds are removed and roasted until they turn black.",
                  isCorrect: false,
                },
                {
                  option:
                    "The vine is cut and the sap is dried into small balls.",
                  isCorrect: false,
                },
              ]),
            },
            {
              question:
                "What did the Visigoths demand when they captured Rome in 410 AD?",
              options: shuffle([
                {
                  option:
                    "More than 3,000 pounds of black peppercorns as part of the city's ransom.",
                  isCorrect: true,
                },
                {
                  option: "The keys to the city's main port.",
                  isCorrect: false,
                },
                {
                  option: "All the silk stored in the imperial palace.",
                  isCorrect: false,
                },
                {
                  option: "A direct sea route to India.",
                  isCorrect: false,
                },
              ]),
            },
            {
              question:
                "What changed for Lisbon in the late 15th century?",
              options: shuffle([
                {
                  option:
                    "Vasco da Gama opened a direct sea route to India, and Lisbon became Europe's pepper leader.",
                  isCorrect: true,
                },
                {
                  option:
                    "The city lost its pepper trade to Venice and Genoa.",
                  isCorrect: false,
                },
                {
                  option:
                    "The Portuguese stopped importing pepper from India.",
                  isCorrect: false,
                },
                {
                  option:
                    "A new law banned the sale of pepper in Portuguese ports.",
                  isCorrect: false,
                },
              ]),
            },
            {
              question: "Why did Europeans call chilies \"pepper\" too?",
              options: shuffle([
                {
                  option:
                    "They activate the same heat and pain receptors, through a stronger compound called capsaicin.",
                  isCorrect: true,
                },
                {
                  option: "They grow on the same tropical vine as black pepper.",
                  isCorrect: false,
                },
                {
                  option: "They were first sold in the same Portuguese markets.",
                  isCorrect: false,
                },
                {
                  option: "Their seeds were used as a substitute for salt.",
                  isCorrect: false,
                },
              ]),
            },
            {
              question:
                "Why did black pepper stop being a status symbol in the mid-17th century?",
              options: shuffle([
                {
                  option:
                    "Production spread beyond India, the price fell, and pepper became widely available.",
                  isCorrect: true,
                },
                {
                  option:
                    "European cooks decided that pepper had no flavour.",
                  isCorrect: false,
                },
                {
                  option:
                    "Chilies completely replaced black pepper in Europe.",
                  isCorrect: false,
                },
                {
                  option:
                    "A disease destroyed most of the pepper vines in Asia.",
                  isCorrect: false,
                },
              ]),
            },
          ]),
        },
      },
    },
    script: {
      content: [
        {
          en: [
            ...content({
              parts: [
                "In ",
                underline("1606"),
                ", a large trading ship struck a rock off the coast of Lisbon, Portugal. As the vessel's valuable contents floated to the surface, locals flocked to the sea to scavenge what they could. But it wasn't precious metals, silks, or gemstones they were after — it was black ",
                mark("peppercorns"),
                ".",
              ],
            }),
          ],
          pt: "Em 1606, um grande navio mercante bateu numa rocha ao largo da costa de Lisboa, em Portugal. Quando o valioso conteúdo da embarcação flutuou à superfície, os moradores correram para o mar para recolher o que pudessem. Mas não eram metais preciosos, sedas ou pedras preciosas o que procuravam — eram grãos de pimenta-do-reino.",
        },
        {
          en: [
            ...content({
              parts: [
                "Black peppercorns are the small, berry-like fruits of a tropical vine. The ",
                mark("spice"),
                " has a subtle wood and citrus flavor, and a not-so-subtle spicy kick that comes from ",
                mark("piperine"),
                ", a compound that binds to a heat and pain receptor on our tongues. Humans have sought out this peppery sensation for millennia.",
              ],
            }),
          ],
          pt: "Os grãos de pimenta-do-reino são os pequenos frutos, parecidos com bagas, de uma trepadeira tropical. A especiaria tem um sabor sutil de madeira e cítricos, e um ardor picante nada sutil que vem da piperina, um composto que se liga a um receptor de calor e dor na nossa língua. Os humanos buscam essa sensação picante há milênios.",
        },
        {
          en: [
            ...content({
              parts: [
                "Thousands of years ago, people on the ",
                underline("Malabar Coast"),
                " of what's now India began growing Piper nigrum, the black pepper that we eat today. In northeastern India, growers planted Piper longum, a sweeter relative that's now far less common.",
              ],
            }),
          ],
          pt: "Milhares de anos atrás, povos da Costa do Malabar, na atual Índia, começaram a cultivar a Piper nigrum, a pimenta-do-reino que comemos hoje. No nordeste da Índia, os cultivadores plantavam a Piper longum, uma parente mais doce que hoje é muito menos comum.",
        },
        {
          en: [
            ...content({
              parts: [
                "Black, green, red, and white peppercorns were all produced using the ",
                underline("same plant"),
                " by processing the fruit differently. To create black peppercorns, for example, growers picked the fruits before they ripened and left them to dry and darken in the sun.",
              ],
            }),
          ],
          pt: "Pimentas pretas, verdes, vermelhas e brancas eram todas produzidas com a mesma planta, processando o fruto de maneiras diferentes. Para produzir a pimenta preta, por exemplo, os cultivadores colhiam os frutos antes de amadurecerem e os deixavam secar e escurecer ao sol.",
        },
        {
          en: [
            ...content({
              parts: [
                "In India, pepper was prized, both as a culinary spice and as a medicinal plant. Ayurvedic texts from ",
                underline("8 millennia ago"),
                " praised its healing properties, especially for digestive issues.",
              ],
            }),
          ],
          pt: "Na Índia, a pimenta era muito valorizada, tanto como especiaria culinária quanto como planta medicinal. Textos ayurvédicos de 8 mil anos atrás elogiavam suas propriedades curativas, especialmente para problemas digestivos.",
        },
        {
          en: [
            ...content({
              parts: [
                "Early migrants and traders helped move pepper from India to Indonesia and beyond. Egyptians were early adopters — the spice was found in the nostrils of the ",
                underline("3,000-year-old mummy"),
                " of Pharaoh Ramesses II.",
              ],
            }),
          ],
          pt: "Migrantes e comerciantes antigos ajudaram a levar a pimenta da Índia para a Indonésia e além. Os egípcios foram adotantes precoces — a especiaria foi encontrada nas narinas da múmia de 3 mil anos do faraó Ramsés II.",
        },
        {
          en: [
            ...content({
              parts: [
                "Black pepper reached China and Rome over 2 millennia ago via the ",
                underline("Silk Road"),
                " and was quickly embraced. A Roman cookbook from the 4th or 5th century BCE called for pepper in ",
                underline("81% of the 400 recipes"),
                ".",
              ],
            }),
          ],
          pt: "A pimenta-do-reino chegou à China e a Roma há mais de 2 milênios pela Rota da Seda e foi rapidamente adotada. Um livro de receitas romano do século IV ou V a.C. pedia pimenta em 81% das 400 receitas.",
        },
        {
          en: [
            ...content({
              parts: [
                "And when Visigoths captured Rome in ",
                underline("410 AD"),
                ", they demanded over 3,000 pounds of black peppercorns as part of the city's ",
                mark("ransom"),
                ".",
              ],
            }),
          ],
          pt: "E quando os visigodos capturaram Roma, em 410 d.C., exigiram mais de 3 mil libras de pimenta-do-reino como parte do resgate da cidade.",
        },
        {
          en: [
            ...content({
              parts: [
                "In the Middle Ages, Alexandria, Venice, and Genoa grew rich on the pepper pouring in and out of their ports. The wealthy piled pepper, along with other spices, onto their food. Myths spread that the pepper grew on trees guarded by serpents — a justification for the high price.",
              ],
            }),
          ],
          pt: "Na Idade Média, Alexandria, Veneza e Gênova enriqueceram com a pimenta que entrava e saía de seus portos. Os ricos cobriam a comida de pimenta, junto com outras especiarias. Espalharam-se mitos de que a pimenta crescia em árvores guardadas por serpentes — uma justificativa para o preço alto.",
        },
        {
          en: [
            ...content({
              parts: [
                "In the late 15th century, Lisbon became Europe's new leader in the pepper ",
                mark("trade"),
                " after ",
                underline("Vasco da Gama"),
                " discovered a direct sea route connecting Portugal to India.",
              ],
            }),
          ],
          pt: "No final do século XV, Lisboa se tornou a nova líder europeia no comércio de pimenta depois que Vasco da Gama descobriu uma rota marítima direta ligando Portugal à Índia.",
        },
        {
          en: [
            ...content({
              parts: [
                "But this pepper dominance wasn't without contest. Over the following two centuries, Spain, England, Portugal, and Holland battled to gain control over spices and the people who grew them.",
              ],
            }),
          ],
          pt: "Mas essa hegemonia da pimenta não ficou sem disputa. Ao longo dos dois séculos seguintes, Espanha, Inglaterra, Portugal e Holanda lutaram para controlar as especiarias e as pessoas que as cultivavam.",
        },
        {
          en: [
            ...content({
              parts: [
                "Black pepper was also among the spices that sent ",
                underline("Christopher Columbus"),
                " searching for a new route to India. Upon landing in the Americas, he thought he'd found the spice — though he was actually biting into a much hotter, larger, and completely unrelated fruit: the chili.",
              ],
            }),
          ],
          pt: "A pimenta-do-reino também estava entre as especiarias que levaram Cristóvão Colombo a buscar uma nova rota para a Índia. Ao desembarcar nas Américas, ele achou que tinha encontrado a especiaria — mas estava na verdade mordendo um fruto muito mais picante, maior e completamente sem parentesco: a pimenta malagueta.",
        },
        {
          en: [
            ...content({
              parts: [
                "Experts believe that ancient civilizations in what is today Mexico first domesticated chilies many millennia earlier. Like black pepper, chilies activate heat and pain receptors, but with a more potent chemical compound called ",
                mark("capsaicin"),
                ", leading Europeans to dub this hot fruit \"pepper\" as well.",
              ],
            }),
          ],
          pt: "Especialistas acreditam que civilizações antigas do atual México domesticaram as pimentas malaguetas milênios antes. Como a pimenta-do-reino, elas ativam receptores de calor e dor, mas com um composto químico mais potente chamado capsaicina, o que levou os europeus a chamarem esse fruto ardido de \"pimenta\" também.",
        },
        {
          en: [
            ...content({
              parts: [
                "Unlike black pepper, chilies happily grew in a variety of climates, which soon made them the far cheaper option. In India, chilies were embraced, becoming a standard ingredient and ",
                mark("garnish"),
                ". And in China, chili peppers became synonymous with Sichuan cuisine, alongside Sichuan peppers, another unrelated spicy plant labeled \"pepper.\"",
              ],
            }),
          ],
          pt: "Ao contrário da pimenta-do-reino, as malaguetas cresciam bem em diversos climas, o que logo as tornou a opção muito mais barata. Na Índia, foram adotadas, tornando-se ingrediente e guarnição padrão. E na China, as pimentas ficaram sinônimo da culinária de Sichuan, ao lado da pimenta de Sichuan, outra planta picante sem parentesco rotulada de \"pimenta\".",
        },
        {
          en: [
            ...content({
              parts: [
                "By the mid-17th century, black pepper production had spread well beyond India and the cost of pepper fell. But while it lost its allure as a status symbol, it remained in wide use.",
              ],
            }),
          ],
          pt: "Em meados do século XVII, a produção de pimenta-do-reino já havia se espalhado muito além da Índia e o preço caiu. Mas, embora tenha perdido o fascínio de símbolo de status, continuou sendo amplamente usada.",
        },
        {
          en: [
            ...content({
              parts: [
                "In France, a new culinary movement favored recipes lacking spices, with the exception of two: ",
                underline("salt and pepper"),
                ". The trend spread, bringing the now seemingly inseparable pair to tabletops across Europe and North America.",
              ],
            }),
          ],
          pt: "Na França, um novo movimento culinário preferia receitas sem especiarias, com exceção de duas: sal e pimenta. A tendência se espalhou, levando o par hoje aparentemente inseparável às mesas de toda a Europa e da América do Norte.",
        },
        {
          en: [
            ...content({
              parts: [
                "Today, black pepper makes up ",
                underline("20% of the global spice trade"),
                ". It stands among many other heat options. We can spice up our meals with chilies in salsas, harissa, and gochujang. Or we could simply reach for the ",
                mark("pepper shaker"),
                ".",
              ],
            }),
          ],
          pt: "Hoje, a pimenta-do-reino representa 20% do comércio global de especiarias. Ela convive com muitas outras opções de ardor. Podemos apimentar as refeições com malaguetas em salsas, harissa e gochujang. Ou simplesmente pegar o pimenteiro.",
        },
        {
          en: [
            ...content({
              parts: [
                "So, how did salt come to join pepper at so many tables?",
              ],
            }),
          ],
          pt: "Então, como o sal veio se juntar à pimenta em tantas mesas?",
        },
      ],
    },
    practice: {
      guess: { words: shuffle(words) },
      guessFillInTheBlanks: {
        instruction:
          "Complete the sentences with the words from the Guess activity.",
        exercise: {
          blocks: shuffle([
            {
              block: [
                { text: "Each black " },
                { blank: "peppercorn" },
                { text: " is the dried fruit of a tropical vine." },
              ],
              lineBreak: true,
            },
            {
              block: [
                { text: "Cinnamon and " },
                { blank: "spice" },
                { text: " were once worth more than gold in Europe." },
              ],
              lineBreak: true,
            },
            {
              block: [
                { text: "The heat of black pepper comes from " },
                { blank: "piperine" },
                { text: "." },
              ],
              lineBreak: true,
            },
            {
              block: [
                { text: "Chilies are much hotter because of a compound called " },
                { blank: "capsaicin" },
                { text: "." },
              ],
              lineBreak: true,
            },
            {
              block: [
                { text: "The Visigoths demanded peppercorns as part of the city's " },
                { blank: "ransom" },
                { text: "." },
              ],
              lineBreak: true,
            },
            {
              block: [
                { text: "In India, chilies became a standard ingredient and " },
                { blank: "garnish" },
                { text: "." },
              ],
              lineBreak: true,
            },
            {
              block: [
                { text: "At the end of the meal, he simply reached for the " },
                { blank: "shaker" },
                { text: "." },
              ],
              lineBreak: true,
            },
            {
              block: [
                { text: "Pepper made up a large part of the global " },
                { blank: "trade" },
                { text: " for centuries." },
              ],
              lineBreak: true,
            },
          ]),
        },
      },
      fillInTheBlanks: {
        instruction: "Fill in the blanks with the correct information from the video.",
        exercise: {
          blocks: shuffle([
            {
              block: [
                { text: "In 1606, a trading ship struck a rock near " },
                { blank: "Lisbon" },
                { text: "." },
              ],
              lineBreak: true,
            },
            {
              block: [
                { text: "Pepper was first grown on the Malabar Coast of " },
                { blank: "India" },
                { text: "." },
              ],
              lineBreak: true,
            },
            {
              block: [
                { text: "A Roman cookbook used pepper in 81% of its " },
                { blank: "400" },
                { text: " recipes." },
              ],
              lineBreak: true,
            },
            {
              block: [
                { text: "In 410 AD, the Visigoths captured " },
                { blank: "Rome" },
                { text: "." },
              ],
              lineBreak: true,
            },
            {
              block: [
                { text: "Vasco da Gama opened a sea route from Portugal to " },
                { blank: "India" },
                { text: "." },
              ],
              lineBreak: true,
            },
            {
              block: [
                { text: "Today, black pepper makes up 20% of the global spice " },
                { blank: "trade" },
                { text: "." },
              ],
              lineBreak: true,
            },
          ]),
        },
      },
      unscramble: {
        instruction: "Unscramble the ideas from the lesson.",
        sentences: shuffle([
          {
            prompt: "from India / pepper / to Europe / travelled",
            answer: "Pepper travelled from India to Europe.",
          },
          {
            prompt: "in the sun / the fruits / to dry / were left",
            answer: "The fruits were left to dry in the sun.",
          },
          {
            prompt: "as part of the ransom / the Visigoths / peppercorns / demanded",
            answer: "The Visigoths demanded peppercorns as part of the ransom.",
          },
          {
            prompt: "much cheaper / chilies / than black pepper / became",
            answer: "Chilies became much cheaper than black pepper.",
          },
          {
            prompt: "beside salt / ended up / on dinner tables / black pepper",
            answer: "Black pepper ended up beside salt on dinner tables.",
          },
        ]),
      },
    },
    followUp: {
      list: {
        type: "ol" as const,
        instruction:
          "Discuss the questions below, using ideas and evidence from the video.",
        items: [
          {
            content: [
              "Why do you think a spice that was once a luxury became something people stop noticing?",
            ],
          },
          {
            content: [
              "The video says Europeans called chilies \"pepper\" too. What does this tell us about how names and labels travel?",
            ],
          },
          {
            content: [
              "Which matters more for a food's success today: taste, price, or habit? Defend your answer.",
            ],
          },
        ],
      },
    },
  },
};
