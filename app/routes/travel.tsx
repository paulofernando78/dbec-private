import { useSession } from "@/hooks/useSession";

import { PageHeader } from "@/components/content/PageHeader";
import { UnitCard } from "@/components/course/UnitCard";
import { travel } from "@/data/travel";

export default function Travel() {
  const isAuthenticated = Boolean(useSession());

  return (
    <div className="mx-auto max-w-4xl">
      <PageHeader
        eyebrow="Learn • Specific Purposes"
        title={`${travel.code} ${travel.name}`}
        subtitle={travel.subtitle}
        description={travel.description}
        footer={`${travel.units.length} units available`}
      />
      <div className="grid gap-4">
        {travel.units.map((unit) => (
          <UnitCard
            key={unit.number}
            unit={unit}
            levelSlug={travel.slug}
            isAuthenticated={isAuthenticated}
            basePath="/travel"
          />
        ))}
      </div>
    </div>
  );
}
