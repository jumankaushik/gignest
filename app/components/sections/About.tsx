export default function About() {
  return (
    <section
      id="about"
      className="section-padding bg-[#f1ebe3]"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="uppercase tracking-[0.3em] text-sm text-black/50 mb-5">
            About GigNest
          </p>

          <h2 className="text-4xl md:text-6xl font-semibold leading-tight">
            A Home For Independent Artists
          </h2>
        </div>

        <div className="space-y-6 text-black/70 text-lg leading-relaxed">
          <p>
            GigNest helps talented musicians and performers showcase their
            art, connect with audiences, and get discovered for live events
            and private performances.
          </p>

          <p>
            We believe incredible artists deserve visibility, meaningful
            opportunities, and a platform that represents their creativity
            beautifully.
          </p>

          <p>
            Whether it’s an intimate private gathering, café session,
            wedding, or live stage experience — GigNest bridges the gap
            between talent and opportunity.
          </p>
        </div>
      </div>
    </section>
  );
}