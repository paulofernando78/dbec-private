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
      questions: ["Where is the Jackson family on holiday?", "What time are they getting on the bus?"],
      answers: ["In Turkey.", "At 9 o'clock in the morning."],
      localMedia: `${localBase}/paragraph-1.avif`,
      r2: `${imageBase}/paragraph-1.avif`,
      imageAlt: "The Jackson family getting on a bus in Istanbul.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-2",
      title: "Paragraph 2",
      text: `There are forty people on the bus. They come from Britain, America, France, Italy and Holland. At Troy they all have lunch. Then they start to look at the old city. It is a very hot day. After an hour, Mark sits under a tree. 'I'm going to stop here for a moment,' he tells Fay. 'OK,' she answers. Then Mark sees something on the ground. 'What's that?' he thinks.`,
      questions: ["Where does Mark sit?", "What does he see on the ground?"],
      answers: ["Under a tree.", "A stone."],
      localMedia: `${localBase}/paragraph-2.avif`,
      r2: `${imageBase}/paragraph-2.avif`,
      imageAlt: "Mark sitting under a tree at Troy.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-3",
      title: "Paragraph 3",
      text: `It is a flat, yellow stone. Mark picks it up. Then he starts to clean it with his hands. 'But I know this stone,' he thinks. 'It comes from ... from ...' Suddenly there is a white light in his eyes. Mark closes them. The light is strong. Now there is a loud wind in his ears. He cannot hear or see anything. 'What's happening?' he thinks.`,
      questions: ["What colour is the stone?", "What happens when Mark cleans it?"],
      answers: ["Yellow.", "There is a white light and a loud wind."],
      localMedia: `${localBase}/paragraph-3.avif`,
      r2: `${imageBase}/paragraph-3.avif`,
      imageAlt: "Mark holding the yellow stone as a bright light appears.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-4",
      title: "Paragraph 4",
      text: `Ten seconds later the light and the wind stop. Mark opens his eyes. He is standing on a beach. He can see hundreds of ships and men. Behind him there is a beautiful city with high walls. 'Where am I?' he thinks. 'Where's my family?' He puts the yellow stone in his pocket. Then one of the men says to him, 'Boy! Come here!'`,
      questions: ["Where is Mark standing?", "What does he put in his pocket?"],
      answers: ["On a beach.", "The yellow stone."],
      localMedia: `${localBase}/paragraph-4.avif`,
      r2: `${imageBase}/paragraph-4.avif`,
      imageAlt: "Mark standing on a beach full of ships.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-5",
      title: "Paragraph 5",
      text: `'Me?' Mark walks across the beach to a long, black ship. 'Carry this,' the man says. He gives Mark a lot of wood. Then he gets off the ship. 'Follow me,' he says. Mark follows him. The man is very tall and has a short, brown beard. 'I don't know your face,' he says. 'Are you new here?' 'Y-yes,' Mark answers. 'That's right. I'm new here.'`,
      questions: ["Where does the man take Mark?", "What is the man's beard like?"],
      answers: ["To a long, black ship.", "Short and brown."],
      localMedia: `${localBase}/paragraph-5.avif`,
      r2: `${imageBase}/paragraph-5.avif`,
      imageAlt: "Mark carrying wood near a black ship.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-6",
      title: "Paragraph 6",
      text: `'My name is Andros,' says the man. He and Mark walk for another ten minutes. Then they climb a small hill. At the top Mark stops. There, in front of them, is a big wooden horse. Andros sees Mark's face and smiles. 'Well ... what do you think of it?' he asks. Mark does not answer, and Andros says, 'This horse is going to win the war for us Greeks.'`,
      questions: ["What do they see at the top of the hill?", "What is the horse going to do?"],
      answers: ["A big wooden horse.", "Win the war for the Greeks."],
      localMedia: `${localBase}/paragraph-6.avif`,
      r2: `${imageBase}/paragraph-6.avif`,
      imageAlt: "Andros showing Mark the wooden horse.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-7",
      title: "Paragraph 7",
      text: `They walk down the hill. There are a lot of men working under the horse. One of them talks to Andros. 'There's a problem,' he says. 'We can't find a stone for the second eye. We must find one before tomorrow.' Mark looks at the horse's one bright eye. Then he remembers the stone in his pocket. 'Wait!' he says. 'I think I can help you.'`,
      questions: ["What problem do the men have?", "What does Mark remember?"],
      answers: ["They can't find a stone for the second eye.", "The stone in his pocket."],
      localMedia: `${localBase}/paragraph-7.avif`,
      r2: `${imageBase}/paragraph-7.avif`,
      imageAlt: "Mark looking at the wooden horse's eye.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-8",
      title: "Paragraph 8",
      text: `He takes the stone out of his pocket. 'But how ...?!' says Andros. The man smiles. 'That's it. That's it!' He looks at Mark. 'What's your name, boy?' Mark tells him. 'He's new here,' says Andros. 'Ah!' The man is very happy. 'Well ... we must thank him. I know. You can come with us in the horse tomorrow night.' Mark's mouth opens. 'Me?!'`,
      questions: ["What does Mark give the man?", "Where will Mark go tomorrow night?"],
      answers: ["The yellow stone.", "In the horse."],
      localMedia: `${localBase}/paragraph-8.avif`,
      r2: `${imageBase}/paragraph-8.avif`,
      imageAlt: "Mark giving the stone to the Greek soldiers.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-9",
      title: "Paragraph 9",
      text: `That evening Mark sits near a big fire on the beach. There is an old woman beside him. Her name is Ana and she is a cook. She tells Mark lots of stories. Stories about Greece, the war, and the beautiful princess — Helen. In the end she goes to bed. 'Goodbye, boy,' she says. 'Come and see me again one day. Come and see me again.'`,
      questions: ["Who is Ana?", "What stories does she tell?"],
      answers: ["An old cook.", "Stories about Greece, the war and Helen."],
      localMedia: `${localBase}/paragraph-9.avif`,
      r2: `${imageBase}/paragraph-9.avif`,
      imageAlt: "Mark sitting by the fire with Ana.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-10",
      title: "Paragraph 10",
      text: `Next morning the horse is ready. Greek soldiers pull it to the gates of Troy. Then they leave it there. Inside the horse there are forty Greeks. They wait all afternoon under the hot, yellow sun. Mark is sitting in the horse's head. 'What happens now?' he thinks. Suddenly the gates open. Trojan soldiers walk out. They pull the horse inside and shut the gates again.`,
      questions: ["How many Greeks are inside the horse?", "Who pulls the horse inside Troy?"],
      answers: ["Forty.", "Trojan soldiers."],
      localMedia: `${localBase}/paragraph-10.avif`,
      r2: `${imageBase}/paragraph-10.avif`,
      imageAlt: "Mark looking out from inside the wooden horse.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-11",
      title: "Paragraph 11",
      text: `Mark can hear the Trojans. 'Why are the Greeks giving us this horse?' asks one. 'Do you think they want to end the war?' 'Yes! Look!' says a soldier on top of the city walls. 'Their ships are leaving!' After that the Trojans eat, sing and dance all evening. Then they go to bed very late and Troy is quiet. At that moment the Greeks climb out of the horse.`,
      questions: ["What do the Trojans think about the Greek ships?", "When do the Greeks climb out?"],
      answers: ["They think the Greeks are leaving.", "At night, when Troy is quiet."],
      localMedia: `${localBase}/paragraph-11.avif`,
      r2: `${imageBase}/paragraph-11.avif`,
      imageAlt: "The wooden horse inside the walls of Troy.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-12",
      title: "Paragraph 12",
      text: `Four men go to the gates and open them. A minute later there are thousands of Greek soldiers in the city. They and their ships are back! They run from one building to another. In five minutes Troy is on fire. Mark watches all this. Suddenly he sees a beautiful woman. She is running along the city walls. 'It's Helen,' he thinks, 'Helen of Troy!'`,
      questions: ["What happens to Troy?", "Who does Mark see on the city walls?"],
      answers: ["It is on fire.", "Helen of Troy."],
      localMedia: `${localBase}/paragraph-12.avif`,
      r2: `${imageBase}/paragraph-12.avif`,
      imageAlt: "Helen running along the burning walls of Troy.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-13",
      title: "Paragraph 13",
      text: `At that moment Andros says, 'Follow me, boy.' He runs down a small street very fast. Mark follows, but the street is full of smoke. After a minute he cannot see anything. 'Andros!' he says. 'Where are you?' Then suddenly two Trojans with swords come out of the smoke. Mark looks at them. 'Please don't kill me,' he says. 'Don't kill me! Please!'`,
      questions: ["Who runs down the street with Mark?", "Who comes out of the smoke?"],
      answers: ["Andros.", "Two Trojans with swords."],
      localMedia: `${localBase}/paragraph-13.avif`,
      r2: `${imageBase}/paragraph-13.avif`,
      imageAlt: "Two Trojan soldiers with swords in the smoke.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-14",
      title: "Paragraph 14",
      text: `'Mark! Mark! It's 4 o'clock. The bus is leaving in a minute.' Fay is looking down at Mark. After a moment he suddenly wakes up. 'What?' he asks. 'The bus is leaving,' Fay says again. Then she asks, 'Are you OK? Your face is white. And what's that dirty stone?' Mark looks at the yellow stone in his hand. 'This? Oh ... it's nothing,' he says.`,
      questions: ["Who wakes Mark up?", "What does Mark say about the stone?"],
      answers: ["Fay.", "He says it's nothing."],
      localMedia: `${localBase}/paragraph-14.avif`,
      r2: `${imageBase}/paragraph-14.avif`,
      imageAlt: "Fay looking down at Mark under the tree.",
      mediaPosition: "left",
    },
    {
      id: "paragraph-15",
      title: "Paragraph 15",
      text: `Mark stands up. He sees an old woman. She has lots of small wooden horses in a basket. 'Do you want one, boy?' she asks. 'Yes. Why not?' Mark buys a horse and looks at the woman. 'No. It can't be,' he thinks. He walks to the bus. Behind him the old woman smiles. 'Goodbye, boy,' she says. 'Come and see me again one day. Come and see me again.'`,
      questions: ["What does Mark buy?", "What does the old woman say?"],
      answers: ["A small wooden horse.", "'Goodbye, boy. Come and see me again one day.'"],
      localMedia: `${localBase}/paragraph-15.avif`,
      r2: `${imageBase}/paragraph-15.avif`,
      imageAlt: "Mark walking away as the old woman smiles.",
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
            alt: "The Jackson family getting on a bus in Istanbul.",
            summary:
              "The Jackson family are on holiday in Turkey. They are staying at a hotel in Istanbul, and today they are getting on a bus to visit Troy.",
          },
          {
            img: `${imageBase}/paragraph-2.avif`,
            alt: "Mark sitting under a tree at Troy.",
            summary:
              "Forty people are on the bus. After lunch at Troy it is very hot, so Mark sits under a tree, and then he sees something on the ground.",
          },
          {
            img: `${imageBase}/paragraph-3.avif`,
            alt: "Mark holding the yellow stone as a bright light appears.",
            summary:
              "Mark picks up a flat, yellow stone and cleans it with his hands. Then a strong white light and a loud wind come, and he cannot see or hear anything.",
          },
          {
            img: `${imageBase}/paragraph-4.avif`,
            alt: "Mark standing on a beach full of ships.",
            summary:
              "When the light and the wind stop, Mark is standing on a beach. He can see hundreds of ships, a city with high walls behind him, and a man calls to him.",
          },
          {
            img: `${imageBase}/paragraph-5.avif`,
            alt: "Mark carrying wood near a black ship.",
            summary:
              "Mark walks to a long, black ship and the tall man gives him a lot of wood. Mark tells the man that he is new there.",
          },
          {
            img: `${imageBase}/paragraph-6.avif`,
            alt: "Andros showing Mark the wooden horse.",
            summary:
              "The man says his name is Andros. At the top of a small hill they see a big wooden horse, and Andros says it is going to win the war for the Greeks.",
          },
          {
            img: `${imageBase}/paragraph-7.avif`,
            alt: "Mark looking at the wooden horse's eye.",
            summary:
              "The men cannot find a stone for the second eye of the horse and they must find one before tomorrow. Mark remembers the stone in his pocket and says he can help.",
          },
          {
            img: `${imageBase}/paragraph-8.avif`,
            alt: "Mark giving the stone to the Greek soldiers.",
            summary:
              "Mark gives the yellow stone to the man, and the man is very happy. He says Mark can come with them in the horse tomorrow night.",
          },
          {
            img: `${imageBase}/paragraph-9.avif`,
            alt: "Mark sitting by the fire with Ana.",
            summary:
              "That evening Mark sits near a big fire with Ana, an old cook. She tells him stories about Greece, the war and Helen, and then she goes to bed.",
          },
          {
            img: `${imageBase}/paragraph-10.avif`,
            alt: "Mark looking out from inside the wooden horse.",
            summary:
              "Next morning the Greek soldiers pull the horse to the gates of Troy. Mark sits in the horse's head, and the Trojan soldiers pull the horse inside the city.",
          },
          {
            img: `${imageBase}/paragraph-11.avif`,
            alt: "The wooden horse inside the walls of Troy.",
            summary:
              "The Trojans think the Greeks are leaving because their ships are going away. They eat, sing and dance, and when Troy is quiet the Greeks climb out of the horse.",
          },
          {
            img: `${imageBase}/paragraph-12.avif`,
            alt: "Helen running along the burning walls of Troy.",
            summary:
              "The Greeks open the gates and thousands of soldiers come into the city. Troy is on fire, and Mark sees Helen running along the city walls.",
          },
          {
            img: `${imageBase}/paragraph-13.avif`,
            alt: "Two Trojan soldiers with swords in the smoke.",
            summary:
              "Andros tells Mark to follow him, but the street is full of smoke. Two Trojans with swords come out of the smoke and Mark asks them not to kill him.",
          },
          {
            img: `${imageBase}/paragraph-14.avif`,
            alt: "Fay looking down at Mark under the tree.",
            summary:
              "Fay wakes Mark up and says the bus is leaving. Mark has the yellow stone in his hand, but he tells Fay it is nothing.",
          },
          {
            img: `${imageBase}/paragraph-15.avif`,
            alt: "Mark walking away as the old woman smiles.",
            summary:
              "Mark buys a small wooden horse from an old woman. She says “Goodbye, boy, come and see me again one day,” and Mark walks to the bus.",
          },
        ],
      },
    },
  ] satisfies AudiobookSection[],
};
