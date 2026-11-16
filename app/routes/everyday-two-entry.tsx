import { Navigate, useParams } from "react-router";
import { PageHeader } from "@/components/content/PageHeader";
import { Card } from "@/components/ui/Card";
import { Dialogue } from "@/features/Dialogue";
import { Radio } from "@/features/exercises/Radio";
import { everydayTwoEntries, everydayTwoPath } from "@/data/language/expressions/everyday-2/lessons";

export default function EverydayTwoEntry() {
  const { entry } = useParams();
  const current = everydayTwoEntries.find((item) => item.id === entry);

  if (!current) return <Navigate to={everydayTwoPath} replace />;

  return (
    <div className="space-y-4">
      <PageHeader
        eyebrow={`Language • Expressions • Everyday English 2 • ${current.label}`}
        title={current.title}
      />
      {current.dialogue && (
        <Card>
          <Dialogue instruction="Listen to the dialogue."
            audioSrc={`/media/audio/language/expressions/everyday-2/${current.id}.mp3`}
            context={current.description}
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
