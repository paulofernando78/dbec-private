import type { Band } from "@/data/songs/types";
import { theRiseAndFallOfZiggyStardustSongs } from "./the-rise-and-fall-of-ziggy-stardust-and-the-spiders-from-mars";

export const davidBowie: Band = {
  slug: "david-bowie",
  name: "David Bowie",
  description: "English singer-songwriter and influential rock artist.",
  artistPhoto: "https://static1.purepeople.com/articles/3/17/10/33/%40/2045083-david-bowie-a-londres-en-octobre-2002-1200x0-2.jpg",
  albumCovers: {
    "The Rise and Fall of Ziggy Stardust and the Spiders from Mars": "https://i0.wp.com/www.njarts.net/wp-content/uploads/2022/06/ziggy.jpg?ssl=1"
  },
  songs: [...theRiseAndFallOfZiggyStardustSongs],
};
