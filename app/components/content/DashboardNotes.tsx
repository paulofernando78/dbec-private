import { RichTextArea } from "@/components/ui/RichTextArea";
import { NoteAuthorLegend } from "@/components/content/NoteAuthorLegend";
import type { NoteAuthor } from "@/utils/note-authors";

type DashboardNotesProps = {
  value: string;
  readOnly?: boolean;
  onChange: (value: string) => void;
  onSave: () => void;
  author?: NoteAuthor;
};

export const DashboardNotes = ({
  value,
  readOnly = false,
  onChange,
  onSave,
  author,
}: DashboardNotesProps) => {
  return (
    <div className="flex h-[min(44rem,calc(100dvh-12rem))] min-h-[32rem] w-full min-w-0 flex-col rounded-xl bg-(--background) p-4">
      <NoteAuthorLegend value={value} currentAuthor={author} />
      <RichTextArea
        value={value}
        readOnly={readOnly}
        author={author}
        onChange={onChange}
        onBlur={onSave}
        className="min-h-0 max-h-none flex-1"
      />
    </div>
  );
};
