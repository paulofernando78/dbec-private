import { type AudiobookSection } from "@/data/skills/listening/audiobooks/index";

import { useSession } from "@/hooks/useSession";
import { useEffect, useState, type ReactNode } from "react";

import { Navigate, useParams } from "react-router";

import { MediaWrapper } from "@/components/content/MediaWrapper";
import { AudiobookQuestions } from "@/components/content/AudiobookQuestions";
import { FlipCards } from "@/components/content/FlipCards";
import { PageHeader } from "@/components/content/PageHeader";
import { TableOfContents } from "@/components/content/TableOfContents";
import { AudioPlayer } from "@/components/ui/AudioPlayer";
import {
  audiobooks,
  audiobookPreview,
  availableAudiobookSlugs,
  type AudiobookSlug,
} from "@/data/skills/listening/audiobooks/index";
import {
  getAudiobookSectionProgress,
  setAudiobookSectionCompleted,
} from "@/utils/audiobook-progress";
import { Checkbox } from "@/components/ui/Checkbox";

import { type ContentToken } from "@/helpers/content";

const TOKEN_TAG: Partial<
  Record<NonNullable<ContentToken["type"]>, "em" | "strong" | "mark">
> = {
  italic: "em",
  bold: "strong",
  strong: "strong",
  mark: "mark",
  "bold-mark": "mark",
  attentionMark: "mark",
};

const extractPlainText = (value: unknown): string => {
  if (typeof value === "string" || typeof value === "number") {
    return String(value);
  }
  if (Array.isArray(value)) {
    return value.map(extractPlainText).join("");
  }
  if (value && typeof value === "object") {
    return (value as ContentToken).part ?? "";
  }
  return "";
};

const renderContentPart = (
  value: unknown,
  key?: string | number,
): ReactNode => {
  if (typeof value === "string" || typeof value === "number") {
    return <span key={key}>{value}</span>;
  }
  if (Array.isArray(value)) {
    return value.map((item, idx) =>
      renderContentPart(item, `${key ?? "p"}-${idx}`),
    );
  }
  if (value && typeof value === "object") {
    const token = value as ContentToken;
    const Tag = token.type ? TOKEN_TAG[token.type] : undefined;
    return Tag ? (
      <Tag key={key}>{token.part}</Tag>
    ) : (
      <span key={key}>{token.part}</span>
    );
  }
  return null;
};

function SectionImage({
  section,
  className = "",
}: {
  section: Pick<
    AudiobookSection,
    "r2" | "imageAlt" | "localMedia" | "mediaPosition"
  >;
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

const retellIntro =
  "Look at each picture and retell that part of the story, then flip the card to check.";

export default function ListeningBookPage() {
  const { book } = useParams();
  const audiobook = book
    ? audiobooks[book as keyof typeof audiobooks]
    : undefined;
  const session = useSession();
  const [completedSections, setCompletedSections] = useState<
    Record<string, boolean>
  >({});
  const isAuthenticated = session === undefined ? null : Boolean(session);
  const isPreview = book === audiobookPreview.slug;
  const isLocalDraft = import.meta.env.DEV && (book === "treasure-island" || book === "tinkers-island");

  useEffect(() => {
    if (audiobook)
      setCompletedSections(getAudiobookSectionProgress(audiobook.slug));
  }, [audiobook]);

  if (
    !audiobook ||
    !availableAudiobookSlugs.has(audiobook.slug as AudiobookSlug)
  ) {
    return <Navigate to="/audiobooks" replace />;
  }

  if (!isPreview && !isLocalDraft && isAuthenticated !== true) {
    return isAuthenticated === null ? null : (
      <Navigate to="/audiobooks" replace />
    );
  }

  const audiobookSections: readonly AudiobookSection[] = audiobook.sections;
  const [summary, ...sections] = audiobookSections;

  const renderSection = (section: AudiobookSection) => {
    const blocks =
      section.text === undefined
        ? []
        : typeof section.text === "string"
          ? [{ text: section.text }]
          : section.text;

    const narration = blocks
      .flatMap((block) => {
        if (!("text" in block) || block.text === undefined) return [];
        return [extractPlainText(block.text)];
      })
      .join("\n");

    const openingImage = blocks[0]?.r2 ? blocks[0] : undefined;
    const audioLocked =
      !isAuthenticated &&
      !(isPreview && section.id === audiobookPreview.audioSectionId);
    const questions = section.questions ?? [];
    const answers = section.answers ?? [];

    return (
      <article
        key={section.id}
        id={section.id}
        className="scroll-mt-28 rounded-xl bg-(--surface) p-3 sm:p-4"
      >
        {openingImage && (
          <div className="rounded-lg bg-(--background)">
            <SectionImage
              section={{ ...openingImage, mediaPosition: "top" }}
              className={chapterImageSize}
            />
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
              <div>
                {!section.retell && (section.r2Audio || narration.trim()) && (
                  <div className="sticky top-0 z-10">
                    <AudioPlayer
                      src={section.r2Audio ?? ""}
                      fallbackText={narration}
                      locked={audioLocked}
                      ariaLabel={`${audioLocked ? "Log in to play" : "Play"} ${audiobook.title}: ${section.title}`}
                      background="background"
                      ttsFolder={audiobook.mediaFolder}
                      ttsName={section.id}
                    />
                  </div>
                )}
                {(openingImage ? blocks.slice(1) : blocks).length > 0 && (
                  <div className="space-y-2 rounded-lg bg-(--background) p-3 text-lg leading-8">
                    {(openingImage ? blocks.slice(1) : blocks).map(
                      (block, index) => {
                        if (block.r2) {
                          return (
                            <SectionImage
                              key={index}
                              section={{ ...block, mediaPosition: "top" }}
                              className={chapterImageSize}
                            />
                          );
                        }

                        const blockText = "text" in block ? block.text : undefined;

                        return (
                          <p key={index} className="whitespace-pre-line">
                            {renderContentPart(blockText, index)}
                          </p>
                        );
                      },
                    )}
                  </div>
                )}
              </div>
              {section.footnotes && section.footnotes.length > 0 && (
                <aside className="mt-3 rounded-lg bg-(--background) p-3" aria-label="Footnotes">
                  <h3 className="mb-2 text-lg font-black">Footnotes</h3>
                  <ol className="list-inside list-decimal space-y-2 text-sm leading-6">
                    {section.footnotes.map((note, index) => (
                      <li key={index}>{note}</li>
                    ))}
                  </ol>
                </aside>
              )}
              <AudiobookQuestions
                key={`${audiobook.slug}/${section.id}`}
                questions={questions}
                answers={answers}
              />
              {section.retell && (
                <div className="mt-3 rounded-lg bg-(--background) p-3">
                  <p className="mb-4">{retellIntro}</p>
                  <FlipCards
                    cards={section.retell.cards.map((card) => ({
                      frontImg: card.img,
                      frontAlt: card.alt,
                      backContent: card.summary,
                      className: "aspect-3/4!"
                    }))}
                  />
                </div>
              )}
              {section.id !== summary?.id && (
                <div className="mt-3 flex items-center gap-2 rounded-lg bg-(--background) p-3 text-left text-sm font-bold">
                  <Checkbox
                    ariaLabel={`${section.title} done`}
                    checked={Boolean(completedSections[section.id])}
                    onCheckedChange={(completed) => {
                      setCompletedSections((current) => ({
                        ...current,
                        [section.id]: completed,
                      }));
                      setAudiobookSectionCompleted(
                        audiobook.slug,
                        section.id,
                        completed,
                      );
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
      <PageHeader
        eyebrow="Skills • Listening • Audiobooks"
        title={audiobook.title}
      />

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
