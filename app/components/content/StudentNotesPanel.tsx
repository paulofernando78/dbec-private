import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { LoaderCircle, X } from "lucide-react";
import { useLocation } from "react-router";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { DateTimeCard } from "@/components/content/DateTimeCard";
import { AiTutor } from "@/components/content/AiTutor";
import { NoteAuthorLegend } from "@/components/content/NoteAuthorLegend";
import { RichTextArea } from "@/components/ui/RichTextArea";
import { useNotesRealtime } from "@/hooks/useNotesRealtime";
import { combineNotes } from "@/utils/shared-notes";

type Session = {
  role: "teacher" | "student";
  studentId?: string;
  displayName?: string;
};

type Notes = {
  teacher: string;
  student: string;
};

const emptyNotes: Notes = { teacher: "", student: "" };

type StudentNotesPanelProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function StudentNotesPanel({
  isOpen,
  onClose,
}: StudentNotesPanelProps) {
  const location = useLocation();
  const [session, setSession] = useState<Session | null>(null);
  const [studentId, setStudentId] = useState("");
  const [studentName, setStudentName] = useState("");
  const [notes, setNotes] = useState<Notes>(emptyNotes);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [panelHost, setPanelHost] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setPanelHost(document.getElementById("student-notes-panel-host"));
  }, []);

  const { connectionState, sendNote } = useNotesRealtime(
    isOpen ? studentId : undefined,
    session?.role,
    (noteType, content) => {
      setNotes((current) =>
        current[noteType] === content
          ? current
          : { ...current, [noteType]: content },
      );
    },
  );

  useEffect(() => {
    let cancelled = false;

    fetch("/api/session", { headers: { Accept: "application/json" } })
      .then(async (response) => {
        if (!response.ok) return null;
        return (await response.json()) as Session;
      })
      .then((nextSession) => {
        if (cancelled) return;

        setSession(nextSession);
        setStudentId(
          nextSession?.role === "student"
            ? nextSession.studentId ?? ""
            : localStorage.getItem("dbec_selected_student_id") ?? "",
        );
      })
      .catch(() => {
        if (!cancelled) setSession(null);
      });

    return () => {
      cancelled = true;
    };
  }, [location.pathname]);

  const loadNotes = useCallback(async () => {
    if (!studentId) {
      setError("Select a student in the Teacher's Dashboard first.");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const response = await fetch(
        `/api/dashboard?studentId=${encodeURIComponent(studentId)}`,
        { headers: { Accept: "application/json" } },
      );
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error ?? "Não foi possível carregar as notas.");
      }

      setNotes({
        teacher: "",
        student: combineNotes(result.notes ?? {}, {
          id: studentId,
          name: result.student?.name ?? studentName,
        }),
      });
      setStudentName(result.student?.name ?? "");
    } catch (requestError) {
      setError(
        requestError instanceof Error
          ? requestError.message
          : "Não foi possível carregar as notas.",
      );
    } finally {
      setIsLoading(false);
    }
  }, [studentId]);

  useEffect(() => {
    if (isOpen) void loadNotes();
  }, [isOpen, loadNotes]);

  const saveNote = async () => {
    if (!studentId || !session) return;

    const response = await fetch("/api/notes", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        studentId,
        noteType: "student",
        content: notes.student,
        shared: true,
      }),
    });

    if (!response.ok) {
      const result = await response.json().catch(() => null);
      setError(result?.error ?? "Não foi possível salvar a nota.");
    }
  };

  const currentAuthor = session
    ? {
        id: session.role === "teacher" ? "teacher" : studentId,
        name:
          session.displayName ??
          (session.role === "teacher" ? "Professor" : studentName),
        role: session.role,
      }
    : undefined;
  const noteParticipants = currentAuthor && session
    ? [
        currentAuthor,
        session.role === "teacher"
          ? { id: studentId, name: studentName || "Aluno", role: "student" as const }
          : { id: "teacher", name: "Professor", role: "teacher" as const },
      ]
    : [];

  if (!session || !panelHost) return null;

  return createPortal(
        <div className={`${isOpen ? "flex" : "hidden"} pointer-events-auto h-full max-h-full w-full translate-y-[0.05rem] touch-pan-y flex-col overflow-x-hidden overflow-y-auto overscroll-contain rounded-xl bg-(--surface) p-3 shadow-2xl ring-1 ring-slate-300 [-webkit-overflow-scrolling:touch]`}>
          <div className="mb-3 flex items-center justify-between gap-3">
            <div>
              <h2 className="text-lg font-black">Notes</h2>
              {studentName && (
                <p className="text-sm text-slate-500">{studentName}</p>
              )}
              <p className="text-xs text-slate-400">
                {connectionState === "connected"
                  ? "Live"
                  : connectionState === "polling"
                    ? "Live sync"
                    : "Reconnecting…"}
              </p>
            </div>
            {isLoading && <LoaderCircle className="animate-spin text-slate-400" />}
            <Button
              ariaLabel="Close notes"
              onClick={onClose}
              icon={<X />}
              className="size-10! p-0.75!"
            />
          </div>

          <DateTimeCard className="mb-3 bg-(--background)" compact />

          {error && <p className="mb-3 text-sm font-semibold text-red-600">{error}</p>}

          {studentId && (
            <>
              <div className="grid min-h-0 flex-1 grid-cols-2 items-stretch gap-3 max-[930px]:flex-none max-[930px]:grid-cols-1">
                <Card className="flex min-h-0 flex-col overflow-hidden bg-(--background) max-[930px]:min-h-[24rem]">
                  <NoteAuthorLegend value={notes.student} currentAuthor={currentAuthor} participants={noteParticipants} />
                  <RichTextArea
                    value={notes.student}
                    author={currentAuthor}
                    onChange={(content) => {
                      setNotes((current) => ({ ...current, student: content }));
                      sendNote("student", content, true);
                    }}
                    onBlur={() => void saveNote()}
                    className="min-h-0 max-h-none flex-1"
                  />
                </Card>
                <AiTutor
                  key={`${session.role}:${studentId}`}
                  className="mt-0 h-full min-h-0 max-[930px]:min-h-[24rem]"
                  fill
                  visible={isOpen}
                />
              </div>
            </>
          )}
        </div>,
        panelHost,
  );
}
