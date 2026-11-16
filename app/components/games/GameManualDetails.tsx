import { useCallback, useEffect, useRef, useState } from "react";
import { BookOpen, ChevronLeft, ChevronRight, Minus, Plus, Search, ZoomIn, ZoomOut } from "lucide-react";

type ReactPdfModule = typeof import("react-pdf");

type GameManualDetailsProps = {
  manualUrl: string;
  pageCount?: number;
  pageOffset?: number;
  searchPages?: string[];
  title: string;
};

export function GameManualDetails({ manualUrl, pageCount = 1, pageOffset = 0, searchPages = [], title }: GameManualDetailsProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const pageRefs = useRef(new Map<number, HTMLDivElement>());
  const visibility = useRef(new Map<number, number>());
  const [pdfModule, setPdfModule] = useState<ReactPdfModule | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(Math.max(1, pageCount - pageOffset));
  const [viewportWidth, setViewportWidth] = useState(0);
  const [zoom, setZoom] = useState(100);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchedQuery, setSearchedQuery] = useState("");
  const [searchResults, setSearchResults] = useState<number[]>([]);
  const [searchIndex, setSearchIndex] = useState(-1);

  useEffect(() => {
    void import("react-pdf").then((module) => {
      module.pdfjs.GlobalWorkerOptions.workerSrc = new URL(
        "pdfjs-dist/build/pdf.worker.min.mjs",
        import.meta.url,
      ).toString();
      setPdfModule(module);
    });
  }, []);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const resizeObserver = new ResizeObserver(([entry]) => {
      setViewportWidth(entry.contentRect.width);
    });
    resizeObserver.observe(viewport);

    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const pageNumber = Number((entry.target as HTMLElement).dataset.pageNumber);
          visibility.current.set(pageNumber, entry.intersectionRatio);
        }

        const mostVisible = [...visibility.current.entries()].reduce(
          (best, candidate) => candidate[1] > best[1] ? candidate : best,
          [currentPage, 0],
        );
        if (mostVisible[1] > 0) setCurrentPage(mostVisible[0]);
      },
      { root: viewport, threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    for (const page of pageRefs.current.values()) observer.observe(page);
    return () => observer.disconnect();
  }, [currentPage, totalPages, viewportWidth]);

  const setPageRef = useCallback((pageNumber: number, node: HTMLDivElement | null) => {
    if (node) pageRefs.current.set(pageNumber, node);
    else pageRefs.current.delete(pageNumber);
  }, []);

  const goToPage = (pageNumber: number) => {
    const viewport = viewportRef.current;
    const page = pageRefs.current.get(pageNumber);
    if (!viewport || !page) return;

    const top = page.getBoundingClientRect().top
      - viewport.getBoundingClientRect().top
      + viewport.scrollTop
      - 8;
    viewport.scrollTo({ behavior: "smooth", top });
  };

  const findInManual = () => {
    const normalizeSearchText = (value: string) =>
      value.toLocaleLowerCase().replace(/\s+/g, "");
    const query = normalizeSearchText(searchQuery.trim());
    if (!query) return;

    if (query === searchedQuery && searchResults.length > 0) {
      const nextIndex = (searchIndex + 1) % searchResults.length;
      setSearchIndex(nextIndex);
      goToPage(searchResults[nextIndex]);
      return;
    }

    const navigableSearchPages = searchPages.slice(pageOffset);
    let matches = navigableSearchPages.flatMap((text, index) =>
      normalizeSearchText(text).includes(query) ? [index + 1] : [],
    );
    if (matches.length === 0) {
      const words = searchQuery.toLocaleLowerCase().match(/[a-z0-9]+/g) ?? [];
      const minimumMatches = Math.max(2, Math.ceil(words.length * 0.6));
      matches = navigableSearchPages.flatMap((text, index) => {
        const pageText = text.toLocaleLowerCase();
        const matchingWords = words.filter((word) => pageText.includes(word)).length;
        return matchingWords >= minimumMatches ? [index + 1] : [];
      });
    }

    setSearchedQuery(query);
    setSearchResults(matches);
    setSearchIndex(matches.length > 0 ? 0 : -1);
    if (matches.length > 0) goToPage(matches[0]);
  };

  const renderedWidth = Math.max(viewportWidth - 16, 1) * (zoom / 100);
  const Document = pdfModule?.Document;
  const Page = pdfModule?.Page;

  return (
    <details className="group mb-4 rounded-xl bg-(--surface) p-4">
      <summary className="flex cursor-pointer list-none items-center gap-3 font-bold marker:content-none">
        <BookOpen aria-hidden="true" className="size-5 shrink-0" />
        {title} Manual
        <span className="ml-auto grid size-6 shrink-0 place-items-center" aria-hidden="true">
          <Plus className="size-5 group-open:hidden" />
          <Minus className="hidden size-5 group-open:block" />
        </span>
      </summary>
      <p className="mb-3 mt-4 text-sm text-slate-500">
        Consult the manual when the game asks an ownership question.
      </p>
      <form
        className="mb-2 flex items-center gap-2"
        onSubmit={(event) => {
          event.preventDefault();
          findInManual();
        }}
      >
        <input
          aria-label="Find in manual"
          className="min-w-0 flex-1 rounded-lg bg-(--background) px-3 py-2 text-sm outline-none"
          onChange={(event) => setSearchQuery(event.target.value)}
          placeholder="Find in manual…"
          type="search"
          value={searchQuery}
        />
        <button
          aria-label="Find next"
          className="button flex size-10 shrink-0 items-center justify-center"
          disabled={!searchQuery.trim()}
          type="submit"
        >
          <Search aria-hidden="true" className="size-5" />
        </button>
        {searchedQuery && (
          <span aria-live="polite" className="shrink-0 text-xs text-slate-500">
            {searchResults.length > 0 ? `${searchIndex + 1} / ${searchResults.length}` : "No results"}
          </span>
        )}
      </form>
      <div aria-label="Manual controls" className="mb-2 flex items-center justify-end gap-2" role="toolbar">
        <button aria-label="Previous page" className="button flex size-10 items-center justify-center" disabled={currentPage <= 1} onClick={() => goToPage(Math.max(1, currentPage - 1))} type="button">
          <ChevronLeft aria-hidden="true" className="size-4" />
        </button>
        <output aria-live="polite" className="min-w-16 text-center text-sm font-semibold">
          {currentPage} / {totalPages}
        </output>
        <button aria-label="Next page" className="button flex size-10 items-center justify-center" disabled={currentPage >= totalPages} onClick={() => goToPage(Math.min(totalPages, currentPage + 1))} type="button">
          <ChevronRight aria-hidden="true" className="size-4" />
        </button>
        <button aria-label="Zoom out" className="button flex size-10 items-center justify-center" disabled={zoom <= 50} onClick={() => setZoom((value) => Math.max(50, value - 25))} type="button">
          <ZoomOut aria-hidden="true" className="size-5" />
        </button>
        <button aria-label="Zoom in" className="button flex size-10 items-center justify-center" disabled={zoom >= 200} onClick={() => setZoom((value) => Math.min(200, value + 25))} type="button">
          <ZoomIn aria-hidden="true" className="size-5" />
        </button>
      </div>
      <div ref={viewportRef} className="h-96 overflow-auto rounded-xl bg-(--background) p-2">
        {Document && Page ? (
          <Document file={manualUrl} loading={<p className="p-4 text-sm text-slate-500">Loading manual…</p>} onLoadSuccess={(document) => setTotalPages(Math.max(1, document.numPages - pageOffset))}>
            <div className="flex w-max min-w-full flex-col items-center gap-4">
              {Array.from({ length: totalPages }, (_, index) => {
                const pageNumber = index + 1;
                return (
                  <div key={pageNumber} ref={(node) => setPageRef(pageNumber, node)} className="overflow-hidden rounded-lg shadow-sm" data-page-number={pageNumber}>
                    <Page pageNumber={pageNumber + pageOffset} renderAnnotationLayer={false} renderTextLayer={false} width={renderedWidth} />
                  </div>
                );
              })}
            </div>
          </Document>
        ) : (
          <p className="p-4 text-sm text-slate-500">Loading manual…</p>
        )}
      </div>
    </details>
  );
}
