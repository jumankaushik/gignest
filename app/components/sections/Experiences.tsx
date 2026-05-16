import Image from "next/image";

export default function Experiences() {
  const reels = [
  {
    title: "Live Wedding Performance",
    image: "https://picsum.photos/500/900?random=1",
    link: "https://instagram.com",
  },

  {
    title: "Sunset Acoustic Session",
    image: "https://picsum.photos/500/900?random=2",
    link: "https://instagram.com",
  },

  {
    title: "Private Rooftop Gig",
    image: "https://picsum.photos/500/900?random=3",
    link: "https://instagram.com",
  },
];

  return (
    <section
      id="experience"
      className="section-padding bg-[#f1ebe3]"
    >
      <div className="max-w-7xl mx-auto">
        <p className="uppercase tracking-[0.3em] text-sm text-black/50 mb-4">
          Past Experiences
        </p>

        <h2 className="text-4xl md:text-6xl font-semibold mb-14">
          Moments We Created
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {reels.map((reel, index) => (
            <a
                key={index}
                href={reel.link}
                target="_blank"
                className="aspect-[9/16] rounded-[30px] overflow-hidden relative group cursor-pointer block"
            >
                <img
                src={reel.image}
                alt={reel.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />

                <div className="absolute inset-0 bg-black/30" />

                <div className="absolute bottom-6 left-6 text-white">
                <p className="text-xl font-semibold">
                    {reel.title}
                </p>

                <p className="text-white/80 text-sm mt-2">
                    Watch on Instagram
                </p>
                </div>
            </a>
))}
        </div>
      </div>
    </section>
  );
}