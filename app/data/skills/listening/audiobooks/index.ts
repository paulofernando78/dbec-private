import { type ContentToken } from "@/helpers/content";

export type AudiobookImage = {
  localMedia?: string;
  r2?: string;
  imageAlt?: string;
};

export type AudiobookBlock =
  | {
      text: string | ContentToken;
      r2?: never;
    }
  | (AudiobookImage & { r2: string; text?: never });

export type AudiobookSection = AudiobookImage & {
  id: string;
  title: string;
  timestamp?: string;
  text: string | readonly AudiobookBlock[];
  questions?: readonly string[];
  answers?: readonly string[];
  mediaPosition?: "left" | "right" | "top" | "bottom";
  localAudio?: string;
  r2Audio?: string;
};

// Starter
import { newZealandAdventure } from "./starter/a-new-zealand-adventure";
import { flyingHome } from "./starter/flying-home";
import { marcelAndTheShakespeareLetters } from "./beginner/marcel-and-the-shakespeare-letters";
import { marcelAndTheMonaLisa } from "./starter/marcel-and-the-mona-lisa";
import { marcelAndTheWhiteStar } from "./starter/marcel-and-the-white-star";
import { newspaperChase } from "./starter/newspaper-chase";
import { simonAndTheSpy } from "./starter/simon-and-the-spy";
import { theFireboy } from "./starter/the-fireboy";
import { theLastPhoto } from "./starter/the-last-photo";
import { theLeopardAndTheLighthouse } from "./starter/the-leopard-and-the-lighthouse";
import { thePearlGirl } from "./starter/the-pearl-girl";
import { theTroyStone } from "./starter/the-troy-stone";
import { theWhiteOryx } from "./starter/the-white-oryx";
import { whoWantsToBeAStar } from "./starter/who-wants-to-be-a-star";

// Beginner
import { theAdventuresOfTomSawyer } from "./beginner/the-adventures-of-tom-sawyer";

// Elementary
import { aliceInWonderland } from "./elementary/alice-in-wonderland";
import { donQuixote } from "./elementary/don-quixote";
import { treasureIsland } from "./elementary/treasure-island";

// Lower-intermediate

// Intermediate

// Upper-intermediate

// Advanced

const withSectionAudioPaths = <
  T extends {
    slug: string;
    title: string;
    sections: readonly { id: string; title: string }[];
  },
>(
  audiobook: T,
  level:
    | "starter"
    | "beginner"
    | "elementary"
    | "low-intermediate"
    | "intermediate"
    | "upper-intermediate"
    | "advanced" = "starter",
  audioVersion?: number,
) => ({
  ...audiobook,
  sections: audiobook.sections.map((section) => ({
    ...section,
    localAudio: `local-media/audio/skills/listening/audiobooks/${level}/${audiobook.slug}/${section.id}.mp3`,
    r2Audio: `/media/audio/skills/listening/audiobooks/${level}/${audiobook.slug}/${section.id}.mp3${audioVersion ? `?v=${audioVersion}` : ""}`,
  })),
});

export const audiobooks = {
  // Starter
  [newZealandAdventure.slug]: withSectionAudioPaths(newZealandAdventure),
  [flyingHome.slug]: withSectionAudioPaths(flyingHome),
  [marcelAndTheMonaLisa.slug]: withSectionAudioPaths(marcelAndTheMonaLisa),
  [marcelAndTheShakespeareLetters.slug]: withSectionAudioPaths(
    marcelAndTheShakespeareLetters,
  ),
  [marcelAndTheWhiteStar.slug]: withSectionAudioPaths(marcelAndTheWhiteStar),
  [newspaperChase.slug]: withSectionAudioPaths(newspaperChase),
  [simonAndTheSpy.slug]: withSectionAudioPaths(simonAndTheSpy),
  [theFireboy.slug]: withSectionAudioPaths(theFireboy),
  [theLastPhoto.slug]: withSectionAudioPaths(theLastPhoto),
  [theLeopardAndTheLighthouse.slug]: withSectionAudioPaths(
    theLeopardAndTheLighthouse,
  ),
  [thePearlGirl.slug]: withSectionAudioPaths(thePearlGirl),
  [theTroyStone.slug]: withSectionAudioPaths(theTroyStone),
  [theWhiteOryx.slug]: withSectionAudioPaths(theWhiteOryx),
  [whoWantsToBeAStar.slug]: withSectionAudioPaths(whoWantsToBeAStar),

  // Beginner
  [theAdventuresOfTomSawyer.slug]: withSectionAudioPaths(
    theAdventuresOfTomSawyer,
    "beginner",
  ),

  // Elementary
  [treasureIsland.slug]: withSectionAudioPaths(treasureIsland, "elementary"),
  [aliceInWonderland.slug]: withSectionAudioPaths(
    aliceInWonderland,
    "elementary",
  ),
  [donQuixote.slug]: withSectionAudioPaths(donQuixote, "elementary", 2),
};

export type AudiobookSlug = keyof typeof audiobooks;

export const audiobookPreview = {
  slug: newZealandAdventure.slug,
  audioSectionId: "summary",
} as const;

export const availableAudiobookSlugs: ReadonlySet<AudiobookSlug> = new Set([
  // Starter
  "a-new-zealand-adventure",
  "flying-home",
  "marcel-and-the-mona-lisa",
  "marcel-and-the-shakespeare-letters",
  "marcel-and-the-white-star",
  "newspaper-chase",
  "simon-and-the-spy",
  "the-fireboy",
  "the-last-photo",
  "the-leopard-and-the-lighthouse",
  "the-pearl-girl",
  "the-troy-stone",
  "the-white-oryx",
  "who-wants-to-be-a-star",

  // Beginner
  theAdventuresOfTomSawyer.slug,

  // Elementary
  treasureIsland.slug,
  aliceInWonderland.slug,
  donQuixote.slug,

  // Lower-Intermediate

  // Intermediate

  // Upper-Intermediate

  // Advanced
]);
