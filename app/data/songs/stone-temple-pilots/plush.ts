const iFeelIt = ["And I feel it", "E eu sinto isso"];

const chorus = [
  ["Where you going for tomorrow?", "Aonde você vai amanhã?"],
  ["Where you going with that mask I found?", "Aonde você vai com aquela máscara que eu encontrei?"],
  ["And I feel, and I feel", "E eu sinto, e eu sinto"],
  ["When the dogs begin to smell her", "Quando os cães começarem a farejá-la"],
  ["Will she smell alone?", "Será que só vão sentir o cheiro dela?"],
];

const bridge = [
  ["When the dogs do find her", "Quando os cães finalmente a encontrarem"],
  ["Got time, time to wait for tomorrow", "Dá tempo, tempo de esperar até amanhã"],
  ["To find it, to find it, to find it", "Pra encontrar isso, pra encontrar isso, pra encontrar isso"],
];

const outroLine = ["To find it", "Pra encontrar isso"];

export const plushLyrics = [
  ["And I feel that time's a waste go", "E eu sinto que o tempo está sendo desperdiçado"],
  ["So where are you going 'till tomorrow?", "Então, aonde você vai até amanhã?"],
  ["And I see that these are lies to come", "E eu vejo que são mentiras que ainda virão"],
  ["So would you even care?", "Então, você sequer se importaria?"],
  iFeelIt,
  iFeelIt,
  ...chorus,
  ["And I feel so much depends on the weather", "E eu sinto que muita coisa depende do tempo"],
  ["So, is it raining in your bedroom?", "Então, está chovendo no seu quarto?"],
  ["And I see that these are the eyes of disarray", "E eu vejo que são os olhos da desordem"],
  ["Would you even care?", "Você sequer se importaria?"],
  iFeelIt,
  ["And she feels it", "E ela sente isso"],
  ...chorus,
  ...bridge,
  ...bridge,
  ...chorus,
  ...bridge,
  ...bridge,
  outroLine,
  outroLine,
  outroLine,
].map(([english, portuguese]) => ({ english, portuguese }));
