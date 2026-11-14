import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useParams } from "react-router";

import { PageHeader } from "@/components/content/PageHeader";
import { AlbumCoverCarousel } from "@/components/content/AlbumCoverCarousel";
import { Card } from "@/components/ui/Card";
import { VideoPlayer } from "@/components/ui/VideoPlayer";
import { albumId, findBand, findSong } from "@/data/songs/index";

const VIDEO_SCROLL_OFFSET = 16;

export default function SongsSong() {
  const { key: navigationKey } = useLocation();
  const { band: bandSlug, song: songSlug } = useParams();
  const band = findBand(bandSlug);
  const song = band ? findSong(band, songSlug) : undefined;
  const youtubeUrl = song?.youtubeUrl;
  const videoRef = useRef<HTMLElement>(null);
  const [floating, setFloating] = useState<{ right: number; top: number; width: number } | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    const scrollArea = video?.closest<HTMLElement>("[data-scroll-container]");
    if (!video || !scrollArea) return;

    const top = scrollArea.scrollTop + video.getBoundingClientRect().top
      - scrollArea.getBoundingClientRect().top - scrollArea.clientTop
      - VIDEO_SCROLL_OFFSET;
    scrollArea.scrollTo({ top, behavior: "smooth" });
  }, [navigationKey, youtubeUrl]);

  useEffect(() => {
    const video = videoRef.current;
    if (!youtubeUrl || !video) return;
    const scrollArea = video.closest("[data-scroll-container]");
    if (!scrollArea) return;
    const update = () => {
      const { top, right, width, height } = scrollArea.getBoundingClientRect();
      setFloating(video.getBoundingClientRect().bottom <= top && width >= 266 && height >= 250
        ? {
            right: window.innerWidth - right + 0,
            top,
            width: Math.min(160, width - 10),
          }
        : null);
    };
    update();
    scrollArea.addEventListener("scroll", update, { passive: true });
    const resize = new ResizeObserver(update);
    resize.observe(scrollArea);
    resize.observe(video);
    return () => {
      scrollArea.removeEventListener("scroll", update);
      resize.disconnect();
    };
  }, [youtubeUrl]);

  if (!band || !song) {
    return (
      <Card inset title="Song not found">
        <Link className="font-bold underline" to={band ? `/songs/${band.slug}` : "/songs"}>
          Back to {band ? band.name : "bands"}
        </Link>
      </Card>
    );
  }
  const albumCovers = Array.from(new Map(band.songs.map((track) => {
    const id = albumId(track.album, track.year);
    return [id, {
      id,
      title: track.album,
      year: track.year,
      coverUrl: band.albumCovers?.[track.album],
      to: `/songs/${band.slug}/albums/${id}`,
    }] as const;
  })).values());
  const youtubeSearchUrl = new URL("https://www.youtube.com/results");
  youtubeSearchUrl.searchParams.set("search_query", `${band.name} ${song.title} official audio`);

  return (
    <div>
      <PageHeader
        eyebrow={`Content • Songs • ${band.name}`}
        title={song.title}
        description={`${song.album} (${song.year})`}
      />

      <Card className="mb-4">
        <AlbumCoverCarousel
          albums={albumCovers}
          initialId={albumId(song.album, song.year)}
          title="Albums"
          kind="album"
        />
      </Card>

      <Card className="grid gap-4">
        {youtubeUrl ? <section ref={videoRef} className="rounded-xl">
          <div className={floating ? "aspect-video" : undefined}>
            <div className={floating ? "fixed z-40" : undefined} style={floating ?? undefined}>
              <Card className={floating ? "shadow-xl" : "bg-transparent p-0!"}>
                <VideoPlayer
                  src={youtubeUrl}
                  compact={Boolean(floating)}
                  withBottomMargin={false}
                />
              </Card>
            </div>
          </div>
        </section> : (
          <a
            href={youtubeSearchUrl.href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-(--background) p-4 font-bold underline"
          >
            Search on YouTube
          </a>
        )}

        <section className="rounded-xl bg-(--background) p-4">
          <h2 className="mb-4 text-lg font-bold">{song.title}</h2>
          {song.lines.length > 0 ? (
            <div className="grid gap-4">
              {song.lines.map((line, index) => (
                <div
                  key={`${line.english}-${index}`}
                  className="last:pb-0"
                >
                  <p className="font-semibold">{line.english}</p>
                  <p className="mt-1 text-slate-500">{line.portuguese}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-slate-500">No English or Portuguese content added yet.</p>
          )}
        </section>
      </Card>
    </div>
  );
}
