import type { Band } from "@/data/content/songs/types";
import { paranoidSongs } from "./paranoid";

export const blackSabbath: Band = {
  slug: "black-sabbath",
  name: "Black Sabbath",
  description: "English heavy metal band formed in Birmingham in 1968.",
  artistPhoto:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Sabs.jpg/960px-Sabs.jpg",
  albumCovers: {
    Paranoid:
      "https://upload.wikimedia.org/wikipedia/en/6/64/Black_Sabbath_-_Paranoid.jpg",
  },
  songs: [...paranoidSongs],
};
