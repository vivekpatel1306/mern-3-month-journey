import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950 shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="flex items-center gap-3 text-2xl font-bold text-slate-100"
        >
          <span>🎬</span>
          <span className="hidden sm:inline">MovieBuddy</span>
        </Link>

        <div className="hidden md:flex items-center gap-4 text-sm font-semibold text-slate-200">
          <Link
            to="/"
            className="rounded-xl px-3 py-2 transition hover:bg-slate-800 hover:text-white"
          >
            🏠 Home
          </Link>
          <Link
            to="/favorites"
            className="rounded-xl px-3 py-2 transition hover:bg-slate-800 hover:text-white"
          >
            ❤️ Favorites
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
