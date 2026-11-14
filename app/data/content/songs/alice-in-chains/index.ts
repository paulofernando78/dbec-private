import type { Band } from "../types";
import { manInTheBoxLyrics } from "./man-in-the-box";

const album = "Facelift";

export const aliceInChains: Band = {
  slug: "alice-in-chains",
  name: "Alice in Chains",
  artistPhoto: "https://craftrecordings.com/cdn/shop/collections/Alice-In-Chains.jpg?v=1723823346",
  albumCovers: {
    [album]: "https://shop.sonymusic.ca/cdn/shop/files/AliceInChains_Facelift_1500x1500x_194397838619.webp?v=1743448177&width=640",
  },
  songs: [
    {
      slug: "man-in-the-box",
      title: "Man in the Box",
      album,
      year: 1990,
      youtubeUrl: "https://www.youtube.com/watch?v=TAqZb52sgpU",
      lines: manInTheBoxLyrics,
    },
  ],
};
