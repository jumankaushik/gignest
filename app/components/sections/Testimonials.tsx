const testimonials = [
  {
    name: "Riya Kapoor",
    role: "Private Event Host",
    review:
      "GigNest helped us find an incredible acoustic artist for our rooftop event. The entire experience felt premium and personal.",
  },
  {
    name: "Ankit Sharma",
    role: "Wedding Organizer",
    review:
      "The performers were professional, talented, and exactly what we were looking for. Highly recommended.",
  },
  {
    name: "Neha Verma",
    role: "Cafe Owner",
    review:
      "We hosted live sessions through GigNest and our audience absolutely loved the vibe the artists created.",
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <p className="uppercase tracking-[0.3em] text-sm text-black/50 mb-4">
          Testimonials
        </p>

        <h2 className="text-4xl md:text-6xl font-semibold mb-14">
          What People Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="glass-card rounded-[30px] p-8"
            >
              <p className="text-lg leading-relaxed text-black/70">
                “{item.review}”
              </p>

              <div className="mt-8">
                <h3 className="text-xl font-semibold">
                  {item.name}
                </h3>

                <p className="text-black/50 mt-1">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}