import type { AudiobookSection } from "./a-new-zealand-adventure";

const imageBase = "/media/images/skills/listening/audiobooks/starter/flying-home";
const localBase = "local-media/images/skills/listening/audiobooks/starter/flying-home";

export const flyingHome = {
  slug: "flying-home",
  title: "Flying Home",
  audio: "",
  sections: [
    {
      id: "summary",
      title: "Summary",
      text: "Felix is not a happy bird. He comes from Brazil but he doesn't live there. He lives in New York in a cage. Then one day his cage opens and Felix says goodbye to New York. Can he find his family in Brazil again? Let's find out.",
      localMedia: `${localBase}/cover.avif`,
      r2: `${imageBase}/cover.avif`,
      imageAlt: "Cover of Flying Home.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-1",
      questions: [
        {
          question: "Where does Felix come from?",
          options: [
            { option: "He comes from New York." },
            { option: "He comes from Brazil.", isCorrect: true },
            { option: "He comes from Peru." },
          ],
        },
        {
          question: "Who does he live with?",
          options: [
            { option: "He lives with a family in the jungle." },
            {
              option: "He lives with the Baxter family in New York.",
              isCorrect: true,
            },
            { option: "He lives alone in a tall building." },
          ],
        },
        {
          question: "Why isn't he happy?",
          options: [
            { option: "He does not like the Baxters." },
            { option: "He has no food in his cage." },
            { option: "He wants to go home to Brazil.", isCorrect: true },
          ],
        },
      ],
      title: "Paragraph 1",
      text: `Felix is a blue and yellow bird from Brazil. He lives with the Baxter family in New York. His home is a big cage. It is on the fortieth floor of a tall building. Felix likes the Baxters, and the Baxters like him, they give him food. They talk to him and show him to all their friends. But Felix isn't happy. He wants to go home to Brazil.`,
      localMedia: `${localBase}/paragraph-1.avif`,
      r2: `${imageBase}/paragraph-1.avif`,
      imageAlt: "Felix in his cage high above New York City.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-2",
      questions: [
        {
          question: "What does Felix remember about Brazil?",
          options: [
            {
              option:
                "He remembers the big, yellow moon and his last day in the jungle.",
              isCorrect: true,
            },
            { option: "He remembers the snow in New York." },
            { option: "He remembers all the friends of the Baxters." },
          ],
        },
        {
          question: "How did he travel to New York?",
          options: [
            { option: "He travelled to New York by ship." },
            { option: "He travelled to New York by plane.", isCorrect: true },
            { option: "He travelled to New York by car." },
          ],
        },
      ],
      title: "Paragraph 2",
      timestamp: "0:36",
      text: `Every night Felix looks up at the sky. He can see the whole city. It is big and exciting. It is home for the Baxters, but not for Felix. He remembers the big, yellow moon in Brazil. Then he remembers his last day in the jungle. The two men with white hats. The big box. The long plane journey. The shop — “Beautiful Birds” — in New York.`,
      localMedia: `${localBase}/paragraph-2.avif`,
      r2: `${imageBase}/paragraph-2.avif`,
      imageAlt: "Felix looking at the moon from his cage at night.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-3",
      questions: [
        {
          question: "Who does Felix want to be with?",
          options: [
            { option: "He wants to be with the Baxters again." },
            {
              option: "He wants to be with his family again.",
              isCorrect: true,
            },
            { option: "He wants to be with the men in white hats." },
          ],
        },
        {
          question: "Where does he want to fly?",
          options: [
            {
              option: "He wants to fly home to the jungle in Brazil.",
              isCorrect: true,
            },
            { option: "He wants to fly back to the shop in New York." },
            { option: "He wants to fly across the Atlantic Ocean." },
          ],
        },
      ],
      title: "Paragraph 3",
      timestamp: "1:10",
      text: `Felix closes his eyes. Now he can't see the city and the snow. He can see other things. He can see the life he loves. “I want to be with my family again,” he thinks. “I want to fly home to the jungle. It's warm there and the trees are always green.” He puts his head under one wing. “One day,” he says. “One day.”`,
      localMedia: `${localBase}/paragraph-3.avif`,
      r2: `${imageBase}/paragraph-3.avif`,
      imageAlt: "Felix remembering his family in the Brazilian jungle.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-4",
      questions: [
        {
          question: "Why does Mr Baxter leave the cage open?",
          options: [
            { option: "He wants Felix to fly away." },
            { option: "He is in the bath and cannot shut it." },
            {
              option: "He goes to answer the telephone and forgets to shut it.",
              isCorrect: true,
            },
          ],
        },
        {
          question: "What does Felix see?",
          options: [
            { option: "He sees a big box." },
            { option: "He sees an open window.", isCorrect: true },
            { option: "He sees the two men with white hats." },
          ],
        },
      ],
      title: "Paragraph 4",
      timestamp: "1:54",
      text: `“One day” comes two weeks later. Mr Baxter opens Felix's cage to give him some food. Then he hears the telephone. “Can you answer that, George?” asks Mrs Baxter, “I'm in the bath.” “OK,” says Mr Baxter. He goes to the phone, but forgets to shut Felix's cage. Felix can see an open window. “This is it!” he thinks.`,
      localMedia: `${localBase}/paragraph-4.avif`,
      r2: `${imageBase}/paragraph-4.avif`,
      imageAlt: "Mr Baxter leaving Felix's cage open.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-5",
      questions: [
        {
          question: "Where does Felix fly?",
          options: [
            {
              option: "He flies out of the cage and window, through the city.",
              isCorrect: true,
            },
            {
              option:
                "He flies down to the streets and walks through the city.",
            },
            { option: "He flies to the shop called “Beautiful Birds”." },
          ],
        },
        {
          question: "Who sees him from a café?",
          options: [
            { option: "A man reading his newspaper sees him." },
            { option: "The Baxter family sees him." },
            { option: "A girl with her mother sees him.", isCorrect: true },
          ],
        },
      ],
      title: "Paragraph 5",
      timestamp: "2:30",
      text: `He flies out of his cage and out of the window. The air under his wings is very cold. Behind him, he hears, “Hey! Felix!” But he doesn't go back. He looks down at the streets and buildings and flies through the city. A girl in a café with her mother sees him. “Look!” she says. Her mother does not hear. She is reading her newspaper.`,
      localMedia: `${localBase}/paragraph-5.avif`,
      r2: `${imageBase}/paragraph-5.avif`,
      imageAlt: "Felix flying through New York above a café.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-6",
      questions: [
        {
          question: "Where does Felix stop?",
          options: [
            { option: "He stops in a café in the city." },
            {
              option: "He stops on the head of the Statue of Liberty.",
              isCorrect: true,
            },
            { option: "He stops in a tree in Brazil." },
          ],
        },
        {
          question: "Where does he say he is going?",
          options: [
            { option: "He says he is going home to Brazil.", isCorrect: true },
            { option: "He says he is going to Peru." },
            { option: "He says he is going back to the Baxters." },
          ],
        },
      ],
      title: "Paragraph 6",
      timestamp: "3:08",
      text: `After an hour Felix stops. He stands on the head of the Statue of Liberty. “Where are you from?” asks a small, grey and white bird beside him. “I'm from Brazil,” answers Felix. “And where are you going?” asks the bird. Felix flies up into the cold, blue sky again. “I'm going home,” he says. “Goodbye.”`,
      localMedia: `${localBase}/paragraph-6.avif`,
      r2: `${imageBase}/paragraph-6.avif`,
      imageAlt: "Felix resting on the Statue of Liberty.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-7",
      questions: [
        {
          question: "Which direction does Felix fly?",
          options: [
            { option: "He flies north." },
            { option: "He flies east." },
            { option: "He flies south.", isCorrect: true },
          ],
        },
        {
          question: "Why is he happy?",
          options: [
            { option: "He is happy because he has a lot of food." },
            {
              option: "He is free for the first time in two years.",
              isCorrect: true,
            },
            { option: "He is happy because he is back in his cage." },
          ],
        },
      ],
      title: "Paragraph 7",
      timestamp: "3:50",
      text: `Felix flies south. Soon he can't see New York. All he can see is the Atlantic Ocean. In the evening the sun starts to go down. Then the sky is red, yellow and blue. It is very beautiful. Felix is hungry, but he is happy, too. For the first time in two years, he is free. He wants to fly all night.`,
      localMedia: `${localBase}/paragraph-7.avif`,
      r2: `${imageBase}/paragraph-7.avif`,
      imageAlt: "Felix flying south over the Atlantic at sunset.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-8",
      questions: [
        {
          question: "How does the weather change?",
          options: [
            {
              option: "It starts to rain and the sky becomes black.",
              isCorrect: true,
            },
            { option: "The sun comes out and the sky becomes red." },
            { option: "It starts to snow and the sky becomes white." },
          ],
        },
        {
          question: "What does Felix see in the water?",
          options: [
            { option: "He sees a star in the black water." },
            { option: "He sees a ship.", isCorrect: true },
            { option: "He sees the moon in the black water." },
          ],
        },
        {
          question: "Is he sure about continuing his journey?",
          options: [
            { option: "Yes, he is sure about his journey." },
            { option: "Yes, he is sure he can find Brazil." },
            {
              option: "No, he wonders if he is doing the right thing.",
              isCorrect: true,
            },
          ],
        },
      ],
      title: "Paragraph 8",
      timestamp: "4:26",
      text: `Two hours later it starts to rain. Now the sky is black. Soon, Felix can't see the moon or the stars. “Where am I?” he thinks. He remembers his warm cage. “Am I doing the right thing?” He looks down at the cold sea. Then he sees something. Is it a star in the black water? No, it can't be a star. He looks again. It is a ship!`,
      localMedia: `${localBase}/paragraph-8.avif`,
      r2: `${imageBase}/paragraph-8.avif`,
      imageAlt: "Felix spotting a ship during a storm.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-9",
      questions: [
        {
          question: "Where does Felix land?",
          options: [
            { option: "He lands on the Statue of Liberty." },
            { option: "He lands on a ship.", isCorrect: true },
            { option: "He lands in a tree in Peru." },
          ],
        },
        {
          question: "What does he eat?",
          options: [
            { option: "He eats fish.", isCorrect: true },
            { option: "He eats bread from the man on the ship." },
            { option: "He eats fruit from the jungle." },
          ],
        },
        {
          question: "Why doesn't he need to be afraid of the man?",
          options: [
            { option: "The man wants to catch him and sell him." },
            { option: "The man wants to give him to a boy." },
            {
              option: "The man only wants to take a photograph of him.",
              isCorrect: true,
            },
          ],
        },
      ],
      title: "Paragraph 9",
      timestamp: "5:16",
      text: `Felix flies down to the ship. There are hundreds of fish on it. He eats twenty in five minutes, then he sleeps. In the morning a man on the ship sees him. “Oh no!” thinks Felix, but it is all right. The man only wants to take a photograph of him. Felix flies into the sky again. “Good,” he thinks. “It's not raining now, and I'm not hungry.”`,
      localMedia: `${localBase}/paragraph-9.avif`,
      r2: `${imageBase}/paragraph-9.avif`,
      imageAlt: "Felix leaving a fishing boat after resting.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-10",
      questions: [
        {
          question: "Which country is Felix flying across?",
          options: [
            { option: "He is flying across Peru.", isCorrect: true },
            { option: "He is flying across Brazil." },
            { option: "He is flying across New York." },
          ],
        },
        {
          question: "What city does he see?",
          options: [
            { option: "He sees the city of Rio." },
            { option: "He sees the city of New York." },
            {
              option: "He sees the Inca city of Machu Picchu.",
              isCorrect: true,
            },
          ],
        },
        {
          question: "What big bird does he meet?",
          options: [
            { option: "He meets a small grey and white bird." },
            {
              option: "He meets a big bird with black and white feathers.",
              isCorrect: true,
            },
            { option: "He meets a big bird with blue and yellow feathers." },
          ],
        },
      ],
      title: "Paragraph 10",
      timestamp: "5:56",
      text: `Two days later Felix flies across Peru. He looks down and sees the Inca city of Machu Picchu. “Those old stone buildings look interesting,” he thinks. “I know — I can stop there tonight.” Felix starts to fly down to the buildings. Then he sees a big bird with beautiful black and white feathers. It is sitting on a stone.`,
      localMedia: `${localBase}/paragraph-10.avif`,
      r2: `${imageBase}/paragraph-10.avif`,
      imageAlt: "Felix meeting a large bird above Machu Picchu.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-11",
      questions: [
        {
          question: "What does Felix tell the bird?",
          options: [
            {
              option:
                "He tells his story about living in a cage and going home.",
              isCorrect: true,
            },
            { option: "He tells the bird about the ship and the fish." },
            { option: "He tells the bird where to find food in Peru." },
          ],
        },
        {
          question: "Who can help him in Rio?",
          options: [
            { option: "The small grey and white bird can help him." },
            { option: "The boy’s father can help him." },
            { option: "Aca can help him in Rio.", isCorrect: true },
          ],
        },
      ],
      title: "Paragraph 11",
      timestamp: "6:30",
      text: `“Hello, you're not from Peru, are you?” says the bird. Felix tells his story. “Two years in a cage in New York?!” says the bird. “Yes,” answers Felix, “but now I'm going home. Can you tell me how to get there?” “I have a friend — Aca — in Rio,” says the bird. “He knows the jungle. Go there and ask him.”`,
      localMedia: `${localBase}/paragraph-11.avif`,
      r2: `${imageBase}/paragraph-11.avif`,
      imageAlt: "Felix talking to a large Andean bird.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-12",
      questions: [
        {
          question: "Who is Felix looking for in Rio?",
          options: [
            { option: "He is looking for his family." },
            { option: "He is looking for Aca.", isCorrect: true },
            {
              option: "He is looking for the bird from the Statue of Liberty.",
            },
          ],
        },
        {
          question: "Why does the boy want Felix?",
          options: [
            { option: "He wants to have Felix as a pet.", isCorrect: true },
            { option: "He wants to take a photograph of Felix." },
            { option: "He wants to give Felix some food." },
          ],
        },
      ],
      title: "Paragraph 12",
      timestamp: "7:08",
      text: `Felix flies from Peru to Rio. There he sees a lot of people in the street. He can hear music and see some birds in a tree. Is one of them Aca? “Aca! Aca!” he says. “Yes, that's me,” answers one of the birds. Felix can't see him. Then a boy sees Felix. “Look at the bird,” he says to his father. “Can I have him? Can I? Please?”`,
      localMedia: `${localBase}/paragraph-12.avif`,
      r2: `${imageBase}/paragraph-12.avif`,
      imageAlt: "Felix flying over a colorful celebration in Rio.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-13",
      questions: [
        {
          question: "Who catches Felix?",
          options: [
            { option: "Aca catches him." },
            { option: "A boy in the street catches him." },
            { option: "The boy’s father catches him.", isCorrect: true },
          ],
        },
        {
          question: "Who helps him escape?",
          options: [
            { option: "The boy helps him escape." },
            { option: "Aca helps him escape.", isCorrect: true },
            {
              option: "The man with the warm hand helps him escape.",
            },
          ],
        },
        {
          question: "What does Felix do after he escapes?",
          options: [
            { option: "He tells Aca his story.", isCorrect: true },
            { option: "He flies back to New York." },
            { option: "He eats twenty fish on a ship." },
          ],
        },
      ],
      title: "Paragraph 13",
      timestamp: "7:50",
      text: `At first, Felix doesn't see the boy or his father. He is looking at all the birds in the trees. “Aca! Aca!” says Felix. Then there is a warm hand on his neck. He fights with his wings and his feet. “Help! Help!” Aca helps him. “Aiiieee!!!” says the man. The two birds fly into the sky. “Thank you,” says Felix. Then he tells Aca his story.`,
      localMedia: `${localBase}/paragraph-13.avif`,
      r2: `${imageBase}/paragraph-13.avif`,
      imageAlt: "Aca rescuing Felix from a man in Rio.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-14",
      questions: [
        {
          question: "What are the men building?",
          options: [
            { option: "They are building a new village." },
            { option: "They are building a new road.", isCorrect: true },
            { option: "They are building a new cage for Felix." },
          ],
        },
        {
          question: "Why is Felix worried?",
          options: [
            { option: "He is tired after the long journey." },
            { option: "He does not like the village." },
            {
              option: "He cannot see his home or his family.",
              isCorrect: true,
            },
          ],
        },
      ],
      title: "Paragraph 14",
      timestamp: "8:34",
      text: `Felix and Aca fly from Rio to the jungle. In the evening Felix says, “Yes, I remember that village. My home's very near here. It's only...” Then he stops. In front of them, there are a lot of men and machines. “Oh no, they're making a new road!” says Aca. “But... where's my home?” asks Felix. “And where's my family?”`,
      localMedia: `${localBase}/paragraph-14.avif`,
      r2: `${imageBase}/paragraph-14.avif`,
      imageAlt: "Felix and Aca discovering road construction in the jungle.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-15",
      questions: [
        {
          question: "What does Felix see above the trees?",
          options: [
            { option: "He sees four birds: his family.", isCorrect: true },
            { option: "He sees a lot of men and machines." },
            { option: "He sees a new road above the trees." },
          ],
        },
        {
          question: "Does he find his family?",
          options: [
            { option: "No, he does not." },
            { option: "Yes, he does.", isCorrect: true },
          ],
        },
        {
          question: "How does he feel at the end?",
          options: [
            { option: "He is sad because his home is gone." },
            { option: "He is angry with Aca." },
            { option: "He is happy to be home.", isCorrect: true },
          ],
        },
      ],
      title: "Paragraph 15",
      timestamp: "9:10",
      text: `The two birds fly over the new road, then they stop in a tree near the village. Felix is tired and sad. “I'm sorry,” says Aca. Then Felix sees a small blue and yellow feather in the air. He looks up. There, above the trees, are four birds. “It's them, Aca!” he says. “It's my family!” Then he flies into the sky. The birds see him. “Felix, is it you?” they ask. “Yes,” answers Felix. “I'm home!!!”`,
      localMedia: `${localBase}/paragraph-15.avif`,
      r2: `${imageBase}/paragraph-15.avif`,
      imageAlt: "Felix reuniting with his family in the jungle.",
      mediaPosition: "left",
    },
    {
      id: "retell-the-story",
      title: "Retell the Story",
      retell: {
        cards: [
          {
            img: `${imageBase}/paragraph-1.avif`,
            alt: "Felix in his cage high above New York City.",
            summary:
              "Felix lives in a cage in New York, but he wants to go home.",
          },
          {
            img: `${imageBase}/paragraph-2.avif`,
            alt: "Felix looking at the moon from his cage at night.",
            summary:
              "Every night Felix remembers his old life in the Brazilian jungle.",
          },
          {
            img: `${imageBase}/paragraph-3.avif`,
            alt: "Felix remembering his family in the Brazilian jungle.",
            summary:
              "Felix closes his eyes and dreams about his family in the jungle.",
          },
          {
            img: `${imageBase}/paragraph-4.avif`,
            alt: "Mr Baxter leaving Felix's cage open.",
            summary:
              "Mr Baxter forgets to shut the cage, and Felix sees an open window.",
          },
          {
            img: `${imageBase}/paragraph-5.avif`,
            alt: "Felix flying through New York above a café.",
            summary:
              "Felix flies out of the window and through the cold city.",
          },
          {
            img: `${imageBase}/paragraph-6.avif`,
            alt: "Felix resting on the Statue of Liberty.",
            summary:
              "Felix stops on the Statue of Liberty and says he is going home.",
          },
          {
            img: `${imageBase}/paragraph-7.avif`,
            alt: "Felix flying south over the Atlantic at sunset.",
            summary:
              "Felix flies south over the Atlantic Ocean and feels happy and free.",
          },
          {
            img: `${imageBase}/paragraph-8.avif`,
            alt: "Felix spotting a ship during a storm.",
            summary:
              "It starts to rain, and Felix sees a ship in the dark sea.",
          },
          {
            img: `${imageBase}/paragraph-9.avif`,
            alt: "Felix leaving a fishing boat after resting.",
            summary: "Felix lands on a ship and eats a lot of fish.",
          },
          {
            img: `${imageBase}/paragraph-10.avif`,
            alt: "Felix meeting a large bird above Machu Picchu.",
            summary:
              "Felix flies across Peru and sees a big bird at Machu Picchu.",
          },
          {
            img: `${imageBase}/paragraph-11.avif`,
            alt: "Felix talking to a large Andean bird.",
            summary:
              "A big bird tells Felix to find his friend Aca in Rio.",
          },
          {
            img: `${imageBase}/paragraph-12.avif`,
            alt: "Felix flying over a colorful celebration in Rio.",
            summary:
              "Felix arrives in Rio and calls Aca, but a boy wants him.",
          },
          {
            img: `${imageBase}/paragraph-13.avif`,
            alt: "Aca rescuing Felix from a man in Rio.",
            summary: "Aca helps Felix escape from a man in Rio.",
          },
          {
            img: `${imageBase}/paragraph-14.avif`,
            alt: "Felix and Aca discovering road construction in the jungle.",
            summary:
              "Felix and Aca find men building a new road in the jungle.",
          },
          {
            img: `${imageBase}/paragraph-15.avif`,
            alt: "Felix reuniting with his family in the jungle.",
            summary:
              "Felix looks up and sees his family in the sky above the trees.",
          },
        ],
      },
    },
  ] satisfies AudiobookSection[],
};
