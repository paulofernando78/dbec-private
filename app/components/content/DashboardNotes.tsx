import { RichTextArea } from "@/components/ui/RichTextArea";

type DashboardNotesProps = {
  title: string;
  value: string;
  readOnly?: boolean;
  onChange: (value: string) => void;
  onSave: () => void;
  identity?: string;
  activeWriter?: string | null;
};

export const DashboardNotes = ({
  title,
  value,
  readOnly = false,
  onChange,
  onSave,
  identity,
  activeWriter,
}: DashboardNotesProps) => {
  return (
    <div className="flex min-h-[36rem] w-full min-w-0 flex-col rounded-xl bg-(--background) p-4">
      <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
        <h3 className="text-lg font-bold">{title}</h3>
        {activeWriter ? (
          <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-800" title={`${activeWriter} está editando esta nota`}>
            {activeWriter} está escrevendo
          </span>
        ) : identity ? (
          <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-600" title={`Nota compartilhada com ${identity}`}>
            {identity}
          </span>
        ) : null}
      </div>
      <RichTextArea
        value={value}
        readOnly={readOnly}
        onChange={onChange}
        onBlur={onSave}
        className="min-h-0 max-h-none flex-1"
      />
    </div>
  );
};
