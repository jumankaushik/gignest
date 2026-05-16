import ArtistCard from "../components/artists/ArtistCard";
import { artists } from "../data/artists";

export default function ArtistsPage() {
  return (
    <main className="min-h-screen bg-[#f7f3ee] pt-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14">
          <p className="uppercase tracking-[0.3em] text-sm text-black/50 mb-4">
            Our Artists
          </p>

          <h1 className="text-5xl md:text-7xl font-semibold">
            Discover Artists
          </h1>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <input
            type="text"
            placeholder="Search by location"
            className="flex-1 px-5 py-4 rounded-full border border-black/10 bg-white/60"
          />

          <select className="px-5 py-4 rounded-full border border-black/10 bg-white/60">
            <option>All Genres</option>
            <option>Indie Acoustic</option>
            <option>Soul & Jazz</option>
            <option>Live Percussion</option>
          </select>

          <button className="bg-black text-white px-8 rounded-full">
            Search
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
          {artists.map((artist) => (
            <ArtistCard
              key={artist.id}
              artist={artist}
            />
          ))}
        </div>
      </div>
    </main>
  );
}