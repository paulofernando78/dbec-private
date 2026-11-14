import { aliceInChains } from "./alice-in-chains";
import { davidBowie } from "./david-bowie";
import { nirvana } from "./nirvana";
import { pearlJam } from "./pearl-jam";
import { pinkFloyd } from "./pink-floyd";
import { redHotChiliPeppers } from "./red-hot-chili-peppers";
import { rush } from "./rush";
import { soundgarden } from "./soundgarden";
import { stoneTemplePilots } from "./stone-temple-pilots";
import { tearsForFears } from "./tears-for-fears";
import { theBeatles } from "./the-beatles";
import type { Band } from "./types";

export type { Band, Song, SongLine } from "./types";

export const bands: Band[] = [
  pinkFloyd,
  davidBowie,
  soundgarden,
  redHotChiliPeppers,
  pearlJam,
  aliceInChains,
  stoneTemplePilots,
  nirvana,
  rush,
  tearsForFears,
  theBeatles,
];

export const findBand = (slug?: string) =>
  bands.find((band) => band.slug === slug);

export const findSong = (band: Band, slug?: string) =>
  band.songs.find((song) => song.slug === slug);

export const albumId = (title: string, year: number) =>
  `album-${year}-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
