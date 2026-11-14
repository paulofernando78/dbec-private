const plea = ["Won't you come and save me, save me?", "Você não vem me salvar, me salvar?"];

const chorus = [
  ["Feed my eyes, can you sew them shut?", "Alimente meus olhos. Você consegue costurá-los para fechá-los?"],
  ["Jesus Christ, deny your maker", "Jesus Cristo, negue seu criador"],
  ["He who tries, will be wasted", "Quem tentar será destruído"],
  ["Feed my eyes, now you've sewn them shut", "Alimente meus olhos. Agora você os fechou com pontos"],
];

export const manInTheBoxLyrics = [
  ["I'm the man in the box, buried in my shit", "Sou o homem na caixa, enterrado na minha própria merda"],
  plea,
  ...chorus,
  ["I'm the dog who gets beat, shove my nose in shit", "Sou o cachorro que apanha. Esfregue meu focinho na merda"],
  plea,
  ...chorus,
  ...chorus,
].map(([english, portuguese]) => ({ english, portuguese }));
