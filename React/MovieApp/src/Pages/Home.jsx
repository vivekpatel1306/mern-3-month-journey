import { getPopularMovies, searchMovies } from "../../services/api";
import Moviecard from "../components/Moviecard";
import { useEffect, useState } from "react";

function Home() {
  const [searchquery, setSearchquery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("Failed to load movies. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);

  const handlesearch = async (e) => {
    e.preventDefault();
    if (!searchquery.trim() || loading) return;
    setLoading(true);
    try {
      const searchResult = await searchMovies(searchquery);
      setMovies(searchResult);
      setError(null);
    } catch (err) {
      console.log(err);
      setError("Failed to search movies. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <section className="rounded-3xl border border-slate-800 bg-slate-900/90 p-8 shadow-xl shadow-black/20">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-black mb-4 text-slate-100">
              🎬 Discover Movies
            </h1>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Search for films, browse popular titles, and build a watchlist
              with a friendly, simple interface.
            </p>
          </div>

          <form
            onSubmit={handlesearch}
            className="flex flex-col sm:flex-row gap-4"
          >
            <input
              type="text"
              placeholder="Search movies, actors, or genres"
              className="flex-1 rounded-2xl border border-slate-700 bg-slate-950/90 px-5 py-4 text-slate-100 placeholder:text-slate-500 focus:border-indigo-400 focus:outline-none shadow-sm"
              value={searchquery}
              onChange={(e) => setSearchquery(e.target.value)}
            />
            <button
              type="submit"
              disabled={loading}
              className="rounded-2xl bg-indigo-600 px-6 py-4 text-slate-100 font-semibold transition-colors duration-200 hover:bg-indigo-500 disabled:opacity-60"
            >
              🔍 Search
            </button>
          </form>
        </section>

        <main className="mt-12">
          {error && (
            <div className="mb-8 rounded-2xl border border-red-600 bg-red-950/80 p-5 text-red-200">
              {error}
            </div>
          )}

          {loading ? (
            <div className="flex flex-col items-center justify-center rounded-3xl border border-slate-800 bg-slate-900/90 p-16 text-center shadow-lg shadow-black/20">
              <div className="mb-6 h-16 w-16 animate-spin rounded-full border-4 border-slate-700 border-t-indigo-500"></div>
              <p className="text-xl font-semibold text-slate-100">
                Loading movies...
              </p>
              <p className="text-slate-400 mt-2">Please wait a moment.</p>
            </div>
          ) : (
            <>
              {movies.length > 0 ? (
                <>
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-slate-100 mb-2">
                      {searchquery ? "Search Results" : "Popular Movies"}
                    </h2>
                    <p className="text-slate-400">
                      Showing {movies.length} movies
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {movies.map((movie, index) => (
                      <div
                        key={movie.id}
                        className="fade-in"
                        style={{ animationDelay: `${index * 30}ms` }}
                      >
                        <Moviecard movie={movie} />
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-16 text-center shadow-lg shadow-black/20">
                  <div className="text-6xl mb-4">🎬</div>
                  <h3 className="text-3xl font-semibold text-slate-100 mb-3">
                    No movies found
                  </h3>
                  <p className="text-slate-400 mb-8">
                    Try a different search term or refresh to see popular titles
                    again.
                  </p>
                  <button
                    onClick={() => {
                      setSearchquery("");
                      location.reload();
                    }}
                    className="rounded-2xl bg-indigo-600 px-6 py-3 text-white font-semibold transition-colors duration-200 hover:bg-indigo-500"
                  >
                    Reload Popular Movies
                  </button>
                </div>
              )}
            </>
          )}
        </main>
      </div>
    </div>
  );
}

export default Home;
