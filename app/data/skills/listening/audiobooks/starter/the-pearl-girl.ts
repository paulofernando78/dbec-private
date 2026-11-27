import type { AudiobookSection } from "./a-new-zealand-adventure";

const imageBase = "/media/images/skills/listening/audiobooks/starter/the-pearl-girl";
const localBase =
  "local-media/images/skills/listening/audiobooks/starter/the-pearl-girl";

export const thePearlGirl = {
  slug: "the-pearl-girl",
  title: "The Pearl Girl",
  audio: "",
  sections: [
    {
      id: "summary",
      title: "Summary",
      text: "Kate Grant comes from Canada. She is visiting Europe with her mother and father. One evening she sees two men in a museum. They are taking a very famous picture, Girl with a Pearl Earring. What can Kate do?",
      localMedia: `${localBase}/cover.avif`,
      r2: `${imageBase}/cover.avif`,
      imageAlt: "Cover of The Pearl Girl.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-1",
      questions: [
        {
          question: "Where is Kate visiting?",
          options: [
            { option: "She is visiting a museum in Amsterdam." },
            {
              option: "She is visiting a museum in The Hague.",
              isCorrect: true,
            },
            { option: "She is visiting a museum in Paris." },
          ],
        },
        {
          question: "Who is with her?",
          options: [
            { option: "Her mother and father are with her.", isCorrect: true },
            { option: "Her friends from Canada are with her." },
            { option: "Her brother is with her." },
          ],
        },
        {
          question: "What time is it?",
          options: [
            { option: "It is 4:15." },
            { option: "It is 5:40." },
            { option: "It is 4:45.", isCorrect: true },
          ],
        },
      ],
      title: "Paragraph 1",
      text: `Kate Grant is fifteen and comes from Canada. She is visiting the Netherlands with her mother and father. On June 8th, the Grants are at a museum in The Hague. “This is very good,” Mr. Grant says. He is looking at a picture of an old man. “Yes,” Mrs. Grant says. “What do you think, Kate?” “It's OK,” Kate says. She looks at her watch. It is 4:45.`,
      localMedia: `${localBase}/paragraph-1.avif`,
      r2: `${imageBase}/paragraph-1.avif`,
      imageAlt: "Kate and her parents visiting a museum in The Hague.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-2",
      questions: [
        {
          question: "Which painting does Kate see?",
          options: [
            { option: "She sees a picture of an old man." },
            {
              option: "She sees Girl with a Pearl Earring.",
              isCorrect: true,
            },
            { option: "She sees a picture of a boat." },
          ],
        },
        {
          question: "Why does she like it?",
          options: [
            {
              option: "She loves earrings and thinks the picture is beautiful.",
              isCorrect: true,
            },
            { option: "She loves the old man in the picture." },
            { option: "She thinks the picture is very old." },
          ],
        },
      ],
      title: "Paragraph 2",
      timestamp: "0:50",
      text: `Two minutes later she sees a picture of a young girl with an earring. Kate smiles. She loves earrings. She looks at the girl's face. “Who are you?” she thinks. “What are you looking at?” “That's a very famous picture,” Mrs. Grant says. A sign next to it says, “Girl with a Pearl Earring.” “It's beautiful,” Kate says.`,
      localMedia: `${localBase}/paragraph-2.avif`,
      r2: `${imageBase}/paragraph-2.avif`,
      imageAlt: "Kate looking at Girl with a Pearl Earring.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-3",
      questions: [
        {
          question: "Where is Mr. Grant's passport?",
          options: [
            {
              option: "It is in his guidebook on a chair near the painting.",
              isCorrect: true,
            },
            { option: "It is in his coat pocket near the door." },
            { option: "It is in his bag at the café." },
          ],
        },
        {
          question: "Who goes back to find it?",
          options: [
            { option: "Mrs. Grant goes back to find it." },
            { option: "Mr. Grant goes back to find it." },
            { option: "Kate goes back to find it.", isCorrect: true },
          ],
        },
      ],
      title: "Paragraph 3",
      timestamp: "1:33",
      text: `At 4:58 the Grants are drinking coffee near the museum. “Julia, do you have the guidebook?” Mr. Grant asks. “No, Carl. You have it,” Mrs. Grant says. They look for the guidebook in their bags, then Mr. Grant says, “Oh no, I remember now. It's on a chair near Girl with a Pearl Earring. My passport is in that book!” Kate gets up quickly. “Stay here,” she says. “I can find it.”`,
      localMedia: `${localBase}/paragraph-3.avif`,
      r2: `${imageBase}/paragraph-3.avif`,
      imageAlt: "The Grants realizing the guidebook is inside the museum.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-4",
      questions: [
        {
          question: "Why does Kate ask to enter the museum?",
          options: [
            { option: "She wants to look at the paintings again." },
            { option: "She wants to find her mother's bag." },
            {
              option: "She wants to find her father's passport.",
              isCorrect: true,
            },
          ],
        },
        {
          question: "Who lets her inside?",
          options: [
            {
              option: "The guard, Paul Van Dyck, lets her inside.",
              isCorrect: true,
            },
            { option: "A policeman lets her inside." },
            { option: "A woman at the door lets her inside." },
          ],
        },
      ],
      title: "Paragraph 4",
      timestamp: "2:26",
      text: `Kate runs to the museum. A guard is closing the door. “Stop!” Kate says. “My father's passport is in the museum.” “I'm sorry, but we close at five o'clock,” the guard says. A sign on his shirt says, “Paul Van Dyck.” “Please,” Kate says. “It's very important.” The guard looks at his watch, then at Kate. “OK,” he says and smiles. “Come with me.”`,
      localMedia: `${localBase}/paragraph-4.avif`,
      r2: `${imageBase}/paragraph-4.avif`,
      imageAlt: "Kate asking Paul Van Dyck to let her into the museum.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-5",
      questions: [
        {
          question: "Where does Kate say the passport is?",
          options: [
            { option: "She says it is in the museum shop." },
            {
              option:
                "She says it is on a chair near the picture of the girl with an earring.",
              isCorrect: true,
            },
            { option: "She says it is in the dark room at the back." },
          ],
        },
        {
          question: "What does Paul hear?",
          options: [
            { option: "He hears voices.", isCorrect: true },
            { option: "He hears a gunshot." },
            { option: "He hears a car in the street." },
          ],
        },
      ],
      title: "Paragraph 5",
      timestamp: "3:14",
      text: `Kate goes into the museum with Paul Van Dyck. It is dark and there aren't any people in the rooms. “Where is the passport?” Paul asks. “Do you know?” “Yes. It's on a chair near that picture of a girl with an earring,” Kate says. They walk for a minute, then Paul Van Dyck stops. “Shh!” he says. “I can hear voices.”`,
      localMedia: `${localBase}/paragraph-5.avif`,
      r2: `${imageBase}/paragraph-5.avif`,
      imageAlt: "Kate and Paul hearing voices inside the dark museum.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-6",
      questions: [
        {
          question: "What is the tall man carrying?",
          options: [
            { option: "He is carrying a big black bag.", isCorrect: true },
            { option: "He is carrying a gun." },
            { option: "He is carrying a phone." },
          ],
        },
        {
          question: "Who has a gun?",
          options: [
            { option: "The tall man has a gun." },
            { option: "Paul has a gun." },
            { option: "The short man has a gun.", isCorrect: true },
          ],
        },
      ],
      title: "Paragraph 6",
      timestamp: "3:56",
      text: `Kate looks at Paul. He isn't smiling now. Then she hears voices, too. “Be very, very quiet,” Paul says. He takes a phone from his coat pocket, but suddenly there are two men in the room. One is tall and has a big, black bag in his hands. The short man has a gun. They look at Kate and Paul. Kate and Paul look at the men. Time stops.`,
      localMedia: `${localBase}/paragraph-6.avif`,
      r2: `${imageBase}/paragraph-6.avif`,
      imageAlt: "Kate and Paul confronting two thieves in the museum.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-7",
      questions: [
        {
          question: "What happens to Paul?",
          options: [
            { option: "He falls and hurts his arm." },
            { option: "He runs away from the thieves." },
            { option: "He is shot in the leg.", isCorrect: true },
          ],
        },
        {
          question: "How does Kate feel?",
          options: [
            { option: "She feels very angry." },
            { option: "She feels very scared.", isCorrect: true },
            { option: "She feels calm and happy." },
          ],
        },
      ],
      title: "Paragraph 7",
      timestamp: "4:45",
      text: `“Put your phone on the floor,” the short man says. “Now!” His voice is cold. “No,” Paul says. Suddenly there is a bang! Paul falls down and says, “My leg!” Kate looks at him. “Get the girl,” says the tall man. The short man puts his cold hand across Kate's mouth. She is very scared. “Come with us,” he says.`,
      localMedia: `${localBase}/paragraph-7.avif`,
      r2: `${imageBase}/paragraph-7.avif`,
      imageAlt: "The thieves taking Kate after Paul is injured.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-8",
      questions: [
        {
          question: "What is inside the black bag?",
          options: [
            {
              option: "Girl with a Pearl Earring is inside the bag.",
              isCorrect: true,
            },
            { option: "A gun is inside the bag." },
            { option: "Some money is inside the bag." },
          ],
        },
        {
          question: "Which city are the thieves driving toward?",
          options: [
            { option: "They are driving toward The Hague." },
            { option: "They are driving toward Rotterdam." },
            { option: "They are driving toward Amsterdam.", isCorrect: true },
          ],
        },
      ],
      title: "Paragraph 8",
      timestamp: "5:32",
      text: `A minute later Kate and the thieves are in a small street behind the museum. They get into a car, and the tall thief drives very quickly for thirty minutes. The men don't talk. Kate is on the floor. She can see a picture in the black bag. It is Girl with a Pearl Earring. “Where are we going?” she thinks. Then she looks up and sees a sign. It says, “Amsterdam 10.”`,
      localMedia: `${localBase}/paragraph-8.avif`,
      r2: `${imageBase}/paragraph-8.avif`,
      imageAlt: "Kate inside the thieves' car with the stolen painting.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-9",
      questions: [
        {
          question: "What is the boat called?",
          options: [
            { option: "The boat is called the Sea Girl." },
            { option: "The boat is called the Black Dog.", isCorrect: true },
            { option: "The boat is called the Pearl." },
          ],
        },
        {
          question: "Why does Kate smile even though she is scared?",
          options: [
            {
              option:
                "She smiles because the thief orders her to, and the gun is at her back.",
              isCorrect: true,
            },
            { option: "She smiles because she sees her mother." },
            { option: "She smiles because she is happy to leave the museum." },
          ],
        },
      ],
      title: "Paragraph 9",
      timestamp: "6:27",
      text: `At 5:40 the car stops. “Get up,” the short thief says. His voice is very quiet. He opens the car door. The gun is under his coat. “Smile,” he says. Kate is scared but she smiles. There are people in the street. She can see a boat. Its name is the Black Dog. The cold gun is next to her back. The tall thief is behind them with his black bag.`,
      localMedia: `${localBase}/paragraph-9.avif`,
      r2: `${imageBase}/paragraph-9.avif`,
      imageAlt: "The thieves forcing Kate toward the Black Dog.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-10",
      questions: [
        {
          question: "Where do the thieves lock Kate?",
          options: [
            { option: "They lock her in the boat's bedroom." },
            { option: "They lock her in the museum." },
            { option: "They lock her in the boat's kitchen.", isCorrect: true },
          ],
        },
        {
          question: "Why do they want to contact her family?",
          options: [
            { option: "They want to say sorry to her family." },
            {
              option: "They want money in return for Kate.",
              isCorrect: true,
            },
            { option: "They want her family to bring the guidebook." },
          ],
        },
      ],
      title: "Paragraph 10",
      timestamp: "7:18",
      text: `“Sit down and be quiet!” says the short thief. They are in the Black Dog's kitchen. It has one small window. Kate sits on a chair, and the men close the door and go. Later, Kate hears their voices. “What do we do now?” the short man says. “We send a note to her family,” the tall thief answers. “They want the girl back. We want money. It isn't difficult.”`,
      localMedia: `${localBase}/paragraph-10.avif`,
      r2: `${imageBase}/paragraph-10.avif`,
      imageAlt: "Kate being held in the kitchen of the Black Dog.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-11",
      questions: [
        {
          question: "What does Kate write?",
          options: [
            {
              option: "She writes a note asking someone to call the police.",
              isCorrect: true,
            },
            { option: "She writes a letter to her mother." },
            { option: "She writes a list of the thieves' names." },
          ],
        },
        {
          question: "How does she send her message?",
          options: [
            { option: "She gives the note to a woman in the street." },
            { option: "She calls the police with Paul's phone." },
            {
              option: "She puts it in a bottle and throws it into the canal.",
              isCorrect: true,
            },
          ],
        },
      ],
      title: "Paragraph 11",
      timestamp: "8:11",
      text: `Kate is very scared. She looks around the kitchen. Suddenly, she sees a ship in a bottle. There is a pen next to it. Quickly she writes a note. It says: “I'm on the Black Dog with two thieves. They have Girl with a Pearl Earring. Call the police! My name is Kate Grant.” Then she puts her note in the bottle. She opens the small window and throws the bottle into the canal.`,
      localMedia: `${localBase}/paragraph-11.avif`,
      r2: `${imageBase}/paragraph-11.avif`,
      imageAlt: "Kate putting her message inside a bottle.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-12",
      questions: [
        {
          question: "Who finds the bottle?",
          options: [
            { option: "A policeman finds the bottle." },
            { option: "An old man finds the bottle.", isCorrect: true },
            { option: "A woman in a boat finds the bottle." },
          ],
        },
        {
          question: "Who does he call?",
          options: [
            { option: "He calls the police.", isCorrect: true },
            { option: "He calls the museum." },
            { option: "He calls Kate's family." },
          ],
        },
      ],
      title: "Paragraph 12",
      timestamp: "9:04",
      text: `At 9:15 that evening the bottle is a kilometre from the Black Dog. An old man is walking next to the canal. He stops. “A ship in a bottle!” he thinks. “That's interesting.” He picks the bottle out of the water. Then he sees Kate's note and reads it. “Thieves!” he thinks. “This is important.” He makes a call. “Hello? Police?” he says. He is talking very quickly. “Listen to this.”`,
      localMedia: `${localBase}/paragraph-12.avif`,
      r2: `${imageBase}/paragraph-12.avif`,
      imageAlt: "An old man finding Kate's bottle in the canal.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-13",
      questions: [
        {
          question: "Who arrives on the Black Dog?",
          options: [
            { option: "Two policemen arrive on the boat." },
            { option: "The museum's director arrives on the boat." },
            {
              option: "Three policemen and two policewomen arrive on the boat.",
              isCorrect: true,
            },
          ],
        },
        {
          question: "What happens to Kate?",
          options: [
            { option: "The thieves take her to Amsterdam." },
            { option: "The police rescue her.", isCorrect: true },
            { option: "She escapes from the boat alone." },
          ],
        },
      ],
      title: "Paragraph 13",
      timestamp: "10:04",
      text: `At 11:25 Kate is trying to sleep in the Black Dog's kitchen. Suddenly her eyes open. She can hear a woman's voice. “Police!” the woman says. “Put the gun on the floor. That's right. Now put your hands on your head. Quickly!” Then the kitchen door opens. Kate sees three policemen and two policewomen. “It's OK,” one of the policemen says. “We're here now.”`,
      localMedia: `${localBase}/paragraph-13.avif`,
      r2: `${imageBase}/paragraph-13.avif`,
      imageAlt: "Police rescuing Kate from the Black Dog.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-14",
      questions: [
        {
          question: "Who thanks Kate?",
          options: [
            {
              option: "The museum's director thanks her.",
              isCorrect: true,
            },
            { option: "Paul Van Dyck thanks her." },
            { option: "A TV reporter thanks her." },
          ],
        },
        {
          question: "What gift does she receive?",
          options: [
            { option: "She receives a guidebook." },
            { option: "She receives a picture of the girl." },
            { option: "She receives two pearl earrings.", isCorrect: true },
          ],
        },
      ],
      title: "Paragraph 14",
      timestamp: "10:58",
      text: `Two days later Kate is in The Hague again with her mother and father. Some TV people are there, too. The museum's director and Paul Van Dyck are standing next to her. The director smiles. “Thank you very much, Kate,” he says. Then he gives her a small bag. Kate opens it and smiles. In the bag, there are two beautiful pearl earrings.`,
      localMedia: `${localBase}/paragraph-14.avif`,
      r2: `${imageBase}/paragraph-14.avif`,
      imageAlt: "Kate receiving pearl earrings from the museum director.",
      mediaPosition: "left",
    },
    {
      id: "retell-the-story",
      title: "Retell the Story",
      retell: {
        cards: [
          {
            img: `${imageBase}/paragraph-1.avif`,
            alt: "Kate and her parents visiting a museum in The Hague.",
            summary: "Kate and her parents visit a museum in The Hague.",
          },
          {
            img: `${imageBase}/paragraph-2.avif`,
            alt: "Kate looking at Girl with a Pearl Earring.",
            summary:
              "Kate sees Girl with a Pearl Earring and thinks it is beautiful.",
          },
          {
            img: `${imageBase}/paragraph-3.avif`,
            alt: "The Grants realizing the guidebook is inside the museum.",
            summary:
              "Mr. Grant remembers his passport is in the guidebook at the museum.",
          },
          {
            img: `${imageBase}/paragraph-4.avif`,
            alt: "Kate asking Paul Van Dyck to let her into the museum.",
            summary: "The guard lets Kate go into the museum with him.",
          },
          {
            img: `${imageBase}/paragraph-5.avif`,
            alt: "Kate and Paul hearing voices inside the dark museum.",
            summary: "Kate and Paul walk in the dark museum and hear voices.",
          },
          {
            img: `${imageBase}/paragraph-6.avif`,
            alt: "Kate and Paul confronting two thieves in the museum.",
            summary: "Kate and Paul see two men with a black bag and a gun.",
          },
          {
            img: `${imageBase}/paragraph-7.avif`,
            alt: "The thieves taking Kate after Paul is injured.",
            summary:
              "The short man shoots Paul’s leg and the thieves take Kate.",
          },
          {
            img: `${imageBase}/paragraph-8.avif`,
            alt: "Kate inside the thieves' car with the stolen painting.",
            summary: "The thieves drive Kate away in a car toward Amsterdam.",
          },
          {
            img: `${imageBase}/paragraph-9.avif`,
            alt: "The thieves forcing Kate toward the Black Dog.",
            summary: "The thieves take Kate to a boat called the Black Dog.",
          },
          {
            img: `${imageBase}/paragraph-10.avif`,
            alt: "Kate being held in the kitchen of the Black Dog.",
            summary:
              "The thieves lock Kate in the boat’s kitchen and want money.",
          },
          {
            img: `${imageBase}/paragraph-11.avif`,
            alt: "Kate putting her message inside a bottle.",
            summary:
              "Kate puts a note in a bottle and throws it into the canal.",
          },
          {
            img: `${imageBase}/paragraph-12.avif`,
            alt: "An old man finding Kate's bottle in the canal.",
            summary: "An old man finds Kate’s bottle and calls the police.",
          },
          {
            img: `${imageBase}/paragraph-13.avif`,
            alt: "Police rescuing Kate from the Black Dog.",
            summary: "The police arrive on the boat and rescue Kate.",
          },
          {
            img: `${imageBase}/paragraph-14.avif`,
            alt: "Kate receiving pearl earrings from the museum director.",
            summary: "The museum director gives Kate two pearl earrings.",
          },
        ],
      },
    },
  ] satisfies AudiobookSection[],
};
