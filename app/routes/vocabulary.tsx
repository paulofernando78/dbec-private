import { ActionTextRow } from "@/components/content/ActionTextRow";
import { PageHeader } from "@/components/content/PageHeader";
import { Card } from "@/components/ui/Card";
import { vocabularyTopics, vocabularyTopicsById } from "@/data/language/vocabulary/which-one";
import { BookOpen } from "lucide-react";
import { Link, Navigate, useLocation } from "react-router";

const alphabeticalTopics = [...vocabularyTopics].sort((a, b) =>
  a.title.localeCompare(b.title, "en"),
);

export default function Vocabulary() {
  const { hash, search } = useLocation();
  const legacyTopic = hash.slice(1);

  if (Object.hasOwn(vocabularyTopicsById, legacyTopic)) {
    return <Navigate to={{ pathname: `/vocabulary/${legacyTopic}`, search }} replace />;
  }

  return (
    <div>
      <PageHeader eyebrow="Language • Vocabulary" title="Qual usar?" />

      <Card>
        <ul role="list" className="grid gap-2">
          {alphabeticalTopics.map((topic) => (
            <li key={topic.id}>
              <Link
                className="group block rounded-xl font-semibold hover:bg-(--surface) focus-visible:outline-2 focus-visible:outline-offset-2"
                to={`/vocabulary/${topic.id}`}
              >
                <ActionTextRow as="div" action={
                <span aria-hidden="true" className="grid size-10 shrink-0 place-items-center rounded-xl border border-(--button-border) bg-linear-to-b from-(--button-outer-start) to-(--button-outer-end) p-1 shadow-sm">
                  <span className="grid size-full place-items-center rounded-lg bg-linear-to-b from-(--button-inner-start) to-(--button-inner-end)">
                    <BookOpen className="size-4.5 text-(--button-icon)" />
                  </span>
                </span>
                }>
                <span>{topic.title}</span>
                </ActionTextRow>
              </Link>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
