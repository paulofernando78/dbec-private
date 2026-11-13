import type { ReactNode } from "react";

import { Card } from "@/components/ui/Card";

import { formatSectionLabel } from "@/utils/formatSectionLabel";

type SectionProps = {
  id: string;
  label?: string;
  className?: string;
  tocTitle?: string;
  iconClassName?: string;
  tocItemClassName?: string;
  tocContentAfter?: ReactNode;
  showInTableOfContents?: boolean;
  heading?: 1 | 2 | 3 | 4 | 5 | 6;
  showHeader?: boolean;
  children: ReactNode;
};

export const Section = ({
  id,
  label,
  className = "",
  heading = 2,
  showHeader = true,
  children,
}: SectionProps) => {
  // If no label is passed, build one from the id
  const resolvedLabel = label ?? formatSectionLabel(id);

  return (
    <section id={id} className={`scroll-mt-2 ${className}`}>
      {showHeader ? (
        <Card title={resolvedLabel} titleAs={`h${heading}`} className="mb-4" inset>
          {children}
        </Card>
      ) : (
        <div>{children}</div>
      )}
    </section>
  );
};

Section.displayName = "Section";
