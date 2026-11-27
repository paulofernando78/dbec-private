import { italic } from "@/helpers/content";

import type { AudiobookSection } from "../index";

const imageBase =
  "/media/images/skills/listening/audiobooks/starter/tinkers-island";

export const tinkersIsland = {
  slug: "tinkers-island",
  title: "Tinkers Island",
  audio: "",
  sections: [
    {
      id: "summary",
      title: "Summary",
      text: "The year is 1798, and Jenny and her father, Sam Tinker, are working in the market. Sam gets mistaken for a thief and finds himself on a ship full of criminals. They are on their way to Australia. Jenny has her own plans to rescue him.",
      localMedia: `local-media/images/skills/listening/audiobooks/starter/tinkers-island/cover.avif`,
      r2: `${imageBase}/cover.avif`,
      imageAlt: "Cover of Tinkers Island.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-1",
      title: "Paragraph 1",
      questions: [
        "How old is Jenny?",
        "Where do Jenny and Sam work?",
        "What has the running man got in his hand?",
      ],
      answers: [
        "Fourteen.",
        "In Covent Garden market, selling fruit and vegetables.",
        "A watch.",
      ],
      text: [
        { text: italic("London, November 1798") },
        {
          text: "Jenny Tinker is fourteen. She and her father, Sam, work in Covent Garden market. They sell fruit and vegetables. The Tinkers get up early every morning and work very hard.",
        },
        {
          text: "One day after work Jenny sees a man. He is running and he has got a watch in his hand.",
        },
      ],
      localMedia: `local-media/images/skills/listening/audiobooks/starter/tinkers-island/paragraph-1.avif`,
      r2: `${imageBase}/paragraph-1.avif`,
      imageAlt:
        "Jenny and her father Sam selling fruit and vegetables in Covent Garden market.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-2",
      title: "Paragraph 2",
      questions: [
        "What does the man give Sam?",
        "Why do the people run after Sam?",
        "Do the policemen listen to Jenny?",
      ],
      answers: ["A watch.", "They think he is a thief.", "No, they do not."],
      text: "“Here – take this,” he says, and gives Sam the watch. Five seconds later a lot of angry people run down the street after Sam. “There’s the thief! He’s got my watch – stop him!” says an old man. “You’re coming with us,” two policemen say to Sam. They do not listen to Jenny’s story.",
      localMedia: `local-media/images/skills/listening/audiobooks/starter/tinkers-island/paragraph-2.avif`,
      r2: `${imageBase}/paragraph-2.avif`,
      imageAlt:
        "Angry people running down the street after Sam while two policemen hold his arms.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-3",
      title: "Paragraph 3",
      questions: [
        "Who does Jenny go to for help?",
        "Where do they send thieves?",
        "Where is Sam a week later?",
      ],
      answers: [
        "Peter Stone, a man who works in the market.",
        "To Australia.",
        "On a big ship, the Black Star, on the River Thames.",
      ],
      text: [
        {
          text: "Jenny does not have a mother or any brothers and sisters. Who can she talk to? She goes to Peter Stone’s house. Peter works in the market.",
        },
        {
          text: "“What’s going to happen?” asks Jenny. Peter looks sad. “They send thieves to Australia,” he says. Peter is right.",
        },
        {
          text: [
            "A week later Jenny watches a big ship – the ",
            italic("Black Star"),
            " – on the River Thames. One of the men on it is her father.",
          ],
        },
      ],
      localMedia: `local-media/images/skills/listening/audiobooks/starter/tinkers-island/paragraph-3.avif`,
      r2: `${imageBase}/paragraph-3.avif`,
      imageAlt:
        "Jenny talking to Peter Stone, with the Black Star waiting on the River Thames.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-4",
      title: "Paragraph 4",
      questions: [
        "What does Jenny see on a line above the street?",
        "What name does she give the captain?",
        "What job does she get on the Black Star?",
      ],
      answers: [
        "A pair of trousers and a shirt.",
        "Ned Bell.",
        "She helps the cook.",
      ],
      text: "“How can I help him?” thinks Jenny. Then she sees a pair of trousers and a shirt on a line above the street. “Yes,” she says. “That’s it!” Five minutes later she talks to the ship’s captain. “I want a job,” she says. “My name’s Ned Bell.” “Well ... why not,” says the captain. “OK, Ned – you can help the cook.”",
      localMedia: `local-media/images/skills/listening/audiobooks/starter/tinkers-island/paragraph-4.avif`,
      r2: `${imageBase}/paragraph-4.avif`,
      imageAlt:
        "Jenny, dressed as a boy, talking to the captain of the Black Star.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-5",
      title: "Paragraph 5",
      questions: [
        "How long does Jenny work on the ship?",
        "What does she take from the captain’s room?",
        "Where does she find her father?",
      ],
      answers: ["For six weeks.", "The keys.", "At the bottom of the ship."],
      text: [
        {
          text: [
            "For six weeks Jenny works very hard on the ",
            italic("Black Star"),
            ". Then one night she goes to the captain’s room. Usually his keys are next to the bed. Tonight they are on the table. Jenny takes them and goes down to the bottom of the ship. There she finds her father. “Jenny!” he says. “But how ...?” “Ssshh – don’t ask questions,” says Jenny. “Come with me.”",
          ],
        },
      ],
      localMedia: `local-media/images/skills/listening/audiobooks/starter/tinkers-island/paragraph-5.avif`,
      r2: `${imageBase}/paragraph-5.avif`,
      imageAlt:
        "Jenny unlocking the prisoners’ room deep in the bottom of the Black Star.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-6",
      title: "Paragraph 6",
      questions: [
        "Where are the Tinkers fifteen minutes later?",
        "What can they hear?",
        "What does Jenny say to her father?",
      ],
      answers: [
        "In a small boat, with the Black Star behind them.",
        "Nothing but the sea and the wind.",
        "“You’re free!”",
      ],
      text: [
        {
          text: [
            "Fifteen minutes later the Tinkers are in a small boat. The ",
            italic("Black Star"),
            " is behind them. They can hear nothing but the sea and the wind. It is a beautiful night and there is a big moon. It shines on Sam Tinker’s thin, tired face. Jenny looks at her father.",
          ],
        },
        {
          text: [
            "“Oh, Dad,” she says. “You’re ",
            italic("free!"),
            "” Then she tells him her story.",
          ],
        },
      ],
      localMedia: `local-media/images/skills/listening/audiobooks/starter/tinkers-island/paragraph-6.avif`,
      r2: `${imageBase}/paragraph-6.avif`,
      imageAlt:
        "Jenny and Sam escaping in a small boat under a big moon, the Black Star behind them.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-7",
      title: "Paragraph 7",
      questions: [
        "How long are they in the small boat before they see the bird?",
        "What is the bird carrying?",
        "Who sees the island first?",
      ],
      answers: ["Five days.", "Some grass.", "Sam."],
      text: [
        {
          text: "After three days Sam and Jenny are very hungry and thirsty. Then, after five days Jenny sees a big white bird. It is carrying some grass. “Look Dad,” she says. “Do you think there’s an island near here?”",
        },
        {
          text: [
            "Sam Tinker stands up in the small boat. He puts one hand across his eyes. “Yes, Jenny, you’re right! I can see it. There ",
            italic("is"),
            " an island!!”",
          ],
        },
      ],
      localMedia: `local-media/images/skills/listening/audiobooks/starter/tinkers-island/paragraph-7.avif`,
      r2: `${imageBase}/paragraph-7.avif`,
      imageAlt:
        "Sam standing up in the small boat and pointing to an island on the horizon.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-8",
      title: "Paragraph 8",
      questions: [
        "What do Sam and Jenny look for first?",
        "What do they find?",
        "Who gets the first coconut?",
      ],
      answers: [
        "Food and water.",
        "A small river with cold, clean water.",
        "Jenny.",
      ],
      text: "The island is big and has lots of tall, thick trees. First Sam and Jenny look for food and water. They find a small river. The water is cold and clean. They drink and drink and drink. There are coconuts on the island, too. The Tinkers know coconuts from Covent Garden market. Sam opens two of them and gives the first one to Jenny.",
      localMedia: `local-media/images/skills/listening/audiobooks/starter/tinkers-island/paragraph-8.avif`,
      r2: `${imageBase}/paragraph-8.avif`,
      imageAlt:
        "Sam and Jenny drinking from a small river on the wooded island.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-9",
      title: "Paragraph 9",
      questions: [
        "Where do they sleep on the first night?",
        "What do they make their new house with?",
        "How does Sam make the flag, and where does he put it?",
      ],
      answers: [
        "On the beach.",
        "Grass and wood.",
        "He makes it with his shirt and puts it on the roof.",
      ],
      text: "That night Sam and Jenny sleep on the beach. They are very tired. In the morning they start to make a small house with grass and wood. They work very hard. After four days they finish. Then Sam makes a flag with his shirt and puts it on the roof. He and Jenny look up at the flag. “This is ‘Tinkers Island’ now,” Sam says. “It’s our new home and we’re going to be happy here.”",
      localMedia: `local-media/images/skills/listening/audiobooks/starter/tinkers-island/paragraph-9.avif`,
      r2: `${imageBase}/paragraph-9.avif`,
      imageAlt:
        "Sam and Jenny looking up at their new grass-and-wood house with Sam’s shirt as a flag on the roof.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-10",
      title: "Paragraph 10",
      questions: [
        "How long are Sam and Jenny happy on the island?",
        "What is Sam looking for when the snake bites him?",
        "What happens to Sam?",
      ],
      answers: [
        "For the first year.",
        "Coconuts.",
        "He puts his foot on a snake and it bites him.",
      ],
      text: [
        {
          text: [
            "Sam and Jenny are ",
            italic("very"),
            " happy for the first year. Every day they work, talk, eat and swim. They like their new home. It is quiet and beautiful.",
          ],
        },
        {
          text: "Then one day something happens. It is early in the morning. Jenny is fishing. Sam is looking for coconuts. He does not see a long, thick snake on the ground. He puts his foot on the snake and it bites him.",
        },
      ],
      localMedia: `local-media/images/skills/listening/audiobooks/starter/tinkers-island/paragraph-10.avif`,
      r2: `${imageBase}/paragraph-10.avif`,
      imageAlt:
        "Sam stepping on a long snake on the ground while Jenny fishes nearby.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-11",
      title: "Paragraph 11",
      questions: [
        "How does Jenny get her father back to the house?",
        "How long does Jenny sit next to his bed?",
        "What does Sam ask when he opens his eyes?",
      ],
      answers: [
        "She pulls him along the beach to the house.",
        "For three days and nights.",
        "“Jenny – is that you?”",
      ],
      text: [
        {
          text: "Two hours later Jenny finds her father on the ground. He cannot walk. She pulls him along the beach to the house. After that there is nothing she can do. Sam is very, very weak. He cannot eat or drink.",
        },
        {
          text: "Jenny sits next to his bed for three days and nights. Then Sam opens his eyes. “Jenny?” he asks. “Jenny – is that you?”",
        },
      ],
      localMedia: `local-media/images/skills/listening/audiobooks/starter/tinkers-island/paragraph-11.avif`,
      r2: `${imageBase}/paragraph-11.avif`,
      imageAlt:
        "Jenny sitting beside her father’s bed in the island house, watching over him.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-12",
      title: "Paragraph 12",
      questions: [
        "How does Sam feel after ten days?",
        "What work does Jenny do?",
        "What does Jenny see one morning?",
      ],
      answers: [
        "He is well again, but not very strong.",
        "She catches fish, finds coconuts, makes fires and cooks.",
        "A ship coming to the island.",
      ],
      text: [
        {
          text: "After ten days Sam is well again, but not very strong. He sleeps a lot and Jenny does all the work. She catches fish, finds coconuts, makes fires and cooks.",
        },
        {
          text: "Then, one morning, she sees something. It is a ship and it is coming to the island. She runs to the house to find her father.",
        },
        { text: "“Dad, Dad!” she says. “Come and look!”" },
      ],
      localMedia: `local-media/images/skills/listening/audiobooks/starter/tinkers-island/paragraph-12.avif`,
      r2: `${imageBase}/paragraph-12.avif`,
      imageAlt:
        "Jenny running to the house to tell her father about the ship coming to the island.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-13",
      title: "Paragraph 13",
      questions: [
        "What ship does Sam think it is?",
        "How many men can Sam see?",
        "What are the men doing?",
      ],
      answers: [
        "The Black Star.",
        "Three men.",
        "They are putting a boat in the water.",
      ],
      text: [
        {
          text: [
            "Sam walks to the door of the small house. “Do you think it’s the ",
            italic("Black Star"),
            "?” he asks. “I don’t know,” Jenny answers.",
          ],
        },
        {
          text: "Sam looks at the ship. He can see three men. They are putting a boat in the water.",
        },
        {
          text: "“I don’t like this,” he says. “I don’t like this at all. Come on.” He starts to run and Jenny helps him.",
        },
      ],
      localMedia: `local-media/images/skills/listening/audiobooks/starter/tinkers-island/paragraph-13.avif`,
      r2: `${imageBase}/paragraph-13.avif`,
      imageAlt:
        "Sam and Jenny watching from the house as three men lower a boat from the ship.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-14",
      title: "Paragraph 14",
      questions: [
        "Where do Sam and Jenny hide?",
        "What is the man carrying?",
        "What does the man say when he sees Jenny?",
      ],
      answers: ["Behind a big tree.", "A gun.", "“You’re English!!”"],
      text: [
        {
          text: [
            "Twenty minutes later the three men are on Tinkers Island. Sam and Jenny stand behind a big tree and look at them. “It’s OK, Dad,” says Jenny. “They’re not from the ",
            italic("Black Star"),
            ".” At that moment one of the men turns and says, “Who’s there?” He has got a gun. “P-please don’t k-kill us,” says Jenny. The man looks at her and his mouth opens. “You’re ",
            italic("English"),
            "!!” he says.",
          ],
        },
      ],
      localMedia: `local-media/images/skills/listening/audiobooks/starter/tinkers-island/paragraph-14.avif`,
      r2: `${imageBase}/paragraph-14.avif`,
      imageAlt:
        "Sam and Jenny hiding behind a big tree as a man with a gun turns toward them.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-15",
      title: "Paragraph 15",
      questions: [
        "Where is the men’s ship, the Red Rose, going?",
        "What date is it the next day?",
        "Why are Sam and Jenny happy but sad?",
      ],
      answers: [
        "To America.",
        "January 1st, 1800.",
        "They are happy to start a new life, but sad to leave Tinkers Island.",
      ],
      text: [
        {
          text: [
            "That evening one of the men says to the Tinkers, “Our ship, the ",
            italic("Red Rose"),
            ", is going to America. Come with us. You can start a new life there.”",
          ],
        },
        {
          text: [
            "The next day is January 1st, 1800. Sam and Jenny are on the ",
            italic("Red Rose"),
            ". They are happy, but sad, too.",
          ],
        },
        {
          text: "The island is very small now. “Goodbye, Tinkers Island,” they say. “Goodbye. Goodbye.”",
        },
      ],
      localMedia: `local-media/images/skills/listening/audiobooks/starter/tinkers-island/paragraph-15.avif`,
      r2: `${imageBase}/paragraph-15.avif`,
      imageAlt:
        "Sam and Jenny on the deck of the Red Rose, looking back at Tinkers Island for the last time.",
      mediaPosition: "left",
    },
    {
      id: "retell-the-story",
      title: "Retell the Story",
      text: "Look at each picture and retell that part of the story in complete sentences. Tell the story first, then flip the card to check.",
      retell: {
        cards: [
          {
            img: `${imageBase}/paragraph-1.avif`,
            alt: "Jenny and her father Sam selling fruit and vegetables in Covent Garden market.",
            summary:
              "Jenny is fourteen and she works in Covent Garden market with her father, Sam. One day after work she sees a man running with a watch in his hand.",
          },
          {
            img: `${imageBase}/paragraph-2.avif`,
            alt: "Angry people running down the street after Sam while two policemen hold his arms.",
            summary:
              "The man gives Sam the watch, and angry people run after Sam because they think he is a thief. Two policemen take him away and they do not listen to Jenny.",
          },
          {
            img: `${imageBase}/paragraph-3.avif`,
            alt: "Jenny talking to Peter Stone, with the Black Star waiting on the River Thames.",
            summary:
              "Jenny goes to Peter Stone’s house for help. Peter says that thieves are sent to Australia, and a week later Jenny sees her father on the Black Star.",
          },
          {
            img: `${imageBase}/paragraph-4.avif`,
            alt: "Jenny, dressed as a boy, talking to the captain of the Black Star.",
            summary:
              "Jenny sees trousers and a shirt on a line and dresses as a boy. She tells the captain her name is Ned Bell, and he gives her a job helping the cook.",
          },
          {
            img: `${imageBase}/paragraph-5.avif`,
            alt: "Jenny unlocking the prisoners’ room deep in the bottom of the Black Star.",
            summary:
              "For six weeks Jenny works very hard on the ship. One night she takes the captain’s keys, goes to the bottom of the ship and finds her father.",
          },
          {
            img: `${imageBase}/paragraph-6.avif`,
            alt: "Jenny and Sam escaping in a small boat under a big moon, the Black Star behind them.",
            summary:
              "Fifteen minutes later Jenny and Sam are in a small boat, and the Black Star is behind them. It is a beautiful night with a big moon, and Jenny tells her father that he is free.",
          },
          {
            img: `${imageBase}/paragraph-7.avif`,
            alt: "Sam standing up in the small boat and pointing to an island on the horizon.",
            summary:
              "After five days Jenny sees a big white bird carrying some grass. Sam stands up in the boat and sees an island on the horizon.",
          },
          {
            img: `${imageBase}/paragraph-8.avif`,
            alt: "Sam and Jenny drinking from a small river on the wooded island.",
            summary:
              "On the island, Sam and Jenny look for food and water and find a small river with cold, clean water. Sam opens two coconuts and gives the first one to Jenny.",
          },
          {
            img: `${imageBase}/paragraph-9.avif`,
            alt: "Sam and Jenny looking up at their new grass-and-wood house with Sam’s shirt as a flag on the roof.",
            summary:
              "That night they sleep on the beach. In the morning they build a small house with grass and wood, and after four days Sam puts his shirt on the roof as a flag.",
          },
          {
            img: `${imageBase}/paragraph-10.avif`,
            alt: "Sam stepping on a long snake on the ground while Jenny fishes nearby.",
            summary:
              "Sam and Jenny are very happy for the first year. Then one morning, while Jenny is fishing, Sam steps on a snake and it bites him.",
          },
          {
            img: `${imageBase}/paragraph-11.avif`,
            alt: "Jenny sitting beside her father’s bed in the island house, watching over him.",
            summary:
              "Jenny pulls her father along the beach to the house. He is very weak, and she sits next to his bed for three days and nights until he opens his eyes.",
          },
          {
            img: `${imageBase}/paragraph-12.avif`,
            alt: "Jenny running to the house to tell her father about the ship coming to the island.",
            summary:
              "After ten days Sam is well again but not very strong, so Jenny does all the work. One morning she sees a ship coming to the island and runs to tell her father.",
          },
          {
            img: `${imageBase}/paragraph-13.avif`,
            alt: "Sam and Jenny watching from the house as three men lower a boat from the ship.",
            summary:
              "Sam asks if the ship is the Black Star. He sees three men putting a boat in the water, and he and Jenny start to run away.",
          },
          {
            img: `${imageBase}/paragraph-14.avif`,
            alt: "Sam and Jenny hiding behind a big tree as a man with a gun turns toward them.",
            summary:
              "Sam and Jenny hide behind a big tree. A man with a gun turns and asks who is there, and he is surprised when he sees that Jenny is English.",
          },
          {
            img: `${imageBase}/paragraph-15.avif`,
            alt: "Sam and Jenny on the deck of the Red Rose, looking back at Tinkers Island for the last time.",
            summary:
              "That evening the men invite the Tinkers to sail to America with them on the Red Rose. The next day, January 1st, 1800, Sam and Jenny are happy but sad as they say goodbye to Tinkers Island.",
          },
        ],
      },
    },
  ] satisfies AudiobookSection[],
} as const;
