import { useEffect, useRef, useState } from "react";
import { Map, X } from "lucide-react";
import { useNavigate, useParams } from "react-router";

import { PageHeader } from "@/components/content/PageHeader";
import { TableOfContents } from "@/components/content/TableOfContents";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { List } from "@/components/content/List";
import { JsDosPlayer } from "@/components/games/JsDosPlayer";
import { GameManualDetails } from "@/components/games/GameManualDetails";

import { getGameSlug } from "@/data/content/games/old-pc-games/games-slug";
import { gamesLucasArtsCardData } from "@/data/content/games/old-pc-games/lucas-arts/games-lucas-arts-card-data";
import { gamesSierraCardData } from "@/data/content/games/old-pc-games/sierra/games-sierra-card-data";

const daventryMapUrl = "/media/games/sierra/kings-quest-i/daventry-map.webp";

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
  const [isMapOpen, setIsMapOpen] = useState(false);
  const mapDialogRef = useRef<HTMLDialogElement>(null);
  const checked = progress?.gameId === gameHref ? progress.checked : undefined;

  useEffect(() => {
    if (!isMapOpen) return;
    const dialog = mapDialogRef.current;
    dialog?.showModal();
    return () => dialog?.close();
  }, [isMapOpen]);

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
            <div className="sticky top-4 z-10 min-w-0 self-start lg:col-start-2 lg:row-start-1 lg:row-span-2">
              <Card className="bg-transparent p-0!">
                {game.bundleUrl ? (
                  <JsDosPlayer
                    bundleUrl={game.bundleUrl}
                    gameId={gameHref}
                    title={gameCard?.label ?? game.whiteboard.title}
                  />
                ) : (
                  <div className="grid aspect-4/3 place-items-center rounded-lg bg-slate-950 px-4 text-center text-sm text-slate-200">
                    Coming soon
                  </div>
                )}
              </Card>
            </div>

            <div className="min-w-0 lg:col-start-1 lg:row-start-1">
              <TableOfContents
                subtitle={gameHref === "/games/sierra/kings-quest-i" ? (
                  <Button
                    ariaLabel="Open Daventry map"
                    icon={<Map aria-hidden="true" />}
                    onClick={() => setIsMapOpen(true)}
                    className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--text-color)"
                  >
                    Daventry map
                  </Button>
                ) : undefined}
                items={game.sections.map(({ id, title }) => ({ href: id, label: title }))}
              />
              {game.manualUrl && (
                <GameManualDetails
                  manualUrl={game.manualUrl}
                  pageCount={game.manualPageCount}
                  pageOffset={game.manualPageOffset}
                  searchPages={game.manualSearchPages}
                  title={gameCard?.label ?? game.whiteboard.title}
                />
              )}
            </div>

            <div className="min-w-0 lg:col-start-1 lg:row-start-2">
              {progressError && <p role="alert" className="mb-4">{progressError}</p>}
              {game.sections.map((section) => {
                const start = sectionOffset;
                sectionOffset += section.items.length;

                return (
                  <Section key={section.id} id={section.id} label={section.title} heading={3} inset={false}>
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
      {isMapOpen && (
        <dialog
          ref={mapDialogRef}
          aria-label="Daventry map"
          onClose={() => setIsMapOpen(false)}
          className="m-0 h-dvh max-h-none w-screen max-w-none bg-slate-950 p-4 text-white"
        >
          <div className="flex h-full min-h-0 flex-col gap-4">
            <div className="flex shrink-0 items-center justify-between gap-4">
              <h2 className="text-xl font-bold">Daventry map</h2>
              <Button
                ariaLabel="Close Daventry map"
                icon={<X />}
                onClick={() => setIsMapOpen(false)}
                className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              />
            </div>
            <img
              src={daventryMapUrl}
              alt="Map of Daventry in King's Quest I"
              className="min-h-0 w-full flex-1 object-contain [image-rendering:pixelated]"
            />
          </div>
        </dialog>
      )}
    </main>
  );
}
