import type { AudiobookSection } from "./a-new-zealand-adventure";

const imageBase = "/media/images/skills/listening/audiobooks/starter/the-fireboy";
const localBase = "local-media/images/skills/listening/audiobooks/starter/the-fireboy";

export const theFireboy = {
  slug: "the-fireboy",
  title: "The Fireboy",
  audio: "",
  sections: [
    {
      id: "summary",
      title: "Summary",
      text: "This is the story of Hapu, who lives in Ancient Egypt. Hapu works with his father, a goldsmith. They work long, hard hours making gold tables and chairs, but they are poor. Then one day Hapu has an idea that will change their lives: he decides to make a beautiful gold necklace for Queen Cleopatra.",
      localMedia: `${localBase}/cover.avif`,
      r2: `${imageBase}/cover.avif`,
      imageAlt: "Cover of The Fireboy.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-1",
      questions: [
        {
          question: "Where does Hapu live?",
          options: [
            { option: "He lives in Ancient Rome." },
            { option: "He lives in Ancient Egypt.", isCorrect: true },
            { option: "He lives in Ancient Greece." },
          ],
        },
        {
          question: "What work does he do?",
          options: [
            { option: "He is a teacher at the palace." },
            { option: "He is a fireboy in his father’s factory.", isCorrect: true },
          ],
        },
        {
          question: "Why must he and his father work hard?",
          options: [
            { option: "They want to build a bigger factory." },
            { option: "They owe money to Queen Cleopatra." },
            { option: "They are poor and need money.", isCorrect: true },
          ],
        },
      ],
      title: "Paragraph 1",
      text: `This is the story of Hapu. He lives in Ancient Egypt at the time of Queen Cleopatra. His father, Bak, has a small factory. He makes gold tables and chairs. Hapu helps him. He is a “fireboy”. Every day he pushes a long handle up and down. The work is hot and very hard. But what can he and his father do? They are poor people. They need to make money.`,
      localMedia: `${localBase}/paragraph-1.avif`,
      r2: `${imageBase}/paragraph-1.avif`,
      imageAlt: "Hapu working as a fireboy in his father's factory.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-2",
      questions: [
        {
          question: "Where do Hapu and Bak sit every evening?",
          options: [
            { option: "They sit beside the Nile.", isCorrect: true },
            { option: "They sit in the palace." },
            { option: "They sit in the market." },
          ],
        },
        {
          question: "What does Bak say about their future?",
          options: [
            { option: "He says they will never have money." },
            { option: "He says they are going to be very rich.", isCorrect: true },
          ],
        },
      ],
      title: "Paragraph 2",
      timestamp: "0:52",
      text: `Every evening they sit beside the Nile. Bak talks to his son about the factory, tomorrow's work—everything. “One day we're going to be very rich,” he tells Hapu. “Are we?” The fireboy looks into his father's tired eyes. “Yes,” Bak smiles. “I don't know how and I don't know when, but we are.” Then he stands up. “Come on,” he says. “It's late. Let's go home.”`,
      localMedia: `${localBase}/paragraph-2.avif`,
      r2: `${imageBase}/paragraph-2.avif`,
      imageAlt: "Hapu and Bak talking beside the Nile.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-3",
      questions: [
        {
          question: "What happens to Bak while he is working?",
          options: [
            { option: "He falls asleep at the table." },
            { option: "He feels ill and falls to the ground.", isCorrect: true },
            { option: "He leaves the factory to find a doctor." },
          ],
        },
        {
          question: "How does Hapu help him?",
          options: [
            { option: "He runs to him and puts a hand under his head.", isCorrect: true },
            { option: "He carries him home on his back." },
          ],
        },
      ],
      title: "Paragraph 3",
      timestamp: "1:44",
      text: `Three days later Hapu and Bak are making a table. It is very hot in the room. Suddenly, Bak stops work. “What is it, Father?” Hapu asks. “Is something wrong?” “I don't know,” Bak answers. He closes his eyes. “It's my head. I can't...” And then he falls on the ground. “Father!” Hapu runs to Bak and puts one hand under his head. “Father—are you all right?”`,
      localMedia: `${localBase}/paragraph-3.avif`,
      r2: `${imageBase}/paragraph-3.avif`,
      imageAlt: "Hapu helping Bak after he falls in the factory.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-4",
      questions: [
        {
          question: "Why is Bak in bed?",
          options: [
            { option: "He is ill.", isCorrect: true },
            { option: "He is angry with Hapu." },
            { option: "He is making a necklace." },
          ],
        },
        {
          question: "What idea does Hapu have?",
          options: [
            { option: "He decides to leave his father and go away." },
            { option: "He decides to make something for somebody very rich, like the Queen.", isCorrect: true },
          ],
        },
      ],
      title: "Paragraph 4",
      timestamp: "2:40",
      text: `The next day Bak stays in bed. “I'm sorry, Hapu,” he says. “I want to work but I can't. I'm ill.” Hapu is very sad. “Father works too hard,” he thinks. “That's why he's ill. We need more money—but what can I do?” Then he has an idea. “Of course!” he thinks. “I must make something for somebody very rich. Somebody like... the Queen!”`,
      localMedia: `${localBase}/paragraph-4.avif`,
      r2: `${imageBase}/paragraph-4.avif`,
      imageAlt: "Hapu speaking to his ill father in bed.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-5",
      questions: [
        {
          question: "What does Hapu make?",
          options: [
            { option: "He makes a gold table." },
            { option: "He makes a gold necklace.", isCorrect: true },
            { option: "He makes a sword for the guards." },
          ],
        },
        {
          question: "Who is it for?",
          options: [
            { option: "It is for his father, Bak." },
            { option: "It is for one of the palace guards." },
            { option: "It is for Queen Cleopatra.", isCorrect: true },
          ],
        },
        {
          question: "What does he hope to receive for it?",
          options: [
            { option: "He hopes to receive a lot of money.", isCorrect: true },
            { option: "He hopes to receive a job in the market." },
          ],
        },
      ],
      title: "Paragraph 5",
      timestamp: "3:30",
      text: `Bak is ill for two weeks. In that time, Hapu makes a lot of tables and chairs. But not only tables and chairs. He makes a gold necklace, too. “There!” he thinks late one night. “It's ready.” He smiles. The necklace is very beautiful. “Queen Cleopatra is going to like this,” Hapu thinks. “She's going to pay a lot of money for it, too. I know she is.”`,
      localMedia: `${localBase}/paragraph-5.avif`,
      r2: `${imageBase}/paragraph-5.avif`,
      imageAlt: "Hapu holding the gold necklace he made.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-6",
      questions: [
        {
          question: "Why does Hapu go to the palace?",
          options: [
            { option: "He goes to see Queen Cleopatra with the necklace.", isCorrect: true },
            { option: "He goes to buy a sword from the guards." },
            { option: "He goes to look for his father." },
          ],
        },
        {
          question: "Do the guards let him see the Queen?",
          options: [
            { option: "No, they do not.", isCorrect: true },
            { option: "Yes, they do." },
          ],
        },
      ],
      title: "Paragraph 6",
      timestamp: "4:15",
      text: `The next morning he goes to Cleopatra's palace. The necklace is in a bag under his shirt. “What do you want?” asks a palace guard. There are two guards. Each one has a sword. “I want to see the Queen,” Hapu answers. Both guards laugh. “Go home, boy,” says one of them. “Queen Cleopatra doesn't see people like you.”`,
      localMedia: `${localBase}/paragraph-6.avif`,
      r2: `${imageBase}/paragraph-6.avif`,
      imageAlt: "The palace guards refusing to let Hapu see Cleopatra.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-7",
      questions: [
        {
          question: "What does Hapu hear in the market?",
          options: [
            { option: "He hears that the guards are looking for him." },
            { option: "He hears that Cleopatra’s women are coming to the market the next morning.", isCorrect: true },
            { option: "He hears that Queen Cleopatra is ill." },
          ],
        },
        {
          question: "Why is it good news for him?",
          options: [
            { option: "He can sell the necklace to the guards." },
            { option: "He can give them the necklace for the Queen.", isCorrect: true },
          ],
        },
      ],
      title: "Paragraph 7",
      timestamp: "4:56",
      text: `Hapu is very unhappy. “What do I do now?” he thinks. He leaves the palace and begins to walk home. But ten minutes later he passes two men in the market. “Cleopatra's women are coming here tomorrow morning,” says one. “They're arriving very early. They want to buy lots of new clothes for her.” “That's very good news,” Hapu thinks.`,
      localMedia: `${localBase}/paragraph-7.avif`,
      r2: `${imageBase}/paragraph-7.avif`,
      imageAlt: "Hapu hearing two men talk in the market.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-8",
      questions: [
        {
          question: "What does Hapu make for Bak?",
          options: [
            { option: "He makes a cup of sweet tea.", isCorrect: true },
            { option: "He makes a new table for the factory." },
            { option: "He makes a second gold necklace." },
          ],
        },
        {
          question: "What is Hapu waiting for in the market?",
          options: [
            { option: "He is waiting for his father." },
            { option: "He is waiting for the palace guards." },
            { option: "He is waiting for Cleopatra’s women.", isCorrect: true },
          ],
        },
      ],
      title: "Paragraph 8",
      timestamp: "5:39",
      text: `The next day the fireboy gets up very early. He makes a cup of sweet tea for Bak. Then he goes to the market. “I can give the necklace to Cleopatra's women,” he thinks. “They can give it to the Queen for me.” He waits and waits. For a long time, nothing happens. Then the music starts to play. A moment later Hapu sees a long line of people. They are coming from the palace.`,
    },
    {
      id: "paragraph-9",
      questions: [
        {
          question: "Who arrives at the market?",
          options: [
            { option: "Queen Cleopatra arrives at the market.", isCorrect: true },
            { option: "Bak arrives at the market." },
            { option: "The palace guards arrive without the Queen." },
          ],
        },
        {
          question: "How does Hapu stop her?",
          options: [
            { option: "He calls to the guards to stop the chair." },
            { option: "He runs in front of her chair and asks her to stop.", isCorrect: true },
          ],
        },
      ],
      title: "Paragraph 9",
      timestamp: "6:36",
      text: `Four men are carrying a very beautiful chair. A woman is sitting in it. Hapu puts one hand across his eyes. “It's the Queen!” he thinks. “She's coming, too!” A minute later Cleopatra arrives. Suddenly, everyone is very quiet. Then Hapu thinks, “This is the moment.” He runs in front of Cleopatra's chair. “Stop!” he says. “Please, stop!”`,
      localMedia: `${localBase}/paragraph-8-9.avif`,
      r2: `${imageBase}/paragraph-8-9.avif`,
      imageAlt:
        "Hapu stepping in front of Queen Cleopatra's procession in the market.",
      mediaPosition: "bottom",
    },
    {
      id: "paragraph-10",
      questions: [
        {
          question: "What does Hapu give Cleopatra?",
          options: [
            { option: "He gives her a cup of sweet tea." },
            { option: "He gives her his gold necklace.", isCorrect: true },
            { option: "He gives her a gold table and chairs." },
          ],
        },
        {
          question: "How does she reward him?",
          options: [
            { option: "She tells the guards to give him some money.", isCorrect: true },
            { option: "She gives him a job in the market." },
            { option: "She gives him one of her own necklaces." },
          ],
        },
      ],
      title: "Paragraph 10",
      timestamp: "7:30",
      text: `The Queen looks at him. “What do you want?” she asks. Hapu gives her the necklace. “Is this really your work?” asks Cleopatra. “Yes, it is,” Hapu answers. “Guards!” says Cleopatra. “Give this boy some money.” She holds the necklace in her hands. “This is beautiful,” she says. Then she leaves.`,
      localMedia: `${localBase}/paragraph-10.avif`,
      r2: `${imageBase}/paragraph-10.avif`,
      imageAlt: "Hapu giving his necklace to Queen Cleopatra.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-11",
      questions: [
        {
          question: "What does Hapu show Bak?",
          options: [
            { option: "He shows him a new table from the factory." },
            { option: "He shows him the palace guard’s sword." },
            { option: "He shows him the money from Cleopatra’s necklace.", isCorrect: true },
          ],
        },
        {
          question: "What does Bak say to his son?",
          options: [
            { option: "He says Hapu is a good son and thanks him.", isCorrect: true },
            { option: "He says Hapu must go back to the market." },
          ],
        },
      ],
      title: "Paragraph 11",
      timestamp: "8:18",
      text: `Hapu runs home. He is very, very happy. Bak is in bed. “Look!” Hapu says. He shows the money from Cleopatra's necklace to his father. “But how...?” Bak closes his eyes, then opens them again. “I don't understand,” he says. Hapu smiles. He sits down and tells his father everything. At the end of the story, Bak says, “You're a good son, Hapu. Thank you.”`,
      localMedia: `${localBase}/paragraph-11.avif`,
      r2: `${imageBase}/paragraph-11.avif`,
      imageAlt: "Hapu showing Cleopatra's money to his father.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-12",
      questions: [
        {
          question: "What does Hapu want to use the money for?",
          options: [
            { option: "He wants to buy a bigger factory." },
            { option: "He wants to pay for a doctor for his father.", isCorrect: true },
            { option: "He wants to buy a necklace for the Queen." },
          ],
        },
        {
          question: "Who comes to find him?",
          options: [
            { option: "One of Cleopatra’s guards comes to find him.", isCorrect: true },
            { option: "His father comes to find him." },
            { option: "Two men from the market come to find him." },
          ],
        },
      ],
      title: "Paragraph 12",
      timestamp: "9:15",
      text: `That night Hapu looks up at the stars. “Now I can pay for a doctor to visit Father,” he thinks. “Then, after Father is strong again...” But at that moment he stops. One of Cleopatra's guards is standing in front of him. He has a big sword. “Are you Hapu, son of Bak?” he asks. Hapu looks at him. “Yes. Yes, I am,” he answers.`,
      localMedia: `${localBase}/paragraph-12.avif`,
      r2: `${imageBase}/paragraph-12.avif`,
      imageAlt: "A palace guard finding Hapu beneath the night sky.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-13",
      questions: [
        {
          question: "What does the guard tell Hapu about the Queen?",
          options: [
            { option: "He tells him that the Queen wants to give him a job at the palace.", isCorrect: true },
            { option: "He tells him that the Queen wants to buy a gold necklace." },
            { option: "He tells him that the Queen wants him to work in the market." },
          ],
        },
        {
          question: "Why doesn’t he want to leave his current job?",
          options: [
            { option: "He does not want to leave his father.", isCorrect: true },
            { option: "He does not like the Queen’s necklace." },
          ],
        },
      ],
      title: "Paragraph 13",
      timestamp: "10:06",
      text: `“Come with me,” says the guard. “Queen Cleopatra likes your work. She wants to give you a job at the palace.” “But I have a job,” Hapu says. “I work with my father. I can't leave him. You don't underst...” “No, you don't understand,” the guard says. “When the Queen gives you a job, you take it.” He puts one hand on his sword. “Now go and say goodbye to your father.”`,
      localMedia: `${localBase}/paragraph-13.avif`,
      r2: `${imageBase}/paragraph-13.avif`,
      imageAlt: "The guard ordering Hapu to come to the palace.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-14",
      questions: [
        {
          question: "Where does Cleopatra want Hapu to live?",
          options: [
            { option: "She wants him to live in the market." },
            { option: "She wants him to live in his father’s factory." },
            { option: "She wants him to live at the palace, making beautiful things for her.", isCorrect: true },
          ],
        },
        {
          question: "Why does he say he cannot live there?",
          options: [
            { option: "His father is very ill.", isCorrect: true },
            { option: "He has no money for the palace." },
            { option: "He wants to work only in the market." },
          ],
        },
      ],
      title: "Paragraph 14",
      timestamp: "10:58",
      text: `At the palace, Cleopatra talks to Hapu. She is wearing his necklace. “I want you to live here and make lots of beautiful things for me,” she says. “Thank you, Queen of the Nile,” Hapu says. “But...” “But?” The Queen looks at Hapu. “But... I can't live here. You see, my father is very ill and...” Hapu tells the Queen everything.`,
      localMedia: `${localBase}/paragraph-14.avif`,
      r2: `${imageBase}/paragraph-14.avif`,
      imageAlt: "Hapu explaining his father's illness to Cleopatra.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-15",
      questions: [
        {
          question: "What solution does Cleopatra offer?",
          options: [
            { option: "Hapu can go home, and both he and his father will work only for her.", isCorrect: true },
            { option: "Hapu can go home, but he must never make necklaces again." },
            { option: "Hapu must stay at the palace and forget his father." },
          ],
        },
        {
          question: "How does Hapu feel?",
          options: [
            { option: "He feels very angry." },
            { option: "He feels very happy.", isCorrect: true },
            { option: "He feels very tired." },
          ],
        },
      ],
      title: "Paragraph 15",
      timestamp: "11:42",
      text: `At the end of Hapu's story, Cleopatra looks at him. “All right,” she says. “You can go home to your father. But...” “But?” asks Hapu. “But from today, the two of you work only for me. Do you understand?” “Oh, yes!” Hapu smiles. He is very happy. Now he and his father can make lots of beautiful things and be rich. “Yes, I understand.”`,
      localMedia: `${localBase}/paragraph-15.avif`,
      r2: `${imageBase}/paragraph-15.avif`,
      imageAlt: "Hapu smiling after Cleopatra gives him and his father work.",
      mediaPosition: "left",
    },
    {
      id: "retell-the-story",
      title: "Retell the Story",
      retell: {
        cards: [
          {
            img: `${imageBase}/paragraph-1.avif`,
            alt: "Hapu working as a fireboy in his father's factory.",
            summary:
              "Hapu is a fireboy in his father’s small factory in Egypt.",
          },
          {
            img: `${imageBase}/paragraph-2.avif`,
            alt: "Hapu and Bak talking beside the Nile.",
            summary:
              "Hapu and Bak sit beside the Nile and talk about becoming rich.",
          },
          {
            img: `${imageBase}/paragraph-3.avif`,
            alt: "Hapu helping Bak after he falls in the factory.",
            summary:
              "Bak feels ill and falls down in the hot factory.",
          },
          {
            img: `${imageBase}/paragraph-4.avif`,
            alt: "Hapu speaking to his ill father in bed.",
            summary:
              "Bak is ill in bed, so Hapu has an idea.",
          },
          {
            img: `${imageBase}/paragraph-5.avif`,
            alt: "Hapu holding the gold necklace he made.",
            summary:
              "Hapu makes a beautiful gold necklace for the Queen.",
          },
          {
            img: `${imageBase}/paragraph-6.avif`,
            alt: "The palace guards refusing to let Hapu see Cleopatra.",
            summary:
              "The palace guards laugh and do not let Hapu see the Queen.",
          },
          {
            img: `${imageBase}/paragraph-7.avif`,
            alt: "Hapu hearing two men talk in the market.",
            summary:
              "Hapu hears in the market that Cleopatra’s women are coming tomorrow.",
          },
          {
            img: `${imageBase}/paragraph-8-9.avif`,
            alt: "Hapu stepping in front of Queen Cleopatra's procession in the market.",
            summary:
              "Hapu waits in the market, then runs in front of Cleopatra’s chair.",
          },
          {
            img: `${imageBase}/paragraph-10.avif`,
            alt: "Hapu giving his necklace to Queen Cleopatra.",
            summary:
              "Hapu gives Cleopatra his necklace, and she pays him money.",
          },
          {
            img: `${imageBase}/paragraph-11.avif`,
            alt: "Hapu showing Cleopatra's money to his father.",
            summary:
              "Hapu runs home and shows his father the money.",
          },
          {
            img: `${imageBase}/paragraph-12.avif`,
            alt: "A palace guard finding Hapu beneath the night sky.",
            summary:
              "That night a palace guard comes to find Hapu.",
          },
          {
            img: `${imageBase}/paragraph-13.avif`,
            alt: "The guard ordering Hapu to come to the palace.",
            summary:
              "A guard tells Hapu that he must work at the palace.",
          },
          {
            img: `${imageBase}/paragraph-14.avif`,
            alt: "Hapu explaining his father's illness to Cleopatra.",
            summary:
              "Cleopatra asks Hapu to live at the palace and work for her.",
          },
          {
            img: `${imageBase}/paragraph-15.avif`,
            alt: "Hapu smiling after Cleopatra gives him and his father work.",
            summary:
              "Cleopatra lets Hapu go home, and he and his father work for her.",
          },
        ],
      },
    },
  ] satisfies AudiobookSection[],
};
