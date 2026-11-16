import { Navigate, useParams } from "react-router";
import { PageHeader } from "@/components/content/PageHeader";
import { Card } from "@/components/ui/Card";
import { Dialogue } from "@/features/Dialogue";
import { Radio } from "@/features/exercises/Radio";
import { everydayOneEntries, everydayOnePath } from "@/data/language/expressions/everyday-1/lessons";

export default function EverydayOneEntry() {
  const { entry } = useParams();
  const current = everydayOneEntries.find((item) => item.id === entry);

  if (!current) return <Navigate to={everydayOnePath} replace />;

  return (
    <div className="space-y-4">
      <PageHeader
        eyebrow={`Language • Expressions • Everyday English 1 • ${current.label}`}
        title={current.title}
      />
      {current.dialogue && (
        <Card>
          <Dialogue instruction="Listen to the dialogue."
            audioSrc={`/media/audio/language/expressions/everyday-1/${current.id}.mp3`}
            context={current.dialogue.context}
            lines={current.dialogue.lines}
            segmented
          />
        </Card>
      )}
      {current.exercises.map(({ instruction, questions }, index) => (
        <Card key={index} title={current.dialogue ? "Practice the Idioms" : "Review"}>
          <Radio
            instruction={instruction}
            exercise={{ questions }}
            questionClassName="rounded-xl bg-(--background) p-4"
          />
        </Card>
      ))}
    </div>
  );
}
