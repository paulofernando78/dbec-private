import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { useNavigate, useParams } from "react-router";

import { PageHeader } from "@/components/content/PageHeader";
import { TableOfContents } from "@/components/content/TableOfContents";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { List } from "@/components/content/List";

import { getGameSlug } from "@/data/games/games-slug";
import { gamesLucasArtsCardData } from "@/data/games/lucas-arts/games-lucas-arts-card-data";
import { gamesSierraCardData } from "@/data/games/sierra/games-sierra-card-data";

export default function GameBuilder() {
  const navigate = useNavigate();
  const { developer, slug } = useParams();
  const game = getGameSlug({ developer, slug });

  const gameHref = `/games/${developer}/${slug}`;
  const gameCards = [
    ...Object.values(gamesLucasArtsCardData),
    ...Object.values(gamesSierraCardData),
  ];
  const gameCard = gameCards.find((card) => card.href === gameHref);

  const itemCount = game?.sections.reduce((count, section) => count + section.items.length, 0) ?? 0;
  const [progress, setProgress] = useState<{ gameId: string; checked: boolean[] }>();
  const [saving, setSaving] = useState(false);
  const [progressError, setProgressError] = useState("");
  const checked = progress?.gameId === gameHref ? progress.checked : undefined;

  useEffect(() => {
    if (!itemCount) return;
    const controller = new AbortController();
    setProgressError("");

    fetch("/api/lesson-progress", { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error("Could not load progress");
        return response.json();
      })
      .then(({ lessons }) => {
        if (controller.signal.aborted) return;
        setProgress({
          gameId: gameHref,
          checked: Array.from({ length: itemCount }, (_, index) =>
            Boolean(lessons?.[gameHref] || lessons?.[`${gameHref}/checklist/${index}`]),
          ),
        });
      })
      .catch(() => {
        if (!controller.signal.aborted) setProgressError("Could not load your progress. Sign in or reload to try again.");
      });

    return () => controller.abort();
  }, [gameHref, itemCount]);

  const saveCheckbox = async (index: number, value: boolean) => {
    if (!checked || saving) return;
    const next = checked.map((item, itemIndex) => itemIndex === index ? value : item);
    setSaving(true);
    setProgressError("");
    setProgress({ gameId: gameHref, checked: next });

    try {
      const response = await fetch("/api/lesson-progress", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lessonId: gameHref, checklist: next }),
        keepalive: true,
      });
      if (!response.ok) throw new Error("Could not save progress");
    } catch {
      setProgress({ gameId: gameHref, checked });
      setProgressError("Could not save your progress. Try marking the item again.");
    } finally {
      setSaving(false);
    }
  };

  let sectionOffset = 0;

  return (
    <main
      className="fixed inset-0 z-100 overflow-y-auto bg-(--background) text-(--text-color)"
      data-scroll-container
    >
      <div className="mx-auto min-h-full w-full max-w-7xl p-4 sm:p-6">
        <div className="mb-4 flex justify-end">
          <Button
            ariaLabel="Close game"
            disabled={saving}
            icon={<X />}
            onClick={() => navigate("/games")}
            className="size-11! p-1!"
          />
        </div>
        <PageHeader
          eyebrow="Content • Games"
          title={gameCard?.label ?? game?.whiteboard.subtitle ?? game?.whiteboard.title ?? "Game not found"}
          descriptions={gameCard ? [gameCard.description] : game?.whiteboard.descriptions}
          date={game?.whiteboard.date}
        />

        {game && (
          <div className="grid gap-4 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
            <div className="min-w-0 lg:sticky lg:top-4 lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:self-start">
              <Card title="Game player">
                <div
                  id="js-dos-player"
                  className="mb-4 grid aspect-video place-items-center rounded-lg bg-slate-950 px-4 text-center text-sm text-slate-200"
                >
                  Player not configured
                </div>
                <label className="grid gap-1 text-sm font-semibold">
                  Game bundle
                  <input
                    type="url"
                    disabled
                    placeholder="Game bundle URL"
                    className="w-full rounded-lg bg-(--background) px-3 py-2"
                  />
                </label>
              </Card>
            </div>

            <div className="min-w-0 lg:col-start-1 lg:row-start-1">
              <TableOfContents
                items={game.sections.map(({ id, title }) => ({ href: id, label: title }))}
              />
            </div>

            <div className="min-w-0 lg:col-start-1 lg:row-start-2">
              {progressError && <p role="alert" className="mb-4">{progressError}</p>}
              {game.sections.map((section) => {
                const start = sectionOffset;
                sectionOffset += section.items.length;

                return (
                  <Section key={section.id} id={section.id} label={section.title} heading={3}>
                    <List
                      type="checkbox"
                      items={section.items}
                      checklist={{
                        checked: checked?.slice(start, sectionOffset) ?? [],
                        disabled: !checked || saving,
                        onChange: (index, value) => void saveCheckbox(start + index, value),
                      }}
                    />
                  </Section>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
