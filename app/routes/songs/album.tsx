import { useState } from "react";
import { Link, useParams } from "react-router";
import { Disc3 } from "lucide-react";

import { PageHeader } from "@/components/content/PageHeader";
import { AlbumCoverCarousel } from "@/components/content/AlbumCoverCarousel";
import { Card } from "@/components/ui/Card";
import { albumId, findBand } from "@/data/songs/index";

export default function SongsAlbum() {
  const { band: bandSlug, album } = useParams();
  const band = findBand(bandSlug);
  const bandPath = band ? `/songs/${band.slug}` : "/songs";
  const albums = band?.songs.reduce<{ id: string; title: string; year: number; songs: typeof band.songs }[]>(
    (groups, song) => {
      const existing = groups.find((group) => group.title === song.album && group.year === song.year);
      if (existing) existing.songs.push(song);
      else groups.push({ id: albumId(song.album, song.year), title: song.album, year: song.year, songs: [song] });
      return groups;
    },
    [],
  ) ?? [];
  const [selectedAlbum, setSelectedAlbum] = useState(album);
  const selected = albums.find((item) => item.id === selectedAlbum);
  const firstTrack = selected?.songs[0];

  if (!band || !firstTrack) {
    return (
      <Card inset title="Album not found">
        <Link className="font-bold underline" to={bandPath}>
          Back to {band?.name ?? "Songs"}
        </Link>
      </Card>
    );
  }

  const albumCovers = albums.map(({ id, title, year }) => ({
    id,
    title,
    year,
    coverUrl: band.albumCovers?.[title],
    to: `${bandPath}/albums/${id}`,
  }));

  return (
    <div>
      <PageHeader
        eyebrow={`Content • Songs • ${band.name}`}
        title={firstTrack.album}
        description={String(firstTrack.year)}
      />

      <AlbumCoverCarousel
        albums={albumCovers}
        initialId={selectedAlbum}
        title="Albums"
        kind="album"
        onSelect={setSelectedAlbum}
      />
      <Card inset title="Tracks">
        <ol className="grid divide-y divide-slate-300">
          {selected.songs.map((song) => (
            <li key={song.slug}>
              <Link
                to={`${bandPath}/${song.slug}`}
                className="flex items-center gap-3 rounded-lg px-2 py-3 font-bold hover:bg-(--background)"
              >
                <Disc3 aria-hidden="true" className="size-5 shrink-0" />
                {song.title}
              </Link>
            </li>
          ))}
        </ol>
      </Card>
    </div>
  );
}
