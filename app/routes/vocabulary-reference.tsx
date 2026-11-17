import { PageHeader } from "@/components/content/PageHeader";
import { PhoneticText, VocabularyExample } from "@/components/content/VocabularyExample";
import { PageContainer } from "@/components/layout/PageContainer";
import { Card } from "@/components/ui/Card";
import { falseCognates } from "@/data/language/vocabulary/false-cognates";
import { homophonesHomographsHomonyms } from "@/data/language/vocabulary/homophones-homographs-homonyms";
import { Navigate, useParams } from "react-router";

const topics = new Map([
  ["false-cognates", falseCognates],
  ["homophones-homographs-homonyms", homophonesHomographsHomonyms],
]);

export default function VocabularyReference() {
  const { topic } = useParams();
  const data = topics.get(topic ?? "");
  if (!data) return <Navigate to="/vocabulary" replace />;

  return (
    <PageContainer>
      <div className="grid gap-4">
        <PageHeader eyebrow="Language • Vocabulary" title={data.title} subtitle={"englishTitle" in data && typeof data.englishTitle === "string" ? data.englishTitle : undefined} />
        <p>{data.introduction}</p>
        {data.sections.map((section) => (
          <Card key={section.title} title={section.title}>
            <p>{section.explanation}</p>
            <ul className="mt-3 grid gap-2">
              {section.examples.map((example) => {
                const [english, portuguese] = example.split(" — ");
                return <VocabularyExample key={example} english={english} portuguese={portuguese} />;
              })}
            </ul>
          </Card>
        ))}
        <Card title="Practice">
          <div className="grid gap-3">
            {data.practice.map(({ question, answer }) => (
              <details key={question} className="rounded-lg bg-(--background) p-3">
                <summary className="cursor-pointer font-semibold">{question}</summary>
                <p className="mt-2"><PhoneticText text={answer} /></p>
              </details>
            ))}
          </div>
        </Card>
      </div>
    </PageContainer>
  );
}
