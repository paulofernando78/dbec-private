import type { AudiobookSection } from "./a-new-zealand-adventure";

const imageBase =
  "/media/images/skills/listening/audiobooks/starter/marcel-and-the-mona-lisa";
const localBase =
  "local-media/images/skills/listening/audiobooks/starter/marcel-and-the-mona-lisa";

export const marcelAndTheMonaLisa = {
  slug: "marcel-and-the-mona-lisa",
  title: "Marcel and the Mona Lisa",
  audio: "",
  sections: [
    {
      id: "summary",
      title: "Summary",
      text: "Marcel is a French mouse, and a detective. One evening, at the Louvre museum, he sees a man steal a famous painting — the Mona Lisa. Marcel follows the thief to Venice and risks his life to get the painting back again.",
      localMedia: `${localBase}/cover.avif`,
      r2: `${imageBase}/cover.avif`,
      imageAlt: "Cover of Marcel and the Mona Lisa.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-1",
      title: "Paragraph 1",
      text: `Marcel is a French mouse, and a detective. He has lots of friends in Paris. One of them is Céline. She paints pictures and is very beautiful. Céline's home is at the Louvre. Marcel often goes there for dinner. One evening in May he arrives with some pink flowers. There is a guard at the door. 'I don't know him,' Marcel thinks. 'He must be new.' Then he walks inside.`,
      questions: [
        {
          question: "Where does Céline live?",
          options: [
            { option: "She lives in New York." },
            { option: "She lives at the Louvre.", isCorrect: true },
            { option: "She lives in a small village in Italy." },
          ],
        },
        {
          question: "Why does Marcel think the guard is new?",
          options: [
            {
              option: "He thinks the guard is new because he does not know him.",
              isCorrect: true,
            },
            {
              option:
                "He thinks the guard is new because Céline tells him about a new guard.",
            },
          ],
        },
      ],
      localMedia: `${localBase}/paragraph-1.avif`,
      r2: `${imageBase}/paragraph-1.avif`,
      imageAlt: "Marcel arriving at the Louvre with flowers.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-2",
      title: "Paragraph 2",
      text: `The two friends eat, drink and talk all evening. Céline shows Marcel her new paintings. They talk about their summer holiday in New York. They laugh, play jazz records and tell lots of stories. Then at 11 o'clock Marcel puts on his coat. 'It's late,' he says. 'I must go home.' Two minutes later he leaves. 'Good night,' says Céline. Then she closes her front door.`,
      questions: [
        {
          question: "What do Marcel and Céline talk about?",
          options: [
            { option: "They talk about a train journey to Italy." },
            { option: "They talk about the cats in Céline’s house." },
            {
              option: "They talk about their summer holiday in New York.",
              isCorrect: true,
            },
          ],
        },
        {
          question: "What time does Marcel leave?",
          options: [
            { option: "He leaves at nine o’clock." },
            { option: "He leaves at eleven o’clock.", isCorrect: true },
            { option: "He leaves at midnight." },
          ],
        },
      ],
      localMedia: `${localBase}/paragraph-2.avif`,
      r2: `${imageBase}/paragraph-2.avif`,
      imageAlt: "Marcel and Céline talking in her home at the Louvre.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-3",
      title: "Paragraph 3",
      text: `Marcel walks across the floor. He is very happy. Then he stops. The room is dark, but he can see something. What is it? A man? A man with a long knife? Yes! Suddenly Marcel's mouth is very dry. He runs to the wall. Then, after five seconds he looks again. This time he can see the man's face. 'It's that new guard,' he thinks. 'And he's... he's stealing the Mona Lisa!'`,
      questions: [
        {
          question: "What does Marcel see in the dark room?",
          options: [
            { option: "He sees a cat near the wall." },
            { option: "He sees a man with a long knife.", isCorrect: true },
            { option: "He sees a black bag on the table." },
          ],
        },
        {
          question: "What is the man stealing?",
          options: [
            { option: "He is stealing the Mona Lisa.", isCorrect: true },
            { option: "He is stealing a newspaper." },
            { option: "He is stealing some flowers." },
          ],
        },
      ],
      localMedia: `${localBase}/paragraph-3.avif`,
      r2: `${imageBase}/paragraph-3.avif`,
      imageAlt: "Marcel watching the guard steal the Mona Lisa.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-4",
      title: "Paragraph 4",
      text: `Next to the thief there is a black bag. Two minutes later the Mona Lisa is inside it. The thief smiles and picks up the bag. But a second later he puts it down again. 'Car keys,' he says, and begins to look in all his pockets. 'All right — this is it,' Marcel thinks. 'It's now or never.' He runs along the wall very fast, climbs up the tall, black bag, and jumps inside it.`,
      questions: [
        {
          question: "What does the thief put the painting into?",
          options: [
            { option: "He puts the painting into a car." },
            { option: "He puts the painting into a black bag.", isCorrect: true },
            { option: "He puts the painting into his coat." },
          ],
        },
        {
          question: "Why does the thief put the bag down again?",
          options: [
            {
              option: "He puts the bag down because he needs his car keys.",
              isCorrect: true,
            },
            {
              option: "He puts the bag down because the bag is very heavy.",
            },
            { option: "He puts the bag down because he sees Marcel." },
          ],
        },
      ],
      localMedia: `${localBase}/paragraph-4.avif`,
      r2: `${imageBase}/paragraph-4.avif`,
      imageAlt: "The thief putting the painting into a black bag.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-5",
      title: "Paragraph 5",
      text: `At the bottom of the bag Marcel can see a face. The Mona Lisa's face. She is smiling at him. 'Now what?' he asks her. There is no answer, but at that moment the bag starts to move. Marcel can hear lots of noises: a motor starts — traffic goes by — a radio plays. Then the bag suddenly stops. Marcel climbs the painting and looks out. 'A railway station!'`,
      questions: [
        {
          question: "Whose face does Marcel see at the bottom of the bag?",
          options: [
            { option: "He sees Céline’s face." },
            { option: "He sees the new guard’s face." },
            { option: "He sees the Mona Lisa’s face.", isCorrect: true },
          ],
        },
        {
          question: "Where does the bag stop?",
          options: [
            { option: "The bag stops at the Louvre." },
            { option: "The bag stops at a railway station.", isCorrect: true },
            { option: "The bag stops in a quiet street." },
          ],
        },
      ],
      localMedia: `${localBase}/paragraph-5.avif`,
      r2: `${imageBase}/paragraph-5.avif`,
      imageAlt: "Marcel hidden in the bag with the Mona Lisa.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-6",
      title: "Paragraph 6",
      text: `Five minutes later the Louvre 'guard' gets on a train. He sits next to a thin man in sunglasses and a white jacket. 'Have you got it, Antoine?' the thin man asks. 'Yes,' the guard answers. After that the train starts and there is a lot of noise. 'Oh no! Now I can't hear them,' Marcel thinks. But he can hear one or two words. 'Italy', for example, and 'all those cats'. Then he goes to sleep and has a very bad dream.`,
      questions: [
        {
          question: "Who does the guard sit next to on the train?",
          options: [
            { option: "He sits next to an old woman." },
            {
              option:
                "He sits next to a thin man in sunglasses and a white jacket.",
              isCorrect: true,
            },
            { option: "He sits next to a policeman." },
          ],
        },
        {
          question: "Which words does Marcel hear?",
          options: [
            {
              option: "He hears the words “Italy” and “all those cats”.",
              isCorrect: true,
            },
            { option: "He hears the words “Venice” and “Rome”." },
            { option: "He hears the words “Paris” and “New York”." },
          ],
        },
      ],
      localMedia: `${localBase}/paragraph-6.avif`,
      r2: `${imageBase}/paragraph-6.avif`,
      imageAlt: "The two thieves talking on the train.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-7",
      title: "Paragraph 7",
      text: `'Cats!' Marcel looks at the Mona Lisa. His eyes are two big saucers. 'But cats kill mice,' he thinks. 'They eat them. And where are we going in Italy? Rome? Milan? Naples? ...' But at that moment Antoine puts the bag under the seat. 'Now I really can't hear,' Marcel thinks.`,
      questions: [
        {
          question: "Why is Marcel afraid of cats?",
          options: [
            {
              option: "He is afraid of cats because they kill and eat mice.",
              isCorrect: true,
            },
            { option: "He is afraid of cats because they are very big." },
            {
              option: "He is afraid of cats because they make a lot of noise.",
            },
          ],
        },
        {
          question: "Why can't Marcel hear any more?",
          options: [
            { option: "He cannot hear any more because he goes to sleep." },
            {
              option: "He cannot hear any more because the Mona Lisa is talking.",
            },
            {
              option:
                "He cannot hear any more because Antoine puts the bag under the seat.",
              isCorrect: true,
            },
          ],
        },
      ],
      localMedia: `${localBase}/paragraph-7.avif`,
      r2: `${imageBase}/paragraph-7.avif`,
      imageAlt: "Marcel looking worried at the Mona Lisa.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-8",
      title: "Paragraph 8",
      text: `Early next morning the sun is shining. Marcel opens his eyes and sees the Mona Lisa. Then he remembers where he is. He runs up the painting and looks at Antoine and Henri. 'Good,' he thinks. 'They're asleep.' Ten seconds later, Marcel is standing at the window. He can see a small village and some mountains. Then a sign goes by: a hundred and eighty kilometres to Venice!`,
      questions: [
        {
          question: "Where are Antoine and Henri going?",
          options: [
            { option: "They are going to Rome." },
            { option: "They are going to Venice.", isCorrect: true },
            { option: "They are going to Paris." },
          ],
        },
        {
          question: "How far is it to Venice?",
          options: [
            { option: "It is eighty kilometres to Venice." },
            {
              option: "It is a hundred and eighty kilometres to Venice.",
              isCorrect: true,
            },
            { option: "It is three hundred kilometres to Venice." },
          ],
        },
      ],
      localMedia: `${localBase}/paragraph-8.avif`,
      r2: `${imageBase}/paragraph-8.avif`,
      imageAlt: "Marcel looking out of the train window.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-9",
      title: "Paragraph 9",
      text: `Two hours later Antoine and Henri are on a gondola. 'Look,' says Antoine and laughs. He shows Henri a newspaper story. It says, 'THIEVES TAKE DA VINCI PAINTING.' Henri says, 'Be quiet!' and turns to the boatman. 'Do you see that big palace on the left?' 'Signor Spandini's house?' 'Yes. Stop there.' Inside the bag Marcel hears every word.`,
      questions: [
        {
          question: "What does the newspaper story say?",
          options: [
            {
              option: "It says that the police find the Mona Lisa.",
            },
            {
              option: "It says that thieves take a Da Vinci painting.",
              isCorrect: true,
            },
            { option: "It says that the Louvre is closed." },
          ],
        },
        {
          question: "Where do the thieves stop?",
          options: [
            { option: "They stop at Signor Spandini’s house.", isCorrect: true },
            { option: "They stop at a railway station." },
            { option: "They stop at the Louvre." },
          ],
        },
      ],
      localMedia: `${localBase}/paragraph-9.avif`,
      r2: `${imageBase}/paragraph-9.avif`,
      imageAlt: "The thieves in a gondola in Venice.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-10",
      title: "Paragraph 10",
      text: `An old woman answers the front door. 'Come in,' she says to the two thieves. 'Signor Spandini is waiting for you.' She takes them to a big, dark room. A fat man is sitting behind a desk. 'Have you got it?' he asks. 'Yes, Boss,' Henri answers. The bag is beside him. 'I can't stay in here,' Marcel thinks. He jumps out of the bag and hides behind a chair.`,
      questions: [
        {
          question: "Who opens the front door?",
          options: [
            { option: "Signor Spandini opens the front door." },
            { option: "A policeman opens the front door." },
            { option: "An old woman opens the front door.", isCorrect: true },
          ],
        },
        {
          question: "Where does Marcel hide?",
          options: [
            { option: "He hides behind a chair.", isCorrect: true },
            { option: "He hides under the desk." },
            { option: "He hides in the black bag." },
          ],
        },
      ],
      localMedia: `${localBase}/paragraph-10.avif`,
      r2: `${imageBase}/paragraph-10.avif`,
      imageAlt: "The thieves meeting Signor Spandini.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-11",
      title: "Paragraph 11",
      text: `'Good,' he thinks. 'Now I can...' But then he goes cold. 'Cats!' There are seven, eight — no nine of them in the room. Suddenly Marcel remembers Henri's words — 'all those cats.' Then he remembers his dream on the train. What can he do? Where can he go? But it is too late. One of the cats sees him. 'Help!' Marcel thinks and climbs up a red curtain.`,
      questions: [
        {
          question: "How many cats are in the room?",
          options: [
            { option: "There are seven cats in the room." },
            { option: "There are eight cats in the room." },
            { option: "There are nine cats in the room.", isCorrect: true },
          ],
        },
        {
          question: "Where does Marcel climb?",
          options: [
            { option: "He climbs up a window." },
            { option: "He climbs up a red curtain.", isCorrect: true },
            { option: "He climbs up a tall black bag." },
          ],
        },
      ],
      localMedia: `${localBase}/paragraph-11.avif`,
      r2: `${imageBase}/paragraph-11.avif`,
      imageAlt: "Marcel climbing a red curtain away from the cats.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-12",
      title: "Paragraph 12",
      text: `A moment later the cat starts climbing, too. Marcel can hear it below him. He has to do something — and fast! But what? Then he sees two candles above his head. 'That's the answer,' he thinks. He jumps onto the bookcase and starts to push the candles over. They are very heavy, but in the end he does it. Below him he hears, 'Yeeooowwwww!'`,
      questions: [
        {
          question: "What does Marcel push over?",
          options: [
            { option: "He pushes a chair over." },
            { option: "He pushes the Mona Lisa over." },
            { option: "He pushes two candles over.", isCorrect: true },
          ],
        },
        {
          question: "What does Marcel hear below him?",
          options: [
            { option: "He hears the cat cry out loudly.", isCorrect: true },
            { option: "He hears the thieves singing." },
            { option: "He hears a radio playing jazz." },
          ],
        },
      ],
      localMedia: `${localBase}/paragraph-12.avif`,
      r2: `${imageBase}/paragraph-12.avif`,
      imageAlt: "Marcel pushing the candles off the bookcase.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-13",
      title: "Paragraph 13",
      text: `'What's all that noise?' asks Antoine. 'Look! The carpet's on fire!' says Henri. Spandini stands up. 'Angelina! Quick, bring some water.' Marcel looks over the bookcase. He can see the Mona Lisa on Spandini's desk. 'OK,' he thinks. 'This is it.' After that he runs down the curtain, across Spandini's desk, picks up the Mona Lisa, and runs out of the room.`,
      questions: [
        {
          question: "Who tells Angelina to bring water?",
          options: [
            { option: "Henri tells Angelina to bring water." },
            { option: "Spandini tells Angelina to bring water.", isCorrect: true },
            { option: "Antoine tells Angelina to bring water." },
          ],
        },
        {
          question: "What does Marcel do with the painting?",
          options: [
            {
              option: "He picks it up and runs out of the room.",
              isCorrect: true,
            },
            { option: "He puts it back on Spandini’s desk." },
            { option: "He hides it behind a chair." },
          ],
        },
      ],
      localMedia: `${localBase}/paragraph-13.avif`,
      r2: `${imageBase}/paragraph-13.avif`,
      imageAlt: "The carpet on fire while Marcel takes the painting.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-14",
      title: "Paragraph 14",
      text: `Marcel runs for a long time. He thinks, 'I want to leave the Mona Lisa somewhere safe. But where?' Then, after twenty minutes, he stops in a quiet street. In front of him there is a police station. The front door has a letter-box. 'Of course!' Marcel thinks. 'That's it.' He stands up tall. Then he pushes the Mona Lisa through the letter-box.`,
      questions: [
        {
          question: "Where does Marcel leave the painting?",
          options: [
            { option: "He leaves it on a train." },
            { option: "He leaves it in Signor Spandini’s house." },
            {
              option: "He leaves it in the letter-box of a police station.",
              isCorrect: true,
            },
          ],
        },
        {
          question: "Why does he choose that place?",
          options: [
            {
              option:
                "He chooses it because he wants to leave the painting somewhere safe.",
              isCorrect: true,
            },
            {
              option: "He chooses it because the police are looking for him.",
            },
            { option: "He chooses it because Céline lives there." },
          ],
        },
      ],
      localMedia: `${localBase}/paragraph-14.avif`,
      r2: `${imageBase}/paragraph-14.avif`,
      imageAlt: "Marcel pushing the painting through a letter-box.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-15",
      title: "Paragraph 15",
      text: `Two days later Marcel is in Paris again. At the station he sees a newspaper. It says, 'ITALIAN POLICE FIND THE MONA LISA'. Then he goes to the Louvre and tells Céline everything. 'Nine cats!' she says. 'Oh Marcel, are you all right?' 'Yes, I'm fine,' Marcel answers. He goes to Céline's window. 'And the Mona Lisa's fine, too. Look, Céline. She's smiling.'`,
      questions: [
        {
          question: "What does the newspaper say?",
          options: [
            { option: "It says that thieves take a Da Vinci painting." },
            {
              option: "It says that the Italian police find the Mona Lisa.",
              isCorrect: true,
            },
            { option: "It says that Marcel is a detective." },
          ],
        },
        {
          question: "How does Céline react?",
          options: [
            { option: "She is angry and tells Marcel to leave." },
            { option: "She laughs and says the cats are friendly." },
            {
              option:
                "She is surprised and asks if Marcel is all right.",
              isCorrect: true,
            },
          ],
        },
      ],
      localMedia: `${localBase}/paragraph-15.avif`,
      r2: `${imageBase}/paragraph-15.avif`,
      imageAlt: "Marcel back in Paris telling Céline the story.",
      mediaPosition: "left",
    },
    {
      id: "retell-the-story",
      title: "Retell the Story",
      retell: {
        cards: [
          {
            img: `${imageBase}/paragraph-1.avif`,
            alt: "Marcel arriving at the Louvre with flowers.",
            summary:
              "Marcel goes to Céline’s home at the Louvre and sees a new guard.",
          },
          {
            img: `${imageBase}/paragraph-2.avif`,
            alt: "Marcel and Céline talking in her home at the Louvre.",
            summary:
              "Marcel and Céline eat, drink and talk, and then Marcel goes home.",
          },
          {
            img: `${imageBase}/paragraph-3.avif`,
            alt: "Marcel watching the guard steal the Mona Lisa.",
            summary:
              "Marcel sees the new guard stealing the Mona Lisa.",
          },
          {
            img: `${imageBase}/paragraph-4.avif`,
            alt: "The thief putting the painting into a black bag.",
            summary:
              "The thief puts the Mona Lisa in a black bag, and Marcel jumps in.",
          },
          {
            img: `${imageBase}/paragraph-5.avif`,
            alt: "Marcel hidden in the bag with the Mona Lisa.",
            summary:
              "Marcel is inside the bag when it stops at a railway station.",
          },
          {
            img: `${imageBase}/paragraph-6.avif`,
            alt: "The two thieves talking on the train.",
            summary:
              "The guard gets on a train and sits next to another thief.",
          },
          {
            img: `${imageBase}/paragraph-7.avif`,
            alt: "Marcel looking worried at the Mona Lisa.",
            summary: "Marcel is very afraid of cats on the train.",
          },
          {
            img: `${imageBase}/paragraph-8.avif`,
            alt: "Marcel looking out of the train window.",
            summary:
              "Marcel looks out of the window and sees a sign for Venice.",
          },
          {
            img: `${imageBase}/paragraph-9.avif`,
            alt: "The thieves in a gondola in Venice.",
            summary:
              "In Venice the thieves take a gondola to Signor Spandini’s house.",
          },
          {
            img: `${imageBase}/paragraph-10.avif`,
            alt: "The thieves meeting Signor Spandini.",
            summary:
              "Marcel jumps out of the bag and hides behind a chair.",
          },
          {
            img: `${imageBase}/paragraph-11.avif`,
            alt: "Marcel climbing a red curtain away from the cats.",
            summary:
              "One of the nine cats sees Marcel, so he climbs a red curtain.",
          },
          {
            img: `${imageBase}/paragraph-12.avif`,
            alt: "Marcel pushing the candles off the bookcase.",
            summary:
              "Marcel jumps onto a bookcase and pushes two heavy candles over.",
          },
          {
            img: `${imageBase}/paragraph-13.avif`,
            alt: "The carpet on fire while Marcel takes the painting.",
            summary:
              "The carpet catches fire, and Marcel runs out with the painting.",
          },
          {
            img: `${imageBase}/paragraph-14.avif`,
            alt: "Marcel pushing the painting through a letter-box.",
            summary:
              "Marcel pushes the Mona Lisa through the letter-box of a police station.",
          },
          {
            img: `${imageBase}/paragraph-15.avif`,
            alt: "Marcel back in Paris telling Céline the story.",
            summary:
              "In Paris Marcel tells Céline the story, and the Mona Lisa is safe.",
          },
        ],
      },
    },
  ] satisfies AudiobookSection[],
};
