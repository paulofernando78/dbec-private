import { PageHeader } from "@/components/content/PageHeader";
import { TableOfContents } from "@/components/content/TableOfContents";
import { Card } from "@/components/ui/Card";
import { grammarTopicsById, type GrammarTopicId } from "@/data/grammar";
import { GrammarExercises, GrammarTopic } from "@/features/Grammar";
import { Navigate, useParams } from "react-router";

export default function Grammar() {
  const { topic: topicId } = useParams();

  if (!topicId) {
    return <Navigate to="/grammar/present-perfect" replace />;
  }

  const topic = grammarTopicsById[topicId as GrammarTopicId];

  if (!topic) {
    return <Navigate to="/grammar/present-perfect" replace />;
  }

  const showContents = topic.id === "prefixes-suffixes";

  return (
    <div>
      <PageHeader title={topic.title} />
      {showContents && (
        <TableOfContents
          items={[
            ...topic.usages.map((usage, index) => ({
              href: `grammar-usage-${index + 1}`,
              label: usage.title,
            })),
            ...topic.warnings.map((warning, index) => ({
              href: `grammar-warning-${index + 1}`,
              label: warning.title,
            })),
            { href: "grammar-quick-rule", label: "Regra rápida" },
            { href: "grammar-exercises", label: "Exercícios" },
          ]}
        />
      )}
      <Card title={topic.title}>
        <p className="mb-4 text-slate-500">{topic.description}</p>
        <GrammarTopic topic={topic} sectionAnchors={showContents} />
      </Card>
      <div id={showContents ? "grammar-exercises" : undefined} className="scroll-mt-4">
        <GrammarExercises topicId={topic.id} />
      </div>
    </div>
  );
}
