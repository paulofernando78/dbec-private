import { useRef, useState, type PointerEvent } from "react";
import { ChevronLeft, ChevronRight, Disc3 } from "lucide-react";
import { Link } from "react-router";
import { Button } from "@/components/ui/Button";

type AlbumCover = {
  id: string;
  title: string;
  year?: number;
  to: string;
  coverUrl?: string;
};

export function AlbumCoverCarousel({
  albums,
  title,
  kind,
  initialId,
  onSelect,
}: {
  albums: AlbumCover[];
  title: string;
  kind: "artist" | "album";
  initialId?: string;
  onSelect?: (id: string) => void;
}) {
  const [selectedIndex, setSelectedIndex] = useState(
    () => Math.max(0, albums.findIndex((item) => item.id === initialId)),
  );
  const [dragOffset, setDragOffset] = useState(0);
  const drag = useRef<{ pointerId: number; startX: number; moved: boolean } | null>(null);
  const suppressClick = useRef(false);
  const album = albums[selectedIndex];

  const moveSelection = (offset: number) =>
    setSelectedIndex((index) => Math.max(0, Math.min(albums.length - 1, index + offset)));

  const moveDrag = (event: PointerEvent<HTMLDivElement>) => {
    const gesture = drag.current;
    if (!gesture || gesture.pointerId !== event.pointerId) return;
    const distance = event.clientX - gesture.startX;
    if (!gesture.moved) {
      if (Math.abs(distance) < 8) return;
      gesture.moved = true;
      suppressClick.current = true;
      event.currentTarget.setPointerCapture(event.pointerId);
    }
    setDragOffset(distance);
  };

  const endDrag = (event: PointerEvent<HTMLDivElement>) => {
    const gesture = drag.current;
    if (!gesture || gesture.pointerId !== event.pointerId) return;
    const distance = event.clientX - gesture.startX;
    if (event.type === "pointerup" && gesture.moved && Math.abs(distance) >= 40) {
      moveSelection(distance < 0 ? 1 : -1);
    }
    drag.current = null;
    setDragOffset(0);
  };

  return (
    <nav
      aria-label={title}
      className="rounded-xl bg-slate-950 p-4 text-white"
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
          event.preventDefault();
          const offset = event.key === "ArrowLeft" ? -1 : 1;
          moveSelection(offset);
        }
      }}
    >
      <h2 className="text-lg font-bold">{title}</h2>
      <div className="relative">
        <div
          className="relative isolate flex h-[min(56vw,18rem)] items-center justify-center overflow-clip [perspective:850px]"
          onPointerMove={moveDrag}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onLostPointerCapture={endDrag}
          onPointerLeave={(event) => {
            if (!drag.current?.moved) endDrag(event);
          }}
          onClickCapture={(event) => {
            if (suppressClick.current && event.detail > 0) {
              event.preventDefault();
              event.stopPropagation();
            }
            suppressClick.current = false;
          }}
        >
          {albums.map((item, index) => {
            const offset = index - selectedIndex;
            if (Math.abs(offset) > 2) return null;

            const coverProps = {
              "aria-label": item.title,
              onPointerDown: (event: PointerEvent<HTMLElement>) => {
                if (!event.isPrimary || event.button !== 0) return;
                suppressClick.current = false;
                drag.current = { pointerId: event.pointerId, startX: event.clientX, moved: false };
              },
              className: "absolute aspect-square w-[min(46%,15rem)] touch-none cursor-grab select-none overflow-hidden rounded-sm bg-slate-800 shadow-xl shadow-black/60 transition-transform duration-300 active:cursor-grabbing focus-visible:outline-2 focus-visible:outline-offset-2 motion-reduce:transition-none",
              style: {
                zIndex: 3 - Math.abs(offset),
                transitionDuration: dragOffset ? "0ms" : undefined,
                transform: `translateX(calc(${offset * 62}% + ${dragOffset}px)) rotateY(${offset === 0 ? 0 : -Math.sign(offset) * 48}deg) scale(${offset === 0 ? 1 : 0.83})`,
              },
            };
            const cover = (
              <>
                <Disc3 aria-hidden="true" className="absolute inset-0 m-auto size-1/3 text-slate-400" />
                {item.coverUrl && (
                  <img
                    src={item.coverUrl}
                    alt=""
                    draggable={false}
                    onError={(event) => { event.currentTarget.hidden = true; }}
                    className="absolute inset-0 size-full object-cover"
                  />
                )}
              </>
            );
            return onSelect ? (
              <button key={item.id} type="button" onClick={() => { setSelectedIndex(index); onSelect(item.id); }} draggable={false} {...coverProps}>
                {cover}
              </button>
            ) : (
              <Link key={item.id} to={item.to} draggable={false} {...coverProps}>
                {cover}
              </Link>
            );
          })}
        </div>
        <Button
          ariaLabel={`Previous ${kind}`}
          icon={<ChevronLeft aria-hidden="true" />}
          disabled={selectedIndex === 0}
          className="absolute! top-1/2 left-3 z-10 -translate-y-1/2 rounded-full! [&>span]:rounded-full!"
          onClick={() => moveSelection(-1)}
        />
        <Button
          ariaLabel={`Next ${kind}`}
          icon={<ChevronRight aria-hidden="true" />}
          disabled={selectedIndex === albums.length - 1}
          className="absolute! top-1/2 right-3 z-10 -translate-y-1/2 rounded-full! [&>span]:rounded-full!"
          onClick={() => moveSelection(1)}
        />
      </div>
      <div className="min-w-0 text-center">
        <div aria-live="polite" className="grid min-h-[3rem] place-items-center font-bold leading-6">
          <span>{album.title}{album.year && ` · ${album.year}`}</span>
        </div>
      </div>
    </nav>
  );
}
