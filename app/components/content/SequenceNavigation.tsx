import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/Button";

type SequenceNavigationProps = {
  previousLabel: string;
  nextLabel: string;
  onPrevious: () => void;
  onNext: () => void;
  nextDisabled?: boolean;
  ariaLabel?: string;
  dockScrollToTop?: boolean;
};

export function SequenceNavigation({
  previousLabel,
  nextLabel,
  onPrevious,
  onNext,
  nextDisabled = false,
  ariaLabel = "Content navigation",
  dockScrollToTop = false,
}: SequenceNavigationProps) {
  return (
    <nav
      className="relative mx-1 mt-4 grid grid-cols-[auto_1fr_1fr_auto] items-center gap-3"
      aria-label={ariaLabel}
    >
      <Button
        ariaLabel={`Previous: ${previousLabel}`}
        onClick={onPrevious}
        icon={<ChevronLeft />}
      />
      <b>{previousLabel}</b>
      <b className="text-right">{nextLabel}</b>
      {dockScrollToTop && (
        <div data-scroll-to-top-slot className="absolute right-0 bottom-13 z-10 size-10" />
      )}
      <Button
        ariaLabel={`Next: ${nextLabel}`}
        onClick={onNext}
        disabled={nextDisabled}
        icon={<ChevronRight />}
      />
    </nav>
  );
}
