import { ActionTextRow } from "@/components/content/ActionTextRow";
import { Audio } from "@/components/ui/Audio";
import { Card } from "@/components/ui/Card";
import { wordAudio } from "@/helpers/content";

const remedies = [
  "chamomile tea",
  "cough syrup",
  "chicken soup",
  "cold medicine",
  "eye drops",
  "aspirin",
  "antacid",
  "nasal spray",
  "ice pack",
] as const;

const audioFile = (remedy: string) =>
  wordAudio(`${remedy.toLowerCase().replaceAll(" ", "-")}.mp3`);

export const CommonRemedies = () => (
  <Card title="Common Remedies" inset className="mb-4">
    <p className="mb-4">Listen to words for common remedies.</p>

    <ul className="grid grid-cols-1 gap-2 lg:grid-cols-2">
      {remedies.map((remedy) => (
        <ActionTextRow
          key={remedy}
          className="rounded-xl bg-(--background) p-2"
          action={
            <Audio
              asButton
              ariaLabel={`Play ${remedy}`}
              src={audioFile(remedy)}
              fallbackText={remedy}
              wrapperClassName="shrink-0"
            />
          }
        >
          <span className="font-bold capitalize">{remedy}</span>
        </ActionTextRow>
      ))}
    </ul>
  </Card>
);
