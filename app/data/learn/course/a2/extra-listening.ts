import type { UnitListeningContent } from "../extra-listening";

export const unitListening: Readonly<Record<number, UnitListeningContent>> = {
  "1": {
    "title": "At the Welcome Event",
    "dialogues": [
      {
        "lines": [
          {
            "speaker": "Rosa",
            "text": "Hi, I'm Rosa. Have we met?"
          },
          {
            "speaker": "Dan",
            "text": "I don't think so. I'm Dan, from the evening class."
          },
          {
            "speaker": "Rosa",
            "text": "Oh, I'm in the morning class."
          }
        ],
        "questions": [
          {
            "question": "Which class is Dan in?",
            "choices": [
              "The evening class",
              "The morning class",
              "An online class"
            ],
            "correct": 0
          },
          {
            "question": "Have Rosa and Dan met before?",
            "choices": [
              "Yes, in the morning class.",
              "Dan doesn't think so.",
              "Yes, in the art class."
            ],
            "correct": 1
          }
        ]
      },
      {
        "lines": [
          {
            "speaker": "Rosa",
            "text": "What do you like to do after class?"
          },
          {
            "speaker": "Dan",
            "text": "I usually draw. I'm taking an art class on Fridays."
          },
          {
            "speaker": "Rosa",
            "text": "I take photos. Maybe we can work together."
          }
        ],
        "questions": [
          {
            "question": "What does Dan study on Fridays?",
            "choices": [
              "Photography",
              "English",
              "Art"
            ],
            "correct": 2
          },
          {
            "question": "What does Rosa do after class?",
            "choices": [
              "She teaches art.",
              "She plays tennis.",
              "She takes photos."
            ],
            "correct": 2
          }
        ]
      }
    ]
  },
  "2": {
    "title": "A Busy Week",
    "dialogues": [
      {
        "lines": [
          {
            "speaker": "Ari",
            "text": "What do you do for work?"
          },
          {
            "speaker": "Nora",
            "text": "I design websites for local shops."
          },
          {
            "speaker": "Ari",
            "text": "Do you work from home?"
          },
          {
            "speaker": "Nora",
            "text": "Most days, but today I'm meeting a client."
          }
        ],
        "questions": [
          {
            "question": "What does the second speaker design?",
            "choices": [
              "Websites",
              "Clothes",
              "Buildings"
            ],
            "correct": 0
          },
          {
            "question": "Who is the designer meeting today?",
            "choices": [
              "A new assistant",
              "A friend",
              "A client"
            ],
            "correct": 2
          }
        ]
      },
      {
        "lines": [
          {
            "speaker": "Ari",
            "text": "Are you free for lunch?"
          },
          {
            "speaker": "Nora",
            "text": "Not today. I usually leave at noon, but I'm training a new assistant this week."
          },
          {
            "speaker": "Ari",
            "text": "Let's try next Monday."
          }
        ],
        "questions": [
          {
            "question": "Why can't the second speaker meet today?",
            "choices": [
              "They work from home",
              "They have Monday off",
              "They are training someone"
            ],
            "correct": 2
          },
          {
            "question": "When does the second speaker usually leave for lunch?",
            "choices": [
              "At noon",
              "At one",
              "At eleven"
            ],
            "correct": 0
          }
        ]
      }
    ]
  },
  "3": {
    "title": "Choosing a Backpack",
    "dialogues": [
      {
        "lines": [
          {
            "speaker": "Ben",
            "text": "How much is that green backpack?"
          },
          {
            "speaker": "Maya",
            "text": "It's forty dollars. The black one is on sale for thirty."
          },
          {
            "speaker": "Ben",
            "text": "Can I try the black one?"
          },
          {
            "speaker": "Maya",
            "text": "Of course."
          }
        ],
        "questions": [
          {
            "question": "Which bag is cheaper?",
            "choices": [
              "The black one",
              "The green one",
              "They cost the same"
            ],
            "correct": 0
          },
          {
            "question": "How much is the green bag?",
            "choices": [
              "Forty dollars",
              "Thirty dollars",
              "Twenty dollars"
            ],
            "correct": 0
          }
        ]
      },
      {
        "lines": [
          {
            "speaker": "Ben",
            "text": "This smaller bag is lighter, but my laptop won't fit."
          },
          {
            "speaker": "Maya",
            "text": "The larger one has a laptop pocket."
          },
          {
            "speaker": "Ben",
            "text": "I'll take the larger one, then."
          }
        ],
        "questions": [
          {
            "question": "Why does the shopper choose the larger bag?",
            "choices": [
              "It is lighter",
              "It is cheaper",
              "It fits the laptop"
            ],
            "correct": 2
          },
          {
            "question": "What is better about the smaller bag?",
            "choices": [
              "It has a laptop pocket.",
              "It is lighter.",
              "It costs less."
            ],
            "correct": 1
          }
        ]
      }
    ]
  },
  "4": {
    "title": "A Night Out",
    "dialogues": [
      {
        "lines": [
          {
            "speaker": "Lena",
            "text": "What kind of shows do you watch?"
          },
          {
            "speaker": "Jo",
            "text": "I like mysteries, but my sister prefers comedies."
          },
          {
            "speaker": "Lena",
            "text": "There's a new mystery series on tonight."
          }
        ],
        "questions": [
          {
            "question": "What kind of shows does the second speaker like?",
            "choices": [
              "Mysteries",
              "Comedies",
              "Sports shows"
            ],
            "correct": 0
          },
          {
            "question": "What kind of shows does Jo's sister prefer?",
            "choices": [
              "Mysteries",
              "Comedies",
              "Sports shows"
            ],
            "correct": 1
          }
        ]
      },
      {
        "lines": [
          {
            "speaker": "Lena",
            "text": "We're going to the comedy club on Friday. Want to join us?"
          },
          {
            "speaker": "Jo",
            "text": "I'd love to, but I'm working Friday. What about Saturday?"
          },
          {
            "speaker": "Lena",
            "text": "Saturday works. I'll get tickets."
          }
        ],
        "questions": [
          {
            "question": "When will they go to the club?",
            "choices": [
              "Friday",
              "Sunday",
              "Saturday"
            ],
            "correct": 2
          },
          {
            "question": "Why can't Jo go on Friday?",
            "choices": [
              "Jo has no money.",
              "The club is closed.",
              "Jo is working."
            ],
            "correct": 2
          }
        ]
      }
    ]
  },
  "5": {
    "title": "Sunday With the Family",
    "dialogues": [
      {
        "lines": [
          {
            "speaker": "Eva",
            "text": "Is that your aunt in the photo?"
          },
          {
            "speaker": "Leo",
            "text": "No, that's my cousin Lily. My aunt is behind her."
          },
          {
            "speaker": "Eva",
            "text": "Oh, the woman with the red hat?"
          },
          {
            "speaker": "Leo",
            "text": "Yes, that's her."
          }
        ],
        "questions": [
          {
            "question": "Who is wearing the red hat?",
            "choices": [
              "The aunt",
              "Lily",
              "The first speaker"
            ],
            "correct": 0
          },
          {
            "question": "Who is Lily?",
            "choices": [
              "Leo's aunt",
              "Leo's sister",
              "Leo's cousin"
            ],
            "correct": 2
          }
        ]
      },
      {
        "lines": [
          {
            "speaker": "Eva",
            "text": "Do you have a big family?"
          },
          {
            "speaker": "Leo",
            "text": "I have one brother, but I've got eight cousins."
          },
          {
            "speaker": "Eva",
            "text": "Do they live nearby?"
          },
          {
            "speaker": "Leo",
            "text": "Only two of them live in this town."
          }
        ],
        "questions": [
          {
            "question": "How many cousins live in town?",
            "choices": [
              "One",
              "Eight",
              "Two"
            ],
            "correct": 2
          },
          {
            "question": "How many cousins does Leo have?",
            "choices": [
              "Eight",
              "Two",
              "One"
            ],
            "correct": 0
          }
        ]
      }
    ]
  },
  "6": {
    "title": "Making Time to Move",
    "dialogues": [
      {
        "lines": [
          {
            "speaker": "Mina",
            "text": "Do you exercise after work?"
          },
          {
            "speaker": "Rob",
            "text": "I go climbing on Tuesdays. Do you want to come?"
          },
          {
            "speaker": "Mina",
            "text": "Sure. I usually swim, but I'd like to try climbing."
          }
        ],
        "questions": [
          {
            "question": "What does the second speaker do on Tuesdays?",
            "choices": [
              "Goes climbing",
              "Goes swimming",
              "Plays tennis"
            ],
            "correct": 0
          },
          {
            "question": "What does Mina usually do for exercise?",
            "choices": [
              "Swims",
              "Climbs",
              "Cycles"
            ],
            "correct": 0
          }
        ]
      },
      {
        "lines": [
          {
            "speaker": "Mina",
            "text": "How often do you ride your bike?"
          },
          {
            "speaker": "Rob",
            "text": "Every weekend if the weather is good."
          },
          {
            "speaker": "Mina",
            "text": "Even in winter?"
          },
          {
            "speaker": "Rob",
            "text": "Only once or twice a month then."
          }
        ],
        "questions": [
          {
            "question": "How often does the second speaker cycle in winter?",
            "choices": [
              "Every day",
              "Every weekend",
              "Once or twice a month"
            ],
            "correct": 2
          },
          {
            "question": "When does Rob cycle every weekend?",
            "choices": [
              "Only in winter.",
              "When the weather is good.",
              "When the weather is bad."
            ],
            "correct": 1
          }
        ]
      }
    ]
  },
  "7": {
    "title": "The Trip That Changed",
    "dialogues": [
      {
        "lines": [
          {
            "speaker": "Kim",
            "text": "What did you do yesterday?"
          },
          {
            "speaker": "Jo",
            "text": "I planned to go hiking, but it rained. I went to the museum instead."
          },
          {
            "speaker": "Kim",
            "text": "Was it good?"
          },
          {
            "speaker": "Jo",
            "text": "Yes, especially the photo exhibition."
          }
        ],
        "questions": [
          {
            "question": "Where did the second speaker go?",
            "choices": [
              "The museum",
              "The mountains",
              "The cinema"
            ],
            "correct": 0
          },
          {
            "question": "Why didn't Jo go hiking?",
            "choices": [
              "The museum was closed.",
              "It rained.",
              "The bus was late."
            ],
            "correct": 1
          }
        ]
      },
      {
        "lines": [
          {
            "speaker": "Kim",
            "text": "Did you enjoy your vacation?"
          },
          {
            "speaker": "Jo",
            "text": "Yes. We missed our ferry on the first day, but a fisherman took us across."
          },
          {
            "speaker": "Kim",
            "text": "That sounds like an adventure!"
          }
        ],
        "questions": [
          {
            "question": "How did they cross after missing the ferry?",
            "choices": [
              "They waited a day",
              "They drove around the island",
              "A fisherman took them"
            ],
            "correct": 2
          },
          {
            "question": "What did they miss on the first day?",
            "choices": [
              "Their flight",
              "Their hotel booking",
              "Their ferry"
            ],
            "correct": 2
          }
        ]
      }
    ]
  },
  "8": {
    "title": "A Walk Around the Neighborhood",
    "dialogues": [
      {
        "lines": [
          {
            "speaker": "Rae",
            "text": "Is there a grocery store around here?"
          },
          {
            "speaker": "Cam",
            "text": "Yes. There's one behind the post office, but it closes at six."
          },
          {
            "speaker": "Rae",
            "text": "Thanks. I'll go now."
          }
        ],
        "questions": [
          {
            "question": "Where is the grocery store?",
            "choices": [
              "Behind the post office",
              "Next to the station",
              "Across from the library"
            ],
            "correct": 0
          },
          {
            "question": "What time does the grocery store close?",
            "choices": [
              "At seven",
              "At eight",
              "At six"
            ],
            "correct": 2
          }
        ]
      },
      {
        "lines": [
          {
            "speaker": "Rae",
            "text": "What's your neighborhood like?"
          },
          {
            "speaker": "Cam",
            "text": "It's quiet during the week, but the market makes it busy on Saturdays."
          },
          {
            "speaker": "Rae",
            "text": "Is the market near your house?"
          },
          {
            "speaker": "Cam",
            "text": "Yes, I can walk there in five minutes."
          }
        ],
        "questions": [
          {
            "question": "What makes the neighborhood busy on Saturdays?",
            "choices": [
              "The station",
              "A football game",
              "The market"
            ],
            "correct": 2
          },
          {
            "question": "How long does it take Cam to walk to the market?",
            "choices": [
              "Five minutes",
              "Ten minutes",
              "Fifteen minutes"
            ],
            "correct": 0
          }
        ]
      }
    ]
  },
  "9": {
    "title": "Finding a Friend in the Crowd",
    "dialogues": [
      {
        "lines": [
          {
            "speaker": "Nia",
            "text": "What does your friend look like?"
          },
          {
            "speaker": "Kai",
            "text": "She's tall, with short curly hair. She's wearing a black jacket."
          },
          {
            "speaker": "Nia",
            "text": "Does she wear glasses?"
          },
          {
            "speaker": "Kai",
            "text": "Yes, round ones."
          }
        ],
        "questions": [
          {
            "question": "Which description fits the friend?",
            "choices": [
              "Tall with short curly hair",
              "Short with long straight hair",
              "Tall with long straight hair"
            ],
            "correct": 0
          },
          {
            "question": "What is Kai's friend wearing?",
            "choices": [
              "A black jacket",
              "A blue sweater",
              "A striped shirt"
            ],
            "correct": 0
          }
        ]
      },
      {
        "lines": [
          {
            "speaker": "Nia",
            "text": "Which person is your brother?"
          },
          {
            "speaker": "Kai",
            "text": "He's the one standing next to the window."
          },
          {
            "speaker": "Nia",
            "text": "The man in the blue sweater?"
          },
          {
            "speaker": "Kai",
            "text": "No, the one with the striped shirt."
          }
        ],
        "questions": [
          {
            "question": "What is the brother wearing?",
            "choices": [
              "A blue sweater",
              "A black jacket",
              "A striped shirt"
            ],
            "correct": 2
          },
          {
            "question": "Where is Kai's brother standing?",
            "choices": [
              "By the door",
              "Next to the window",
              "Near the stairs"
            ],
            "correct": 1
          }
        ]
      }
    ]
  },
  "10": {
    "title": "Trying Something New",
    "dialogues": [
      {
        "lines": [
          {
            "speaker": "Amy",
            "text": "Have you booked the class yet?"
          },
          {
            "speaker": "Ben",
            "text": "Not yet. I've chosen the day, but I haven't paid."
          },
          {
            "speaker": "Amy",
            "text": "You should pay today. There are only two places left."
          }
        ],
        "questions": [
          {
            "question": "What still needs to happen?",
            "choices": [
              "Payment",
              "Choosing a day",
              "Finding the class"
            ],
            "correct": 0
          },
          {
            "question": "Why does Amy recommend paying today?",
            "choices": [
              "The class starts today.",
              "Only two places are left.",
              "The price is lower today."
            ],
            "correct": 1
          }
        ]
      },
      {
        "lines": [
          {
            "speaker": "Amy",
            "text": "Have you ever tried surfing?"
          },
          {
            "speaker": "Ben",
            "text": "Yes, I tried it last summer, but I've never been sailing."
          },
          {
            "speaker": "Amy",
            "text": "Then let's try sailing together."
          }
        ],
        "questions": [
          {
            "question": "What has the second speaker never done?",
            "choices": [
              "Tried surfing",
              "Visited the coast",
              "Gone sailing"
            ],
            "correct": 2
          },
          {
            "question": "When did Ben try surfing?",
            "choices": [
              "Last week",
              "This morning",
              "Last summer"
            ],
            "correct": 2
          }
        ]
      }
    ]
  },
  "11": {
    "title": "A Visitor in Town",
    "dialogues": [
      {
        "lines": [
          {
            "speaker": "Mia",
            "text": "What is your hometown famous for?"
          },
          {
            "speaker": "Noah",
            "text": "It has an old bridge and a market by the river."
          },
          {
            "speaker": "Mia",
            "text": "When is the market open?"
          },
          {
            "speaker": "Noah",
            "text": "Every Sunday morning."
          }
        ],
        "questions": [
          {
            "question": "When can a visitor go to the market?",
            "choices": [
              "Sunday morning",
              "Saturday morning",
              "Sunday evening"
            ],
            "correct": 0
          },
          {
            "question": "Where is the market?",
            "choices": [
              "On the bridge",
              "Behind the museum",
              "By the river"
            ],
            "correct": 2
          }
        ]
      },
      {
        "lines": [
          {
            "speaker": "Mia",
            "text": "I've got one afternoon here. What should I see?"
          },
          {
            "speaker": "Noah",
            "text": "You should go to the art museum. Take the tram. Parking is difficult."
          },
          {
            "speaker": "Mia",
            "text": "Good idea. I'll leave the car at the hotel."
          }
        ],
        "questions": [
          {
            "question": "Why does the second speaker recommend taking the tram?",
            "choices": [
              "The tram is free",
              "The museum is far away",
              "Parking is difficult"
            ],
            "correct": 2
          },
          {
            "question": "Where will Mia leave the car?",
            "choices": [
              "At the hotel",
              "Outside the art museum",
              "At the tram stop"
            ],
            "correct": 0
          }
        ]
      }
    ]
  },
  "12": {
    "title": "A Visit to the Pharmacy",
    "dialogues": [
      {
        "lines": [
          {
            "speaker": "Alex",
            "text": "I have a cough and I can't sleep."
          },
          {
            "speaker": "Robin",
            "text": "Have you had it long?"
          },
          {
            "speaker": "Alex",
            "text": "Three days. I'll call the clinic if it gets worse."
          }
        ],
        "questions": [
          {
            "question": "How long has the cough lasted?",
            "choices": [
              "Three days",
              "One day",
              "A week"
            ],
            "correct": 0
          },
          {
            "question": "What problem does Alex have at night?",
            "choices": [
              "Alex can't sleep.",
              "Alex can't walk.",
              "Alex can't eat."
            ],
            "correct": 0
          }
        ]
      },
      {
        "lines": [
          {
            "speaker": "Alex",
            "text": "Excuse me. Do you have any bandages?"
          },
          {
            "speaker": "Robin",
            "text": "Yes, on the second shelf. What size do you need?"
          },
          {
            "speaker": "Alex",
            "text": "Small ones, please. It's just a cut on my finger."
          }
        ],
        "questions": [
          {
            "question": "Why does the customer need a bandage?",
            "choices": [
              "A headache",
              "A sore throat",
              "A cut on a finger"
            ],
            "correct": 2
          },
          {
            "question": "Where are the bandages?",
            "choices": [
              "At the checkout",
              "On the second shelf",
              "On the top shelf"
            ],
            "correct": 1
          }
        ]
      }
    ]
  },
  "13": {
    "title": "Dinner for Two",
    "dialogues": [
      {
        "lines": [
          {
            "speaker": "Sam",
            "text": "I love spicy food. Do you?"
          },
          {
            "speaker": "Lee",
            "text": "So do I, but I don't eat meat."
          },
          {
            "speaker": "Sam",
            "text": "Neither do I. Let's get the vegetable curry."
          }
        ],
        "questions": [
          {
            "question": "What do both speakers avoid?",
            "choices": [
              "Meat",
              "Spicy food",
              "Vegetables"
            ],
            "correct": 0
          },
          {
            "question": "What food do they decide to get?",
            "choices": [
              "Chicken curry",
              "Vegetable curry",
              "Soup"
            ],
            "correct": 1
          }
        ]
      },
      {
        "lines": [
          {
            "speaker": "Sam",
            "text": "Are you ready to order?"
          },
          {
            "speaker": "Lee",
            "text": "I'd like the vegetable curry, please. Does it come with rice?"
          },
          {
            "speaker": "Sam",
            "text": "Yes. Would you like anything to drink?"
          },
          {
            "speaker": "Lee",
            "text": "Water, please."
          }
        ],
        "questions": [
          {
            "question": "What does the customer order to drink?",
            "choices": [
              "Juice",
              "Tea",
              "Water"
            ],
            "correct": 2
          },
          {
            "question": "What comes with the curry?",
            "choices": [
              "Bread",
              "Potatoes",
              "Rice"
            ],
            "correct": 2
          }
        ]
      }
    ]
  },
  "14": {
    "title": "A Day by the Lake",
    "dialogues": [
      {
        "lines": [
          {
            "speaker": "Eva",
            "text": "Which is deeper, Lake A or Lake B?"
          },
          {
            "speaker": "Rob",
            "text": "Lake B is deeper, but Lake A is much larger."
          },
          {
            "speaker": "Eva",
            "text": "Let's go to Lake A. It's closer to town."
          }
        ],
        "questions": [
          {
            "question": "Which lake is larger?",
            "choices": [
              "Lake A",
              "Lake B",
              "They are the same size"
            ],
            "correct": 0
          },
          {
            "question": "Why does Eva suggest Lake A?",
            "choices": [
              "It's deeper.",
              "It's quieter.",
              "It's closer to town."
            ],
            "correct": 2
          }
        ]
      },
      {
        "lines": [
          {
            "speaker": "Eva",
            "text": "How far is the lake from here?"
          },
          {
            "speaker": "Rob",
            "text": "About twelve kilometers. It takes twenty minutes by bus."
          },
          {
            "speaker": "Eva",
            "text": "Can we walk there?"
          },
          {
            "speaker": "Rob",
            "text": "We can, but it will take a few hours."
          }
        ],
        "questions": [
          {
            "question": "How long does the bus take?",
            "choices": [
              "Twelve minutes",
              "A few hours",
              "Twenty minutes"
            ],
            "correct": 2
          },
          {
            "question": "How far away is the lake?",
            "choices": [
              "About twelve kilometers",
              "About twenty kilometers",
              "About two kilometers"
            ],
            "correct": 0
          }
        ]
      }
    ]
  },
  "15": {
    "title": "A Change of Plans",
    "dialogues": [
      {
        "lines": [
          {
            "speaker": "Nina",
            "text": "What are you doing on Thursday?"
          },
          {
            "speaker": "Luis",
            "text": "I'm meeting Pat at four, but Friday is free."
          },
          {
            "speaker": "Nina",
            "text": "Let's book the studio for Friday, then."
          }
        ],
        "questions": [
          {
            "question": "When will they book the studio?",
            "choices": [
              "Friday",
              "Thursday",
              "Saturday"
            ],
            "correct": 0
          },
          {
            "question": "What time is Luis meeting Pat on Thursday?",
            "choices": [
              "At four",
              "At five",
              "At six"
            ],
            "correct": 0
          }
        ]
      },
      {
        "lines": [
          {
            "speaker": "Nina",
            "text": "Could you tell Pat that the meeting is at five now?"
          },
          {
            "speaker": "Luis",
            "text": "Sure. Is it still at the café?"
          },
          {
            "speaker": "Nina",
            "text": "No, it's at the library."
          }
        ],
        "questions": [
          {
            "question": "Where is the meeting now?",
            "choices": [
              "The café",
              "The studio",
              "The library"
            ],
            "correct": 2
          },
          {
            "question": "What is the new meeting time?",
            "choices": [
              "Four o'clock",
              "Five o'clock",
              "Six o'clock"
            ],
            "correct": 1
          }
        ]
      }
    ]
  },
  "16": {
    "title": "A Fresh Start",
    "dialogues": [
      {
        "lines": [
          {
            "speaker": "Uma",
            "text": "Why are you moving?"
          },
          {
            "speaker": "Jay",
            "text": "My new job is in another city. I'm going to move next month."
          },
          {
            "speaker": "Uma",
            "text": "Are you excited?"
          },
          {
            "speaker": "Jay",
            "text": "Yes, but I'll miss my friends."
          }
        ],
        "questions": [
          {
            "question": "What is the reason for moving?",
            "choices": [
              "A new job",
              "A new school",
              "A holiday"
            ],
            "correct": 0
          },
          {
            "question": "When is Jay going to move?",
            "choices": [
              "Next week",
              "Next month",
              "Next year"
            ],
            "correct": 1
          }
        ]
      },
      {
        "lines": [
          {
            "speaker": "Uma",
            "text": "What will you do when you get there?"
          },
          {
            "speaker": "Jay",
            "text": "First I'll find an apartment. Then I want to join a running club."
          },
          {
            "speaker": "Uma",
            "text": "That sounds like a good way to meet people."
          }
        ],
        "questions": [
          {
            "question": "What will the second speaker do first?",
            "choices": [
              "Join a club",
              "Look for a job",
              "Find an apartment"
            ],
            "correct": 2
          },
          {
            "question": "What kind of club does Jay want to join?",
            "choices": [
              "A book club",
              "A cooking club",
              "A running club"
            ],
            "correct": 2
          }
        ]
      }
    ]
  }
};
