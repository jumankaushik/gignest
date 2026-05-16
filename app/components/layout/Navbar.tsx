export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur-md bg-white/40 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <h1 className="text-2xl font-semibold tracking-tight">
          GigNest
        </h1>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#about">About</a>
          <a href="#artists">Artists</a>
          <a href="#experience">Experiences</a>
          <a href="#contact">Contact</a>
        </nav>

        <button className="bg-black text-white px-5 py-2 rounded-full text-sm hover:opacity-90 transition">
          Book Artists
        </button>
      </div>
    </header>
  );
}