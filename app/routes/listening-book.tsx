import { useSession } from "@/hooks/useSession";
import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router";

import { MediaWrapper } from "@/components/content/MediaWrapper";
import { AudiobookQuestions } from "@/components/content/AudiobookQuestions";
import { PageHeader } from "@/components/content/PageHeader";
import { TableOfContents } from "@/components/content/TableOfContents";
import { AudioPlayer } from "@/components/ui/AudioPlayer";
import {
  audiobooks,
  audiobookPreview,
  availableAudiobookSlugs,
  type AudiobookSlug,
} from "@/data/skills/listening/audiobooks/index";
import { audiobookQuestions } from "@/data/skills/listening/audiobooks/audiobook-questions";
import { type AudiobookSection } from "@/data/skills/listening/audiobooks/starter/a-new-zealand-adventure";
import { getAudiobookSectionProgress, setAudiobookSectionCompleted } from "@/utils/audiobook-progress";
import { Checkbox } from "@/components/ui/Checkbox";

function SectionImage({
  section,
  className = "",
}: {
  section: Pick<AudiobookSection, "r2" | "imageAlt" | "localMedia" | "mediaPosition">;
  className?: string;
}) {
  const [missing, setMissing] = useState(false);
  const isFullWidth =
    section.mediaPosition === "top" || section.mediaPosition === "bottom";

  return (
    <div
      className={`w-full overflow-hidden rounded-xl ${isFullWidth ? "" : "sm:w-60 sm:shrink-0"} ${className}`}
    >
      {missing ? (
        <div className="grid min-h-48 place-items-center rounded-xl bg-(--surface) p-4 text-center text-sm text-slate-500">
          Add image to
          <br />
          {section.localMedia}
        </div>
      ) : (
        <img
          src={section.r2}
          alt={section.imageAlt ?? ""}
          loading="lazy"
          onError={() => setMissing(true)}
          className="mx-auto block h-auto w-full rounded-xl object-contain"
        />
      )}
    </div>
  );
}

const chapterImageSize = "mx-auto sm:max-w-[calc(35%+16rem)]";

export default function ListeningBookPage() {
  const { book } = useParams();
  const audiobook = book
    ? audiobooks[book as keyof typeof audiobooks]
    : undefined;
  const session = useSession();
  const [completedSections, setCompletedSections] = useState<Record<string, boolean>>({});
  const isAuthenticated = session === undefined ? null : Boolean(session);
  const isPreview = book === audiobookPreview.slug;
  const isLocalDraft = import.meta.env.DEV && book === "treasure-island";

  useEffect(() => {
    if (audiobook) setCompletedSections(getAudiobookSectionProgress(audiobook.slug));
  }, [audiobook]);

  if (
    !audiobook ||
    !availableAudiobookSlugs.has(audiobook.slug as AudiobookSlug)
  ) {
    return <Navigate to="/audiobooks" replace />;
  }

  if (!isPreview && !isLocalDraft && isAuthenticated !== true) {
    return isAuthenticated === null ? null : <Navigate to="/audiobooks" replace />;
  }

  const audiobookSections: readonly AudiobookSection[] = audiobook.sections;
  const [summary, ...sections] = audiobookSections;

  const renderSection = (section: AudiobookSection) => {
    const blocks = typeof section.text === "string" ? [{ text: section.text }] : section.text;
    const narration = blocks.flatMap(({ text }) => text === undefined ? [] : [text]).join("\n");
    const openingImage = blocks[0]?.r2 ? blocks[0] : undefined;
    const audioLocked = !isAuthenticated &&
      !(isPreview && section.id === audiobookPreview.audioSectionId);
    const questions =
      section.questions ??
      audiobookQuestions[audiobook.slug]?.[section.id] ??
      [];
    const answers = section.answers ?? [];

    return (
      <article
        key={section.id}
        id={section.id}
        className="scroll-mt-28 rounded-xl bg-(--surface) p-3 sm:p-4"
      >
        {openingImage && (
          <div className="rounded-lg bg-(--background)">
            <SectionImage section={{ ...openingImage, mediaPosition: "top" }} className={chapterImageSize} />
          </div>
        )}
        <header className={`mb-3 px-1 py-2 ${openingImage ? "mt-3" : ""}`}>
          <h2 className="text-2xl font-black">{section.title}</h2>
          {section.timestamp && (
            <p className="text-sm text-slate-500">{section.timestamp}</p>
          )}
        </header>

        <div className="@container">
          <MediaWrapper
            mediaPosition={section.mediaPosition ?? "right"}
            className="@max-[34rem]:flex-col!"
          >
            {section.r2 && (
              <MediaWrapper.Item>
                <SectionImage section={section} />
              </MediaWrapper.Item>
            )}
            <MediaWrapper.Content className="min-w-0 flex-1">
              {(section.r2Audio || narration.trim()) && (
                <AudioPlayer
                  src={section.r2Audio ?? ""}
                  fallbackText={narration}
                  locked={audioLocked}
                  ariaLabel={`${audioLocked ? "Log in to play" : "Play"} ${audiobook.title}: ${section.title}`}
                  background="background"
                />
              )}
              <div className="space-y-2 rounded-lg bg-(--background) p-3 text-lg leading-8">
                {(openingImage ? blocks.slice(1) : blocks).map((block, index) =>
                  block.r2 ? (
                    <SectionImage key={index} section={{ ...block, mediaPosition: "top" }} className={chapterImageSize} />
                  ) : (
                    <p key={index} className="whitespace-pre-line">{block.text}</p>
                  )
                )}
              </div>
              <AudiobookQuestions key={`${audiobook.slug}/${section.id}`} questions={questions} answers={answers} />
              {section.id !== summary?.id && (
                <div className="mt-3 flex items-center gap-2 rounded-lg bg-(--background) p-3 text-left text-sm font-bold">
                  <Checkbox
                    ariaLabel={`${section.title} done`}
                    checked={Boolean(completedSections[section.id])}
                    onCheckedChange={(completed) => {
                      setCompletedSections((current) => ({ ...current, [section.id]: completed }));
                      setAudiobookSectionCompleted(audiobook.slug, section.id, completed);
                    }}
                  />
                  <span>{section.title} done</span>
                </div>
              )}
            </MediaWrapper.Content>
          </MediaWrapper>
        </div>
      </article>
    );
  };

  return (
    <div>
      <PageHeader eyebrow="Skills • Listening • Audiobooks" title={audiobook.title} />

      <TableOfContents
        items={audiobookSections.map((section) => ({
          href: section.id,
          label: section.title,
        }))}
      />

      {summary && <div className="mb-4">{renderSection(summary)}</div>}

      <div className="grid gap-4">{sections.map(renderSection)}</div>


    </div>
  );
}
