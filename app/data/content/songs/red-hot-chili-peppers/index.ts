import type { Band } from "../types";
import { suckMyKissLyrics } from "./suck-my-kiss";

const album = "Blood Sugar Sex Magik";

export const redHotChiliPeppers: Band = {
  slug: "red-hot-chili-peppers",
  name: "Red Hot Chili Peppers",
  artistPhoto: "https://www.therockpit.net/wp-content/uploads/2022/10/RHCP-photo-credit_-Clara-Balzary-808x1024.jpg",
  albumCovers: {
    [album]: "https://www.rhino.com/sites/g/files/g2000012691/files/styles/square/public/075992668125.sml.jpg?itok=nsb9TY5j",
  },
  songs: [
    {
      slug: "suck-my-kiss",
      title: "Suck My Kiss",
      album,
      year: 1991,
      youtubeUrl: "https://www.youtube.com/watch?v=C6jElKMMOWM",
      lines: suckMyKissLyrics,
    },
  ],
};
