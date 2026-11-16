import { ActionTextRow } from "@/components/content/ActionTextRow";
import { Audio } from "@/components/ui/Audio";
import { Card } from "@/components/ui/Card";
import { wordAudio } from "@/helpers/content";

const groups = [
  {
    title: "Couple",
    words: ["husband", "wife"],
  },
  {
    title: "Parents",
    words: ["father", "mother", "parents"],
  },
  {
    title: "Children",
    words: ["son", "daughter", "children"],
  },
  {
    title: "Siblings",
    words: ["brother", "sister"],
  },
] as const;

export const FamilyWords = () => (
  <Card title="Family" inset className="mb-4">
    <p className="mb-4">Listen to words for family members.</p>

    <div className="grid gap-4">
      {groups.map((group) => (
        <section key={group.title}>
          <h4 className="mb-2 text-lg font-black">{group.title}</h4>
          <ul className="grid grid-cols-1 gap-2 lg:grid-cols-2">
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
