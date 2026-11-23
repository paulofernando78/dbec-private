import { useState } from "react";
import type { ReactNode } from "react";
import { BookOpen, Check, Headphones, LockKeyhole, RotateCcw } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { ActionTextRow } from "@/components/content/ActionTextRow";
import {
  levelButtonClasses,
  levelGradientClasses,
  type LevelTheme,
} from "@/utils/level-theme";

export type ProgressCollectionItem = {
  id: string;
  eyebrow?: string;
  title: string;
  description: string;
  descriptionItalic?: boolean;
  meta?: string;
  metaItalic?: boolean;
  isCompleted: boolean;
  isLocked?: boolean;
  listening?: boolean;
  ariaLabel: string;
  onClick?: () => void;
};

type ProgressCollectionCardProps = {
  title: string;
  headerImage?: string;
  headerImageAlt?: string;
  eyebrow?: string;
  description?: string;
  completedCount: number;
  totalCount: number;
  resetAriaLabel: string;
  resetConfirmationMessage?: string;
  onReset: () => void;
  items: ProgressCollectionItem[];
  className?: string;
  disableResetWhenEmpty?: boolean;
  levelTheme?: LevelTheme;
  emptyMessage?: string;
  emptyMessageItalic?: boolean;
  itemIcon?: ReactNode;
};

export function ProgressCollectionCard({
  title,
  headerImage,
  headerImageAlt = "",
  eyebrow,
  description,
  completedCount,
  totalCount,
  resetAriaLabel,
  resetConfirmationMessage,
  onReset,
  items,
  className = "",
  disableResetWhenEmpty = false,
  levelTheme,
  emptyMessage,
  emptyMessageItalic = false,
  itemIcon,
}: ProgressCollectionCardProps) {
  const [isResetConfirmationOpen, setIsResetConfirmationOpen] = useState(false);

  const confirmReset = () => {
    onReset();
    setIsResetConfirmationOpen(false);
  };

  return (
    <>
      <article
        className={`overflow-hidden rounded-xl bg-(--surface) ${className}`}
      >
        <header className="flex items-start justify-between gap-4 border-b border-gray-200 bg-gray-200 p-4 dark:border-gray-600 dark:bg-gray-700">
          <div>
            {eyebrow && (
              <p className="text-xs font-bold uppercase text-orange-700!">
                {eyebrow}
              </p>
            )}
            <h2 className="text-2xl font-black text-black dark:text-(--text-color)">
              {title}
            </h2>
            {headerImage && (
              <img
                src={headerImage}
                alt={headerImageAlt}
                className="mt-3 h-auto max-h-28 max-w-full object-contain object-left [image-rendering:pixelated]"
              />
            )}
            {description && (
              <p className="text-lg text-slate-500">{description}</p>
            )}
          </div>

          <div className="flex shrink-0 items-center gap-3">
            <span className="rounded-lg border border-gray-300 bg-white px-2 py-1 text-xs text-black dark:bg-(--background) dark:text-(--text-color)">
              {completedCount} / {totalCount}
            </span>
            <Button
              ariaLabel={resetAriaLabel}
              icon={<RotateCcw />}
              onClick={() => setIsResetConfirmationOpen(true)}
              disabled={disableResetWhenEmpty && completedCount === 0}
            />
          </div>
        </header>

        {items.length > 0 && (
          <ol className="px-4 py-4">
            {items.map((item, index) => (
              <ActionTextRow
                key={item.id}
                className="relative min-h-36 pb-5 last:min-h-15 last:pb-0"
                actionSize="size-15"
                textAtTop
                gap="gap-4"
                action={
                  <>
                    {index < items.length - 1 && (
                  <span
                    aria-hidden="true"
                    className={`absolute -bottom-5 left-6.5 top-13 z-0 w-2
                      ${
                        item.isCompleted && !item.isLocked
                          ? levelTheme
                            ? levelGradientClasses[levelTheme]
                            : "bg-slate-400 dark:bg-slate-500"
                          : "bg-slate-300 dark:bg-slate-600"
                      }`}
                      />
                    )}
                    <Button
                  ariaLabel={item.ariaLabel}
                  ariaDisabled={item.isLocked}
                  icon={
                    item.isLocked ? (
                      <LockKeyhole aria-hidden="true" />
                    ) : item.listening ? (
                      <Headphones aria-hidden="true" />
                    ) : item.isCompleted ? (
                      <Check aria-hidden="true" />
                    ) : (
                      itemIcon ?? <BookOpen aria-hidden="true" />
                    )
                  }
                  onClick={item.onClick}
                  className={`z-10 size-15! ${
                    item.isCompleted && !item.isLocked
                      ? levelTheme
                        ? levelButtonClasses[levelTheme]
                        : "brightness-90"
                      : ""
                  }`}
                    />
                  </>
                }
              >
                <div>
                  {item.eyebrow && (
                    <span className="block text-xs font-bold uppercase text-orange-700!">
                      {item.eyebrow}
                    </span>
                  )}
                  <h3 className="text-xl font-black text-black dark:text-(--text-color)">
                    {item.title}
                  </h3>
                  <p
                    className={`text-base md:text-lg ${item.descriptionItalic ? "italic" : ""}`}
                  >
                    {item.description}
                  </p>
                  {item.meta && (
                    <p
                      className={`text-lg text-slate-500 ${item.metaItalic ? "italic" : ""}`}
                    >
                      {item.meta}
                    </p>
                  )}
                </div>
              </ActionTextRow>
            ))}
          </ol>
        )}

        {items.length === 0 && emptyMessage && (
          <p
            className={`px-4 py-5 text-slate-500 ${emptyMessageItalic ? "italic" : ""}`}
          >
            {emptyMessage}
          </p>
        )}
      </article>

      {isResetConfirmationOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-[2px]"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setIsResetConfirmationOpen(false);
            }
          }}
        >
          <div
            className="w-full max-w-sm rounded-xl bg-(--background) p-4 text-(--text-color) shadow-xl"
            role="dialog"
            aria-modal="true"
            aria-labelledby="reset-progress-title"
          >
            <h2 id="reset-progress-title" className="text-xl font-black">
              Reset progress?
            </h2>
            <p className="mt-2 text-slate-500">
              {resetConfirmationMessage ??
                `Are you sure you want to reset the progress for ${title}?`}
            </p>
            <div className="mt-4 flex justify-end gap-3">
              <Button onClick={() => setIsResetConfirmationOpen(false)}>
                Cancel
              </Button>
              <Button onClick={confirmReset}>Reset</Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
