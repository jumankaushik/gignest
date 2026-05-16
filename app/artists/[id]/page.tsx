import { artists } from "@/app/data/artists";
import Image from "next/image";
import BookingModal from "@/app/components/artists/BookingModel";

export default async function ArtistDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const artist = artists.find(
    (artist) => artist.id.toString() === id
  );

  if (!artist) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Artist not found
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#f7f3ee] pt-28">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Artist Image */}
          <div className="overflow-hidden rounded-[40px]">
            <img
              src={artist.image}
              alt={artist.name}
              className="w-full h-[700px] object-cover"
            />
          </div>

          {/* Artist Info */}
          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-black/50 mb-4">
              {artist.location}
            </p>

            <h1 className="text-5xl md:text-7xl font-semibold">
              {artist.name}
            </h1>

            <p className="text-2xl text-black/60 mt-5">
              {artist.genre}
            </p>

            <p className="mt-8 text-xl leading-relaxed text-black/80">
              {artist.intro}
            </p>

            <p className="mt-6 text-lg leading-relaxed text-black/70">
              {artist.bio}
            </p>

            {/* Availability */}
            <div className="mt-10">
              <h3 className="text-xl font-semibold mb-4">
                Available Dates
              </h3>

              <div className="flex flex-wrap gap-3">
                {artist.availability.map((date) => (
                  <span
                    key={date}
                    className="px-5 py-3 rounded-full bg-white border border-black/10 text-sm shadow-sm"
                  >
                    {date}
                  </span>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-10">
              <a
                href={artist.instagram}
                target="_blank"
                className="px-6 py-3 rounded-full border border-black/10"
              >
                Instagram
              </a>

              <a
                href={artist.youtube}
                target="_blank"
                className="px-6 py-3 rounded-full border border-black/10"
              >
                YouTube
              </a>
            </div>

            {/* Booking */}
            <div className="mt-10 max-w-sm">
              <BookingModal />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}