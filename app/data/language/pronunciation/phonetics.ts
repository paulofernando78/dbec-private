import { bold, underline, type RichContent } from "@/helpers/content";

export const phoneticsMedia = (group: "vowels" | "consonants", sound: string) =>
  `/media/audio/language/pronunciation/phonetics/${group}/${sound}.mp3?v=1`;

type PhoneticSound = {
  file: string;
  phoneme: string;
  examples: RichContent[];
};

const vowelSounds: PhoneticSound[] = [
  { file: "i", phoneme: "/i/", examples: [["s", underline("ee")], ["gr", underline("ee"), "n"], ["k", underline("ey")]] },
  { file: "ɪ", phoneme: "/ɪ/", examples: [["s", underline("i"), "t"], ["b", underline("i"), "g"], ["f", underline("i"), "sh"]] },
  { file: "e", phoneme: "/e/", examples: [["b", underline("e"), "d"], ["r", underline("e"), "d"], ["h", underline("ea"), "d"]] },
  { file: "æ", phoneme: "/æ/", examples: [["c", underline("a"), "t"], ["m", underline("a"), "p"], ["bl", underline("a"), "ck"]] },
  { file: "ɑ", phoneme: "/ɑ/", examples: [["c", underline("ar")], ["st", underline("ar")], ["f", underline("a"), "ther"]] },
  { file: "ɔ", phoneme: "/ɔ/", examples: [["l", underline("aw")], ["t", underline("al"), "k"], [underline("aw"), "ful"]] },
  { file: "ʊ", phoneme: "/ʊ/", examples: [["b", underline("oo"), "k"], ["g", underline("oo"), "d"], ["p", underline("u"), "t"]] },
  { file: "u", phoneme: "/u/", examples: [["m", underline("oo"), "n"], ["bl", underline("ue")], ["f", underline("oo"), "d"]] },
  { file: "ʌ", phoneme: "/ʌ/", examples: [["c", underline("u"), "p"], ["s", underline("u"), "n"], ["l", underline("o"), "ve"]] },
  { file: "ə", phoneme: "/ə/", examples: [[underline("a"), "bout"], ["teach", underline("er")], ["sof", underline("a")]] },
  { file: "eɪ", phoneme: "/eɪ/", examples: [["d", underline("ay")], ["n", underline("a"), "me"], ["r", underline("ai"), "n"]] },
  { file: "aɪ", phoneme: "/aɪ/", examples: [["t", underline("i"), "me"], ["m", underline("y")], ["l", underline("igh"), "t"]] },
  { file: "ɔɪ", phoneme: "/ɔɪ/", examples: [["b", underline("oy")], ["c", underline("oi"), "n"], ["v", underline("oi"), "ce"]] },
  { file: "aʊ", phoneme: "/aʊ/", examples: [["n", underline("ow")], ["h", underline("ou"), "se"], ["cl", underline("ou"), "d"]] },
  { file: "oʊ", phoneme: "/oʊ/", examples: [["g", underline("o")], ["h", underline("o"), "me"], ["b", underline("oa"), "t"]] },
];

const consonantSounds: PhoneticSound[] = [
  { file: "b", phoneme: "/b/", examples: [[underline("b"), "ook"], ["ca", underline("b")], ["ru", underline("bb"), "er"]] },
  { file: "d", phoneme: "/d/", examples: [[underline("d"), "og"], ["ma", underline("d"), "e"], ["la", underline("dd"), "er"]] },
  { file: "dʒ", phoneme: "/dʒ/", examples: [[underline("j"), "ob"], [underline("g"), "iant"], ["bri", underline("dge")]] },
  { file: "f", phoneme: "/f/", examples: [[underline("f"), "ish"], [underline("ph"), "one"], ["lau", underline("gh")]] },
  { file: "g", phoneme: "/g/", examples: [[underline("g"), "o"], ["bi", underline("gg"), "er"], ["ba", underline("g")]] },
  { file: "h", phoneme: "/h/", examples: [[underline("h"), "at"], ["a", underline("h"), "ead"], [underline("h"), "ome"]] },
  { file: "j", phoneme: "/j/", examples: [[underline("y"), "es"], [underline("u"), "se"], ["m", underline("u"), "sic"]] },
  { file: "k", phoneme: "/k/", examples: [[underline("c"), "at"], [underline("k"), "ey"], ["ba", underline("ck")]] },
  { file: "l", phoneme: "/l/", examples: [[underline("l"), "eg"], ["be", underline("ll")], [underline("l"), "ight"]] },
  { file: "m", phoneme: "/m/", examples: [[underline("m"), "an"], ["su", underline("mm"), "er"], ["ti", underline("m"), "e"]] },
  { file: "n", phoneme: "/n/", examples: [[underline("n"), "o"], ["di", underline("nn"), "er"], ["su", underline("n")]] },
  { file: "p", phoneme: "/p/", examples: [[underline("p"), "en"], ["ha", underline("pp"), "y"], ["cu", underline("p")]] },
  { file: "r", phoneme: "/r/", examples: [[underline("r"), "ed"], ["ca", underline("rr"), "y"], [underline("r"), "ight"]] },
  { file: "s", phoneme: "/s/", examples: [[underline("s"), "ee"], [underline("c"), "ity"], ["bu", underline("s")]] },
  { file: "t", phoneme: "/t/", examples: [[underline("t"), "ea"], ["le", underline("tt"), "er"], ["ca", underline("t")]] },
  { file: "tʃ", phoneme: "/tʃ/", examples: [[underline("ch"), "air"], ["tea", underline("ch"), "er"], ["wa", underline("tch")]] },
  { file: "v", phoneme: "/v/", examples: [[underline("v"), "an"], ["se", underline("v"), "en"], ["lo", underline("v"), "e"]] },
  { file: "w", phoneme: "/w/", examples: [[underline("w"), "e"], [underline("qu"), "ick"], [underline("o"), "ne"]] },
  { file: "z", phoneme: "/z/", examples: [[underline("z"), "oo"], ["ea", underline("s"), "y"], ["no", underline("s"), "e"]] },
  { file: "ð", phoneme: "/ð/", examples: [[underline("th"), "is"], ["mo", underline("th"), "er"], ["brea", underline("th"), "e"]] },
  { file: "ŋ", phoneme: "/ŋ/", examples: [["si", underline("ng")], ["si", underline("ng"), "er"], ["lo", underline("ng")]] },
  { file: "ʃ", phoneme: "/ʃ/", examples: [[underline("sh"), "e"], ["na", underline("ti"), "on"], ["spe", underline("ci"), "al"]] },
  { file: "ʒ", phoneme: "/ʒ/", examples: [["vi", underline("s"), "ion"], ["mea", underline("s"), "ure"], ["bei", underline("ge")]] },
  { file: "θ", phoneme: "/θ/", examples: [[underline("th"), "ink"], ["ba", underline("th")], ["heal", underline("th"), "y"]] },
];

const useBoldSoundHighlight = (examples: RichContent[]) =>
  examples.map((example) =>
    example.map((part) =>
      typeof part === "string" || part.type !== "underline"
        ? part
        : bold(part.part ?? ""),
    ),
  );

export const phoneticSections = [
  {
    title: "Vowels",
    sounds: vowelSounds.map(({ file, phoneme, examples }) => ({
      phoneme,
      audio: phoneticsMedia("vowels", file),
      examples: useBoldSoundHighlight(examples),
    })),
  },
  {
    title: "Consonants",
    sounds: consonantSounds.map(({ file, phoneme, examples }) => ({
      phoneme,
      audio: phoneticsMedia("consonants", file),
      examples: useBoldSoundHighlight(examples),
    })),
  },
] as const;
