const chorus = [
  ["Even flow", "Fluxo constante"],
  ["Thoughts arrive like butterflies", "Os pensamentos chegam como borboletas"],
  ["Oh, he don't know, so he chases them away", "Ah, ele não sabe, então os espanta"],
];

const whisperingHands = [
  ["Oh, whispering hands, gently lead him away", "Ah, mãos que sussurram o levam embora com cuidado"],
  ["Him away, him away", "O levam embora, o levam embora"],
];

export const evenFlowLyrics = [
  ["Freezin' rests his head on a pillow made of concrete, again", "Morrendo de frio, ele apoia a cabeça num travesseiro de concreto, de novo"],
  ["Oh, feelin' maybe he'll see a little better, set a days, ooh yeah", "Ah, sente que talvez enxergue um pouco melhor daqui a uns dias, ah, é"],
  ["Oh, hand out, faces that he sees time again ain't that familiar, ooh yeah", "Ah, de mão estendida, os rostos que ele vê vez após vez ainda não lhe são tão familiares, ah, é"],
  ["Oh, dark grin, he can't help when he's happy he looks insane", "Ah, um sorriso sombrio, ele não consegue evitar: quando está feliz, parece louco"],
  ...chorus,
  ["Oh, someday yet, he'll begin his life again", "Ah, um dia ele ainda vai recomeçar a vida"],
  ["Life again, life again", "Recomeçar a vida, recomeçar a vida"],
  ["Kneelin', looking through the paper though he doesn't know to read, ooh yeah", "De joelhos, folheando o jornal, embora não saiba ler, ah, é"],
  ["Oh, prayin', now to something that has never showed him anything", "Ah, rezando agora para algo que nunca lhe mostrou nada"],
  ["Oh, feelin', understands the weather of the winter's on its way", "Ah, ele sente, sabe que o frio do inverno está chegando"],
  ["Oh, ceilings, few and far between all the legal halls of shame, yeah", "Ah, são raros os tetos em meio a todos esses salões da vergonha da justiça, é"],
  ...chorus,
  ["Someday yet, he'll begin his life again", "Um dia ele ainda vai recomeçar a vida"],
  ...whisperingHands,
  ["Yeah", "É"],
  ["Woo", "Uuuh"],
  ["Oh, yeah", "Ah, é"],
  ["Fuck it up", "Arrebenta com tudo"],
  ...chorus,
  ["Someday yet, he'll begin his life again, yeah", "Um dia ele ainda vai recomeçar a vida, é"],
  ...whisperingHands,
  ["Yeah", "É"],
  ["Woo", "Uuuh"],
  ["Uh huh, yeah", "Aham, é"],
  ["Yeah, yeah, fuck 'em up again", "É, é, acaba com eles de novo"],
].map(([english, portuguese]) => ({ english, portuguese }));
