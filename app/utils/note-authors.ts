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

const studentHues = [135, 34, 280, 330, 170, 6, 53, 92];

export function getNoteAuthorColors(authors: readonly NoteAuthor[]) {
  const studentIds = authors
    .filter((author) => author.role === "student")
    .map((author) => author.id)
    .sort();

  return new Map(authors.map((author) => {
    if (author.role === "teacher") {
      return [getNoteAuthorKey(author), {
        background: "#eff6ff", border: "#3b82f6", dot: "#3b82f6",
      }];
    }

    const index = studentIds.indexOf(author.id);
    // Keep the first student green and distribute larger groups outside the blue range.
    const hue = studentHues[index] ?? (260 + (index * 137.508) % 280) % 360;
    return [getNoteAuthorKey(author), {
      background: `hsl(${hue} 85% 96%)`,
      border: `hsl(${hue} 65% 55%)`,
      dot: `hsl(${hue} 65% 48%)`,
    }];
  }));
}
