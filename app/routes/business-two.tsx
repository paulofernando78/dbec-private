import { useNavigate } from "react-router";

import { PageHeader } from "@/components/content/PageHeader";
import { ProgressCollectionCard } from "@/components/content/ProgressCollectionCard";
import { businessTwoGroups, businessTwoPath } from "@/data/expressions/business-two";

export default function BusinessTwo() {
  const navigate = useNavigate();

  return (
    <div>
      <PageHeader eyebrow="Language • Expressions" title="Business 2" />
      <div className="grid gap-4">
        {businessTwoGroups.map(({ title, entries }) => (
          <ProgressCollectionCard
            key={title}
            title={title}
            completedCount={0}
            totalCount={entries.length}
            resetAriaLabel={`Reset ${title} progress`}
            onReset={() => {}}
            disableResetWhenEmpty
            items={entries.map(({ slug, label, title, content }) => ({
              id: slug,
              eyebrow: label,
              title,
              description: content?.context ?? "Coming soon.",
              isCompleted: false,
              ariaLabel: `Open ${title}`,
              onClick: () => navigate(`${businessTwoPath}/${slug}`),
            }))}
          />
        ))}
      </div>
    </div>
  );
}
