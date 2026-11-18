import { useSession } from "@/hooks/useSession";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import { PageHeader } from "@/components/content/PageHeader";
import { ProgressCollectionCard } from "@/components/content/ProgressCollectionCard";
import {
  audiobooks,
  audiobookPreview,
  availableAudiobookSlugs,
  type AudiobookSlug,
} from "@/data/skills/listening/audiobooks/index";
import { listeningLevels } from "@/data/skills/listening/audiobooks/levels";
import {
  isAudiobookCompleted,
  resetAudiobook,
} from "@/utils/audiobook-progress";

export default function Audiobooks() {
  const navigate = useNavigate();
  const session = useSession();
  const isAuthenticated = session === undefined ? null : Boolean(session);
  const [completedAudiobooks, setCompletedAudiobooks] = useState<Set<string>>(
    new Set(),
  );

  useEffect(() => {
    setCompletedAudiobooks(
      new Set(
        listeningLevels.flatMap((level) =>
          level.titles
            .filter((item) => {
              const slug = item.slug as AudiobookSlug;
              return availableAudiobookSlugs.has(slug) &&
                isAudiobookCompleted(item.slug, audiobooks[slug].sections.slice(1));
            })
            .map((item) => item.slug),
        ),
      ),
    );
  }, []);

  return (
    <div>
      <PageHeader eyebrow="Skills • Listening" title="Audiobooks" />

      <div className="grid gap-4">
        {listeningLevels.map((level) => {
          const completedCount = level.titles.filter((item) =>
            availableAudiobookSlugs.has(item.slug as AudiobookSlug) &&
            completedAudiobooks.has(item.slug),
          ).length;
          const resetLevel = () => {
            level.titles.forEach((item) => {
              if (availableAudiobookSlugs.has(item.slug as AudiobookSlug)) {
                resetAudiobook(item.slug);
              }
            });
            setCompletedAudiobooks((current) => {
              const next = new Set(current);
              level.titles.forEach((item) => next.delete(item.slug));
              return next;
            });
          };

          return (
          <ProgressCollectionCard
            key={level.slug}
            title={level.title}
            eyebrow={level.exam}
            description={level.wordCount}
            completedCount={completedCount}
            totalCount={level.titles.length}
            resetAriaLabel={`Reset ${level.title} progress`}
            onReset={resetLevel}
            disableResetWhenEmpty
            emptyMessage="Books coming soon."
            emptyMessageItalic
            items={level.titles.map((item) => {
              const isAvailable = availableAudiobookSlugs.has(
                item.slug as AudiobookSlug,
              );
              const isCompleted =
                isAvailable && completedAudiobooks.has(item.slug);
              const isPreview = item.slug === audiobookPreview.slug;
              const isLocalDraft = import.meta.env.DEV && item.slug === "treasure-island";
              const isLocked = isAuthenticated === false && !isPreview && !isLocalDraft;

              return {
                id: item.slug,
                title: item.title,
                description: item.description,
                meta: item.duration,
                isCompleted,
                isLocked,
                ariaLabel: `${isLocked ? "Locked" : isCompleted ? "Completed" : "Open"} ${item.title}`,
                onClick:
                  (isAuthenticated || isPreview || isLocalDraft) && isAvailable && item.slug in audiobooks
                    ? () => navigate(`/audiobooks/${item.slug}`)
                    : undefined,
              };
            })}
          />
          );
        })}
      </div>
    </div>
  );
}
