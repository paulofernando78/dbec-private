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
  mediaPosition?: "left" | "right" | "top" | "bottom";
  localAudio?: string;
  r2Audio?: string;
  title: string;
  timestamp?: string;
  text: string | readonly AudiobookBlock[];
  questions?: readonly string[];
  answers?: readonly string[];
};

const imageBase =
  "/media/images/skills/listening/audiobooks/beginner/marcel-and-the-shakespeare-letters";

export const marcelAndTheShakespeareLetters = {
  slug: "marcel-and-the-shakespeare-letters",
  title: "Marcel and the Shakespeare Letters",
  audio: "",
  sections: [
    {
      id: "summary",
      localMedia: `local-media/images/skills/listening/audiobooks/beginner/marcel-and-the-shakespeare-letters/cover.avif`,
      r2: `${imageBase}/cover.avif`,
      imageAlt: "Cover of Marcel and the Shakespeare Letters.",
      mediaPosition: "left",
      title: "Summary",
      text: "...",
    },
    {
      id: "page-1",
      localMedia: `local-media/images/skills/listening/audiobooks/beginner/marcel-and-the-shakespeare-letters/page-1.avif`,
      r2: `${imageBase}/page-1.avif`,
      imageAlt: "",
      mediaPosition: "left",
      title: "Page 1",
      text: [
        {
          text: "Marcel is a French mouse. He’s a detective and he lives in Paris. But Marcel doesn’t live in Paris all year. Every November he visits London. His old friend - Henry - has a small flat there.",
        },
        {
          text: "Marcel loves London. The beautiful buildings . . . the big, black taxis . . . the museums and shops. He loves Paris, but he loves London too.",
        },
        {
          text: "This story is about one of Marcel’s November holidays. It starts at three o’clock on a Tuesday afternoon. Marcel is walking from Knightsbridge station to Henry’s flat. He has two heavy bags with him.",
        },
      ],
      questions: [
        "What is Marcel’s job, where does he live, and when does he visit London?",
        "What does Marcel love in London, and what is he doing at three o’clock on a Tuesday afternoon?",
      ],
      answers: [
        "He is a detective who lives in Paris and visits London every November.",
        "He loves the beautiful buildings, the big, black taxis, and the museums and shops, and he is walking from Knightsbridge station to Henry’s flat with two heavy bags.",
      ],
    },
    {
      id: "page-2",
      localMedia: `local-media/images/skills/listening/audiobooks/beginner/marcel-and-the-shakespeare-letters/page-2.avif`,
      r2: `${imageBase}/page-2.avif`,
      imageAlt: "",
      mediaPosition: "left",
      title: "Page 2",
      text: [
        {
          text: "Henry’s address is 42 Old Wilton Street. Marcel looks at the numbers - 36 - 38 - 40. Yes, here it is. Number 42.",
        },
        {
          text: "He sees a sign. It says: “Professor J. T. Barton”. Marcel looks at it and thinks, “That’s new.” Then he goes down to Henry’s flat.",
        },
        {
          text: "Henry opens the door and smiles.",
        },
        {
          text: "“Marcel!” he says. “Come in, come in!”",
        },
        {
          text: "“Hello, Henry,” Marcel says. “How are you?” (His English is very good.)",
        },
        {
          text: "“I’m very well. And you?”",
        },
        {
          text: "“Yes, thanks.”",
        },
        {
          text: "“Good, good.” Henry takes Marcel’s coat. “Now,” he says, “let’s have some tea.”",
        },
      ],
      questions: [
        "What is Henry’s address, and what name is on the new sign?",
        "What does Henry take from Marcel, and what does he suggest they have?",
      ],
      answers: [
        "Henry’s address is 42 Old Wilton Street, and the sign says “Professor J. T. Barton”.",
        "He takes Marcel’s coat and suggests having some tea.",
      ],
    },
    {
      id: "page-3",
      localMedia: `local-media/images/skills/listening/audiobooks/beginner/marcel-and-the-shakespeare-letters/page-3.avif`,
      r2: `${imageBase}/page-3.avif`,
      imageAlt: "",
      mediaPosition: "left",
      title: "Page 3",
      text: [
        {
          text: "The two friends sit in big chairs. They drink tea and talk.",
        },
        {
          text: "At five o’clock Marcel says, “There’s a new person in number 42. What’s his name? Burton? Barnam?”",
        },
        {
          text: "“Barton,” Henry says. “Professor Barton. He’s very, very clever. And that’s not all. After tomorrow he’s going to be famous, too!”",
        },
        {
          text: "“Famous?!” Marcel looks at his English friend. “Why?”",
        },
        {
          text: "“It’s a very interesting story,” Henry says. “He has some letters. They were under the floor of an old woman’s house in Oxford.”",
        },
        {
          text: "“And . . . ?” Marcel says.",
        },
        {
          text: "“And they’re from Shakespeare to his son,” Henry says.",
        },
        {
          text: "“Shakespeare!”",
        },
        {
          text: "“Yes.” Henry smiles. “Shakespeare. The old lady telephoned Professor Barton, and the Professor visited her. They talked about the letters and she said, “I want to give them to the British Museum in London. Can you do that for me?””",
        },
      ],
      questions: [
        "Where were the letters found, and who were they from?",
        "Where does the old woman want to give the letters?",
      ],
      answers: [
        "They were found under the floor of an old woman’s house in Oxford, and they are from Shakespeare to his son.",
        "She wants to give them to the British Museum in London.",
      ],
    },
    {
      id: "page-4",
      localMedia: `local-media/images/skills/listening/audiobooks/beginner/marcel-and-the-shakespeare-letters/page-4.avif`,
      r2: `${imageBase}/page-4.avif`,
      imageAlt: "",
      mediaPosition: "left",
      title: "Page 4",
      text: [
        {
          text: "“And Professor Barton said yes?”",
        },
        {
          text: "“That’s right.”",
        },
        {
          text: "“Where are the letters now?” Marcel asks.",
        },
        {
          text: "“In the professor’s flat. He’s going to give them to the British Museum tomorrow morning at ten o’clock. A lot of journalists and TV people are going to be there.”",
        },
        {
          text: "Suddenly there’s a big BANG! and then a long WHIZZZ!",
        },
        {
          text: "“What’s that noise?” Marcel asks. He goes to the window. Then he remembers. “Oh - fireworks. Of course, it’s the 5th of November - your “Guy Fawkes Day”.”",
        },
        {
          text: "Then a man walks down the steps from 42 Old Wilton Street.",
        },
        {
          text: "Marcel looks at him. “Is that Professor Barton?” he asks.",
        },
        {
          text: "“Yes,” Henry answers. “He always goes to the cinema on Tuesday evenings.”",
        },
        {
          text: "“Aha!” Marcel says.",
        },
        {
          text: "“Why do you say “Aha!”?” Henry looks at his French friend. Then suddenly he understands. “Oh, you want to look at the Shakespeare letters.” He smiles. “OK. Why not?”",
        },
      ],
      questions: [
        "When is Professor Barton going to give the letters to the British Museum, and what day is it?",
        "Where does Professor Barton always go on Tuesday evenings?",
      ],
      answers: [
        "He is going to give them tomorrow morning at ten o’clock, and it is the 5th of November (Guy Fawkes Day).",
        "He always goes to the cinema on Tuesday evenings.",
      ],
    },
    {
      id: "page-5",
      localMedia: `local-media/images/skills/listening/audiobooks/beginner/marcel-and-the-shakespeare-letters/page-5.avif`,
      r2: `${imageBase}/page-5.avif`,
      imageAlt: "",
      mediaPosition: "left",
      title: "Page 5",
      text: [
        {
          text: "After tea the two mice visit Professor Barton’s flat. There’s a small hole near the front door. Henry stops in front of it.",
        },
        {
          text: "“Here we are,” he says. “Do you want to go in first?”",
        },
        {
          text: "“No, no. After you,” Marcel says.",
        },
        {
          text: "At 5.55 they’re in the professor’s flat. It’s very big, with a lot of old chairs and books. There are some beautiful pictures, too.",
        },
        {
          text: "“Come with me,” Henry says.",
        },
        {
          text: "He walks across the floor. Then he starts to climb a very tall bookcase. Marcel is behind him. They go up and up and up for a long time. Then Marcel sits on Charles Dickens’s book, Little Dorrit. He can hear a lot of fireworks in the street.",
        },
        {
          text: "“BANG! BANG! BANG!” they go. “WHEEE! POW! WHOOSH!”",
        },
        {
          text: "There’s a small, white button in the bookcase. Henry smiles at Marcel, and presses it. Suddenly, some of the books start to move.",
        },
        {
          text: "“Why are they moving?” Marcel says. Then he understands. “Ah, I understand. There’s a safe.”",
        },
      ],
      questions: [
        "Which book does Marcel sit on, and what does Henry press in the bookcase?",
        "What does Marcel understand when some of the books start to move?",
      ],
      answers: [
        "He sits on Charles Dickens’s book, Little Dorrit, and Henry presses a small, white button in the bookcase.",
        "He understands that there is a safe.",
      ],
    },
    {
      id: "page-6",
      localMedia: `local-media/images/skills/listening/audiobooks/beginner/marcel-and-the-shakespeare-letters/page-6.avif`,
      r2: `${imageBase}/page-6.avif`,
      imageAlt: "",
      mediaPosition: "left",
      title: "Page 6",
      text: [
        {
          text: "“Yes,” Henry says. “Now, you stay here. I’m going to open it.”",
        },
        {
          text: "He takes some blue paper from his jeans. Then he climbs down to the safe. There are some numbers on the paper. He starts to read them. “55 - 14 - 62 - 29 - 8. Yes, that’s right.”",
        },
        {
          text: "After that, he puts his hands on the safe and moves the dial to the left. “55,” he says. Then he moves the dial to the right. “14.”",
        },
        {
          text: "Suddenly there’s a very, very big BANG!!!",
        },
        {
          text: "“Wow!” Marcel says. “That was a big firework.”",
        },
        {
          text: "Henry doesn’t stop. “62,” he says. “29. And . . . ” He moves the dial again. “. . . 8. There - that’s it.”",
        },
        {
          text: "He smiles at Marcel and opens the safe. But then suddenly his mouth falls open.",
        },
        {
          text: "“Oh no!” he says.",
        },
        {
          text: "“What’s wrong?” Marcel asks.",
        },
        {
          text: "“They’re not here,” Henry says. “The Shakespeare letters. They’re not here!”",
        },
      ],
      questions: [
        "What are the five numbers on the blue paper, and where does Henry get them from?",
        "What does Henry discover when he opens the safe?",
      ],
      answers: [
        "The numbers are 55 - 14 - 62 - 29 - 8, and Henry takes the blue paper from his jeans.",
        "He discovers that the Shakespeare letters are not in the safe.",
      ],
    },
    {
      id: "page-7",
      localMedia: `local-media/images/skills/listening/audiobooks/beginner/marcel-and-the-shakespeare-letters/page-7.avif`,
      r2: `${imageBase}/page-7.avif`,
      imageAlt: "",
      mediaPosition: "left",
      title: "Page 7",
      text: [
        {
          text: "Marcel climbs down the bookcase and looks. His friend is right. The letters aren’t in the safe. But that’s not all. There’s a big hole at the back of the safe, and a lot of smoke, too.",
        },
        {
          text: "Marcel looks at Henry. Henry looks at Marcel. Then they climb into the safe.",
        },
        {
          text: "“Look,” Marcel says. He can see a room in number 40 Old Wilton Street. He can see a person, too - a tall woman in a red dress. She’s sitting at a table and talking on the telephone.",
        },
        {
          text: "“Do you think . . . ?” Henry starts.",
        },
        {
          text: "“Ssshh,” Marcel says. The two mice sit and listen.",
        },
        {
          text: "“That’s right,” the woman says. “I’m going to New York. Yes, this evening.” She writes on a notepad. “Thank you.” She puts down the telephone.",
        },
        {
          text: "There’s a bag on the bed in front of her. In it Marcel can see some letters. The woman closes the bag. After that, she walks to the door. She opens it, and then closes it behind her.",
        },
      ],
      questions: [
        "What is at the back of the safe, and who does Marcel see in number 40 Old Wilton Street?",
        "Where does the woman say she is going this evening, and what does Marcel see in the bag?",
      ],
      answers: [
        "There is a big hole and a lot of smoke at the back of the safe, and Marcel sees a tall woman in a red dress in number 40 Old Wilton Street.",
        "She says she is going to New York this evening, and Marcel sees some letters in the bag.",
      ],
    },
    {
      id: "page-8",
      localMedia: `local-media/images/skills/listening/audiobooks/beginner/marcel-and-the-shakespeare-letters/page-8.avif`,
      r2: `${imageBase}/page-8.avif`,
      imageAlt: "",
      mediaPosition: "left",
      title: "Page 8",
      text: [
        {
          text: "Henry looks at Marcel in the hot, dark safe. “What are we going to do?” he asks. “That woman’s got the letters. Let’s telephone the police.”",
        },
        {
          text: "“No, there isn’t time,” Marcel says. “Do you know her?”",
        },
        {
          text: "“The woman? No, I don’t.”",
        },
        {
          text: "“Who usually lives in that flat?”",
        },
        {
          text: "“Two old women, but they’re on holiday in Spain. Oh Marcel, what are we going to do?”",
        },
        {
          text: "Marcel looks into the dark flat. “Come with me,” he says.",
        },
        {
          text: "He climbs into the old women’s flat. Henry is behind him. The two mice run across the floor. Then they climb up a table. On the table there’s a yellow light and a small, white notepad. Marcel looks at it under the light.",
        },
        {
          text: "“What are you doing?” Henry asks.",
        },
        {
          text: "Marcel doesn’t answer. Then he says, “Aha! I was right. Can you see?”",
        },
        {
          text: "Henry smiles. “Yes, I can. Not very well, but . . . it says, “Concorde - 7.20”.”",
        },
      ],
      questions: [
        "Where are the two old women who usually live in that flat, and what is on the table?",
        "What does the small, white notepad say under the light?",
      ],
      answers: [
        "They are on holiday in Spain, and there is a yellow light and a small, white notepad on the table.",
        "It says “Concorde - 7.20”.",
      ],
    },
    {
      id: "page-9",
      localMedia: `local-media/images/skills/listening/audiobooks/beginner/marcel-and-the-shakespeare-letters/page-9.avif`,
      r2: `${imageBase}/page-9.avif`,
      imageAlt: "",
      mediaPosition: "left",
      title: "Page 9",
      text: [
        {
          text: "Marcel puts down the notepad and looks at his watch. It’s six o’clock. Then he starts to run down the leg of the table.",
        },
        {
          text: "Henry runs down the leg of the table, too. “Where are we going now?” he asks.",
        },
        {
          text: "“Heathrow Airport, of course,” Marcel says.",
        },
        {
          text: "At 6.05 the two mice are in Old Wilton Street. It’s dark and cold. They walk quickly to Knightsbridge station. There are a lot of fireworks. “BANG! WHEEE! POP! WHOOSH!” Marcel watches them. Then he remembers the very big BANG!!! in the professor’s flat.",
        },
        {
          text: "“That was clever,” he thinks. “Very, very clever.”",
        },
        {
          text: "There are hundreds of people at Knightsbridge station. Marcel and Henry run under their legs and bags. Marcel can hear a noise.",
        },
        {
          text: "“Quick, Henry,” he says. “A train’s coming.”",
        },
        {
          text: "He’s right. A train is coming into the station. A sign on the front of it says, “Heathrow”. The doors open and the mice get on.",
        },
      ],
      questions: [
        "Where does Marcel say they are going, and what time are they in Old Wilton Street?",
        "What does the sign on the front of the train say at Knightsbridge station?",
      ],
      answers: [
        "They are going to Heathrow Airport, and they are in Old Wilton Street at 6.05.",
        "The sign on the front of the train says “Heathrow”.",
      ],
    },
    {
      id: "page-10",
      localMedia: `local-media/images/skills/listening/audiobooks/beginner/marcel-and-the-shakespeare-letters/page-10.avif`,
      r2: `${imageBase}/page-10.avif`,
      imageAlt: "",
      mediaPosition: "left",
      title: "Page 10",
      text: [
        {
          text: "There are fifteen stations before Heathrow. Every time, the train stops. Henry says, “Quick, quick - what are we waiting for?” Then the doors close and the train starts again.",
        },
        {
          text: "At Heathrow the mice get off. Marcel looks left and right. “Where do we go now?” he asks.",
        },
        {
          text: "“I don’t know,” Henry says. He looks left and right, too.",
        },
        {
          text: "There are a lot of signs. Then suddenly Henry smiles.",
        },
        {
          text: "“Marcel, look! That blue sign says “Concorde”.”",
        },
        {
          text: "“Good,” Marcel says. He looks at his watch. It’s 7.10.",
        },
        {
          text: "“Let’s go,” he says.",
        },
        {
          text: "The mice start to run again.",
        },
        {
          text: "“Marcel,” Henry says, “what are we going to do? OK, we find the woman . . . but then what do we do? How do we get the letters back?”",
        },
        {
          text: "Marcel smiles. “Wait and see,” he says.",
        },
      ],
      questions: [
        "How many stations are there before Heathrow, and what does the blue sign say?",
        "What time is it when Marcel looks at his watch at Heathrow?",
      ],
      answers: [
        "There are fifteen stations before Heathrow, and the blue sign says “Concorde”.",
        "It is 7.10.",
      ],
    },
    {
      id: "page-11",
      localMedia: `local-media/images/skills/listening/audiobooks/beginner/marcel-and-the-shakespeare-letters/page-11.avif`,
      r2: `${imageBase}/page-11.avif`,
      imageAlt: "",
      mediaPosition: "left",
      title: "Page 11",
      text: [
        {
          text: "They come to a door. It says, “CONCORDE”, but it’s closed. Henry and Marcel stop in front of it.",
        },
        {
          text: "“Oh no,” says Henry.",
        },
        {
          text: "But then two men with big bags open the door and go in. The mice go in, too.",
        },
        {
          text: "“Good,” Marcel says. He looks at the people in the room . “Now . . . can you see her?”",
        },
        {
          text: "“No, I can’t,” Henry says.",
        },
        {
          text: "Marcel smiles. “I can,” he says.",
        },
        {
          text: "“Where?”",
        },
        {
          text: "“There. In front of us.”",
        },
        {
          text: "Henry looks. Marcel is right. The American woman is sitting on a chair and listening to her Walkman. She’s reading a newspaper, too. Her bag is on the floor.",
        },
        {
          text: "“OK - let’s go,” Marcel says. He takes a small knife from his coat. “Walk behind me, Henry - but be very, very quiet.”",
        },
      ],
      questions: [
        "What is the American woman doing, and where is her bag?",
        "What does Marcel take from his coat, and what does he tell Henry?",
      ],
      answers: [
        "She is sitting on a chair, listening to her Walkman, and reading a newspaper, and her bag is on the floor.",
        "He takes a small knife from his coat and tells Henry to walk behind him and be very quiet.",
      ],
    },
    {
      id: "page-12",
      localMedia: `local-media/images/skills/listening/audiobooks/beginner/marcel-and-the-shakespeare-letters/page-12.avif`,
      r2: `${imageBase}/page-12.avif`,
      imageAlt: "",
      mediaPosition: "left",
      title: "Page 12",
      text: [
        {
          text: "He starts to walk across the room. Henry walks behind his friend. “Marcel’s a detective,” he thinks. “It’s going to be OK. He knows his job. He does this every day. Yes . . . it’s - going - to - be - O - K.”",
        },
        {
          text: "Marcel stops in front of the American woman’s bag. He looks at Henry. “Ssshh,” he says. “Wait here.” Then he climbs up the bag.",
        },
        {
          text: "After a short time he starts to make a hole in it with his knife. Henry watches. His mouth is open. He looks at the American woman. She’s listening to music and reading. She doesn’t look down.",
        },
        {
          text: "Marcel climbs into the bag. It’s dark. He closes his eyes and opens them again. Now he can see some jeans - a radio - some books. Then suddenly he sees the Shakespeare letters. “Good,” he thinks.",
        },
      ],
      questions: [
        "What does Marcel use to make a hole in the American woman’s bag, and does she look down?",
        "What does Marcel see inside the bag?",
      ],
      answers: [
        "He uses his knife to make a hole in the bag, and she does not look down.",
        "He sees some jeans, a radio, some books, and then the Shakespeare letters.",
      ],
    },
    {
      id: "page-13",
      localMedia: `local-media/images/skills/listening/audiobooks/beginner/marcel-and-the-shakespeare-letters/page-13.avif`,
      r2: `${imageBase}/page-13.avif`,
      imageAlt: "",
      mediaPosition: "left",
      title: "Page 13",
      text: [
        {
          text: "He puts the letters on his back and starts to climb down again. Henry sees him and smiles. But then the mice hear a noise.",
        },
        {
          text: "“Bing bong!”",
        },
        {
          text: "The American woman looks at her watch. Then she takes off her Walkman and starts to put it in her bag.",
        },
        {
          text: "“Hey!” she says. “What . . . ? Two mice! What’s this?”",
        },
        {
          text: "“Quick, Henry - catch!” Marcel says. He gives the letters to Henry. Then he climbs down the bag. The mice run very quickly with the Shakespeare letters. They can hear the American woman behind them. She’s running very quickly, too.",
        },
        {
          text: "The door is open. A man is coming in. He’s fat and he has two bags. The mice run under his legs. Then Marcel hears a big noise! He looks behind him. The American woman is on the floor, and the man is talking to her.",
        },
        {
          text: "“Sorry,” he says. “Are you OK?”",
        },
        {
          text: "The woman stands up. “No!” she says. Then she looks for the mice, but she can’t see them.",
        },
      ],
      questions: [
        "What does the American woman do after hearing “Bing bong!”, and what does she see?",
        "Who comes in through the open door, and what happens to the American woman?",
      ],
      answers: [
        "She looks at her watch, takes off her Walkman, starts to put it in her bag, and sees two mice.",
        "A fat man with two bags comes in, the American woman ends up on the floor, and the man asks if she is OK.",
      ],
    },
    {
      id: "page-14",
      localMedia: `local-media/images/skills/listening/audiobooks/beginner/marcel-and-the-shakespeare-letters/page-14.avif`,
      r2: `${imageBase}/page-14.avif`,
      imageAlt: "",
      mediaPosition: "left",
      title: "Page 14",
      text: [
        {
          text: "At nine o’clock Marcel and Henry are back at Professor Barton’s flat in Old Wilton Street. They’re very happy. Marcel is sitting on the table. The Shakespeare letters are in front of him. He’s reading them. Henry is standing at the window. He’s watching the fireworks. Suddenly he sees a man in a brown coat. It’s Professor Barton. He’s coming home.",
        },
        {
          text: "The professor is smiling. Then he walks into his flat and suddenly he stops smiling. Marcel and Henry are standing behind a chair. They watch him.",
        },
        {
          text: "He goes to the safe. It’s open. He looks in it and says, “Oh no!”",
        },
        {
          text: "Then he sees the Shakespeare letters on the table. “But . . . ” He puts one hand on his head. “I don’t understand.” He looks at the safe. Then he looks at the letters - and then he looks at the safe again. “Why are the letters here?” he says. “When . . . ? How . . . ? I don’t understand.”",
        },
      ],
      questions: [
        "What are Marcel and Henry doing at nine o’clock, and who does Henry see coming home?",
        "Where does Professor Barton see the Shakespeare letters, and how does he react?",
      ],
      answers: [
        "Marcel is reading the Shakespeare letters on the table and Henry is watching the fireworks at the window, and Henry sees Professor Barton in a brown coat coming home.",
        "He sees the letters on the table, puts one hand on his head, and says he does not understand.",
      ],
    },
    {
      id: "page-15",
      localMedia: `local-media/images/skills/listening/audiobooks/beginner/marcel-and-the-shakespeare-letters/page-15.avif`,
      r2: `${imageBase}/page-15.avif`,
      imageAlt: "",
      mediaPosition: "left",
      title: "Page 15",
      text: [
        {
          text: "In the morning, Henry and Marcel go to the British Museum. It’s a cold day, and it’s raining. In the museum there are a lot of journalists and TV people. They’re waiting for Professor Barton. He arrives at ten o’clock.",
        },
        {
          text: "“Good morning,” he says to them.",
        },
        {
          text: "He starts to talk about the Shakespeare letters. Then he gives the letters to a man from the museum.",
        },
        {
          text: "“Thank you very much, Professor,” the man says.",
        },
        {
          text: "Henry and Marcel are standing at the back of the room. Henry smiles at his French friend.",
        },
        {
          text: "“And thank you, Marcel,” he says.",
        },
      ],
      questions: [
        "What is the weather like in the morning, and what time does Professor Barton arrive at the British Museum?",
        "Who does Professor Barton give the letters to, and where are Henry and Marcel standing?",
      ],
      answers: [
        "It is a cold day and it is raining, and Professor Barton arrives at ten o’clock.",
        "He gives the letters to a man from the museum, and Henry and Marcel are standing at the back of the room.",
      ],
    },
  ] satisfies AudiobookSection[],
};
