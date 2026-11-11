import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { DashboardNotes } from "@/components/content/DashboardNotes";
import { AiTutor } from "@/components/content/AiTutor";
import { Calendar } from "@/components/content/Calendar";
import { PageHeader } from "@/components/content/PageHeader";
import { DashboardProgress } from "@/components/content/DashboardProgress";
import { TableOfContents } from "@/components/content/TableOfContents";
import { Card } from "@/components/ui/Card";
import Emojis from "@/features/Emojis/Emojis";
import { useNotesRealtime } from "@/hooks/useNotesRealtime";
import { combineNotes } from "@/utils/shared-notes";
import {
  getCourseProgressSummary,
  type CourseProgressSummary,
} from "@/utils/course-progress";

export default function Dashboard() {
  const { studentId } = useParams();
  const [data, setData] = useState<any>(null);
  const [notes, setNotes] = useState({ teacher: "", student: "" });
  const [calendar, setCalendar] = useState<Record<string, string>>({});
  const [replacementDates, setReplacementDates] = useState<Record<string, string>>({});
  const [error, setError] = useState("");
  const [progress, setProgress] = useState<CourseProgressSummary | null>(null);

  useEffect(() => {
    setProgress(getCourseProgressSummary());
  }, []);

  const { sendNote } = useNotesRealtime(
    studentId,
    "student",
    (noteType, content) => {
      setNotes((current) =>
        current[noteType] === content
          ? current
          : { ...current, [noteType]: content },
      );
    },
  );

  useEffect(() => {
    if (!studentId) {
      setData(null);
      setError("");
      return;
    }

    setData(null);
    setError("");

    fetch(`/api/dashboard?studentId=${encodeURIComponent(studentId)}`)
      .then(async (response) => {
        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.error ?? "Não foi possível carregar o dashboard.");
        }

        return result;
      })
      .then((result) => {
        setData(result);
        setNotes({
          teacher: "",
          student: combineNotes(result.notes ?? {}, {
            id: studentId,
            name: result.student?.name,
          }),
        });
        setCalendar(
          Object.fromEntries(
            (result.calendar ?? []).map((entry: any) => [
              entry.lessonDate,
              entry.status,
            ]),
          ),
        );
        setReplacementDates(
          Object.fromEntries(
            (result.calendar ?? [])
              .filter((entry: any) => entry.replacementDate)
              .map((entry: any) => [entry.lessonDate, entry.replacementDate]),
          ),
        );
      })
      .catch((requestError: unknown) => {
        setError(
          requestError instanceof Error
            ? requestError.message
            : "Não foi possível carregar o dashboard.",
        );
      });
  }, [studentId]);

  const saveStudentNote = () =>
    fetch("/api/notes", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        studentId,
        noteType: "student",
        content: notes.student,
        shared: true,
      }),
    });

  const now = new Date();
  const currentHour = now.getHours();
  const greeting =
    currentHour < 12
      ? "Good morning"
      : currentHour < 18
        ? "Good afternoon"
        : "Good evening";
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  }).format(now);

  if (!studentId) {
    return (
      <>
        <PageHeader
          eyebrow={formattedDate}
          title="Welcome!"
          variant="dashboard"
        />
        <div className="grid gap-4">
          <Emojis />
        </div>
      </>
    );
  }

  const student = data?.student;
  if (error) return <p className="font-semibold text-red-600">{error}</p>;
  if (!student) return <p>Loading dashboard…</p>;

  const firstName = student.name.split(" ")[0];

  return (
    <>
      <PageHeader
        eyebrow={formattedDate}
        title={`${greeting}, ${firstName}.`}
        date={student.schedule}
        time={student.time}
        variant="dashboard"
      />
      <TableOfContents
        items={[
          { to: "/guide", label: "Guide" },
          { href: "progress", label: "Progress" },
          { href: "calendar", label: "Calendar" },
          { href: "notes", label: "Notes" },
          { href: "ai-tutor", label: "AI Tutor" },
        ]}
      />
      {progress && (
        <div id="progress" className="scroll-mt-4">
          <DashboardProgress progress={progress} />
        </div>
      )}
      <div className="grid gap-4">
        <div id="calendar" className="scroll-mt-4">
          <Calendar
            statuses={calendar}
            replacementDates={replacementDates}
            readOnly
          />
        </div>
        <div id="notes" className="relative scroll-mt-4">
          <span id="teacher-notes" className="absolute top-0" />
          <span id="student-notes" className="absolute top-0" />
          <Card title="Notes">
            <div className="grid min-h-0 w-full grid-cols-2 items-stretch gap-4 max-[800px]:grid-cols-1">
              <DashboardNotes
                value={notes.student}
                author={{ id: studentId, name: student.name, role: "student" }}
                participants={[
                  { id: "teacher", name: "Professor", role: "teacher" },
                  { id: studentId, name: student.name, role: "student" },
                ]}
                onChange={(value) => {
                  setNotes((current) => ({ ...current, student: value }));
                  sendNote("student", value, true);
                }}
                onSave={saveStudentNote}
              />
              <AiTutor className="mt-0 h-[min(44rem,calc(100dvh-12rem))] min-h-[32rem]" fill />
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
