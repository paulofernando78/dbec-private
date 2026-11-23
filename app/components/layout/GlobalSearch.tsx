import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router";
import { CircleX, Search, X } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { levels } from "@/data/learn/course";
import { authenticContentTedEdLessons } from "@/data/learn/ted-ed/ted-ed-lessons-card-data";
import { authenticContentsTedEdRoutes } from "@/data/learn/ted-ed";
import { lessonRegistry } from "@/data/learn/course/lesson-registry";
import businessOneLessons from "@/data/language/expressions/business-1/business-1-search.generated.json";
import { businessTwoGroups, businessTwoPath } from "@/data/language/expressions/business-2/business-two";
import { gamesLucasArtsCardData } from "@/data/content/games/old-pc-games/lucas-arts/games-lucas-arts-card-data";
import { gamesSierraCardData } from "@/data/content/games/old-pc-games/sierra/games-sierra-card-data";
import { links } from "@/data/nav-bar-links";
import { audiobooks } from "@/data/skills/listening/audiobooks/index";
import { listeningLevels } from "@/data/skills/listening/audiobooks/levels";
import { albumId, bands } from "@/data/content/songs";
import { DictionaryWordCard } from "@/features/Dictionary/DictionaryWordCard";
import {
  flattenDictionaryDefinitions,
  loadDictionaryLetter,
  nonAlphabeticDictionaryDefinitions,
  type DictionaryDefinition,
} from "@/utils/loadDictionaryWord";

type SearchItem = {
  title: string;
  category: string;
  description: string;
  href: string;
  keywords?: string;
  fullText?: string;
};

type SearchResult = SearchItem & { snippet: string };

const ignoredContentKeys = new Set([
  "audio",
  "component",
  "href",
  "image",
  "poster",
  "src",
  "video",
]);

const extractText = (
  value: unknown,
  seen = new WeakSet<object>(),
): string[] => {
  if (typeof value === "string") return [value];
  if (value == null || typeof value !== "object") return [];
  if (seen.has(value)) return [];
  seen.add(value);

  if (Array.isArray(value)) {
    return value.flatMap((item) => extractText(item, seen));
  }

  return Object.entries(value).flatMap(([key, item]) =>
    ignoredContentKeys.has(key) ? [] : extractText(item, seen),
  );
};

const cleanText = (parts: readonly string[]) =>
  parts.join(" ").replace(/\s+/g, " ").trim();

const pageItems: readonly SearchItem[] = [
  {
    title: "Course (A1-C1)",
    category: "Learn",
    description: "English courses from A1 to C1.",
    href: "/course",
    keywords: "levels lessons units",
  },
  {
    title: "TED-Ed",
    category: "Learn",
    description: "Authentic videos and real-world topics.",
    href: "/authentic-content",
    keywords: "authentic content",
  },
  {
    title: "Travel",
    category: "Learn · Specific purposes",
    description: "English for common travel situations.",
    href: "/travel",
  },
  {
    title: "Audiobooks",
    category: "Skills · Listening",
    description: "Practice listening with graded stories.",
    href: "/audiobooks",
    keywords: "audio books listening",
  },
  {
    title: "Qual usar?",
    category: "Language · Vocabulary",
    description: "Commonly confused English words.",
    href: "/vocabulary",
    keywords: "vocabulary which one palavras parecidas",
  },
  {
    title: "Como se diz?",
    category: "Language · Vocabulary",
    description: "Como dizer em inglês expressões e palavras do português.",
    href: "/vocabulary/como-se-diz",
  },
  {
    title: "Como se diz “acabar” em inglês?",
    category: "Language · Vocabulary · Como se diz?",
    description: "Entenda quando usar finish, end ou run out of.",
    href: "/vocabulary/como-se-diz/acabar",
  },
  {
    title: "Grammar",
    category: "Language",
    description: "English grammar forms and structures.",
    href: "/grammar/present-perfect",
  },
  {
    title: "Phonetics",
    category: "Language",
    description: "English vowel and consonant sounds.",
    href: "/pronunciation/phonetics",
    keywords: "pronunciation sounds",
  },
  {
    title: "Linking Sounds",
    category: "Language · Pronunciation",
    description: "How sounds connect across words in spoken English.",
    href: "/pronunciation/linking-sounds",
  },
  {
    title: "Songs",
    category: "Content",
    description: "Learn English through songs.",
    href: "/songs",
  },
  {
    title: "Games",
    category: "Content",
    description: "Learn and explore through games.",
    href: "/games",
  },
  {
    title: "CEFR",
    category: "Page",
    description: "The Common European Framework of Reference.",
    href: "/cefr",
  },
  {
    title: "Accept vs. Except",
    category: "Vocabulary",
    description: "Aprenda a distinguir “aceitar” de “exceto”.",
    href: "/vocabulary/accept-vs-except",
    keywords: "aceitar exceto excluir",
  },
  {
    title: "Hear vs. Listen",
    category: "Vocabulary",
    description: "Receiving a sound versus paying attention to it.",
    href: "/vocabulary/hear-vs-listen",
    keywords: "ouvir escutar sound",
  },
  {
    title: "Speak vs. Say vs. Tell",
    category: "Vocabulary",
    description: "Speaking and giving information.",
    href: "/vocabulary/speak-vs-say-vs-tell",
    keywords: "falar dizer contar",
  },
  {
    title: "Quick vs. Fast",
    category: "Vocabulary",
    description: "Short duration versus high speed.",
    href: "/vocabulary/quick-vs-fast",
    keywords: "quickly fastly rápido velocidade",
  },
  {
    title: "Frozen vs. Frostbite",
    category: "Vocabulary",
    description: "Being frozen versus an injury caused by extreme cold.",
    href: "/vocabulary/frozen-vs-frostbite",
    keywords: "frostbitten congelado frio lesão",
  },
  {
    title: "Future Forms",
    category: "Grammar",
    description: "Will, be going to, and the present continuous.",
    href: "/grammar/future-forms",
    keywords: "will going to future futuro",
  },
  {
    title: "Maybe vs. May be",
    category: "Grammar",
    description: "An adverb versus the modal may followed by be.",
    href: "/grammar/modal-verbs",
    keywords: "perhaps might possibility possibilidade",
  },
  {
    title: "Who and What Questions",
    category: "Grammar",
    description: "Subject and object questions with who and what.",
    href: "/grammar/who-and-what-questions",
    keywords: "who what questions do does did auxiliar sujeito objeto perguntas",
  },
  {
    title: "Prepositions",
    category: "Grammar",
    description: "In, on, at, since, for and common mistakes.",
    href: "/grammar/prepositions",
    keywords: "preposition preposições preposicao tempo lugar duração",
  },
  {
    title: "Collocations",
    category: "Grammar",
    description: "Common word combinations like make a decision and heavy rain.",
    href: "/grammar/collocations",
    keywords: "collocation colocações colocacoes combinações make do take have",
  },
  {
    title: "Punctuation",
    category: "Grammar",
    description: "How commas change the meaning of a sentence.",
    href: "/grammar/punctuation",
    keywords: "punctuation pontuação pontuacao comma vírgula virgula",
  },
  {
    title: "Passive Voice",
    category: "Grammar",
    description: "Be + past participle.",
    href: "/grammar/passive-voice",
    keywords: "passive voice voz passiva past participle",
  },
];

const businessExpressionItems: readonly SearchItem[] = businessOneLessons.map(
  ({ lesson, title, terms }) => ({
    title: `Lesson ${lesson} · ${title}`,
    category: "Language · Expressions · Business 1",
    description: terms.join(" · "),
    fullText: terms.join(" "),
    href: `/expressions/business/lesson-${lesson}`,
  }),
);

const navigationItems: SearchItem[] = links.flatMap((item) =>
  "group" in item
    ? item.children.flatMap((child) =>
        ("subgroup" in child ? child.children : [child])
          .map(({ label, href }) => ({
            title: label,
            category: "subgroup" in child ? `${item.group} · ${child.subgroup}` : item.group,
            description: "",
            href,
          })),
      )
    : [],
).filter(({ href }) => !pageItems.some((page) => page.href === href));

const musicItems: SearchItem[] = bands.flatMap((band) => {
  const bandPath = `/songs/${band.slug}`;
  const albums = new Map(band.songs.map(({ album, year }) => [albumId(album, year), { album, year }]));

  return [
    { title: band.name, category: "Songs · Artist", description: band.description ?? "", href: bandPath },
    ...Array.from(albums, ([id, { album, year }]) => ({
      title: album,
      category: "Songs · Album",
      description: `${band.name} · ${year}`,
      href: `${bandPath}/albums/${id}`,
    })),
    ...band.songs.map((song) => ({
      title: song.title,
      category: "Songs · Track",
      description: `${band.name} · ${song.album}`,
      href: `${bandPath}/${song.slug}`,
    })),
  ];
});

const audiobookItems: SearchItem[] = listeningLevels.flatMap((level) =>
  level.titles.filter(({ slug }) => Object.hasOwn(audiobooks, slug)).map(({ slug, title, description }) => ({
    title,
    category: `Audiobooks · ${level.title}`,
    description,
    href: `/audiobooks/${slug}`,
  })),
);

const gameItems: SearchItem[] = [
  ...Object.values(gamesSierraCardData),
  ...Object.values(gamesLucasArtsCardData),
].map(({ label, description, href }) => ({ title: label, category: "Games", description, href }));

const businessTwoItems: SearchItem[] = businessTwoGroups.flatMap(({ entries }) =>
  entries.map(({ slug, title, content }) => ({
    title,
    category: "Language · Expressions · Business 2",
    description: content?.context ?? "",
    keywords: cleanText(extractText(content)),
    href: `${businessTwoPath}/${slug}`,
  })),
);

const authenticContentItems: readonly SearchItem[] =
  authenticContentTedEdLessons.map((lesson) => ({
    title: lesson.label,
    category: "Authentic Content · TED-Ed",
    description: lesson.description,
    href: lesson.href,
    keywords: [
      lesson.objective,
      lesson.usefulLanguage,
      lesson.vocabulary,
      lesson.skills,
      lesson.finalTask,
      lesson.date,
    ].join(" "),
  }));

const courseItems: readonly SearchItem[] = Object.values(levels).flatMap(
  (level) =>
    level.units.flatMap((unit) => [
      {
        title: `${level.code} · Unit ${unit.number}: ${unit.title}`,
        category: "Course unit",
        description: unit.description,
        href: `/course/${level.slug}`,
        keywords: `${level.name} ${level.subtitle}`,
      },
      ...unit.lessons.slice(0, 2).map((lesson, index) => ({
        title: lesson.title,
        category: `${level.code} · Unit ${unit.number} · Lesson ${index + 1}`,
        description: lesson.description,
        href: `/course/${level.slug}/unit/${unit.number}/lesson/${index + 1}`,
        keywords: `${unit.title} ${unit.description}`,
      })),
    ]),
);

const courseStepItems: readonly SearchItem[] = Object.entries(lessonRegistry)
  .filter(([key]) => /^(a1|a2|a2-b1|b1|b2|c1|travel)\//.test(key))
  .flatMap(([key, lesson]) => {
    const [level, unit, lessonNumber] = key.split("/");
    return lesson.steps.map((step) => {
      const fullText = cleanText([
        lesson.unit.title,
        lesson.lesson.title,
        step.label,
        ...extractText(step),
      ]);

      return {
        title: lesson.lesson.title,
        category: `${level.toUpperCase()} · Unit ${unit} · ${step.label}`,
        description: fullText,
        fullText,
        href: `${level === "travel" ? "/travel" : `/course/${level}`}/unit/${unit}/lesson/${lessonNumber}/${step.slug}`,
      };
    });
  });

const authenticStepSlugs: Record<string, string> = {
  beforeWatching: "before-watching",
  vocabulary: "vocabulary",
  gist: "gist",
  details: "details",
  script: "details",
  practice: "practice",
  followUpDiscussion: "follow-up-discussion",
};

const authenticStepItems: readonly SearchItem[] = Object.entries(
  authenticContentsTedEdRoutes,
).flatMap(([slug, lesson]) => {
  const card = authenticContentTedEdLessons.find(
    (item) => item.href === `/authentic-content/ted-ed/${slug}`,
  );
  const title = card?.label ?? slug;

  return Object.entries(lesson.sections).map(([section, content]) => {
    const stepSlug = authenticStepSlugs[section] ?? section;
    const fullText = cleanText([title, section, ...extractText(content)]);

    return {
      title,
      category: `Authentic Content · ${stepSlug.replaceAll("-", " ")}`,
      description: fullText,
      fullText,
      href: `/authentic-content/ted-ed/${slug}/${stepSlug}`,
    };
  });
});

const searchItems = [
  ...pageItems,
  ...navigationItems,
  ...musicItems,
  ...audiobookItems,
  ...gameItems,
  ...businessExpressionItems,
  ...businessTwoItems,
  ...authenticContentItems,
  ...authenticStepItems,
  ...courseItems,
  ...courseStepItems,
];
const normalize = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

const normalizeDictionaryTerm = (value: string) =>
  normalize(value)
    .replace(/[’‘]/g, "'")
    .replace(/[^a-z0-9']+/g, " ")
    .trim();

const wordForms = (word: string) => {
  const forms = new Set([word]);
  if (!/^[a-z]{3,}$/.test(word)) return forms;
  const consonantY = /[^aeiou]y$/.test(word);
  forms.add(consonantY ? `${word.slice(0, -1)}ies` : /(?:s|x|z|ch|sh)$/.test(word) ? `${word}es` : `${word}s`);
  forms.add(consonantY ? `${word.slice(0, -1)}ied` : word.endsWith("e") ? `${word}d` : `${word}ed`);
  const ingBase = /[^eoy]e$/.test(word) ? word.slice(0, -1) : word;
  forms.add(`${ingBase}ing`);
  if (/[aeiou][^aeiouwxy]$/.test(word) && /[^aeiou][aeiou][^aeiouwxy]$/.test(word)) {
    forms.add(`${word}${word.at(-1)}ing`);
    forms.add(`${word}${word.at(-1)}ed`);
  }
  return forms;
};

const searchWords = (text: string) =>
  [...text.matchAll(/[\p{L}\p{M}\p{N}]+(?:['’‘][\p{L}\p{M}\p{N}]+)*/gu)]
    .map((match) => ({
      index: match.index,
      text: match[0],
      word: normalizeDictionaryTerm(match[0]).replace(/'s$/, ""),
    }));

const createSnippet = (text: string, forms: ReadonlySet<string>) => {
  const matchAt = searchWords(text).find(({ word }) => forms.has(word))?.index ?? 0;
  const start = Math.max(0, matchAt - 70);
  const end = Math.min(text.length, matchAt + 150);
  const prefix = start > 0 ? "…" : "";
  const suffix = end < text.length ? "…" : "";
  return `${prefix}${text.slice(start, end).trim()}${suffix}`;
};

function HighlightedSnippet({ text, query }: { text: string; query: string }) {
  const forms = new Set(searchWords(query).flatMap(({ word }) => [...wordForms(word)]));
  const match = searchWords(text).find(({ word }) => forms.has(word));

  if (!match) return text;

  return (
    <>
      {text.slice(0, match.index)}
      <mark className="rounded bg-yellow-200 px-0.5 text-inherit dark:bg-yellow-700">
        {match.text}
      </mark>
      {text.slice(match.index + match.text.length)}
    </>
  );
}

export function GlobalSearch({ closeNavBar }: { closeNavBar: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [shortcutLabel, setShortcutLabel] = useState<string | null>(null);
  const [dictionaryEntries, setDictionaryEntries] = useState<DictionaryDefinition[]>([]);
  const [isDictionaryLoading, setIsDictionaryLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const searchedWord = normalizeDictionaryTerm(query);
    const firstLetter = searchedWord[0];

    if (!searchedWord || !firstLetter) {
      setDictionaryEntries([]);
      setIsDictionaryLoading(false);
      return;
    }

    let cancelled = false;
    setIsDictionaryLoading(true);

    const initialLetter = /[a-z]/.test(firstLetter) ? firstLetter : "a";
    loadDictionaryLetter(initialLetter)
      .then(async (data) => {
        if (cancelled) return;

        const definitions = flattenDictionaryDefinitions(data);
        if (searchedWord.length >= 3 || initialLetter !== firstLetter) {
          const otherLetters = await Promise.allSettled(
            [..."abcdefghijklmnopqrstuvwxyz"]
              .filter((letter) => letter !== initialLetter)
              .map(loadDictionaryLetter),
          );
          if (cancelled) return;
          for (const result of otherLetters) {
            if (result.status === "fulfilled") {
              definitions.push(...flattenDictionaryDefinitions(result.value));
            }
          }
        }
        if (initialLetter !== firstLetter) {
          definitions.push(...nonAlphabeticDictionaryDefinitions());
        }

        const terms = searchWords(query).map(({ word }) => word);
        const forms = terms.map(wordForms);

        const matches = definitions.flatMap((entry) => {
          const word = normalizeDictionaryTerm(entry.word);
          const paddedWord = ` ${word} `;
          if (word === searchedWord) return [{ entry, rank: 0 }];
          if (paddedWord.includes(` ${searchedWord} `)) return [{ entry, rank: 1 }];
          const words = searchWords(entry.word);
          if (forms.length > 0 && words.some((_, index) =>
            forms.every((termForms, offset) => termForms.has(words[index + offset]?.word ?? "")),
          )) {
            return [{ entry, rank: 2 }];
          }
          return [];
        });
        matches.sort((a, b) =>
          a.rank - b.rank || a.entry.word.localeCompare(b.entry.word, "en"),
        );
        const unique = new Map<string, DictionaryDefinition>();
        for (const { entry } of matches) {
          const key = normalize(entry.word);
          if (!unique.has(key)) unique.set(key, entry);
        }
        setDictionaryEntries([...unique.values()].slice(0, 6));
      })
      .catch(() => {
        if (!cancelled) setDictionaryEntries([]);
      })
      .finally(() => {
        if (!cancelled) setIsDictionaryLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [query]);

  const results = useMemo<SearchResult[]>(() => {
    const terms = searchWords(query).map(({ word }) => word);
    if (!terms.length) return [];
    const phrase = terms.join(" ");
    const forms = terms.map(wordForms);
    const highlightForms = new Set(forms.flatMap((termForms) => [...termForms]));
    const titleRank = ({ title }: SearchItem) => {
      const normalizedTitle = searchWords(title).map(({ word }) => word).join(" ");
      if (normalizedTitle === phrase) return 0;
      if (` ${normalizedTitle} `.includes(` ${phrase} `)) return 1;
      return 2;
    };
    return searchItems
      .filter((item) => {
        const words = new Set(searchWords(
          `${item.title} ${item.category} ${item.fullText ?? item.description} ${item.keywords ?? ""}`,
        ).map(({ word }) => word));
        return forms.every((termForms) => [...termForms].some((form) => words.has(form)));
      })
      .sort((first, second) => titleRank(first) - titleRank(second))
      .slice(0, 12)
      .map((item) => ({
        ...item,
        snippet: createSnippet(
          item.fullText ?? `${item.description} ${item.keywords ?? ""}`,
          highlightForms,
        ),
      }));
  }, [query]);

  const close = () => {
    setIsOpen(false);
    setQuery("");
    setActiveIndex(0);
    setDictionaryEntries([]);
  };

  const selectResult = (item: SearchItem) => {
    navigate(item.href);
    close();
    closeNavBar();
  };

  useEffect(() => {
    const browserNavigator = navigator as Navigator & {
      userAgentData?: { mobile?: boolean; platform?: string };
    };
    const isTouchMac =
      /mac/i.test(browserNavigator.platform) &&
      browserNavigator.maxTouchPoints > 1;
    const isMobile =
      browserNavigator.userAgentData?.mobile === true ||
      /Android|iPhone|iPad|iPod|Mobile/i.test(browserNavigator.userAgent) ||
      isTouchMac;

    if (isMobile) {
      setShortcutLabel(null);
      return;
    }

    const platform =
      browserNavigator.userAgentData?.platform ?? browserNavigator.platform;
    setShortcutLabel(/mac/i.test(platform) ? "⌘ K" : "Ctrl + K");
  }, []);

  useEffect(() => {
    const handleShortcut = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setIsOpen((current) => !current);
      }
    };
    window.addEventListener("keydown", handleShortcut);
    return () => window.removeEventListener("keydown", handleShortcut);
  }, []);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  useEffect(() => setActiveIndex(0), [query]);

  return (
    <>
      <div className="mb-2 flex items-center gap-2">
        <Button
          ariaLabel="Search"
          icon={<Search />}
          onClick={() => setIsOpen(true)}
          className="size-10! p-0.75!"
        />
        <span className="font-bold uppercase">Search</span>
        {shortcutLabel && (
          <kbd className="ml-auto rounded bg-(--background) px-1.5 py-0.5 text-xs">
            {shortcutLabel}
          </kbd>
        )}
      </div>

      {isOpen &&
        typeof document !== "undefined" &&
        createPortal(
          <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/45 p-4 backdrop-blur-[2px]">
            <section
              role="dialog"
              aria-modal="true"
              aria-label="Global search"
              className="flex h-[min(70vh,600px)] w-full max-w-2xl flex-col overflow-hidden rounded-2xl bg-(--surface) shadow-2xl ring-1 ring-slate-300"
              onKeyDown={(event) => {
                if (event.key === "Escape") {
                  if (query) {
                    setQuery("");
                    inputRef.current?.focus();
                  } else {
                    close();
                  }
                }
                if (event.key === "ArrowDown") {
                  event.preventDefault();
                  setActiveIndex((index) =>
                    Math.min(index + 1, results.length - 1),
                  );
                }
                if (event.key === "ArrowUp") {
                  event.preventDefault();
                  setActiveIndex((index) => Math.max(index - 1, 0));
                }
                if (event.key === "Enter" && results[activeIndex])
                  selectResult(results[activeIndex]);
              }}
            >
              <div className="flex items-center gap-3 border-b border-slate-200 p-3 dark:border-slate-700">
                <Search className="size-5 shrink-0 text-slate-400" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search the site…"
                  aria-label="Search all content"
                  className="min-w-0 flex-1 bg-transparent py-2 text-lg outline-none placeholder:text-slate-400"
                />
                {query && (
                  <Button
                    ariaLabel="Clear search"
                    icon={<CircleX />}
                    onClick={() => {
                      setQuery("");
                      inputRef.current?.focus();
                    }}
                    className="size-10! p-0.75!"
                  />
                )}
                <Button
                  ariaLabel="Close search"
                  icon={<X />}
                  onClick={close}
                  className="size-10! p-0.75!"
                />
              </div>
              <div className="min-h-0 flex-1 overflow-y-auto p-2">
                {!query.trim() && (
                  <p className="p-6 text-center text-slate-500">
                    Type any word to search across the site.
                  </p>
                )}
                {query.trim() && isDictionaryLoading && (
                  <p className="px-4 py-2 text-sm text-slate-500">
                    Checking Dictionary…
                  </p>
                )}
                {dictionaryEntries.length > 0 && (
                  <section className="mb-3">
                    <h2 className="px-2 pb-2 text-xs font-black uppercase tracking-wider text-blue-600 dark:text-blue-400">
                      Dictionary
                    </h2>
                    <div className="grid gap-2">
                      {dictionaryEntries.map((entry) => (
                        <DictionaryWordCard key={entry.word} entry={entry} />
                      ))}
                    </div>
                  </section>
                )}
                {query.trim() &&
                  !isDictionaryLoading &&
                  !dictionaryEntries.length &&
                  !results.length && (
                    <p className="p-6 text-center text-slate-500">
                      No results found.
                    </p>
                  )}
                {!!results.length && (
                  <h2 className="px-2 pb-1 pt-2 text-xs font-black uppercase tracking-wider text-slate-500">
                    Site results
                  </h2>
                )}
                <div className="grid gap-2">
                {results.map((item, index) => (
                  <Button
                    key={`${item.href}-${item.category}-${item.title}-${index}`}
                    ariaLabel={`Open ${item.title}`}
                    variant="list"
                    pressed={index === activeIndex}
                    onClick={() => selectResult(item)}
                    className="bg-(--background) p-3!"
                  >
                    <span
                      onMouseEnter={() => setActiveIndex(index)}
                      className="block w-full"
                    >
                      <span className="mb-1 block text-xs font-black uppercase tracking-wide text-blue-600 dark:text-blue-400">
                        {item.category}
                      </span>
                      <span className="block font-black text-(--text-color)">
                        {item.title}
                      </span>
                      <span className="mt-1 block text-sm font-normal whitespace-normal text-slate-500">
                        <HighlightedSnippet text={item.snippet} query={query} />
                      </span>
                    </span>
                  </Button>
                ))}
                </div>
              </div>
            </section>
          </div>,
          document.body,
        )}
    </>
  );
}
