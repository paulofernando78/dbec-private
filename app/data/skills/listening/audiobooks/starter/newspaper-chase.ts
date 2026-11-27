import type { AudiobookSection } from "./a-new-zealand-adventure";

const imageBase = "/media/images/skills/listening/audiobooks/starter/newspaper-chase";
const localBase =
  "local-media/images/skills/listening/audiobooks/starter/newspaper-chase";

export const newspaperChase = {
  slug: "newspaper-chase",
  title: "Newspaper Chase",
  audio: "",
  sections: [
    {
      id: "summary",
      title: "Summary",
      text: "Newspaper Chase is a fictional story about a thief who steals a very expensive painting from an art gallery.",
      localMedia: `${localBase}/cover.avif`,
      r2: `${imageBase}/cover.avif`,
      imageAlt: "Cover of Newspaper Chase.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-1",
      questions: [
        {
          question: "Where is Harry Black?",
          options: [
            { option: "He is at the Ritesville bus station." },
            {
              option: "He is at the Ritesville town art gallery.",
              isCorrect: true,
            },
            { option: "He is at the Ritesville police station." },
          ],
        },
        {
          question: "What does he see?",
          options: [
            { option: "He sees a vase." },
            { option: "He sees a window." },
            { option: "He sees a painting.", isCorrect: true },
          ],
        },
        {
          question: "Why is he there?",
          options: [
            { option: "He is there to steal the painting.", isCorrect: true },
            { option: "He is there to visit a friend." },
            { option: "He is there to clean the gallery." },
          ],
        },
      ],
      title: "Paragraph 1",
      text: `The time is one o'clock in the morning. The place is the Ritesville town art gallery. A window opens and a man comes in. His name is Harry Black, and he is a thief. It is dark in the art gallery, but Harry has a light. He looks across the room at a painting. “There it is!” he says.`,
      localMedia: `${localBase}/paragraph-1.avif`,
      r2: `${imageBase}/paragraph-1.avif`,
      imageAlt: "Harry Black entering the art gallery at night.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-2",
      questions: [
        {
          question:
            "What does Harry use to remove the painting from its frame?",
          options: [
            { option: "He uses a pair of scissors." },
            { option: "He uses a knife.", isCorrect: true },
            { option: "He uses a screwdriver." },
          ],
        },
      ],
      title: "Paragraph 2",
      timestamp: "0:35",
      text: `Harry moves quickly across the room. He stands and looks at the painting. “A million dollars for this?” he thinks. “I don't understand it.” But he takes a knife from his coat. Then he takes the painting very, very slowly from its frame.`,
      localMedia: `${localBase}/paragraph-2.avif`,
      r2: `${imageBase}/paragraph-2.avif`,
      imageAlt: "Harry cutting the painting from its frame.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-3",
      questions: [
        {
          question: "What falls on the floor and breaks?",
          options: [
            { option: "A window falls and breaks." },
            { option: "A chair falls and breaks." },
            {
              option: "The blue glass vase falls and breaks.",
              isCorrect: true,
            },
          ],
        },
        {
          question: "Does he stop after breaking it?",
          options: [
            { option: "Yes, he stops and cleans the glass." },
            { option: "No, he runs to the window.", isCorrect: true },
          ],
        },
      ],
      title: "Paragraph 3",
      timestamp: "1:01",
      text: `Harry goes back across the room to the window, but he walks into a table. There is a beautiful blue glass vase on the table. It falls on the floor and breaks into a hundred pieces. Harry smiles. “Is that a million-dollar vase?” he thinks. “It isn't now!” He runs across the pieces of glass to the window.`,
      localMedia: `${localBase}/paragraph-3.avif`,
      r2: `${imageBase}/paragraph-3.avif`,
      imageAlt: "Harry standing beside the broken glass vase.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-4",
      questions: [
        {
          question: "Where does Harry live?",
          options: [
            { option: "He lives in an art gallery." },
            { option: "He lives in a hotel." },
            {
              option: "He lives in Mrs. Allen’s rooming house.",
              isCorrect: true,
            },
          ],
        },
        {
          question: "Where does he hide the painting?",
          options: [
            { option: "He hides it in a box." },
            {
              option: "He hides it in a newspaper under his bed.",
              isCorrect: true,
            },
            { option: "He hides it in his bag." },
          ],
        },
      ],
      title: "Paragraph 4",
      timestamp: "1:33",
      text: `Harry has a room in Mrs. Allen's rooming house. He goes quietly up to his room and closes the door. Mrs. Allen and her daughter, Janey, are sleeping. They don't hear him. In his room, Harry takes the painting from his bag. He puts it in a newspaper, then he puts the newspaper under his bed.`,
      localMedia: `${localBase}/paragraph-4.avif`,
      r2: `${imageBase}/paragraph-4.avif`,
      imageAlt: "Harry carrying the wrapped painting up the stairs.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-5",
      questions: [
        {
          question: "What is Janey recycling?",
          options: [
            { option: "She is recycling old newspapers." },
            { option: "She is recycling old clothes." },
            { option: "She is recycling old bottles.", isCorrect: true },
          ],
        },
        {
          question: "What is the TV reporter talking about?",
          options: [
            {
              option: "He is talking about the stolen million-dollar painting.",
              isCorrect: true,
            },
            { option: "He is talking about the weather." },
            { option: "He is talking about the recycling truck." },
          ],
        },
      ],
      title: "Paragraph 5",
      timestamp: "2:04",
      text: `In the morning, Janey Allen is in the kitchen. She is putting old bottles into a box. “Recycling is important,” Janey thinks. On the TV, a reporter is at the Ritesville Art Gallery. He is talking about the painting. “It's a million-dollar painting,” he is saying. “Here's a photo of it.”`,
      localMedia: `${localBase}/paragraph-5.avif`,
      r2: `${imageBase}/paragraph-5.avif`,
      imageAlt: "Janey recycling bottles while watching the news.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-6",
      questions: [
        {
          question: "What happened to the blue vase?",
          options: [
            { option: "It is on the table in the art gallery." },
            { option: "It is in a hundred pieces now.", isCorrect: true },
            { option: "It is in Mrs. Allen’s kitchen." },
          ],
        },
        {
          question: "Why does Janey remember that it is Friday?",
          options: [
            { option: "Because she has a music lesson today." },
            {
              option: "Because the newspaper recycling truck is coming today.",
              isCorrect: true,
            },
            { option: "Because her mother asks her about the blue vase." },
          ],
        },
      ],
      title: "Paragraph 6",
      timestamp: "2:33",
      text: `Now the reporter is talking about the blue glass vase. “It's in a hundred pieces now,” he says. Janey looks at the photo of the vase, then she asks her mother, “Do you have any old bottles?” “No,” Mrs. Allen says. “That's all, Janey. But the newspaper recycling truck is coming today.” “Of course!” Janey says. “It's Friday!”`,
      localMedia: `${localBase}/paragraph-6.avif`,
      r2: `${imageBase}/paragraph-6.avif`,
      imageAlt: "Janey remembering that the recycling truck is coming.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-7",
      questions: [
        {
          question: "Who is Harry talking to?",
          options: [
            { option: "He is talking to Mrs. Allen." },
            { option: "He is talking to a policeman." },
            { option: "He is talking to a man in Seattle.", isCorrect: true },
          ],
        },
        {
          question: "Why isn't he happy with the man's offer?",
          options: [
            { option: "The man offers $50,000, but Harry wants $5,000." },
            {
              option: "The man offers $5,000, but Harry wants $50,000.",
              isCorrect: true,
            },
            { option: "The man does not want to buy the painting." },
          ],
        },
      ],
      title: "Paragraph 7",
      timestamp: "3:10",
      text: `Harry isn't in his room. He is talking on his telephone to a man in Seattle. The man wants the painting, but Harry isn't happy. “Five thousand dollars?” Harry says. “No! It's a million-dollar painting! ... What? ... No, I want fifty thousand, not five! ... What? ... The painting? Yes, I have it, and it's OK.”`,
      localMedia: `${localBase}/paragraph-7.avif`,
      r2: `${imageBase}/paragraph-7.avif`,
      imageAlt: "Harry arguing on the telephone.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-8",
      questions: [
        {
          question: "What is Janey looking for?",
          options: [
            { option: "She is looking for old newspapers.", isCorrect: true },
            { option: "She is looking for old bottles." },
            { option: "She is looking for Harry’s painting." },
          ],
        },
        {
          question: "What does she find under Harry's bed?",
          options: [
            { option: "She finds a box of old bottles." },
            { option: "She finds a knife." },
            {
              option: "She finds a newspaper under Harry’s bed.",
              isCorrect: true,
            },
          ],
        },
      ],
      title: "Paragraph 8",
      timestamp: "3:54",
      text: `Janey is looking for old newspapers. Early on Friday morning, she takes them from every room in the house. Then later, the newspaper recycling truck arrives. Janey opens Harry's door and looks into his room. She always takes his old newspapers or bottles for recycling. “Ah!” she thinks. “There's a newspaper under Harry's bed.”`,
      localMedia: `${localBase}/paragraph-8.avif`,
      r2: `${imageBase}/paragraph-8.avif`,
      imageAlt: "Janey finding the newspaper under Harry's bed.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-9",
      questions: [
        {
          question: "Who does Janey give the recycling box to?",
          options: [
            { option: "She gives it to her mother." },
            {
              option: "She gives it to a worker on the recycling truck.",
              isCorrect: true,
            },
            { option: "She gives it to Harry." },
          ],
        },
        {
          question: "Why does Harry say, 'Oh, no'?",
          options: [
            { option: "Because the recycling truck is late." },
            { option: "Because Janey is in the house." },
            {
              option:
                "Because the newspaper with his painting has gone into the truck.",
              isCorrect: true,
            },
          ],
        },
      ],
      title: "Paragraph 9",
      timestamp: "4:28",
      text: `Janey puts the old newspapers into a black recycling box. She runs from the house and sees the truck. “Wait!” she says. And she quickly gives the box to one of the men. Harry is coming back to the house. He sees the recycling truck, and he sees Janey. “It's Friday!” he says. “The newspaper—! Oh, no!”`,
      localMedia: `${localBase}/paragraph-9.avif`,
      r2: `${imageBase}/paragraph-9.avif`,
      imageAlt: "Janey handing the recycling box to a worker.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-10",
      questions: [
        {
          question: "Why does Harry jump into the recycling truck?",
          options: [
            {
              option: "He jumps in to find the newspaper with his painting.",
              isCorrect: true,
            },
            { option: "He jumps in to help the workers." },
            { option: "He jumps in to hide from the police." },
          ],
        },
        {
          question: "Is it easy to find his newspaper there?",
          options: [
            { option: "Yes, it is easy to find it." },
            {
              option: "No, there are thousands of newspapers in the truck.",
              isCorrect: true,
            },
          ],
        },
      ],
      title: "Paragraph 10",
      timestamp: "5:03",
      text: `Harry chases after the truck. “Wait! Wait!” he says. Janey watches him. “What is he doing?” she thinks. Harry jumps into the back of the truck. “I want my newspaper!” he says. “Where's my newspaper?” But there are thousands of newspapers in the truck.`,
      localMedia: `${localBase}/paragraph-10.avif`,
      r2: `${imageBase}/paragraph-10.avif`,
      imageAlt: "Harry chasing and jumping onto the recycling truck.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-11",
      questions: [
        {
          question: "What does Janey ask Harry?",
          options: [
            { option: "She asks him where he is going." },
            { option: "She asks him about his shoe." },
            {
              option: "She asks him why his newspaper is important.",
              isCorrect: true,
            },
          ],
        },
        {
          question: "What is Harry thinking about?",
          options: [
            { option: "He is thinking about the recycling truck." },
            {
              option: "He is thinking about his million-dollar painting.",
              isCorrect: true,
            },
            { option: "He is thinking about the men from the truck." },
          ],
        },
        {
          question: "Where is Janey looking?",
          options: [
            { option: "She is looking at Harry’s shoe.", isCorrect: true },
            { option: "She is looking at the truck." },
            { option: "She is looking at the house." },
          ],
        },
      ],
      title: "Paragraph 11",
      timestamp: "5:35",
      text: `Janey walks quickly from the house to the truck. “Why is your newspaper important, Harry?” she asks. “It's two days old.” But Harry doesn't hear her. He is thinking, “My million-dollar painting! Where is it?” The men from the recycling truck are watching Harry, too. But now Janey is looking at Harry's shoe.`,
      localMedia: `${localBase}/paragraph-11.avif`,
      r2: `${imageBase}/paragraph-11.avif`,
      imageAlt: "Janey noticing something in Harry's shoe.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-12",
      questions: [
        {
          question: "What does Janey see in Harry's shoe?",
          options: [
            { option: "She sees a piece of newspaper." },
            {
              option: "She sees a piece of blue glass.",
              isCorrect: true,
            },
            { option: "She sees a knife." },
          ],
        },
        {
          question: "Why does it make her suspect Harry?",
          options: [
            { option: "Because Harry is a policeman." },
            { option: "Because Harry works at the art gallery." },
            {
              option:
                "Because the glass may come from the broken vase in the art gallery.",
              isCorrect: true,
            },
          ],
        },
      ],
      title: "Paragraph 12",
      timestamp: "6:06",
      text: `“There's some blue glass in Harry's shoe,” Janey thinks. “Where—? Oh!” Suddenly, she remembers the photo of the blue glass vase on the TV. She looks again at the piece of glass in Harry's shoe. “Is it from the vase in the art gallery?” she thinks. “Is Harry Black the thief?”`,
      localMedia: `${localBase}/paragraph-12.avif`,
      r2: `${imageBase}/paragraph-12.avif`,
      imageAlt: "Janey seeing a piece of blue glass in Harry's shoe.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-13",
      questions: [
        {
          question: "Who does Janey call?",
          options: [
            { option: "She calls the police.", isCorrect: true },
            { option: "She calls her mother." },
            { option: "She calls the men from the recycling truck." },
          ],
        },
        {
          question: "What is Harry still looking for?",
          options: [
            { option: "He is still looking for his bag." },
            {
              option: "He is still looking for his newspaper.",
              isCorrect: true,
            },
          ],
        },
      ],
      title: "Paragraph 13",
      timestamp: "6:37",
      text: `The men from the recycling truck are angry. “We're going now,” they are saying. “We're late.” “But I want my newspaper!” Harry says. In the house, Janey is talking to the police on the telephone. “Maybe I'm wrong,” she is saying. “But there's blue glass in his shoe ... What? ... Yes, he's looking for the newspaper now.”`,
      localMedia: `${localBase}/paragraph-13.avif`,
      r2: `${imageBase}/paragraph-13.avif`,
      imageAlt:
        "Harry arguing with the recycling workers while Janey calls the police.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-14",
      questions: [
        {
          question: "What do the policemen take from Harry's shoe?",
          options: [
            { option: "They take out a newspaper." },
            { option: "They take out some money." },
            { option: "They take out a piece of blue glass.", isCorrect: true },
          ],
        },
        {
          question: "Where did it come from?",
          options: [
            {
              option: "It came from the expensive vase in the art gallery.",
              isCorrect: true,
            },
            { option: "It came from the recycling truck." },
            { option: "It came from Mrs. Allen’s house." },
          ],
        },
      ],
      title: "Paragraph 14",
      timestamp: "7:10",
      text: `Two policemen arrive quickly. “Let's look at your shoe,” they say to Harry. Harry doesn't understand. “What's wrong?” he asks. One of the policemen takes the glass from Harry's shoe. “This is a very expensive piece of glass,” he says. “From a very expensive vase. Remember?” Suddenly, Harry understands. “Oh, no!” he says.`,
      localMedia: `${localBase}/paragraph-14.avif`,
      r2: `${imageBase}/paragraph-14.avif`,
      imageAlt: "A policeman examining the blue glass from Harry's shoe.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-15",
      questions: [
        {
          question: "What do the police find in the truck?",
          options: [
            { option: "They find a knife." },
            { option: "They find the stolen painting.", isCorrect: true },
            { option: "They find a blue vase." },
          ],
        },
        {
          question: "Who gets a reward?",
          options: [
            { option: "Harry gets a reward." },
            { option: "The men from the recycling truck get a reward." },
            { option: "Janey gets a reward.", isCorrect: true },
          ],
        },
        {
          question: "What does Janey want to buy?",
          options: [
            { option: "She wants to buy a painting.", isCorrect: true },
            { option: "She wants to buy a vase." },
            { option: "She wants to buy a newspaper." },
          ],
        },
      ],
      title: "Paragraph 15",
      timestamp: "7:46",
      text: `Police cars and policemen arrive. The men look in the truck for the million-dollar painting. Later, they find the right newspaper — and they find the painting. “Good work, Janey,” one of the policemen says. “And there's a reward.” “Maybe I can buy a painting with the reward!” Janey says. “I like pictures!”`,
      localMedia: `${localBase}/paragraph-15.avif`,
      r2: `${imageBase}/paragraph-15.avif`,
      imageAlt: "Janey speaking with a policeman after Harry is arrested.",
      mediaPosition: "left",
    },
    {
      id: "retell-the-story",
      title: "Retell the Story",
      retell: {
        cards: [
          {
            img: `${imageBase}/paragraph-1.avif`,
            alt: "Harry Black entering the art gallery at night.",
            summary:
              "Harry Black comes into the art gallery at night and sees the painting.",
          },
          {
            img: `${imageBase}/paragraph-2.avif`,
            alt: "Harry cutting the painting from its frame.",
            summary:
              "Harry takes a knife and slowly takes the painting from its frame.",
          },
          {
            img: `${imageBase}/paragraph-3.avif`,
            alt: "Harry standing beside the broken glass vase.",
            summary:
              "Harry walks into a table and the blue glass vase breaks on the floor.",
          },
          {
            img: `${imageBase}/paragraph-4.avif`,
            alt: "Harry carrying the wrapped painting up the stairs.",
            summary:
              "Harry puts the painting in a newspaper and hides it under his bed.",
          },
          {
            img: `${imageBase}/paragraph-5.avif`,
            alt: "Janey recycling bottles while watching the news.",
            summary:
              "Janey puts old bottles in a box and a reporter talks about the painting.",
          },
          {
            img: `${imageBase}/paragraph-6.avif`,
            alt: "Janey remembering that the recycling truck is coming.",
            summary:
              "Mrs. Allen says the recycling truck is coming, so Janey remembers it is Friday.",
          },
          {
            img: `${imageBase}/paragraph-7.avif`,
            alt: "Harry arguing on the telephone.",
            summary:
              "Harry talks on the telephone and asks a man for fifty thousand dollars.",
          },
          {
            img: `${imageBase}/paragraph-8.avif`,
            alt: "Janey finding the newspaper under Harry's bed.",
            summary:
              "Janey finds a newspaper under Harry’s bed and takes it for recycling.",
          },
          {
            img: `${imageBase}/paragraph-9.avif`,
            alt: "Janey handing the recycling box to a worker.",
            summary:
              "Janey gives the box of newspapers to a worker on the recycling truck.",
          },
          {
            img: `${imageBase}/paragraph-10.avif`,
            alt: "Harry chasing and jumping onto the recycling truck.",
            summary:
              "Harry jumps into the recycling truck to look for his newspaper.",
          },
          {
            img: `${imageBase}/paragraph-11.avif`,
            alt: "Janey noticing something in Harry's shoe.",
            summary:
              "Janey asks Harry about his newspaper and then looks at his shoe.",
          },
          {
            img: `${imageBase}/paragraph-12.avif`,
            alt: "Janey seeing a piece of blue glass in Harry's shoe.",
            summary:
              "Janey sees blue glass in Harry’s shoe and thinks he is the thief.",
          },
          {
            img: `${imageBase}/paragraph-13.avif`,
            alt:
              "Harry arguing with the recycling workers while Janey calls the police.",
            summary:
              "Janey calls the police and tells them about the blue glass in Harry’s shoe.",
          },
          {
            img: `${imageBase}/paragraph-14.avif`,
            alt: "A policeman examining the blue glass from Harry's shoe.",
            summary:
              "Two policemen take the blue glass from Harry’s shoe and he understands.",
          },
          {
            img: `${imageBase}/paragraph-15.avif`,
            alt: "Janey speaking with a policeman after Harry is arrested.",
            summary:
              "The police find the painting in the truck and Janey gets a reward.",
          },
        ],
      },
    },
  ] satisfies AudiobookSection[],
};
