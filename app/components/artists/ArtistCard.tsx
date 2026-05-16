import Link from "next/link";
import Image from "next/image";
import BookingModal from "./BookingModel";

type Props = {
  artist: {
    id: number;
    name: string;
    genre: string;
    location: string;
    image: string;
    bio: string;
    intro: string;
    availability: string[];
    instagram: string;
    youtube: string;
  };
};

export default function ArtistCard({ artist }: Props) {
  return (
    <div className="group overflow-hidden rounded-[30px] glass-card">
      <Link href={`/artists/${artist.id}`}>
        <div className="overflow-hidden">
          <Image
            src={artist.image}
            alt={artist.name}
            width={500}
            height={700}
            className="h-[420px] w-full object-cover"
        />
        </div>
      </Link>

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

        <p className="mt-5 text-black/70 leading-relaxed">
          {artist.bio}
        </p>

        <BookingModal />
      </div>
    </div>
  );
}