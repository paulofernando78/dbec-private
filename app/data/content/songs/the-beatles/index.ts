import type { Band } from "../types";
import { helpLyrics } from "./help";
import { hereComesTheSunLyrics } from "./here-comes-the-sun";

const album = "Abbey Road";

export const theBeatles: Band = {
  slug: "the-beatles",
  name: "The Beatles",
  artistPhoto:
    "https://upload.wikimedia.org/wikipedia/commons/d/d3/The_Beatles%2C_Kennedy_Airport%2C_February_1964.jpg",
  albumCovers: {
    [album]:
      "https://www.thebeatles.com/sites/default/files/styles/max_2600x2600/public/2021-06/Abbey%20Road.jpg?itok=_AGlITc8",
    "Help!":
      "https://www.thebeatles.com/sites/default/files/styles/max_2600x2600/public/2021-06/Help.jpg?itok=Iqlgwo0A",
  },
  songs: [
    {
      slug: "help",
      title: "Help!",
      album: "Help!",
      year: 1965,
      youtubeUrl: "https://www.youtube.com/watch?v=2Q_ZzBGPdqE",
      lines: helpLyrics,
    },
    {
      slug: "here-comes-the-sun",
      title: "Here Comes the Sun",
      album,
      year: 1969,
      youtubeUrl: "https://www.youtube.com/watch?v=KQetemT1sWc",
      lines: hereComesTheSunLyrics,
    },
  ],
};
