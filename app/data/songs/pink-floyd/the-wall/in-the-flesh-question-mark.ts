import type { Song } from "@/data/songs/types";

export const inTheFleshQuestionMark: Song = {
  slug: "in-the-flesh-question-mark",
  title: "In the Flesh?",
  album: "The Wall",
  year: 1979,
  youtubeUrl: "https://www.youtube.com/watch?v=uzsEmI61Xas",
  lines: [
    ["So ya thought ya might", "Então você achou que talvez"],
    ["Like to go to the show", "Gostasse de ir ao show"],
    ["To feel the warm thrill of confusion", "Para sentir o caloroso arrepio da confusão"],
    ["That space cadet glow", "Aquele brilho de cadete espacial"],
    ["Tell me, is something eluding you, sunshine?", "Diga-me, alguma coisa está escapando de você, querida?"],
    ["Is this not what you expected to see?", "Não era isso que você esperava ver?"],
    ["If you wanna find out", "Se você quer descobrir"],
    ["What's behind these cold eyes", "O que existe por trás destes olhos frios"],
    ["You'll just have to", "Você terá apenas que"],
    ["Claw your way through this disguise", "Abrir caminho com as garras através deste disfarce"],
    ["Lights!", "Luzes!"],
    ["Roll the sound effects!", "Rodem os efeitos sonoros!"],
    ["Action!", "Ação!"],
    ["Drop it, drop it on 'em", "Solte, solte em cima deles"],
    ["Drop it, drop it on them!", "Solte, solte em cima deles!"],
  ].map(([english, portuguese]) => ({ english, portuguese })),
};
