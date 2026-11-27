import type { AudiobookSection } from "./a-new-zealand-adventure";

const imageBase =
  "/media/images/skills/listening/audiobooks/starter/marcel-and-the-white-star";
const localBase =
  "local-media/images/skills/listening/audiobooks/starter/marcel-and-the-white-star";

export const marcelAndTheWhiteStar = {
  slug: "marcel-and-the-white-star",
  title: "Marcel and the White Star",
  audio: "",
  sections: [
    {
      id: "summary",
      title: "Summary",
      text: `Marcel is a mouse and a famous detective. He lives in Paris. One evening, two thieves steal a very expensive diamond ring — the “White Star”. Then they steal a car. Marcel follows them across Paris to a café. Can he get the “White Star” and bring it back?`,
      localMedia: `${localBase}/cover.avif`,
      r2: `${imageBase}/cover.avif`,
      imageAlt: "Cover of Marcel and the White Star.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-1",
      questions: [
        {
          question: "What kind of animal is Marcel?",
          options: [
            { option: "He is a French cat." },
            { option: "He is a French mouse.", isCorrect: true },
            { option: "He is a French dog." },
          ],
        },
        {
          question: "Where does he live?",
          options: [
            {
              option:
                "He lives on an old boat in Paris, under the kitchen floor.",
              isCorrect: true,
            },
            { option: "He lives in the metro station at the Louvre." },
            { option: "He lives in a house next to Zaza’s house." },
          ],
        },
        {
          question: "What does he enjoy doing?",
          options: [
            { option: "He enjoys cooking, gardening and sailing." },
            { option: "He enjoys working, shopping and travelling." },
            {
              option:
                "He enjoys books, restaurants, old films and the opera.",
              isCorrect: true,
            },
          ],
        },
      ],
      title: "Paragraph 1",
      text: `Marcel is a French mouse. He lives on a beautiful old boat in Paris. (His home is under the kitchen floor.) He likes books, restaurants and old films. He likes the opera, too. One evening in June, Marcel finishes a detective story. Then he goes to have dinner with some friends. They live in the metro station at the Louvre.`,
      localMedia: `${localBase}/paragraph-1.avif`,
      r2: `${imageBase}/paragraph-1.avif`,
      imageAlt: "Marcel leaving his home on an old boat in Paris.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-2",
      questions: [
        {
          question: "Where is Marcel waiting?",
          options: [
            { option: "He is waiting at a café in Paris." },
            { option: "He is waiting at the metro station.", isCorrect: true },
            { option: "He is waiting outside the opera house." },
          ],
        },
        {
          question: "What is the White Star?",
          options: [
            {
              option:
                "It is Zaza Dupont’s diamond ring, worth one million pounds.",
              isCorrect: true,
            },
            { option: "It is a beautiful old boat in Paris." },
            { option: "It is a magazine about the opera." },
          ],
        },
      ],
      title: "Paragraph 2",
      timestamp: "0:34",
      text: `After dinner, Marcel waits at the station. He sees two men standing next to him. The tall one is reading a magazine. “Look,” he says, “here she is: ‘Opera star Miss Zaza Dupont with her beautiful one million pound diamond ring — the White Star.’” “Her beautiful diamond ring?” The short man looks at the photo and laughs. “Not after tonight,” he says.`,
      localMedia: `${localBase}/paragraph-2.avif`,
      r2: `${imageBase}/paragraph-2.avif`,
      imageAlt: "Two suspicious men reading a magazine at the Louvre station.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-3",
      questions: [
        {
          question: "What do the men want to steal?",
          options: [
            { option: "They want to steal Marcel’s hat." },
            { option: "They want to steal a magazine from the station." },
            {
              option: "They want to steal Zaza Dupont’s diamond ring.",
              isCorrect: true,
            },
          ],
        },
        {
          question: "Why does Marcel follow them?",
          options: [
            { option: "He wants to go home to his boat." },
            {
              option: "He wants to stop them stealing the ring.",
              isCorrect: true,
            },
            { option: "He wants to buy a ticket for the opera." },
          ],
        },
      ],
      title: "Paragraph 3",
      timestamp: "1:16",
      text: `Marcel's mouth opens. “What?! Are the men going to steal Zaza Dupont's diamond?” He remembers an evening at the opera two weeks before. Zaza's green dress. The music. The beautiful White Star on her finger. No! They can't steal it! The train comes and the men get on. Marcel pulls down his hat and follows them.`,
      localMedia: `${localBase}/paragraph-3.avif`,
      r2: `${imageBase}/paragraph-3.avif`,
      imageAlt: "Zaza Dupont wearing the White Star at the opera.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-4",
      questions: [
        {
          question: "Why does Marcel lose the men?",
          options: [
            { option: "The men run into Zaza’s house." },
            {
              option: "There are hundreds of people at the station.",
              isCorrect: true,
            },
            { option: "The train is too fast for him." },
          ],
        },
        {
          question: "What does Zaza tell the police?",
          options: [
            {
              option:
                "She tells them that two men have stolen the White Star.",
              isCorrect: true,
            },
            { option: "She tells them that a mouse has her ring." },
            {
              option:
                "She tells them that the thieves have brought the ring back.",
            },
          ],
        },
      ],
      title: "Paragraph 4",
      timestamp: "1:56",
      text: `Half an hour later he gets off again at La Mouette station. But there are hundreds of people, and Marcel loses the two men. Then he sees an old mouse. “Excuse me,” he says. “Do you know where Zaza Dupont lives?” But when Marcel finds Zaza's house, it is too late. “Yes — two men,” she is telling the police on the telephone. “And they've got the White Star.”`,
      localMedia: `${localBase}/paragraph-4.avif`,
      r2: `${imageBase}/paragraph-4.avif`,
      imageAlt:
        "Marcel looking through the window while Zaza calls the police.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-5",
      questions: [
        {
          question: "What are the thieves stealing?",
          options: [
            { option: "They are stealing a car.", isCorrect: true },
            { option: "They are stealing a boat." },
            { option: "They are stealing a magazine." },
          ],
        },
        {
          question: "How does Marcel follow their car?",
          options: [
            { option: "He runs behind the car all the way." },
            { option: "He takes the metro to the café." },
            {
              option: "He jumps onto its number-plate.",
              isCorrect: true,
            },
          ],
        },
      ],
      title: "Paragraph 5",
      timestamp: "2:32",
      text: `At that moment Marcel hears a motor start. “Where's that coming from?” he thinks. Then he sees something at the end of the road. It's them! It's the thieves and they're stealing a car! He runs across Zaza's garden and down the street. He can see the car's number-plate. It's near. Very near. “Can I...?” he thinks, and he jumps.`,
      localMedia: `${localBase}/paragraph-5.avif`,
      r2: `${imageBase}/paragraph-5.avif`,
      imageAlt: "The thieves escaping in a black car.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-6",
      questions: [
        {
          question: "Where is Marcel sitting?",
          options: [
            { option: "He is sitting on the car’s roof." },
            { option: "He is sitting under the car’s seat." },
            {
              option: "He is sitting on the car’s number-plate.",
              isCorrect: true,
            },
          ],
        },
        {
          question: "Where does the car stop?",
          options: [
            { option: "It stops next to the opera house." },
            { option: "It stops next to a café.", isCorrect: true },
            { option: "It stops next to Zaza’s house." },
          ],
        },
      ],
      title: "Paragraph 6",
      timestamp: "3:11",
      text: `Yes! Marcel sits on the number-plate. “Good,” he thinks. Then, after a second or two... “But what happens now?” The thieves drive across Paris very fast. Marcel can hear them in the car. They are laughing and talking. But Marcel is not laughing. He is very, very angry. After half an hour the car stops next to a café.`,
      localMedia: `${localBase}/paragraph-6.avif`,
      r2: `${imageBase}/paragraph-6.avif`,
      imageAlt: "The thieves arriving at a Paris café.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-7",
      questions: [
        {
          question: "Where are the thieves sitting?",
          options: [
            {
              option: "They are sitting at the woman’s table in the corner.",
              isCorrect: true,
            },
            { option: "They are sitting at a table near the door." },
            { option: "They are sitting outside the café." },
          ],
        },
        {
          question: "Who is with them?",
          options: [
            { option: "A waiter is with them." },
            { option: "A woman is with them.", isCorrect: true },
            { option: "Zaza Dupont is with them." },
          ],
        },
        {
          question: "What is inside the box?",
          options: [
            { option: "A magazine is inside the box." },
            { option: "Some soap is inside the box." },
            { option: "The White Star is inside the box.", isCorrect: true },
          ],
        },
      ],
      title: "Paragraph 7",
      timestamp: "3:48",
      text: `It is late and the café is quiet. In one corner there is a woman. The thieves sit at her table. Marcel sits under the table and listens. “Have you got it?” the woman asks. The tall man takes a box from his jacket. Then he opens it. “Look,” he says. “Ahhh!” The woman puts a hand to her mouth. “What a beautiful diamond!” “This is it,” thinks Marcel. “This is the moment.”`,
      localMedia: `${localBase}/paragraph-7.avif`,
      r2: `${imageBase}/paragraph-7.avif`,
      imageAlt: "The thieves showing the White Star to a woman in the café.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-8",
      questions: [
        {
          question: "How does Marcel make the man drop the White Star?",
          options: [
            { option: "He shouts at the tall man." },
            { option: "He bites the tall man’s leg.", isCorrect: true },
            { option: "He pushes the box off the table." },
          ],
        },
        {
          question: "What does Marcel do with the ring?",
          options: [
            {
              option: "He puts it around his neck and runs to the door.",
              isCorrect: true,
            },
            {
              option: "He puts it in his hat and waits under the table.",
            },
            { option: "He gives it back to the woman." },
          ],
        },
      ],
      title: "Paragraph 8",
      timestamp: "4:30",
      text: `He bites the tall man's leg very hard. “Aiiieee!” The tall man throws up his arms. The box and the White Star fly across the room. “What's that on the floor?” one waiter asks. “I don't know,” says another. “Is it...? No, it can't be a diam...” But before he can finish, Marcel runs across the room. He puts the White Star around his neck. Then he runs to the door.`,
    },
    {
      id: "paragraph-9",
      questions: [
        {
          question: "Who follows Marcel?",
          options: [
            { option: "The waiters follow him." },
            { option: "The police follow him." },
            { option: "The thieves follow him.", isCorrect: true },
          ],
        },
        {
          question: "Does he escape from the café?",
          options: [
            { option: "No, he does not." },
            { option: "Yes, he does.", isCorrect: true },
          ],
        },
      ],
      title: "Paragraph 9",
      timestamp: "5:15",
      text: `The thieves jump up and follow him. Suddenly, there are tables and chairs everywhere. “What's happening?” an old man asks. “I don't know,” his wife answers. “Who can understand young people these days?” “Stop that mouse!” says the tall man. “Shut the door!” says the short one. But they are too late. Marcel runs out of the café and does not look back.`,
      localMedia: `${localBase}/paragraph-8-9.avif`,
      r2: `${imageBase}/paragraph-8-9.avif`,
      imageAlt: "Marcel escaping through the crowded café with the White Star.",
      mediaPosition: "bottom",
    },
    {
      id: "paragraph-10",
      questions: [
        {
          question: "What church does Marcel see?",
          options: [
            { option: "He sees the Sacré Coeur.", isCorrect: true },
            { option: "He sees Notre-Dame." },
            { option: "He sees the church at the Louvre." },
          ],
        },
        {
          question: "Where does he go next?",
          options: [
            { option: "He goes back to the café." },
            { option: "He takes the metro to his boat." },
            {
              option: "He walks back to Zaza’s house.",
              isCorrect: true,
            },
          ],
        },
      ],
      title: "Paragraph 10",
      timestamp: "5:58",
      text: `After ten minutes he stops. There is nobody following him, but... where is he? Marcel looks right and left. Then he sees a big, white church. “Ah! — the Sacré Coeur,” he thinks. “Now I know where I am.” It is late and there are no metro trains, but Marcel is not tired. He walks back to Zaza's house. When he gets there, she is asleep in bed.`,
      localMedia: `${localBase}/paragraph-10.avif`,
      r2: `${imageBase}/paragraph-10.avif`,
      imageAlt: "Marcel entering Zaza's bedroom while she sleeps.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-11",
      questions: [
        {
          question: "What does Marcel try to remove?",
          options: [
            { option: "He tries to remove a photograph from the table." },
            {
              option: "He tries to remove the White Star from his neck.",
              isCorrect: true,
            },
            {
              option: "He tries to remove a perfume bottle from the table.",
            },
          ],
        },
        {
          question: "Why does he have a problem?",
          options: [
            { option: "The ring will not come off.", isCorrect: true },
            { option: "The soap is too wet." },
            { option: "Zaza wakes up and sees him." },
          ],
        },
      ],
      title: "Paragraph 11",
      timestamp: "6:39",
      text: `There is a table next to the window. On it, Marcel can see lots of photographs, boxes, and perfume bottles. He runs across the floor and up one leg of the table. “Now...” he thinks, “...it's time to take off the White Star. In the morning Zaza is going to be very...” Then Marcel stops. Oh, no! He can't take the ring off. He pulls and pulls, but nothing happens.`,
      localMedia: `${localBase}/paragraph-11.avif`,
      r2: `${imageBase}/paragraph-11.avif`,
      imageAlt: "Marcel on Zaza's dressing table trying to remove the ring.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-12",
      questions: [
        {
          question: "What does Marcel use to remove the ring?",
          options: [
            { option: "He uses some water from the bathroom." },
            { option: "He uses a perfume bottle." },
            { option: "He uses some soap.", isCorrect: true },
          ],
        },
        {
          question: "Does it work?",
          options: [
            { option: "Yes, it does.", isCorrect: true },
            { option: "No, it does not." },
          ],
        },
      ],
      title: "Paragraph 12",
      timestamp: "7:20",
      text: `“Now what?” he thinks. Then... “Of course! Some soap!” He runs down the table leg and across the floor. Zaza's bathroom door is open. Marcel goes in and looks up. A soap dish is above his head. Ten seconds later he is sitting in it. He puts some soap on his neck. Then he closes his eyes and pulls again. Yes! This time the diamond ring comes off!`,
      localMedia: `${localBase}/paragraph-12.avif`,
      r2: `${imageBase}/paragraph-12.avif`,
      imageAlt: "Marcel using soap to remove the diamond ring.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-13",
      questions: [
        {
          question: "Where does Zaza find the White Star?",
          options: [
            {
              option:
                "She finds it on her bedroom table between two perfume bottles.",
              isCorrect: true,
            },
            { option: "She finds it in her bathroom near the soap." },
            { option: "She finds it in the pocket of her green dress." },
          ],
        },
        {
          question: "What does Zaza do after she finds the White Star?",
          options: [
            { option: "She telephones the police.", isCorrect: true },
            { option: "She goes to the café to look for the thieves." },
            { option: "She puts the ring back on the table." },
          ],
        },
      ],
      title: "Paragraph 13",
      timestamp: "8:02",
      text: `In the morning Zaza finds the White Star. It is on her bedroom table between two perfume bottles. “But... I don't understand,” she says. “Thieves don't bring things back. How...?” She looks at the ring. Then she looks at her face in the mirror. Then she looks at the ring again. “And why is there soap on it?” She telephones the police.`,
      localMedia: `${localBase}/paragraph-13.avif`,
      r2: `${imageBase}/paragraph-13.avif`,
      imageAlt: "Zaza finding the White Star on her bedroom table.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-14",
      questions: [
        {
          question: "What do the newspapers say?",
          options: [
            {
              option: "They say that Zaza has lost her ring at the opera.",
            },
            {
              option:
                "They say that the ring is safe and the thieves have brought it back.",
              isCorrect: true,
            },
            {
              option: "They say that the police have found the two thieves.",
            },
          ],
        },
        {
          question: "How does Zaza look in the photos?",
          options: [
            { option: "She looks very tired." },
            { option: "She looks angry and afraid." },
            { option: "She looks very happy.", isCorrect: true },
          ],
        },
      ],
      title: "Paragraph 14",
      timestamp: "8:38",
      text: `Next day, Zaza's story is in all the newspapers. “Opera star's £1,000,000 ring is safe” says one. “Thieves bring back Dupont diamond” says another. “Now police ask, ‘Why?’” And there are lots of photos of Zaza with the White Star. At home. At the opera house. Standing in front of the Eiffel Tower. She looks very happy in all of them.`,
    },
    {
      id: "paragraph-15",
      questions: [
        {
          question: "What is on Marcel’s neck?",
          options: [
            {
              option: "There is a thin red line on his neck.",
              isCorrect: true,
            },
            { option: "There is some soap on his neck." },
            { option: "There is a diamond ring on his neck." },
          ],
        },
        {
          question: "What does he wonder about?",
          options: [
            { option: "He wonders where the thieves are now." },
            {
              option: "He wonders what is going to happen that day.",
              isCorrect: true,
            },
            { option: "He wonders who has his newspaper." },
          ],
        },
      ],
      title: "Paragraph 15",
      timestamp: "9:13",
      text: `Marcel is happy, too. Back on his boat, he reads the newspaper stories. Then he looks in the mirror. There is a thin, red line on his neck. “What a night!” he says. After that, he washes, has breakfast and opens the window. It is a beautiful, warm morning. Marcel looks up at the blue sky and smiles. “Now...” he thinks, “what's going to happen today?”`,
      localMedia: `${localBase}/paragraph-14-15.avif`,
      r2: `${imageBase}/paragraph-14-15.avif`,
      imageAlt: "Marcel relaxing on his boat after returning the White Star.",
      mediaPosition: "bottom",
    },
    {
      id: "retell-the-story",
      title: "Retell the Story",
      retell: {
        cards: [
          {
            img: `${imageBase}/paragraph-1.avif`,
            alt: "Marcel leaving his home on an old boat in Paris.",
            summary:
              "Marcel is a French mouse and he lives on an old boat in Paris.",
          },
          {
            img: `${imageBase}/paragraph-2.avif`,
            alt: "Two suspicious men reading a magazine at the Louvre station.",
            summary:
              "At the metro station, Marcel hears two men talking about Zaza’s diamond ring.",
          },
          {
            img: `${imageBase}/paragraph-3.avif`,
            alt: "Zaza Dupont wearing the White Star at the opera.",
            summary:
              "Marcel remembers the White Star and follows the two men onto the train.",
          },
          {
            img: `${imageBase}/paragraph-4.avif`,
            alt: "Marcel looking through the window while Zaza calls the police.",
            summary:
              "Marcel loses the men, and Zaza is already telephoning the police.",
          },
          {
            img: `${imageBase}/paragraph-5.avif`,
            alt: "The thieves escaping in a black car.",
            summary:
              "Marcel sees the thieves stealing a car and jumps onto its number-plate.",
          },
          {
            img: `${imageBase}/paragraph-6.avif`,
            alt: "The thieves arriving at a Paris café.",
            summary:
              "Marcel rides on the number-plate until the car stops next to a café.",
          },
          {
            img: `${imageBase}/paragraph-7.avif`,
            alt: "The thieves showing the White Star to a woman in the café.",
            summary:
              "In the café, the thieves show the White Star to a woman.",
          },
          {
            img: `${imageBase}/paragraph-8-9.avif`,
            alt: "Marcel escaping through the crowded café with the White Star.",
            summary:
              "Marcel bites the man’s leg, takes the White Star and runs out of the café.",
          },
          {
            img: `${imageBase}/paragraph-10.avif`,
            alt: "Marcel entering Zaza's bedroom while she sleeps.",
            summary:
              "Marcel sees the Sacré Coeur and walks back to Zaza’s house.",
          },
          {
            img: `${imageBase}/paragraph-11.avif`,
            alt: "Marcel on Zaza's dressing table trying to remove the ring.",
            summary:
              "Marcel climbs onto Zaza’s table, but he cannot take the ring off.",
          },
          {
            img: `${imageBase}/paragraph-12.avif`,
            alt: "Marcel using soap to remove the diamond ring.",
            summary:
              "Marcel uses soap, and the diamond ring comes off his neck.",
          },
          {
            img: `${imageBase}/paragraph-13.avif`,
            alt: "Zaza finding the White Star on her bedroom table.",
            summary:
              "In the morning, Zaza finds the White Star and telephones the police.",
          },
          {
            img: `${imageBase}/paragraph-14-15.avif`,
            alt: "Marcel relaxing on his boat after returning the White Star.",
            summary:
              "The newspapers say the ring is safe, and Marcel reads the story on his boat.",
          },
        ],
      },
    },
  ] satisfies AudiobookSection[],
};
