import type { Band } from "../types";
import { blackHoleSunLyrics } from "./black-hole-sun";
import { burdenInMyHandLyrics } from "./burden-in-my-hand";
import { fellOnBlackDaysLyrics } from "./fell-on-black-days";
import { jesusChristPoseLyrics } from "./jesus-christ-pose";
import { myWaveLyrics } from "./my-wave";
import { outshinedLyrics } from "./outshined";
import { prettyNooseLyrics } from "./pretty-noose";
import { spoonmanLyrics } from "./spoonman";
import { theDayITriedToLiveLyrics } from "./the-day-i-tried-to-live";

const studioAlbums = [
  {
    title: "Ultramega OK",
    year: 1988,
    coverUrl: "https://media.s-bol.com/E0gg8zvXjOOl/1200x1191.jpg",
    tracks: [
      "Flower", "All Your Lies", "665", "Beyond the Wheel", "667",
      "Mood for Trouble", "Circle of Power", "He Didn't", "Smokestack Lightning",
      "Nazi Driver", "Head Injury", "Incessant Mace", "One Minute of Silence",
    ],
  },
  {
    title: "Louder Than Love",
    year: 1989,
    coverUrl: "https://shop.rockhall.com/cdn/shop/files/81UpY_g_lbL._UF1000_1000_QL80.jpg?v=1762443012",
    tracks: [
      "Ugly Truth", "Hands All Over", "Gun", "Power Trip", "Get on the Snake",
      "Full on Kevin's Mom", "Loud Love", "I Awake", "No Wrong No Right",
      "Uncovered", "Big Dumb Sex", "Full On (Reprise)",
    ],
  },
  {
    title: "Badmotorfinger",
    year: 1991,
    coverUrl: "https://creators-images-production.fra1.cdn.digitaloceanspaces.com/releases/0310100878/img-c-7691568912.jpeg",
    tracks: [
      "Rusty Cage", "Outshined", "Slaves & Bulldozers", "Jesus Christ Pose",
      "Face Pollution", "Somewhere", "Searching with My Good Eye Closed",
      "Room a Thousand Years Wide", "Mind Riot", "Drawing Flies", "Holy Water",
      "New Damage",
    ],
  },
  {
    title: "Superunknown",
    year: 1994,
    coverUrl: "https://uploads.tenhomaisdiscosqueamigos.com/2019/04/Soundgarden-Superunknown.jpg",
    tracks: [
      "Let Me Drown", "My Wave", "Fell on Black Days", "Mailman", "Superunknown",
      "Head Down", "Black Hole Sun", "Spoonman", "Limo Wreck",
      "The Day I Tried to Live", "Kickstand", "Fresh Tendrils", "4th of July",
      "Half", "Like Suicide",
    ],
  },
  {
    title: "Down on the Upside",
    year: 1996,
    coverUrl: "https://i5.walmartimages.com/seo/Soundgarden-Down-On-The-Upside-Music-Performance-Vinyl_192e5def-310b-4912-ba56-1a12f99ff928.ed1be970495b750cbc17f9ed3135a8eb.jpeg",
    tracks: [
      "Pretty Noose", "Rhinosaur", "Zero Chance", "Dusty", "Ty Cobb",
      "Blow Up the Outside World", "Burden in My Hand", "Never Named", "Applebite",
      "Never the Machine Forever", "Tighter & Tighter", "No Attention",
      "Switch Opens", "Overfloater", "An Unkind", "Boot Camp",
    ],
  },
  {
    title: "King Animal",
    year: 2012,
    coverUrl: "https://filmnadvd.b-cdn.net/PICTURES/soundgarden-king-animal-2vinyl-lp-602537198184.jpg",
    tracks: [
      "Been Away Too Long", "Non-State Actor", "By Crooked Steps",
      "A Thousand Days Before", "Blood on the Valley Floor", "Bones of Birds",
      "Taree", "Attrition", "Black Saturday", "Halfway There", "Worse Dreams",
      "Eyelid's Mouth", "Rowing",
    ],
  },
];

const rustyCageLyrics = [
  "Oh, you wired me awake",
  "And hit me with a hand of broken nails",
  "Yeah, you tied my lead and pulled my chain",
  "To watch my blood begin to boil",
  "But I'm gonna break, I'm gonna break my",
  "I'm gonna break my rusty cage and run",
  "Yeah, I'm gonna break, I'm gonna break my",
  "I'm gonna break my rusty cage and run",
  "Too cold to start a fire",
  "I'm burning diesel, burning dinosaur bones",
  "Yeah, I'll take the river down to still water",
  "And ride a pack of dogs",
  "But I'm gonna break, I'm gonna break my",
  "I'm gonna break my rusty cage and run",
  "Yeah, I'm gonna break, I'm gonna break my",
  "I'm gonna break my rusty cage and run",
  "Hit like a Phillips head into my brain",
  "It's gonna be too dark to sleep again",
  "Cutting my teeth on bars and rusty chains",
  "I'm gonna break my rusty cage and run",
  "When the forest burns along the road",
  "Like God's eyes in my headlights",
  "And when the dogs are looking for their bones",
  "And it's raining icepicks on your steel shore",
  "Well, I'm gonna break, I'm gonna break my",
  "I'm gonna break my rusty cage and run",
  "Well, I'm gonna break, I'm gonna break my",
  "I'm gonna break my rusty cage and run",
].map((english) => ({ english, portuguese: "" }));

const youtubeUrls: Record<string, string> = {
  "Rusty Cage": "https://www.youtube.com/watch?v=pBZs_Py-1_0",
  "Black Hole Sun": "https://www.youtube.com/watch?v=3mbBbFH9fAg",
  "Jesus Christ Pose": "https://www.youtube.com/watch?v=14r7y6rM6zA",
  "Fell on Black Days": "https://www.youtube.com/watch?v=ySzrJ4GRF7s",
  "Spoonman": "https://www.youtube.com/watch?v=T0_zzCLLRvE",
  "Outshined": "https://www.youtube.com/watch?v=sNh-iw7gsuI",
  "My Wave": "https://www.youtube.com/watch?v=HEbYxEXM2cE",
  "Pretty Noose": "https://www.youtube.com/watch?v=f8nkHrv_4Mg",
  "The Day I Tried to Live": "https://www.youtube.com/watch?v=iUhoOQdNAKQ",
  "Burden in My Hand": "https://www.youtube.com/watch?v=k0JTyheCkAo",
};

const lyricsByTitle: Record<string, Band["songs"][number]["lines"]> = {
  "Rusty Cage": rustyCageLyrics,
  Outshined: outshinedLyrics,
  "Jesus Christ Pose": jesusChristPoseLyrics,
  "My Wave": myWaveLyrics,
  "Fell on Black Days": fellOnBlackDaysLyrics,
  "Black Hole Sun": blackHoleSunLyrics,
  Spoonman: spoonmanLyrics,
  "Pretty Noose": prettyNooseLyrics,
  "The Day I Tried to Live": theDayITriedToLiveLyrics,
  "Burden in My Hand": burdenInMyHandLyrics,
};

export const soundgarden: Band = {
  slug: "soundgarden",
  name: "Soundgarden",
  description: "American rock band formed in Seattle.",
  artistPhoto: "https://c02.purpledshub.com/uploads/sites/16/2023/04/soundgarden_universal_music_2012.jpg",
  albumCovers: Object.fromEntries(studioAlbums.map(({ title, coverUrl }) => [title, coverUrl])),
  songs: studioAlbums.flatMap(({ title: album, year, tracks }) =>
    tracks.filter((title) => youtubeUrls[title]).map((title) => ({
      slug: title.toLowerCase().replace(/'/g, "").replace(/[^a-z0-9]+/g, "-").replace(/-$/, ""),
      title,
      album,
      year,
      youtubeUrl: youtubeUrls[title],
      lines: lyricsByTitle[title] ?? [],
    })),
  ),
};
