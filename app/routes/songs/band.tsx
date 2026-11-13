import { useState } from "react";
import { Link, useParams, useSearchParams } from "react-router";

import { PageHeader } from "@/components/content/PageHeader";
import { AlbumCoverCarousel } from "@/components/content/AlbumCoverCarousel";
import { Card } from "@/components/ui/Card";
import { albumId, findBand } from "@/data/songs/index";

export default function SongsBand() {
  const [query, setQuery] = useState("");
  const { band: bandSlug } = useParams();
  const band = findBand(bandSlug);
  const [searchParams] = useSearchParams();
  const selectedAlbum = searchParams.get("album") ?? undefined;

  if (!band) {
    return (
      <Card inset title="Band not found">
        <Link className="font-bold underline" to="/songs">
          Back to bands
        </Link>
      </Card>
    );
  }

  const albums = band.songs.reduce<
    { id: string; title: string; year: number; songs: typeof band.songs }[]
  >((groups, song) => {
    const album = groups.find(
      (group) => group.title === song.album && group.year === song.year,
    );

    if (album) {
      album.songs.push(song);
    } else {
      groups.push({
        id: albumId(song.album, song.year),
        title: song.album,
        year: song.year,
        songs: [song],
      });
    }

    return groups;
  }, []);
  const albumCovers = albums.map(({ id, title, year }) => ({
    id,
    title,
    year,
    coverUrl: band.albumCovers?.[title],
    to: `/songs/${band.slug}/albums/${id}`,
  }));

  const term = query.trim().toLowerCase();
  const matches = term ? [
    ...albums.map(({ id, title, year }) => ({
      title,
      detail: `Album · ${year}`,
      to: `/songs/${band.slug}/albums/${id}`,
    })),
    ...band.songs.map(({ slug, title, album }) => ({
      title,
      detail: `Song · ${album}`,
      to: `/songs/${band.slug}/${slug}`,
    })),
  ].filter(({ title }) => title.toLowerCase().includes(term)) : [];

  return (
    <div>
      <PageHeader
        eyebrow="Content • Songs"
        title={band.name}
        description={band.description}
      />

      {albums.length > 0 && (
        <div className="mb-4 rounded-xl bg-(--surface) p-4">
          <input
            type="search"
            aria-label="Search albums or songs"
            placeholder="Search albums or songs"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="w-full rounded-lg bg-(--background) px-3 py-2"
          />
          {term && (
            matches.length > 0 ? (
              <ul className="mt-2 grid max-h-64 gap-1 overflow-y-auto">
                {matches.map(({ title, detail, to }) => (
                  <li key={to}>
                    <Link
                      to={to}
                      onClick={() => setQuery("")}
                      className="block rounded-lg px-3 py-2 hover:bg-(--background)"
                    >
                      <span className="font-semibold">{title}</span>
                      <span className="ml-2 text-sm">{detail}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : <p role="status" className="mt-2 px-3">No albums or songs found.</p>
          )}
        </div>
      )}

      {albumCovers.length > 0 ? (
        <AlbumCoverCarousel
          key={`${band.slug}:${selectedAlbum ?? ""}`}
          albums={albumCovers}
          initialId={selectedAlbum}
          title="Albums"
          kind="album"
        />
      ) : (
        <Card inset title="Songs">
          <p className="text-slate-500">No songs added yet.</p>
        </Card>
      )}
    </div>
  );
}
