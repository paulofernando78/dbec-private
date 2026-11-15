import { PageHeader } from "@/components/content/PageHeader";
import { InlineRichContent } from "@/components/content/InlineRichContent/InlineRichContent";
import { Card } from "@/components/ui/Card";
import { vocabularyTopicsById, type VocabularyTopicId } from "@/data/language/vocabulary/which-one";
import { VocabularyTopic } from "@/features/Vocabulary";
import { Navigate, useParams } from "react-router";

export default function VocabularyTopicPage() {
  const { topic: topicId } = useParams();
  if (!topicId || !Object.hasOwn(vocabularyTopicsById, topicId)) {
    return <Navigate to="/vocabulary" replace />;
  }

  const topic = vocabularyTopicsById[topicId as VocabularyTopicId];

  return (
    <article className="space-y-4">
      <PageHeader eyebrow="Vocabulary • Which One?" title={topic.title} />
      <Card>
        <p lang="pt-BR" className="mb-4 text-black dark:text-white">
          <InlineRichContent value={topic.description} />
        </p>
        <VocabularyTopic topic={topic} />
      </Card>
    </article>
  );
}
