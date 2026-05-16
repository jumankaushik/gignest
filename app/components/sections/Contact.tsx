export default function Contact() {
  return (
    <section
      id="contact"
      className="section-padding bg-[#f1ebe3]"
    >
      <div className="max-w-5xl mx-auto text-center">
        <p className="uppercase tracking-[0.3em] text-sm text-black/50 mb-4">
          Contact Us
        </p>

        <h2 className="text-4xl md:text-6xl font-semibold leading-tight">
          Let’s Create
          <br />
          Unforgettable Experiences
        </h2>

        <p className="text-lg text-black/70 mt-8 max-w-2xl mx-auto">
          Looking to book an artist for your event, venue, or private
          gathering? Reach out and we’ll help you find the perfect match.
        </p>

        <div className="mt-12 space-y-4 text-lg">
          <p>hello@gignest.in</p>
          <p>+91 98765 43210</p>
          <p>Bangalore, India</p>
        </div>

        <button className="mt-10 bg-black text-white px-8 py-4 rounded-full">
          Contact GigNest
        </button>
      </div>
    </section>
  );
}