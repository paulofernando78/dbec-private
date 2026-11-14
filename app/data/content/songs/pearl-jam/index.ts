import type { Band } from "../types";
import { evenFlowLyrics } from "./even-flow";

export const pearlJam: Band = {
  slug: "pearl-jam",
  name: "Pearl Jam",
  artistPhoto: "https://cdn.mos.cms.futurecdn.net/FhUizykKUFRPxkkShWBVuZ-1200-80.jpg",
  albumCovers: {
    Ten: "https://www.artrockstore.com/cdn/shop/products/artrockstore-pearl-jam-ten-album_grande.jpg?v=1683167265",
  },
  songs: [
    {
      slug: "even-flow",
      title: "Even Flow",
      album: "Ten",
      year: 1991,
      youtubeUrl: "https://www.youtube.com/watch?v=CxKWTzr-k6s",
      lines: evenFlowLyrics,
    },
  ],
};
