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
  text?: string | readonly AudiobookBlock[];
  questions?: readonly (string | AudiobookQuestion)[];
  answers?: readonly string[];
  retell?: AudiobookRetell;
  mediaPosition?: "left" | "right" | "top" | "bottom";
  localAudio?: string;
  r2Audio?: string;
};

const imageBase =
  "/media/images/skills/listening/audiobooks/starter/the-white-oryx";

export const theWhiteOryx = {
  slug: "the-white-oryx",
  title: "The White Oryx",
  audio: "",
  sections: [
    {
      id: "summary",
      title: "Summary",
      text: "Mandy Brown is in the desert with Abdullah, an oryx ranger. But there are poachers in the desert too - and a mother oryx is dead. Can Mandy and Abdullah catch the poachers? And can they find the dead oryx’s baby?", //[span_0](start_span)[span_0](end_span)
      localMedia: `local-media/images/skills/listening/audiobooks/starter/the-white-oryx/cover.avif`,
      r2: `${imageBase}/cover.avif`,
      imageAlt: "Cover of The White Oryx.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-1",
      title: "Paragraph 1",
      questions: [
        {
          question: "Who is taking photographs of the oryx?",
          options: [
            { option: "Abdullah is taking photographs of the oryx." },
            {
              option: "Mandy Brown is taking photographs of the oryx.",
              isCorrect: true,
            },
            { option: "The police are taking photographs of the oryx." },
          ],
        },
        {
          question: "What is Abdullah's job?",
          options: [
            { option: "He is an oryx ranger.", isCorrect: true },
            { option: "He is a taxi driver." },
            { option: "He is a policeman." },
          ],
        },
      ],
      text: `‘There! Near the trees. Can you see them? They’re the white oryx of Arabia,’ Abdullah says very quietly. Mandy Brown takes some photos of the oryx. She is writing a book about the animals of Arabia. Today she is in the desert with Abdullah. He is an oryx ranger. ‘They’re beautiful animals,’ Mandy says. ‘But the desert is very big. How do you find them?’`, //[span_1](start_span)[span_1](end_span)
      localMedia: `local-media/images/skills/listening/audiobooks/starter/the-white-oryx/paragraph-1.avif`,
      r2: `${imageBase}/paragraph-1.avif`,
      imageAlt: "Abdullah and Mandy in the desert looking toward trees.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-2",
      title: "Paragraph 2",
      questions: [
        {
          question: "How do the rangers find the oryx?",
          options: [
            { option: "They follow the tracks of the oryx in the sand." },
            { option: "They look for the oryx from a helicopter." },
            {
              option: "They put little radios on the oryx.",
              isCorrect: true,
            },
          ],
        },
        {
          question: "Where might there be poachers?",
          options: [
            { option: "There might be poachers near the trees." },
            {
              option: "There might be poachers in Wadi Bidbid.",
              isCorrect: true,
            },
            { option: "There might be poachers near the airport." },
          ],
        },
      ],
      text: `‘We put little radios on the oryx,’ Abdullah says. "You can see one there, on its neck. With the radios we can usually find them.’ Suddenly there is a noise behind them. It is the big radio in the car. The oryx look up and run away quickly. ‘Abdullah!’ the radio says. ‘Can you hear me? There’s a problem in Wadi Bidbid. Perhaps poachers.’`, //[span_2](start_span)[span_2](end_span)
      localMedia: `local-media/images/skills/listening/audiobooks/starter/the-white-oryx/paragraph-2.avif`,
      r2: `${imageBase}/paragraph-2.avif`,
      imageAlt:
        "Abdullah talking on the radio next to the car while Mandy watches.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-3",
      title: "Paragraph 3",
      questions: [
        {
          question: "Who goes with Abdullah to Wadi Bidbid?",
          options: [
            { option: "The Australian woman goes with him.", isCorrect: true },
            { option: "The police go with him." },
            { option: "Nobody goes with him." },
          ],
        },
        {
          question: "How do they travel there?",
          options: [
            { option: "They walk across the desert." },
            { option: "They fly in a helicopter." },
            {
              option: "They drive across the desert in the car.",
              isCorrect: true,
            },
          ],
        },
      ],
      text: `‘I’m very near there,’ Abdullah says. ‘I can go there, but I’ve got the Australian woman with me.’ ‘That’s OK,’ Mandy says. ‘I can come with you. Perhaps I can help you.’ ‘OK,’ Abdullah says. ‘Let’s go.’ Mandy gets into the car and they drive away quickly across the desert.`, //[span_3](start_span)[span_3](end_span)
      localMedia: `local-media/images/skills/listening/audiobooks/starter/the-white-oryx/paragraph-3.avif`,
      r2: `${imageBase}/paragraph-3.avif`,
      imageAlt: "The car driving fast across the desert.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-4",
      title: "Paragraph 4",
      questions: [
        {
          question: "What do the poachers do to the oryx?",
          options: [
            { option: "They take photographs of the oryx." },
            {
              option: "They shoot the oryx and sell the heads.",
              isCorrect: true,
            },
            { option: "They put radios on the oryx." },
          ],
        },
        {
          question: "What does Abdullah look for in the sand?",
          options: [
            { option: "He looks for tracks in the sand.", isCorrect: true },
            { option: "He looks for water in the sand." },
            { option: "He looks for trees in the sand." },
          ],
        },
      ],
      text: `The sand makes a long yellow cloud behind the car. ‘Poachers?’ Mandy asks. ‘What do they do?’ ‘They’re a big problem,’ Abdullah says. ‘Usually they shoot the oryx. They sell the heads. And sometimes they catch the young oryx and sell them.’ ‘There’s Wadi Bidbid in front of us,’ Abdullah says. ‘I can’t see any oryx. Let’s look for tracks in the sand.’`, //[span_4](start_span)[span_4](end_span)
      localMedia: `local-media/images/skills/listening/audiobooks/starter/the-white-oryx/paragraph-4.avif`,
      r2: `${imageBase}/paragraph-4.avif`,
      imageAlt: "The car in the desert with tracks and blood in the sand.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-5",
      title: "Paragraph 5",
      questions: [
        {
          question: "What tracks do Mandy and Abdullah find?",
          options: [
            { option: "They find the tracks of a helicopter." },
            { option: "They find the tracks of a camel." },
            {
              option: "They find the tracks of a truck and some oryx.",
              isCorrect: true,
            },
          ],
        },
        {
          question: "What else do they find in the sand?",
          options: [
            { option: "They find some blood in the sand.", isCorrect: true },
            { option: "They find a gun in the sand." },
          ],
        },
      ],
      text: `They open the windows and drive slowly. ‘Look! There!’ Mandy says. ‘I can see tracks.’ ‘You’re right,’ Abdullah says. ‘There are the tracks of a truck, and some oryx. And look! There’s some blood in the sand here - and there. This is the work of poachers.’ They follow the tracks of the truck slowly across the sand.`, //[span_5](start_span)[span_5](end_span)
      localMedia: `local-media/images/skills/listening/audiobooks/starter/the-white-oryx/paragraph-5.avif`,
      r2: `${imageBase}/paragraph-5.avif`,
      imageAlt: "Mandy and Abdullah looking at a dead oryx under a tree.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-6",
      title: "Paragraph 6",
      questions: [
        {
          question: "What happened to the mother oryx?",
          options: [
            { option: "A truck hit her on the road." },
            { option: "Poachers shot her.", isCorrect: true },
            { option: "She died of old age under the tree." },
          ],
        },
        {
          question: "What is missing?",
          options: [
            { option: "Her young oryx is missing.", isCorrect: true },
            { option: "Her radio is missing." },
          ],
        },
      ],
      text: `Under the tree they find an oryx with a big hole in its neck. It is dead. ‘We’ve got a problem,’ Abdullah says. ‘Look! I can see the tracks of a young oryx here. This dead oryx is its mother. But the baby oryx isn’t here.’ ‘Can we follow the tracks of their truck in the sand?’ Mandy asks. ‘Can we catch them?’`, //[span_6](start_span)[span_6](end_span)
      localMedia: `local-media/images/skills/listening/audiobooks/starter/the-white-oryx/paragraph-6.avif`,
      r2: `${imageBase}/paragraph-6.avif`,
      imageAlt:
        "Mandy looking out the car window while Abdullah speaks on the radio.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-7",
      title: "Paragraph 7",
      questions: [
        {
          question: "Who is coming to help Mandy and Abdullah?",
          options: [
            { option: "The rangers in a car are coming to help." },
            { option: "The police in a truck are coming to help." },
            {
              option: "The police in a helicopter are coming to help.",
              isCorrect: true,
            },
          ],
        },
        {
          question: "What are they following?",
          options: [
            {
              option: "They are following the tracks of the poachers’ truck.",
              isCorrect: true,
            },
            { option: "They are following the police helicopter." },
            { option: "They are following the young oryx." },
          ],
        },
      ],
      text: `They drive quickly across the desert again. Mandy is watching the tracks. Abdullah is talking on the radio. ‘One mother oryx is dead,’ he says. ‘But the poachers have got her baby. We’re following them.’ Abdullah listens to the radio and smiles. ‘That’s good,’ he says to Mandy. ‘The police have a helicopter near here. They’re coming, too.’`, //[span_7](start_span)[span_7](end_span)
      localMedia: `local-media/images/skills/listening/audiobooks/starter/the-white-oryx/paragraph-7.avif`,
      r2: `${imageBase}/paragraph-7.avif`,
      imageAlt:
        "Mandy on top of the car pointing left while Abdullah checks the road.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-8",
      title: "Paragraph 8",
      questions: [
        {
          question: "Why can they no longer follow the truck tracks?",
          options: [
            { option: "The wind covers the tracks with sand." },
            {
              option: "They come to a road, so they can’t see the tracks.",
              isCorrect: true,
            },
            { option: "The police helicopter lands on the tracks." },
          ],
        },
        {
          question: "Why does Mandy tell Abdullah to turn left?",
          options: [
            { option: "She sees the police helicopter on the left." },
            { option: "She sees a road sign on the left." },
            {
              option:
                "She sees a cloud of sand from the poachers’ truck on the left.",
              isCorrect: true,
            },
          ],
        },
      ],
      text: `Suddenly they come to a road in the desert. Now they can’t see the tracks of the truck. ‘Left or right?’ Abdullah says. ‘What do you think?’ Mandy climbs quickly on the car. ‘Go to the left,’ she says. ‘I can see a small cloud of sand on the left. It’s the poachers!’ She climbs down and they follow the road to the left.`, //[span_8](start_span)[span_8](end_span)
      localMedia: `local-media/images/skills/listening/audiobooks/starter/the-white-oryx/paragraph-8.avif`,
      r2: `${imageBase}/paragraph-8.avif`,
      imageAlt:
        "Mandy and Abdullah reacting to a bullet hole in the car window.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-9",
      title: "Paragraph 9",
      questions: [
        {
          question: "What does Mandy see beside the truck?",
          options: [
            {
              option: "She sees a man with a gun beside the truck.",
              isCorrect: true,
            },
            { option: "She sees a policeman beside the truck." },
            { option: "She sees the young oryx beside the truck." },
          ],
        },
        {
          question: "What happens to their car window?",
          options: [
            { option: "The sand breaks the window." },
            {
              option: "A shot makes a hole in the window.",
              isCorrect: true,
            },
            { option: "The helicopter breaks the window." },
          ],
        },
      ],
      text: `Now they can see the cloud of sand behind the poachers. ‘We’re very near them now,’ Mandy says. ‘Look! They’re not moving. We can catch them. Oh no! There’s a man with a gun near the truck.’ Suddenly there is a loud noise in the car. ‘Get down!’ Abdullah says quickly. ‘They’re shooting at us. Look at the hole in the window.’`, //[span_9](start_span)[span_9](end_span)
      localMedia: `local-media/images/skills/listening/audiobooks/starter/the-white-oryx/paragraph-9.avif`,
      r2: `${imageBase}/paragraph-9.avif`,
      imageAlt:
        "The poachers' truck kicking up sand as Mandy and Abdullah take cover.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-10",
      title: "Paragraph 10",
      questions: [
        {
          question: "Where does Abdullah stop the car?",
          options: [
            { option: "He stops the car on the road." },
            { option: "He stops the car near the police helicopter." },
            {
              option: "He stops the car among some small trees.",
              isCorrect: true,
            },
          ],
        },
        {
          question: "What does Mandy see the poachers doing?",
          options: [
            {
              option: "She sees them driving back towards Mandy and Abdullah.",
              isCorrect: true,
            },
            { option: "She sees them driving away across the desert." },
            { option: "She sees them running into the trees." },
          ],
        },
      ],
      text: `Abdullah drives into some small trees and stops the car. He gets his gun and talks on the radio again. Mandy goes into the trees and looks at the road. ‘The poachers are moving again!’ she says. ‘They’re in the truck. And the man with the gun is on the back.’ ‘Are they driving away?’ Abdullah asks. ‘No!’ Mandy says. ‘Help! They’re coming back here!’`, //[span_10](start_span)[span_10](end_span)
      localMedia: `local-media/images/skills/listening/audiobooks/starter/the-white-oryx/paragraph-10.avif`,
      r2: `${imageBase}/paragraph-10.avif`,
      imageAlt:
        "A police helicopter hovering above the poachers' truck in the sand.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-11",
      title: "Paragraph 11",
      questions: [
        {
          question: "Why can Abdullah’s car not move?",
          options: [
            { option: "The poachers’ truck is in front of it." },
            { option: "It is stuck in the sand.", isCorrect: true },
            { option: "It has no petrol." },
          ],
        },
        {
          question: "What makes the poachers stop?",
          options: [
            { option: "The police shoot at their truck." },
            { option: "Mandy and Abdullah stand in front of the truck." },
            {
              option:
                "A police helicopter blows sand across the road, so they can’t see it.",
              isCorrect: true,
            },
          ],
        },
      ],
      text: `Abdullah starts the car again. But it is in the sand now and it doesn’t move. He goes in front of the car with his gun. Mandy goes behind the car. Suddenly there is a very loud noise and they see a helicopter in front of them. It makes a big cloud of sand and the poachers can’t see the road. The truck stops in the sand and two men run from it into the desert.`, //[span_11](start_span)[span_11](end_span)
      localMedia: `local-media/images/skills/listening/audiobooks/starter/the-white-oryx/paragraph-11.avif`,
      r2: `${imageBase}/paragraph-11.avif`,
      imageAlt:
        "The young oryx in the truck while police arrest the poachers outside.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-12",
      title: "Paragraph 12",
      questions: [
        {
          question: "Where is the young oryx?",
          options: [
            {
              option: "It is in the back of the truck.",
              isCorrect: true,
            },
            { option: "It is under a tree in the desert." },
            { option: "It is in the police helicopter." },
          ],
        },
        {
          question: "What do the poachers do when the police arrive?",
          options: [
            { option: "They run into the desert with their guns." },
            { option: "They drive away in their truck." },
            {
              option: "They put down their guns and put up their hands.",
              isCorrect: true,
            },
          ],
        },
      ],
      text: `The police helicopter comes down near the poachers. The poachers quickly put their guns on the sand and put up their hands. Abdullah and Mandy run to the truck. The young oryx is in the back of the truck. There is no blood, but it isn’t moving. ‘Is it dead?’ Mandy asks quietly.`, //[span_12](start_span)[span_12](end_span)
      localMedia: `local-media/images/skills/listening/audiobooks/starter/the-white-oryx/paragraph-12.avif`,
      r2: `${imageBase}/paragraph-12.avif`,
      imageAlt:
        "Abdullah checking the young oryx in the truck while Mandy takes photos.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-13",
      title: "Paragraph 13",
      questions: [
        {
          question: "Is the young oryx dead?",
          options: [
            { option: "Yes, it is dead in the back of the truck." },
            {
              option: "No, it opens its eyes and moves its legs.",
              isCorrect: true,
            },
          ],
        },
        {
          question: "How can it survive without its mother?",
          options: [
            {
              option: "The rangers can find it a new mother.",
              isCorrect: true,
            },
            { option: "Mandy can take it home to Australia." },
            { option: "The police can take it to the city." },
          ],
        },
      ],
      text: `Abdullah takes its head in his hands. The little oryx opens its eyes and moves its legs. ‘No, it’s OK.’ Abdullah smiles. ‘But its mother is dead,’ Mandy says. ‘Can it live?’ ‘Yes,’ Abdullah says. ‘It’s young, but it isn’t a baby. We can find it a new mother. No problem.’ ‘Wait,’ Mandy says suddenly. ‘I want some photos.’`, //[span_13](start_span)[span_13](end_span)
      localMedia: `local-media/images/skills/listening/audiobooks/starter/the-white-oryx/paragraph-13.avif`,
      r2: `${imageBase}/paragraph-13.avif`,
      imageAlt: "A policeman talking to Abdullah and Mandy by the young oryx.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-14",
      title: "Paragraph 14",
      questions: [
        {
          question: "What does Mandy photograph?",
          options: [
            { option: "She photographs only the young oryx." },
            { option: "She photographs the dead mother oryx." },
            {
              option:
                "She photographs the young oryx, Abdullah, the police, their helicopter and the poachers.",
              isCorrect: true,
            },
          ],
        },
        {
          question: "How many poachers do the police catch?",
          options: [
            { option: "The police catch one poacher." },
            { option: "The police catch two poachers.", isCorrect: true },
            { option: "The police catch three poachers." },
          ],
        },
      ],
      text: `Mandy takes photos of Abdullah and the young oryx. Then she takes photos of the police and their helicopter. She takes pictures of the poachers, too. A policeman comes and looks at the young oryx. ‘Not a bad day,’ the policeman says. ‘No,’ Abdullah says. ‘The mother oryx is dead, but this young oryx is OK. And you’ve got two poachers.’`, //[span_14](start_span)[span_14](end_span)
      localMedia: `local-media/images/skills/listening/audiobooks/starter/the-white-oryx/paragraph-14.avif`,
      r2: `${imageBase}/paragraph-14.avif`,
      imageAlt:
        "Abdullah holding the young oryx while talking with the policeman and Mandy.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-15",
      title: "Paragraph 15",
      questions: [
        {
          question: "Why is it a good day for Mandy?",
          options: [
            {
              option: "She has interesting photographs for her book.",
              isCorrect: true,
            },
            { option: "She has caught the poachers herself." },
            { option: "She has a new car for the desert." },
          ],
        },
        {
          question: "What new book does the policeman suggest?",
          options: [
            { option: "A book about the police helicopter." },
            { option: "A book about the trees of the desert." },
            {
              option: "A book about the oryx poachers and Abdullah.",
              isCorrect: true,
            },
          ],
        },
      ],
      text: `‘It’s a good day for me, too.’ Mandy smiles. ‘I’ve got some very interesting pictures for my book about the animals of the desert.’ ‘Perhaps you can write a new book,’ the policeman says. ‘A book about the oryx poachers and the famous ranger, Abdullah.’ ‘Why not?’ Mandy smiles again.`, //[span_15](start_span)[span_15](end_span)
      localMedia: `local-media/images/skills/listening/audiobooks/starter/the-white-oryx/paragraph-15.avif`,
      r2: `${imageBase}/paragraph-15.avif`,
      imageAlt: "Abdullah holding the young oryx with Mandy and the policeman.",
      mediaPosition: "left",
    },
    {
      id: "retell-the-story",
      title: "Retell the Story",
      retell: {
        cards: [
          {
            img: `${imageBase}/paragraph-1.avif`,
            alt: "Abdullah and Mandy in the desert looking toward trees.",
            summary: "Mandy takes photos of the white oryx in the desert.",
          },
          {
            img: `${imageBase}/paragraph-2.avif`,
            alt: "Abdullah talking on the radio next to the car while Mandy watches.",
            summary:
              "The radio in the car calls about poachers in Wadi Bidbid.",
          },
          {
            img: `${imageBase}/paragraph-3.avif`,
            alt: "The car driving fast across the desert.",
            summary:
              "Mandy and Abdullah drive quickly to Wadi Bidbid in the car.",
          },
          {
            img: `${imageBase}/paragraph-4.avif`,
            alt: "The car in the desert with tracks and blood in the sand.",
            summary:
              "Abdullah says the poachers shoot the oryx and sell the heads.",
          },
          {
            img: `${imageBase}/paragraph-5.avif`,
            alt: "Mandy and Abdullah looking at a dead oryx under a tree.",
            summary: "They find the tracks of a truck and blood in the sand.",
          },
          {
            img: `${imageBase}/paragraph-6.avif`,
            alt: "Mandy looking out the car window while Abdullah speaks on the radio.",
            summary:
              "Under a tree they find a dead mother oryx without her baby.",
          },
          {
            img: `${imageBase}/paragraph-7.avif`,
            alt: "Mandy on top of the car pointing left while Abdullah checks the road.",
            summary: "The police are coming in a helicopter to help them.",
          },
          {
            img: `${imageBase}/paragraph-8.avif`,
            alt: "Mandy and Abdullah reacting to a bullet hole in the car window.",
            summary: "They come to a road and Mandy sees sand on the left.",
          },
          {
            img: `${imageBase}/paragraph-9.avif`,
            alt: "The poachers' truck kicking up sand as Mandy and Abdullah take cover.",
            summary: "A man shoots at them and makes a hole in the car window.",
          },
          {
            img: `${imageBase}/paragraph-10.avif`,
            alt: "A police helicopter hovering above the poachers' truck in the sand.",
            summary:
              "Abdullah stops the car in some trees and the truck comes back.",
          },
          {
            img: `${imageBase}/paragraph-11.avif`,
            alt: "The young oryx in the truck while police arrest the poachers outside.",
            summary:
              "The car is stuck, but a helicopter comes and stops the poachers.",
          },
          {
            img: `${imageBase}/paragraph-12.avif`,
            alt: "Abdullah checking the young oryx in the truck while Mandy takes photos.",
            summary:
              "The poachers put up their hands, and the young oryx is in the truck.",
          },
          {
            img: `${imageBase}/paragraph-13.avif`,
            alt: "A policeman talking to Abdullah and Mandy by the young oryx.",
            summary: "The young oryx opens its eyes, so it is alive.",
          },
          {
            img: `${imageBase}/paragraph-14.avif`,
            alt: "Abdullah holding the young oryx while talking with the policeman and Mandy.",
            summary: "Mandy takes photos, and the police catch two poachers.",
          },
          {
            img: `${imageBase}/paragraph-15.avif`,
            alt: "Abdullah holding the young oryx with Mandy and the policeman.",
            summary:
              "Mandy has good photos for her book, and the policeman suggests a new book.",
          },
        ],
      },
    },
  ] satisfies AudiobookSection[],
};
