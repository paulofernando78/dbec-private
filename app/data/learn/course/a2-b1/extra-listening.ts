import type { UnitListeningContent } from "../extra-listening";

export const unitListening: Readonly<Record<number, UnitListeningContent>> = {
  "1": {
    "title": "Back Then",
    "dialogues": [
      {
        "lines": [
          {
            "speaker": "Erin",
            "text": "When did you move here?"
          },
          {
            "speaker": "Max",
            "text": "In 2018, just after I finished school."
          },
          {
            "speaker": "Erin",
            "text": "Did you know anyone?"
          },
          {
            "speaker": "Max",
            "text": "Only my cousin."
          }
        ],
        "questions": [
          {
            "question": "Who did the second speaker know?",
            "choices": [
              "A cousin",
              "A neighbor",
              "A teacher"
            ],
            "correct": 0
          },
          {
            "question": "When did Max move here?",
            "choices": [
              "In 2008",
              "In 2018",
              "In 2020"
            ],
            "correct": 1
          }
        ]
      },
      {
        "lines": [
          {
            "speaker": "Erin",
            "text": "Did you use to walk to school?"
          },
          {
            "speaker": "Max",
            "text": "Yes, until we moved. Then I started taking the bus."
          },
          {
            "speaker": "Erin",
            "text": "I used to cycle, even in winter."
          }
        ],
        "questions": [
          {
            "question": "What changed after the move?",
            "choices": [
              "They started cycling",
              "They walked farther",
              "They took the bus"
            ],
            "correct": 2
          },
          {
            "question": "How did Erin use to get to school?",
            "choices": [
              "On foot",
              "By bus",
              "By bike"
            ],
            "correct": 2
          }
        ]
      }
    ]
  },
  "2": {
    "title": "Getting Across Town",
    "dialogues": [
      {
        "lines": [
          {
            "speaker": "Ari",
            "text": "Traffic is worse since the bridge closed."
          },
          {
            "speaker": "Jules",
            "text": "True. There aren't enough buses during rush hour either."
          },
          {
            "speaker": "Ari",
            "text": "Perhaps they could add a temporary bus route."
          }
        ],
        "questions": [
          {
            "question": "What could help, according to the first speaker?",
            "choices": [
              "A temporary bus route",
              "More parking",
              "A higher fare"
            ],
            "correct": 0
          },
          {
            "question": "Why has traffic become worse?",
            "choices": [
              "Bus fares rose.",
              "A train line closed.",
              "The bridge closed."
            ],
            "correct": 2
          }
        ]
      },
      {
        "lines": [
          {
            "speaker": "Ari",
            "text": "Could you tell me where the nearest tram stop is?"
          },
          {
            "speaker": "Jules",
            "text": "It's around the corner, but the tram isn't running today."
          },
          {
            "speaker": "Ari",
            "text": "Is there a replacement bus?"
          },
          {
            "speaker": "Jules",
            "text": "Yes, outside the station."
          }
        ],
        "questions": [
          {
            "question": "Where can the passenger catch a bus?",
            "choices": [
              "At the tram stop",
              "Across the bridge",
              "Outside the station"
            ],
            "correct": 2
          },
          {
            "question": "Why can't the passenger take the tram?",
            "choices": [
              "It isn't running today.",
              "The stop has moved.",
              "The passenger has no ticket."
            ],
            "correct": 0
          }
        ]
      }
    ]
  },
  "3": {
    "title": "The Apartment Search",
    "dialogues": [
      {
        "lines": [
          {
            "speaker": "Nora",
            "text": "We need a place that's close enough to walk to work."
          },
          {
            "speaker": "Eli",
            "text": "This one is close, but it isn't big enough for both our desks."
          },
          {
            "speaker": "Nora",
            "text": "Let's keep looking."
          }
        ],
        "questions": [
          {
            "question": "Why do they reject the apartment?",
            "choices": [
              "Not enough space",
              "Too far away",
              "Too many stairs"
            ],
            "correct": 0
          },
          {
            "question": "What do they like about the apartment?",
            "choices": [
              "It's close to work.",
              "It fits both desks.",
              "It has a big kitchen."
            ],
            "correct": 0
          }
        ]
      },
      {
        "lines": [
          {
            "speaker": "Nora",
            "text": "I wish our apartment had more light."
          },
          {
            "speaker": "Eli",
            "text": "Me too. If only we had a window in the kitchen."
          },
          {
            "speaker": "Nora",
            "text": "At least the living room is bright."
          }
        ],
        "questions": [
          {
            "question": "Which room needs a window?",
            "choices": [
              "The living room",
              "The bedroom",
              "The kitchen"
            ],
            "correct": 2
          },
          {
            "question": "What room is already bright?",
            "choices": [
              "The kitchen",
              "The living room",
              "The hallway"
            ],
            "correct": 1
          }
        ]
      }
    ]
  },
  "4": {
    "title": "A Recipe From Home",
    "dialogues": [
      {
        "lines": [
          {
            "speaker": "June",
            "text": "Have you ever made bread from scratch?"
          },
          {
            "speaker": "Tom",
            "text": "Yes, but only once. It turned out harder than I expected."
          },
          {
            "speaker": "June",
            "text": "I've never tried it. Could you show me?"
          }
        ],
        "questions": [
          {
            "question": "How often has the second speaker made bread?",
            "choices": [
              "Once",
              "Every week",
              "Never"
            ],
            "correct": 0
          },
          {
            "question": "How did Tom feel about making bread?",
            "choices": [
              "It was easier than expected.",
              "It was harder than expected.",
              "It was too quick."
            ],
            "correct": 1
          }
        ]
      },
      {
        "lines": [
          {
            "speaker": "June",
            "text": "First, mix the flour and water. Then let the dough rest."
          },
          {
            "speaker": "Tom",
            "text": "Do I add the salt now?"
          },
          {
            "speaker": "June",
            "text": "Yes, before you leave it to rest."
          }
        ],
        "questions": [
          {
            "question": "When should the salt go in?",
            "choices": [
              "After baking",
              "After the dough rests",
              "Before the dough rests"
            ],
            "correct": 2
          },
          {
            "question": "What does June say to mix first?",
            "choices": [
              "Salt and water",
              "Flour and salt",
              "Flour and water"
            ],
            "correct": 2
          }
        ]
      }
    ]
  },
  "5": {
    "title": "Before You Leave",
    "dialogues": [
      {
        "lines": [
          {
            "speaker": "Rae",
            "text": "Are you going to drive to the coast?"
          },
          {
            "speaker": "Kit",
            "text": "I was, but I've booked a train instead. I'm leaving Friday morning."
          },
          {
            "speaker": "Rae",
            "text": "Great. I'll meet you at the station."
          }
        ],
        "questions": [
          {
            "question": "How will the second speaker travel?",
            "choices": [
              "By train",
              "By car",
              "By bus"
            ],
            "correct": 0
          },
          {
            "question": "When is Kit leaving?",
            "choices": [
              "Thursday afternoon",
              "Saturday morning",
              "Friday morning"
            ],
            "correct": 2
          }
        ]
      },
      {
        "lines": [
          {
            "speaker": "Rae",
            "text": "You should download the map before the trip."
          },
          {
            "speaker": "Kit",
            "text": "Good point. What if my phone battery dies?"
          },
          {
            "speaker": "Rae",
            "text": "Take a paper copy of the address as well."
          }
        ],
        "questions": [
          {
            "question": "What should the traveler take as backup?",
            "choices": [
              "A second phone",
              "A guidebook",
              "A paper copy of the address"
            ],
            "correct": 2
          },
          {
            "question": "Why does Kit want a backup?",
            "choices": [
              "The phone could run out of power.",
              "The train might be canceled.",
              "The address might change."
            ],
            "correct": 0
          }
        ]
      }
    ]
  },
  "6": {
    "title": "A Quiet Evening",
    "dialogues": [
      {
        "lines": [
          {
            "speaker": "Sam",
            "text": "Could you turn the music down a little?"
          },
          {
            "speaker": "Drew",
            "text": "Of course. Is it keeping you awake?"
          },
          {
            "speaker": "Sam",
            "text": "I'm trying to finish a call for work."
          }
        ],
        "questions": [
          {
            "question": "Why does the first speaker want less noise?",
            "choices": [
              "They are on a work call",
              "They are sleeping",
              "They are playing music"
            ],
            "correct": 0
          },
          {
            "question": "What does Sam ask Drew to turn down?",
            "choices": [
              "The music",
              "The TV",
              "The radio"
            ],
            "correct": 0
          }
        ]
      },
      {
        "lines": [
          {
            "speaker": "Sam",
            "text": "Would you mind moving your bike away from the door?"
          },
          {
            "speaker": "Drew",
            "text": "Not at all. I'll put it by the fence."
          },
          {
            "speaker": "Sam",
            "text": "Thanks. I need to bring a box through."
          }
        ],
        "questions": [
          {
            "question": "Where will the second speaker put the bike?",
            "choices": [
              "Inside the door",
              "By the stairs",
              "By the fence"
            ],
            "correct": 2
          },
          {
            "question": "Why does Sam need the door clear?",
            "choices": [
              "To take the bike out",
              "To bring a box through",
              "To move a table outside"
            ],
            "correct": 1
          }
        ]
      }
    ]
  },
  "7": {
    "title": "Fixing the Flyer",
    "dialogues": [
      {
        "lines": [
          {
            "speaker": "Moe",
            "text": "What's this tool for?"
          },
          {
            "speaker": "Jo",
            "text": "It's for trimming paper. You can use it to cut the flyers."
          },
          {
            "speaker": "Moe",
            "text": "Great. The scissors keep tearing the edges."
          }
        ],
        "questions": [
          {
            "question": "What is the tool used for?",
            "choices": [
              "Trimming paper",
              "Stapling flyers",
              "Drawing straight lines"
            ],
            "correct": 0
          },
          {
            "question": "Why does Moe need the tool?",
            "choices": [
              "The flyers are too small.",
              "The scissors are tearing the paper.",
              "The printer has no paper."
            ],
            "correct": 1
          }
        ]
      },
      {
        "lines": [
          {
            "speaker": "Moe",
            "text": "The print shop closes before we finish work."
          },
          {
            "speaker": "Jo",
            "text": "Why don't we email the file and collect the flyers tomorrow?"
          },
          {
            "speaker": "Moe",
            "text": "Good idea. I'll send it now."
          }
        ],
        "questions": [
          {
            "question": "What do they decide to do today?",
            "choices": [
              "Visit the shop",
              "Pick up the flyers",
              "Email the file"
            ],
            "correct": 2
          },
          {
            "question": "When will they collect the flyers?",
            "choices": [
              "Today",
              "Next week",
              "Tomorrow"
            ],
            "correct": 2
          }
        ]
      }
    ]
  },
  "8": {
    "title": "A Festival Invitation",
    "dialogues": [
      {
        "lines": [
          {
            "speaker": "Lena",
            "text": "What do people do at the spring festival?"
          },
          {
            "speaker": "Omar",
            "text": "They hang lanterns and share food. This year it's in the park."
          },
          {
            "speaker": "Lena",
            "text": "Is it usually outside?"
          },
          {
            "speaker": "Omar",
            "text": "Yes, unless it rains."
          }
        ],
        "questions": [
          {
            "question": "What do people hang?",
            "choices": [
              "Lanterns",
              "Flags",
              "Flowers"
            ],
            "correct": 0
          },
          {
            "question": "Where is the festival this year?",
            "choices": [
              "At the school",
              "By the river",
              "In the park"
            ],
            "correct": 2
          }
        ]
      },
      {
        "lines": [
          {
            "speaker": "Lena",
            "text": "Should I bring something when I visit your family?"
          },
          {
            "speaker": "Omar",
            "text": "A small gift is fine, but you don't have to bring food."
          },
          {
            "speaker": "Lena",
            "text": "I'll bring flowers, then."
          }
        ],
        "questions": [
          {
            "question": "What will the visitor bring?",
            "choices": [
              "Food",
              "Lanterns",
              "Flowers"
            ],
            "correct": 2
          },
          {
            "question": "Does Omar expect the visitor to bring food?",
            "choices": [
              "No, food is optional.",
              "Yes, a main dish.",
              "Yes, a dessert."
            ],
            "correct": 0
          }
        ]
      }
    ]
  },
  "9": {
    "title": "An Outdoor Screening",
    "dialogues": [
      {
        "lines": [
          {
            "speaker": "Flo",
            "text": "When we started the film club, we met indoors."
          },
          {
            "speaker": "Luca",
            "text": "And now we have a garden. We're holding the next screening there."
          },
          {
            "speaker": "Flo",
            "text": "As soon as it gets dark, we'll start the film."
          }
        ],
        "questions": [
          {
            "question": "When will the film start?",
            "choices": [
              "As soon as it gets dark",
              "Before sunset",
              "When the garden opens"
            ],
            "correct": 0
          },
          {
            "question": "Where did the club meet when it started?",
            "choices": [
              "Indoors",
              "In a garden",
              "In a park"
            ],
            "correct": 0
          }
        ]
      },
      {
        "lines": [
          {
            "speaker": "Flo",
            "text": "What if it rains on Friday?"
          },
          {
            "speaker": "Luca",
            "text": "If it rains, we'll move the screening into the hall."
          },
          {
            "speaker": "Flo",
            "text": "I'll tell everyone where to check for updates."
          }
        ],
        "questions": [
          {
            "question": "Where will they go if it rains?",
            "choices": [
              "To the garden",
              "To a café",
              "Into the hall"
            ],
            "correct": 2
          },
          {
            "question": "How will Flo help people find the latest information?",
            "choices": [
              "Call everyone on Friday",
              "Tell them where to check for updates",
              "Put a sign in the hall"
            ],
            "correct": 1
          }
        ]
      }
    ]
  },
  "10": {
    "title": "Choosing Where to Work",
    "dialogues": [
      {
        "lines": [
          {
            "speaker": "Jin",
            "text": "What skills do you need at the help desk?"
          },
          {
            "speaker": "Alma",
            "text": "You have to explain things clearly and stay calm with upset customers."
          },
          {
            "speaker": "Jin",
            "text": "That sounds like a job for my sister."
          }
        ],
        "questions": [
          {
            "question": "What skill does the second speaker mention?",
            "choices": [
              "Explaining things clearly",
              "Writing software",
              "Speaking three languages"
            ],
            "correct": 0
          },
          {
            "question": "How should help-desk staff react to upset customers?",
            "choices": [
              "End the call immediately.",
              "Stay calm.",
              "Pass every call to a manager."
            ],
            "correct": 1
          }
        ]
      },
      {
        "lines": [
          {
            "speaker": "Jin",
            "text": "Which job would you rather take?"
          },
          {
            "speaker": "Alma",
            "text": "The one at the library. It pays less, but the hours suit me better."
          },
          {
            "speaker": "Jin",
            "text": "So the schedule matters more than the salary."
          }
        ],
        "questions": [
          {
            "question": "Why does the second speaker prefer the library job?",
            "choices": [
              "It pays more",
              "It is closer",
              "The hours suit them"
            ],
            "correct": 2
          },
          {
            "question": "How does the library salary compare?",
            "choices": [
              "It's higher.",
              "It's the same.",
              "It's lower."
            ],
            "correct": 2
          }
        ]
      }
    ]
  },
  "11": {
    "title": "A Bridge and Its Makers",
    "dialogues": [
      {
        "lines": [
          {
            "speaker": "Eva",
            "text": "Who built the old bridge?"
          },
          {
            "speaker": "Ravi",
            "text": "It was designed by a local engineer and built by a railway company."
          },
          {
            "speaker": "Eva",
            "text": "I didn't know it was a railway bridge."
          }
        ],
        "questions": [
          {
            "question": "Who designed the bridge?",
            "choices": [
              "A local engineer",
              "A railway company",
              "A visiting artist"
            ],
            "correct": 0
          },
          {
            "question": "Who built the bridge?",
            "choices": [
              "A local council",
              "A group of artists",
              "A railway company"
            ],
            "correct": 2
          }
        ]
      },
      {
        "lines": [
          {
            "speaker": "Eva",
            "text": "What is produced in this valley?"
          },
          {
            "speaker": "Ravi",
            "text": "Coffee is grown on the hillsides and roasted in town."
          },
          {
            "speaker": "Eva",
            "text": "Let's try some before we leave."
          }
        ],
        "questions": [
          {
            "question": "Where is the coffee roasted?",
            "choices": [
              "On the hillsides",
              "In another country",
              "In town"
            ],
            "correct": 2
          },
          {
            "question": "Where is the coffee grown?",
            "choices": [
              "On the hillsides",
              "In town",
              "By the sea"
            ],
            "correct": 0
          }
        ]
      }
    ]
  },
  "12": {
    "title": "A Long Saturday",
    "dialogues": [
      {
        "lines": [
          {
            "speaker": "Ava",
            "text": "What were you doing when the lights went out?"
          },
          {
            "speaker": "Remy",
            "text": "I was cooking dinner. Luckily, the stove still worked."
          },
          {
            "speaker": "Ava",
            "text": "We were watching a film and missed the ending."
          }
        ],
        "questions": [
          {
            "question": "What was the second speaker doing?",
            "choices": [
              "Cooking",
              "Watching a film",
              "Driving"
            ],
            "correct": 0
          },
          {
            "question": "What happened to Ava's film?",
            "choices": [
              "They missed the ending.",
              "They restarted it.",
              "They watched it outside."
            ],
            "correct": 0
          }
        ]
      },
      {
        "lines": [
          {
            "speaker": "Ava",
            "text": "You look tired. What have you been doing?"
          },
          {
            "speaker": "Remy",
            "text": "I've been packing boxes all morning. I haven't taken a break yet."
          },
          {
            "speaker": "Ava",
            "text": "Let's stop for lunch now."
          }
        ],
        "questions": [
          {
            "question": "Why is the second speaker tired?",
            "choices": [
              "They haven't slept",
              "They've been driving",
              "They've been packing"
            ],
            "correct": 2
          },
          {
            "question": "When does Ava suggest stopping?",
            "choices": [
              "After packing more boxes",
              "Now, for lunch",
              "At the end of the day"
            ],
            "correct": 1
          }
        ]
      }
    ]
  },
  "13": {
    "title": "Behind the Film",
    "dialogues": [
      {
        "lines": [
          {
            "speaker": "Dan",
            "text": "Is the film worth watching?"
          },
          {
            "speaker": "Nia",
            "text": "Yes, if you like slow mysteries. The ending surprised me."
          },
          {
            "speaker": "Dan",
            "text": "I'll give it a try, then."
          }
        ],
        "questions": [
          {
            "question": "What does the second speaker praise?",
            "choices": [
              "The surprising ending",
              "The fast action",
              "The soundtrack"
            ],
            "correct": 0
          },
          {
            "question": "Who might enjoy the film?",
            "choices": [
              "Someone looking for a fast comedy",
              "Someone who likes slow mysteries",
              "Someone who dislikes surprises"
            ],
            "correct": 1
          }
        ]
      },
      {
        "lines": [
          {
            "speaker": "Dan",
            "text": "Was the train scene filmed in a studio?"
          },
          {
            "speaker": "Nia",
            "text": "No. They used an old station, then added the train digitally."
          },
          {
            "speaker": "Dan",
            "text": "That explains why the platform looked so realistic."
          }
        ],
        "questions": [
          {
            "question": "What was added digitally?",
            "choices": [
              "The platform",
              "The station",
              "The train"
            ],
            "correct": 2
          },
          {
            "question": "Where did they film the platform scene?",
            "choices": [
              "In a studio",
              "On a moving train",
              "At an old station"
            ],
            "correct": 2
          }
        ]
      }
    ]
  },
  "14": {
    "title": "Signs Without Words",
    "dialogues": [
      {
        "lines": [
          {
            "speaker": "Ari",
            "text": "What does that hand signal mean here?"
          },
          {
            "speaker": "Bea",
            "text": "The cyclist is showing that she's turning left."
          },
          {
            "speaker": "Ari",
            "text": "I thought she was telling me to stop."
          }
        ],
        "questions": [
          {
            "question": "What does the cyclist mean?",
            "choices": [
              "She's turning left",
              "She's stopping",
              "She's turning right"
            ],
            "correct": 0
          },
          {
            "question": "What did Ari first think the signal meant?",
            "choices": [
              "Turn left",
              "Turn right",
              "Stop"
            ],
            "correct": 2
          }
        ]
      },
      {
        "lines": [
          {
            "speaker": "Ari",
            "text": "Can we take photos in this room?"
          },
          {
            "speaker": "Bea",
            "text": "No, the sign says you mustn't take pictures. You can take them in the lobby."
          },
          {
            "speaker": "Ari",
            "text": "Okay, I'll put my phone away."
          }
        ],
        "questions": [
          {
            "question": "Where are photos allowed?",
            "choices": [
              "In this room",
              "Nowhere in the building",
              "In the lobby"
            ],
            "correct": 2
          },
          {
            "question": "What will Ari do with the phone?",
            "choices": [
              "Put it away.",
              "Take a photo.",
              "Charge it."
            ],
            "correct": 0
          }
        ]
      }
    ]
  },
  "15": {
    "title": "The Missed Train",
    "dialogues": [
      {
        "lines": [
          {
            "speaker": "Hana",
            "text": "What would you do if you missed the last train?"
          },
          {
            "speaker": "Leo",
            "text": "I'd call a cab. It's too far to walk at night."
          },
          {
            "speaker": "Hana",
            "text": "I'd probably ask my brother for a ride."
          }
        ],
        "questions": [
          {
            "question": "What would the second speaker do?",
            "choices": [
              "Call a cab",
              "Walk home",
              "Call their brother"
            ],
            "correct": 0
          },
          {
            "question": "Why wouldn't Leo walk home?",
            "choices": [
              "It's too far at night.",
              "It's raining.",
              "The road is closed."
            ],
            "correct": 0
          }
        ]
      },
      {
        "lines": [
          {
            "speaker": "Hana",
            "text": "If I'd checked the schedule, I wouldn't have missed the train."
          },
          {
            "speaker": "Leo",
            "text": "You could have caught the bus, too."
          },
          {
            "speaker": "Hana",
            "text": "I wish I'd thought of that earlier."
          }
        ],
        "questions": [
          {
            "question": "What does the first speaker regret?",
            "choices": [
              "Taking the bus",
              "Calling a cab",
              "Not checking the schedule"
            ],
            "correct": 2
          },
          {
            "question": "What alternative does Leo mention?",
            "choices": [
              "An earlier train",
              "A bus",
              "Walking home"
            ],
            "correct": 1
          }
        ]
      }
    ]
  },
  "16": {
    "title": "The Club's Messages",
    "dialogues": [
      {
        "lines": [
          {
            "speaker": "Lee",
            "text": "What did Jo say about the rehearsal?"
          },
          {
            "speaker": "Fran",
            "text": "She said she was stuck at work and asked me to save her a seat."
          },
          {
            "speaker": "Lee",
            "text": "I'll leave one free near the door."
          }
        ],
        "questions": [
          {
            "question": "What did Jo ask for?",
            "choices": [
              "A seat",
              "A ride home",
              "A later rehearsal"
            ],
            "correct": 0
          },
          {
            "question": "Why is Jo late for rehearsal?",
            "choices": [
              "She missed her train.",
              "She's stuck at work.",
              "She forgot the time."
            ],
            "correct": 1
          }
        ]
      },
      {
        "lines": [
          {
            "speaker": "Lee",
            "text": "Did everyone get the message?"
          },
          {
            "speaker": "Fran",
            "text": "Max said he hadn't received it. He asked when we were meeting."
          },
          {
            "speaker": "Lee",
            "text": "Tell him it's still six o'clock."
          }
        ],
        "questions": [
          {
            "question": "What did Max want to know?",
            "choices": [
              "Where Jo works",
              "Who sent the message",
              "The meeting time"
            ],
            "correct": 2
          },
          {
            "question": "Had Max received the message?",
            "choices": [
              "Yes, he had.",
              "Yes, but he lost it.",
              "No, he hadn't."
            ],
            "correct": 2
          }
        ]
      }
    ]
  }
};
