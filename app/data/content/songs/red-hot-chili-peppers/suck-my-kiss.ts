const verse = [
  ["Should've been, could've been, would've been dead", "Devia, podia, teria morrido"],
  ["If I didn't get the message goin' to my head", "Se a mensagem não tivesse chegado à minha cabeça"],
  ["I am what I am", "Eu sou o que sou"],
  ["Most motherfuckers don't give a damn", "A maioria dos filhos da puta tá nem aí"],
  ["Oh, baby, think you can", "Ah, gata, acha que consegue"],
  ["Be my girl, I'll be your man", "Ser minha garota? Eu vou ser seu homem"],
  ["Someone full of fun do me 'til I'm well done", "Alguém cheio de energia, me pega até eu ficar no ponto"],
  ["Little Bo Peep comin' for my stun gun", "A pequena Bo Peep vem atrás da minha arma de choque"],
  ["Beware, take care", "Cuidado, se cuida"],
  ["Most motherfuckers have a cold ass stare", "A maioria dos filhos da puta tem um olhar frio pra caralho"],
  ["Oh, baby, please be there", "Ah, gata, por favor, esteja lá"],
  ["Suck my kiss, cut me my share", "Chupe meu beijo, me dê a minha parte"],
];

const chorus = [
  ["Hit me, you can't hurt me, suck my kiss", "Me bate, você não consegue me machucar, chupe meu beijo"],
  ["Kiss me, please pervert me, stick with this", "Me beije, por favor, me perverta, continue nessa"],
];

const dirtyTalk = ["Is she talking dirty?", "Ela tá falando sacanagem?"];

export const suckMyKissLyrics = [
  ["And I'm sailin', yeah", "E eu tô navegando, é"],
  ["Yeah, oh yeah", "É, oh, é"],
  ["Yeah, oh yeah", "É, oh, é"],
  ["Hit me!", "Manda ver!"],
  ...verse,
  ...chorus,
  dirtyTalk,
  ["Give to me sweet sacred bliss, your mouth was made to suck my kiss", "Me dê um doce êxtase sagrado, sua boca foi feita pra chupar meu beijo"],
  ["Look at me, can't you see, all I really want to be", "Olha pra mim, não vê que tudo que eu quero é"],
  ["Is free from a world that hurts me?", "Me livrar de um mundo que me machuca?"],
  ["I need relief", "Preciso de alívio"],
  ["Do you want me, girl, to be your thief?", "Garota, você quer que eu seja seu ladrão?"],
  ["Oh, baby just for you", "Ah, gata, só por você"],
  ["I'd steal anything that you want me to", "Eu roubaria qualquer coisa que você me pedisse"],
  ["K-I-S-S-I-N-G", "B-E-I-J-A-N-D-O"],
  ["Chicka-chicka dee, do me like a banshee", "Chicka-chicka dee, me pega feito uma banshee"],
  ["Low brow is how", "O jeito é ser vulgar"],
  ["Swimming in the sound of \"bow-wow-wow\"", "Nadando no som de “au-au-au”"],
  ["Oh, baby, do me now", "Ah, gata, me pega agora"],
  ["Do me here I do allow", "Me pega aqui, eu deixo"],
  ...chorus,
  ["Is she gonna curtsy?", "Ela vai fazer uma reverência?"],
  ["Give to me sweet sacred bliss, that mouth was made to", "Me dê um doce êxtase sagrado, essa boca foi feita pra"],
  ...verse,
  ...chorus,
  dirtyTalk,
  ["Give to me sweet sacred bliss, that mouth was made to suck my kiss", "Me dê um doce êxtase sagrado, essa boca foi feita pra chupar meu beijo"],
].map(([english, portuguese]) => ({ english, portuguese }));
