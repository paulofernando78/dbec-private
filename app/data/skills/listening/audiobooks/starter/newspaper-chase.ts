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
      questions: ["Where is Harry Black?", "What does he see?", "Why is he there?"],
      answers: ["At the Ritesville town art gallery.", "A painting.", "To steal the painting."],
      title: "Paragraph 1",
      text: `The time is one o'clock in the morning. The place is the Ritesville town art gallery. A window opens and a man comes in. His name is Harry Black, and he is a thief. It is dark in the art gallery, but Harry has a light. He looks across the room at a painting. “There it is!” he says.`,
      localMedia: `${localBase}/paragraph-1.avif`,
      r2: `${imageBase}/paragraph-1.avif`,
      imageAlt: "Harry Black entering the art gallery at night.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-2",
      questions: ["What does Harry use to remove the painting from its frame?"],
      answers: ["A knife."],
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
      questions: ["What does Harry break?", "Does he stop after breaking it?"],
      answers: ["A blue glass vase.", "No. He runs to the window."],
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
      questions: ["Where does Harry live?", "Where does he hide the painting?"],
      answers: ["In Mrs. Allen's rooming house.", "In a newspaper under his bed."],
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
      questions: ["What is Janey recycling?", "What is the TV reporter talking about?"],
      answers: ["Old bottles.", "The stolen million-dollar painting."],
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
      questions: ["What happened to the blue vase?", "Why does Janey remember that it is Friday?"],
      answers: ["Harry broke it into a hundred pieces.", "The newspaper recycling truck comes on Fridays."],
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
      questions: ["Who is Harry talking to?", "Why isn't he happy with the man's offer?"],
      answers: ["A man in Seattle.", "The man offers $5,000, but Harry wants $50,000."],
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
      questions: ["What is Janey looking for?", "What does she find under Harry's bed?"],
      answers: ["Old newspapers.", "A newspaper with the painting inside."],
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
      questions: ["Who does Janey give the recycling box to?", "Why does Harry say, 'Oh, no'?"],
      answers: ["A worker on the recycling truck.", "The newspaper hiding his painting has gone into the truck."],
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
      questions: ["Why does Harry jump into the recycling truck?", "Is it easy to find his newspaper there?"],
      answers: ["To find the newspaper hiding his painting.", "No. There are thousands of newspapers."],
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
      questions: ["What does Janey ask Harry?", "What is Harry thinking about?", "Where is Janey looking?"],
      answers: ["Why his newspaper is important.", "His million-dollar painting.", "At Harry's shoe."],
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
      questions: ["What does Janey see in Harry's shoe?", "Why does it make her suspect Harry?"],
      answers: ["A piece of blue glass.", "It may come from the broken vase in the art gallery."],
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
      questions: ["Who does Janey call?", "What is Harry still looking for?"],
      answers: ["The police.", "His newspaper."],
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
      questions: ["What do the policemen take from Harry's shoe?", "Where did it come from?"],
      answers: ["A piece of blue glass.", "The expensive vase in the art gallery."],
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
      questions: ["What do the police find in the truck?", "Who gets a reward?", "What does Janey want to buy?"],
      answers: ["The stolen painting.", "Janey.", "A painting."],
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
      text: "Look at each picture and retell that part of the story. Use complete sentences and follow the pictures in order.",
      retell: {
        instruction: "Flip the cards and retell the story.",
        cards: [
          {
            img: `${imageBase}/paragraph-1.avif`,
            alt: "Harry Black entering the art gallery at night.",
            summary:
              "At one o’clock in the morning, Harry Black comes into the Ritesville town art gallery. He is a thief, and he sees the painting across the room.",
          },
          {
            img: `${imageBase}/paragraph-2.avif`,
            alt: "Harry cutting the painting from its frame.",
            summary:
              "Harry takes out a knife and very slowly takes the painting from its frame. He does not understand it, but he thinks it is worth a million dollars.",
          },
          {
            img: `${imageBase}/paragraph-3.avif`,
            alt: "Harry standing beside the broken glass vase.",
            summary:
              "Harry walks into a table and a beautiful blue glass vase breaks into a hundred pieces. He smiles and runs to the window.",
          },
          {
            img: `${imageBase}/paragraph-4.avif`,
            alt: "Harry carrying the wrapped painting up the stairs.",
            summary:
              "Harry goes quietly up to his room in Mrs. Allen’s rooming house. He puts the painting in a newspaper and hides the newspaper under his bed.",
          },
          {
            img: `${imageBase}/paragraph-5.avif`,
            alt: "Janey recycling bottles while watching the news.",
            summary:
              "In the morning, Janey is putting old bottles into a box in the kitchen. On the TV, a reporter is talking about the million-dollar painting.",
          },
          {
            img: `${imageBase}/paragraph-6.avif`,
            alt: "Janey remembering that the recycling truck is coming.",
            summary:
              "The reporter says the blue vase is in a hundred pieces now. Mrs. Allen says the newspaper recycling truck is coming today, and Janey remembers it is Friday.",
          },
          {
            img: `${imageBase}/paragraph-7.avif`,
            alt: "Harry arguing on the telephone.",
            summary:
              "Harry is talking on the telephone to a man in Seattle. The man offers five thousand dollars for the painting, but Harry wants fifty thousand.",
          },
          {
            img: `${imageBase}/paragraph-8.avif`,
            alt: "Janey finding the newspaper under Harry's bed.",
            summary:
              "Janey takes the old newspapers from every room in the house. In Harry’s room, she sees a newspaper under his bed and takes it for recycling.",
          },
          {
            img: `${imageBase}/paragraph-9.avif`,
            alt: "Janey handing the recycling box to a worker.",
            summary:
              "Janey puts the newspapers into a black box and quickly gives it to a man on the recycling truck. Harry sees her and says, “It’s Friday! Oh, no!”",
          },
          {
            img: `${imageBase}/paragraph-10.avif`,
            alt: "Harry chasing and jumping onto the recycling truck.",
            summary:
              "Harry chases the truck and jumps into the back. He wants his newspaper, but there are thousands of newspapers in the truck.",
          },
          {
            img: `${imageBase}/paragraph-11.avif`,
            alt: "Janey noticing something in Harry's shoe.",
            summary:
              "Janey asks Harry why his newspaper is important, but he does not hear her. He is thinking about his painting, and Janey looks at his shoe.",
          },
          {
            img: `${imageBase}/paragraph-12.avif`,
            alt: "Janey seeing a piece of blue glass in Harry's shoe.",
            summary:
              "Janey sees a piece of blue glass in Harry’s shoe. She remembers the vase in the art gallery and thinks that Harry Black is the thief.",
          },
          {
            img: `${imageBase}/paragraph-13.avif`,
            alt:
              "Harry arguing with the recycling workers while Janey calls the police.",
            summary:
              "The men from the recycling truck are angry because they are late. In the house, Janey calls the police and tells them about the blue glass.",
          },
          {
            img: `${imageBase}/paragraph-14.avif`,
            alt: "A policeman examining the blue glass from Harry's shoe.",
            summary:
              "Two policemen look at Harry’s shoe and take out the glass. They say the glass is from a very expensive vase, and Harry understands.",
          },
          {
            img: `${imageBase}/paragraph-15.avif`,
            alt: "Janey speaking with a policeman after Harry is arrested.",
            summary:
              "The police find the newspaper with the painting inside the truck. A policeman says there is a reward, so Janey wants to buy a painting with the money.",
          },
        ],
      },
    },
  ] satisfies AudiobookSection[],
};
