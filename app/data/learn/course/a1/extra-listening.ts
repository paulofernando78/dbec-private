import type { UnitListeningContent } from "../extra-listening";

export const unitListening: Readonly<Record<number, UnitListeningContent>> = {
  "1": {
    "title": "At the Office",
    "dialogues": [
      {
        "lines": [
          {
            "speaker": "Luis",
            "text": "Hi, I'm Luis. What's your name?"
          },
          {
            "speaker": "Nina",
            "text": "I'm Nina. I'm the receptionist. Nice to meet you."
          },
          {
            "speaker": "Luis",
            "text": "Nice to meet you, too."
          }
        ],
        "questions": [
          {
            "question": "Hi, I'm ___.",
            "choices": [
              "Rosa",
              "Luis",
              "Mia"
            ],
            "correct": 1
          },
          {
            "question": "Nice to meet you, Luis. I'm Nina. I'm the ___.",
            "choices": [
              "manager",
              "receptionist"
            ],
            "correct": 1
          }
        ]
      },
      {
        "lines": [
          {
            "speaker": "Luis",
            "text": "What's your phone number, Nina?"
          },
          {
            "speaker": "Nina",
            "text": "It's 555-0142. What's your email address, Luis?"
          },
          {
            "speaker": "Luis",
            "text": "It's luis@example.com. See you tomorrow!"
          },
          {
            "speaker": "Nina",
            "text": "See you!"
          }
        ],
        "questions": [
          {
            "question": "Phone number",
            "choices": [
              "555-0132",
              "555-0124",
              "555-0142"
            ],
            "correct": 2
          },
          {
            "question": "Email address",
            "choices": [
              "leo@example.com",
              "nina@example.com",
              "luis@example.com"
            ],
            "correct": 2
          }
        ]
      }
    ]
  },
  "3": {
    "title": "New Neighbors",
    "dialogues": [
      {
        "lines": [
          {
            "speaker": "Sam",
            "text": "Are you from Italy, Ava?"
          },
          {
            "speaker": "Ava",
            "text": "No, I'm from Brazil. I'm from Recife."
          },
          {
            "speaker": "Sam",
            "text": "Do you speak Portuguese?"
          },
          {
            "speaker": "Ava",
            "text": "Yes, I do. And I speak a little English."
          }
        ],
        "questions": [
          {
            "question": "Where is Ava from?",
            "choices": [
              "Brazil",
              "Italy",
              "Spain"
            ],
            "correct": 0
          },
          {
            "question": "What city is Ava from?",
            "choices": [
              "Recife",
              "Rome",
              "Madrid"
            ],
            "correct": 0
          }
        ]
      },
      {
        "lines": [
          {
            "speaker": "Sam",
            "text": "Who's the boy next to you in this photo?"
          },
          {
            "speaker": "Ava",
            "text": "That's my brother, Leo."
          },
          {
            "speaker": "Sam",
            "text": "How old is he? What's he like?"
          },
          {
            "speaker": "Ava",
            "text": "He's twelve. He's quiet, but he's very friendly."
          }
        ],
        "questions": [
          {
            "question": "What is Leo like?",
            "choices": [
              "Loud and funny",
              "Quiet and unfriendly",
              "Quiet and friendly"
            ],
            "correct": 2
          },
          {
            "question": "How old is Leo?",
            "choices": [
              "Ten",
              "Twelve",
              "Twenty"
            ],
            "correct": 1
          }
        ]
      }
    ]
  },
  "4": {
    "title": "Coats for a Rainy Day",
    "dialogues": [
      {
        "lines": [
          {
            "speaker": "Max",
            "text": "Whose coat is this?"
          },
          {
            "speaker": "Ruby",
            "text": "It's mine. Is that your scarf?"
          },
          {
            "speaker": "Max",
            "text": "No, it's Eva's. My scarf is blue."
          },
          {
            "speaker": "Ruby",
            "text": "Okay. I'll put Eva's scarf here."
          }
        ],
        "questions": [
          {
            "question": "Who owns the scarf they found?",
            "choices": [
              "Eva",
              "The first speaker",
              "The second speaker"
            ],
            "correct": 0
          },
          {
            "question": "What color is Max's scarf?",
            "choices": [
              "Red",
              "Blue",
              "Green"
            ],
            "correct": 1
          }
        ]
      },
      {
        "lines": [
          {
            "speaker": "Max",
            "text": "Is Eva wearing her coat? It's raining."
          },
          {
            "speaker": "Ruby",
            "text": "Yes, she is. She's wearing boots, too."
          },
          {
            "speaker": "Max",
            "text": "Are you wearing boots?"
          },
          {
            "speaker": "Ruby",
            "text": "No, I'm wearing sneakers. My boots are at home."
          }
        ],
        "questions": [
          {
            "question": "What is the second speaker wearing?",
            "choices": [
              "Boots",
              "Sandals",
              "Sneakers"
            ],
            "correct": 2
          },
          {
            "question": "Is Eva wearing boots?",
            "choices": [
              "No, she's wearing sneakers.",
              "No, she's wearing sandals.",
              "Yes, she is."
            ],
            "correct": 2
          }
        ]
      }
    ]
  },
  "5": {
    "title": "A Call Across Time Zones",
    "dialogues": [
      {
        "lines": [
          {
            "speaker": "Ben",
            "text": "What time is it in London?"
          },
          {
            "speaker": "Amy",
            "text": "It's seven p.m. here. What time is it there?"
          },
          {
            "speaker": "Ben",
            "text": "It's noon in Chicago."
          },
          {
            "speaker": "Amy",
            "text": "Okay. Call me at one p.m. your time."
          }
        ],
        "questions": [
          {
            "question": "What time is it in Chicago now?",
            "choices": [
              "Noon",
              "One p.m.",
              "Seven p.m."
            ],
            "correct": 0
          },
          {
            "question": "What time is it in London now?",
            "choices": [
              "Noon",
              "One p.m.",
              "Seven p.m."
            ],
            "correct": 2
          }
        ]
      },
      {
        "lines": [
          {
            "speaker": "Ben",
            "text": "What are you doing?"
          },
          {
            "speaker": "Amy",
            "text": "I'm making dinner. What are the kids doing?"
          },
          {
            "speaker": "Ben",
            "text": "They're watching a movie."
          },
          {
            "speaker": "Amy",
            "text": "Can I call again later?"
          },
          {
            "speaker": "Ben",
            "text": "Sure."
          }
        ],
        "questions": [
          {
            "question": "What are the kids doing?",
            "choices": [
              "Making dinner",
              "Doing homework",
              "Watching a movie"
            ],
            "correct": 2
          },
          {
            "question": "What is Amy doing?",
            "choices": [
              "Making dinner",
              "Watching a movie",
              "Doing homework"
            ],
            "correct": 0
          }
        ]
      }
    ]
  },
  "6": {
    "title": "The Morning Commute",
    "dialogues": [
      {
        "lines": [
          {
            "speaker": "Tess",
            "text": "I take the bus to work. How do you get there?"
          },
          {
            "speaker": "Leo",
            "text": "I walk on Mondays. On other days I take the train."
          },
          {
            "speaker": "Tess",
            "text": "Do you drive?"
          },
          {
            "speaker": "Leo",
            "text": "No, I don't have a car."
          }
        ],
        "questions": [
          {
            "question": "How does the second speaker get to work on Mondays?",
            "choices": [
              "On foot",
              "By train",
              "By bus"
            ],
            "correct": 0
          },
          {
            "question": "Does Leo have a car?",
            "choices": [
              "No, he doesn't.",
              "Yes, he does.",
              "Yes, he has two cars."
            ],
            "correct": 0
          }
        ]
      },
      {
        "lines": [
          {
            "speaker": "Tess",
            "text": "What time do you get up?"
          },
          {
            "speaker": "Leo",
            "text": "I get up at six. Do you get up early on Saturdays?"
          },
          {
            "speaker": "Tess",
            "text": "No, I get up at nine on Saturdays."
          },
          {
            "speaker": "Leo",
            "text": "That's late for me!"
          }
        ],
        "questions": [
          {
            "question": "When does the first speaker get up on Saturdays?",
            "choices": [
              "At six",
              "At seven",
              "At nine"
            ],
            "correct": 2
          },
          {
            "question": "What time does Leo get up?",
            "choices": [
              "At nine",
              "At six",
              "At ten"
            ],
            "correct": 1
          }
        ]
      }
    ]
  },
  "7": {
    "title": "A Place to Call Home",
    "dialogues": [
      {
        "lines": [
          {
            "speaker": "Dan",
            "text": "Do you live in an apartment?"
          },
          {
            "speaker": "Mina",
            "text": "Yes. I live on the second floor."
          },
          {
            "speaker": "Dan",
            "text": "Does it have a balcony?"
          },
          {
            "speaker": "Mina",
            "text": "No, but it has two big windows."
          }
        ],
        "questions": [
          {
            "question": "What does the apartment have?",
            "choices": [
              "Two big windows",
              "A balcony",
              "A garden"
            ],
            "correct": 0
          },
          {
            "question": "What floor is the apartment on?",
            "choices": [
              "The first floor",
              "The second floor",
              "The third floor"
            ],
            "correct": 1
          }
        ]
      },
      {
        "lines": [
          {
            "speaker": "Dan",
            "text": "What's in your dream kitchen?"
          },
          {
            "speaker": "Mina",
            "text": "There are two chairs and a big table."
          },
          {
            "speaker": "Dan",
            "text": "Is there a TV?"
          },
          {
            "speaker": "Mina",
            "text": "No, there isn't. There's a radio."
          }
        ],
        "questions": [
          {
            "question": "What is in the dream kitchen?",
            "choices": [
              "A TV",
              "A sofa",
              "A radio"
            ],
            "correct": 2
          },
          {
            "question": "How many chairs are in the kitchen?",
            "choices": [
              "Three",
              "Four",
              "Two"
            ],
            "correct": 2
          }
        ]
      }
    ]
  },
  "8": {
    "title": "A Day at Work",
    "dialogues": [
      {
        "lines": [
          {
            "speaker": "Jo",
            "text": "Where do you work?"
          },
          {
            "speaker": "Kim",
            "text": "I work at a hospital."
          },
          {
            "speaker": "Jo",
            "text": "What do you do there?"
          },
          {
            "speaker": "Kim",
            "text": "I'm a nurse. I work with children."
          }
        ],
        "questions": [
          {
            "question": "What is the second speaker's job?",
            "choices": [
              "Nurse",
              "Teacher",
              "Doctor"
            ],
            "correct": 0
          },
          {
            "question": "Where does Kim work?",
            "choices": [
              "At a school",
              "At a store",
              "At a hospital"
            ],
            "correct": 2
          }
        ]
      },
      {
        "lines": [
          {
            "speaker": "Jo",
            "text": "Is your job easy?"
          },
          {
            "speaker": "Kim",
            "text": "No, it's hard, but it's interesting."
          },
          {
            "speaker": "Jo",
            "text": "What's a good job for you?"
          },
          {
            "speaker": "Kim",
            "text": "A creative job. I like making things."
          }
        ],
        "questions": [
          {
            "question": "What kind of job does the second speaker like?",
            "choices": [
              "An easy job",
              "A quiet job",
              "A creative job"
            ],
            "correct": 2
          },
          {
            "question": "Is Kim's job easy?",
            "choices": [
              "No, it's hard.",
              "Yes, it's easy.",
              "Yes, it's quiet."
            ],
            "correct": 0
          }
        ]
      }
    ]
  },
  "9": {
    "title": "Breakfast at Home",
    "dialogues": [
      {
        "lines": [
          {
            "speaker": "Rob",
            "text": "Do we have any eggs?"
          },
          {
            "speaker": "Eva",
            "text": "No, but we have some bread and cheese."
          },
          {
            "speaker": "Rob",
            "text": "Is there any orange juice?"
          },
          {
            "speaker": "Eva",
            "text": "Yes, there's a little in the fridge."
          }
        ],
        "questions": [
          {
            "question": "What do they need if they want eggs on toast?",
            "choices": [
              "Eggs",
              "Bread",
              "Juice"
            ],
            "correct": 0
          },
          {
            "question": "Where is the orange juice?",
            "choices": [
              "In the fridge",
              "On the table",
              "In a bag"
            ],
            "correct": 0
          }
        ]
      },
      {
        "lines": [
          {
            "speaker": "Rob",
            "text": "Do you usually have breakfast at home?"
          },
          {
            "speaker": "Eva",
            "text": "Yes, but I sometimes eat at a café on Fridays."
          },
          {
            "speaker": "Rob",
            "text": "Do you ever drink coffee?"
          },
          {
            "speaker": "Eva",
            "text": "No, I never drink coffee. I drink tea."
          }
        ],
        "questions": [
          {
            "question": "What does the second speaker never drink?",
            "choices": [
              "Tea",
              "Juice",
              "Coffee"
            ],
            "correct": 2
          },
          {
            "question": "Where does Eva sometimes eat on Fridays?",
            "choices": [
              "At school",
              "At a café",
              "At a friend's house"
            ],
            "correct": 1
          }
        ]
      }
    ]
  },
  "10": {
    "title": "Saturday at the Club",
    "dialogues": [
      {
        "lines": [
          {
            "speaker": "Ana",
            "text": "What sport do you play after school?"
          },
          {
            "speaker": "Jay",
            "text": "I play basketball. Do you play it?"
          },
          {
            "speaker": "Ana",
            "text": "No, I play tennis. What sports do you watch?"
          },
          {
            "speaker": "Jay",
            "text": "I usually watch soccer."
          }
        ],
        "questions": [
          {
            "question": "What does the second speaker watch?",
            "choices": [
              "Soccer",
              "Tennis",
              "Basketball"
            ],
            "correct": 0
          },
          {
            "question": "What sport does Ana play?",
            "choices": [
              "Basketball",
              "Tennis",
              "Soccer"
            ],
            "correct": 1
          }
        ]
      },
      {
        "lines": [
          {
            "speaker": "Ana",
            "text": "Can you play the guitar at the club show?"
          },
          {
            "speaker": "Jay",
            "text": "No, I can't, but I can sing."
          },
          {
            "speaker": "Ana",
            "text": "Great. I can play the guitar."
          },
          {
            "speaker": "Jay",
            "text": "Let's sing a song together."
          }
        ],
        "questions": [
          {
            "question": "What can the second speaker do?",
            "choices": [
              "Play guitar",
              "Play piano",
              "Sing"
            ],
            "correct": 2
          },
          {
            "question": "What can Ana play?",
            "choices": [
              "The piano",
              "The drums",
              "The guitar"
            ],
            "correct": 2
          }
        ]
      }
    ]
  },
  "11": {
    "title": "A Birthday on Sunday",
    "dialogues": [
      {
        "lines": [
          {
            "speaker": "Mia",
            "text": "Are you going to stay home on Saturday?"
          },
          {
            "speaker": "Noah",
            "text": "No, I'm going to buy a present for Zoe."
          },
          {
            "speaker": "Mia",
            "text": "Are you going to take the bus?"
          },
          {
            "speaker": "Noah",
            "text": "Yes. The store opens at ten."
          }
        ],
        "questions": [
          {
            "question": "Why is the second speaker going out?",
            "choices": [
              "To buy a present",
              "To go to a party",
              "To see a movie"
            ],
            "correct": 0
          },
          {
            "question": "What time does the store open?",
            "choices": [
              "At nine",
              "At eleven",
              "At ten"
            ],
            "correct": 2
          }
        ]
      },
      {
        "lines": [
          {
            "speaker": "Mia",
            "text": "Where are you going to celebrate Zoe's birthday?"
          },
          {
            "speaker": "Noah",
            "text": "In the park. We're going to have a picnic."
          },
          {
            "speaker": "Mia",
            "text": "What are you going to bring?"
          },
          {
            "speaker": "Noah",
            "text": "I'm going to bring a cake."
          }
        ],
        "questions": [
          {
            "question": "What is the second speaker going to bring?",
            "choices": [
              "Juice",
              "A present",
              "A cake"
            ],
            "correct": 2
          },
          {
            "question": "Where is the picnic?",
            "choices": [
              "In the park",
              "At school",
              "At Zoe's house"
            ],
            "correct": 0
          }
        ]
      }
    ]
  },
  "12": {
    "title": "Not Feeling Well",
    "dialogues": [
      {
        "lines": [
          {
            "speaker": "Rory",
            "text": "What's wrong?"
          },
          {
            "speaker": "Alex",
            "text": "I have a sore throat and I feel tired."
          },
          {
            "speaker": "Rory",
            "text": "Do you have a headache, too?"
          },
          {
            "speaker": "Alex",
            "text": "No, I don't."
          }
        ],
        "questions": [
          {
            "question": "How does the second speaker feel?",
            "choices": [
              "Tired",
              "Hungry",
              "Fine"
            ],
            "correct": 0
          },
          {
            "question": "Does Alex have a headache?",
            "choices": [
              "No, Alex doesn't.",
              "Yes, Alex does.",
              "Yes, and Alex has a fever."
            ],
            "correct": 0
          }
        ]
      },
      {
        "lines": [
          {
            "speaker": "Rory",
            "text": "What can I do for my sore throat?"
          },
          {
            "speaker": "Alex",
            "text": "Drink some water and rest your voice."
          },
          {
            "speaker": "Rory",
            "text": "Should I go to soccer practice?"
          },
          {
            "speaker": "Alex",
            "text": "Take a break today. Go tomorrow if you feel better."
          }
        ],
        "questions": [
          {
            "question": "What does the second speaker say to do today?",
            "choices": [
              "Go to practice",
              "Sing a song",
              "Take a break"
            ],
            "correct": 2
          },
          {
            "question": "What can Rory drink?",
            "choices": [
              "Juice",
              "Water",
              "Milk"
            ],
            "correct": 1
          }
        ]
      }
    ]
  },
  "13": {
    "title": "Finding the Right Store",
    "dialogues": [
      {
        "lines": [
          {
            "speaker": "Nora",
            "text": "Where can I buy a notebook?"
          },
          {
            "speaker": "Lee",
            "text": "At the stationery store. It's next to the bakery."
          },
          {
            "speaker": "Nora",
            "text": "Is it across from the bank?"
          },
          {
            "speaker": "Lee",
            "text": "Yes, that's right."
          }
        ],
        "questions": [
          {
            "question": "What is next to the bakery?",
            "choices": [
              "The stationery store",
              "The bank",
              "The library"
            ],
            "correct": 0
          },
          {
            "question": "What is across from the stationery store?",
            "choices": [
              "The park",
              "The bank",
              "The station"
            ],
            "correct": 1
          }
        ]
      },
      {
        "lines": [
          {
            "speaker": "Nora",
            "text": "How do I get to the station?"
          },
          {
            "speaker": "Lee",
            "text": "Go straight for one block and turn left."
          },
          {
            "speaker": "Nora",
            "text": "Is it far after the turn?"
          },
          {
            "speaker": "Lee",
            "text": "No. It's on your right, next to the park."
          }
        ],
        "questions": [
          {
            "question": "Do you turn left or right?",
            "choices": [
              "Right",
              "Back",
              "Left"
            ],
            "correct": 2
          },
          {
            "question": "What is next to the station?",
            "choices": [
              "The bank",
              "The bakery",
              "The park"
            ],
            "correct": 2
          }
        ]
      }
    ]
  },
  "14": {
    "title": "A Weekend Away",
    "dialogues": [
      {
        "lines": [
          {
            "speaker": "Maya",
            "text": "What did you do on Saturday?"
          },
          {
            "speaker": "Ben",
            "text": "I visited my cousin. We cooked dinner together."
          },
          {
            "speaker": "Maya",
            "text": "Did you watch a movie?"
          },
          {
            "speaker": "Ben",
            "text": "No, we played cards."
          }
        ],
        "questions": [
          {
            "question": "What did they do after cooking?",
            "choices": [
              "They played cards",
              "They watched a movie",
              "They went shopping"
            ],
            "correct": 0
          },
          {
            "question": "Who did Ben visit on Saturday?",
            "choices": [
              "His sister",
              "His friend",
              "His cousin"
            ],
            "correct": 2
          }
        ]
      },
      {
        "lines": [
          {
            "speaker": "Maya",
            "text": "Did you go to the beach on vacation?"
          },
          {
            "speaker": "Ben",
            "text": "Yes, we went on Tuesday."
          },
          {
            "speaker": "Maya",
            "text": "Did you swim?"
          },
          {
            "speaker": "Ben",
            "text": "No, the water was cold. We sat in the sun."
          }
        ],
        "questions": [
          {
            "question": "Why didn't they swim?",
            "choices": [
              "It was raining",
              "The beach was closed",
              "The water was cold"
            ],
            "correct": 2
          },
          {
            "question": "What day did they go to the beach?",
            "choices": [
              "Tuesday",
              "Thursday",
              "Saturday"
            ],
            "correct": 0
          }
        ]
      }
    ]
  },
  "15": {
    "title": "Old Photos",
    "dialogues": [
      {
        "lines": [
          {
            "speaker": "Ella",
            "text": "Is that your grandfather in the photo?"
          },
          {
            "speaker": "Will",
            "text": "Yes. He was twenty-five then."
          },
          {
            "speaker": "Ella",
            "text": "Where was he from?"
          },
          {
            "speaker": "Will",
            "text": "He was from a small town in Canada."
          }
        ],
        "questions": [
          {
            "question": "Where was the grandfather from?",
            "choices": [
              "A town in Canada",
              "A city in France",
              "A town in Mexico"
            ],
            "correct": 0
          },
          {
            "question": "How old was the grandfather in the photo?",
            "choices": [
              "Twenty-five",
              "Fifteen",
              "Thirty-five"
            ],
            "correct": 0
          }
        ]
      },
      {
        "lines": [
          {
            "speaker": "Ella",
            "text": "What was your favorite subject at school?"
          },
          {
            "speaker": "Will",
            "text": "It was art. I drew pictures every day."
          },
          {
            "speaker": "Ella",
            "text": "Who did you sit next to?"
          },
          {
            "speaker": "Will",
            "text": "I sat next to my friend Robin."
          }
        ],
        "questions": [
          {
            "question": "Who sat next to the second speaker?",
            "choices": [
              "A teacher",
              "A cousin",
              "Robin"
            ],
            "correct": 2
          },
          {
            "question": "What was Will's favorite subject?",
            "choices": [
              "Math",
              "Art",
              "English"
            ],
            "correct": 1
          }
        ]
      }
    ]
  },
  "16": {
    "title": "See You at the Show",
    "dialogues": [
      {
        "lines": [
          {
            "speaker": "Jo",
            "text": "Hello. Can I speak to Maya?"
          },
          {
            "speaker": "Lee",
            "text": "She's out. Can I take a message?"
          },
          {
            "speaker": "Jo",
            "text": "Please tell her to call me. It's Jo."
          },
          {
            "speaker": "Lee",
            "text": "Okay, I'll tell her."
          }
        ],
        "questions": [
          {
            "question": "What should Maya do?",
            "choices": [
              "Call Jo",
              "Meet Jo at home",
              "Send a letter"
            ],
            "correct": 0
          },
          {
            "question": "Is Maya at home now?",
            "choices": [
              "Yes, she's at home.",
              "No, she's out.",
              "Yes, she's on the phone."
            ],
            "correct": 1
          }
        ]
      },
      {
        "lines": [
          {
            "speaker": "Jo",
            "text": "Would you like to go to a show tonight?"
          },
          {
            "speaker": "Lee",
            "text": "I'd love to, but I have to work tonight."
          },
          {
            "speaker": "Jo",
            "text": "Do you want to go tomorrow?"
          },
          {
            "speaker": "Lee",
            "text": "Yes, tomorrow is great."
          }
        ],
        "questions": [
          {
            "question": "When can they go to the show?",
            "choices": [
              "Tonight",
              "Next week",
              "Tomorrow"
            ],
            "correct": 2
          },
          {
            "question": "Why can't Lee go tonight?",
            "choices": [
              "Lee has to study.",
              "Lee has to cook.",
              "Lee has to work."
            ],
            "correct": 2
          }
        ]
      }
    ]
  }
};
