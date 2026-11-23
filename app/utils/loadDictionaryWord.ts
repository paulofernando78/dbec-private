export type DictionaryExample = {
  enExample?: string;
  ptExample?: string;
};

export type DictionaryNote = {
  enNote?: string;
  ptNote?: string;
};

export type DictionaryImage = {
  src?: string;
  alt?: string;
};

export type DictionaryDefinition = {
  word: string;
  phonetics?: string;
  partOfSpeech?: string;
  enDefinition?: string;
  ptDefinition?: string;
  examples?: DictionaryExample[];
  synonyms?: string[] | string;
  antonyms?: string[] | string;
  seeAlso?: string[] | string;
  notes?: DictionaryNote[];
  imgs?: DictionaryImage[];
};

type DictionaryEntry = {
  definitions?: DictionaryDefinition[];
};

const normalizeDictionaryWord = (word: string) =>
  word
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();

const dictionaryLetters = import.meta.glob<unknown>(
  "../data/dictionary/[a-z].json",
  { import: "default" },
) as Record<string, () => Promise<unknown>>;

export const nonAlphabeticDictionaryDefinitions = () => [
  ...flattenDictionaryDefinitions(businessOneDictionary),
  ...flattenDictionaryDefinitions(expressionsDictionary),
].filter((definition) => !/^[a-z]/i.test(definition.word));

export const loadDictionaryLetter = async (
  letter: string,
): Promise<unknown> => {
  const normalizedLetter = letter.toLowerCase();
  const loadData = dictionaryLetters[`../data/dictionary/${normalizedLetter}.json`];

  if (!loadData) throw new Error(`Dictionary letter not found: ${normalizedLetter}`);
  const baseData = await loadData();
  const supplementalDefinitions = [
    ...flattenDictionaryDefinitions(businessOneDictionary),
    ...flattenDictionaryDefinitions(expressionsDictionary),
  ].filter((definition) =>
    definition.word.toLowerCase().startsWith(normalizedLetter),
  );

  return [
    ...(Array.isArray(baseData) ? baseData : [baseData]),
    { definitions: supplementalDefinitions },
  ];
};

export const flattenDictionaryDefinitions = (
  data: unknown,
): DictionaryDefinition[] => {
  const entries = (Array.isArray(data) ? data : [data]) as DictionaryEntry[];

  return entries
    .flatMap((entry) => entry?.definitions || [])
    .filter(
      (definition): definition is DictionaryDefinition =>
        typeof definition?.word === "string",
    );
};

export const loadDictionaryWord = async (
  word: string,
): Promise<DictionaryDefinition | null> => {
  if (!word) return null;

  const normalizedWord = normalizeDictionaryWord(word);
  const firstLetter = normalizedWord[0];
  if (!firstLetter) return null;

  const findWord = (value: unknown) => flattenDictionaryDefinitions(value).find(
    (item) => normalizeDictionaryWord(item.word) === normalizedWord,
  );
  const hasLetterFile = /[a-z]/.test(firstLetter);
  if (!hasLetterFile) {
    const supplementalMatch = [
      ...flattenDictionaryDefinitions(businessOneDictionary),
      ...flattenDictionaryDefinitions(expressionsDictionary),
    ].find((item) => normalizeDictionaryWord(item.word) === normalizedWord);
    if (supplementalMatch) return supplementalMatch;
  }

  if (hasLetterFile) {
    const match = findWord(await loadDictionaryLetter(firstLetter));
    if (match) return match;
  }

  // Some older entries live in a letter file that does not match their first word.
  const otherLetters = await Promise.all(
    [..."abcdefghijklmnopqrstuvwxyz"]
      .filter((letter) => !hasLetterFile || letter !== firstLetter)
      .map(loadDictionaryLetter),
  );
  return otherLetters.map(findWord).find(Boolean) || null;
};
import businessOneDictionary from "@/data/dictionary/business-1.generated.json";
import expressionsDictionary from "@/data/dictionary/expressions.generated.json";

