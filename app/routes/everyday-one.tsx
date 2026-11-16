import { useNavigate } from "react-router";
import { PageHeader } from "@/components/content/PageHeader";
import { ProgressCollectionCard } from "@/components/content/ProgressCollectionCard";
import { everydayOneCatalog, everydayOneEntries, everydayOnePath } from "@/data/language/expressions/everyday-1/lessons";

export default function EverydayOne() {
  const navigate = useNavigate();

  return (
    <div className="space-y-4">
      <PageHeader eyebrow="Language • Expressions" title="Everyday English 1" />
      {Array.from({ length: 5 }, (_, index) => {
        const group = everydayOneCatalog.filter((item) => item.group === index + 1);
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
            items={group.map((item) => {
              const entry = everydayOneEntries.find(({ id }) => id === item.id);
              return {
              id: item.id,
              eyebrow: item.label,
              title: item.title,
              description: item.description,
              isCompleted: false,
              isLocked: !entry,
              ariaLabel: `${entry ? "Open" : "Locked"} ${item.label}: ${item.title}`,
              onClick: entry ? () => navigate(`${everydayOnePath}/${item.id}`) : undefined,
              };
            })}
          />
        );
      })}
    </div>
  );
}
