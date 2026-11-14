import { PageHeader } from "@/components/content/PageHeader";
import { Card } from "@/components/ui/Card";
import { vocabularyTopicsById, type VocabularyTopicId } from "@/data/language/vocabulary/which-one";
import { VocabularyTopic } from "@/features/Vocabulary";
import { Link, Navigate, useParams } from "react-router";

export default function VocabularyTopicPage() {
  const { topic: topicId } = useParams();
  if (!topicId || !Object.hasOwn(vocabularyTopicsById, topicId)) {
    return <Navigate to="/vocabulary" replace />;
  }

  const topic = vocabularyTopicsById[topicId as VocabularyTopicId];

  return (
    <article className="space-y-4">
      <PageHeader eyebrow="Vocabulary • Which One?" title={topic.title} />
      <Link lang="pt-BR" className="inline-block underline underline-offset-4" to="/vocabulary">
        Voltar para Which One?
      </Link>
      <Card>
        <p lang="pt-BR" className="mb-4 text-slate-500">{topic.description}</p>
        <VocabularyTopic topic={topic} />
      </Card>
    </article>
  );
}
