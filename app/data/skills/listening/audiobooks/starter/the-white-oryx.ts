import type { AudiobookRetell } from "../index";

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
  questions?: readonly string[];
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
      questions: ["Who is taking photographs of the oryx?", "What is Abdullah's job?"],
      answers: ["Mandy Brown.", "He is an oryx ranger."],
      text: `‘There! Near the trees. Can you see them? They’re the white oryx of Arabia,’ Abdullah says very quietly. Mandy Brown takes some photos of the oryx. She is writing a book about the animals of Arabia. Today she is in the desert with Abdullah. He is an oryx ranger. ‘They’re beautiful animals,’ Mandy says. ‘But the desert is very big. How do you find them?’`, //[span_1](start_span)[span_1](end_span)
      localMedia: `local-media/images/skills/listening/audiobooks/starter/the-white-oryx/paragraph-1.avif`,
      r2: `${imageBase}/paragraph-1.avif`,
      imageAlt: "Abdullah and Mandy in the desert looking toward trees.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-2",
      title: "Paragraph 2",
      questions: ["How do the rangers find the oryx?", "Where might there be poachers?"],
      answers: ["They use small radios on the oryx.", "In Wadi Bidbid."],
      text: `‘We put little radios on the oryx,’ Abdullah says. "You can see one there, on its neck. With the radios we can usually find them.’ Suddenly there is a noise behind them. It is the big radio in the car. The oryx look up and run away quickly. ‘Abdullah!’ the radio says. ‘Can you hear me? There’s a problem in Wadi Bidbid. Perhaps poachers.’`, //[span_2](start_span)[span_2](end_span)
      localMedia: `local-media/images/skills/listening/audiobooks/starter/the-white-oryx/paragraph-2.avif`,
      r2: `${imageBase}/paragraph-2.avif`,
      imageAlt: "Abdullah talking on the radio next to the car while Mandy watches.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-3",
      title: "Paragraph 3",
      questions: ["Who goes with Abdullah to Wadi Bidbid?", "How do they travel there?"],
      answers: ["Mandy Brown.", "They drive across the desert."],
      text: `‘I’m very near there,’ Abdullah says. ‘I can go there, but I’ve got the Australian woman with me.’ ‘That’s OK,’ Mandy says. ‘I can come with you. Perhaps I can help you.’ ‘OK,’ Abdullah says. ‘Let’s go.’ Mandy gets into the car and they drive away quickly across the desert.`, //[span_3](start_span)[span_3](end_span)
      localMedia: `local-media/images/skills/listening/audiobooks/starter/the-white-oryx/paragraph-3.avif`,
      r2: `${imageBase}/paragraph-3.avif`,
      imageAlt: "The car driving fast across the desert.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-4",
      title: "Paragraph 4",
      questions: ["What do poachers do to the oryx?", "What does Abdullah look for in the sand?"],
      answers: ["They shoot oryx and sell their heads, or catch and sell young oryx.", "Tracks."],
      text: `The sand makes a long yellow cloud behind the car. ‘Poachers?’ Mandy asks. ‘What do they do?’ ‘They’re a big problem,’ Abdullah says. ‘Usually they shoot the oryx. They sell the heads. And sometimes they catch the young oryx and sell them.’ ‘There’s Wadi Bidbid in front of us,’ Abdullah says. ‘I can’t see any oryx. Let’s look for tracks in the sand.’`, //[span_4](start_span)[span_4](end_span)
      localMedia: `local-media/images/skills/listening/audiobooks/starter/the-white-oryx/paragraph-4.avif`,
      r2: `${imageBase}/paragraph-4.avif`,
      imageAlt: "The car in the desert with tracks and blood in the sand.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-5",
      title: "Paragraph 5",
      questions: ["What tracks do Mandy and Abdullah find?", "What else do they find in the sand?"],
      answers: ["Tracks from a truck and some oryx.", "Blood."],
      text: `They open the windows and drive slowly. ‘Look! There!’ Mandy says. ‘I can see tracks.’ ‘You’re right,’ Abdullah says. ‘There are the tracks of a truck, and some oryx. And look! There’s some blood in the sand here - and there. This is the work of poachers.’ They follow the tracks of the truck slowly across the sand.`, //[span_5](start_span)[span_5](end_span)
      localMedia: `local-media/images/skills/listening/audiobooks/starter/the-white-oryx/paragraph-5.avif`,
      r2: `${imageBase}/paragraph-5.avif`,
      imageAlt: "Mandy and Abdullah looking at a dead oryx under a tree.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-6",
      title: "Paragraph 6",
      questions: ["What happened to the mother oryx?", "What is missing?"],
      answers: ["Poachers shot her.", "Her young oryx."],
      text: `Under the tree they find an oryx with a big hole in its neck. It is dead. ‘We’ve got a problem,’ Abdullah says. ‘Look! I can see the tracks of a young oryx here. This dead oryx is its mother. But the baby oryx isn’t here.’ ‘Can we follow the tracks of their truck in the sand?’ Mandy asks. ‘Can we catch them?’`, //[span_6](start_span)[span_6](end_span)
      localMedia: `local-media/images/skills/listening/audiobooks/starter/the-white-oryx/paragraph-6.avif`,
      r2: `${imageBase}/paragraph-6.avif`,
      imageAlt: "Mandy looking out the car window while Abdullah speaks on the radio.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-7",
      title: "Paragraph 7",
      questions: ["Who is coming to help Mandy and Abdullah?", "What are they following?"],
      answers: ["The police in a helicopter.", "The poachers' truck tracks."],
      text: `They drive quickly across the desert again. Mandy is watching the tracks. Abdullah is talking on the radio. ‘One mother oryx is dead,’ he says. ‘But the poachers have got her baby. We’re following them.’ Abdullah listens to the radio and smiles. ‘That’s good,’ he says to Mandy. ‘The police have a helicopter near here. They’re coming, too.’`, //[span_7](start_span)[span_7](end_span)
      localMedia: `local-media/images/skills/listening/audiobooks/starter/the-white-oryx/paragraph-7.avif`,
      r2: `${imageBase}/paragraph-7.avif`,
      imageAlt: "Mandy on top of the car pointing left while Abdullah checks the road.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-8",
      title: "Paragraph 8",
      questions: ["Why can they no longer follow the truck tracks?", "Why does Mandy tell Abdullah to turn left?"],
      answers: ["They reach a road.", "She sees a cloud of sand from the poachers' truck on the left."],
      text: `Suddenly they come to a road in the desert. Now they can’t see the tracks of the truck. ‘Left or right?’ Abdullah says. ‘What do you think?’ Mandy climbs quickly on the car. ‘Go to the left,’ she says. ‘I can see a small cloud of sand on the left. It’s the poachers!’ She climbs down and they follow the road to the left.`, //[span_8](start_span)[span_8](end_span)
      localMedia: `local-media/images/skills/listening/audiobooks/starter/the-white-oryx/paragraph-8.avif`,
      r2: `${imageBase}/paragraph-8.avif`,
      imageAlt: "Mandy and Abdullah reacting to a bullet hole in the car window.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-9",
      title: "Paragraph 9",
      questions: ["What does Mandy see beside the truck?", "What happens to their car window?"],
      answers: ["A man with a gun.", "A shot makes a hole in it."],
      text: `Now they can see the cloud of sand behind the poachers. ‘We’re very near them now,’ Mandy says. ‘Look! They’re not moving. We can catch them. Oh no! There’s a man with a gun near the truck.’ Suddenly there is a loud noise in the car. ‘Get down!’ Abdullah says quickly. ‘They’re shooting at us. Look at the hole in the window.’`, //[span_9](start_span)[span_9](end_span)
      localMedia: `local-media/images/skills/listening/audiobooks/starter/the-white-oryx/paragraph-9.avif`,
      r2: `${imageBase}/paragraph-9.avif`,
      imageAlt: "The poachers' truck kicking up sand as Mandy and Abdullah take cover.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-10",
      title: "Paragraph 10",
      questions: ["Where does Abdullah stop the car?", "What does Mandy see the poachers doing?"],
      answers: ["Among some small trees.", "They drive back toward Mandy and Abdullah."],
      text: `Abdullah drives into some small trees and stops the car. He gets his gun and talks on the radio again. Mandy goes into the trees and looks at the road. ‘The poachers are moving again!’ she says. ‘They’re in the truck. And the man with the gun is on the back.’ ‘Are they driving away?’ Abdullah asks. ‘No!’ Mandy says. ‘Help! They’re coming back here!’`, //[span_10](start_span)[span_10](end_span)
      localMedia: `local-media/images/skills/listening/audiobooks/starter/the-white-oryx/paragraph-10.avif`,
      r2: `${imageBase}/paragraph-10.avif`,
      imageAlt: "A police helicopter hovering above the poachers' truck in the sand.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-11",
      title: "Paragraph 11",
      questions: ["Why can Abdullah's car not move?", "What makes the poachers stop?"],
      answers: ["It is stuck in the sand.", "A police helicopter blows sand across the road."],
      text: `Abdullah starts the car again. But it is in the sand now and it doesn’t move. He goes in front of the car with his gun. Mandy goes behind the car. Suddenly there is a very loud noise and they see a helicopter in front of them. It makes a big cloud of sand and the poachers can’t see the road. The truck stops in the sand and two men run from it into the desert.`, //[span_11](start_span)[span_11](end_span)
      localMedia: `local-media/images/skills/listening/audiobooks/starter/the-white-oryx/paragraph-11.avif`,
      r2: `${imageBase}/paragraph-11.avif`,
      imageAlt: "The young oryx in the truck while police arrest the poachers outside.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-12",
      title: "Paragraph 12",
      questions: ["Where is the young oryx?", "What do the poachers do when the police arrive?"],
      answers: ["In the back of the truck.", "They put down their guns and raise their hands."],
      text: `The police helicopter comes down near the poachers. The poachers quickly put their guns on the sand and put up their hands. Abdullah and Mandy run to the truck. The young oryx is in the back of the truck. There is no blood, but it isn’t moving. ‘Is it dead?’ Mandy asks quietly.`, //[span_12](start_span)[span_12](end_span)
      localMedia: `local-media/images/skills/listening/audiobooks/starter/the-white-oryx/paragraph-12.avif`,
      r2: `${imageBase}/paragraph-12.avif`,
      imageAlt: "Abdullah checking the young oryx in the truck while Mandy takes photos.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-13",
      title: "Paragraph 13",
      questions: ["Is the young oryx dead?", "How can it survive without its mother?"],
      answers: ["No. It opens its eyes and moves its legs.", "The rangers can find it a new mother."],
      text: `Abdullah takes its head in his hands. The little oryx opens its eyes and moves its legs. ‘No, it’s OK.’ Abdullah smiles. ‘But its mother is dead,’ Mandy says. ‘Can it live?’ ‘Yes,’ Abdullah says. ‘It’s young, but it isn’t a baby. We can find it a new mother. No problem.’ ‘Wait,’ Mandy says suddenly. ‘I want some photos.’`, //[span_13](start_span)[span_13](end_span)
      localMedia: `local-media/images/skills/listening/audiobooks/starter/the-white-oryx/paragraph-13.avif`,
      r2: `${imageBase}/paragraph-13.avif`,
      imageAlt: "A policeman talking to Abdullah and Mandy by the young oryx.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-14",
      title: "Paragraph 14",
      questions: ["What does Mandy photograph?", "How many poachers do the police catch?"],
      answers: ["The young oryx, Abdullah, the police, their helicopter and the poachers.", "Two."],
      text: `Mandy takes photos of Abdullah and the young oryx. Then she takes photos of the police and their helicopter. She takes pictures of the poachers, too. A policeman comes and looks at the young oryx. ‘Not a bad day,’ the policeman says. ‘No,’ Abdullah says. ‘The mother oryx is dead, but this young oryx is OK. And you’ve got two poachers.’`, //[span_14](start_span)[span_14](end_span)
      localMedia: `local-media/images/skills/listening/audiobooks/starter/the-white-oryx/paragraph-14.avif`,
      r2: `${imageBase}/paragraph-14.avif`,
      imageAlt: "Abdullah holding the young oryx while talking with the policeman and Mandy.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-15",
      title: "Paragraph 15",
      questions: ["Why is it a good day for Mandy?", "What new book does the policeman suggest?"],
      answers: ["She has interesting photographs for her book.", "A book about the oryx poachers and Abdullah."],
      text: `‘It’s a good day for me, too.’ Mandy smiles. ‘I’ve got some very interesting pictures for my book about the animals of the desert.’ ‘Perhaps you can write a new book,’ the policeman says. ‘A book about the oryx poachers and the famous ranger, Abdullah.’ ‘Why not?’ Mandy smiles again.`, //[span_15](start_span)[span_15](end_span)
      localMedia: `local-media/images/skills/listening/audiobooks/starter/the-white-oryx/paragraph-15.avif`,
      r2: `${imageBase}/paragraph-15.avif`,
      imageAlt: "Abdullah holding the young oryx with Mandy and the policeman.",
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
            alt: "Abdullah and Mandy in the desert looking toward trees.",
            summary:
              "Mandy Brown and Abdullah are in the desert. Abdullah is an oryx ranger, and Mandy takes photos of the white oryx for her book.",
          },
          {
            img: `${imageBase}/paragraph-2.avif`,
            alt: "Abdullah talking on the radio next to the car while Mandy watches.",
            summary:
              "Abdullah says they put little radios on the oryx. Then the radio in the car calls: there is a problem in Wadi Bidbid, perhaps poachers.",
          },
          {
            img: `${imageBase}/paragraph-3.avif`,
            alt: "The car driving fast across the desert.",
            summary:
              "Mandy says she can come with Abdullah, and she can perhaps help him. They get into the car and drive quickly across the desert.",
          },
          {
            img: `${imageBase}/paragraph-4.avif`,
            alt: "The car in the desert with tracks and blood in the sand.",
            summary:
              "Abdullah explains that poachers shoot the oryx and sell the heads, or catch the young oryx and sell them. At Wadi Bidbid they look for tracks in the sand.",
          },
          {
            img: `${imageBase}/paragraph-5.avif`,
            alt: "Mandy and Abdullah looking at a dead oryx under a tree.",
            summary:
              "Mandy sees tracks of a truck and of some oryx. There is blood in the sand, so they follow the tracks of the truck slowly.",
          },
          {
            img: `${imageBase}/paragraph-6.avif`,
            alt: "Mandy looking out the car window while Abdullah speaks on the radio.",
            summary:
              "Under a tree they find a dead mother oryx. The baby oryx is not there, so Mandy asks if they can follow the truck and catch the poachers.",
          },
          {
            img: `${imageBase}/paragraph-7.avif`,
            alt: "Mandy on top of the car pointing left while Abdullah checks the road.",
            summary:
              "Mandy watches the tracks and Abdullah talks on the radio. The police have a helicopter near them, and they are coming, too.",
          },
          {
            img: `${imageBase}/paragraph-8.avif`,
            alt: "Mandy and Abdullah reacting to a bullet hole in the car window.",
            summary:
              "They come to a road and cannot see the truck’s tracks now. Mandy climbs on the car, sees a cloud of sand on the left, and they go left.",
          },
          {
            img: `${imageBase}/paragraph-9.avif`,
            alt: "The poachers' truck kicking up sand as Mandy and Abdullah take cover.",
            summary:
              "They see the poachers’ truck and a man with a gun near it. The man shoots at them, and there is a hole in the car window.",
          },
          {
            img: `${imageBase}/paragraph-10.avif`,
            alt: "A police helicopter hovering above the poachers' truck in the sand.",
            summary:
              "Abdullah drives into some small trees and stops the car. Mandy sees the truck coming back, and she calls for help.",
          },
          {
            img: `${imageBase}/paragraph-11.avif`,
            alt: "The young oryx in the truck while police arrest the poachers outside.",
            summary:
              "The car is stuck in the sand. A police helicopter comes and makes a big cloud of sand, so the truck stops and two men run into the desert.",
          },
          {
            img: `${imageBase}/paragraph-12.avif`,
            alt: "Abdullah checking the young oryx in the truck while Mandy takes photos.",
            summary:
              "The helicopter comes down near the poachers, and they put down their guns and put up their hands. The young oryx is in the back of the truck and it is not moving.",
          },
          {
            img: `${imageBase}/paragraph-13.avif`,
            alt: "A policeman talking to Abdullah and Mandy by the young oryx.",
            summary:
              "The little oryx opens its eyes and moves its legs, so it is not dead. Abdullah says they can find it a new mother, and Mandy wants some photos.",
          },
          {
            img: `${imageBase}/paragraph-14.avif`,
            alt: "Abdullah holding the young oryx while talking with the policeman and Mandy.",
            summary:
              "Mandy takes photos of Abdullah, the young oryx, the police and the poachers. The policeman says it is not a bad day, because the young oryx is OK and they have two poachers.",
          },
          {
            img: `${imageBase}/paragraph-15.avif`,
            alt: "Abdullah holding the young oryx with Mandy and the policeman.",
            summary:
              "Mandy says it is a good day for her because she has interesting pictures for her book. The policeman thinks she can write a new book about the poachers and Abdullah.",
          },
        ],
      },
    },
  ] satisfies AudiobookSection[],
};
