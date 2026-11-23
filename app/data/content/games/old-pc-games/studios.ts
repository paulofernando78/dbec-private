import { gamesLucasArtsCardData } from "./lucas-arts/games-lucas-arts-card-data";
import { gamesSierraCardData } from "./sierra/games-sierra-card-data";
import { games } from "./games-slug";

const releaseYear = (date: string) =>
  Number(date.match(/\b(?:19|20)\d{2}\b/)?.[0] ?? Infinity);

const withAvailability = (studio: string, cards: typeof gamesSierraCardData | typeof gamesLucasArtsCardData) =>
  Object.values(cards)
    .map((game) => ({
      ...game,
      comingSoon: !games[studio]?.[game.href.split("/").at(-1) ?? ""]?.bundleUrl,
    }))
    .sort((first, second) => releaseYear(first.date) - releaseYear(second.date));

export const gameStudios = [
  {
    studio: "Sierra",
    games: withAvailability("sierra", gamesSierraCardData),
  },
  {
    studio: "LucasArts",
    image: "/media/images/content/games/old-pc-games/lucas-arts.png?v=1",
    games: withAvailability("lucas-arts", gamesLucasArtsCardData),
  },
];
