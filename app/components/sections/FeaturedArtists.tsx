import ArtistCard from "../artists/ArtistCard";
import { artists } from "@/app/data/artists";

export default function FeaturedArtists() {
  return (
    <section
      id="artists"
      className="section-padding"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-14">
          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-black/50 mb-4">
              Featured Artists
            </p>

            <h2 className="text-4xl md:text-6xl font-semibold">
              Discover Talent
            </h2>
          </div>

          <a
            href="/artists"
            className="hidden md:block text-lg underline underline-offset-4"
          >
            View All Artists
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artists.map((artist) => (
            <ArtistCard
              key={artist.id}
              artist={artist}
            />
          ))}
        </div>
      </div>
    </section>
  );
}