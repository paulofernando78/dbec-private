import { Link, Navigate, useParams } from "react-router";

import { PageHeader } from "@/components/content/PageHeader";
import { PageContainer } from "@/components/layout/PageContainer";
import { Card } from "@/components/ui/Card";
import { acabar } from "@/data/language/vocabulary/como-se-diz/acabar";

const sectionPath = "/vocabulary/como-se-diz";
const entries = [acabar];

export default function ComoSeDiz() {
  const { entry } = useParams();
  const topic = entries.find(({ id }) => id === entry);
  if (entry && !topic) return <Navigate to={sectionPath} replace />;

  return (
    <PageContainer>
      <div className="grid gap-4" lang="pt-BR">
        <PageHeader
          eyebrow={topic ? "Vocabulary • Como se diz?" : "Language • Vocabulary"}
          title={topic ? `Como se diz “${topic.title.toLowerCase()}” em inglês?` : "Como se diz?"}
        />
        {topic ? (
          <>
            <p>{topic.introduction}</p>
            {topic.uses.map(({ word, meaning, examples }) => (
              <Card key={word} title={word}>
                <p>{meaning}</p>
                <ul className="mt-3 grid gap-2">
                  {examples.map(([english, portuguese]) => (
                    <li key={english}>
                      <strong lang="en">{english}</strong>
                      <p>{portuguese}</p>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
            <Card title="Compare">{topic.contrast}</Card>
            <Link className="font-semibold underline" to={sectionPath}>Voltar para Como se diz?</Link>
          </>
        ) : (
          <Card>
            <p className="mb-4">Parta do português e descubra como dizer em inglês, de acordo com o contexto.</p>
            <ul className="grid gap-2">
              {entries.map(({ id, title, summary }) => (
                <li key={id}>
                  <Link to={`${sectionPath}/${id}`} className="block rounded-lg bg-(--background) p-3 hover:underline">
                    <strong>{title}</strong>
                    <span className="mt-1 block text-sm">{summary}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </Card>
        )}
      </div>
    </PageContainer>
  );
}
