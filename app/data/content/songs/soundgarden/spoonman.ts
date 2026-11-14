const feelTheRhythm = ["Feel the rhythm with your hands", "Sinta o ritmo com as mãos"];
const stealTheRhythm = ["(Steal the rhythm while you can)", "(Roube o ritmo enquanto puder)"];
const spoonman = ["Spoonman", "Homem das colheres"];
const chorus = [
  ["Spoonman, come together with your hands", "Homem das colheres, junte-se a nós com suas mãos"],
  ["Save me, I'm together with your plan", "Me salve, eu tô com você nessa"],
];
const saveMe = ["Save me", "Me salve"];
const saveMeYeah = ["Save me, yeah", "Me salve, é"];
const save = ["Save", "Salve"];
const withYourHands = ["With your hands", "Com suas mãos"];

export const spoonmanLyrics = [
  feelTheRhythm,
  stealTheRhythm,
  spoonman,
  ["Speak the rhythm on your own", "Diga o ritmo por conta própria"],
  ["(Speak the rhythm all alone)", "(Diga o ritmo sozinho)"],
  spoonman,
  ...chorus,
  saveMeYeah,
  ["Save, oh", "Salve, oh"],
  ["Well, all my friends are Indians", "Bem, todos os meus amigos são indígenas"],
  ["(All my friends are brown and red)", "(Todos os meus amigos têm pele marrom e vermelha)"],
  spoonman,
  ["And all my friends are skeletons", "E todos os meus amigos são esqueletos"],
  ["(They beat the rhythm with their bones)", "(Eles marcam o ritmo com os ossos)"],
  spoonman,
  ["Oh, hmm", "Oh, hmm"],
  ...chorus,
  saveMe,
  save,
  saveMe,
  saveMeYeah,
  save,
  ["With your", "Com suas"],
  withYourHands,
  withYourHands,
  ["Come on, come on, come on, come on", "Vamos, vamos, vamos, vamos"],
  ["Hands", "Mãos"],
  ["Come on while I get off", "Vamos, enquanto eu me divirto"],
  ...chorus,
  saveMe,
  ["Save, yeah", "Salve, é"],
  saveMe,
  ["With your, with your hands", "Com suas, com suas mãos"],
  feelTheRhythm,
  stealTheRhythm,
  spoonman,
].map(([english, portuguese]) => ({ english, portuguese }));
