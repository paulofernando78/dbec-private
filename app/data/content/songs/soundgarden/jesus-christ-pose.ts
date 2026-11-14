const pose = ["In your Jesus Christ pose", "Na sua pose de Jesus Cristo"];
const arms = ["Arms held out", "De braços abertos"];
const thornsAndShroud = [
  ["Thorns and shroud", "Espinhos e mortalha"],
  ["Like it's the coming of the Lord", "Como se fosse a vinda do Senhor"],
];
const needToBeSaved = ["Like I need to be saved", "Como se eu precisasse ser salvo"];
const saved = ["Saved", "Salvo"];
const drivingTheNails = ["Like I'm driving the nails", "Como se eu estivesse cravando os pregos"];
const nails = ["Nails", "Pregos"];
const poor = ["Poor (in your Jesus Christ pose)", "Pobre (na sua pose de Jesus Cristo)"];

export const jesusChristPoseLyrics = [
  ["And you stare at me", "E você me encara"],
  pose,
  arms,
  ["Like you've been carrying a load", "Como se viesse carregando um fardo"],
  ["And you swear to me", "E você me jura"],
  ["You don't want to be my slave", "Que não quer ser meu escravo"],
  ["But you're staring at me like I", "Mas você me encara como se eu"],
  needToBeSaved,
  saved,
  needToBeSaved,
  saved,
  pose,
  pose,
  arms,
  pose,
  ...thornsAndShroud,
  ["And I swear to you", "E eu te juro"],
  ["That I would never feed you pain", "Que eu nunca te causaria dor"],
  ["But your staring at me like I", "Mas você me encara como se eu"],
  drivingTheNails,
  nails,
  drivingTheNails,
  nails,
  drivingTheNails,
  ["Nails, nails", "Pregos, pregos"],
  drivingTheNails,
  nails,
  pose,
  pose,
  arms,
  pose,
  ...thornsAndShroud,
  ["Would it pain you more to walk on water", "Andar sobre a água te doeria mais"],
  ["Than to wear a crown of thorns?", "Do que usar uma coroa de espinhos?"],
  ["It wouldn't pain me more to bury you rich", "Não me doeria mais te enterrar rico"],
  ["Than to bury you", "Do que te enterrar"],
  poor,
  poor,
  poor,
].map(([english, portuguese]) => ({ english, portuguese }));
