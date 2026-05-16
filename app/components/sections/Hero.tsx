"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#f7f3ee] to-[#ebe3d8]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-6"
      >
        <p className="uppercase tracking-[0.3em] text-sm mb-6 text-black/60">
          Discover Independent Artists
        </p>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold leading-tight max-w-5xl mx-auto">
          Bringing Artists
          <br />
          Closer To Their Audience
        </h1>

        <p className="max-w-2xl mx-auto mt-8 text-black/70 text-lg">
          Explore talented musicians and performers for private events,
          live shows, and unforgettable experiences.
        </p>

        <div className="flex items-center justify-center gap-4 mt-10">
          <button className="bg-black text-white px-7 py-3 rounded-full">
            Explore Artists
          </button>

          <button className="border border-black/10 px-7 py-3 rounded-full bg-white/50 backdrop-blur-md">
            Watch Experiences
          </button>
        </div>
      </motion.div>
    </section>
  );
}