export default function Experiences() {
  const reels = [
    "Live Wedding Performance",
    "Sunset Acoustic Session",
    "Private Rooftop Gig",
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
            <div
              key={index}
              className="aspect-[9/16] rounded-[30px] overflow-hidden relative group cursor-pointer"
            >
              <img
                src={`https://picsum.photos/500/900?random=${index}`}
                alt={reel}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />

              <div className="absolute inset-0 bg-black/30" />

              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-xl font-semibold">
                  {reel}
                </p>

                <p className="text-white/80 text-sm mt-2">
                  Watch on Instagram
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}