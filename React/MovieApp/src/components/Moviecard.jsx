import { memo, useMemo } from "react";
import { useMovieContext } from "../contexts/MovieContext";

function Moviecard({ movie }) {
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
  const favorite = useMemo(() => isFavorite(movie.id), [movie.id, isFavorite]);

  function onFavoriteClick(e) {
    e.preventDefault();
    if (favorite) removeFromFavorites(movie.id);
    else addToFavorites(movie);
  }

  const rating = movie.vote_average ? movie.vote_average.toFixed(1) : "N/A";

  return (
    <div className="group relative overflow-hidden rounded-3xl border border-slate-700 bg-slate-900 shadow-lg transition-all duration-300 hover:shadow-xl">
      <div className="relative overflow-hidden h-72 sm:h-80 bg-slate-800">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent"></div>

        <div className="absolute top-3 right-3 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-950 shadow-sm">
          ⭐ {rating}
        </div>

        <div className="absolute top-3 left-3 rounded-full bg-slate-800/90 px-3 py-1 text-[11px] text-slate-200">
          {movie.release_date?.split("-")[0] || "N/A"}
        </div>

        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          <button
            onClick={onFavoriteClick}
            className={`text-5xl transition-transform duration-200 ${favorite ? "text-red-500" : "text-white"}`}
            title={favorite ? "Remove from favorites" : "Add to favorites"}
          >
            {favorite ? "♥" : "♡"}
          </button>
        </div>
      </div>

      <div className="p-4 bg-slate-950">
        <div className="min-h-[3rem]">
          <h3 className="text-sm font-semibold text-slate-100 line-clamp-2">
            {movie.title}
          </h3>
        </div>

        <div className="mt-3 flex items-center justify-between border-t border-slate-700 pt-3">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span>📊</span>
            <span className="rounded-full bg-slate-800 px-2 py-1 font-semibold text-slate-200">
              {rating}
            </span>
          </div>
          <button
            onClick={onFavoriteClick}
            className={`text-lg transition-colors duration-200 ${favorite ? "text-red-400" : "text-slate-400 hover:text-red-400"}`}
            title={favorite ? "Remove from favorites" : "Add to favorites"}
          >
            {favorite ? "❤️" : "🤍"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default memo(Moviecard);
