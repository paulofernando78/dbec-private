import { ActionTextRow } from "@/components/content/ActionTextRow";
import { Audio } from "@/components/ui/Audio";
import { Card } from "@/components/ui/Card";
import { wordAudio } from "@/helpers/content";

const groups = [
  {
    title: "Appearance",
    words: ["pretty", "handsome", "good-looking", "short", "tall", "heavy", "thin"],
  },
  {
    title: "Personality",
    words: ["talkative", "friendly", "kind", "funny", "quiet", "serious", "shy"],
  },
] as const;

export const PeopleAdjectives = () => (
  <Card title="Appearance and Personality" inset className="mb-4">
    <p className="mb-4">Listen to words that describe people.</p>

    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      {groups.map((group) => (
        <section key={group.title}>
          <h4 className="mb-2 text-lg font-black">{group.title}</h4>
          <ul className="grid gap-2">
            {group.words.map((word) => (
              <ActionTextRow
                key={word}
                className="rounded-xl bg-(--background) p-2"
                action={
                  <Audio
                    asButton
                    ariaLabel={`Play ${word}`}
                    src={wordAudio(`${word}.mp3`)}
                    fallbackText={word}
                    wrapperClassName="shrink-0"
                  />
                }
              >
                <span className="font-bold capitalize">{word}</span>
              </ActionTextRow>
            ))}
          </ul>
        </section>
      ))}
    </div>
  </Card>
);
