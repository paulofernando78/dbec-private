import type { Song } from "@/data/songs/types";

export const inTheFlesh: Song = {
  slug: "in-the-flesh",
  title: "In the Flesh",
  album: "The Wall",
  year: 1979,
  youtubeUrl: "https://www.youtube.com/watch?v=6Z6Je2QM6lE",
  lines: [
    ["So ya thought ya might like to go to the show", "Então você achou que talvez gostasse de ir ao show"],
    ["To feel the warm thrill of confusion, that space cadet glow", "Para sentir o caloroso arrepio da confusão, aquele brilho de cadete espacial"],
    ["I've got some bad news for you sunshine", "Tenho más notícias para você, querida"],
    ["Pink isn't well, he stayed back at the hotel", "Pink não está bem, ficou no hotel"],
    ["And they sent us along as a surrogate band", "E nos mandaram no lugar dele, como uma banda substituta"],
    ["We're gonna find out where you fans really stand", "Vamos descobrir qual é realmente a posição de vocês, fãs"],
    ["Are there any queers in the theater tonight?", "Tem algum homossexual no teatro esta noite?"],
    ["Get them up against the wall", "Encostem-nos contra a parede"],
    ["(Against the wall)", "(Contra a parede)"],
    ["Now there's one in the spotlight, he don't look right to me", "Agora há um sob o refletor; ele não me parece certo"],
    ["Get him up against the wall", "Encostem-no contra a parede"],
    ["(Against the—)", "(Contra a—)"],
    ["And that one looks Jewish and that one's a coon!", "E aquele parece judeu, e aquele é um [insulto racial]!"],
    ["Who let all of this riff-raff into the room?", "Quem deixou toda essa ralé entrar na sala?"],
    ["There's one smoking a joint and another with spots", "Há um fumando um baseado e outro cheio de manchas"],
    ["If I had my way, I'd have all of you shot!", "Se dependesse de mim, mandaria fuzilar todos vocês!"],
  ].map(([english, portuguese]) => ({ english, portuguese })),
};
