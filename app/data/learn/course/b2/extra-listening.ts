import type { UnitListeningContent } from "../extra-listening";

export const unitListening: Readonly<Record<number, UnitListeningContent>> = {
  "1": {
    "title": "Beyond First Impressions",
    "dialogues": [
      {
        "lines": [
          {
            "speaker": "Alex",
            "text": "You described Tess as reserved. Does that affect how she leads?"
          },
          {
            "speaker": "Mina",
            "text": "Only at first. She lets others speak before offering a view, which can be mistaken for indecision."
          },
          {
            "speaker": "Alex",
            "text": "So what looks like hesitation is often deliberate."
          }
        ],
        "questions": [
          {
            "question": "How does Tess usually lead a discussion?",
            "choices": [
              "She listens before giving her view",
              "She avoids giving an opinion",
              "She decides before the discussion"
            ],
            "correct": 0
          },
          {
            "question": "Why might people misjudge Tess's leadership?",
            "choices": [
              "She voices her opinion before hearing others.",
              "Her deliberate pauses can look like uncertainty.",
              "Her instructions often contradict each other."
            ],
            "correct": 1
          }
        ]
      },
      {
        "lines": [
          {
            "speaker": "Alex",
            "text": "My siblings and I were brought up much the same way, yet we've turned out quite differently."
          },
          {
            "speaker": "Mina",
            "text": "Mine too. My sister thrives on competition, whereas I do better when nobody is keeping score."
          },
          {
            "speaker": "Alex",
            "text": "Perhaps the same rules felt different to each of us."
          }
        ],
        "questions": [
          {
            "question": "How do the second speaker and their sister differ?",
            "choices": [
              "They were brought up in different homes",
              "They agree on how to measure success",
              "They respond differently to competition"
            ],
            "correct": 2
          },
          {
            "question": "What do the speakers suggest about a shared upbringing?",
            "choices": [
              "It guarantees that siblings share the same priorities.",
              "It explains how well someone handles every competition.",
              "Siblings can experience the same rules differently."
            ],
            "correct": 2
          }
        ]
      }
    ]
  },
  "2": {
    "title": "The Explanation We Missed",
    "dialogues": [
      {
        "lines": [
          {
            "speaker": "Rae",
            "text": "We should have asked residents before moving the bus stop."
          },
          {
            "speaker": "Jules",
            "text": "In hindsight, yes. We assumed the shorter walk would benefit everyone."
          },
          {
            "speaker": "Rae",
            "text": "We overlooked the lack of a safe crossing."
          }
        ],
        "questions": [
          {
            "question": "What did the first speaker's team overlook?",
            "choices": [
              "The lack of a safe crossing",
              "The length of the old route",
              "The number of residents"
            ],
            "correct": 0
          },
          {
            "question": "What assumption informed the decision to move the stop?",
            "choices": [
              "Residents wanted to cross a busier road.",
              "The old route was already unsafe.",
              "A shorter walk would help everyone."
            ],
            "correct": 2
          }
        ]
      },
      {
        "lines": [
          {
            "speaker": "Rae",
            "text": "The gate was locked, but the footprints led straight through it."
          },
          {
            "speaker": "Jules",
            "text": "It might have been locked after the person went through."
          },
          {
            "speaker": "Rae",
            "text": "That fits better than assuming they climbed over it."
          }
        ],
        "questions": [
          {
            "question": "What explanation does the second speaker propose?",
            "choices": [
              "The person climbed the gate",
              "The footprints were made by an animal",
              "The gate was locked later"
            ],
            "correct": 2
          },
          {
            "question": "Why does the later-locking theory fit the evidence?",
            "choices": [
              "The person could have walked through before the gate was locked.",
              "The footprints show someone climbing over the gate.",
              "A locked gate would prevent tracks forming on either side."
            ],
            "correct": 0
          }
        ]
      }
    ]
  },
  "3": {
    "title": "Two Ways to See a City",
    "dialogues": [
      {
        "lines": [
          {
            "speaker": "Omar",
            "text": "If you only have a day, I'd skip the main square and explore the old docks."
          },
          {
            "speaker": "Bea",
            "text": "Are the docks worth visiting in winter?"
          },
          {
            "speaker": "Omar",
            "text": "Yes. The workshops are sheltered and much quieter then."
          }
        ],
        "questions": [
          {
            "question": "What makes the docks a good winter choice?",
            "choices": [
              "Shelter and fewer crowds",
              "Lower hotel prices",
              "A festival in the main square"
            ],
            "correct": 0
          },
          {
            "question": "What itinerary does Omar suggest for a short visit?",
            "choices": [
              "Explore the old docks and skip the main square.",
              "Visit only the main square.",
              "Wait until summer to visit the docks."
            ],
            "correct": 0
          }
        ]
      },
      {
        "lines": [
          {
            "speaker": "Omar",
            "text": "The capital is better connected, but I'd rather pay less rent and cycle to work."
          },
          {
            "speaker": "Bea",
            "text": "Then the smaller city sounds like a better fit, provided it has the work you want."
          },
          {
            "speaker": "Omar",
            "text": "That's the part I still need to check."
          }
        ],
        "questions": [
          {
            "question": "What does the first speaker still need to investigate?",
            "choices": [
              "Cycle routes",
              "Rental costs",
              "Job opportunities"
            ],
            "correct": 2
          },
          {
            "question": "What trade-off is Omar considering?",
            "choices": [
              "Lower rent versus higher grocery prices.",
              "Better connections versus lower rent and an easier cycle commute.",
              "A shorter commute versus having to give up cycling."
            ],
            "correct": 1
          }
        ]
      }
    ]
  },
  "4": {
    "title": "The Afternoon Slump",
    "dialogues": [
      {
        "lines": [
          {
            "speaker": "Ana",
            "text": "I kept having coffee whenever I felt tired, which made it harder to sleep."
          },
          {
            "speaker": "Rob",
            "text": "What changed when you stopped?"
          },
          {
            "speaker": "Ana",
            "text": "I started taking a short walk after lunch. I still get tired, but the slump passes sooner."
          }
        ],
        "questions": [
          {
            "question": "What replaced the afternoon coffee?",
            "choices": [
              "A short walk",
              "A nap",
              "An earlier lunch"
            ],
            "correct": 0
          },
          {
            "question": "Why did relying on coffee become a problem?",
            "choices": [
              "It stopped the speaker from eating lunch.",
              "It made sleeping harder.",
              "It made walks feel more tiring."
            ],
            "correct": 1
          }
        ]
      },
      {
        "lines": [
          {
            "speaker": "Ana",
            "text": "I thought I'd sleep better if I went to bed earlier, but I just lay awake."
          },
          {
            "speaker": "Rob",
            "text": "A consistent wake-up time might be a better starting point."
          },
          {
            "speaker": "Ana",
            "text": "I'll try keeping it the same on weekends as well."
          }
        ],
        "questions": [
          {
            "question": "What will the first speaker keep consistent?",
            "choices": [
              "Bedtime",
              "The length of afternoon naps",
              "Wake-up time"
            ],
            "correct": 2
          },
          {
            "question": "What did going to bed earlier achieve?",
            "choices": [
              "The speaker fell asleep more quickly.",
              "The speaker stopped waking up at night.",
              "The speaker spent longer awake in bed."
            ],
            "correct": 2
          }
        ]
      }
    ]
  },
  "5": {
    "title": "Making and Passing On a Connection",
    "dialogues": [
      {
        "lines": [
          {
            "speaker": "Leon",
            "text": "I never know how to join a conversation at a conference."
          },
          {
            "speaker": "Maya",
            "text": "Start with the talk you've both just heard. Ask which part they found most useful."
          },
          {
            "speaker": "Leon",
            "text": "That's easier than trying to come up with a clever introduction."
          }
        ],
        "questions": [
          {
            "question": "What opening does the second speaker suggest?",
            "choices": [
              "Ask about the shared talk",
              "Introduce yourself with a joke",
              "Ask about the person's job immediately"
            ],
            "correct": 0
          },
          {
            "question": "Why does referring to the talk make a useful opening?",
            "choices": [
              "It shows the speaker already knows the other person's job.",
              "It proves the speaker agreed with the presenter.",
              "Both people have just heard it."
            ],
            "correct": 2
          }
        ]
      },
      {
        "lines": [
          {
            "speaker": "Leon",
            "text": "Nina told me she liked the proposal but worried about the timetable."
          },
          {
            "speaker": "Maya",
            "text": "Did she ask us to postpone the launch?"
          },
          {
            "speaker": "Leon",
            "text": "No. She wanted more time for testing within the same deadline."
          }
        ],
        "questions": [
          {
            "question": "What did Nina want?",
            "choices": [
              "A postponed launch",
              "A different proposal",
              "More testing time within the deadline"
            ],
            "correct": 2
          },
          {
            "question": "How did Nina feel about the proposal itself?",
            "choices": [
              "She liked it.",
              "She wanted to replace it.",
              "She hadn't read it yet."
            ],
            "correct": 0
          }
        ]
      }
    ]
  },
  "6": {
    "title": "What Made the Headlines",
    "dialogues": [
      {
        "lines": [
          {
            "speaker": "Ada",
            "text": "The headline says the library is closing, but the article only mentions a two-week renovation."
          },
          {
            "speaker": "Chris",
            "text": "That changes the story considerably. Is it reopening at the same location?"
          },
          {
            "speaker": "Ada",
            "text": "Yes, with longer evening hours."
          }
        ],
        "questions": [
          {
            "question": "What is actually happening to the library?",
            "choices": [
              "It is closing temporarily for renovations",
              "It is moving permanently",
              "It is cutting evening hours"
            ],
            "correct": 0
          },
          {
            "question": "Why is the headline misleading?",
            "choices": [
              "It suggests a more lasting closure than the article describes.",
              "It gives a longer reopening schedule than the article.",
              "It claims the library will be open in the evening."
            ],
            "correct": 0
          }
        ]
      },
      {
        "lines": [
          {
            "speaker": "Ada",
            "text": "The train had just pulled away when I noticed the suitcase was still on the platform."
          },
          {
            "speaker": "Chris",
            "text": "How did you get it back?"
          },
          {
            "speaker": "Ada",
            "text": "The guard called the station, and someone put it on the next train."
          }
        ],
        "questions": [
          {
            "question": "How was the suitcase returned?",
            "choices": [
              "The train reversed",
              "The speaker drove back",
              "It was sent on the next train"
            ],
            "correct": 2
          },
          {
            "question": "How did the guard help?",
            "choices": [
              "By carrying the suitcase from another carriage.",
              "By contacting the station where the suitcase was left.",
              "By arranging for the first train to turn back."
            ],
            "correct": 1
          }
        ]
      }
    ]
  },
  "7": {
    "title": "Taking Control of Notifications",
    "dialogues": [
      {
        "lines": [
          {
            "speaker": "Fran",
            "text": "Our group app was supposed to save time, but I'm checking it constantly."
          },
          {
            "speaker": "Jay",
            "text": "Would switching off the alerts help?"
          },
          {
            "speaker": "Fran",
            "text": "For most groups, yes. I'd keep them on for the care team."
          }
        ],
        "questions": [
          {
            "question": "Which alerts will the first speaker keep?",
            "choices": [
              "The care team's alerts",
              "All group alerts",
              "Only calendar alerts"
            ],
            "correct": 0
          },
          {
            "question": "What unintended effect did the app have?",
            "choices": [
              "It made the team forget important appointments.",
              "The speaker kept checking it.",
              "It stopped alerts from reaching the speaker."
            ],
            "correct": 1
          }
        ]
      },
      {
        "lines": [
          {
            "speaker": "Fran",
            "text": "I used to share every article that sounded convincing."
          },
          {
            "speaker": "Jay",
            "text": "What made you stop?"
          },
          {
            "speaker": "Fran",
            "text": "I caught myself forwarding something I hadn't even read beyond the headline."
          }
        ],
        "questions": [
          {
            "question": "What made the first speaker reconsider sharing?",
            "choices": [
              "They no longer trusted any news source",
              "Nobody responded to their posts",
              "They had shared without reading the full article"
            ],
            "correct": 2
          },
          {
            "question": "What habit is the speaker questioning?",
            "choices": [
              "Reading entire articles before sharing them.",
              "Checking whether friends had seen the same story.",
              "Treating a convincing headline as enough reason to share."
            ],
            "correct": 2
          }
        ]
      }
    ]
  },
  "8": {
    "title": "A Better Design",
    "dialogues": [
      {
        "lines": [
          {
            "speaker": "Lena",
            "text": "Where did the idea for the folding sign come from?"
          },
          {
            "speaker": "Will",
            "text": "I watched a vendor struggle to carry two signs home on a bike."
          },
          {
            "speaker": "Lena",
            "text": "So the design grew out of an ordinary problem."
          }
        ],
        "questions": [
          {
            "question": "What inspired the folding sign?",
            "choices": [
              "A vendor's transport problem",
              "A request from cyclists",
              "A shortage of signs"
            ],
            "correct": 0
          },
          {
            "question": "What practical benefit does the design aim to offer?",
            "choices": [
              "Make signs readable from farther away.",
              "Reduce the time needed to print a sign.",
              "Make signs easier to carry."
            ],
            "correct": 2
          }
        ]
      },
      {
        "lines": [
          {
            "speaker": "Lena",
            "text": "The first version saved space, but the hinges trapped people's fingers."
          },
          {
            "speaker": "Will",
            "text": "How did you solve that?"
          },
          {
            "speaker": "Lena",
            "text": "We covered the hinges with flexible strips and tested them with the vendors."
          }
        ],
        "questions": [
          {
            "question": "What did the team change?",
            "choices": [
              "They made the sign larger",
              "They removed the hinges",
              "They covered the hinges"
            ],
            "correct": 2
          },
          {
            "question": "Why did the first design need another round of testing?",
            "choices": [
              "It created a safety problem at the hinges.",
              "It took up more space than expected.",
              "Vendors wanted longer signs."
            ],
            "correct": 0
          }
        ]
      }
    ]
  },
  "9": {
    "title": "Changing How We Work",
    "dialogues": [
      {
        "lines": [
          {
            "speaker": "Ari",
            "text": "We used to book a separate desk for each person. Now people tend to share one when their shifts don't overlap."
          },
          {
            "speaker": "Tess",
            "text": "Does everyone remember to clear it?"
          },
          {
            "speaker": "Ari",
            "text": "Most do. We put a tray nearby for anything that gets left behind."
          }
        ],
        "questions": [
          {
            "question": "Why can staff share desks?",
            "choices": [
              "Their shifts don't overlap",
              "They work on the same tasks",
              "Nobody needs a desk all day"
            ],
            "correct": 0
          },
          {
            "question": "What is the tray for?",
            "choices": [
              "Items left behind on a shared desk.",
              "Booking requests from staff.",
              "Tools people use on every shift."
            ],
            "correct": 0
          }
        ]
      },
      {
        "lines": [
          {
            "speaker": "Ari",
            "text": "I'm getting used to working late, but I still miss having evenings free."
          },
          {
            "speaker": "Tess",
            "text": "Could you swap one shift a week?"
          },
          {
            "speaker": "Ari",
            "text": "I can now. I couldn't when I first started."
          }
        ],
        "questions": [
          {
            "question": "What can the first speaker do now?",
            "choices": [
              "Stop working evenings altogether",
              "Work from home",
              "Swap a weekly shift"
            ],
            "correct": 2
          },
          {
            "question": "Why does swapping one shift matter?",
            "choices": [
              "It eliminates all late shifts.",
              "It gives the speaker some evening time back.",
              "It lets the speaker work from home."
            ],
            "correct": 1
          }
        ]
      }
    ]
  },
  "10": {
    "title": "The Delivery Problem",
    "dialogues": [
      {
        "lines": [
          {
            "speaker": "Eva",
            "text": "I wish the courier would ring the bell instead of leaving boxes in the rain."
          },
          {
            "speaker": "Noah",
            "text": "Has this happened more than once?"
          },
          {
            "speaker": "Eva",
            "text": "Twice this week. The second box was damaged."
          }
        ],
        "questions": [
          {
            "question": "Why is the first speaker complaining?",
            "choices": [
              "Boxes were left in the rain",
              "Packages were sent to the wrong address",
              "The courier rang too often"
            ],
            "correct": 0
          },
          {
            "question": "What happened to the second parcel?",
            "choices": [
              "It was never delivered.",
              "It was damaged.",
              "It arrived at the wrong address."
            ],
            "correct": 1
          }
        ]
      },
      {
        "lines": [
          {
            "speaker": "Eva",
            "text": "I appreciate the replacement, but can you also update the delivery instructions?"
          },
          {
            "speaker": "Noah",
            "text": "Certainly. I'll add that drivers should ring the bell and wait."
          },
          {
            "speaker": "Eva",
            "text": "That would solve the problem."
          }
        ],
        "questions": [
          {
            "question": "What change does the customer request?",
            "choices": [
              "Refund the replacement",
              "Change the delivery address",
              "Update the delivery instructions"
            ],
            "correct": 2
          },
          {
            "question": "Why does the customer ask for a change after accepting a replacement?",
            "choices": [
              "They want to return the replacement immediately.",
              "They think the bell needs replacing.",
              "They want to prevent the same issue in future."
            ],
            "correct": 2
          }
        ]
      }
    ]
  },
  "11": {
    "title": "A Difficult Call",
    "dialogues": [
      {
        "lines": [
          {
            "speaker": "Rin",
            "text": "If we'd kept quiet about the mistake, the client might never have noticed."
          },
          {
            "speaker": "Cal",
            "text": "Perhaps, but they'd have made a decision based on the wrong figures."
          },
          {
            "speaker": "Rin",
            "text": "You're right. Telling them early gave them time to change their plan."
          }
        ],
        "questions": [
          {
            "question": "Why did disclosing the mistake help the client?",
            "choices": [
              "They had time to change their plan",
              "They received a discount",
              "They could hide the mistake"
            ],
            "correct": 0
          },
          {
            "question": "What risk would keeping quiet have created?",
            "choices": [
              "The client would have canceled before seeing the figures.",
              "The client might ask for an earlier delivery.",
              "The client might act on incorrect figures."
            ],
            "correct": 2
          }
        ]
      },
      {
        "lines": [
          {
            "speaker": "Rin",
            "text": "Would you accept a promotion that meant hardly seeing your family?"
          },
          {
            "speaker": "Cal",
            "text": "I'd consider it only if the hours were negotiable. The title isn't worth missing every evening at home."
          },
          {
            "speaker": "Rin",
            "text": "That sounds like a clear boundary."
          }
        ],
        "questions": [
          {
            "question": "What would make the promotion acceptable?",
            "choices": [
              "A better title",
              "A larger team",
              "Negotiable hours"
            ],
            "correct": 2
          },
          {
            "question": "What does the speaker value more than the job title?",
            "choices": [
              "Time with family",
              "Having a larger team",
              "Getting more public recognition"
            ],
            "correct": 0
          }
        ]
      }
    ]
  },
  "12": {
    "title": "Travel at a Different Pace",
    "dialogues": [
      {
        "lines": [
          {
            "speaker": "Ivo",
            "text": "I expected to get used to eating late, but after a week I was still hungry at six."
          },
          {
            "speaker": "Mara",
            "text": "What did you do in the end?"
          },
          {
            "speaker": "Ivo",
            "text": "I had a small snack in the afternoon so I could join everyone for dinner."
          }
        ],
        "questions": [
          {
            "question": "How did the first speaker adapt?",
            "choices": [
              "They had an afternoon snack",
              "They ate dinner alone at six",
              "They stopped eating dinner"
            ],
            "correct": 0
          },
          {
            "question": "Why didn't the speaker simply eat dinner earlier?",
            "choices": [
              "They wanted to join the others at dinner.",
              "The shops were all closed before dinner.",
              "They weren't hungry before dinner."
            ],
            "correct": 0
          }
        ]
      },
      {
        "lines": [
          {
            "speaker": "Ivo",
            "text": "We could book a guided tour or take the night train and explore on our own."
          },
          {
            "speaker": "Mara",
            "text": "The tour would be easier, but I'd rather set our own pace."
          },
          {
            "speaker": "Ivo",
            "text": "Then let's book the train and leave the return date open."
          }
        ],
        "questions": [
          {
            "question": "Why do they choose independent travel?",
            "choices": [
              "They dislike trains",
              "They need a fixed return date",
              "They want to set their own pace"
            ],
            "correct": 2
          },
          {
            "question": "What does leaving the return date open let them do?",
            "choices": [
              "Guarantee a cheaper fare.",
              "Decide later how long to stay.",
              "Join every guided tour."
            ],
            "correct": 1
          }
        ]
      }
    ]
  }
};
