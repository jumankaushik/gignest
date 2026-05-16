export default function Footer() {
  return (
    <footer className="border-t border-black/5 py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <h2 className="text-2xl font-semibold">
          GigNest
        </h2>

        <p className="text-black/50 text-sm">
          © 2026 GigNest. All rights reserved.
        </p>

        <div className="flex items-center gap-6 text-sm">
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
          <a href="#">YouTube</a>
        </div>
      </div>
    </footer>
  );
}