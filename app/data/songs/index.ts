import { davidBowie } from "./david-bowie";
import { pinkFloyd } from "./pink-floyd";
import { soundgarden } from "./soundgarden";
import type { Band } from "./types";

export type { Band, Song, SongLine } from "./types";

export const bands: Band[] = [pinkFloyd, davidBowie, soundgarden];

export const findBand = (slug?: string) =>
  bands.find((band) => band.slug === slug);

export const findSong = (band: Band, slug?: string) =>
  band.songs.find((song) => song.slug === slug);

export const albumId = (title: string, year: number) =>
  `album-${year}-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
