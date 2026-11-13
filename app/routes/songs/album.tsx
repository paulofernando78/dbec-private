import { Link, useParams } from "react-router";
import { Disc3 } from "lucide-react";

import { PageHeader } from "@/components/content/PageHeader";
import { Card } from "@/components/ui/Card";
import { albumId, findBand } from "@/data/songs/index";

export default function SongsAlbum() {
  const { band: bandSlug, album } = useParams();
  const band = findBand(bandSlug);
  const bandPath = band ? `/songs/${band.slug}` : "/songs";
  const tracks = band?.songs.filter((song) => albumId(song.album, song.year) === album) ?? [];
  const firstTrack = tracks[0];

  if (!band || !firstTrack) {
    return (
      <Card inset title="Album not found">
        <Link className="font-bold underline" to={bandPath}>
          Back to {band?.name ?? "Songs"}
        </Link>
      </Card>
    );
  }

  const coverUrl = band.albumCovers?.[firstTrack.album];

  return (
    <div>
      <Link className="mb-3 inline-block text-sm font-bold underline" to={bandPath}>
        Back to {band.name}
      </Link>
      <PageHeader
        eyebrow={`Content • Songs • ${band.name}`}
        title={firstTrack.album}
        description={String(firstTrack.year)}
      />

      {coverUrl && (
        <img src={coverUrl} alt="" className="mb-4 aspect-square w-48 rounded-lg object-cover" />
      )}
      <Card inset title="Tracks">
        <ol className="grid divide-y divide-slate-300">
          {tracks.map((song) => (
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
