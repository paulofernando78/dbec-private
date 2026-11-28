import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { DashboardNotes } from "@/components/content/DashboardNotes";
import { DashboardSkeleton } from "@/components/content/DashboardSkeleton";
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
  const [replacementDates, setReplacementDates] = useState<
    Record<string, string>
  >({});
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
    undefined,
    (entries) => {
      setCalendar(
        Object.fromEntries(
          entries.map((entry) => [entry.lessonDate, entry.status]),
        ),
      );
      setReplacementDates(
        Object.fromEntries(
          entries.flatMap(({ lessonDate, replacementDate }) =>
            replacementDate ? [[lessonDate, replacementDate]] : [],
          ),
        ),
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
          throw new Error(
            result.error ?? "Não foi possível carregar o dashboard.",
          );
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

  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
  }, []);

  const currentHour = now?.getHours() ?? 12;
  const greeting =
    currentHour < 12
      ? "Good morning"
      : currentHour < 18
        ? "Good afternoon"
        : "Good evening";

  if (!studentId) {
    return (
      <>
        <PageHeader title="Welcome!" variant="dashboard" />
        <div className="grid gap-4">
          <Emojis />
        </div>
      </>
    );
  }

  const student = data?.student;
  if (error) return <p className="font-semibold text-red-600">{error}</p>;
  if (!student) {
    return (
      <>
        <PageHeader
          title={greeting}
          variant="dashboard"
        />
        <div className="grid gap-4">
          <DashboardSkeleton />
        </div>
      </>
    );
  }

  const firstName = student.name.split(" ")[0];

  return (
    <>
      <PageHeader
        title={`${greeting}, ${firstName}.`}
        date={student.schedule}
        time={student.time}
        variant="dashboard"
      />
      <TableOfContents
        items={[
          { to: "/guide", label: "Guide" },
          { href: "calendar", label: "Calendar" },
          { href: "progress", label: "Progress" },
          { href: "notes", label: "Notes / AI Tutor" },
        ]}
      />
      <div className="grid gap-4">
        <div id="calendar" className="scroll-mt-4">
          <Calendar
            studentId={student.studentId ?? studentId}
            schedule={student.schedule}
            statuses={calendar}
            replacementDates={replacementDates}
            readOnly
          />
        </div>
        {progress && (
          <div id="progress" className="scroll-mt-4">
            <DashboardProgress progress={progress} />
          </div>
        )}
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
              <AiTutor
                className="mt-0 h-[min(44rem,calc(100dvh-12rem))] min-h-128"
                fill
              />
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
