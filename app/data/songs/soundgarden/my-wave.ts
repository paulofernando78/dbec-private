const take = [
  ["Take, if you want a slice", "Pegue, se quiser uma fatia"],
  ["If you want a piece", "Se quiser um pedaço"],
  ["If it feels alright", "Se achar que tá tudo bem"],
];

const cry = [
  ["Cry, if you want to cry", "Chore, se quiser chorar"],
  ["If it helps you see", "Se isso te ajuda a enxergar"],
  ["If it clears your eyes", "Se isso clareia sua visão"],
];

const hate = [
  ["Hate, if you want to hate", "Odeie, se quiser odiar"],
  ["If it keeps you safe", "Se isso te mantém a salvo"],
  ["If it makes you brave", "Se isso te dá coragem"],
];

const chorus = [
  ["Don't come over here", "Não venha aqui"],
  ["And piss on my gate", "Mijar no meu portão"],
  ["Save it just keep it", "Guarde isso pra você, só deixe isso"],
  ["Off my wave", "Fora da minha onda"],
];

const keepItOff = ["Keep it off my wave", "Deixe isso fora da minha onda"];
const keepItOffRepeated = ["Keep it off my wave, my wave", "Deixe isso fora da minha onda, minha onda"];
const myWave = ["My wave, my wave, my wave, my wave, my wave", "Minha onda, minha onda, minha onda, minha onda, minha onda"];
const refrain = [keepItOff, keepItOffRepeated, keepItOff, keepItOff, keepItOffRepeated];

export const myWaveLyrics = [
  ...take,
  ["Break, if you like the sound", "Quebre, se gosta do som"],
  ["If it gets you up", "Se isso te anima"],
  ["If it takes you down", "Se isso te derruba"],
  ["Share, if it makes you sleep", "Compartilhe, se isso te faz dormir"],
  ["If it sets you free", "Se isso te liberta"],
  ["If it helps you breathe", "Se isso te ajuda a respirar"],
  ...chorus,
  ...cry,
  ...hate,
  ["Pray, if you want to pray", "Reze, se quiser rezar"],
  ["If you like to kneel", "Se gosta de se ajoelhar"],
  ["If you like to lay", "Se gosta de se deitar"],
  ...chorus,
  ...refrain,
  myWave,
  ...cry,
  ...hate,
  ...take,
  ...chorus,
  ...refrain,
  ["My wave, my wave, my wave, my wave", "Minha onda, minha onda, minha onda, minha onda"],
  myWave,
  keepItOff,
  keepItOffRepeated,
  keepItOff,
].map(([english, portuguese]) => ({ english, portuguese }));
