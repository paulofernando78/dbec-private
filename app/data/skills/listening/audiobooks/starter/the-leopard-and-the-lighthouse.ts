import type { AudiobookSection } from "./a-new-zealand-adventure";

const imageBase =
  "/media/images/skills/listening/audiobooks/starter/the-leopard-and-the-lighthouse";
const localBase =
  "local-media/images/skills/listening/audiobooks/starter/the-leopard-and-the-lighthouse";

export const theLeopardAndTheLighthouse = {
  slug: "the-leopard-and-the-lighthouse",
  title: "The Leopard and the Lighthouse",
  audio: "",
  sections: [
    {
      id: "summary",
      title: "Summary",
      text: "One day a leopard swims across the sea to Sindi. He is hungry and he is looking for food. He runs into an old lighthouse. The people of Sindi do not want the leopard in their lighthouse. But what can they do? How can they catch the leopard?",
      localMedia: `${localBase}/cover.avif`,
      r2: `${imageBase}/cover.avif`,
      imageAlt: "Cover of The Leopard and the Lighthouse.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-1",
      questions: [
        {
          question: "Where is Sindi?",
          options: [
            { option: "Sindi is a city on the African mainland." },
            { option: "Sindi is an island in East Africa.", isCorrect: true },
            { option: "Sindi is an island in the Pacific Ocean." },
          ],
        },
        {
          question: "What stands near the village?",
          options: [
            { option: "A big hotel stands near the village." },
            { option: "A small school stands near the village." },
            {
              option: "An old lighthouse stands near the village.",
              isCorrect: true,
            },
          ],
        },
        {
          question: "Who sometimes plays there?",
          options: [
            { option: "Fishermen from the mainland sometimes play there." },
            {
              option: "Children from the village sometimes play there.",
              isCorrect: true,
            },
            { option: "Tourists from other islands sometimes play there." },
          ],
        },
      ],
      title: "Paragraph 1",
      text: `Sindi is an island in East Africa. It has beautiful beaches with white sand. The sea is clear and blue. There are lovely trees and flowers in Sindi. There is also a small village with white houses. An old lighthouse stands near the village on the rocks by the sea. This lighthouse is empty now. Sometimes children from the village play in the lighthouse.`,
      localMedia: `${localBase}/paragraph-1.avif`,
      r2: `${imageBase}/paragraph-1.avif`,
      imageAlt: "The island of Sindi and its old lighthouse.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-2",
      questions: [
        {
          question: "Where does the leopard come from?",
          options: [
            { option: "He comes from the village of Sindi." },
            { option: "He comes from another island near Sindi." },
            { option: "He comes from the African mainland.", isCorrect: true },
          ],
        },
        {
          question: "Why does he swim to Sindi?",
          options: [
            {
              option: "He swims to Sindi because he is hungry and looking for food.",
              isCorrect: true,
            },
            { option: "He swims to Sindi because he wants a new home." },
            { option: "He swims to Sindi because the children call him." },
          ],
        },
      ],
      title: "Paragraph 2",
      timestamp: "0:54",
      text: `Sindi lies about five hundred metres from the mainland of Africa. A lot of animals live on the mainland—monkeys, elephants, and leopards. One day a leopard swims across the sea to Sindi. The leopard is very hungry and he is looking for food. He swims quickly. He comes to the beach and gets out of the water. Then he walks along the road to the village.`,
      localMedia: `${localBase}/paragraph-2.avif`,
      r2: `${imageBase}/paragraph-2.avif`,
      imageAlt: "A leopard swimming from the mainland to Sindi.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-3",
      questions: [
        {
          question: "Where does the leopard run?",
          options: [
            { option: "He runs into the school." },
            { option: "He runs into the marketplace.", isCorrect: true },
            { option: "He runs onto the beach." },
          ],
        },
        {
          question: "How do the people react?",
          options: [
            { option: "The people laugh and take photographs." },
            { option: "The people run to the lighthouse." },
            {
              option: "The children cry and the men throw stones.",
              isCorrect: true,
            },
          ],
        },
      ],
      title: "Paragraph 3",
      timestamp: "1:34",
      text: `There is a marketplace in the village. Many people with small children are shopping in the market. They are buying meat, vegetables, and fruit. Suddenly, the hungry leopard runs into the marketplace. The people see him. Children cry and men throw stones. Some of the stones hit the leopard. He runs out of the market.`,
      localMedia: `${localBase}/paragraph-3.avif`,
      r2: `${imageBase}/paragraph-3.avif`,
      imageAlt: "The leopard running through the crowded marketplace.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-4",
      questions: [
        {
          question: "Why are the villagers chasing the leopard?",
          options: [
            { option: "They chase him because he is very hungry." },
            {
              option: "They chase him because they do not want him in their village.",
              isCorrect: true,
            },
            { option: "They chase him because he takes their food." },
          ],
        },
        {
          question: "Where does he turn?",
          options: [
            {
              option: "He turns along a small road between two high walls.",
              isCorrect: true,
            },
            { option: "He turns towards the marketplace." },
            { option: "He turns towards the beach." },
          ],
        },
      ],
      title: "Paragraph 4",
      timestamp: "2:10",
      text: `The leopard runs through the streets of the village. Behind him, the people are following and throwing stones. They are very angry. They do not want a leopard in their village. The leopard is very tired now. But where can he run? He sees a small road between two high walls. He turns and runs along this road. The people follow him.`,
      localMedia: `${localBase}/paragraph-4.avif`,
      r2: `${imageBase}/paragraph-4.avif`,
      imageAlt: "Villagers chasing the leopard through the streets.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-5",
      questions: [
        {
          question: "Which building does the leopard enter?",
          options: [
            { option: "He enters the village school." },
            { option: "He enters the old lighthouse.", isCorrect: true },
            { option: "He enters a white house near the market." },
          ],
        },
        {
          question: "Where does he run inside it?",
          options: [
            { option: "He runs into the kitchen." },
            { option: "He runs down to the beach." },
            { option: "He runs up the stairs.", isCorrect: true },
          ],
        },
      ],
      title: "Paragraph 5",
      timestamp: "2:46",
      text: `The leopard runs quickly along the road. He cannot see over the walls. He cannot go back and there is no way out. Suddenly, he sees a tall building. The door of this building is open. He runs through the door. Then he stops. What now? The people are coming. He sees some stairs. He runs up the stairs—up into the building. The building is the old lighthouse.`,
      localMedia: `${localBase}/paragraph-5.avif`,
      r2: `${imageBase}/paragraph-5.avif`,
      imageAlt: "The leopard entering the old lighthouse.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-6",
      questions: [
        {
          question: "Where do the people find the leopard?",
          options: [
            { option: "They find him at the bottom of the stairs." },
            {
              option:
                "They find him high up on the wall at the top of the lighthouse.",
              isCorrect: true,
            },
            { option: "They find him outside the lighthouse door." },
          ],
        },
      ],
      title: "Paragraph 6",
      timestamp: "3:30",
      text: `Then the people stop running. “What's happening?” they ask. “Where is the leopard?” Then one man looks up at the lighthouse. “Look!” he says. “The leopard is in the lighthouse!” The people look up. They can see the leopard high up on the wall at the top of the lighthouse. The leopard looks down at the people. The people look up at the leopard.`,
      localMedia: `${localBase}/paragraph-6.avif`,
      r2: `${imageBase}/paragraph-6.avif`,
      imageAlt:
        "The villagers seeing the leopard at the top of the lighthouse.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-7",
      questions: [
        {
          question: "How long does the leopard stay in the lighthouse?",
          options: [
            { option: "He stays in the lighthouse for one night." },
            { option: "He stays in the lighthouse for a week." },
            {
              option: "He stays in the lighthouse for three days and nights.",
              isCorrect: true,
            },
          ],
        },
        {
          question: "Do the people go inside?",
          options: [
            { option: "Yes, they go inside to catch him." },
            { option: "No, they do not go inside.", isCorrect: true },
          ],
        },
      ],
      title: "Paragraph 7",
      timestamp: "4:05",
      text: `The leopard stays in the lighthouse for three days and nights. He has no food or water, but he does not come down the stairs. “What now?” ask the people. “How can we get the leopard out of the lighthouse?” They talk and talk. But they do not go into the lighthouse. The people watch the leopard. The leopard watches the people. The people wait and the leopard waits.`,
      localMedia: `${localBase}/paragraph-7.avif`,
      r2: `${imageBase}/paragraph-7.avif`,
      imageAlt: "The leopard and villagers waiting outside the lighthouse.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-8",
      questions: [
        {
          question: "Who is Mohammed?",
          options: [
            { option: "He is the lighthouse keeper." },
            { option: "He is the Head Man of Sindi.", isCorrect: true },
            { option: "He is an old man from the mainland." },
          ],
        },
        {
          question: "What competition does he announce?",
          options: [
            { option: "He announces a competition to catch fish." },
            { option: "He announces a competition to run to the lighthouse." },
            {
              option: "He announces a competition to kill the leopard.",
              isCorrect: true,
            },
          ],
        },
        {
          question: "What will the winner receive?",
          options: [
            { option: "The winner can marry Tanza.", isCorrect: true },
            { option: "The winner will receive a big house." },
            { option: "The winner will receive lots of animals." },
          ],
        },
      ],
      title: "Paragraph 8",
      timestamp: "4:44",
      text: `The Head Man of Sindi is called Mohammed. Mohammed has a beautiful daughter, Tanza. “What can we do?” the people ask Mohammed. “The leopard is very hungry and can kill our children. We must catch him. But how?” Mohammed thinks. Then he says, “Let the men of Sindi have a competition. The competition is to kill the leopard. The winner can marry Tanza.”`,
      localMedia: `${localBase}/paragraph-8.avif`,
      r2: `${imageBase}/paragraph-8.avif`,
      imageAlt: "Mohammed announcing a competition to the people of Sindi.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-9",
      questions: [
        {
          question: "Why doesn't Tanza like Ahmed?",
          options: [
            { option: "She does not like him because he is poor." },
            {
              option: "She does not like him because he is old.",
              isCorrect: true,
            },
            { option: "She does not like him because he talks a lot." },
          ],
        },
        {
          question: "Does Ahmed's gun stop the leopard?",
          options: [
            { option: "Yes, the leopard falls off the wall." },
            { option: "Yes, the leopard runs away from the lighthouse." },
            {
              option: "No, the leopard does not fall off the wall.",
              isCorrect: true,
            },
          ],
        },
      ],
      title: "Paragraph 9",
      timestamp: "5:37",
      text: `Many men in Sindi are in love with Tanza. One man is called Ahmed. Ahmed has a big house and lots of animals, but he is old and Tanza does not like him. Ahmed has a gun. He brings the gun to the lighthouse. The leopard is high up on the walls of the lighthouse. Ahmed fires the gun. Bang! But the leopard does not fall off the wall. Tanza is very happy.`,
      localMedia: `${localBase}/paragraph-9.avif`,
      r2: `${imageBase}/paragraph-9.avif`,
      imageAlt: "Ahmed firing his gun at the leopard.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-10",
      questions: [
        {
          question: "How does Jamal plan to catch the leopard?",
          options: [
            { option: "He plans to shoot the leopard with a gun." },
            {
              option: "He plans to kill the leopard with his knife.",
              isCorrect: true,
            },
            { option: "He plans to catch the leopard with a net." },
          ],
        },
        {
          question: "What does Jamal do with the goat?",
          options: [
            {
              option: "He ties the goat to the bottom of the stairs.",
              isCorrect: true,
            },
            { option: "He gives the goat to Tanza." },
            { option: "He takes the goat up the stairs to the leopard." },
          ],
        },
      ],
      title: "Paragraph 10",
      timestamp: "6:23",
      text: `There is a young man called Jamal. Jamal is big and strong. But he talks a lot and Tanza does not like him. Now Jamal says, “I can kill the leopard. I can kill him with my knife.” He brings a goat and some rope to the lighthouse. The leopard is at the top of the lighthouse. Jamal ties the goat to the bottom of the stairs. Then he waits.`,
      localMedia: `${localBase}/paragraph-10.avif`,
      r2: `${imageBase}/paragraph-10.avif`,
      imageAlt: "Jamal tying a goat near the lighthouse stairs.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-11",
      questions: [
        {
          question: "Why does the leopard come downstairs?",
          options: [
            { option: "He comes downstairs because he wants some water." },
            { option: "He comes downstairs because he sees Jamal." },
            {
              option:
                "He comes downstairs because he is hungry and smells the goat.",
              isCorrect: true,
            },
          ],
        },
        {
          question: "How does the goat escape?",
          options: [
            { option: "Jamal lets it go because he feels sorry for it." },
            {
              option: "It pulls until the rope breaks and runs away.",
              isCorrect: true,
            },
            { option: "Tanza takes the goat away from the stairs." },
          ],
        },
      ],
      title: "Paragraph 11",
      timestamp: "7:02",
      text: `The leopard is very hungry. He can smell the goat. It smells good. At last, the leopard comes down the stairs. He sees the goat but he does not see Jamal. Now the goat can see the leopard. He pulls and pulls at the rope. The rope breaks and the goat runs away. The leopard turns and runs back up the stairs. Jamal is very angry but Tanza is happy.`,
      localMedia: `${localBase}/paragraph-11.avif`,
      r2: `${imageBase}/paragraph-11.avif`,
      imageAlt: "The goat escaping as the leopard comes down the stairs.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-12",
      questions: [
        {
          question: "What does the quiet young man put in his gun?",
          options: [
            { option: "He puts a dart in his gun.", isCorrect: true },
            { option: "He puts his knife in his gun." },
            { option: "He puts a stone in his gun." },
          ],
        },
        {
          question: "What does he plan to do?",
          options: [
            { option: "He plans to give the dart to Mohammed." },
            { option: "He plans to shoot the leopard with Ahmed’s gun." },
            {
              option: "He plans to shoot the dart into the leopard.",
              isCorrect: true,
            },
          ],
        },
      ],
      title: "Paragraph 12",
      timestamp: "7:45",
      text: `“What now?” asks Mohammed. “Perhaps I can help,” says a quiet young man. He has a gun but it is not like Ahmed's gun. He also has something in his hand. “What's that?” asks Mohammed. “It's a dart,” says the young man. “I can shoot the dart into the leopard with the gun.” “And then what happens?” asks Mohammed. “Watch,” says the young man. He puts the dart into the gun.`,
      localMedia: `${localBase}/paragraph-12.avif`,
      r2: `${imageBase}/paragraph-12.avif`,
      imageAlt: "A quiet young man showing Mohammed a tranquilizer dart.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-13",
      questions: [
        {
          question: "What is the young man's name?",
          options: [
            { option: "His name is Ahmed." },
            { option: "His name is Jamal." },
            { option: "His name is Saied.", isCorrect: true },
          ],
        },
        {
          question: "Why do Ahmed and Jamal laugh?",
          options: [
            { option: "They laugh because Tanza smiles at them." },
            {
              option: "They laugh because the leopard does not fall off the wall.",
              isCorrect: true,
            },
            { option: "They laugh because Saied has no gun." },
          ],
        },
        {
          question: "What does Saied tell them to do?",
          options: [
            { option: "He tells them to wait.", isCorrect: true },
            { option: "He tells them to go home." },
            { option: "He tells them to call Mohammed." },
          ],
        },
      ],
      title: "Paragraph 13",
      timestamp: "8:30",
      text: `Tanza looks at the young man. He has nice eyes and a kind face. “What's your name?” she asks. “Saied,” says the young man. He smiles at her. Tanza smiles, too. She likes him. The leopard is on the lighthouse wall. Saied holds his gun and fires. Pop! But nothing happens. The leopard does not fall off the wall. Ahmed and Jamal are laughing. “Wait,” says Saied. Fifteen minutes pass.`,
      localMedia: `${localBase}/paragraph-13.avif`,
      r2: `${imageBase}/paragraph-13.avif`,
      imageAlt: "Saied firing the dart at the leopard.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-14",
      questions: [
        {
          question: "Is the leopard dead?",
          options: [
            { option: "Yes, the leopard is dead." },
            { option: "No, he is only sleeping.", isCorrect: true },
          ],
        },
        {
          question: "Why does Saied ask for the leopard?",
          options: [
            { option: "He wants to take the leopard to the marketplace." },
            { option: "He wants to give the leopard to Ahmed." },
            {
              option:
                "He thinks the leopard is beautiful and he wants to save him.",
              isCorrect: true,
            },
          ],
        },
      ],
      title: "Paragraph 14",
      timestamp: "9:26",
      text: `“Look!” says Saied. “The leopard is falling. Come on!” He runs up the stairs and the people follow. “Is the leopard dead?” asks Tanza. “No,” says Saied. “My dart doesn't kill animals. He is only sleeping.” “Let's kill him now,” shout the people. “No,” says Saied. “The leopard is beautiful. Please give him to me.” “All right,” says Mohammed. “The leopard is yours, Saied.”`,
      localMedia: `${localBase}/paragraph-14.avif`,
      r2: `${imageBase}/paragraph-14.avif`,
      imageAlt: "Saied protecting the sleeping leopard from the villagers.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-15",
      questions: [
        {
          question: "Where does Saied take the leopard?",
          options: [
            { option: "He takes the leopard to the old lighthouse." },
            {
              option:
                "He takes the leopard to the Animal Park in Nairobi.",
              isCorrect: true,
            },
            { option: "He takes the leopard to the African mainland." },
          ],
        },
        {
          question: "Who does he marry?",
          options: [
            { option: "He marries a woman from Nairobi." },
            { option: "He marries Mohammed’s sister." },
            { option: "He marries Tanza.", isCorrect: true },
          ],
        },
        {
          question: "Who hears the story five years later?",
          options: [
            { option: "His children hear the story.", isCorrect: true },
            { option: "The people of Sindi hear the story." },
            { option: "The men of the competition hear the story." },
          ],
        },
      ],
      title: "Paragraph 15",
      timestamp: "10:11",
      text: `Saied takes the leopard to the Animal Park in Nairobi. Then he comes back to Sindi. Later, Tanza and Saied get married. Five years pass. They have children now—two boys and a girl. They are very happy. They often visit the Animal Park and sometimes the children see the leopard. “Tell us the story of the leopard and the lighthouse,” say the children. And Saied tells them the story.`,
      localMedia: `${localBase}/paragraph-15.avif`,
      r2: `${imageBase}/paragraph-15.avif`,
      imageAlt: "Saied and Tanza visiting the leopard with their children.",
      mediaPosition: "left",
    },
    {
      id: "retell-the-story",
      title: "Retell the Story",
      retell: {
        cards: [
          {
            img: `${imageBase}/paragraph-1.avif`,
            alt: "The island of Sindi and its old lighthouse.",
            summary:
              "An old, empty lighthouse stands near the village on the rocks.",
          },
          {
            img: `${imageBase}/paragraph-2.avif`,
            alt: "A leopard swimming from the mainland to Sindi.",
            summary:
              "A hungry leopard swims across the sea from the mainland to Sindi.",
          },
          {
            img: `${imageBase}/paragraph-3.avif`,
            alt: "The leopard running through the crowded marketplace.",
            summary:
              "The leopard runs into the marketplace, so the men throw stones.",
          },
          {
            img: `${imageBase}/paragraph-4.avif`,
            alt: "Villagers chasing the leopard through the streets.",
            summary:
              "The leopard runs along a small road between two high walls.",
          },
          {
            img: `${imageBase}/paragraph-5.avif`,
            alt: "The leopard entering the old lighthouse.",
            summary:
              "The leopard runs through an open door and up the lighthouse stairs.",
          },
          {
            img: `${imageBase}/paragraph-6.avif`,
            alt: "The villagers seeing the leopard at the top of the lighthouse.",
            summary:
              "The people see the leopard high up at the top of the lighthouse.",
          },
          {
            img: `${imageBase}/paragraph-7.avif`,
            alt: "The leopard and villagers waiting outside the lighthouse.",
            summary:
              "The leopard stays in the lighthouse for three days and nights.",
          },
          {
            img: `${imageBase}/paragraph-8.avif`,
            alt: "Mohammed announcing a competition to the people of Sindi.",
            summary:
              "Mohammed announces a competition to kill the leopard, and the winner can marry Tanza.",
          },
          {
            img: `${imageBase}/paragraph-9.avif`,
            alt: "Ahmed firing his gun at the leopard.",
            summary:
              "Ahmed fires his gun, but the leopard does not fall off the wall.",
          },
          {
            img: `${imageBase}/paragraph-10.avif`,
            alt: "Jamal tying a goat near the lighthouse stairs.",
            summary: "Jamal ties a goat to the bottom of the stairs and waits.",
          },
          {
            img: `${imageBase}/paragraph-11.avif`,
            alt: "The goat escaping as the leopard comes down the stairs.",
            summary:
              "The goat breaks the rope and runs away, so the leopard goes back up.",
          },
          {
            img: `${imageBase}/paragraph-12.avif`,
            alt: "A quiet young man showing Mohammed a tranquilizer dart.",
            summary: "A quiet young man puts a dart into his gun.",
          },
          {
            img: `${imageBase}/paragraph-13.avif`,
            alt: "Saied firing the dart at the leopard.",
            summary:
              "Saied fires the dart, but nothing happens, so he says to wait.",
          },
          {
            img: `${imageBase}/paragraph-14.avif`,
            alt: "Saied protecting the sleeping leopard from the villagers.",
            summary:
              "The leopard is only sleeping, and Saied asks to keep him.",
          },
          {
            img: `${imageBase}/paragraph-15.avif`,
            alt: "Saied and Tanza visiting the leopard with their children.",
            summary:
              "Saied takes the leopard to the Animal Park and later marries Tanza.",
          },
        ],
      },
    },
  ] satisfies AudiobookSection[],
};
