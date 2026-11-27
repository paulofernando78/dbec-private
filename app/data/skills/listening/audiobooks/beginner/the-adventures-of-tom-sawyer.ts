import { italic, type ContentToken } from "@/helpers/content";
import type { AudiobookQuestion } from "../index";

type AudiobookImage = {
  localMedia?: string;
  r2?: string;
  imageAlt?: string;
};

type AudiobookBlock =
  | { text: string | ContentToken; r2?: never }
  | (AudiobookImage & { r2: string; text?: never });

export type AudiobookSection = AudiobookImage & {
  id: string;
  title: string;
  timestamp?: string;
  text?: string | readonly AudiobookBlock[];
  questions?: readonly (string | AudiobookQuestion)[];
  answers?: readonly string[];
  mediaPosition?: "left" | "right" | "top" | "bottom";
  localAudio?: string;
  r2Audio?: string;
};

const imageBase =
  "/media/images/skills/listening/audiobooks/beginner/the-adventures-of-tom-sawyer";

export const theAdventuresOfTomSawyer = {
  slug: "the-adventures-of-tom-sawyer",
  title: "The Adventures of Tom Sawyer",
  audio: "",
  sections: [
    {
      id: "introduction",
      title: "Introduction",
      questions: [
        {
          question: "What was Mark Twain’s real name?",
          options: [
            { option: "His real name was Tom Sawyer." },
            { option: "His real name was Huck Finn." },
            { option: "His real name was Samuel Clemens.", isCorrect: true },
          ],
        },
        {
          question: "In which town did he grow up?",
          options: [
            { option: "He grew up in New York." },
            { option: "He grew up in Hannibal, Missouri.", isCorrect: true },
            { option: "He grew up in Nevada." },
          ],
        },
      ],
      text: [
        {
          text: italic(
            "One Saturday afternoon Tom wanted to have an adventure because he didn’t want to think about Injun Joe. He went to Huck and said, “I’m going to look for treasure. Do you want to come with me?” ",
          ),
        },
        {
          text: "Tom Sawyer loves adventures. He has a lot of adventures at home, at school, and with his friends. He has one adventure in a cave. But why is he there? What does he see in the cave? And why is he afraid? ",
        },
        {
          text: "Mark Twain (1835-1910) is a famous American writer. His name was Samuel Clemens. Young Samuel lived in Hannibal, Missouri, a small town on the Mississippi River. He loved the river and he liked watching the big boats on it.",
        },
        {
          text: "Samuel loved adventures. He worked on boats on the Mississippi River for two years. Then he went to Nevada. He looked for treasure, but he didn’t find it. He worked for a newspaper there. His stories were in the name of Mark Twain, and people loved them.",
        },
        {
          text: "Later, Samuel lived in New York. His book The Adventures of Tom Sawyer (1876) is about a young boy in a small town in the 1800s. Huck Finn is his friend. The Adventures of Huckleberry Finn (1884) is about Huck’s adventures. These two books are very famous.",
        },
        {
          text: "Today, many people visit Hannibal because they want to see Mark Twain’s home and the Mark Twain Cave, the cave in The Adventures of Tom Sawyer.",
        },
      ],
      localMedia: `local-media/images/skills/listening/audiobooks/beginner/the-adventures-of-tom-sawyer/cover.avif`,
      r2: `${imageBase}/cover.avif`,
      imageAlt: "Cover of The Adventures of Tom Sawyer.",
      mediaPosition: "left",
    },
    {
      id: "chapter-1",
      title: "Chapter 1 The Fence",
      questions: [
        {
          question: "Why was Aunt Polly angry with Tom?",
          options: [
            { option: "She was angry because he was late for dinner." },
            {
              option:
                "She was angry because he went to the river instead of school.",
              isCorrect: true,
            },
            { option: "She was angry because he broke a window." },
          ],
        },
        {
          question: "What work did Aunt Polly give Tom to do on Saturday?",
          options: [
            { option: "She told him to get water from the river." },
            { option: "She told him to paint the fence.", isCorrect: true },
            { option: "She told him to wash the windows." },
          ],
        },
        {
          question:
            "What did Tom get from Ben and the other boys so they could paint the fence?",
          options: [
            {
              option: "He got food, including fruit, from the boys.",
              isCorrect: true,
            },
            { option: "He got money from the boys." },
            { option: "He got a new knife from the boys." },
          ],
        },
      ],
      text: [
        {
          text: "Tom Sawyer lived with his aunt because his mother and father were dead. Tom didn’t like going to school, and he didn’t like working. He liked playing and having adventures. One Friday, he didn’t go to school—he went to the river.",
        },
        {
          text: "Aunt Polly was angry. “You’re a bad boy!” she said. “Tomorrow you can’t play with your friends because you didn’t go to school today. Tomorrow you’re going to work for me. You can paint the fence.”",
        },
        {
          text: "Saturday morning, Tom was not happy, but he started to paint the fence. His friend Jim was in the street.",
        },
        {
          text: "Tom asked him, “Do you want to paint?”",
        },
        {
          text: "Jim said, “No, I can’t. I’m going to get water.”",
        },
        {
          text: "Then Ben came to Tom’s house. He watched Tom and said, “I’m going to swim today. You can’t swim because you’re working.”",
        },
        {
          text: "Tom said, “This isn’t work. I like painting.”",
        },
        {
          text: "“Can I paint, too?” Ben asked.",
        },
        {
          text: "“No, you can’t,” Tom answered. “Aunt Polly asked me because I’m a very good painter.”",
        },
        {
          text: "Ben said, “I’m a good painter, too. Please, can I paint? I have some fruit. Do you want it?”",
        },
        {
          text: "OK,” Tom said. “Give me the fruit. Then you can paint.",
        },
        {
          text: "Ben started to paint the fence. Later, many boys came to Tom’s house. They watched Ben, and they wanted to paint, too.",
        },
        {
          text: "Tom said, “Give me some food and you can paint.”",
        },
        {
          text: "Tom stayed in the yard, and the boys painted. They painted the fence three times. It was beautiful and white.",
        },
        {
          text: "Tom went into the house. “Aunt Polly, can I play now?” he asked.",
        },
        {
          text: "Aunt Polly was surprised. “Did you paint the fence?” she asked.",
        },
        {
          text: "“Yes, I did,” Tom answered.",
        },
        {
          text: "Aunt Polly went to the yard and looked at the fence. She was very surprised and very happy. “It’s beautiful!” she said. “Yes, you can play now.”",
        },
        {
          text: "Tom walked to his friend Joe Harper’s house and played with his friends there. Then he walked home again. There was a new girl in one yard. She had yellow hair and blue eyes. She was beautiful. Tom wanted to talk to her, but she didn’t see him. She went into her house. Tom waited, but she didn’t come out again.",
        },
      ],
    },
    {
      id: "chapter-2",
      title: "Chapter 2 In the Graveyard",
      questions: [
        {
          question: "What adventure did Huck ask Tom to do at twelve o’clock?",
          options: [
            { option: "He asked Tom to go to the river at midnight." },
            { option: "He asked Tom to go to the school yard at midnight." },
            {
              option: "He asked Tom to go to the graveyard at midnight.",
              isCorrect: true,
            },
          ],
        },
        {
          question: "Who did Tom sit near at school, and what was her name?",
          options: [
            { option: "He sat near Becky Thatcher.", isCorrect: true },
            { option: "He sat near Amy Lawrence." },
            { option: "He sat near Susy Harper." },
          ],
        },
        {
          question: "What did Tom and Huck see Injun Joe do in the graveyard?",
          options: [
            { option: "They saw him dig for treasure under a tree." },
            {
              option: "They saw him kill the doctor with a knife.",
              isCorrect: true,
            },
            { option: "They saw him take a box of money." },
          ],
        },
      ],
      text: [
        {
          text: "One morning before school, Tom’s friend Huck Finn waited for him in the street. Huck didn’t have a home, and he never went to school. People in the town didn’t like him. But Tom liked Huck.",
        },
        {
          text: "Huck said, “Let’s have an adventure.”",
        },
        {
          text: "“What can we do on our adventure?” Tom asked.",
        },
        {
          text: "“Let’s go to the graveyard at night—at twelve o’clock!” Huck answered.",
        },
        {
          text: "‘That’s a good adventure,” Tom said. “Let’s meet at eleven o’clock.”",
        },
        {
          text: "Then Tom went to school, but he was late. The teacher was angry. He asked, “Why are you late again?”",
        },
        {
          text: "“I’m late because I talked to Huck Finn,” Tom said. Then the teacher was very angry. “Sit with the girls,” he said to Tom.",
        },
        {
          text: "Tom sat near the beautiful new girl. He was happy. He looked at her.",
        },
        {
          text: "“What’s your name?” he asked.",
        },
        {
          text: "“Becky,” she answered.",
        },
        {
          text: "Tom smiled and said, “My name’s Tom.”",
        },
        {
          text: "The teacher was angry again. “Tom Sawyer, stop talking! Go to your place now,” he said. Tom went to his place.",
        },
        {
          text: "At twelve o’clock Tom and Becky didn’t go home. They stayed in the school yard and talked. Tom said, “I love you. Do you love me?”",
        },
        {
          text: "“Yes,” Becky answered.",
        },
        {
          text: "“Good,” Tom said. “Then you’re going to walk to school with me every day. Amy always walked with me.”",
        },
        {
          text: "“Amy!” Becky said angrily. “Do you love her?”",
        },
        {
          text: "“No,” Tom answered. “I love you now. Do you want to walk with me?”",
        },
        {
          text: "But Becky was angry with Tom. She walked away and didn’t answer. Tom was unhappy. He didn’t go to school in the afternoon.",
        },
        {
          text: "That night Tom went to bed at nine o’clock, but he didn’t sleep. At eleven o’clock he went out his bedroom window to the yard. Huck was there. They walked to the graveyard. They stopped behind some big trees and talked quietly.",
        },
        {
          text: "Suddenly, there was a noise. Three men came into the graveyard—the doctor, Muff Potter, and Injun Joe. Injun Joe and the doctor talked angrily. Then Injun Joe killed the doctor with a knife. Tom and Huck watched. Then they went away quickly because they were afraid.",
        },
        {
          text: "They went to Tom’s yard. Huck said, “We can’t talk about this. Injun Joe can find us and kill us, too.”",
        },
        {
          text: "“That’s right,” Tom said. “We can’t talk about it.”",
        },
        {
          text: "Tom went in his bedroom window. He went to bed, but he didn’t sleep well. Tom and Huck didn’t talk to their friends or Aunt Polly about that night because they were afraid of Injun Joe.",
        },
        {
          text: "Later, some men went to Muff Potter and said, “You’re a bad man. You killed the doctor.”",
        },
      ],
    },
    {
      id: "chapter-3",
      title: "Chapter 3 A Bad Day",
      questions: [
        {
          question: "Why did Tom want to stay home from school one morning?",
          options: [
            { option: "He wanted to paint the fence again." },
            {
              option:
                "He told Aunt Polly that he was sick and wanted to stay home.",
              isCorrect: true,
            },
            { option: "He wanted to go fishing with Huck." },
          ],
        },
        {
          question: "Who got Tom’s medicine instead of Tom?",
          options: [
            { option: "Peter the cat got the medicine.", isCorrect: true },
            { option: "Aunt Polly got the medicine." },
            { option: "Jim got the medicine." },
          ],
        },
        {
          question: "What did Tom and Joe Harper decide to do together?",
          options: [
            { option: "They decided to paint the fence together." },
            { option: "They decided to go to school together." },
            { option: "They decided to run away together.", isCorrect: true },
          ],
        },
      ],
      text: [
        {
          text: "Becky was sick and didn’t go to school for many days. Tom was very sad. One morning, he said to Aunt Polly, “I’m very sick, and I want to stay home from school.”",
        },
        {
          text: "Aunt Polly said, “Here’s some medicine. Take this and you can get well quickly.”",
        },
        {
          text: "But Tom didn’t like the medicine. Peter, the cat, came into the room and looked at Tom.",
        },
        {
          text: "“Peter!” Tom said. ”Have some medicine!”",
        },
        {
          text: "Peter had some medicine. He didn’t like it! He went quickly out the open window and into the yard.",
        },
        {
          text: "Aunt Polly watched Peter. “Why did you do that, Tom?” she asked angrily. “You’re a very bad boy! Go to school now.”",
        },
        {
          text: "Tom arrived at school early and he waited for Becky at the school fence. She arrived early, too, but she didn’t look at Tom. She went into school. Tom walked away. He didn’t want to go to school now. He was very sad.",
        },
        {
          text: "Joe Harper was near the school. He was sad, too, because his mother was angry with him. The two boys walked and talked.",
        },
        {
          text: "Tom said, “Let’s run away.”",
        },
        {
          text: "“Yes, let’s!” Joe said.",
        },
        {
          text: "The two boys went to the river. Huck Finn was there. Tom and Joe said, “We’re going to run away. Do you want to come with us?”",
        },
        {
          text: "“Yes,” Huck answered. “Let’s go across the river. We can have a good adventure there.”",
        },
        {
          text: "The boys went home because they wanted to get food for their adventure.",
        },
      ],
    },
    {
      id: "chapter-4",
      title: "Chapter 4 Across the River",
      questions: [
        {
          question: "Where did Tom, Joe, and Huck go in the small boat?",
          options: [
            {
              option:
                "They went across the river to a place where they could play all day.",
              isCorrect: true,
            },
            { option: "They went down the river to a big town." },
            { option: "They went across the river to the graveyard." },
          ],
        },
        {
          question:
            "What did Tom do that night while Huck and Joe were asleep?",
          options: [
            { option: "He swam across the river to the big boat." },
            {
              option: "He went home quietly in the small boat.",
              isCorrect: true,
            },
            { option: "He woke Huck and Joe to tell them about the men." },
          ],
        },
        {
          question: "When did the three boys walk into the church together?",
          options: [
            { option: "They walked into the church on Saturday evening." },
            {
              option:
                "They walked into the church on Sunday morning, while people were mourning them.",
              isCorrect: true,
            },
            { option: "They walked into the church on Monday morning." },
          ],
        },
      ],
      text: [
        {
          text: "Tom, Joe, and Huck went to the river. There was a small boat there. The boys went across the river in the small boat. They said, “This is a good place because we can play all day. There’s no school here.”",
        },
        {
          text: "They played and then went to sleep.",
        },
        {
          text: "In the morning, the boys were happy again. They said, “Let’s stay here for a long time.”",
        },
        {
          text: "In the afternoon, they played near the river again. Suddenly, there was a noise from a big boat on the river. The boys stopped playing and watched the boat.",
        },
        {
          text: "“Listen,” Tom said. “The men on the boat are talking about us.”",
        },
        {
          text: "The boys listened quietly. A man said, “The boys are in the river. They’re dead.”",
        },
        {
          text: "Tom said, “Those men are looking for us in the river. We’re here, but they don’t know that.”",
        },
        {
          text: "That night, the boys were sad. Huck and Joe went to sleep, but Tom didn’t sleep. He went home in the small boat. He quietly went in his bedroom window. Then he went under his bed and stayed there.",
        },
        {
          text: "Aunt Polly and her friends came into his room. Aunt Polly said to her friends, “Tom was a good boy, and I loved him. Now he’s dead, and I’m very sad.”",
        },
        {
          text: "Tom wanted to say, “I’m not dead.” But he stayed quiet.",
        },
        {
          text: "Aunt Polly went to sleep. Tom went out the window very quietly and went back across the river.",
        },
        {
          text: "In the morning, Joe and Huck said, “We’re not happy here now. We want to go home.”",
        },
        {
          text: "Tom said, “Let’s go home on Sunday. We can go to church. People are going to be very surprised!”",
        },
        {
          text: "Sunday morning, many children were at church. They talked about the three boys. They were sad because their friends were dead. Becky was sad, too.",
        },
        {
          text: "Suddenly, the three boys walked into the church. People were very surprised, but they were very happy, too.",
        },
      ],
    },
    {
      id: "chapter-5",
      title: "Chapter 5 At School",
      questions: [
        {
          question: "Why was Becky angry with Tom in the morning at school?",
          options: [
            {
              option:
                "She was angry because Tom spoke to Amy and did not look at her.",
              isCorrect: true,
            },
            { option: "She was angry because Tom tore the teacher’s book." },
            { option: "She was angry because Tom was late for school." },
          ],
        },
        {
          question: "What happened to the teacher’s new book?",
          options: [
            { option: "Tom tore it by accident." },
            {
              option: "Becky tore it while she was looking at the pictures.",
              isCorrect: true,
            },
            { option: "Alfred tore it in the school yard." },
          ],
        },
        {
          question: "Why did Tom say, “I did it. I tore your book”?",
          options: [
            { option: "He wanted to make the teacher angry with Becky." },
            { option: "He wanted to show the class that he was brave." },
            {
              option: "He wanted to protect Becky from punishment.",
              isCorrect: true,
            },
          ],
        },
      ],
      text: [
        {
          text: "Monday morning, Tom went to school. The children wanted to hear about his adventure, and Tom liked talking about it. Becky wanted to talk to Tom, but he didn’t look at her.",
        },
        {
          text: "Then Tom talked to Amy. Becky watched him and she was angry. She said to her friends, “I’m going to have an adventure day. You can come on my adventure.” But she didn’t ask Tom.",
        },
        {
          text: "Later in the morning, Tom talked to Amy again. Becky talked to her friend Alfred and looked at a picture-book with him. Tom watched them and he was angry with Becky.",
        },
        {
          text: "In the afternoon, Tom waited for Becky at the school fence. He said, “I’m sorry.”",
        },
        {
          text: "But Becky didn’t listen to him. She walked into the school room. The teacher’s new book was on his table. This book wasn’t for children, but Becky wanted to look at it. She opened the book quietly and looked at the pictures.",
        },
        {
          text: "Suddenly, Tom came into the room. Becky was surprised. She closed the book quickly, and it tore. Becky was angry with Tom and quickly went out of the room.",
        },
        {
          text: "Then the children and the teacher came into the room and went to their places. The teacher looked at his book.",
        },
        {
          text: "“Who did this? Who tore my book?” he asked angrily.",
        },
        {
          text: "The room was very quiet. The teacher started to ask every child, “Did you do this?”",
        },
        {
          text: "They answered, “No, I didn’t.”",
        },
        {
          text: "Then he looked at Becky “Becky, did you do this?”",
        },
        {
          text: "Tom wanted to help her. Suddenly he said, “I did it. I tore your book.”",
        },
        {
          text: "“Tom Sawyer, you’re a very bad boy. Stay here after school!” the teacher said angrily.",
        },
        {
          text: "At five o’clock Tom started to walk home. Becky waited for him at the school fence. “You’re a very good friend,” she said.",
        },
        {
          text: "Tom smiled at her and they walked home.",
        },
      ],
    },
    {
      id: "chapter-6",
      title: "Chapter 6 The Trial",
      questions: [
        {
          question: "Who did the men say killed the doctor?",
          options: [
            { option: "They said Injun Joe killed the doctor." },
            {
              option: "They said Muff Potter killed the doctor.",
              isCorrect: true,
            },
            { option: "They said Tom Sawyer killed the doctor." },
          ],
        },
        {
          question:
            "Why was Tom afraid after he talked on day three of the trial?",
          options: [
            { option: "He was afraid the teacher would punish him." },
            { option: "He was afraid Muff Potter was angry with him." },
            {
              option: "He was afraid Injun Joe might kill him.",
              isCorrect: true,
            },
          ],
        },
        {
          question:
            "What did Injun Joe do when people at the trial were surprised?",
          options: [
            { option: "He quickly went out of the building.", isCorrect: true },
            { option: "He stayed in the building and listened to Tom." },
            { option: "He asked the men to let Muff Potter go." },
          ],
        },
      ],
      text: [
        {
          text: "Summer vacation started, and Becky went away with her family. Tom was unhappy.",
        },
        {
          text: "Then Muff Potter’s trial started. Tom and Huck remembered the night in the graveyard. They were afraid of Injun Joe again.",
        },
        {
          text: "“Did you talk about the night in the graveyard?” Tom asked Huck.",
        },
        {
          text: "“No, I didn’t,” Huck answered. “Did you?”",
        },
        {
          text: "“No,” Tom answered. “But. I’m sorry about Muff Potter. He’s always friendly to us. He didn’t kill the doctor. I want to help him.”",
        },
        {
          text: "“Let’s take some food to him,” Huck said.",
        },
        {
          text: "The boys visited Muff Potter. “Here’s some food,” they said.",
        },
        {
          text: "Muff Potter said, “Thank you. You’re good boys.”",
        },
        {
          text: "Tom and Huck went to the trial and listened for two days. Tom didn’t sleep well at night because he wanted to help Muff Potter.",
        },
        {
          text: "On day three of the trial Tom talked.",
        },
        {
          text: "A man asked him, “Where were you on the night of June 17th?”",
        },
        {
          text: "“I was in the graveyard,” Tom answered.",
        },
        {
          text: "“Did you see any people there?” the man asked:",
        },
        {
          text: "“Yes. Injun Joe, the doctor, and Muff Potter were there. They didn’t see me because I was behind some big trees.”",
        },
        {
          text: "“What did you see?” the man asked.",
        },
        {
          text: "“Injun Joe and the doctor talked angrily,” Tom answered. “Then Injun Joe killed the doctor with his knife. Muff Potter didn’t do it.”",
        },
        {
          text: "The people at the trial were surprised. Injun Joe quickly went out of the building.",
        },
        {
          text: "Tom and Huck were very afraid. Tom said, “Now Injun Joe knows about us. He can kill us, too.”",
        },
        {
          text: "Many people wanted to hear about the boys’ adventure in the graveyard. Tom liked talking about it. He was happy, too, because he helped Muff Potter. But he didn’t sleep well because he was afraid of Injun Joe.",
        },
      ],
    },
    {
      id: "chapter-7",
      title: "Chapter 7 Injun Joe’s Treasure",
      questions: [
        {
          question: "Where did Tom and Huck go to look for treasure?",
          options: [
            { option: "They went to the graveyard near the river." },
            {
              option: "They went to an old house near Mrs. Douglas’s house.",
              isCorrect: true,
            },
            { option: "They went to Injun Joe’s house." },
          ],
        },
        {
          question: "What did Injun Joe find under the floor of the old house?",
          options: [
            { option: "He found a knife under the floor." },
            { option: "He found an old picture under the floor." },
            {
              option: "He found a box full of money under the floor.",
              isCorrect: true,
            },
          ],
        },
        {
          question: "Where did Injun Joe say he was going to take the money?",
          options: [
            { option: "He said he was going to take it to his house." },
            {
              option:
                "He said he was going to take it to the place under the cross.",
              isCorrect: true,
            },
            { option: "He said he was going to take it across the river." },
          ],
        },
      ],
      text: [
        {
          text: "One Saturday afternoon, Tom wanted to have an adventure because he didn’t want to think about Injun Joe. He went to Huck and said, “I’m going to look for treasure. Do you want to come with me?”",
        },
        {
          text: "Huck always liked an adventure. “Oh, yes,” he said. “Where can we look?”",
        },
        {
          text: "“Let’s start looking in the old house near Mrs. Douglas’s house. Old houses are good places for treasure,” Tom answered.",
        },
        {
          text: "The boys went to the old house. They wanted to look at every room. First they went into the kitchen, and then they went into the bedroom.",
        },
        {
          text: "Suddenly, two men came into the kitchen—Injun Joe and his friend. The boys were afraid and stayed in the bedroom very quietly.",
        },
        {
          text: "Injun Joe walked across the kitchen. “We can put our money here,” he said to his friend.",
        },
        {
          text: "He started to dig under the floor with his knife.",
        },
        {
          text: "“What’s this?” Injun Joe said. “I’m going to get it out.”",
        },
        {
          text: "There was a big box under the floor. He opened it with his knife. There was a lot of money in the box.",
        },
        {
          text: "“Look at that money!” his friend said. “Let’s go now. We can come back and get it tomorrow.”",
        },
        {
          text: "“No,” Injun Joe said. “We’re going to take it with us now. We can take it to that place. You know—the place under the cross.”",
        },
        {
          text: "Then the men went out of the house. Injun Joe talked quietly to his friend. The boys listened and were afraid.",
        },
        {
          text: "Tom said, “Did you hear that? He wants to kill us.”",
        },
        {
          text: "They went out of the house quietly and went home.",
        },
        {
          text: "The boys were afraid of Injun Joe, but they wanted to find his treasure. They watched his house every night, but they didn’t see Injun Joe or his treasure.",
        },
      ],
    },
    {
      id: "chapter-8",
      title: "Chapter 8 Becky’s Adventure Day",
      questions: [
        {
          question:
            "Where did the children go in the afternoon on Becky’s adventure day?",
          options: [
            { option: "They went to the big cave.", isCorrect: true },
            { option: "They went to Susy Harper’s house." },
            { option: "They went to the school yard." },
          ],
        },
        {
          question:
            "Why did Aunt Polly and Becky’s mother talk to Mrs. Harper at church on Sunday?",
          options: [
            { option: "They wanted to go on the boat with her." },
            {
              option:
                "They could not find Tom and Becky after the trip, so they asked her about them.",
              isCorrect: true,
            },
            { option: "They wanted to tell her that Becky was sick." },
          ],
        },
        {
          question:
            "How many men looked for Tom and Becky in the cave, and for how many days?",
          options: [
            { option: "One hundred men searched for three days." },
            { option: "Two hundred men searched for two days." },
            {
              option: "Two hundred men searched for three days.",
              isCorrect: true,
            },
          ],
        },
      ],
      text: [
        {
          text: "In August Becky’s family came back from their vacation. Tom was very happy and he didn’t think about Injun Joe’s treasure.",
        },
        {
          text: "Becky’s adventure day was Saturday. Her mother said, “You can sleep at Susy Harper’s house after your adventure.’",
        },
        {
          text: "“Good,” Becky said.",
        },
        {
          text: "Becky and her friends went on the river on a big boat. The boat went down the river and across it. Then it stopped. The children went out of the boat and played games near the river. In the afternoon one boy asked, “Who wants to go to the big cave?”",
        },
        {
          text: "The children went to the cave. It was dark and cold there, but they played games. In the evening they went back to the boat and went home.",
        },
        {
          text: "Sunday morning, Becky’s mother and Aunt Polly talked to Mrs. Harper at church. Becky’s mother asked, “Where’s my Becky? Did she sleep at your house?”",
        },
        {
          text: "“No, she didn’t,” Mrs. Harper answered. “I didn’t see her.”",
        },
        {
          text: "Aunt Polly said, “My Tom didn’t come home. Did he stay at your house?”",
        },
        {
          text: "“No, he didn’t,” Mrs. Harper answered.",
        },
        {
          text: "Then Aunt Polly and Becky’s mother asked the children, “Did Tom and Becky come home? Did you see them on the boat?”",
        },
        {
          text: "The children answered, “No, we didn’t see them, but it was dark.”",
        },
        {
          text: "Then a boy said, “Maybe they’re in the cave!”",
        },
        {
          text: "Two hundred men looked for Tom and Becky in the cave. They looked for three days, but they didn’t find them. People in the town were very sad.",
        },
      ],
    },
    {
      id: "chapter-9",
      title: "Chapter 9 Huck’s Adventure",
      questions: [
        {
          question:
            "Where did Injun Joe and his friend go at eleven o’clock at night?",
          options: [
            { option: "They went to Mrs. Douglas’s house.", isCorrect: true },
            { option: "They went to Mr. Jones’s house." },
            { option: "They went to the old house near the river." },
          ],
        },
        {
          question:
            "Who did Huck run to for help so he could save Mrs. Douglas?",
          options: [
            { option: "He ran to Tom for help." },
            { option: "He ran to Mr. Jones for help.", isCorrect: true },
            { option: "He ran to Aunt Polly for help." },
          ],
        },
        {
          question:
            "Why did Huck ask Mr. Jones not to say his name to Mrs. Douglas?",
          options: [
            { option: "He did not want Mrs. Douglas to give him money." },
            { option: "He did not want to go to church with her." },
            {
              option:
                "He was afraid Injun Joe would find out that he had warned them.",
              isCorrect: true,
            },
          ],
        },
      ],
      text: [
        {
          text: "Huck didn’t go on Becky’s adventure. He stayed home and watched Injun Joe’s house that night. At eleven o’clock Injun Joe and his friend came out and walked down the street. There was a box in his friend’s hands.",
        },
        {
          text: "Huck said quietly, “Maybe that’s the treasure box.” He went after the two men.",
        },
        {
          text: "They walked to Mrs. Douglas’s house and stopped in her yard. Huck stayed behind some small trees. The men talked, and Huck listened to them.",
        },
        {
          text: "Injun Joe was angry. “I want to kill her,” he said to his friend. “Mr. Douglas was bad to me. He’s dead now, but I remember.”",
        },
        {
          text: "“‘There are a lot of lights in the house. Maybe her friends are visiting,” Injun Joe’s friend said. “We can come back tomorrow.”",
        },
        {
          text: "“No,” Injun Joe said. “Let’s wait now.”",
        },
        {
          text: "Huck liked Mrs. Douglas because she was always good to him. He wanted to help her. He quietly walked away and then he started to run to Mr. Jones’s house.",
        },
        {
          text: "Mr. Jones opened the door. “What do you want?” he asked Huck.",
        },
        {
          text: "“Injun Joe and his friend are in Mrs. Douglas’s yard,” Huck said. “They want to kill her. Can you go there and help Mrs. Douglas?”",
        },
        {
          text: "“Yes. My sons and I can go there,” Mr. Jones answered. “You can go home.”",
        },
        {
          text: "In the morning, Huck went back to Mr. Jones’s house.",
        },
        {
          text: "“How’s Mrs. Douglas?” he asked.",
        },
        {
          text: "“She’s OK,” Mr. Jones answered. “The men went away because we arrived.”",
        },
        {
          text: "“Good,” Huck said. But he was afraid of Injun Joe. “Please don’t say my name to Mrs. Douglas.”",
        },
        {
          text: "Mr. Jones looked at him, and then he said, “You aren’t well. Go and sleep in my bedroom.”",
        },
        {
          text: "Later, Mrs. Douglas visited Mr. Jones.",
        },
        {
          text: "“You helped me yesterday night. Thank you,” she said. “You’re a good man.”",
        },
        {
          text: "Mr. Jones said, “We didn’t know about the men in your yard. A boy was there and he wanted to help you. He came here, but I can’t say his name.”",
        },
        {
          text: "Mr. Jones and Mrs. Douglas went to church. People there talked about Tom and Becky. Mr. Jones and his sons went to the cave with the men, but on Monday morning they went home. Huck was in bed and was very sick. The men went back to the cave, but Mrs. Douglas stayed with Huck.",
        },
      ],
    },
    {
      id: "chapter-10",
      title: "Chapter 10 In the Cave",
      questions: [
        {
          question: "How many days were Tom and Becky in the cave?",
          options: [
            { option: "They were in the cave for two days." },
            {
              option: "They were in the cave for three days.",
              isCorrect: true,
            },
            { option: "They were in the cave for four days." },
          ],
        },
        {
          question: "What did Tom find that led them out of the cave?",
          options: [
            { option: "He found Injun Joe’s treasure box." },
            { option: "He found a small boat near the water." },
            {
              option: "He found light coming through a small door in the cave.",
              isCorrect: true,
            },
          ],
        },
        {
          question:
            "How did Tom and Becky get home after coming out of the cave?",
          options: [
            {
              option: "Some men took them home in a small boat.",
              isCorrect: true,
            },
            { option: "They walked home along the river." },
            { option: "Mr. Thatcher took them home in his boat." },
          ],
        },
      ],
      text: [
        {
          text: "Saturday, Tom and Becky walked and played in the cave. Then they stopped near some water.",
        },
        {
          text: "“What time is it?” Becky asked.",
        },
        {
          text: "“I don’t know,” Tom said. “Let’s go back now”",
        },
        {
          text: "The two children walked and walked. But they didn’t find the door to the cave. Becky was afraid. She wanted to sit down and eat. “Maybe they’re looking for us now,” she said.",
        },
        {
          text: "“Here’s some food,” Tom said. “Eat this and wait here. I’m going to look for the door.”",
        },
        {
          text: "Tom walked and walked. But he didn’t find the cave door. Suddenly, there was a man near him. Tom was afraid, but he stayed quiet. He looked at the man. It was Injun Joe!",
        },
        {
          text: "Tom was very afraid and he made a noise. Injun Joe went away quickly. Tom went back to Becky, but he didn’t talk to her about Injun Joe.",
        },
        {
          text: "They were in the cave for three days. Tuesday, Becky didn’t want to walk. Again Tom said, “Stay here. I’m going to look for the door.”",
        },
        {
          text: "This time he went to a new place. There was light there. He went to the light. It came from a small door in the cave.",
        },
        {
          text: "Tom went out of the cave. Then he went back to Becky. “Come with me,” he said. “We can go out of the cave now.”",
        },
        {
          text: "Tom and Becky went out of the cave. They were very happy. They went to the river and waited there. Some men in a small boat came to them.",
        },
        {
          text: "Tom said, “We want to go home. Can you help us?”",
        },
        {
          text: "The men answered, “Yes. We can take you home.”",
        },
        {
          text: "Tom and Becky went in the boat with the men. They arrived home very late Tuesday night, and people in the town were very happy. Tom talked all night about their adventure in the cave.",
        },
      ],
    },
    {
      id: "chapter-11",
      title: "Chapter 11 In the Cave Again",
      questions: [
        {
          question:
            "Why couldn’t people go into the cave easily when Tom visited Becky’s father?",
          options: [
            { option: "The cave was full of water." },
            {
              option: "A new big door had been put on the cave.",
              isCorrect: true,
            },
            { option: "The cave was too small for people to go inside." },
          ],
        },
        {
          question: "What did Tom and Huck find in the cave under the cross?",
          options: [
            {
              option: "They found Injun Joe’s treasure box under the cross.",
              isCorrect: true,
            },
            { option: "They found a small door under the cross." },
            { option: "They found some food under the cross." },
          ],
        },
        {
          question:
            "Why did Tom use small bags to take the money instead of the box?",
          options: [
            { option: "The box was too big for the boat." },
            { option: "The box was too heavy to carry.", isCorrect: true },
            { option: "The bags were a present from Mrs. Douglas." },
          ],
        },
      ],
      text: [
        {
          text: "Tom and Becky stayed home for many days. Then, two weeks after their adventure, Tom visited Becky and talked to her father.",
        },
        {
          text: "Mr. Thatcher said, “You’re a very good boy, Tom. You helped Becky in the cave. Thank you. People can’t go into it now because it has a new big door.”",
        },
        {
          text: "“But Injun Joe’s living in the cave!” Tom said.",
        },
        {
          text: "Some men went down the river to the cave. Tom went with them. They opened the new door. Injun Joe was there, but he was dead.",
        },
        {
          text: "Tom wanted to talk to Huck. Later in the week he went to Mr. Jones’s house. The two boys talked about their adventures.",
        },
        {
          text: "“The money isn’t in Injun Joe’s house,” Tom said. “It’s in the cave! I know, because Injun Joe was there. Let’s get it!”",
        },
        {
          text: "Huck was afraid. “But maybe we can’t find it.”",
        },
        {
          text: "“I can find it again,” Tom said. “I know about a small door at the back of the cave. Becky and I came out there. We can go in that door, and I can find Injun Joe’s treasure.”",
        },
        {
          text: "“OK,” Huck said. “Let’s go today.”",
        },
        {
          text: "That afternoon the boys went in a small boat to the back of the cave. Tom walked first, and Huck went after him. They walked and walked.",
        },
        {
          text: "Then Tom said, “This is the right place! Injun Joe was here.”",
        },
        {
          text: "The boys looked for a good place for treasure.",
        },
        {
          text: "Suddenly, Tom said, “Look! There’s a cross! Injun Joe said, ’under the cross.’ Let’s look there!”",
        },
        {
          text: "The boys went to the place with the cross. Tom said, “I’m going to dig here with my knife ... Look! It’s the treasure box! Let’s get it out now. The treasure’s ours!”",
        },
        {
          text: "“This box is very heavy,” Huck said. “We can’t take it with us.”",
        },
        {
          text: "“I have some small bags,” Tom said. “We can put the money in them and take it home.”",
        },
        {
          text: "The boys went out of the cave with the money.",
        },
      ],
    },
    {
      id: "chapter-12",
      title: "Chapter 12 At Mrs. Douglas’s House",
      questions: [
        {
          question:
            "What did Mrs. Douglas give Tom and Huck to put on in the bedroom?",
          options: [
            { option: "She gave them new shoes." },
            { option: "She gave them new caps." },
            {
              option: "She gave them new shirts and jeans.",
              isCorrect: true,
            },
          ],
        },
        {
          question: "What did Mrs. Douglas want to give Huck?",
          options: [
            { option: "She wanted to give him a new boat." },
            {
              option: "She wanted to give him a home and some money.",
              isCorrect: true,
            },
            { option: "She wanted to give him a job in her house." },
          ],
        },
        {
          question: "How much money was in the bags from the cave?",
          options: [
            { option: "There was $1,200 in the bags." },
            { option: "There was $12,000 in the bags.", isCorrect: true },
            { option: "There was $120,000 in the bags." },
          ],
        },
      ],
      text: [
        {
          text: "Tom said, “Let’s take the money to the old house near Mrs. Douglas’s house. That’s a good place for it.”",
        },
        {
          text: "They started to walk to the old house. Mr. Jones was in Mrs. Douglas’s yard. He called to the boys.",
        },
        {
          text: "“A lot of people are waiting for you. Come with me,” he said. They went into Mrs. Douglas’s house.",
        },
        {
          text: "“Hello, boys,” Mrs. Douglas said. “Come with me.”",
        },
        {
          text: "Tom and Huck went with her to a bedroom. There were new shirts and jeans on the bed.",
        },
        {
          text: "“Wash your hands and faces and put on these shirts and jeans,” Mrs. Douglas said. “Then come to the big room.”",
        },
        {
          text: "The boys went to the room. A lot of people were there.",
        },
        {
          text: "Mrs. Douglas said, “First I want to say ‘thank you’ to Mr. Jones and his sons. They helped me. They’re very good people.”",
        },
        {
          text: "“Huck helped, too,” Mr. Jones said.",
        },
        {
          text: "‘Thank you, too, Huck,” Mrs. Douglas said. “You’re a good boy, and I like you. I want to give you a home and some money.”",
        },
        {
          text: "“But Huck has a lot of money!” Tom said.",
        },
        {
          text: "He went to the bedroom and came back with the bags of money. “We have this money from the cave There’s a lot of money in them, and it’s ours now.”",
        },
        {
          text: "There was $12,000 in the bags. The people were very surprised. They asked about the boys’ adventure.",
        },
      ],
    },
    {
      id: "chapter-13",
      title: "Chapter 13 Huck’s New Home",
      questions: [
        {
          question:
            "Why wasn’t Huck happy living in the big house with Mrs. Douglas?",
          options: [
            {
              option:
                "He did not like washing every day or going to school and church.",
              isCorrect: true,
            },
            { option: "He did not like Mrs. Douglas." },
            { option: "He did not like the food in the big house." },
          ],
        },
        {
          question:
            "What did Tom ask Huck to do so the boys at school could play with him?",
          options: [
            { option: "He asked him to give his money to the boys." },
            { option: "He asked him to run away with him." },
            {
              option:
                "He asked him to live with Mrs. Douglas and come to school.",
              isCorrect: true,
            },
          ],
        },
        {
          question: "When were the boys meeting at the end of the chapter?",
          options: [
            { option: "The boys were meeting in the afternoon." },
            {
              option: "The boys were meeting at twelve o’clock at night.",
              isCorrect: true,
            },
            { option: "The boys were meeting after school." },
          ],
        },
      ],
      text: [
        {
          text: "Huck lived in the big house with Mrs. Douglas. He was a new person. He washed every day, and he went to school and church. But he wasn’t happy. He stayed there for three weeks, and then he ran away.",
        },
        {
          text: "Tom went to Huck. “Why did you run away?”",
        },
        {
          text: "Huck answered, “Mrs. Douglas is a good woman. I like her, but I can’t live with her. I don’t like washing every day, and I don’t like going to school and church. I don’t want to have a lot of money. But I want to be your friend. OK?”",
        },
        {
          text: "“No,” Tom said, “I can’t be your friend, because the boys at school don’t want to play with you. We’re thinking about a lot of new adventures. Please live with Mrs. Douglas and come to school. Then the boys at school can play with you.”",
        },
        {
          text: "“I want to be your friend,” Huck said, “and I want to have adventures with you and the boys at school. Maybe I can live with Mrs. Douglas. I don’t know, but I’m going to try it again for a month.”",
        },
        {
          text: "“Good,” Tom said. “The boys are meeting later, at twelve o’clock at night. You can come, too.”",
        },
        {
          text: "“Good!” Huck said.",
        },
      ],
    },
  ] satisfies AudiobookSection[],
};
