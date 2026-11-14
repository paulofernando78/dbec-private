import type { Band } from "../types";
import { shoutLyrics } from "./shout";

const album = "Songs from the Big Chair";

export const tearsForFears: Band = {
  slug: "tears-for-fears",
  name: "Tears for Fears",
  // Photo by Frank Ockenfels, published by Pitchfork.
  artistPhoto:
    "https://media.pitchfork.com/photos/618e8a0da62621a2629dcac1/1:1/w_640,c_limit/Tears-for-Fears.png",
  albumCovers: {
    [album]: "https://tearsforfears.com/dist/img/cover-bigchair.jpg",
  },
  songs: [
    {
      slug: "shout",
      title: "Shout",
      album,
      year: 1985,
      youtubeUrl: "https://www.youtube.com/watch?v=Ye7FKc1JQe4",
      lines: shoutLyrics,
    },
  ],
};
