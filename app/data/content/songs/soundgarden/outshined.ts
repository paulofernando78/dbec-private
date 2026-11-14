const ohYeah = [["Oh yeah", "Ah, sim"]];

const soNowYouKnow = [
  ["So now you know", "Então agora você sabe"],
  ["Who gets mystified", "Quem fica sem entender nada"],
];

const chorus = [
  ["Show me the power child, I'd like to say", "Mostre-me o poder, garoto, eu queria dizer"],
  ["That I'm down on my knees today", "Que hoje estou de joelhos"],
  ["Yeah it gives me the butterflies, gives me away", "É, me dá um frio na barriga e acaba me entregando"],
  ["'Til I'm up on my feet again", "Até eu ficar de pé de novo"],
];

const feeling = ["Oh I'm feeling", "Ah, tô me sentindo"];
const outshined = ["Outshined, outshined, outshined, outshined", "Ofuscado, ofuscado, ofuscado, ofuscado"];

export const outshinedLyrics = [
  ["Well, I got up feeling so down", "Bem, levantei me sentindo tão pra baixo"],
  ["I got off being sold out", "Até curti ser traído"],
  ["I've kept the movie rolling", "Deixei o filme continuar rodando"],
  ["But the story's getting old now", "Mas a história já tá ficando batida"],
  ...ohYeah,
  ["Well I just looked in the mirror", "Bem, acabei de me olhar no espelho"],
  ["And things aren't looking so good", "E as coisas não parecem muito bem"],
  ["I'm looking California", "Por fora, Califórnia"],
  ["And feeling Minnesota", "Por dentro, Minnesota"],
  ...ohYeah,
  ...soNowYouKnow,
  ...soNowYouKnow,
  ...chorus,
  ["Hey I'm feeling", "Ei, tô me sentindo"],
  feeling,
  outshined,
  ...ohYeah,
  ["Well someone let the dogs out", "Alguém solte os cachorros"],
  ["They'll show you where the truth is", "Eles vão te mostrar onde tá a verdade"],
  ["The grass is always greener", "A grama é sempre mais verde"],
  ["Where the dogs are shitting", "Onde os cachorros estão cagando"],
  ...ohYeah,
  ["Well I'm feeling that I'm sober", "Bem, sinto que tô sóbrio"],
  ["Even though I'm drinking", "Mesmo estando bebendo"],
  ["Well I can't get any lower", "Já cheguei ao fundo do poço"],
  ["Still I feel I'm sinking", "E ainda sinto que tô afundando"],
  ...soNowYouKnow,
  ...soNowYouKnow,
  ...chorus,
  ["I'm feeling", "Tô me sentindo"],
  feeling,
  outshined,
  ["Ooh yeah", "Ah, sim"],
  ["Outshined", "Ofuscado"],
  ...soNowYouKnow,
  ...chorus,
  feeling,
  feeling,
  ...chorus.slice(0, 2),
  ["And yeah it gives me the butterflies, gives me away", "E, sim, me dá um frio na barriga e acaba me entregando"],
  chorus[3],
  feeling,
  feeling,
  outshined,
].map(([english, portuguese]) => ({ english, portuguese }));
