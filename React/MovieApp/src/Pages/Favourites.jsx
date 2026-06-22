import { useMemo } from "react";
import { useMovieContext } from "../contexts/MovieContext";
import Moviecard from "../components/Moviecard";
import { Link } from "react-router-dom";
import { useCallback } from "react";
function Favorites() {
  const { favorites } = useMovieContext();

  const averageRating = useMemo(
    () =>
      favorites.length
        ? (
            favorites.reduce((sum, m) => sum + (m.vote_average || 0), 0) /
            favorites.length
          ).toFixed(1)
        : "0.0",
    [favorites],
  );

  const yearSpan = useMemo(
    () =>
      favorites.length
        ? new Date().getFullYear() -
          Math.min(
            ...favorites.map(
              (m) => parseInt(m.release_date?.split("-")[0]) || 2024,
            ),
          )
        : 0,
    [favorites],
  );

  if (favorites && favorites.length > 0) {
    return (
      <div className="min-h-screen bg-slate-950 py-12 px-4 text-slate-100">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-black mb-3">My Favorites</h1>
            <p className="text-slate-400 text-base">
              You have{" "}
              <span className="font-semibold text-slate-100">
                {favorites.length}
              </span>{" "}
              favorite movies saved.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 mb-10">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-6 text-center shadow-sm">
              <div className="text-3xl font-semibold text-slate-100">
                {favorites.length}
              </div>
              <div className="mt-2 text-slate-400">Saved Movies</div>
            </div>
            <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-6 text-center shadow-sm">
              <div className="text-3xl font-semibold text-slate-100">
                {averageRating}
              </div>
              <div className="mt-2 text-slate-400">Avg Rating</div>
            </div>
            <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-6 text-center shadow-sm">
              <div className="text-3xl font-semibold text-slate-100">
                {yearSpan}
              </div>
              <div className="mt-2 text-slate-400">Year Span</div>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {favorites.map((movie, index) => (
              <div
                key={movie.id}
                className="fade-in"
                style={{ animationDelay: `${index * 30}ms` }}
              >
                <Moviecard movie={movie} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-16 text-slate-100">
      <div className="mx-auto max-w-2xl rounded-3xl border border-slate-800 bg-slate-900/90 p-12 text-center shadow-xl shadow-black/20">
        <div className="text-6xl mb-5">🎬</div>
        <h2 className="text-4xl font-semibold mb-4">No favorites yet</h2>
        <p className="text-slate-400 mb-8">
          Start exploring and save the movies you love to build your watchlist.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link
            to="/"
            className="rounded-2xl bg-indigo-600 px-6 py-3 text-white transition hover:bg-indigo-500"
          >
            Explore Movies
          </Link>
          <button
            onClick={() => location.reload()}
            className="rounded-2xl border border-slate-700 px-6 py-3 text-slate-100 transition hover:border-slate-500"
          >
            Refresh
          </button>
        </div>
      </div>
    </div>
  );
}

export default Favorites;
