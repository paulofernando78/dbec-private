import { PageHeader } from "@/components/content/PageHeader";
import { TableOfContents } from "@/components/content/TableOfContents";
import { Card } from "@/components/ui/Card";
import { grammarTopicsById, type GrammarTopicId } from "@/data/language/grammar";
import { links } from "@/data/nav-bar-links";
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

  const languageGroup = links.find((item) => "group" in item && item.group === "language");
  const subgroup = languageGroup && "group" in languageGroup
    ? languageGroup.children.find(
        (item) => "subgroup" in item && item.children.some(({ href }) => href === `/grammar/${topic.id}`),
      )
    : undefined;
  const section = subgroup && "subgroup" in subgroup ? subgroup.subgroup : "grammar";

  const showContents = topic.id === "prefixes-suffixes";
  const content = (
    <>
      <p lang="pt-BR" className="mb-4 text-slate-500">{topic.description}</p>
      <GrammarTopic topic={topic} sectionAnchors={showContents} />
    </>
  );

  return (
    <div>
      <PageHeader eyebrow={`Language • ${section}`} title={topic.title} subtitle={"englishTitle" in topic ? topic.englishTitle : undefined} />
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
      {topic.id === "punctuation" ? content : <Card title={topic.title}>{content}</Card>}
      <div id={showContents ? "grammar-exercises" : undefined} className="scroll-mt-4">
        <GrammarExercises topicId={topic.id} />
      </div>
    </div>
  );
}
