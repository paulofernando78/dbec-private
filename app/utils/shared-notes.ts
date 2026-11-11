export function combineNotes(notes: {
  teacher?: string;
  student?: string;
}) {
  const teacher = notes.teacher?.trim() ?? "";
  const student = notes.student?.trim() ?? "";
  if (!teacher) return student;
  if (!student) return teacher;

  const blocksFrom = (value: string) => {
    const blocks = Array.from(
      value.matchAll(/<div data-note-block="true">([\s\S]*?)<\/div>/g),
      (match) => match[1] === "<br>" ? "" : match[1],
    );
    return blocks.length ? blocks : value.split(/<br\s*\/?\s*>|\n/gi);
  };
  const block = (html: string) =>
    `<div data-note-block="true">${html || "<br>"}</div>`;

  return [
    block("<strong>Teacher’s Notes</strong>"),
    ...blocksFrom(teacher).map(block),
    block(""),
    block("<strong>Student’s Notes</strong>"),
    ...blocksFrom(student).map(block),
  ].join("");
}
