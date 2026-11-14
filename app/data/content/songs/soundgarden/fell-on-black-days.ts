const chorus = [
  ["'Cause I fell on black days", "Porque caí em tempos sombrios"],
  ["I fell on black days", "Caí em tempos sombrios"],
];

const howWouldIKnow = ["How would I know", "Como eu ia saber"];
const fate = [howWouldIKnow, ["That this could be my fate?", "Que esse poderia ser meu destino?"]];
const vocalization = ["Ooh-ooh-ooh-ooh", "Uh-uh-uh-uh"];
const change = ["I sure don't mind a change", "Eu bem que aceito uma mudança"];

export const fellOnBlackDaysLyrics = [
  ["Whatsoever I've feared has come to life", "Tudo o que eu temi virou realidade"],
  ["And whatsoever I've fought off became my life", "E tudo o que tentei afastar virou a minha vida"],
  ["Just when everyday seemed to greet me with a smile", "Bem quando cada dia parecia me receber com um sorriso"],
  ["Sunspots have faded, now I'm doing time", "As manchas de sol sumiram, agora estou cumprindo pena"],
  ["Now I'm doing time", "Agora estou cumprindo pena"],
  ...chorus,
  ["Whomsoever I've cured, I've sickened now", "Quem eu curei, agora fiz adoecer"],
  ["And whomsoever I've cradled, I've put you down", "E quem embalei nos braços, agora deixei no chão"],
  ["I'm a search light soul they say", "Dizem que minha alma é um farol de busca"],
  ["But I can't see it in the night", "Mas eu não consigo vê-lo à noite"],
  ["I'm only faking when I get it right", "Quando eu acerto, só estou fingindo"],
  ["When I get it right", "Quando eu acerto"],
  ...chorus,
  ...fate,
  howWouldIKnow,
  ["That this could be my fate? Yeah", "Que esse poderia ser meu destino? É"],
  vocalization,
  vocalization,
  vocalization,
  ["So what you wanted to see good", "Então aquilo em que você queria enxergar o bem"],
  ["Has made you blind", "Te deixou cego"],
  ["And what you wanted to be yours", "E aquilo que você queria que fosse seu"],
  ["Has made it mine", "Acabou sendo meu"],
  ["So don't you lock up something", "Então não aprisione algo"],
  ["That you wanted to see fly", "Que você queria ver voar"],
  ["Hands are for shaking", "Mãos são pra apertar"],
  ["No, not tying, no, not tying", "Não, pra amarrar não, pra amarrar não"],
  change,
  change,
  ["Yeah, I sure don't mind, sure don't mind a change", "É, eu bem que aceito, bem que aceito uma mudança"],
  change,
  ...chorus,
  ...fate,
  ...fate,
  ...fate,
  ...fate,
  change,
].map(([english, portuguese]) => ({ english, portuguese }));
