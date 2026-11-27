import type { AudiobookSection } from "./a-new-zealand-adventure";

const imageBase =
  "/media/images/skills/listening/audiobooks/starter/the-troy-stone";
const localBase =
  "local-media/images/skills/listening/audiobooks/starter/the-troy-stone";

export const theTroyStone = {
  slug: "the-troy-stone",
  title: "The Troy Stone",
  audio: "",
  sections: [
    {
      id: "summary",
      title: "Summary",
      text: "Mark Jackson is on holiday in Turkey. He visits the old city of Troy and finds a yellow stone. 'I know this stone,' he thinks. 'It comes from ... from ...' Suddenly Mark goes back in time. He can see a beautiful city, soldiers and a big wooden horse.",
      localMedia: `${localBase}/cover.avif`,
      r2: `${imageBase}/cover.avif`,
      imageAlt: "Cover of The Troy Stone.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-1",
      title: "Paragraph 1",
      text: `The Jackson family are on holiday in Turkey. They are staying at a big hotel in Istanbul. Mark (13), his sister Fay (12) and their parents like Turkey. It is beautiful, the weather is hot and the food is good. There is a lot to see, too. Today they are visiting the city of Troy. It is 9 o'clock in the morning. They are getting on a bus in front of their hotel.`,
      questions: [
        {
          question: "Where is the Jackson family on holiday?",
          options: [
            { option: "They are on holiday in Greece." },
            { option: "They are on holiday in Turkey.", isCorrect: true },
            { option: "They are on holiday in Italy." },
          ],
        },
        {
          question: "What time are they getting on the bus?",
          options: [
            { option: "They are getting on the bus at 8 o’clock." },
            { option: "They are getting on the bus at 10 o’clock." },
            {
              option:
                "They are getting on the bus at 9 o’clock in the morning.",
              isCorrect: true,
            },
          ],
        },
      ],
      localMedia: `${localBase}/paragraph-1.avif`,
      r2: `${imageBase}/paragraph-1.avif`,
      imageAlt: "The Jackson family getting on a bus in Istanbul.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-2",
      title: "Paragraph 2",
      text: `There are forty people on the bus. They come from Britain, America, France, Italy and Holland. At Troy they all have lunch. Then they start to look at the old city. It is a very hot day. After an hour, Mark sits under a tree. 'I'm going to stop here for a moment,' he tells Fay. 'OK,' she answers. Then Mark sees something on the ground. 'What's that?' he thinks.`,
      questions: [
        {
          question: "Where does Mark sit?",
          options: [
            { option: "He sits under a tree.", isCorrect: true },
            { option: "He sits on the bus." },
            { option: "He sits near the hotel." },
          ],
        },
        {
          question: "What does he see on the ground?",
          options: [
            { option: "He sees a coin on the ground." },
            { option: "He sees a stone on the ground.", isCorrect: true },
            { option: "He sees a bag on the ground." },
          ],
        },
      ],
      localMedia: `${localBase}/paragraph-2.avif`,
      r2: `${imageBase}/paragraph-2.avif`,
      imageAlt: "Mark sitting under a tree at Troy.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-3",
      title: "Paragraph 3",
      text: `It is a flat, yellow stone. Mark picks it up. Then he starts to clean it with his hands. 'But I know this stone,' he thinks. 'It comes from ... from ...' Suddenly there is a white light in his eyes. Mark closes them. The light is strong. Now there is a loud wind in his ears. He cannot hear or see anything. 'What's happening?' he thinks.`,
      questions: [
        {
          question: "What colour is the stone?",
          options: [
            { option: "The stone is grey." },
            { option: "The stone is brown." },
            { option: "The stone is yellow.", isCorrect: true },
          ],
        },
        {
          question: "What happens when Mark cleans it?",
          options: [
            {
              option: "There is a white light and a loud wind.",
              isCorrect: true,
            },
            { option: "There is a black light and a quiet wind." },
            { option: "There is a loud noise and a lot of rain." },
          ],
        },
      ],
      localMedia: `${localBase}/paragraph-3.avif`,
      r2: `${imageBase}/paragraph-3.avif`,
      imageAlt: "Mark holding the yellow stone as a bright light appears.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-4",
      title: "Paragraph 4",
      text: `Ten seconds later the light and the wind stop. Mark opens his eyes. He is standing on a beach. He can see hundreds of ships and men. Behind him there is a beautiful city with high walls. 'Where am I?' he thinks. 'Where's my family?' He puts the yellow stone in his pocket. Then one of the men says to him, 'Boy! Come here!'`,
      questions: [
        {
          question: "Where is Mark standing?",
          options: [
            { option: "He is standing on a ship." },
            { option: "He is standing on a beach.", isCorrect: true },
            { option: "He is standing in a city." },
          ],
        },
        {
          question: "What does he put in his pocket?",
          options: [
            { option: "He puts a wooden horse in his pocket." },
            { option: "He puts a coin in his pocket." },
            {
              option: "He puts the yellow stone in his pocket.",
              isCorrect: true,
            },
          ],
        },
      ],
      localMedia: `${localBase}/paragraph-4.avif`,
      r2: `${imageBase}/paragraph-4.avif`,
      imageAlt: "Mark standing on a beach full of ships.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-5",
      title: "Paragraph 5",
      text: `'Me?' Mark walks across the beach to a long, black ship. 'Carry this,' the man says. He gives Mark a lot of wood. Then he gets off the ship. 'Follow me,' he says. Mark follows him. The man is very tall and has a short, brown beard. 'I don't know your face,' he says. 'Are you new here?' 'Y-yes,' Mark answers. 'That's right. I'm new here.'`,
      questions: [
        {
          question: "Where does Mark walk?",
          options: [
            { option: "He walks to a long, black ship.", isCorrect: true },
            { option: "He walks to a big hotel." },
            { option: "He walks to the city gates." },
          ],
        },
        {
          question: "What is the man's beard like?",
          options: [
            { option: "It is long and grey." },
            { option: "It is short and brown.", isCorrect: true },
            { option: "It is short and black." },
          ],
        },
      ],
      localMedia: `${localBase}/paragraph-5.avif`,
      r2: `${imageBase}/paragraph-5.avif`,
      imageAlt: "Mark carrying wood near a black ship.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-6",
      title: "Paragraph 6",
      text: `'My name is Andros,' says the man. He and Mark walk for another ten minutes. Then they climb a small hill. At the top Mark stops. There, in front of them, is a big wooden horse. Andros sees Mark's face and smiles. 'Well ... what do you think of it?' he asks. Mark does not answer, and Andros says, 'This horse is going to win the war for us Greeks.'`,
      questions: [
        {
          question: "What do they see at the top of the hill?",
          options: [
            { option: "They see a beautiful city." },
            { option: "They see a long, black ship." },
            { option: "They see a big wooden horse.", isCorrect: true },
          ],
        },
        {
          question: "What is the horse going to do?",
          options: [
            {
              option: "It is going to win the war for the Greeks.",
              isCorrect: true,
            },
            { option: "It is going to carry wood for the soldiers." },
            { option: "It is going to take Mark back to his family." },
          ],
        },
      ],
      localMedia: `${localBase}/paragraph-6.avif`,
      r2: `${imageBase}/paragraph-6.avif`,
      imageAlt: "Andros showing Mark the wooden horse.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-7",
      title: "Paragraph 7",
      text: `They walk down the hill. There are a lot of men working under the horse. One of them talks to Andros. 'There's a problem,' he says. 'We can't find a stone for the second eye. We must find one before tomorrow.' Mark looks at the horse's one bright eye. Then he remembers the stone in his pocket. 'Wait!' he says. 'I think I can help you.'`,
      questions: [
        {
          question: "What problem do the men have?",
          options: [
            { option: "They cannot find a horse for the Greeks." },
            {
              option: "They cannot find a stone for the second eye.",
              isCorrect: true,
            },
            { option: "They cannot find wood for the horse." },
          ],
        },
        {
          question: "What does Mark remember?",
          options: [
            {
              option: "He remembers the stone in his pocket.",
              isCorrect: true,
            },
            { option: "He remembers his family in Istanbul." },
            { option: "He remembers the wooden horse on the hill." },
          ],
        },
      ],
      localMedia: `${localBase}/paragraph-7.avif`,
      r2: `${imageBase}/paragraph-7.avif`,
      imageAlt: "Mark looking at the wooden horse's eye.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-8",
      title: "Paragraph 8",
      text: `He takes the stone out of his pocket. 'But how ...?!' says Andros. The man smiles. 'That's it. That's it!' He looks at Mark. 'What's your name, boy?' Mark tells him. 'He's new here,' says Andros. 'Ah!' The man is very happy. 'Well ... we must thank him. I know. You can come with us in the horse tomorrow night.' Mark's mouth opens. 'Me?!'`,
      questions: [
        {
          question: "What does Mark give the man?",
          options: [
            { option: "He gives him a lot of wood." },
            { option: "He gives him a small wooden horse." },
            { option: "He gives him the yellow stone.", isCorrect: true },
          ],
        },
        {
          question: "Where will Mark go tomorrow night?",
          options: [
            { option: "He will go back to his hotel." },
            { option: "He will go in the horse.", isCorrect: true },
            { option: "He will go to Ana's house." },
          ],
        },
      ],
      localMedia: `${localBase}/paragraph-8.avif`,
      r2: `${imageBase}/paragraph-8.avif`,
      imageAlt: "Mark giving the stone to the Greek soldiers.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-9",
      title: "Paragraph 9",
      text: `That evening Mark sits near a big fire on the beach. There is an old woman beside him. Her name is Ana and she is a cook. She tells Mark lots of stories. Stories about Greece, the war, and the beautiful princess — Helen. In the end she goes to bed. 'Goodbye, boy,' she says. 'Come and see me again one day. Come and see me again.'`,
      questions: [
        {
          question: "Who is Ana?",
          options: [
            { option: "She is an old cook.", isCorrect: true },
            { option: "She is a Greek soldier." },
            { option: "She is the princess Helen." },
          ],
        },
        {
          question: "What stories does she tell?",
          options: [
            { option: "She tells stories about her family." },
            { option: "She tells stories about the wooden horse." },
            {
              option: "She tells stories about Greece, the war and Helen.",
              isCorrect: true,
            },
          ],
        },
      ],
      localMedia: `${localBase}/paragraph-9.avif`,
      r2: `${imageBase}/paragraph-9.avif`,
      imageAlt: "Mark sitting by the fire with Ana.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-10",
      title: "Paragraph 10",
      text: `Next morning the horse is ready. Greek soldiers pull it to the gates of Troy. Then they leave it there. Inside the horse there are forty Greeks. They wait all afternoon under the hot, yellow sun. Mark is sitting in the horse's head. 'What happens now?' he thinks. Suddenly the gates open. Trojan soldiers walk out. They pull the horse inside and shut the gates again.`,
      questions: [
        {
          question: "How many Greeks are inside the horse?",
          options: [
            { option: "There are fourteen Greeks inside the horse." },
            {
              option: "There are forty Greeks inside the horse.",
              isCorrect: true,
            },
            { option: "There are four hundred Greeks inside the horse." },
          ],
        },
        {
          question: "Who pulls the horse inside Troy?",
          options: [
            { option: "The Trojan soldiers pull it inside.", isCorrect: true },
            { option: "The Greek soldiers pull it inside." },
            { option: "The old woman pulls it inside." },
          ],
        },
      ],
      localMedia: `${localBase}/paragraph-10.avif`,
      r2: `${imageBase}/paragraph-10.avif`,
      imageAlt: "Mark looking out from inside the wooden horse.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-11",
      title: "Paragraph 11",
      text: `Mark can hear the Trojans. 'Why are the Greeks giving us this horse?' asks one. 'Do you think they want to end the war?' 'Yes! Look!' says a soldier on top of the city walls. 'Their ships are leaving!' After that the Trojans eat, sing and dance all evening. Then they go to bed very late and Troy is quiet. At that moment the Greeks climb out of the horse.`,
      questions: [
        {
          question: "What do the Trojans think about the Greek ships?",
          options: [
            { option: "They think the Greek ships are on fire." },
            { option: "They think the Greek ships are full of soldiers." },
            { option: "They think the Greeks are leaving.", isCorrect: true },
          ],
        },
        {
          question: "When do the Greeks climb out?",
          options: [
            { option: "They climb out in the morning." },
            {
              option: "They climb out at night, when Troy is quiet.",
              isCorrect: true,
            },
            { option: "They climb out after lunch." },
          ],
        },
      ],
      localMedia: `${localBase}/paragraph-11.avif`,
      r2: `${imageBase}/paragraph-11.avif`,
      imageAlt: "The wooden horse inside the walls of Troy.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-12",
      title: "Paragraph 12",
      text: `Four men go to the gates and open them. A minute later there are thousands of Greek soldiers in the city. They and their ships are back! They run from one building to another. In five minutes Troy is on fire. Mark watches all this. Suddenly he sees a beautiful woman. She is running along the city walls. 'It's Helen,' he thinks, 'Helen of Troy!'`,
      questions: [
        {
          question: "What happens to Troy?",
          options: [
            { option: "Troy is on fire.", isCorrect: true },
            { option: "Troy is very quiet." },
            { option: "Troy wins the war." },
          ],
        },
        {
          question: "Who does Mark see on the city walls?",
          options: [
            { option: "He sees Ana on the city walls." },
            { option: "He sees Andros on the city walls." },
            {
              option: "He sees Helen of Troy on the city walls.",
              isCorrect: true,
            },
          ],
        },
      ],
      localMedia: `${localBase}/paragraph-12.avif`,
      r2: `${imageBase}/paragraph-12.avif`,
      imageAlt: "Helen running along the burning walls of Troy.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-13",
      title: "Paragraph 13",
      text: `At that moment Andros says, 'Follow me, boy.' He runs down a small street very fast. Mark follows, but the street is full of smoke. After a minute he cannot see anything. 'Andros!' he says. 'Where are you?' Then suddenly two Trojans with swords come out of the smoke. Mark looks at them. 'Please don't kill me,' he says. 'Don't kill me! Please!'`,
      questions: [
        {
          question: "Who runs down the street with Mark?",
          options: [
            { option: "Fay runs down the street with him." },
            {
              option: "Andros runs down the street with him.",
              isCorrect: true,
            },
            { option: "Ana runs down the street with him." },
          ],
        },
        {
          question: "Who comes out of the smoke?",
          options: [
            {
              option: "Two Trojans with swords come out of the smoke.",
              isCorrect: true,
            },
            { option: "Two Greeks with swords come out of the smoke." },
            { option: "Two soldiers with wood come out of the smoke." },
          ],
        },
      ],
      localMedia: `${localBase}/paragraph-13.avif`,
      r2: `${imageBase}/paragraph-13.avif`,
      imageAlt: "Two Trojan soldiers with swords in the smoke.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-14",
      title: "Paragraph 14",
      text: `'Mark! Mark! It's 4 o'clock. The bus is leaving in a minute.' Fay is looking down at Mark. After a moment he suddenly wakes up. 'What?' he asks. 'The bus is leaving,' Fay says again. Then she asks, 'Are you OK? Your face is white. And what's that dirty stone?' Mark looks at the yellow stone in his hand. 'This? Oh ... it's nothing,' he says.`,
      questions: [
        {
          question: "Who wakes Mark up?",
          options: [
            { option: "Andros wakes him up." },
            { option: "His mother wakes him up." },
            { option: "Fay wakes him up.", isCorrect: true },
          ],
        },
        {
          question: "What does Mark say about the stone?",
          options: [
            { option: "He says it is a present for Fay." },
            { option: "He says it is nothing.", isCorrect: true },
            { option: "He says it is very expensive." },
          ],
        },
      ],
      localMedia: `${localBase}/paragraph-14.avif`,
      r2: `${imageBase}/paragraph-14.avif`,
      imageAlt: "Fay looking down at Mark under the tree.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-15",
      title: "Paragraph 15",
      text: `Mark stands up. He sees an old woman. She has lots of small wooden horses in a basket. 'Do you want one, boy?' she asks. 'Yes. Why not?' Mark buys a horse and looks at the woman. 'No. It can't be,' he thinks. He walks to the bus. Behind him the old woman smiles. 'Goodbye, boy,' she says. 'Come and see me again one day. Come and see me again.'`,
      questions: [
        {
          question: "What does Mark buy?",
          options: [
            { option: "He buys a big wooden horse." },
            { option: "He buys a small wooden horse.", isCorrect: true },
            { option: "He buys a yellow stone." },
          ],
        },
        {
          question: "What does the old woman say?",
          options: [
            {
              option: "She says he can come and see her again one day.",
              isCorrect: true,
            },
            { option: "She says he must go back to the hotel." },
            { option: "She says the bus is leaving." },
          ],
        },
      ],
      localMedia: `${localBase}/paragraph-15.avif`,
      r2: `${imageBase}/paragraph-15.avif`,
      imageAlt: "Mark walking away as the old woman smiles.",
      mediaPosition: "left",
    },
    {
      id: "retell-the-story",
      title: "Retell the Story",
      retell: {
        cards: [
          {
            img: `${imageBase}/paragraph-1.avif`,
            alt: "The Jackson family getting on a bus in Istanbul.",
            summary: "The Jackson family get on a bus to visit Troy.",
          },
          {
            img: `${imageBase}/paragraph-2.avif`,
            alt: "Mark sitting under a tree at Troy.",
            summary: "Mark sits under a tree and sees something on the ground.",
          },
          {
            img: `${imageBase}/paragraph-3.avif`,
            alt: "Mark holding the yellow stone as a bright light appears.",
            summary: "Mark cleans a yellow stone and a light and wind appear.",
          },
          {
            img: `${imageBase}/paragraph-4.avif`,
            alt: "Mark standing on a beach full of ships.",
            summary: "Mark is on a beach with many ships and high walls.",
          },
          {
            img: `${imageBase}/paragraph-5.avif`,
            alt: "Mark carrying wood near a black ship.",
            summary: "A tall man tells Mark to carry wood to a black ship.",
          },
          {
            img: `${imageBase}/paragraph-6.avif`,
            alt: "Andros showing Mark the wooden horse.",
            summary:
              "At the top of a hill, Andros shows Mark a big wooden horse.",
          },
          {
            img: `${imageBase}/paragraph-7.avif`,
            alt: "Mark looking at the wooden horse's eye.",
            summary:
              "The men need a stone for the horse’s second eye, so Mark offers help.",
          },
          {
            img: `${imageBase}/paragraph-8.avif`,
            alt: "Mark giving the stone to the Greek soldiers.",
            summary:
              "Mark gives the yellow stone, so the man invites him into the horse.",
          },
          {
            img: `${imageBase}/paragraph-9.avif`,
            alt: "Mark sitting by the fire with Ana.",
            summary: "Ana, an old cook, tells Mark stories by the fire.",
          },
          {
            img: `${imageBase}/paragraph-10.avif`,
            alt: "Mark looking out from inside the wooden horse.",
            summary: "The Trojans pull the horse inside the gates of Troy.",
          },
          {
            img: `${imageBase}/paragraph-11.avif`,
            alt: "The wooden horse inside the walls of Troy.",
            summary: "At night, the Greeks climb out of the horse.",
          },
          {
            img: `${imageBase}/paragraph-12.avif`,
            alt: "Helen running along the burning walls of Troy.",
            summary: "The Greeks open the gates and Troy is on fire.",
          },
          {
            img: `${imageBase}/paragraph-13.avif`,
            alt: "Two Trojan soldiers with swords in the smoke.",
            summary: "Two Trojans with swords come out of the smoke.",
          },
          {
            img: `${imageBase}/paragraph-14.avif`,
            alt: "Fay looking down at Mark under the tree.",
            summary: "Fay wakes Mark up and says the bus is leaving.",
          },
          {
            img: `${imageBase}/paragraph-15.avif`,
            alt: "Mark walking away as the old woman smiles.",
            summary: "Mark buys a small wooden horse from the old woman.",
          },
        ],
      },
    },
  ] satisfies AudiobookSection[],
};
