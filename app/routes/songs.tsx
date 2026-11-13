import { useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router";

import { AlbumCoverCarousel } from "@/components/content/AlbumCoverCarousel";
import { PageHeader } from "@/components/content/PageHeader";
import { albumId, bands } from "@/data/songs/index";

export function meta() {
  return [{ title: "Songs | Daily Basis English Course" }];
}

const artistCovers = bands.flatMap((band) => {
  const coverUrl = band.artistPhoto ?? Object.values(band.albumCovers ?? {})[0];
  return coverUrl ? [{
    id: band.slug,
    title: band.name,
    coverUrl,
    to: `/songs/${band.slug}`,
  }] : [];
});

const searchItems = bands.flatMap((band) => {
  const bandPath = `/songs/${band.slug}`;
  const albums = new Map(band.songs.map(({ album, year }) => [album, year]));

  return [
    { title: band.name, artist: "", to: `?artist=${band.slug}` },
    ...Array.from(albums, ([title, year]) => ({
      title,
      artist: band.name,
      to: `${bandPath}/albums/${albumId(title, year)}`,
    })),
  ];
});

export default function Songs() {
  const { key: locationKey } = useLocation();
  const [searchParams] = useSearchParams();
  const selectedArtist = searchParams.get("artist") ?? undefined;
  const [query, setQuery] = useState("");
  const term = query.trim().toLowerCase();
  const matches = term ? searchItems.filter(({ title, artist }) =>
    `${title} ${artist}`.toLowerCase().includes(term),
  ) : [];

  return (
    <div>
      <PageHeader
        eyebrow="Artists"
        title="Songs"
        description="Learn English through bands and songs."
      />

      <div className="mb-4 rounded-xl bg-(--surface) p-4">
        <input
          type="search"
          aria-label="Search artists or albums"
          placeholder="Search artists or albums"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="w-full rounded-lg bg-(--background) px-3 py-2"
        />
        {term && (
          matches.length > 0 ? (
            <ul className="mt-2 grid gap-1">
              {matches.map(({ title, artist, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    onClick={() => setQuery("")}
                    className="block rounded-lg px-3 py-2 hover:bg-(--background)"
                  >
                    <span className="font-semibold">{title}</span>
                    {artist && <span className="ml-2 text-sm">{artist}</span>}
                  </Link>
                </li>
              ))}
            </ul>
          ) : <p role="status" className="mt-2 px-3">No artists or albums found.</p>
        )}
      </div>

      {artistCovers.length > 0 && (
        <div id="artist-covers">
          <AlbumCoverCarousel
            key={locationKey}
            albums={artistCovers}
            initialId={selectedArtist}
            title="Artists & Bands"
            kind="artist"
          />
        </div>
      )}
    </div>
  );
}
