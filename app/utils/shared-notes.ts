type NoteAuthor = { id: string; name: string; role: "teacher" | "student" };

const escapeHtmlAttribute = (value: string) => encodeURIComponent(value);

const block = (html: string, author?: NoteAuthor) => {
  const authorAttributes = author
    ? ` data-author-role="${author.role}" data-author-id="${escapeHtmlAttribute(author.id)}" data-author-name="${escapeHtmlAttribute(author.name)}"`
    : "";
  return `<div data-note-block="true"${authorAttributes}>${html || "<br>"}</div>`;
};

const decorateBlocks = (
  value: string,
  fallbackAuthor: NoteAuthor,
): string[] => {
  const saved = Array.from(
    value.matchAll(/<div data-note-block="true"([^>]*)>([\s\S]*?)<\/div>/g),
    (match) => ({ attributes: match[1], html: match[2] }),
  );
  const blocks = saved.length
    ? saved
    : value.split(/<br\s*\/?\s*>|\n/gi).map((html) => ({ attributes: "", html }));

  let currentAuthor = fallbackAuthor;
  return blocks.map(({ attributes, html }) => {
    const authorRole = attributes.match(/data-author-role="(teacher|student)"/)?.[1];
    if (authorRole) {
      return `<div data-note-block="true"${attributes}>${html || "<br>"}</div>`;
    }

    const text = html.replace(/<[^>]*>/g, " ").replace(/&rsquo;|&#8217;/g, "’").trim().toLowerCase();
    if (text.includes("teacher’s notes") || text.includes("teacher's notes")) {
      currentAuthor = { id: "teacher", name: "Professor", role: "teacher" };
    } else if (text.includes("student’s notes") || text.includes("student's notes")) {
      currentAuthor = fallbackAuthor.role === "student"
        ? fallbackAuthor
        : { id: "student", name: "Aluno", role: "student" };
    }
    return block(html === "<br>" ? "" : html, currentAuthor);
  });
};

export function combineNotes(
  notes: { teacher?: string; student?: string },
  student: { id?: string; name?: string } = {},
) {
  const teacher = notes.teacher?.trim() ?? "";
  const studentNotes = notes.student?.trim() ?? "";
  const studentAuthor: NoteAuthor = {
    id: student.id ?? "student",
    name: student.name ?? "Aluno",
    role: "student",
  };
  const teacherAuthor: NoteAuthor = {
    id: "teacher",
    name: "Professor",
    role: "teacher",
  };
  const teacherBlocks = teacher ? decorateBlocks(teacher, teacherAuthor) : [];
  const studentBlocks = studentNotes
    ? decorateBlocks(studentNotes, studentAuthor)
    : [];

  if (!teacherBlocks.length) return studentBlocks.join("");
  if (!studentBlocks.length) return teacherBlocks.join("");

  return [
    block("<strong>Teacher’s Notes</strong>", teacherAuthor),
    ...teacherBlocks,
    block(""),
    block("<strong>Student’s Notes</strong>", studentAuthor),
    ...studentBlocks,
  ].join("");
}
