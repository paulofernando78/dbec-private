import { newZealandAdventure } from "./listening/audiobooks/starter/a-new-zealand-adventure";
import { flyingHome } from "./listening/audiobooks/starter/flying-home";
import { marcelAndTheWhiteStar } from "./listening/audiobooks/starter/marcel-and-the-white-star";
import { newspaperChase } from "./listening/audiobooks/starter/newspaper-chase";
import { simonAndTheSpy } from "./listening/audiobooks/starter/simon-and-the-spy";
import { theFireboy } from "./listening/audiobooks/starter/the-fireboy";
import { theLastPhoto } from "./listening/audiobooks/starter/the-last-photo";
import { theLeopardAndTheLighthouse } from "./listening/audiobooks/starter/the-leopard-and-the-lighthouse";
import { thePearlGirl } from "./listening/audiobooks/starter/the-pearl-girl";
import { whoWantsToBeAStar } from "./listening/audiobooks/starter/who-wants-to-be-a-star";
import type { AudiobookSection } from "./listening/audiobooks/starter/a-new-zealand-adventure";

const withSectionAudioPaths = <
  T extends {
    slug: string;
    title: string;
    sections: readonly { id: string; title: string }[];
  },
>(
  audiobook: T,
) => ({
  ...audiobook,
  sections: audiobook.sections.map((section) => ({
    ...section,
    localAudio: `local-media/audio/audiobooks/listening/audiobooks/starter/${audiobook.slug}/${section.id}.mp3`,
    r2Audio: `/media/audio/audiobooks/listening/audiobooks/starter/${audiobook.slug}/${section.id}.mp3`,
  })),
});

export const audiobooks = {
  [newZealandAdventure.slug]: withSectionAudioPaths(newZealandAdventure),
  [flyingHome.slug]: withSectionAudioPaths(flyingHome),
  [marcelAndTheWhiteStar.slug]: withSectionAudioPaths(marcelAndTheWhiteStar),
  [newspaperChase.slug]: withSectionAudioPaths(newspaperChase),
  [simonAndTheSpy.slug]: withSectionAudioPaths(simonAndTheSpy),
  [theFireboy.slug]: withSectionAudioPaths(theFireboy),
  [theLastPhoto.slug]: withSectionAudioPaths(theLastPhoto),
  [theLeopardAndTheLighthouse.slug]: withSectionAudioPaths(
    theLeopardAndTheLighthouse,
  ),
  [thePearlGirl.slug]: withSectionAudioPaths(thePearlGirl),
  [whoWantsToBeAStar.slug]: withSectionAudioPaths(whoWantsToBeAStar),
};

export type AudiobookSlug = keyof typeof audiobooks;

export const availableAudiobookSlugs: ReadonlySet<AudiobookSlug> = new Set([
  "a-new-zealand-adventure",
  "flying-home",
  "marcel-and-the-white-star",
  "newspaper-chase",
  "simon-and-the-spy",
  "the-fireboy",
  "the-last-photo",
  "the-leopard-and-the-lighthouse",
  "the-pearl-girl",
  "who-wants-to-be-a-star",
]);
