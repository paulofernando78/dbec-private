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

export function getNoteAuthors(value: string, currentAuthor?: NoteAuthor) {
  const authors = new Map<string, NoteAuthor>();
  const currentKey = currentAuthor
    ? `${currentAuthor.role}:${currentAuthor.id}`
    : null;
  if (currentAuthor) {
    authors.set(currentKey!, currentAuthor);
  }

  for (const match of value.matchAll(
    /<div data-note-block="true"[^>]*data-author-role="(teacher|student)"[^>]*data-author-id="([^"]*)"[^>]*data-author-name="([^"]*)"/g,
  )) {
    const author = {
      role: match[1] as NoteAuthor["role"],
      id: decodeAttribute(match[2]),
      name: decodeAttribute(match[3]),
    };
    const key = `${author.role}:${author.id}`;
    if (key !== currentKey) authors.set(key, author);
  }

  return [...authors.values()].sort((a, b) => {
    if (a.role !== b.role) return a.role === "teacher" ? -1 : 1;
    return a.name.localeCompare(b.name);
  });
}

export function getNoteAuthorColors(author: NoteAuthor) {
  if (author.role === "teacher") {
    return { background: "#eff6ff", border: "#3b82f6", dot: "#3b82f6" };
  }

  const hash = Array.from(author.id).reduce(
    (total, character) => (total * 31 + character.charCodeAt(0)) >>> 0,
    0,
  );
  const hue = hash % 360;
  return {
    background: `hsl(${hue} 85% 96%)`,
    border: `hsl(${hue} 65% 55%)`,
    dot: `hsl(${hue} 65% 48%)`,
  };
}
