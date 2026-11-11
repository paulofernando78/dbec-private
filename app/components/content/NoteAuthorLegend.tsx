import { getNoteAuthorColors, getNoteAuthors, type NoteAuthor } from "@/utils/note-authors";

export function NoteAuthorLegend({
  value,
  currentAuthor,
}: {
  value: string;
  currentAuthor?: NoteAuthor;
}) {
  const authors = getNoteAuthors(value, currentAuthor);
  if (!authors.length) return null;

  return (
    <div className="mb-2 flex flex-col items-end gap-1" aria-label="Note contributors">
      {authors.map((author) => {
        const colors = getNoteAuthorColors(author);
        return (
          <span
            key={`${author.role}:${author.id}`}
            className="flex items-center gap-1.5 text-xs text-slate-500"
            title={`${author.name} · ${author.role === "teacher" ? "Professor" : "Aluno"}`}
          >
            {author.name}
            <span
              className="size-2.5 rounded-full"
              style={{ backgroundColor: colors.dot }}
              aria-hidden="true"
            />
          </span>
        );
      })}
    </div>
  );
}
