import { useNavigate } from "react-router";
import { PageHeader } from "@/components/content/PageHeader";
import { ProgressCollectionCard } from "@/components/content/ProgressCollectionCard";
import { everydayTwoEntries, everydayTwoPath } from "@/data/language/expressions/everyday-2/lessons";

export default function EverydayTwo() {
  const navigate = useNavigate();

  return (
    <div className="space-y-4">
      <PageHeader eyebrow="Language • Expressions" title="Everyday English 2" />
      {Array.from({ length: 5 }, (_, index) => {
        const group = everydayTwoEntries.filter((item) => item.group === index + 1);
        const heading = `Lessons ${index * 5 + 1}–${index * 5 + 5}`;

        return (
          <ProgressCollectionCard
            key={heading}
            title={heading}
            completedCount={0}
            totalCount={group.length}
            resetAriaLabel={`Reset ${heading} progress`}
            onReset={() => {}}
            disableResetWhenEmpty
            items={group.map((item) => ({
              id: item.id,
              eyebrow: item.label,
              title: item.title,
              description: item.description,
              isCompleted: false,
              ariaLabel: `Open ${item.label}: ${item.title}`,
              onClick: () => navigate(`${everydayTwoPath}/${item.id}`),
            }))}
          />
        );
      })}
    </div>
  );
}
