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
        {
          question: "How old is Jenny?",
          options: [
            { option: "She is twelve years old." },
            { option: "She is fourteen years old.", isCorrect: true },
            { option: "She is sixteen years old." },
          ],
        },
        {
          question: "Where do Jenny and Sam work?",
          options: [
            {
              option:
                "They work in Covent Garden market, selling fruit and vegetables.",
              isCorrect: true,
            },
            { option: "They work on the River Thames, near the ships." },
            { option: "They work in a small shop near their house." },
          ],
        },
        {
          question: "What has the running man got in his hand?",
          options: [
            { option: "He has got a bag in his hand." },
            { option: "He has got some money in his hand." },
            { option: "He has got a watch in his hand.", isCorrect: true },
          ],
        },
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
        {
          question: "What does the man give Sam?",
          options: [
            { option: "He gives Sam a watch.", isCorrect: true },
            { option: "He gives Sam a bag." },
            { option: "He gives Sam a coat." },
          ],
        },
        {
          question: "Why do the people run after Sam?",
          options: [
            { option: "They run after him because he has got their money." },
            { option: "They run after him because he is a policeman." },
            {
              option: "They run after him because they think he is a thief.",
              isCorrect: true,
            },
          ],
        },
        {
          question: "Do the policemen listen to Jenny?",
          options: [
            { option: "Yes, they listen to her carefully." },
            { option: "No, they do not listen to her story.", isCorrect: true },
            { option: "Yes, they listen to her and let Sam go." },
          ],
        },
      ],
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
        {
          question: "Who does Jenny go to for help?",
          options: [
            { option: "She goes to her mother for help." },
            { option: "She goes to the ship’s captain for help." },
            {
              option:
                "She goes to Peter Stone, a man who works in the market.",
              isCorrect: true,
            },
          ],
        },
        {
          question: "Where do they send thieves?",
          options: [
            { option: "They send thieves to Australia.", isCorrect: true },
            { option: "They send thieves to America." },
            { option: "They send thieves to the River Thames." },
          ],
        },
        {
          question: "Where is Sam a week later?",
          options: [
            { option: "He is at home in Covent Garden." },
            {
              option:
                "He is on a big ship, the Black Star, on the River Thames.",
              isCorrect: true,
            },
            { option: "He is in a small boat with Peter Stone." },
          ],
        },
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
        {
          question: "What does Jenny see on a line above the street?",
          options: [
            { option: "She sees a bag and a hat on the line." },
            {
              option:
                "She sees a pair of trousers and a shirt on the line.",
              isCorrect: true,
            },
            { option: "She sees a flag and a coat on the line." },
          ],
        },
        {
          question: "What name does she give the captain?",
          options: [
            { option: "She gives the captain the name Jenny Tinker." },
            { option: "She gives the captain the name Sam Bell." },
            {
              option: "She gives the captain the name Ned Bell.",
              isCorrect: true,
            },
          ],
        },
        {
          question: "What job does she get on the Black Star?",
          options: [
            { option: "She gets a job helping the cook.", isCorrect: true },
            { option: "She gets a job cleaning the captain’s room." },
            { option: "She gets a job working with the prisoners." },
          ],
        },
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
        {
          question: "How long does Jenny work on the ship?",
          options: [
            { option: "She works on the ship for six weeks.", isCorrect: true },
            { option: "She works on the ship for six days." },
            { option: "She works on the ship for six months." },
          ],
        },
        {
          question: "What does she take from the captain’s room?",
          options: [
            { option: "She takes his shirt from the captain’s room." },
            {
              option: "She takes the keys from the captain’s room.",
              isCorrect: true,
            },
            { option: "She takes a gun from the captain’s room." },
          ],
        },
        {
          question: "Where does she find her father?",
          options: [
            { option: "She finds him in the captain’s room." },
            { option: "She finds him on the beach near the ship." },
            {
              option: "She finds him at the bottom of the ship.",
              isCorrect: true,
            },
          ],
        },
      ],
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
        {
          question: "Where are the Tinkers fifteen minutes later?",
          options: [
            { option: "They are at home in Covent Garden." },
            { option: "They are on the Black Star." },
            {
              option:
                "They are in a small boat, with the Black Star behind them.",
              isCorrect: true,
            },
          ],
        },
        {
          question: "What can they hear?",
          options: [
            { option: "They can hear the men on the Black Star." },
            {
              option:
                "They can hear nothing but the sea and the wind.",
              isCorrect: true,
            },
            { option: "They can hear a big bird above the boat." },
          ],
        },
        {
          question: "What does Jenny say to her father?",
          options: [
            { option: "She says, “You’re free!”", isCorrect: true },
            { option: "She says, “We’re going home!”" },
            { option: "She says, “The captain helped me.”" },
          ],
        },
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
        {
          question:
            "How long are they in the small boat before they see the bird?",
          options: [
            {
              option: "They are in the small boat for five days.",
              isCorrect: true,
            },
            { option: "They are in the small boat for three days." },
            { option: "They are in the small boat for ten days." },
          ],
        },
        {
          question: "What is the bird carrying?",
          options: [
            { option: "It is carrying a fish." },
            { option: "It is carrying a watch." },
            { option: "It is carrying some grass.", isCorrect: true },
          ],
        },
        {
          question:
            "Who stands up in the small boat and says he can see the island?",
          options: [
            {
              option: "Sam stands up in the boat and sees the island.",
              isCorrect: true,
            },
            { option: "Jenny stands up in the boat and sees the island." },
            {
              option:
                "The captain of the Black Star stands up and sees the island.",
            },
          ],
        },
      ],
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
        {
          question: "What do Sam and Jenny look for first?",
          options: [
            { option: "They look for the captain first." },
            { option: "They look for food and water first.", isCorrect: true },
            { option: "They look for their boat first." },
          ],
        },
        {
          question: "What do they find?",
          options: [
            { option: "They find a big house near the beach." },
            { option: "They find a village between the trees." },
            {
              option:
                "They find a small river with cold, clean water.",
              isCorrect: true,
            },
          ],
        },
        {
          question: "Who gets the first coconut?",
          options: [
            { option: "Jenny gets the first coconut.", isCorrect: true },
            { option: "Sam gets the first coconut." },
            { option: "They save the first coconut for the next day." },
          ],
        },
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
        {
          question: "Where do they sleep on the first night?",
          options: [
            { option: "They sleep in the small house." },
            { option: "They sleep in a big tree." },
            { option: "They sleep on the beach.", isCorrect: true },
          ],
        },
        {
          question: "What do they make their new house with?",
          options: [
            { option: "They make it with stones and grass." },
            { option: "They make it with grass and wood.", isCorrect: true },
            { option: "They make it with wood from the ship." },
          ],
        },
        {
          question: "How does Sam make the flag, and where does he put it?",
          options: [
            {
              option:
                "He makes it with his shirt and puts it on the roof.",
              isCorrect: true,
            },
            {
              option: "He makes it with grass and puts it on the beach.",
            },
            {
              option:
                "He makes it with a coconut leaf and puts it next to the door.",
            },
          ],
        },
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
        {
          question: "How long are Sam and Jenny happy on the island?",
          options: [
            { option: "They are happy for the first year.", isCorrect: true },
            { option: "They are happy for the first month." },
            { option: "They are happy for ten days." },
          ],
        },
        {
          question: "What is Sam looking for when the snake bites him?",
          options: [
            { option: "He is looking for fish." },
            { option: "He is looking for water." },
            { option: "He is looking for coconuts.", isCorrect: true },
          ],
        },
        {
          question: "What happens to Sam?",
          options: [
            { option: "He falls into the river and cannot swim." },
            {
              option: "He puts his foot on a snake and it bites him.",
              isCorrect: true,
            },
            { option: "He cuts his foot on a big stone." },
          ],
        },
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
        {
          question: "How does Jenny get her father back to the house?",
          options: [
            { option: "She carries him on her back to the house." },
            { option: "She asks the captain to help her." },
            {
              option: "She pulls him along the beach to the house.",
              isCorrect: true,
            },
          ],
        },
        {
          question: "How long does Jenny sit next to his bed?",
          options: [
            {
              option: "She sits next to his bed for three days and nights.",
              isCorrect: true,
            },
            { option: "She sits next to his bed for three hours." },
            { option: "She sits next to his bed for ten days and nights." },
          ],
        },
        {
          question: "What does Sam ask when he opens his eyes?",
          options: [
            { option: "He asks, “Where is the ship?”" },
            { option: "He asks, “Jenny – is that you?”", isCorrect: true },
            { option: "He asks, “Are we on the Black Star?”" },
          ],
        },
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
        {
          question: "How does Sam feel after ten days?",
          options: [
            { option: "He is very strong again." },
            {
              option: "He is well again, but not very strong.",
              isCorrect: true,
            },
            { option: "He is worse than before." },
          ],
        },
        {
          question: "What work does Jenny do?",
          options: [
            { option: "She works on the ship with the men." },
            { option: "She builds a new house on the beach." },
            {
              option:
                "She catches fish, finds coconuts, makes fires and cooks.",
              isCorrect: true,
            },
          ],
        },
        {
          question: "What does Jenny see one morning?",
          options: [
            {
              option: "She sees a ship coming to the island.",
              isCorrect: true,
            },
            { option: "She sees a big white bird above the trees." },
            { option: "She sees a boat from the Black Star on the beach." },
          ],
        },
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
        {
          question: "What ship does Sam think it is?",
          options: [
            { option: "He thinks it is the Black Star.", isCorrect: true },
            { option: "He thinks it is the Red Rose." },
            { option: "He thinks it is a ship from America." },
          ],
        },
        {
          question: "How many men can Sam see?",
          options: [
            { option: "He can see two men." },
            { option: "He can see three men.", isCorrect: true },
            { option: "He can see five men." },
          ],
        },
        {
          question: "What are the men doing?",
          options: [
            { option: "They are fishing near the island." },
            { option: "They are looking for food and water." },
            {
              option: "They are putting a boat in the water.",
              isCorrect: true,
            },
          ],
        },
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
        {
          question: "Where do Sam and Jenny hide?",
          options: [
            { option: "They hide in the small house." },
            { option: "They hide behind a boat on the beach." },
            { option: "They hide behind a big tree.", isCorrect: true },
          ],
        },
        {
          question: "What is the man carrying?",
          options: [
            { option: "He is carrying a gun.", isCorrect: true },
            { option: "He is carrying a bag." },
            { option: "He is carrying a watch." },
          ],
        },
        {
          question: "What does the man say when he sees Jenny?",
          options: [
            { option: "He says, “Don’t be afraid.”" },
            { option: "He says, “You’re English!!”", isCorrect: true },
            { option: "He says, “Where are your parents?”" },
          ],
        },
      ],
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
        {
          question: "Where is the men’s ship, the Red Rose, going?",
          options: [
            { option: "It is going to America.", isCorrect: true },
            { option: "It is going to Australia." },
            { option: "It is going back to England." },
          ],
        },
        {
          question: "What date is it the next day?",
          options: [
            { option: "It is January 1st, 1798." },
            { option: "It is November 1st, 1799." },
            { option: "It is January 1st, 1800.", isCorrect: true },
          ],
        },
        {
          question: "Why are Sam and Jenny happy but sad?",
          options: [
            {
              option:
                "They are happy to go home, but sad to leave the Red Rose.",
            },
            {
              option:
                "They are happy to start a new life, but sad to leave Tinkers Island.",
              isCorrect: true,
            },
            {
              option:
                "They are happy to find food, but sad to leave the beach.",
            },
          ],
        },
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
      retell: {
        cards: [
          {
            img: `${imageBase}/paragraph-1.avif`,
            alt: "Jenny and her father Sam selling fruit and vegetables in Covent Garden market.",
            summary: "Jenny and Sam sell fruit and vegetables in the market.",
          },
          {
            img: `${imageBase}/paragraph-2.avif`,
            alt: "Angry people running down the street after Sam while two policemen hold his arms.",
            summary:
              "People think Sam is a thief, so two policemen take him away.",
          },
          {
            img: `${imageBase}/paragraph-3.avif`,
            alt: "Jenny talking to Peter Stone, with the Black Star waiting on the River Thames.",
            summary:
              "Jenny asks Peter Stone for help and learns thieves go to Australia.",
          },
          {
            img: `${imageBase}/paragraph-4.avif`,
            alt: "Jenny, dressed as a boy, talking to the captain of the Black Star.",
            summary:
              "Jenny dresses as a boy and gets a job helping the ship’s cook.",
          },
          {
            img: `${imageBase}/paragraph-5.avif`,
            alt: "Jenny unlocking the prisoners’ room deep in the bottom of the Black Star.",
            summary:
              "One night Jenny takes the captain’s keys and goes to her father.",
          },
          {
            img: `${imageBase}/paragraph-6.avif`,
            alt: "Jenny and Sam escaping in a small boat under a big moon, the Black Star behind them.",
            summary: "Jenny and Sam escape from the ship in a small boat.",
          },
          {
            img: `${imageBase}/paragraph-7.avif`,
            alt: "Sam standing up in the small boat and pointing to an island on the horizon.",
            summary:
              "After five days they see a bird carrying grass, then an island.",
          },
          {
            img: `${imageBase}/paragraph-8.avif`,
            alt: "Sam and Jenny drinking from a small river on the wooded island.",
            summary:
              "On the island they find a river with clean water and coconuts.",
          },
          {
            img: `${imageBase}/paragraph-9.avif`,
            alt: "Sam and Jenny looking up at their new grass-and-wood house with Sam’s shirt as a flag on the roof.",
            summary:
              "They build a small house, and Sam makes a flag from his shirt.",
          },
          {
            img: `${imageBase}/paragraph-10.avif`,
            alt: "Sam stepping on a long snake on the ground while Jenny fishes nearby.",
            summary: "Sam steps on a snake one morning and it bites him.",
          },
          {
            img: `${imageBase}/paragraph-11.avif`,
            alt: "Jenny sitting beside her father’s bed in the island house, watching over him.",
            summary:
              "Jenny pulls Sam to the house and sits by his bed for three days.",
          },
          {
            img: `${imageBase}/paragraph-12.avif`,
            alt: "Jenny running to the house to tell her father about the ship coming to the island.",
            summary: "Jenny sees a ship coming to the island one morning.",
          },
          {
            img: `${imageBase}/paragraph-13.avif`,
            alt: "Sam and Jenny watching from the house as three men lower a boat from the ship.",
            summary:
              "Sam sees three men from the ship putting a boat in the water.",
          },
          {
            img: `${imageBase}/paragraph-14.avif`,
            alt: "Sam and Jenny hiding behind a big tree as a man with a gun turns toward them.",
            summary: "A man with a gun sees Sam and Jenny behind a big tree.",
          },
          {
            img: `${imageBase}/paragraph-15.avif`,
            alt: "Sam and Jenny on the deck of the Red Rose, looking back at Tinkers Island for the last time.",
            summary:
              "Sam and Jenny leave Tinkers Island on the Red Rose for America.",
          },
        ],
      },
    },
  ] satisfies AudiobookSection[],
} as const;
