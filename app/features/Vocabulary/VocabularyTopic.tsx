import { InlineRichContent } from "@/components/content/InlineRichContent/InlineRichContent";
import { VocabularyExample } from "@/components/content/VocabularyExample";
import { QuickRule } from "@/components/content/QuickRule";
import { Card } from "@/components/ui/Card";
import { Radio } from "@/features/exercises/Radio";
import {
  vocabularyTopicsById,
  type VocabularyTopic as VocabularyTopicData,
  type VocabularyTopicId,
} from "@/data/language/vocabulary/which-one";

export function VocabularyTopic({ topic }: { topic: VocabularyTopicData }) {
  return (
    <div lang="pt-BR" className="grid gap-4 text-black dark:text-white">
      {topic.image && (
        <img {...topic.image} loading="lazy" className="mx-auto h-auto max-w-full rounded-lg" />
      )}
      <div className="flex flex-col gap-4">
        {topic.usages.map((usage) => (
          <section
            key={usage.word}
            className="rounded-xl bg-(--background) p-4"
          >
            <h3 lang="en" className="text-xl font-black">
              {usage.word}
            </h3>
            <p className="mb-2">{usage.meaning}</p>
            <p className="mb-3 rounded-lg bg-(--surface) px-3 py-2 font-mono text-sm">
              {usage.pattern}
            </p>
            <ul className="grid gap-2">
              {usage.examples.map((example) => (
                <VocabularyExample key={example.english} {...example} />
              ))}
            </ul>
          </section>
        ))}
      </div>
      <QuickRule>{topic.quickRule}</QuickRule>
      {topic.practice?.length ? (
        <section className="space-y-3">
          <h3 className="text-xl font-black">Exercícios</h3>
          <Radio
            instruction="Escolha a palavra que completa cada frase."
            exercise={{
              questions: topic.practice.map(({ question, choices, answer }) => ({
                question,
                options: choices.map((option) => ({ option, isCorrect: option === answer })),
              })),
            }}
            questionClassName="rounded-xl bg-(--background) p-4"
          />
        </section>
      ) : null}
    </div>
  );
}

export function VocabularyTopicCards({
  topicIds,
}: {
  topicIds: readonly VocabularyTopicId[];
}) {
  return (
    <div className="grid gap-4">
      {topicIds.map((topicId) => {
        const topic = vocabularyTopicsById[topicId];

        return (
          <Card key={topic.id} title={topic.title}>
            <p lang="pt-BR" className="mb-4 text-black dark:text-white">
              <InlineRichContent value={topic.description} />
            </p>
            <VocabularyTopic topic={topic} />
          </Card>
        );
      })}
    </div>
  );
}

