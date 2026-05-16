"use client";

import { useState } from "react";

import Link from "next/link";

import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur-md bg-white/40 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-semibold tracking-tight"
        >
          GigNest
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#about">About</a>

          <Link href="/artists">
            Artists
          </Link>

          <a href="#experience">
            Experiences
          </a>

          <a href="#contact">Contact</a>
        </nav>

        {/* Desktop CTA */}
        <button className="hidden md:block bg-black text-white px-5 py-2 rounded-full text-sm hover:opacity-90 transition">
          Book Artists
        </button>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-6 pb-6 bg-[#f7f3ee] border-t border-black/5">
          <nav className="flex flex-col gap-5 pt-5 text-lg">
            <a href="#about">About</a>

            <Link href="/artists">
              Artists
            </Link>

            <a href="#experience">
              Experiences
            </a>

            <a href="#contact">Contact</a>

            <button className="bg-black text-white py-3 rounded-full mt-4">
              Book Artists
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}