import type { AudiobookSection } from "./a-new-zealand-adventure";

const imageBase =
  "/media/images/skills/listening/audiobooks/starter/simon-and-the-spy";
const localBase =
  "local-media/images/skills/listening/audiobooks/starter/simon-and-the-spy";

export const simonAndTheSpy = {
  slug: "simon-and-the-spy",
  title: "Simon and the Spy",
  audio: "",
  sections: [
    {
      id: "summary",
      title: "Summary",
      text: "Simon Simple is going on a holiday and the police are looking for a spy. On the train, Simon meets a beautiful girl. He likes her and she likes him. But the spy is there too. Simon and the police can't see the spy. Can you?",
      localMedia: `${localBase}/cover.avif`,
      r2: `${imageBase}/cover.avif`,
      imageAlt: "Cover of Simon and the Spy.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-1",
      questions: [
        {
          question: "Why are the police at the station?",
          options: [
            { option: "They are waiting for a train." },
            { option: "They are looking for a spy.", isCorrect: true },
            { option: "They are going on holiday." },
          ],
        },
        {
          question: "Who are they looking for?",
          options: [
            { option: "They are looking for Simon Simple." },
            { option: "They are looking for the train driver." },
            {
              option: "They are looking for the man in the newspaper.",
              isCorrect: true,
            },
          ],
        },
      ],
      title: "Paragraph 1",
      text: `Simon Simple is at the station. He is going on a train. There are policemen at the station. There are policemen on the trains. They are all working very hard. “Why are the police here?” Simon asks a man. “Look,” the man says. Simon looks at the man's newspaper. “Do you know this man?” he reads. “He's a spy! Find him! Stop him! Catch him!”`,
      localMedia: `${localBase}/paragraph-1.avif`,
      r2: `${imageBase}/paragraph-1.avif`,
      imageAlt: "Simon reading about the spy at the station.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-2",
      questions: [
        {
          question: "Why does Simon run to the train?",
          options: [
            {
              option: "He runs because his train leaves in three minutes.",
              isCorrect: true,
            },
            { option: "He runs because the police are chasing him." },
            { option: "He runs because he is late for work." },
          ],
        },
        {
          question: "Who is near him?",
          options: [
            { option: "A young girl with a bag is near him." },
            {
              option: "An old woman with an umbrella is near him.",
              isCorrect: true,
            },
            { option: "A student in jeans is near him." },
          ],
        },
      ],
      title: "Paragraph 2",
      timestamp: "0:48",
      text: `Simon looks at the people in the station. He can see students in jeans, and men in suits. He can see families and children. He can't see any spies. Simon's train goes at 11.00, and it is 10.57 now. Simon runs to the train. There is an old woman with an umbrella near Simon. She is walking very fast. Simon doesn't see her. He doesn't see her bag.`,
      localMedia: `${localBase}/paragraph-2.avif`,
      r2: `${imageBase}/paragraph-2.avif`,
      imageAlt: "Simon hurrying through the busy station.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-3",
      questions: [
        {
          question: "Why does Simon fall?",
          options: [
            { option: "He falls because the train moves suddenly." },
            { option: "He falls because he is running too fast." },
            {
              option: "He falls because the old woman's bag hits his foot.",
              isCorrect: true,
            },
          ],
        },
        {
          question: "How does the old woman's letter get into his bag?",
          options: [
            { option: "The old woman gives it to him at the station." },
            {
              option:
                "It falls among his things, and he puts it in his bag without noticing.",
              isCorrect: true,
            },
            { option: "He finds it on the ground and reads it." },
          ],
        },
      ],
      title: "Paragraph 3",
      timestamp: "1:32",
      text: `The old woman's bag hits Simon's foot. Simon falls. His bag opens. His things fall to the ground. The old woman's bag is open, too. A letter falls out. Simon puts his things into his bag. The old woman's letter is with Simon's things. Simon does not see it. He puts the old woman's letter in his bag. He closes his bag and runs to the train.`,
      localMedia: `${localBase}/paragraph-3.avif`,
      r2: `${imageBase}/paragraph-3.avif`,
      imageAlt: "Simon and the old woman dropping their things at the station.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-4",
      questions: [
        {
          question: "Who sits beside Simon?",
          options: [
            { option: "A beautiful girl sits beside him.", isCorrect: true },
            { option: "The old woman sits beside him." },
            { option: "A policeman sits beside him." },
          ],
        },
        {
          question: "Why does the old woman walk away?",
          options: [
            { option: "She walks away because she wants her letter." },
            { option: "She walks away because the train is stopping." },
            {
              option: "She walks away because she sees the policemen.",
              isCorrect: true,
            },
          ],
        },
      ],
      title: "Paragraph 4",
      timestamp: "2:20",
      text: `Simon sits down in the train. There is a beautiful girl beside him. “Hello,” Simon says. “Hello,” the girl says. The old woman is on the train, too. She is looking at Simon's bag. She wants her letter. There are policemen on the train. They can't find the spy. The old woman sees the policemen. She turns and walks quickly down the train.`,
      localMedia: `${localBase}/paragraph-4.avif`,
      r2: `${imageBase}/paragraph-4.avif`,
      imageAlt: "Simon meeting a girl while the old woman watches his bag.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-5",
      questions: [
        {
          question: "What does Simon go to buy?",
          options: [
            { option: "He goes to buy a sandwich." },
            { option: "He goes to buy a cup of coffee.", isCorrect: true },
            { option: "He goes to buy a newspaper." },
          ],
        },
        {
          question: "Who is waiting for him?",
          options: [
            { option: "The old woman is waiting for him.", isCorrect: true },
            { option: "The train driver is waiting for him." },
            { option: "A policeman is waiting for him." },
          ],
        },
      ],
      title: "Paragraph 5",
      timestamp: "3:02",
      text: `Simon likes the girl. She likes him. “There's a restaurant on the train,” Simon says. “Do you want a cup of coffee?” “Yes, please,” the girl says. “OK, wait here,” Simon says. Simon takes his bag and goes to the restaurant. The old woman is waiting for him. Simon doesn't see her. He doesn't see her foot.`,
      localMedia: `${localBase}/paragraph-5.avif`,
      r2: `${imageBase}/paragraph-5.avif`,
      imageAlt: "The disguised spy waiting to trip Simon on the train.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-6",
      questions: [
        {
          question: "What does Simon notice about the old woman's shoes?",
          options: [
            { option: "He notices that they are very clean." },
            { option: "He notices that they are old and dirty." },
            {
              option: "He notices that they are not women's shoes.",
              isCorrect: true,
            },
          ],
        },
      ],
      title: "Paragraph 6",
      timestamp: "3:47",
      text: `The train is going fast. Simon falls. The old woman falls, too. She sits down on the floor. “Oh, I'm sorry,” Simon says. He helps the old woman. Simon sees the old woman's shoes. He looks at her shoes, and he looks at her face. “They're not women's shoes,” Simon thinks. Simon buys the coffee and goes back to the girl.`,
      localMedia: `${localBase}/paragraph-6.avif`,
      r2: `${imageBase}/paragraph-6.avif`,
      imageAlt: "Simon noticing the old woman's unusual shoes.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-7",
      questions: [
        {
          question: "Where are Simon and the girl going next?",
          options: [
            { option: "They are going on a boat.", isCorrect: true },
            { option: "They are going to a restaurant." },
            { option: "They are going back to the station." },
          ],
        },
        {
          question: "Can Simon see the spy?",
          options: [
            { option: "Yes, he sees the spy near the boat." },
            { option: "No, he cannot see the spy.", isCorrect: true },
            { option: "Yes, the policemen show him the spy." },
          ],
        },
      ],
      title: "Paragraph 7",
      timestamp: "4:29",
      text: `The train stops. Simon and the girl are going on a boat now. They walk from the train to the boat. There are policemen here, too. “What do they want?” the girl asks. “There's a spy,” Simon says. “A spy?” the girl says. “I can't see any spies.” Simon looks, too. He sees families and students. He sees the old woman. “No,” Simon says. “I can't see any spies.”`,
      localMedia: `${localBase}/paragraph-7.avif`,
      r2: `${imageBase}/paragraph-7.avif`,
      imageAlt: "Simon and the girl walking toward the boat.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-8",
      questions: [
        {
          question: "What is the girl's name?",
          options: [
            { option: "Her name is Sarah." },
            { option: "Her name is Susan." },
            { option: "Her name is Samantha.", isCorrect: true },
          ],
        },
        {
          question: "What are Simon and Samantha doing while they wait?",
          options: [
            { option: "They are talking while they wait.", isCorrect: true },
            { option: "They are eating their lunch while they wait." },
            { option: "They are looking for the old woman while they wait." },
          ],
        },
      ],
      title: "Paragraph 8",
      timestamp: "5:21",
      text: `It is a beautiful day. The sun is shining and the water is blue. Simon and the girl sit near the water and wait. The boat is coming. “What's your name?” Simon asks. “Samantha,” the girl says. “Oh,” Simon says. “My name's Simon. Simon and Samantha. That's nice.” Simon and Samantha are talking. They don't see the old woman. They don't see her umbrella.`,
      localMedia: `${localBase}/paragraph-8.avif`,
      r2: `${imageBase}/paragraph-8.avif`,
      imageAlt: "Simon and Samantha talking while they wait for the boat.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-9",
      questions: [
        {
          question: "What is coming down the road?",
          options: [
            { option: "A bus is coming down the road." },
            { option: "A lorry is coming down the road.", isCorrect: true },
            { option: "A taxi is coming down the road." },
          ],
        },
        {
          question: "What does Simon notice about the old woman's clothes?",
          options: [
            { option: "He notices that her coat is not a woman's coat." },
            {
              option: "He notices that her trousers are not women's trousers.",
              isCorrect: true,
            },
            { option: "He notices that her hat is in the water." },
          ],
        },
      ],
      title: "Paragraph 9",
      timestamp: "6:09",
      text: `“Look out!” a man shouts. “There's a lorry!” Simon and Samantha look. A lorry is coming down the road very fast. They jump back. The old woman jumps back, too. Simon sees her trousers. “They're not women's trousers,” Simon thinks. “Come on, Simon, the boat's here,” Samantha says. Simon and Samantha get on the boat.`,
      localMedia: `${localBase}/paragraph-9.avif`,
      r2: `${imageBase}/paragraph-9.avif`,
      imageAlt: "Simon noticing the old woman's trousers near the boat.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-10",
      questions: [
        {
          question: "What food do Simon and Samantha offer each other?",
          options: [
            {
              option: "Simon offers an apple and Samantha offers a sandwich.",
            },
            {
              option:
                "Simon offers a sandwich and Samantha offers a cup of coffee.",
            },
            {
              option: "Simon offers a sandwich and Samantha offers an apple.",
              isCorrect: true,
            },
          ],
        },
        {
          question: "Who is behind them?",
          options: [
            { option: "A policeman is behind them." },
            { option: "The old woman is behind them.", isCorrect: true },
            { option: "The dog is behind them." },
          ],
        },
      ],
      title: "Paragraph 10",
      timestamp: "6:58",
      text: `Simon opens his bag and takes his lunch out. He takes the old woman's letter out, too, but he doesn't see it. “Do you want a sandwich?” Simon asks Samantha. “Yes, please,” Samantha says. She takes her lunch out of her bag. “Do you want an apple?” she says. The old woman is behind them. Simon and Samantha don't see her. They don't see her hand.`,
      localMedia: `${localBase}/paragraph-10.avif`,
      r2: `${imageBase}/paragraph-10.avif`,
      imageAlt:
        "The old woman reaching for the letter behind Simon and Samantha.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-11",
      questions: [
        {
          question: "What takes the letter?",
          options: [
            { option: "The wind takes the letter.", isCorrect: true },
            { option: "The dog takes the letter." },
            { option: "Samantha takes the letter." },
          ],
        },
        {
          question: "Why do Simon and the old woman both run after it?",
          options: [
            { option: "They both want to give the paper to the policeman." },
            { option: "They both want to read the newspaper." },
            {
              option:
                "Simon wants his ticket, and the old woman wants her letter.",
              isCorrect: true,
            },
          ],
        },
      ],
      title: "Paragraph 11",
      timestamp: "7:41",
      text: `The boat is going fast now. The wind is strong. Samantha's hair goes in her eyes. The wind takes the old woman's letter. The letter flies along the boat. “What's that paper?” Samantha says. “Is it your boat ticket?” “I don't know,” Simon says. Simon runs. He wants his ticket. The old woman runs, too. She wants her letter.`,
      localMedia: `${localBase}/paragraph-11.avif`,
      r2: `${imageBase}/paragraph-11.avif`,
      imageAlt: "Simon and the old woman chasing the letter on the boat.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-12",
      questions: [
        {
          question: "Who catches the paper?",
          options: [
            { option: "Samantha catches the paper." },
            {
              option: "A dog catches the paper in its mouth.",
              isCorrect: true,
            },
            { option: "The old woman catches the paper." },
          ],
        },
        {
          question: "What do Simon and the old woman shout?",
          options: [
            {
              option:
                "Simon shouts about his ticket, and the old woman shouts about her letter.",
              isCorrect: true,
            },
            {
              option:
                "Simon shouts about his letter, and the old woman shouts about her ticket.",
            },
            { option: "They both shout at Samantha." },
          ],
        },
      ],
      title: "Paragraph 12",
      timestamp: "8:24",
      text: `Simon and the old woman run fast. They are near the paper now. “Woof!” “What is that? It's a dog!” He's running very fast. He runs to the paper and catches it in his mouth. “My ticket!” Simon says. “My letter!” the old woman says. The dog runs along the boat. “Catch the dog!” Simon says. “Stop him!” says the old woman.`,
      localMedia: `${localBase}/paragraph-12.avif`,
      r2: `${imageBase}/paragraph-12.avif`,
      imageAlt: "A dog catching the letter in its mouth.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-13",
      questions: [
        {
          question: "Who catches the dog?",
          options: [
            { option: "Simon catches the dog." },
            { option: "The old woman catches the dog." },
            { option: "Samantha catches the dog.", isCorrect: true },
          ],
        },
        {
          question: "Whose letter is in its mouth?",
          options: [
            { option: "Simon's boat ticket is in its mouth." },
            {
              option: "The old woman's letter is in its mouth.",
              isCorrect: true,
            },
            { option: "Samantha's letter is in its mouth." },
          ],
        },
      ],
      title: "Paragraph 13",
      timestamp: "9:07",
      text: `The dog is happy. He can run fast. He's playing a game with Simon and the old woman. He doesn't see Samantha. Samantha jumps up and catches him. “I've got him, Simon,” Samantha says. Simon and the old woman run to Samantha. The paper's in the dog's mouth. Simon looks at it. “That's not my ticket,” he says. “No,” the old woman says. “It's my letter.”`,
      localMedia: `${localBase}/paragraph-13.avif`,
      r2: `${imageBase}/paragraph-13.avif`,
      imageAlt: "Samantha catching the dog with the letter.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-14",
      questions: [
        {
          question: "How does the dog reveal the old woman's disguise?",
          options: [
            {
              option:
                "It pulls off her coat, and the wind takes her hat and hair.",
              isCorrect: true,
            },
            { option: "It takes her bag, and her letter falls out." },
            { option: "It barks at her, and she runs away." },
          ],
        },
        {
          question: "Who is the old woman really?",
          options: [
            { option: "She is really Samantha's mother." },
            { option: "She is really a police officer." },
            { option: "She is really a man: the spy.", isCorrect: true },
          ],
        },
      ],
      title: "Paragraph 14",
      timestamp: "9:48",
      text: `The dog likes Simon and Samantha, but he doesn't like the old woman. He takes her coat in his mouth and pulls it. The coat falls to the ground. The wind takes the old woman's hat. It falls into the water. Her hair falls with the hat. Simon and Samantha look at the old woman. It's not an old woman! It's a man! “The spy!” Simon says. “Police! Come here!”`,
      localMedia: `${localBase}/paragraph-14.avif`,
      r2: `${imageBase}/paragraph-14.avif`,
      imageAlt: "The dog's actions revealing the disguised spy.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-15",
      questions: [
        {
          question: "What information is in the letter?",
          options: [
            { option: "The letter has Simon's boat ticket in it." },
            {
              option: "The letter has names and addresses on it.",
              isCorrect: true,
            },
            { option: "The letter has a photograph of the spy." },
          ],
        },
        {
          question: "Where is the letter?",
          options: [
            { option: "The letter is inside the dog.", isCorrect: true },
            { option: "The letter is in the water." },
            { option: "The letter is in Simon's bag." },
          ],
        },
      ],
      title: "Paragraph 15",
      timestamp: "10:32",
      text: `The police are very happy. “Thank you, Simon,” they say. “Now we have the spy. But the spy has a letter. The letter has names and addresses on it. We want the letter but we can't find it. Where is it? Do you know?” Simon looks at the dog. The dog looks at Simon. “There's the letter,” Simon says. “Where?” says the policeman. “It's in the dog,” Simon says.`,
      localMedia: `${localBase}/paragraph-15.avif`,
      r2: `${imageBase}/paragraph-15.avif`,
      imageAlt: "Simon explaining to the police where the letter is.",
      mediaPosition: "left",
    },
    {
      id: "retell-the-story",
      title: "Retell the Story",
      retell: {
        cards: [
          {
            img: `${imageBase}/paragraph-1.avif`,
            alt: "Simon reading about the spy at the station.",
            summary:
              "Simon reads about a spy in a man’s newspaper at the station.",
          },
          {
            img: `${imageBase}/paragraph-2.avif`,
            alt: "Simon hurrying through the busy station.",
            summary:
              "Simon runs to his train because it leaves in three minutes.",
          },
          {
            img: `${imageBase}/paragraph-3.avif`,
            alt: "Simon and the old woman dropping their things at the station.",
            summary:
              "The old woman’s letter falls into Simon’s bag by mistake.",
          },
          {
            img: `${imageBase}/paragraph-4.avif`,
            alt: "Simon meeting a girl while the old woman watches his bag.",
            summary: "Simon sits next to a beautiful girl on the train.",
          },
          {
            img: `${imageBase}/paragraph-5.avif`,
            alt: "The disguised spy waiting to trip Simon on the train.",
            summary: "Simon goes to the restaurant to buy coffee for the girl.",
          },
          {
            img: `${imageBase}/paragraph-6.avif`,
            alt: "Simon noticing the old woman's unusual shoes.",
            summary:
              "Simon sees that the old woman’s shoes are not women’s shoes.",
          },
          {
            img: `${imageBase}/paragraph-7.avif`,
            alt: "Simon and the girl walking toward the boat.",
            summary: "Simon and the girl walk from the train to the boat.",
          },
          {
            img: `${imageBase}/paragraph-8.avif`,
            alt: "Simon and Samantha talking while they wait for the boat.",
            summary: "Simon learns that the girl’s name is Samantha.",
          },
          {
            img: `${imageBase}/paragraph-9.avif`,
            alt: "Simon noticing the old woman's trousers near the boat.",
            summary:
              "Simon sees that the old woman’s trousers are not women’s trousers.",
          },
          {
            img: `${imageBase}/paragraph-10.avif`,
            alt: "The old woman reaching for the letter behind Simon and Samantha.",
            summary:
              "Simon and Samantha share their lunch while the old woman watches.",
          },
          {
            img: `${imageBase}/paragraph-11.avif`,
            alt: "Simon and the old woman chasing the letter on the boat.",
            summary: "The wind takes the letter and Simon runs after it.",
          },
          {
            img: `${imageBase}/paragraph-12.avif`,
            alt: "A dog catching the letter in its mouth.",
            summary: "A dog catches the letter in its mouth and runs away.",
          },
          {
            img: `${imageBase}/paragraph-13.avif`,
            alt: "Samantha catching the dog with the letter.",
            summary:
              "Samantha catches the dog, but the paper is not Simon’s ticket.",
          },
          {
            img: `${imageBase}/paragraph-14.avif`,
            alt: "The dog's actions revealing the disguised spy.",
            summary:
              "The dog pulls off the disguise, and the old woman is a man.",
          },
          {
            img: `${imageBase}/paragraph-15.avif`,
            alt: "Simon explaining to the police where the letter is.",
            summary:
              "Simon tells the police that the letter is inside the dog.",
          },
        ],
      },
    },
  ] satisfies AudiobookSection[],
};
