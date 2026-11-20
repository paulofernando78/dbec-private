import { newZealandAdventure } from "./starter/a-new-zealand-adventure";
import { flyingHome } from "./starter/flying-home";
import { marcelAndTheMonaLisa } from "./starter/marcel-and-the-mona-lisa";
import { marcelAndTheWhiteStar } from "./starter/marcel-and-the-white-star";
import { newspaperChase } from "./starter/newspaper-chase";
import { simonAndTheSpy } from "./starter/simon-and-the-spy";
import { theFireboy } from "./starter/the-fireboy";
import { theLastPhoto } from "./starter/the-last-photo";
import { theLeopardAndTheLighthouse } from "./starter/the-leopard-and-the-lighthouse";
import { thePearlGirl } from "./starter/the-pearl-girl";
import { theTroyStone } from "./starter/the-troy-stone";
import { whoWantsToBeAStar } from "./starter/who-wants-to-be-a-star";
import type { AudiobookSection } from "./starter/a-new-zealand-adventure";
import { aliceInWonderland } from "./elementary/alice-in-wonderland";
import { treasureIsland } from "./elementary/treasure-island";

const withSectionAudioPaths = <
  T extends {
    slug: string;
    title: string;
    sections: readonly { id: string; title: string }[];
  },
>(
  audiobook: T,
  level: "starter" | "elementary" = "starter"
) => ({
  ...audiobook,
  sections: audiobook.sections.map((section) => ({
    ...section,
    localAudio: `local-media/audio/skills/listening/audiobooks/${level}/${audiobook.slug}/${section.id}.mp3`,
    r2Audio: `/media/audio/skills/listening/audiobooks/${level}/${audiobook.slug}/${section.id}.mp3`,
  })),
});

export const audiobooks = {
  [treasureIsland.slug]: withSectionAudioPaths(treasureIsland, "elementary"),
  [aliceInWonderland.slug]: withSectionAudioPaths(aliceInWonderland, "elementary"),

  [newZealandAdventure.slug]: withSectionAudioPaths(newZealandAdventure),
  [flyingHome.slug]: withSectionAudioPaths(flyingHome),
  [marcelAndTheMonaLisa.slug]: withSectionAudioPaths(marcelAndTheMonaLisa),
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
  [whoWantsToBeAStar.slug]: withSectionAudioPaths(whoWantsToBeAStar),
};

export type AudiobookSlug = keyof typeof audiobooks;

export const audiobookPreview = {
  slug: newZealandAdventure.slug,
  audioSectionId: "summary",
} as const;

export const availableAudiobookSlugs: ReadonlySet<AudiobookSlug> = new Set([
  treasureIsland.slug,
  aliceInWonderland.slug,
  "a-new-zealand-adventure",
  "flying-home",
  "marcel-and-the-mona-lisa",
  "marcel-and-the-white-star",
  "newspaper-chase",
  "simon-and-the-spy",
  "the-fireboy",
  "the-last-photo",
  "the-leopard-and-the-lighthouse",
  "the-pearl-girl",
  "the-troy-stone",
  "who-wants-to-be-a-star",
]);
