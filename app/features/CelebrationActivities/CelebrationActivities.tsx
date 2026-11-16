import { ActionTextRow } from "@/components/content/ActionTextRow";
import { Audio } from "@/components/ui/Audio";
import { Card } from "@/components/ui/Card";
import { wordAudio } from "@/helpers/content";

const activities = [
  "wear special clothes",
  "eat special food",
  "decorate",
  "give gifts",
  "play music",
  "go to a parade",
  "go on a picnic",
  "watch fireworks",
] as const;

const audioFile = (activity: string) =>
  wordAudio(`${activity.toLowerCase().replaceAll(" ", "-")}.mp3`);

export const CelebrationActivities = () => (
  <Card title="Celebration Activities" inset className="mb-4">
    <p className="mb-4">Listen to activities people do at celebrations.</p>

    <ul className="grid grid-cols-1 gap-2 lg:grid-cols-2">
      {activities.map((activity) => (
        <ActionTextRow
          key={activity}
          className="rounded-xl bg-(--background) p-2"
          action={
            <Audio
              asButton
              ariaLabel={`Play ${activity}`}
              src={audioFile(activity)}
              fallbackText={activity}
              wrapperClassName="shrink-0"
            />
          }
        >
          <span className="font-bold">{activity}</span>
        </ActionTextRow>
      ))}
    </ul>
  </Card>
);
