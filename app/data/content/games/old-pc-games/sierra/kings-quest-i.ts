import { mark } from "@/helpers/content";

export const kingsQuestI = {
  bundleUrl: "/media/games/sierra/kings-quest-i/kq1.jsdos?v=1",
  whiteboard: {
    title: "Advanced",
    descriptions: [
      "Guide Sir Graham through Daventry in search of the kingdom's three stolen treasures: a magic mirror, a magic shield, and a magic chest. Complete the major encounters and return the treasures to the castle.",
    ],
    date: "1984",
  },
  sections: [
    {
      id: "part-one-the-royal-mission",
      title: "Part One • The Royal Mission",
      instruction: "Begin Graham's quest and gather key items:",
      items: [
        {
          content: [
            "Open the castle doors, bow before King Edward, and talk to him to receive the quest.",
          ],
        },
        {
          content: [
            "Stand behind the large rock west of the castle, MOVE ROCK, LOOK IN HOLE, and GET DAGGER; standing in front of the rock is fatal.",
          ],
        },
        {
          content: [
            "Climb the nearby oak tree and take the golden egg from the nest.",
          ],
        },
        {
          content: [
            "Take a carrot from the garden, find the walnut tree and OPEN WALNUT to reveal its gold interior, and collect pebbles beside the lake.",
          ],
        },
        {
          content: [
            "Pick the four-leaf clover from the grassy field east of the river, then find the ceramic bowl in the forest, read it, and say FILL.",
          ],
        },
        {
          content: [
            "Give the filled bowl to the woodcutter's wife for the fiddle, then enter the witch's gingerbread house while she is away, OPEN CABINET, and take the Swiss cheese.",
          ],
        },

        {
          content: [
            "Save frequently: the original parser game contains random enemies, narrow paths, and unwinnable states.",
          ],
        },
      ],
    },
    {
      id: "part-two-the-magic-mirror",
      title: "Part Two • The Magic Mirror",
      instruction: "Enter the dragon's lair through the well:",
      items: [
        {
          content: [
            "At the old well, lower the bucket, cut the rope with the dagger to take the bucket, and climb down the remaining rope (or dive directly in).",
          ],
        },
        {
          content: [
            "Fill the bucket with water at the bottom of the well, dive down, and swim through the underwater opening into the cave.",
          ],
        },
        {
          content: [
            "Approach the dragon carefully and throw the bucket of water over it; this earns more points than killing it with the dagger.",
          ],
        },
        {
          content: [
            "Take the magic mirror after the dragon retreats, then leave the cave through the rock passage.",
          ],
        },
      ],
    },
    {
      id: "part-three-the-magic-chest",
      title: "Part Three • The Magic Chest",
      instruction: "Reach the giant in the Land of the Clouds:",
      items: [
        {
          content: [
            mark("Show"),
            " the carrot to the goat so it follows Graham, then lead it to the troll bridge; the goat drives the troll away.",
          ],
        },
        {
          content: [
            "Answer the gnome's riddle with his backwards name (Ifnkovhgroghprm / Rumplestiltskin) to receive the magic beans.",
          ],
        },
        {
          content: [
            "Plant the beans in the fertile flowerbed and climb the beanstalk carefully, saving before each narrow section.",
          ],
        },
        {
          content: [
            "In Cloud Land, take the sling from the tree hole before approaching the giant.",
          ],
        },
        {
          content: [
            "For the nonviolent maximum-point solution, keep moving until the giant tires and falls asleep instead of killing him with the sling.",
          ],
        },
        {
          content: [
            "Take the magic chest from the sleeping giant and climb back down the beanstalk to Daventry.",
          ],
        },
      ],
    },
    {
      id: "part-four-the-magic-shield",
      title: "Part Four • The Magic Shield",
      instruction: "Reach and escape the leprechaun kingdom:",
      items: [
        {
          content: [
            "Go to the boulder screen near the cave entrance and JUMP when the giant condor flies overhead to catch a ride to an isolated ledge.",
          ],
        },
        {
          content: [
            "Before dropping into the hole on the ledge, walk one screen west and pick up the mushroom.",
          ],
        },
        {
          content: [
            "Walk back east and fall down the hole into the underground caverns, carrying the four-leaf clover for protection.",
          ],
        },
        {
          content: [
            "Give the Swiss cheese to the giant rat guarding the door, open the door, and play the fiddle to make the leprechauns dance away.",
          ],
        },
        {
          content: [
            "Enter the throne room to take the magic shield and the king's sceptre.",
          ],
        },
        {
          content: [
            "Climb the stairs to the tiny exit, EAT MUSHROOM to shrink, and walk through the opening to return to normal size outside.",
          ],
        },
      ],
    },
    {
      id: "part-five-the-return",
      title: "Part Five • The Return",
      instruction: "Complete the quest:",
      items: [
        {
          content: [
            "Confirm that Graham has collected all three treasures: the magic mirror, the magic chest, and the magic shield.",
          ],
        },
        { content: ["Return to Castle Daventry and enter the throne room."] },
        {
          content: [
            "Walk up the throne steps and BOW before King Edward to present the treasures.",
          ],
        },
        {
          content: [
            "Watch Graham receive his reward and become the new King of Daventry.",
          ],
        },
      ],
    },
  ],
};
