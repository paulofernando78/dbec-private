import { useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router";

import { AlbumCoverCarousel } from "@/components/content/AlbumCoverCarousel";
import { PageHeader } from "@/components/content/PageHeader";
import { albumId, bands } from "@/data/songs/index";
import { Card } from "@/components/ui/Card";

export function meta() {
  return [{ title: "Songs | Daily Basis English Course" }];
}

const artistCovers = bands
  .map((band) => ({
    id: band.slug,
    title: band.name,
    coverUrl: band.artistPhoto,
    to: `/songs/${band.slug}`,
  }))
  .sort((a, b) => a.title.localeCompare(b.title, "en"));

const searchItems = bands.flatMap((band) => {
  const bandPath = `/songs/${band.slug}`;
  const albums = new Map(band.songs.map(({ album, year }) => [album, year]));

  return [
    { title: band.name, context: [], to: `?artist=${band.slug}` },
    ...Array.from(albums, ([title, year]) => ({
      title,
      context: [band.name],
      to: `${bandPath}/albums/${albumId(title, year)}`,
    })),
    ...band.songs.map(({ title, slug, album }) => ({
      title,
      context: [band.name, album],
      to: `${bandPath}/${slug}`,
    })),
  ];
});

export default function Songs() {
  const { key: locationKey } = useLocation();
  const [searchParams] = useSearchParams();
  const selectedArtist = searchParams.get("artist") ?? undefined;
  const [query, setQuery] = useState("");
  const term = query.trim().toLowerCase();
  const matches = term ? searchItems.filter(({ title, context }) =>
    term.split(/\s+/).every((word) =>
      [...context, title].join(" ").toLowerCase().includes(word),
    ),
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
          aria-label="Search artists, albums, or songs"
          placeholder="Search artists, albums, or songs"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="w-full rounded-lg bg-(--background) px-3 py-2"
        />
        {term && (
          matches.length > 0 ? (
            <ul className="mt-2 grid gap-1">
              {matches.map(({ title, context, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    onClick={() => setQuery("")}
                    className="block rounded-lg px-3 py-2 hover:bg-(--background)"
                  >
                    {context.length > 0 && (
                      <span className="text-sm">{context.join(" — ")}{" — "}</span>
                    )}
                    <span className="font-semibold">{title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : <p role="status" className="mt-2 px-3">No artists, albums, or songs found.</p>
        )}
      </div>

      {artistCovers.length > 0 && (
        <Card id="artist-covers">
          <AlbumCoverCarousel
            key={locationKey}
            albums={artistCovers}
            initialId={selectedArtist}
            title="Artists & Bands"
            kind="artist"
          />
        </Card>
      )}
    </div>
  );
}
