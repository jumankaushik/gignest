"use client";

import { useState } from "react";

import ArtistCard from "../components/artists/ArtistCard";
import { artists } from "../data/artists";

export default function ArtistsPage() {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("All");

  // Dynamic genres
  const genres = [
    "All",
    ...new Set(artists.map((artist) => artist.genre)),
  ];

  // Filtering logic
  const filteredArtists = artists.filter((artist) => {
    const matchesLocation = artist.location
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesGenre =
      genre === "All" || artist.genre === genre;

    return matchesLocation && matchesGenre;
  });

  return (
    <main className="min-h-screen bg-[#f7f3ee] pt-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-14">
          <p className="uppercase tracking-[0.3em] text-sm text-black/50 mb-4">
            Our Artists
          </p>

          <h1 className="text-5xl md:text-7xl font-semibold">
            Discover Artists
          </h1>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <input
            type="text"
            placeholder="Search by location"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 px-5 py-4 rounded-full border border-black/10 bg-white/60 outline-none"
          />

          <select
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className="px-5 py-4 rounded-full border border-black/10 bg-white/60 outline-none"
          >
            {genres.map((item) => (
              <option
                key={item}
                value={item}
              >
                {item}
              </option>
            ))}
          </select>
        </div>

        {/* Artists Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
          {filteredArtists.length > 0 ? (
            filteredArtists.map((artist) => (
              <ArtistCard
                key={artist.id}
                artist={artist}
              />
            ))
          ) : (
            <p className="text-lg text-black/60">
              No artists found.
            </p>
          )}
        </div>
      </div>
    </main>
  );
}