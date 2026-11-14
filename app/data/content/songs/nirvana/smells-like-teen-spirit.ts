const hello = ["Hello, hello, hello, how low?", "Alô, alô, alô, quão baixo?"];
const preChorus = [hello, hello, hello, ["Hello, hello, hello", "Alô, alô, alô"]];

const entertainUs = ["Here we are now, entertain us", "Aqui estamos, divirta a gente"];
const chorus = [
  ["With the lights out, it's less dangerous", "Com as luzes apagadas, é menos perigoso"],
  entertainUs,
  ["I feel stupid and contagious", "Eu me sinto idiota e contagioso"],
  entertainUs,
  ["A mulatto, an albino", "Um mulato, um albino"],
];

const chorusEnding = [
  ["A mosquito, my libido, yeah", "Um mosquito, minha libido, é"],
  ["Hey, yey", "Ei, ê"],
];

const denial = ["A denial, a denial", "Uma negação, uma negação"];

export const smellsLikeTeenSpiritLyrics = [
  ["Load up on guns, bring your friends", "Junte as armas, traga seus amigos"],
  ["It's fun to lose and to pretend", "É divertido perder e fingir"],
  ["She's over-bored, and self-assured", "Ela está entediada demais e segura de si"],
  ["Oh no, I know a dirty word", "Ah, não, eu sei um palavrão"],
  ...preChorus,
  ...chorus,
  ...chorusEnding,
  ["I'm worse at what I do best", "Sou pior no que faço de melhor"],
  ["And for this gift, I feel blessed", "E por esse dom, me sinto abençoado"],
  ["Our little group has always been", "Nosso grupinho sempre existiu"],
  ["And always will until the end", "E vai existir até o fim"],
  ...preChorus,
  ...chorus,
  ...chorusEnding,
  ["And I forget just why I taste", "E eu esqueço por que mesmo eu provo"],
  ["Oh yeah, I guess it makes me smile", "Ah, é, acho que isso me faz sorrir"],
  ["I found it hard, it's hard to find", "Achei difícil, é difícil de achar"],
  ["Oh well, whatever, never mind", "Ah, bem, tanto faz, deixa pra lá"],
  ...preChorus,
  ...chorus,
  ["A mosquito, my libido", "Um mosquito, minha libido"],
  denial,
  denial,
  denial,
  denial,
  ["A denial", "Uma negação"],
].map(([english, portuguese]) => ({ english, portuguese }));
