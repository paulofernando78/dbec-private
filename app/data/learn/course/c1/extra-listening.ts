import type { UnitListeningContent } from "../extra-listening";

export const unitListening: Readonly<Record<number, UnitListeningContent>> = {
  "1": {
    "title": "What Keeps a Friendship Going",
    "dialogues": [
      {
        "lines": [
          {
            "speaker": "Ada",
            "text": "I used to think loyalty meant agreeing with a friend in public, whatever happened."
          },
          {
            "speaker": "Milo",
            "text": "I'd distinguish loyalty from uncritical support. A friend can have your back and still call you out in private."
          },
          {
            "speaker": "Ada",
            "text": "Fair point. It was the private conversation that helped me see what I'd done."
          }
        ],
        "questions": [
          {
            "question": "What distinction does the second speaker draw?",
            "choices": [
              "Loyalty can include honest private criticism",
              "Loyalty requires public disagreement",
              "True friends avoid discussing mistakes"
            ],
            "correct": 0
          },
          {
            "question": "What did the private conversation accomplish?",
            "choices": [
              "It persuaded the speaker to defend the mistake publicly.",
              "It helped the speaker recognize their mistake.",
              "It resolved a dispute about who should speak first."
            ],
            "correct": 1
          }
        ]
      },
      {
        "lines": [
          {
            "speaker": "Ada",
            "text": "Once we stopped working together, I assumed we'd drift apart."
          },
          {
            "speaker": "Milo",
            "text": "What kept you in touch?"
          },
          {
            "speaker": "Ada",
            "text": "We made a habit of booking the next walk before we said goodbye, even if it was a month away."
          }
        ],
        "questions": [
          {
            "question": "How did they keep the friendship going?",
            "choices": [
              "They went back to the same workplace",
              "They relied on spontaneous invitations",
              "They arranged the next meeting in advance"
            ],
            "correct": 2
          },
          {
            "question": "What assumption proved wrong when the speakers stopped working together?",
            "choices": [
              "That their walks would become more frequent.",
              "That the friendship depended on a shared hobby.",
              "That their friendship would fade without daily contact."
            ],
            "correct": 2
          }
        ]
      }
    ]
  },
  "2": {
    "title": "Dressing for the Room",
    "dialogues": [
      {
        "lines": [
          {
            "speaker": "Tess",
            "text": "I wear a suit when I pitch to investors, although it's hardly how I dress outside work."
          },
          {
            "speaker": "Robin",
            "text": "Do you find that feels like pretending?"
          },
          {
            "speaker": "Tess",
            "text": "Not exactly. It's one version of me, just the one this room expects."
          }
        ],
        "questions": [
          {
            "question": "How does the first speaker see the suit?",
            "choices": [
              "As a version of their identity suited to the setting",
              "As a disguise they resent",
              "As an attempt to reject expectations"
            ],
            "correct": 0
          },
          {
            "question": "How does the second speaker test the first speaker's view of professional dress?",
            "choices": [
              "They ask whether investors would prefer casual dress.",
              "They suggest making the same outfit part of everyday life.",
              "They ask whether dressing for investors feels inauthentic."
            ],
            "correct": 2
          }
        ]
      },
      {
        "lines": [
          {
            "speaker": "Tess",
            "text": "The panel thought she lacked confidence because she spoke softly."
          },
          {
            "speaker": "Robin",
            "text": "Odd, isn't it? She gave the clearest answers and never once lost her train of thought."
          },
          {
            "speaker": "Tess",
            "text": "It says a lot about what the panel mistakes for authority."
          }
        ],
        "questions": [
          {
            "question": "What is being criticized?",
            "choices": [
              "Rewarding people for answering questions clearly",
              "Giving a candidate time to prepare",
              "Judging confidence by delivery over substance"
            ],
            "correct": 2
          },
          {
            "question": "What evidence challenges the panel's judgment?",
            "choices": [
              "The candidate was clear and composed despite speaking softly.",
              "The candidate raised her voice as the interview went on.",
              "Other candidates gave equally clear answers."
            ],
            "correct": 0
          }
        ]
      }
    ]
  },
  "3": {
    "title": "When Convenience Has a Cost",
    "dialogues": [
      {
        "lines": [
          {
            "speaker": "Ravi",
            "text": "The new screening tool could save us hours, but I'm wary of treating its recommendations as neutral."
          },
          {
            "speaker": "Nia",
            "text": "Agreed. It learns from earlier decisions, so it could reproduce the exclusions we're trying to fix."
          },
          {
            "speaker": "Ravi",
            "text": "Then we should audit the results before relying on it."
          }
        ],
        "questions": [
          {
            "question": "What is the concern about the tool?",
            "choices": [
              "It may repeat biases in earlier decisions",
              "It will give entirely random results",
              "It cannot process past decisions"
            ],
            "correct": 0
          },
          {
            "question": "Why do they want an audit before relying on the screening tool?",
            "choices": [
              "Efficiency alone does not establish that its decisions are fair.",
              "An audit will teach the tool to process larger files.",
              "The tool has already made their work slower."
            ],
            "correct": 0
          }
        ]
      },
      {
        "lines": [
          {
            "speaker": "Ravi",
            "text": "I turned off the automatic reminders and suddenly started forgetting appointments."
          },
          {
            "speaker": "Nia",
            "text": "So the tool was doing more than interrupting you."
          },
          {
            "speaker": "Ravi",
            "text": "Exactly. I'm trying to keep the reminders I need and silence the rest."
          }
        ],
        "questions": [
          {
            "question": "What balance is the first speaker seeking?",
            "choices": [
              "Stop using a digital calendar entirely",
              "Restore every notification",
              "Keep useful reminders and reduce interruptions"
            ],
            "correct": 2
          },
          {
            "question": "What did turning the reminders off reveal?",
            "choices": [
              "The reminders had been causing missed appointments.",
              "Some interruptions had been serving a useful purpose.",
              "The appointments were being canceled automatically."
            ],
            "correct": 1
          }
        ]
      }
    ]
  },
  "4": {
    "title": "A Convincing Story",
    "dialogues": [
      {
        "lines": [
          {
            "speaker": "Ari",
            "text": "I wore my lucky jacket for every interview. It wasn't the jacket that got me hired, obviously."
          },
          {
            "speaker": "Jules",
            "text": "But the ritual may have helped you feel in control when the outcome was uncertain."
          },
          {
            "speaker": "Ari",
            "text": "That's probably why I kept doing it."
          }
        ],
        "questions": [
          {
            "question": "Why might the ritual have helped?",
            "choices": [
              "It gave a sense of control",
              "It made the interview shorter",
              "It changed the interviewer's questions"
            ],
            "correct": 0
          },
          {
            "question": "What distinction does the speaker make about the lucky jacket?",
            "choices": [
              "The ritual mattered only because interviewers noticed the jacket.",
              "The ritual could help psychologically without causing the hiring decision.",
              "The jacket led directly to the job offer."
            ],
            "correct": 1
          }
        ]
      },
      {
        "lines": [
          {
            "speaker": "Ari",
            "text": "The footage looks convincing until you notice the same person crosses the street twice."
          },
          {
            "speaker": "Jules",
            "text": "Could it just be a loop in the edited clip?"
          },
          {
            "speaker": "Ari",
            "text": "Possibly. I'd want the original footage before calling it a hoax."
          }
        ],
        "questions": [
          {
            "question": "Why does the first speaker want the original footage?",
            "choices": [
              "To prove the clip is authentic",
              "To identify the person crossing the street",
              "To check whether editing explains the oddity"
            ],
            "correct": 2
          },
          {
            "question": "What detail first raises suspicion about the video?",
            "choices": [
              "The original footage has no sound.",
              "The camera changes angles during the crossing.",
              "The same person appears to cross the street twice."
            ],
            "correct": 2
          }
        ]
      }
    ]
  },
  "5": {
    "title": "What the Camera Leaves Out",
    "dialogues": [
      {
        "lines": [
          {
            "speaker": "Maya",
            "text": "The film barely mentions the strike, yet it's unmistakably about who gets to feel secure at work."
          },
          {
            "speaker": "Jo",
            "text": "That's what I liked. It shows the consequences through a family rather than explaining the dispute."
          },
          {
            "speaker": "Maya",
            "text": "The silence around the strike actually makes it more present."
          }
        ],
        "questions": [
          {
            "question": "How does the film convey the dispute?",
            "choices": [
              "Through its effects on a family",
              "Through interviews with the organizers",
              "Through a detailed historical explanation"
            ],
            "correct": 0
          },
          {
            "question": "What do the speakers suggest the film is fundamentally about?",
            "choices": [
              "How strike organizers are elected.",
              "Whether the family should move house.",
              "Who can count on security at work."
            ],
            "correct": 2
          }
        ]
      },
      {
        "lines": [
          {
            "speaker": "Maya",
            "text": "The pilot spends half its time explaining the rules of the fictional world."
          },
          {
            "speaker": "Jo",
            "text": "A little less exposition would help. Let the characters break a rule and show us what happens."
          },
          {
            "speaker": "Maya",
            "text": "That would establish the stakes much faster."
          }
        ],
        "questions": [
          {
            "question": "What change does the second speaker propose?",
            "choices": [
              "Add an opening explanation",
              "Make the rules more complicated",
              "Reveal rules through action"
            ],
            "correct": 2
          },
          {
            "question": "Why does the second speaker favor showing a rule being broken?",
            "choices": [
              "Viewers can grasp the consequences without lengthy exposition.",
              "It would let the writer avoid establishing any rules.",
              "It would make the fictional world less coherent."
            ],
            "correct": 0
          }
        ]
      }
    ]
  },
  "6": {
    "title": "Music on Your Own Terms",
    "dialogues": [
      {
        "lines": [
          {
            "speaker": "Lee",
            "text": "I used to skip every song my father played in the car. Now I put those songs on when I miss home."
          },
          {
            "speaker": "Em",
            "text": "It's funny how a song can come to mean something its lyrics never say."
          },
          {
            "speaker": "Lee",
            "text": "Exactly. It's the memory I'm listening to."
          }
        ],
        "questions": [
          {
            "question": "Why does the first speaker now play those songs?",
            "choices": [
              "They bring back memories of home",
              "They have begun to understand the lyrics",
              "They remind them of learning an instrument"
            ],
            "correct": 0
          },
          {
            "question": "What makes the songs meaningful beyond their lyrics?",
            "choices": [
              "The personal memories attached to them.",
              "The accuracy of their descriptions of home.",
              "The fact that the songs were rarely played."
            ],
            "correct": 0
          }
        ]
      },
      {
        "lines": [
          {
            "speaker": "Lee",
            "text": "Your label wants a single that sounds like your biggest hit."
          },
          {
            "speaker": "Em",
            "text": "I know, but copying it would lock me into a style I've already outgrown."
          },
          {
            "speaker": "Lee",
            "text": "Could you offer something new that still has the vocal sound people recognize?"
          }
        ],
        "questions": [
          {
            "question": "What compromise does the second speaker suggest?",
            "choices": [
              "Rewrite the old hit with different lyrics",
              "Release the old track unchanged",
              "Try a new style while retaining a familiar vocal sound"
            ],
            "correct": 2
          },
          {
            "question": "Why is the artist reluctant to copy the hit?",
            "choices": [
              "Their label has refused to release another single.",
              "It would tie them to a style they have moved beyond.",
              "The audience no longer recognizes their voice."
            ],
            "correct": 1
          }
        ]
      }
    ]
  },
  "7": {
    "title": "Making Room for Change",
    "dialogues": [
      {
        "lines": [
          {
            "speaker": "Lena",
            "text": "We thought moving to a smaller place would simplify our lives. What changed most was how we spent our evenings."
          },
          {
            "speaker": "Will",
            "text": "In what way?"
          },
          {
            "speaker": "Lena",
            "text": "We started meeting friends outside instead of staying home with rooms we rarely used."
          }
        ],
        "questions": [
          {
            "question": "What unexpected change followed the move?",
            "choices": [
              "They socialized outside more often",
              "They spent more time alone at home",
              "They needed more rooms"
            ],
            "correct": 0
          },
          {
            "question": "How did the move differ from what they expected?",
            "choices": [
              "It made their home larger than they had planned.",
              "It changed their social habits more than they had anticipated.",
              "It forced them to spend more evenings indoors."
            ],
            "correct": 1
          }
        ]
      },
      {
        "lines": [
          {
            "speaker": "Lena",
            "text": "I'd like to work fewer hours, but I don't want every free evening to become another obligation."
          },
          {
            "speaker": "Will",
            "text": "Then decide what you want the time for before filling it."
          },
          {
            "speaker": "Lena",
            "text": "You're right. I'd rather leave one evening completely open."
          }
        ],
        "questions": [
          {
            "question": "What will the first speaker leave unscheduled?",
            "choices": [
              "Every weekend",
              "A workday",
              "One evening"
            ],
            "correct": 2
          },
          {
            "question": "What risk does the speaker see in working fewer hours?",
            "choices": [
              "The shorter schedule would leave no evenings free.",
              "Their colleagues would refuse to cover any shifts.",
              "New commitments could take up all the time gained."
            ],
            "correct": 2
          }
        ]
      }
    ]
  },
  "8": {
    "title": "What Are We Really Buying?",
    "dialogues": [
      {
        "lines": [
          {
            "speaker": "Omar",
            "text": "I kept comparing the discount with the original price, as if the original price told me what the jacket was worth."
          },
          {
            "speaker": "Bea",
            "text": "Would you have wanted it at all without the sale tag?"
          },
          {
            "speaker": "Omar",
            "text": "Probably not. That's what made me put it back."
          }
        ],
        "questions": [
          {
            "question": "What made the first speaker reconsider?",
            "choices": [
              "They realized the discount was driving the purchase",
              "They found the same item in another color",
              "They noticed the jacket was damaged"
            ],
            "correct": 0
          },
          {
            "question": "Why is the original price a poor guide in this case?",
            "choices": [
              "The original price reflects current demand more accurately.",
              "The buyer knows the jacket has been priced below its cost.",
              "The price comparison distracts from whether the buyer wants the jacket at all."
            ],
            "correct": 2
          }
        ]
      },
      {
        "lines": [
          {
            "speaker": "Omar",
            "text": "The ad calls it a limited edition, but the same offer ran last month."
          },
          {
            "speaker": "Bea",
            "text": "The deadline creates urgency even when the scarcity isn't real."
          },
          {
            "speaker": "Omar",
            "text": "I'll wait and see whether I still want it tomorrow."
          }
        ],
        "questions": [
          {
            "question": "What tactic do the speakers identify?",
            "choices": [
              "Offering a genuine discount for loyal customers",
              "Explaining how the product is made",
              "Creating a sense of urgency"
            ],
            "correct": 2
          },
          {
            "question": "What makes the advertised scarcity questionable?",
            "choices": [
              "The same offer appeared the previous month.",
              "The price changes after the deadline.",
              "The offer is restricted to existing customers."
            ],
            "correct": 0
          }
        ]
      }
    ]
  },
  "9": {
    "title": "Working With Wildlife",
    "dialogues": [
      {
        "lines": [
          {
            "speaker": "Nina",
            "text": "Our visitors love feeding the ducks, but the birds are starting to gather by the road instead of the pond."
          },
          {
            "speaker": "Luis",
            "text": "Then signs alone may not be enough. We could explain where to watch them safely."
          },
          {
            "speaker": "Nina",
            "text": "That gives visitors something useful to do."
          }
        ],
        "questions": [
          {
            "question": "Why are the speakers concerned?",
            "choices": [
              "The ducks are gathering near the road",
              "Visitors cannot see the pond",
              "The ducks have stopped coming to the park"
            ],
            "correct": 0
          },
          {
            "question": "Why does the second speaker propose a place to watch the ducks?",
            "choices": [
              "It gives visitors a safer way to engage with the birds.",
              "It allows visitors to feed the ducks from the road.",
              "It encourages the birds to move away from the pond permanently."
            ],
            "correct": 0
          }
        ]
      },
      {
        "lines": [
          {
            "speaker": "Nina",
            "text": "I wanted to work with animals because I pictured being outdoors all day."
          },
          {
            "speaker": "Luis",
            "text": "What's the job actually like?"
          },
          {
            "speaker": "Nina",
            "text": "There is fieldwork, but most of my time goes into monitoring records and securing funding."
          }
        ],
        "questions": [
          {
            "question": "What surprised the first speaker about the job?",
            "choices": [
              "There is no fieldwork",
              "They work mainly with visitors",
              "Much of it is administrative"
            ],
            "correct": 2
          },
          {
            "question": "What expectation did the speaker have about working with animals?",
            "choices": [
              "They thought fundraising would take up most of their time.",
              "They thought they would spend most of the day outside.",
              "They thought the role would involve no fieldwork."
            ],
            "correct": 1
          }
        ]
      }
    ]
  },
  "10": {
    "title": "Choosing the Right Words",
    "dialogues": [
      {
        "lines": [
          {
            "speaker": "Ruth",
            "text": "Your presentation sounded certain, yet the evidence is still preliminary."
          },
          {
            "speaker": "Cal",
            "text": "I see what you mean. I'll say the results suggest a pattern and explain what we still need to test."
          },
          {
            "speaker": "Ruth",
            "text": "That will help people understand how much weight to give the findings."
          }
        ],
        "questions": [
          {
            "question": "What will the presenter change?",
            "choices": [
              "Qualify the claim and explain what still needs testing",
              "Remove the results altogether",
              "Use stronger language about certainty"
            ],
            "correct": 0
          },
          {
            "question": "What was the mismatch in the presentation?",
            "choices": [
              "The evidence was stronger than the speaker suggested.",
              "The wording sounded more certain than the evidence justified.",
              "The results were detailed but unrelated to the research question."
            ],
            "correct": 1
          }
        ]
      },
      {
        "lines": [
          {
            "speaker": "Ruth",
            "text": "I said we might want to revisit the deadline. They heard it as a suggestion, not a warning."
          },
          {
            "speaker": "Cal",
            "text": "Then say what will happen if the date stays the same."
          },
          {
            "speaker": "Ruth",
            "text": "Right. We won't be able to test the update properly."
          }
        ],
        "questions": [
          {
            "question": "Why didn't the warning land?",
            "choices": [
              "The deadline had already changed",
              "The listeners disagreed with the evidence",
              "The wording sounded like a mild suggestion"
            ],
            "correct": 2
          },
          {
            "question": "What consequence makes the deadline warning concrete?",
            "choices": [
              "The update will be canceled even if testing succeeds.",
              "The team will lose access to its earlier results.",
              "There won't be enough time to test the update properly."
            ],
            "correct": 2
          }
        ]
      }
    ]
  },
  "11": {
    "title": "The Work Behind the Achievement",
    "dialogues": [
      {
        "lines": [
          {
            "speaker": "Liv",
            "text": "Everyone talks about her talent, but her notebook tells a more interesting story."
          },
          {
            "speaker": "Chris",
            "text": "How so?"
          },
          {
            "speaker": "Liv",
            "text": "She wrote down each failed experiment and used it to narrow the next question. Progress came one decision at a time."
          }
        ],
        "questions": [
          {
            "question": "What does the first speaker credit for her progress?",
            "choices": [
              "Learning systematically from failed experiments",
              "Avoiding ambitious experiments",
              "Working from a fixed plan"
            ],
            "correct": 0
          },
          {
            "question": "Why does the notebook matter to the story?",
            "choices": [
              "It proves that talent played no part in the work.",
              "It records which experiments were successful on the first attempt.",
              "It shows how failed experiments shaped later decisions."
            ],
            "correct": 2
          }
        ]
      },
      {
        "lines": [
          {
            "speaker": "Liv",
            "text": "I admire my old coach more now that I lead a team myself."
          },
          {
            "speaker": "Chris",
            "text": "What do you do the way she did?"
          },
          {
            "speaker": "Liv",
            "text": "I give people room to try again after a mistake. It was the trust I remember, not the winning scores."
          }
        ],
        "questions": [
          {
            "question": "Which part of the coach's approach influenced the speaker?",
            "choices": [
              "Rewarding only strong results",
              "Insisting on the safest strategy",
              "Trusting people to try again"
            ],
            "correct": 2
          },
          {
            "question": "What does the speaker remember more vividly than the results?",
            "choices": [
              "Being trusted to try again.",
              "Being told to avoid risks.",
              "Being praised for winning."
            ],
            "correct": 0
          }
        ]
      }
    ]
  },
  "12": {
    "title": "A Business Worth Building",
    "dialogues": [
      {
        "lines": [
          {
            "speaker": "Ava",
            "text": "Our repair service attracted plenty of interest, but almost nobody bought a subscription."
          },
          {
            "speaker": "Noah",
            "text": "Maybe customers need a reliable repair when something breaks, not a monthly commitment."
          },
          {
            "speaker": "Ava",
            "text": "Let's test a pay-per-repair model before spending more on advertising."
          }
        ],
        "questions": [
          {
            "question": "What will the team test next?",
            "choices": [
              "Charging per repair",
              "A more expensive subscription",
              "A larger ad campaign"
            ],
            "correct": 0
          },
          {
            "question": "What mismatch did the team discover?",
            "choices": [
              "Customers wanted occasional repairs rather than an ongoing subscription.",
              "Customers wanted subscriptions with fewer repair options.",
              "Customers were unaware that repairs were available."
            ],
            "correct": 0
          }
        ]
      },
      {
        "lines": [
          {
            "speaker": "Ava",
            "text": "We say we want people to challenge decisions, but the last person who did was left out of the next meeting."
          },
          {
            "speaker": "Noah",
            "text": "Then the problem is the signal managers are sending, not the wording on the wall."
          },
          {
            "speaker": "Ava",
            "text": "I'll ask her to present the concern at the next review and make sure we respond to it."
          }
        ],
        "questions": [
          {
            "question": "What action will the first speaker take?",
            "choices": [
              "Replace the company's written values",
              "Ask managers to meet without the employee",
              "Invite the employee to raise her concern at the review"
            ],
            "correct": 2
          },
          {
            "question": "What has undermined the invitation to challenge decisions?",
            "choices": [
              "Managers made the invitation too cautiously worded.",
              "A person who spoke up was excluded from a later meeting.",
              "No one could remember what the written values said."
            ],
            "correct": 1
          }
        ]
      }
    ]
  }
};
