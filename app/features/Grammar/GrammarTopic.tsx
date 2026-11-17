import { Card } from "@/components/ui/Card";
import { QuickRule } from "@/components/content/QuickRule";
import { ActionTextRow } from "@/components/content/ActionTextRow";
import { Audio } from "@/components/ui/Audio";
import { InlineRichContent } from "@/components/content/InlineRichContent";
import { TriangleAlert } from "lucide-react";
import {
  grammarTopicsById,
  type GrammarTopic as GrammarTopicData,
  type GrammarTopicId,
} from "@/data/language/grammar";
import type { GrammarExample } from "@/data/language/grammar/types";

function GrammarExampleList({ examples }: { examples: readonly GrammarExample[] }) {
  return (
    <ul className="grid gap-2">
      {examples.map((example) => (
        <ActionTextRow key={example.english} action={
          <Audio
            asButton
            src={example.english}
            fallbackText={example.english}
            speechLang="en-US"
            ariaLabel={`Play ${example.english}`}
            wrapperClassName="shrink-0 self-start"
          />
        }>
            <span lang="en" className="font-semibold text-(--text-color)">
              <InlineRichContent value={example.englishContent ?? example.english} />
            </span>{" "}
            <span className="text-slate-500">{example.portuguese}</span>
        </ActionTextRow>
      ))}
    </ul>
  );
}

export function GrammarTopic({
  topic,
  sectionAnchors = false,
}: {
  topic: GrammarTopicData;
  sectionAnchors?: boolean;
}) {
  return (
    <div lang="pt-BR" className="grid gap-4">
      <p>{topic.introduction}</p>
      <div className="flex flex-col gap-4">
        {topic.usages.map((usage, index) => (
          <section
            key={usage.title}
            id={sectionAnchors ? `grammar-usage-${index + 1}` : undefined}
            className={usage.image ? "scroll-mt-4" : "scroll-mt-4 rounded-xl bg-(--background) p-4"}
          >
            <h3 className="text-xl font-black text-(--text-color)">
              {usage.title}
            </h3>
            <p className="mb-2 text-slate-500">{usage.meaning}</p>
            {usage.pattern && (
              <p className="mb-3 rounded-lg bg-(--surface) px-3 py-2 font-mono text-sm">
                {usage.pattern}
              </p>
            )}
            <GrammarExampleList examples={usage.examples} />
            {usage.groups?.map((group) => (
              <div key={group.title} className="mt-4 first:mt-0">
                <h4 className="mb-2 text-lg font-black text-(--text-color)">
                  {group.title}
                </h4>
                {group.pattern && (
                  <p className="mb-3 rounded-lg bg-(--surface) px-3 py-2 font-mono text-sm">
                    {group.pattern}
                  </p>
                )}
                <GrammarExampleList examples={group.examples} />
              </div>
            ))}
            {usage.image && (
              <img
                {...usage.image}
                loading="lazy"
                className="mx-auto mt-4 h-auto max-w-full rounded-lg"
              />
            )}
          </section>
        ))}
      </div>
      {topic.warnings?.map((warning, index) => (
        <aside
          key={warning.title}
          id={sectionAnchors ? `grammar-warning-${index + 1}` : undefined}
          className="scroll-mt-4 rounded-xl border border-amber-300 bg-amber-50 p-4 text-amber-950 dark:border-amber-700 dark:bg-amber-950 dark:text-amber-100"
        >
          <div className="mb-2 flex items-center gap-2">
            <TriangleAlert aria-hidden="true" className="size-5 shrink-0" />
            <h3 className="font-black">{warning.title}</h3>
          </div>
          <p className="mb-3">{warning.explanation}</p>
          <ul className="grid gap-1">
            {warning.examples.map((example) => (
              <ActionTextRow key={example.english} action={
                <Audio
                  asButton
                  src={example.english}
                  fallbackText={example.english}
                  speechLang="en-US"
                  ariaLabel={`Play ${example.english}`}
                  wrapperClassName="shrink-0 self-start"
                />
              }>
                  {example.incorrect && (
                    <span className="block text-sm">
                      <span className="sr-only">Forma incorreta: </span>
                      <del lang="en">{example.incorrect}</del>
                    </span>
                  )}
                  <strong lang="en">{example.english}</strong>{" "}
                  <span className="opacity-75">{example.portuguese}</span>
              </ActionTextRow>
            ))}
          </ul>
        </aside>
      ))}
      <QuickRule
        id={sectionAnchors ? "grammar-quick-rule" : undefined}
      >
        {topic.quickRule}
      </QuickRule>
    </div>
  );
}

export function GrammarTopicCards({ topicIds }: { topicIds: readonly GrammarTopicId[] }) {
  return (
    <div className="grid gap-4">
      {topicIds.map((topicId) => {
        const topic = grammarTopicsById[topicId];

        return (
          <Card key={topic.id} title={topic.title}>
            <p className="mb-4 text-slate-500">{topic.description}</p>
            <GrammarTopic topic={topic} />
          </Card>
        );
      })}
    </div>
  );
}

