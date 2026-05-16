type Props = {
  artist: {
    name: string;
    genre: string;
    location: string;
    image: string;
  };
};

export default function ArtistCard({ artist }: Props) {
  return (
    <div className="group overflow-hidden rounded-[30px] glass-card">
      <div className="overflow-hidden">
        <img
          src={artist.image}
          alt={artist.name}
          className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-semibold">
              {artist.name}
            </h3>

            <p className="text-black/60 mt-1">
              {artist.genre}
            </p>
          </div>

          <span className="text-sm bg-black text-white px-4 py-2 rounded-full">
            {artist.location}
          </span>
        </div>

        <button className="mt-6 w-full bg-black text-white py-3 rounded-full hover:opacity-90 transition">
          Book Artist
        </button>
      </div>
    </div>
  );
}