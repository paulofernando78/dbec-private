import type { Band } from "../types";
import { plushLyrics } from "./plush";

const album = "Core";

export const stoneTemplePilots: Band = {
  slug: "stone-temple-pilots",
  name: "Stone Temple Pilots",
  artistPhoto: "https://cdn.mos.cms.futurecdn.net/fb8tA6nkkNZEmRMpM2Egmm.jpg",
  albumCovers: {
    [album]: "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/9c/c1/4d/9cc14ddd-fc63-58eb-d911-98de74825324/603497869275.jpg/800x800cc.jpg",
  },
  songs: [
    {
      slug: "plush",
      title: "Plush",
      album,
      year: 1992,
      youtubeUrl: "https://www.youtube.com/watch?v=V5UOC0C0x8Q",
      lines: plushLyrics,
    },
  ],
};
