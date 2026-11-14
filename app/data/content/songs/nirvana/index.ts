import type { Band } from "../types";
import { smellsLikeTeenSpiritLyrics } from "./smells-like-teen-spirit";

const album = "Nevermind";

export const nirvana: Band = {
  slug: "nirvana",
  name: "Nirvana",
  artistPhoto: "https://cdn.5280.com/2016/05/gettyimages-71886716-e1490933037342.jpg",
  albumCovers: {
    [album]: "https://upload.wikimedia.org/wikipedia/en/b/b7/NirvanaNevermindalbumcover.jpg",
  },
  songs: [
    {
      slug: "smells-like-teen-spirit",
      title: "Smells Like Teen Spirit",
      album,
      year: 1991,
      youtubeUrl: "https://www.youtube.com/watch?v=hTWKbfoikeg",
      lines: smellsLikeTeenSpiritLyrics,
    },
  ],
};
