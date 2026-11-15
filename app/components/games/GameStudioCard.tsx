import { useNavigate } from "react-router";

import { ProgressCollectionCard } from "@/components/content/ProgressCollectionCard";

export type StudioGame = {
  href: string;
  label: string;
  description: string;
  date: string;
  comingSoon?: boolean;
};

type GameStudioCardProps = {
  studio: string;
  image?: string;
  games: StudioGame[];
  gameCompletion: Record<string, boolean>;
  onGameCompletionChange: (gameId: string, completed: boolean) => void;
};

export function GameStudioCard({
  studio,
  image,
  games,
  gameCompletion,
  onGameCompletionChange,
}: GameStudioCardProps) {
  const navigate = useNavigate();
  const completedGames = games.filter(
    (game) => gameCompletion[game.href],
  ).length;

  const resetStudio = () => {
    games.forEach((game) => {
      if (gameCompletion[game.href]) {
        onGameCompletionChange(game.href, false);
      }
    });
  };

  return (
    <ProgressCollectionCard
      className="mb-4"
      title={studio}
      headerImage={image}
      headerImageAlt={image ? `${studio} characters` : undefined}
      completedCount={completedGames}
      totalCount={games.length}
      resetAriaLabel={`Reset progress for ${studio}`}
      onReset={resetStudio}
      disableResetWhenEmpty
      items={games.map((game) => ({
        id: game.href,
        eyebrow: game.date,
        title: game.label,
        description: game.description,
        meta: game.comingSoon ? "Coming soon" : undefined,
        metaItalic: game.comingSoon,
        isCompleted: gameCompletion[game.href] ?? false,
        isLocked: game.comingSoon,
        ariaLabel: game.comingSoon
          ? `${game.label} — Coming soon`
          : `Open ${game.label}`,
        onClick: game.comingSoon ? undefined : () => navigate(game.href),
      }))}
    />
  );
}
