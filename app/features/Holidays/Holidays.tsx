import { ActionTextRow } from "@/components/content/ActionTextRow";
import { Audio } from "@/components/ui/Audio";
import { Card } from "@/components/ui/Card";
import { wordAudio } from "@/helpers/content";

const holidays = [
  "New Year's Eve",
  "Valentine's Day",
  "Independence Day",
  "Halloween",
  "Thanksgiving",
  "Christmas",
] as const;

const audioFile = (holiday: string) =>
  wordAudio(
    `${holiday.toLowerCase().replaceAll("'", "").replaceAll(" ", "-")}.mp3`,
  );

export const Holidays = () => (
  <Card title="Holidays in the U.S." inset className="mb-4">
    <p className="mb-4">Listen to the names of common holidays in the United States.</p>

    <ul className="grid grid-cols-1 gap-2 lg:grid-cols-2">
      {holidays.map((holiday) => (
        <ActionTextRow
          key={holiday}
          className="rounded-xl bg-(--background) p-2"
          action={
            <Audio
              asButton
              ariaLabel={`Play ${holiday}`}
              src={audioFile(holiday)}
              fallbackText={holiday}
              wrapperClassName="shrink-0"
            />
          }
        >
          <span className="font-bold">{holiday}</span>
        </ActionTextRow>
      ))}
    </ul>
  </Card>
);
