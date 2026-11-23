import { avatarColors } from "@/utils/avatar-theme";

export type NoteAuthor = {
  id: string;
  name: string;
  role: "teacher" | "student";
};

const decodeAttribute = (value: string) => {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
};

export function getNoteAuthors(
  value: string,
  currentAuthor?: NoteAuthor,
  participants: NoteAuthor[] = [],
) {
  const authors = new Map<string, NoteAuthor>();
  for (const author of [...participants, ...(currentAuthor ? [currentAuthor] : [])]) {
    authors.set(getNoteAuthorKey(author), author);
  }

  for (const match of value.matchAll(
    /<div data-note-block="true"[^>]*data-author-role="(teacher|student)"[^>]*data-author-id="([^"]*)"[^>]*data-author-name="([^"]*)"/g,
  )) {
    const author = {
      role: match[1] as NoteAuthor["role"],
      id: decodeAttribute(match[2]),
      name: decodeAttribute(match[3]),
    };
    const key = getNoteAuthorKey(author);
    if (!authors.has(key)) authors.set(key, author);
  }

  return [...authors.values()].sort((a, b) => {
    if (a.role !== b.role) return a.role === "teacher" ? -1 : 1;
    return a.name.localeCompare(b.name);
  });
}

export const getNoteAuthorKey = (author: NoteAuthor) => `${author.role}:${author.id}`;

export function getNoteAuthorColors(authors: readonly NoteAuthor[]) {
  return new Map(authors.map((author) => [
    getNoteAuthorKey(author),
    avatarColors[author.role],
  ]));
}
