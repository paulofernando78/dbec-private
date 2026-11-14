import type { Band } from "@/data/songs/types";
import { animalsSongs } from "./animals";
import { theDarkSideOfTheMoonSongs } from "./the-dark-side-of-the-moon";
import { inTheFleshQuestionMark } from "./the-wall/in-the-flesh-question-mark";

export const pinkFloyd: Band = {
  slug: "pink-floyd",
  name: "Pink Floyd",
  description: "English progressive rock band formed in London.",
  artistPhoto: "https://cdn.mos.cms.futurecdn.net/x6FVJCQdY2bvFhwnrAdbXN.jpg",
  albumCovers: {
    "The Dark Side of the Moon": "https://media.s-bol.com/JKlkmGmGZlMg/lMwlgj/1200x1177.jpg",
    "Animals": "https://uk.rarevinyl.com/cdn/shop/files/pink-floyd-animals-1st-ex-uk-vinyl-lp-album-record-shvl815-544467.jpg?v=1736234599",
    "The Wall": "https://vinylpark.ru/upload/iblock/f44/gb0u7uqiqtyk2gdl3161h19ka5gn9dp8.jpg"
  },
  songs: [...animalsSongs, ...theDarkSideOfTheMoonSongs, inTheFleshQuestionMark],
};
