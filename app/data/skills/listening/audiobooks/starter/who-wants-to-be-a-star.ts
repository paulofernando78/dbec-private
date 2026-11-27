import type { AudiobookSection } from "./a-new-zealand-adventure";

const imageBase =
  "/media/images/skills/listening/audiobooks/starter/who-wants-to-be-a-star";
const localBase =
  "local-media/images/skills/listening/audiobooks/starter/who-wants-to-be-a-star";

export const whoWantsToBeAStar = {
  slug: "who-wants-to-be-a-star",
  title: "Who Wants to Be a Star?",
  audio: "",
  sections: [
    {
      id: "summary",
      title: "Summary",
      text: "Tina Daniels is thirteen years old and a star. She sings beautifully, and everyone loves her. Her mother has big ideas about Hollywood, but Tina is not happy. One day she goes away on a train. Who does she meet? What does she see?",
      localMedia: `${localBase}/cover.avif`,
      r2: `${imageBase}/cover.avif`,
      imageAlt: "Cover of Who Wants to Be a Star?",
      mediaPosition: "left",
    },
    {
      id: "paragraph-1",
      questions: [
        {
          question: "Why do people call Tina “Curls”?",
          options: [
            { option: "They call her Curls because she can sing and dance." },
            {
              option:
                "They call her Curls because she has beautiful curly hair.",
              isCorrect: true,
            },
            { option: "They call her Curls because she is in a film." },
          ],
        },
        {
          question: "What does everyone want from Tina?",
          options: [
            { option: "They all want her photo.", isCorrect: true },
            { option: "They all want her money." },
            { option: "They all want her to leave the city." },
          ],
        },
      ],
      title: "Paragraph 1",
      text: `Tina Daniels is thirteen years old and she is a star. She can sing and dance. Everyone knows her. Everyone loves her. They call her “Curls” because she has beautiful curly hair. They all want her photo. She can have anything she wants. But is she happy? Does she want to be a star?`,
      localMedia: `${localBase}/paragraph-1.avif`,
      r2: `${imageBase}/paragraph-1.avif`,
      imageAlt: "Tina posing for photographers as the star Curls.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-2",
      questions: [
        {
          question: "Why does Mrs. Daniels tell Tina not to eat chocolates?",
          options: [
            {
              option:
                "She tells her not to eat chocolates because they are expensive.",
            },
            {
              option:
                "She tells her not to eat chocolates because they are bad for her teeth.",
            },
            {
              option:
                "She tells her not to eat chocolates because Tina is getting fat and will earn less money.",
              isCorrect: true,
            },
          ],
        },
        {
          question: "Why does Tina cry?",
          options: [
            {
              option: "She cries because she is angry with her mother.",
              isCorrect: true,
            },
            { option: "She cries because she cannot sing well." },
            { option: "She cries because she wants more chocolates." },
          ],
        },
      ],
      title: "Paragraph 2",
      timestamp: "0:44",
      text: `“Tina, why are you eating chocolates?” her mother asks. “I like them. They're nice!” Tina says. “You're getting fat, and a fat girl doesn't get lots of money in Hollywood,” Mrs. Daniels says. “You want the money—I don't!” Tina says. Tina is angry with her mother and Mrs. Daniels is angry with Tina. Tina leaves the room and cries.`,
      localMedia: `${localBase}/paragraph-2.avif`,
      r2: `${imageBase}/paragraph-2.avif`,
      imageAlt: "Tina arguing with her mother about eating chocolates.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-3",
      questions: [
        {
          question: "What kind of life does Tina want?",
          options: [
            { option: "She wants a busy life in Hollywood." },
            { option: "She wants a quiet life.", isCorrect: true },
            {
              option: "She wants a life with lots of photographers.",
            },
          ],
        },
        {
          question: "Where does she decide to go?",
          options: [
            {
              option: "She decides to go to Mrs. White’s house in Stonechurch.",
              isCorrect: true,
            },
            { option: "She decides to go to her school in the city." },
            { option: "She decides to go to a hotel in Hollywood." },
          ],
        },
      ],
      title: "Paragraph 3",
      timestamp: "1:23",
      text: `Tina is very sad. She doesn't want to be a star. She wants a quiet life. One day she has an idea. Her school friend Mary has a grandmother, Mrs. White. Old Mrs. White lives in the country, in Stonechurch. Tina has a photo of Mary in front of Mrs. White's house. It looks very pretty—not like the city! Tina decides to go there.`,
      localMedia: `${localBase}/paragraph-3.avif`,
      r2: `${imageBase}/paragraph-3.avif`,
      imageAlt: "Tina looking at a photograph of Mrs. White's country house.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-4",
      questions: [
        {
          question: "Why don’t people recognize Tina?",
          options: [
            {
              option:
                "They don’t recognize her because she is wearing a long coat.",
            },
            {
              option:
                "They don’t recognize her because she is wearing jeans and an old jumper.",
              isCorrect: true,
            },
            {
              option: "They don’t recognize her because she is with Mary.",
            },
          ],
        },
        {
          question: "When does her train leave?",
          options: [
            { option: "Her train leaves at one o’clock." },
            { option: "Her train leaves at three o’clock." },
            { option: "Her train leaves at two o’clock.", isCorrect: true },
          ],
        },
      ],
      title: "Paragraph 4",
      timestamp: "2:06",
      text: `Tina is at the city station. She is wearing jeans and an old jumper. People do not know who she is. “Where do you want to go, young girl?” the man at the ticket office asks her. “Stonechurch, please. When's the next train?” Tina asks. “The train leaves at two o'clock from platform three,” the man says. Tina buys her ticket.`,
      localMedia: `${localBase}/paragraph-4.avif`,
      r2: `${imageBase}/paragraph-4.avif`,
      imageAlt: "Tina buying a train ticket to Stonechurch.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-5",
      questions: [
        {
          question: "How does Tina recognize Mrs. White’s house?",
          options: [
            {
              option:
                "She recognizes it because she has seen it in a photo of Mary.",
              isCorrect: true,
            },
            {
              option: "She recognizes it because Mary has described it to her.",
            },
            {
              option:
                "She recognizes it because Mrs. White is waiting in the garden.",
            },
          ],
        },
        {
          question: "Who opens the door?",
          options: [
            { option: "Mary opens the door." },
            { option: "Mrs. White opens the door.", isCorrect: true },
            { option: "The postman opens the door." },
          ],
        },
      ],
      title: "Paragraph 5",
      timestamp: "2:46",
      text: `Tina arrives at Stonechurch. She sees an old house near the river. It is the house in the photo! There are flowers and trees in the garden. “Mrs. White must live here,” Tina thinks. She goes to the front door and rings the bell. An old lady with white hair and a kind face opens the door. A black cat comes out, too.`,
      localMedia: `${localBase}/paragraph-5.avif`,
      r2: `${imageBase}/paragraph-5.avif`,
      imageAlt: "Tina arriving at Mrs. White's house in Stonechurch.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-6",
      questions: [
        {
          question: "How does Tina know Mrs. White?",
          options: [
            {
              option: "She knows her because she lives next door to her.",
            },
            {
              option: "She knows her because Mrs. White teaches at her school.",
            },
            {
              option:
                "She knows her because she is a school friend of her granddaughter, Mary.",
              isCorrect: true,
            },
          ],
        },
        {
          question: "Why did Tina leave the city?",
          options: [
            {
              option: "She left the city because she hates city life.",
              isCorrect: true,
            },
            {
              option:
                "She left the city because she wants to find work in the country.",
            },
            {
              option: "She left the city because her mother sent her away.",
            },
          ],
        },
      ],
      title: "Paragraph 6",
      timestamp: "3:23",
      text: `“Good afternoon. Who are you?” the old lady asks. “Oh, hello, Mrs. White. My name is Tina. I am a school friend of your granddaughter, Mary.” “Mary's school friend—how nice to meet you! What are you doing in Stonechurch, Tina?” Mrs. White asks. Tina says she hates city life. “Well,” says Mrs. White, “come in and have a cup of tea, my dear.”`,
      localMedia: `${localBase}/paragraph-6.avif`,
      r2: `${imageBase}/paragraph-6.avif`,
      imageAlt: "Mrs. White welcoming Tina into her house.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-7",
      questions: [
        {
          question: "Why doesn’t Mrs. White recognize Tina?",
          options: [
            {
              option:
                "She doesn’t recognize her because she never reads newspapers.",
            },
            {
              option:
                "She doesn’t recognize her because she has no television or radio.",
              isCorrect: true,
            },
            {
              option:
                "She doesn’t recognize her because Tina is wearing a disguise.",
            },
          ],
        },
        {
          question: "What lie does Tina tell her?",
          options: [
            {
              option: "She says that her mother has agreed to let her stay.",
              isCorrect: true,
            },
            {
              option: "She says that her mother is waiting in Stonechurch.",
            },
            {
              option: "She says that her mother wants her to stay for a month.",
            },
          ],
        },
      ],
      title: "Paragraph 7",
      timestamp: "4:05",
      text: `Tina and Mrs. White drink tea and talk. Mrs. White doesn't know Tina is a star. She does not have a television or a radio. Tina is very happy! Mrs. White says, “Tina, you can stay with me for a week, but first you have to telephone your mother.” Tina is angry with her mother and doesn't telephone her. “Mother says yes!” she says to Mrs. White later. Her face is a little red.`,
      localMedia: `${localBase}/paragraph-7.avif`,
      r2: `${imageBase}/paragraph-7.avif`,
      imageAlt: "Tina and Mrs. White drinking tea together.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-8",
      questions: [
        {
          question: "Why does Tina want to be like a lamb?",
          options: [
            {
              option:
                "She wants to be like a lamb because lambs live in the city.",
            },
            {
              option:
                "She wants to be like a lamb because lambs are very quiet.",
            },
            {
              option:
                "She wants to be like a lamb because lambs can jump, run and be happy.",
              isCorrect: true,
            },
          ],
        },
        {
          question: "What does Mrs. White tell her to do?",
          options: [
            { option: "She tells her to rest in the garden." },
            { option: "She tells her to run.", isCorrect: true },
            { option: "She tells her to go back to the city." },
          ],
        },
      ],
      title: "Paragraph 8",
      timestamp: "4:47",
      text: `Two days later, Mrs. White is taking Tina for a walk. “Look at the lambs!” Mrs. White says. “Yes, I love them. I want to be a lamb. They can jump and run and be happy.” “You can run and jump and be happy too, Tina.” “No, I can't. I—” “Tina, you're young. Run!”`,
      localMedia: `${localBase}/paragraph-8.avif`,
      r2: `${imageBase}/paragraph-8.avif`,
      imageAlt: "Tina and Mrs. White watching lambs in the country.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-9",
      questions: [
        {
          question: "Which animals visit the garden at night?",
          options: [
            {
              option: "Some hedgehogs come to the garden at night.",
              isCorrect: true,
            },
            {
              option: "Some rabbits come to the garden at night.",
            },
            {
              option: "Some lambs come to the garden at night.",
            },
          ],
        },
        {
          question: "Why does Mrs. White put out food?",
          options: [
            {
              option: "She puts out food to feed the chickens.",
            },
            {
              option: "She puts out food to feed the hedgehogs.",
              isCorrect: true,
            },
            { option: "She puts out food to feed the fox." },
          ],
        },
      ],
      title: "Paragraph 9",
      timestamp: "5:25",
      text: `Tina is living a very different life in the country. She sees new things all the time. Now it is night, and Tina and Mrs. White are waiting. It is very quiet. Every night some hedgehogs come to the garden. Mrs. White puts out food for them. “I love their long brown noses,” Mrs. White says. “So do I,” says Tina.`,
      localMedia: `${localBase}/paragraph-9.avif`,
      r2: `${imageBase}/paragraph-9.avif`,
      imageAlt: "Tina and Mrs. White watching hedgehogs in the garden.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-10",
      questions: [
        {
          question: "Why is Tina first happy to see the fox?",
          options: [
            { option: "She is happy because the fox is very small." },
            {
              option:
                "She is happy because there are no foxes in the gardens in the city.",
              isCorrect: true,
            },
            { option: "She is happy because Mrs. White likes foxes." },
          ],
        },
        {
          question: "What is the fox carrying?",
          options: [
            { option: "The fox is carrying a hedgehog in its mouth." },
            {
              option: "The fox is carrying Mrs. White’s cat in its mouth.",
            },
            {
              option: "The fox is carrying Mrs. White’s chicken in its mouth.",
              isCorrect: true,
            },
          ],
        },
      ],
      title: "Paragraph 10",
      timestamp: "6:10",
      text: `“Oh, look!” says Tina. A big brown fox is running across the garden. At first, Tina is very happy to see the fox. There aren't any foxes in the gardens in the city! Then she sees the fox has something in its mouth. The “something” is Mrs. White's chicken! Mrs. White is very angry and wants to kill the fox!`,
      localMedia: `${localBase}/paragraph-10.avif`,
      r2: `${imageBase}/paragraph-10.avif`,
      imageAlt: "A fox running away with one of Mrs. White's chickens.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-11",
      questions: [
        {
          question: "Why can’t they have eggs for breakfast?",
          options: [
            {
              option:
                "They can’t have eggs because there are no eggs in the shop.",
            },
            {
              option: "They can’t have eggs because the fox took all the eggs.",
            },
            {
              option:
                "They can’t have eggs because the chickens are unhappy and cannot give them eggs.",
              isCorrect: true,
            },
          ],
        },
      ],
      title: "Paragraph 11",
      timestamp: "6:45",
      text: `Mrs. White and Tina look at the fox's work. The chickens are making a terrible noise. “We can't have eggs for breakfast this morning, Tina,” says Mrs. White. “Why not?” asks Tina. “The chickens aren't very happy. When they aren't happy, they can't give us eggs,” Mrs. White explains. For breakfast, Tina has toast and fresh orange juice.`,
      localMedia: `${localBase}/paragraph-11.avif`,
      r2: `${imageBase}/paragraph-11.avif`,
      imageAlt: "Mrs. White and Tina checking the frightened chickens.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-12",
      questions: [
        {
          question: "Who recognizes Tina?",
          options: [
            { option: "The postman recognizes Tina.", isCorrect: true },
            {
              option: "The man at the ticket office recognizes Tina.",
            },
            { option: "Bella the horse recognizes Tina." },
          ],
        },
        {
          question: "How does he know everyone is looking for her?",
          options: [
            {
              option: "He knows because Mrs. White told him.",
            },
            {
              option:
                "He knows because he has read about her in the newspapers.",
              isCorrect: true,
            },
            {
              option: "He knows because he saw her on television.",
            },
          ],
        },
      ],
      title: "Paragraph 12",
      timestamp: "7:24",
      text: `Three days later Tina is with Bella, the horse. She loves Bella and gives her some sugar. Today the postman has a letter for Mrs. White. When he sees Tina, he says, “I don't believe it—it's Curls!” Then he says to her, “Everyone's looking for you. You're in all the newspapers!” He runs to his red van to find his newspaper.`,
      localMedia: `${localBase}/paragraph-12.avif`,
      r2: `${imageBase}/paragraph-12.avif`,
      imageAlt: "The postman recognizing Tina beside Bella the horse.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-13",
      questions: [
        {
          question: "What does Mrs. White learn from the newspaper?",
          options: [
            {
              option:
                "She learns that Tina’s mother is looking for a new house.",
            },
            {
              option: "She learns that Mary is at school in Guernsey.",
            },
            {
              option: "She learns that Tina is the lost TV star, Curls.",
              isCorrect: true,
            },
          ],
        },
        {
          question: "Does Tina want to go home?",
          options: [
            {
              option: "No, she wants to stay with Mrs. White.",
              isCorrect: true,
            },
            { option: "Yes, she wants to go home to her mother." },
            { option: "Yes, but only for a few days." },
          ],
        },
      ],
      title: "Paragraph 13",
      timestamp: "8:06",
      text: `Mrs. White reads the postman's newspaper. “Tina,” says Mrs. White, “you're the ‘Lost TV Star’, aren't you? I don't understand... Your mother...” “Yes, I'm Curls, but please don't send me home. I'm happy here with you.” “I'm coming with you to see your mother. I've got a good idea,” Mrs. White says.`,
      localMedia: `${localBase}/paragraph-13.avif`,
      r2: `${imageBase}/paragraph-13.avif`,
      imageAlt: "Mrs. White discovering Tina's identity in the newspaper.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-14",
      questions: [
        {
          question: "Where does Mrs. White suggest Tina should study?",
          options: [
            {
              option:
                "She suggests that Tina should study at a school in Hollywood.",
            },
            {
              option:
                "She suggests that Tina should study at her friend’s school on Guernsey.",
              isCorrect: true,
            },
            {
              option:
                "She suggests that Tina should study at Mary’s school in the city.",
            },
          ],
        },
        {
          question: "What does Mrs. White say Tina really wants?",
          options: [
            {
              option: "She says that Tina really wants to be a star.",
            },
            {
              option: "She says that Tina really wants to be rich.",
            },
            {
              option: "She says that Tina really wants to be happy.",
              isCorrect: true,
            },
          ],
        },
      ],
      title: "Paragraph 14",
      timestamp: "8:48",
      text: `Tina's mother is very happy to see Tina again. Mrs. White explains her idea: Tina can go to her friend's school on the island of Guernsey, between England and France. Tina can have friends there who do not know she is Curls. “What? I want Tina to be a star!” Mrs. Daniels says. “She wants to be happy,” Mrs. White says quietly.`,
      localMedia: `${localBase}/paragraph-14.avif`,
      r2: `${imageBase}/paragraph-14.avif`,
      imageAlt: "Mrs. White explaining her plan to Tina's mother.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-15",
      questions: [
        {
          question: "What is Tina’s new life like?",
          options: [
            {
              option:
                "She has new friends and new interests at school in Guernsey.",
              isCorrect: true,
            },
            {
              option: "She has no friends at school in Guernsey.",
            },
            { option: "She has a new job in Hollywood." },
          ],
        },
        {
          question: "Does she still want to be a star?",
          options: [
            { option: "Yes, she still wants to be a star." },
            {
              option: "No, she does not want to be a star.",
              isCorrect: true,
            },
            { option: "Yes, but only when she sings." },
          ],
        },
      ],
      title: "Paragraph 15",
      timestamp: "9:26",
      text: `Tina is at school in Guernsey. She has new friends and new interests. One day, Tina's friend is reading a magazine. It's about film and television stars. There are lots of beautiful photos of beautiful people. Everyone looks very happy. “What a wonderful life!” the friend says. Tina smiles to herself. “Who wants to be a star?” she says. “I don't.”`,
      localMedia: `${localBase}/paragraph-15.avif`,
      r2: `${imageBase}/paragraph-15.avif`,
      imageAlt: "Tina enjoying school life with her new friends in Guernsey.",
      mediaPosition: "left",
    },
    {
      id: "retell-the-story",
      title: "Retell the Story",
      retell: {
        cards: [
          {
            img: `${imageBase}/paragraph-1.avif`,
            alt: "Tina posing for photographers as the star Curls.",
            summary:
              "Tina is a young star and everyone calls her Curls.",
          },
          {
            img: `${imageBase}/paragraph-2.avif`,
            alt: "Tina arguing with her mother about eating chocolates.",
            summary:
              "Tina’s mother says she is getting fat, so Tina cries.",
          },
          {
            img: `${imageBase}/paragraph-3.avif`,
            alt: "Tina looking at a photograph of Mrs. White's country house.",
            summary:
              "Tina decides to go to Mrs. White’s house in the country.",
          },
          {
            img: `${imageBase}/paragraph-4.avif`,
            alt: "Tina buying a train ticket to Stonechurch.",
            summary:
              "Tina buys a train ticket and goes to Stonechurch.",
          },
          {
            img: `${imageBase}/paragraph-5.avif`,
            alt: "Tina arriving at Mrs. White's house in Stonechurch.",
            summary:
              "Tina finds the house and an old lady opens the door.",
          },
          {
            img: `${imageBase}/paragraph-6.avif`,
            alt: "Mrs. White welcoming Tina into her house.",
            summary:
              "Tina says she is Mary’s school friend, and Mrs. White invites her in.",
          },
          {
            img: `${imageBase}/paragraph-7.avif`,
            alt: "Tina and Mrs. White drinking tea together.",
            summary:
              "Tina never telephones her mother and lies to Mrs. White about it.",
          },
          {
            img: `${imageBase}/paragraph-8.avif`,
            alt: "Tina and Mrs. White watching lambs in the country.",
            summary:
              "They see the lambs, and Mrs. White tells Tina to run.",
          },
          {
            img: `${imageBase}/paragraph-9.avif`,
            alt: "Tina and Mrs. White watching hedgehogs in the garden.",
            summary:
              "Some hedgehogs come every night, and Mrs. White puts out food for them.",
          },
          {
            img: `${imageBase}/paragraph-10.avif`,
            alt: "A fox running away with one of Mrs. White's chickens.",
            summary:
              "A fox runs across the garden with Mrs. White’s chicken in its mouth.",
          },
          {
            img: `${imageBase}/paragraph-11.avif`,
            alt: "Mrs. White and Tina checking the frightened chickens.",
            summary:
              "The chickens are unhappy, so the girls cannot have eggs for breakfast.",
          },
          {
            img: `${imageBase}/paragraph-12.avif`,
            alt: "The postman recognizing Tina beside Bella the horse.",
            summary:
              "The postman sees Tina and knows that she is the famous Curls.",
          },
          {
            img: `${imageBase}/paragraph-13.avif`,
            alt: "Mrs. White discovering Tina's identity in the newspaper.",
            summary:
              "Mrs. White reads the newspaper and learns that Tina is the lost star.",
          },
          {
            img: `${imageBase}/paragraph-14.avif`,
            alt: "Mrs. White explaining her plan to Tina's mother.",
            summary:
              "Mrs. White suggests a school on Guernsey where nobody knows Tina.",
          },
          {
            img: `${imageBase}/paragraph-15.avif`,
            alt: "Tina enjoying school life with her new friends in Guernsey.",
            summary:
              "Tina has new friends in Guernsey and does not want to be a star.",
          },
        ],
      },
    },
  ] satisfies AudiobookSection[],
};
