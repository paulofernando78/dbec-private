import { getNoteAuthorColors, getNoteAuthorKey, getNoteAuthors, type NoteAuthor } from "@/utils/note-authors";

export function NoteAuthorLegend({
  value,
  currentAuthor,
  participants = [],
}: {
  value: string;
  currentAuthor?: NoteAuthor;
  participants?: NoteAuthor[];
}) {
  const authors = getNoteAuthors(value, currentAuthor, participants);
  const colorsByAuthor = getNoteAuthorColors(authors);
  if (!authors.length) return null;

  return (
    <div className="mb-2 flex min-w-0 items-center gap-2 overflow-x-auto whitespace-nowrap" aria-label="Note contributors">
      {authors.map((author, index) => {
        const key = getNoteAuthorKey(author);
        const colors = colorsByAuthor.get(key);
        return (
          <span key={key} className="contents">
            {index > 0 && <span className="text-xs text-slate-400" aria-hidden="true">|</span>}
            <span
              className="flex shrink-0 items-center gap-1.5 text-xs text-slate-500"
              title={`${author.name} · ${author.role === "teacher" ? "Professor" : "Aluno"}`}
            >
              {author.name}
              <span
                className="size-2.5 rounded-full"
                style={{ backgroundColor: colors?.dot }}
                aria-hidden="true"
              />
            </span>
          </span>
        );
      })}
    </div>
  );
}
