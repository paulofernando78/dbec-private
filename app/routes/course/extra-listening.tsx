import { Link, Navigate, useParams } from "react-router";

import { PageHeader } from "@/components/content/PageHeader";
import { AudioPlayer } from "@/components/ui/AudioPlayer";
import { PageContainer } from "@/components/layout/PageContainer";
import { extraListeningByUnit } from "@/data/learn/course/extra-listening";
import { levels } from "@/data/learn/course";
import { Radio } from "@/features/exercises/Radio";
import { useSession } from "@/hooks/useSession";
import { ttsAudioUrl } from "@/utils/tts-audio-url";

export default function ExtraListeningPage() {
  const { level, unit } = useParams();
  const session = useSession();
  const activity = extraListeningByUnit[`${level}/${unit}`];
  const unitData = levels[level as keyof typeof levels]?.units.find(
    ({ number }) => String(number) === unit,
  );
  const back = `/course/${level}`;

  if (!activity) return <Navigate to="/course" replace />;
  const isFree = level === "a1" && Number(unit) <= 3;
  if (!isFree && !session) return session === undefined ? null : <Navigate to={back} replace />;

  return (
    <PageContainer>
      <div className="grid gap-4">
        <PageHeader eyebrow={`Extra Listening • ${level} • Unit ${unit}`} title={activity.title} />
        {activity.dialogues.map(({ title: dialogueTitle, lines, questions }, index) => {
          const title = dialogueTitle ?? unitData?.lessons[index]?.title ?? `Dialogue ${index + 1}`;
          const speech = lines.map(({ text }) => text).join(" ");
          return (
            <section key={title} className="rounded-xl bg-(--surface) p-4">
              <h2 className="mb-3 text-xl font-bold">{title}</h2>
              <AudioPlayer
                src={session ? ttsAudioUrl(speech) : ""}
                fallbackText={speech}
                ariaLabel={`Play ${title}`}
                background="background"
              />
              <Radio
                className="rounded-xl bg-(--background) p-4"
                instruction="Listen and choose the correct answers."
                exercise={{
                  questions: questions.map(({ question, choices, correct }) => ({
                    question,
                    options: choices.map((option, index) => ({ option, isCorrect: index === correct })),
                  })),
                }}
              />
              <details className="mt-3 rounded-xl bg-(--background) p-4">
                <summary className="cursor-pointer font-semibold">Transcript</summary>
                <div className="mt-3 grid gap-2">
                  {lines.map(({ speaker, text }) => <p key={text}><strong>{speaker}:</strong> {text}</p>)}
                </div>
              </details>
            </section>
          );
        })}
        <Link className="font-semibold underline" to={back}>Back to Course</Link>
      </div>
    </PageContainer>
  );
}
