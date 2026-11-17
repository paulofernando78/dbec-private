import type { ElementType } from "react";
import {
  CircleUserRound,
  BookOpenCheck,
  Gamepad2,
  Plane,
  BookMarked,
  MessageSquareQuote,
  Music2,
  Headphones,
  Landmark,
} from "lucide-react";

export type NavLinkItem = {
  href: string;
  label: string;
  icon?: ElementType;
  locked?: boolean;
};

export type NavGroup = {
  group: string;
  children: Array<NavLinkItem | NavSubgroup>;
};

export type NavSubgroup = {
  subgroup: string;
  children: NavLinkItem[];
};

export type NavItem = NavLinkItem | NavGroup;

export const links: NavItem[] = [
  // DASHBOARD
  {
    href: "/dashboard",
    label: "dashboard",
    icon: CircleUserRound,
  },
  // LEARN
  {
    group: "learn",
    children: [
      // COURSES
      {
        href: "/course",
        label: "course (A1–C1)",
        icon: BookOpenCheck,
      },
      // SPECIFIC PURPOSES
      {
        subgroup: "specific purposes",
        children: [
          {
            href: "/travel",
            label: "travel english (A2+)",
            icon: Plane,
          },
        ],
      },
      // AUTHENTIC CONTENT
      {
        subgroup: "authentic content",
        children: [
          {
            href: "/authentic-content",
            label: "TED-Ed (B2+)",
            icon: BookOpenCheck,
          },
        ],
      },
    ],
  },
  // SKILLS
  {
    group: "Skills",
    children: [
      // LISTENING
      {
        subgroup: "listening",
        children: [
          // AUDIOBOOKS
          {
            href: "/audiobooks",
            label: "audiobooks",
            icon: Headphones
          },
          // KPPC Radio (CA - PA)
          {
            href: "https://www.kpcc.org/listen",
            label: "kpcc radio (pasadena – ca)",
            icon: Headphones
          },
          // BBC WORLD SERVICE
          {
            href: "https://www.bbc.co.uk/sounds/play/live:bbc_world_service",
            label: "bbc world service",
            icon: Headphones
          },
        ],
      },
    ],
  },
  // LANGUAGE
  {
    group: "language",
    children: [
      // VOCABULARY
      {
        subgroup: "vocabulary",
        children: [
          { href: "/vocabulary", label: "qual usar?", icon: BookMarked },
          {
            href: "/vocabulary/como-se-diz",
            label: "como se diz?",
            icon: BookMarked,
          },
          {
            href: "/vocabulary/reference/false-cognates",
            label: "false cognates",
            icon: BookMarked,
          },
          {
            href: "/vocabulary/reference/homophones-homographs-homonyms",
            label: "homophones, homographs & homonyms",
            icon: BookMarked,
          },
        ],
      },
      // WORD FORMATION
      {
        subgroup: "word formation",
        children: [
          {
            href: "/grammar/prefixes-suffixes",
            label: "prefixes & suffixes",
            icon: BookMarked,
          },
          {
            href: "/grammar/latin-plurals",
            label: "latin plurals",
            icon: BookMarked,
          },
        ],
      },
      // VERN TENSES
      {
        subgroup: "verb tenses",
        children: [
          {
            href: "/grammar/future-forms",
            label: "will & going to",
            icon: BookMarked,
          },
          {
            href: "/grammar/present-continuous",
            label: "present progressive",
            icon: BookMarked,
          },
          {
            href: "/grammar/present-perfect",
            label: "present perfect",
            icon: BookMarked,
          },
          {
            href: "/grammar/present-perfect-progressive",
            label: "present perfect progressive",
            icon: BookMarked,
          },
          {
            href: "/grammar/past-perfect",
            label: "past perfect",
            icon: BookMarked,
          },
          {
            href: "/grammar/past-perfect-progressive",
            label: "past perfect progressive",
            icon: BookMarked,
          },
        ],
      },
      // GRAMMAR STRUCTURES
      {
        subgroup: "grammar structures",
        children: [
          {
            href: "/grammar/who-and-what-questions",
            label: "who and what questions",
            icon: BookMarked,
          },
          {
            href: "/grammar/conditionals",
            label: "conditionals",
            icon: BookMarked,
          },
          {
            href: "/grammar/modal-verbs",
            label: "modal verbs",
            icon: BookMarked,
          },
          {
            href: "/grammar/prepositions",
            label: "prepositions",
            icon: BookMarked,
          },
          { href: "/grammar/to-vs-for", label: "to vs. for", icon: BookMarked },
          {
            href: "/grammar/collocations",
            label: "collocations",
            icon: BookMarked,
          },
          {
            href: "/grammar/punctuation",
            label: "punctuation",
            icon: BookMarked,
          },
          {
            href: "/grammar/passive-voice",
            label: "passive voice",
            icon: BookMarked,
          },
        ],
      },
      // PRONUCIATION
      {
        subgroup: "pronunciation",
        children: [
          {
            href: "/pronunciation/phonetics",
            label: "phonetics",
            icon: BookMarked,
          },
          {
            href: "/pronunciation/linking-sounds",
            label: "linking sounds",
            icon: BookMarked,
          },
          {
            href: "/pronunciation/accents",
            label: "accents",
            icon: BookMarked,
          },
          {
            href: "/pronunciation/sites",
            label: "sites",
            icon: BookMarked,
          },
        ],
      },
      // EXPRESSIONS
      {
        subgroup: "expressions",
        children: [
          {
            href: "/expressions/business",
            label: "business 1",
            icon: MessageSquareQuote,
          },
          {
            href: "/expressions/business-2",
            label: "business 2",
            icon: MessageSquareQuote,
          },
          {
            href: "/expressions/everyday-1",
            label: "everyday 1",
            icon: MessageSquareQuote,
          },
          {
            href: "/expressions/everyday-2",
            label: "everyday 2",
            icon: MessageSquareQuote,
          },
          {
            href: "/expressions/everyday-3",
            label: "everyday 3",
            icon: MessageSquareQuote,
          },
        ],
      },
    ],
  },
  // CONTET
  {
    group: "content",
    children: [
      // SONGS
      { href: "/songs",
        label: "songs",
        icon: Music2
      },
      // CULTURE
      {
        subgroup: "culture",
        children: [
          { href: "/culture/history", label: "history", icon: Landmark },
        ],
      },
      // GAMES
      {
        subgroup: "games",
        children: [
          { href: "/games/uno", label: "UNO", icon: Gamepad2 },
          { href: "/games", label: "old PC games", icon: Gamepad2 },
        ],
      },
    ],
  },
];
