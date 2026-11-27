import type { AudiobookQuestion, AudiobookRetell } from "../index";

type AudiobookImage = {
  localMedia?: string;
  r2?: string;
  imageAlt?: string;
};

type AudiobookBlock =
  | { text: string; r2?: never }
  | (AudiobookImage & { r2: string; text?: never });

export type AudiobookSection = AudiobookImage & {
  id: string;
  title: string;
  timestamp?: string;
  text: string | readonly AudiobookBlock[];
  questions?: readonly (string | AudiobookQuestion)[];
  answers?: readonly string[];
  retell?: AudiobookRetell;
  mediaPosition?: "left" | "right" | "top" | "bottom";
  localAudio?: string;
  r2Audio?: string;
};

const imageBase =
  "/media/images/skills/listening/audiobooks/starter/a-new-zealand-adventure";

export const newZealandAdventure = {
  slug: "a-new-zealand-adventure",
  title: "A New Zealand Adventure",
  audio: "",
  sections: [
    {
      id: "summary",
      title: "Summary",
      text: "Sarah and Jessica arrive in New Zealand for a holiday. They find a mobile phone in the taxi from the airport. It is Michael's mobile, but can they find him? He has messages from home — are they important? Go with the girls on a New Zealand adventure.",
      localMedia: `local-media/images/skills/listening/audiobooks/starter/a-new-zealand-adventure/cover.avif`,
      r2: `${imageBase}/cover.avif`,
      imageAlt: "Cover of A New Zealand Adventure.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-1",
      title: "Paragraph 1",
      text: `Sarah and Jessica are going to New Zealand for a holiday. They are very excited. Jessica is near the window. “Look!” she says, “There's Auckland! We're here!” “But we're late,” Sarah answers. “When's our bus?” “At one o'clock,” Jessica says. “We can get a taxi from the airport to the bus station.”`,
      questions: [
        {
          question: "Where are Sarah and Jessica going?",
          options: [
            { option: "They are going to New Zealand.", isCorrect: true },
            { option: "They are going to Australia." },
            { option: "They are going to the bus station." },
          ],
        },
        {
          question: "Who is sitting near the window?",
          options: [
            { option: "Sarah is sitting near the window." },
            { option: "Jessica is sitting near the window.", isCorrect: true },
            { option: "The driver is sitting near the window." },
          ],
        },
        {
          question: "How will they get to the bus station?",
          options: [
            { option: "They will walk from the airport." },
            { option: "They will take a bus from the airport." },
            {
              option: "They will get a taxi from the airport.",
              isCorrect: true,
            },
          ],
        },
      ],
      localMedia: `local-media/images/skills/listening/audiobooks/starter/a-new-zealand-adventure/paragraph-1.avif`, r2: `${imageBase}/paragraph-1.avif`, imageAlt: "Sarah and Jessica arriving in New Zealand by plane.", mediaPosition: "left",
    },
    {
      id: "paragraph-2",
      title: "Paragraph 2", timestamp: "0:31",
      text: `At the airport, the girls look for a taxi. “Look!” Jessica says. “That boy's waving to us!” “Excuse me! Are you late?” the boy calls to them. “Do you want this taxi? I can wait.” “Thank you very much!” the girls answer. “To the bus station, please,” Sarah says to the driver. She smiles at the boy and they drive away.`,
      questions: [
        {
          question: "Who offers the taxi to the girls?",
          options: [
            { option: "The taxi driver offers the taxi to them." },
            { option: "A woman at the bus station offers the taxi to them." },
            {
              option: "A boy at the airport offers the taxi to them.",
              isCorrect: true,
            },
          ],
        },
        {
          question: "Where do they ask the driver to go?",
          options: [
            { option: "They ask the driver to go to the airport." },
            {
              option: "They ask the driver to go to the bus station.",
              isCorrect: true,
            },
            { option: "They ask the driver to go to a hotel." },
          ],
        },
      ],
      localMedia: `local-media/images/skills/listening/audiobooks/starter/a-new-zealand-adventure/paragraph-2.avif`, r2: `${imageBase}/paragraph-2.avif`, imageAlt: "The girls finding a taxi outside the airport.", mediaPosition: "left",
    },
    {
      id: "paragraph-3",
      title: "Paragraph 3", timestamp: "1:08",
      text: `The taxi stops at the bus station. Suddenly, Jessica sees a mobile phone on the taxi floor. “Is that your mobile phone?” she asks the driver. He looks at it. “No,” he answers. “It's the boy's mobile.” Sarah takes it. “Perhaps I can find his address,” she says. “Yes! His name's Michael. Tomorrow he's at Ninety Mile Beach. We can give it to him there.”`,
      questions: [
        {
          question: "What does Jessica find in the taxi?",
          options: [
            { option: "She finds a bag in the taxi." },
            {
              option: "She finds a mobile phone in the taxi.",
              isCorrect: true,
            },
            { option: "She finds some money in the taxi." },
          ],
        },
        {
          question: "Who does the mobile phone belong to?",
          options: [
            { option: "It belongs to the taxi driver." },
            { option: "It belongs to Sarah." },
            {
              option: "It belongs to the boy at the airport.",
              isCorrect: true,
            },
          ],
        },
        {
          question: "Where will Michael be tomorrow?",
          options: [
            {
              option: "He will be at Ninety Mile Beach.",
              isCorrect: true,
            },
            { option: "He will be in Auckland." },
            { option: "He will be at the bus station." },
          ],
        },
      ],
      localMedia: `local-media/images/skills/listening/audiobooks/starter/a-new-zealand-adventure/paragraph-3.avif`, r2: `${imageBase}/paragraph-3.avif`, imageAlt: "Sarah and Jessica discovering a mobile phone in the taxi.", mediaPosition: "left",
    },
    {
      id: "paragraph-4",
      title: "Paragraph 4", timestamp: "1:47",
      text: `The girls wait at Ninety Mile Beach. They eat and watch the buses. The buses aren't driving on a road — they are driving on the long beach. “Look for Michael!” Jessica says. But Sarah is looking at the sea. Suddenly, Jessica sees him. “He's on that bus!” she says. She waves. Michael waves to her, but the bus doesn't stop.`,
      questions: [
        {
          question: "Where are the buses driving?",
          options: [
            { option: "They are driving on a road." },
            { option: "They are driving through the city." },
            {
              option: "They are driving on the long beach.",
              isCorrect: true,
            },
          ],
        },
        {
          question: "Who sees Michael?",
          options: [
            { option: "Sarah sees him on the bus." },
            { option: "Jessica sees him on the bus.", isCorrect: true },
            { option: "The bus driver sees him on the bus." },
          ],
        },
        {
          question: "Does his bus stop?",
          options: [
            { option: "No, the bus does not stop.", isCorrect: true },
            { option: "Yes, the bus stops for the girls." },
            { option: "Yes, it stops at the beach later." },
          ],
        },
      ],
      localMedia: `local-media/images/skills/listening/audiobooks/starter/a-new-zealand-adventure/paragraph-4.avif`, r2: `${imageBase}/paragraph-4.avif`, imageAlt: "The girls watching buses drive along Ninety Mile Beach.", mediaPosition: "left",
    },
    {
      id: "paragraph-5",
      title: "Paragraph 5", timestamp: "2:22",
      text: `The girls get on a bus. “Can we catch him?” Jessica asks. “I don't know,” Sarah answers. “I can't see his bus now.” Suddenly, they hear a beep. Sarah looks at the mobile. “There's a message for Michael,” she says. She reads the message. “It's important,” she says. “Perhaps we can find him tomorrow at the Sky Tower in Auckland.”`,
      questions: [
        {
          question: "What sound do the girls hear?",
          options: [
            { option: "They hear a bus behind them." },
            {
              option: "They hear a beep from the mobile phone.",
              isCorrect: true,
            },
            { option: "They hear a message on the radio." },
          ],
        },
        {
          question: "Where does Sarah think they can find Michael tomorrow?",
          options: [
            {
              option: "She thinks they can find him at Ninety Mile Beach.",
            },
            { option: "She thinks they can find him at the bus station." },
            {
              option:
                "She thinks they can find him at the Sky Tower in Auckland.",
              isCorrect: true,
            },
          ],
        },
      ],
      localMedia: `local-media/images/skills/listening/audiobooks/starter/a-new-zealand-adventure/paragraph-5.avif`, r2: `${imageBase}/paragraph-5.avif`, imageAlt: "Sarah reading Michael's message on a bus.", mediaPosition: "left",
    },
    {
      id: "paragraph-6",
      title: "Paragraph 6", timestamp: "2:59",
      text: `At the Sky Tower, the girls can't see Michael. “He isn't here,” Sarah says. A woman bungy jumps from the tower. “I can do that,” she says. “Are you coming, Jessica?” “No,” Jessica answers. “But I can watch you from here.” “Please watch my bag, too,” Sarah says. She gives her bag to Jessica and she goes up the tower.`,
      questions: [
        {
          question: "What does Sarah want to do at the Sky Tower?",
          options: [
            {
              option: "She wants to bungy jump from the tower.",
              isCorrect: true,
            },
            { option: "She wants to take photos of the tower." },
            { option: "She wants to go up and look at the city." },
          ],
        },
        {
          question: "Who watches her bag?",
          options: [
            { option: "Michael watches her bag." },
            { option: "A woman at the tower watches her bag." },
            { option: "Jessica watches her bag.", isCorrect: true },
          ],
        },
      ],
      localMedia: `local-media/images/skills/listening/audiobooks/starter/a-new-zealand-adventure/paragraph-6.avif`, r2: `${imageBase}/paragraph-6.avif`, imageAlt: "Sarah and Jessica at Auckland's Sky Tower.", mediaPosition: "left",
    },
    {
      id: "paragraph-7",
      title: "Paragraph 7", timestamp: "3:34",
      text: `Sarah jumps. It is a very long jump. She comes down near the street and she sees Michael. Jessica sees him, too. “Michael! Come back! We've got your mobile!” she calls to him. But Michael is walking away. She runs after him. She doesn't take Sarah's bag. “Jessica! My bag!” Sarah calls.`,
      questions: [
        {
          question: "Who do the girls see near the street?",
          options: [
            { option: "They see the taxi driver near the street." },
            { option: "They see the bus driver near the street." },
            { option: "They see Michael near the street.", isCorrect: true },
          ],
        },
        {
          question: "Why does Jessica run after him?",
          options: [
            { option: "She runs after him to ask about the bag." },
            {
              option: "She runs after him to give him his mobile phone.",
              isCorrect: true,
            },
            { option: "She runs after him to take a photo." },
          ],
        },
        {
          question: "What does she forget?",
          options: [
            { option: "She forgets Sarah's bag.", isCorrect: true },
            { option: "She forgets her ticket." },
            { option: "She forgets the mobile phone." },
          ],
        },
      ],
      localMedia: `local-media/images/skills/listening/audiobooks/starter/a-new-zealand-adventure/paragraph-7.avif`, r2: `${imageBase}/paragraph-7.avif`, imageAlt: "Sarah bungy jumping from the Sky Tower.", mediaPosition: "left",
    },
    {
      id: "paragraph-8",
      title: "Paragraph 8", timestamp: "4:10",
      text: `Jessica and Sarah are very unhappy. They can't find Michael and they can't find Sarah's bag. Sarah has no money now. “Sorry,” Jessica says. “But I've got some money — and we've got tickets for the glow-worm caves.” “OK. Let's go there tomorrow,” Sarah says. “Michael is going, too. We can look for him there.”`,
      questions: [
        {
          question: "Why are the girls unhappy?",
          options: [
            { option: "They are unhappy because they have no bus tickets." },
            {
              option:
                "They are unhappy because they cannot find Michael or Sarah's bag.",
              isCorrect: true,
            },
            { option: "They are unhappy because the caves are closed." },
          ],
        },
        {
          question: "Where will they look for Michael next?",
          options: [
            { option: "They will look for him at the Sky Tower." },
            { option: "They will look for him at the beach." },
            {
              option: "They will look for him at the glow-worm caves.",
              isCorrect: true,
            },
          ],
        },
      ],
      localMedia: `local-media/images/skills/listening/audiobooks/starter/a-new-zealand-adventure/paragraph-8.avif`, r2: `${imageBase}/paragraph-8.avif`, imageAlt: "Sarah and Jessica in their room planning the next day.", mediaPosition: "left",
    },
    {
      id: "paragraph-9",
      title: "Paragraph 9", timestamp: "4:42",
      text: `The girls go on a boat into the dark cave. The lights from the glow-worms are very beautiful and it is very quiet. Suddenly, there is a beep from Michael's mobile. The lights go dark. The people in the boat are angry. “No mobiles!” they say. “We're very sorry,” Sarah says. She sees a new message for Michael. “Perhaps we can find him in Rotorua.”`,
      questions: [
        {
          question: "What makes the cave's lights?",
          options: [
            {
              option: "The glow-worms make the lights in the cave.",
              isCorrect: true,
            },
            { option: "The boat's lights make the lights in the cave." },
            { option: "The moon makes the lights in the cave." },
          ],
        },
        {
          question: "Why are the people in the boat angry?",
          options: [
            { option: "They are angry because the boat is very slow." },
            { option: "They are angry because Sarah is talking loudly." },
            {
              option: "They are angry because Michael's mobile phone beeps.",
              isCorrect: true,
            },
          ],
        },
        {
          question: "Where does Sarah think they can find Michael now?",
          options: [
            { option: "She thinks they can find him in Auckland." },
            {
              option: "She thinks they can find him in Rotorua.",
              isCorrect: true,
            },
            { option: "She thinks they can find him in Kaikoura." },
          ],
        },
      ],
      localMedia: `local-media/images/skills/listening/audiobooks/starter/a-new-zealand-adventure/paragraph-9.avif`, r2: `${imageBase}/paragraph-9.avif`, imageAlt: "Visitors riding a boat through the glow-worm caves.", mediaPosition: "left",
    },
    {
      id: "paragraph-10",
      title: "Paragraph 10", timestamp: "5:19",
      text: `“Rotorua is very interesting,” Jessica says. “I like the hot water.” “Yes,” Sarah answers, “but I can't see Michael.” “Where is he tomorrow?” Jessica asks. Sarah looks at the mobile. “He's in the South Island,” she says. “The boat's very expensive. Can we go?” “Yes,” Jessica says. “I've got money for the tickets.”`,
      questions: [
        {
          question: "What does Jessica like in Rotorua?",
          options: [
            { option: "She likes the boats." },
            { option: "She likes the hot water.", isCorrect: true },
            { option: "She likes the beaches." },
          ],
        },
        {
          question: "Where will Michael be tomorrow?",
          options: [
            { option: "He will be in Rotorua." },
            { option: "He will be in Auckland." },
            {
              option: "He will be in the South Island.",
              isCorrect: true,
            },
          ],
        },
        {
          question: "Who can pay for the boat tickets?",
          options: [
            {
              option: "Jessica can pay for the boat tickets.",
              isCorrect: true,
            },
            { option: "Sarah can pay for the boat tickets." },
            { option: "Michael can pay for the boat tickets." },
          ],
        },
      ],
      localMedia: `local-media/images/skills/listening/audiobooks/starter/a-new-zealand-adventure/paragraph-10.avif`, r2: `${imageBase}/paragraph-10.avif`, imageAlt: "Sarah and Jessica visiting Rotorua.", mediaPosition: "left",
    },
    {
      id: "paragraph-11",
      title: "Paragraph 11", timestamp: "5:55",
      text: `Sarah and Jessica take a boat to the South Island. It is very cold, but the café is expensive. Suddenly, there is a beep from Michael's mobile phone. “Oh, no! Not again!” Sarah says. She reads the message. “Michael's mother and father are worrying about him, and we can't find him. Let's take his mobile phone to the police station in Kaikoura.”`,
      questions: [
        {
          question: "Who is worried about Michael?",
          options: [
            { option: "Sarah and Jessica are worried about him." },
            { option: "The police are worried about him." },
            {
              option: "His mother and father are worried about him.",
              isCorrect: true,
            },
          ],
        },
        {
          question: "Why do the girls decide to go to the police?",
          options: [
            {
              option:
                "They decide to go because they want to buy boat tickets.",
            },
            {
              option:
                "They decide to go because they cannot find Michael and his parents are worried.",
              isCorrect: true,
            },
            {
              option:
                "They decide to go because they have no money for the café.",
            },
          ],
        },
      ],
      localMedia: `local-media/images/skills/listening/audiobooks/starter/a-new-zealand-adventure/paragraph-11.avif`, r2: `${imageBase}/paragraph-11.avif`, imageAlt: "Sarah and Jessica travelling by boat to the South Island.", mediaPosition: "left",
    },
    {
      id: "paragraph-12",
      title: "Paragraph 12", timestamp: "6:29",
      text: `The girls take the phone to the police station. Then they go down to the sea. “Let's go and see the whales,” Jessica says. “We can't,” Sarah answers. “The tickets are expensive.” Suddenly, Jessica sees Michael. She runs to him. “Your mobile's at the police station,” she says, “and you've got messages from home.”`,
      questions: [
        {
          question: "Why can't the girls go whale watching?",
          options: [
            {
              option: "They can't go because the tickets are expensive.",
              isCorrect: true,
            },
            { option: "They can't go because the boats are full." },
            { option: "They can't go because the sea is very cold." },
          ],
        },
        {
          question: "Who sees Michael near the sea?",
          options: [
            { option: "Sarah sees him near the sea." },
            { option: "The police officer sees him near the sea." },
            { option: "Jessica sees him near the sea.", isCorrect: true },
          ],
        },
        {
          question: "Where is his mobile phone?",
          options: [
            { option: "His mobile phone is in Sarah's bag." },
            {
              option: "His mobile phone is at the police station.",
              isCorrect: true,
            },
            { option: "His mobile phone is on the boat." },
          ],
        },
      ],
      localMedia: `local-media/images/skills/listening/audiobooks/starter/a-new-zealand-adventure/paragraph-12.avif`, r2: `${imageBase}/paragraph-12.avif`, imageAlt: "The girls near a whale-watching ticket office.", mediaPosition: "left",
    },
    {
      id: "paragraph-13",
      title: "Paragraph 13", timestamp: "7:03",
      text: `Michael quickly calls home. He smiles. “My mother and father are well,” he says, “and they've got £100,000 from the lottery! They're sending some money to me for my holiday. Now I can give you a surprise.” “What surprise?” Jessica asks. “Wait and see,” Michael says. He walks to the Whale Watch ticket office.`,
      questions: [
        {
          question: "What good news does Michael receive from home?",
          options: [
            {
              option: "His parents are coming to New Zealand to see him.",
            },
            {
              option: "His parents have won £100,000 in the lottery.",
              isCorrect: true,
            },
            {
              option: "His parents have sent him a new mobile phone.",
            },
          ],
        },
        {
          question: "Where does he go after the call?",
          options: [
            {
              option: "He goes to the Whale Watch ticket office.",
              isCorrect: true,
            },
            { option: "He goes to the police station." },
            { option: "He goes to the bus station." },
          ],
        },
      ],
      localMedia: `local-media/images/skills/listening/audiobooks/starter/a-new-zealand-adventure/paragraph-13.avif`, r2: `${imageBase}/paragraph-13.avif`, imageAlt: "Michael meeting Sarah and Jessica outside the police station.", mediaPosition: "left",
    },
    {
      id: "paragraph-14",
      title: "Paragraph 14", timestamp: "7:35",
      text: `“Thank you for my mobile,” Michael says to the girls. “Thank you for the surprise,” Jessica says. She is very excited. “Do you like the whales?” Michael asks. “I love them,” Jessica answers. “They're beautiful.” “Yes, and New Zealand is beautiful, too,” Sarah says. “This is an adventure!”`,
      questions: [
        {
          question: "What does Michael thank the girls for?",
          options: [
            { option: "He thanks them for the money." },
            { option: "He thanks them for the boat tickets." },
            {
              option: "He thanks them for returning his mobile phone.",
              isCorrect: true,
            },
          ],
        },
        {
          question: "What surprise does he give them?",
          options: [
            { option: "He gives them a new mobile phone." },
            {
              option: "He gives them a whale-watching trip.",
              isCorrect: true,
            },
            { option: "He gives them money for the bus." },
          ],
        },
        {
          question: "How does Sarah describe New Zealand?",
          options: [
            { option: "She says New Zealand is beautiful.", isCorrect: true },
            { option: "She says New Zealand is very cold." },
            { option: "She says New Zealand is expensive." },
          ],
        },
      ],
      localMedia: `local-media/images/skills/listening/audiobooks/starter/a-new-zealand-adventure/paragraph-14.avif`, r2: `${imageBase}/paragraph-14.avif`, imageAlt: "The friends enjoying a whale-watching trip.", mediaPosition: "left",
    },
    {
      id: "retell-the-story",
      title: "Retell the Story",
      text: "Look at each picture and retell that part of the story. Speak in complete sentences and use the pictures in order, from the airport to the whale-watching trip.",
      retell: {
        instruction: "Tap a card to read what you should say.",
        cards: [
          {
            img: `${imageBase}/paragraph-1.avif`,
            alt: "Sarah and Jessica arriving in New Zealand by plane.",
            summary:
              "Sarah and Jessica are going to New Zealand for a holiday. They are late, so they will get a taxi from the airport to the bus station.",
          },
          {
            img: `${imageBase}/paragraph-2.avif`,
            alt: "The girls finding a taxi outside the airport.",
            summary:
              "At the airport, a boy offers them his taxi. Sarah asks the driver to take them to the bus station.",
          },
          {
            img: `${imageBase}/paragraph-3.avif`,
            alt: "Sarah and Jessica discovering a mobile phone in the taxi.",
            summary:
              "In the taxi, Jessica finds a mobile phone. It is the boy's phone. His name is Michael, and tomorrow he will be at Ninety Mile Beach.",
          },
          {
            img: `${imageBase}/paragraph-4.avif`,
            alt: "The girls watching buses drive along Ninety Mile Beach.",
            summary:
              "At Ninety Mile Beach, the buses drive on the long beach. Jessica sees Michael on a bus, but the bus does not stop.",
          },
          {
            img: `${imageBase}/paragraph-5.avif`,
            alt: "Sarah reading Michael's message on a bus.",
            summary:
              "On the bus, they hear a beep from the mobile. Sarah reads a message and thinks they can find Michael at the Sky Tower in Auckland.",
          },
          {
            img: `${imageBase}/paragraph-6.avif`,
            alt: "Sarah and Jessica at Auckland's Sky Tower.",
            summary:
              "At the Sky Tower, Michael is not there. Sarah wants to bungy jump, and Jessica says she will watch her bag.",
          },
          {
            img: `${imageBase}/paragraph-7.avif`,
            alt: "Sarah bungy jumping from the Sky Tower.",
            summary:
              "Sarah sees Michael near the street. Jessica runs after him to give him his mobile, but she forgets Sarah's bag.",
          },
          {
            img: `${imageBase}/paragraph-8.avif`,
            alt: "Sarah and Jessica in their room planning the next day.",
            summary:
              "The girls are unhappy because they cannot find Michael or the bag. They have tickets for the glow-worm caves, so they will look for him there.",
          },
          {
            img: `${imageBase}/paragraph-9.avif`,
            alt: "Visitors riding a boat through the glow-worm caves.",
            summary:
              "In the cave, the glow-worms make a beautiful light. Michael's mobile beeps and the people are angry. Sarah thinks they can find him in Rotorua.",
          },
          {
            img: `${imageBase}/paragraph-10.avif`,
            alt: "Sarah and Jessica visiting Rotorua.",
            summary:
              "In Rotorua, Jessica likes the hot water. Sarah reads that Michael will be in the South Island, and Jessica can pay for the boat tickets.",
          },
          {
            img: `${imageBase}/paragraph-11.avif`,
            alt: "Sarah and Jessica travelling by boat to the South Island.",
            summary:
              "On the boat, they read that Michael's parents are worried about him. The girls decide to take his mobile to the police station in Kaikoura.",
          },
          {
            img: `${imageBase}/paragraph-12.avif`,
            alt: "The girls near a whale-watching ticket office.",
            summary:
              "The girls take the phone to the police station. They cannot go whale watching because the tickets are expensive, but Jessica sees Michael near the sea.",
          },
          {
            img: `${imageBase}/paragraph-13.avif`,
            alt: "Michael meeting Sarah and Jessica outside the police station.",
            summary:
              "Michael calls home. His parents have won £100,000 in the lottery, and he walks to the Whale Watch ticket office.",
          },
          {
            img: `${imageBase}/paragraph-14.avif`,
            alt: "The friends enjoying a whale-watching trip.",
            summary:
              "Michael thanks the girls for his mobile and gives them a whale-watching trip. Sarah says New Zealand is beautiful.",
          },
        ],
      },
    },
  ] satisfies AudiobookSection[],
};
