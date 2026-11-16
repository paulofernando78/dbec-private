import { ActionTextRow } from "@/components/content/ActionTextRow";
import { Audio } from "@/components/ui/Audio";
import { Card } from "@/components/ui/Card";
import { wordAudio } from "@/helpers/content";

const attractions = [
  "the Empire State Building",
  "Brooklyn Bridge",
  "Central Park",
  "Times Square",
  "Rockefeller Center",
  "the Statue of Liberty",
] as const;

const audioFile = (attraction: string) =>
  wordAudio(`${attraction.toLowerCase().replaceAll(" ", "-")}.mp3`);

export const NYCAttractions = () => (
  <Card title="New York City Tourist Attractions" inset className="mb-4">
    <p className="mb-4">Listen to the names of popular places in New York City.</p>

    <ul className="grid grid-cols-1 gap-2 lg:grid-cols-2">
      {attractions.map((attraction) => (
        <ActionTextRow
          key={attraction}
          className="rounded-xl bg-(--background) p-2"
          action={
            <Audio
              asButton
              ariaLabel={`Play ${attraction}`}
              src={audioFile(attraction)}
              fallbackText={attraction}
              wrapperClassName="shrink-0"
            />
          }
        >
          <span className="font-bold">{attraction}</span>
        </ActionTextRow>
      ))}
    </ul>
  </Card>
);
