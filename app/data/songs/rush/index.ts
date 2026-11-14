import type { Band } from "../types";
import { tomSawyerLyrics } from "./tom-sawyer";

const album = "Moving Pictures";

export const rush: Band = {
  slug: "rush",
  name: "Rush",
  artistPhoto: "https://cdn.mos.cms.futurecdn.net/v2/t%3A0%2Cl%3A280%2Ccw%3A720%2Cch%3A720%2Cq%3A80%2Cw%3A720/4KbxHJHiEy74DN65u3f3pT.jpg",
  albumCovers: {
    [album]: "https://www.rush.com/wp-content/uploads/2014/12/moving-picture-cover-600x600.jpg",
  },
  songs: [
    {
      slug: "tom-sawyer",
      title: "Tom Sawyer",
      album,
      year: 1981,
      youtubeUrl: "https://www.youtube.com/watch?v=auLBLk4ibAk",
      lines: tomSawyerLyrics,
    },
  ],
};
