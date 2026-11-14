import { gamesLucasArtsCardData } from "./lucas-arts/games-lucas-arts-card-data";
import { gamesSierraCardData } from "./sierra/games-sierra-card-data";

export const gameStudios = [
  {
    studio: "Sierra",
    games: Object.values(gamesSierraCardData),
  },
  {
    studio: "LucasArts",
    image: "/media/images/content/games/old-pc-games/lucas-arts.png?v=1",
    games: Object.values(gamesLucasArtsCardData),
  },
];
