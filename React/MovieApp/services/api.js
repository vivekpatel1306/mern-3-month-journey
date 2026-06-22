const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNjAyOTMzODdmNGZmNzZjZWViMDk5Y2ZmMjRiZmQ5MiIsIm5iZiI6MTc4MjA0MDIxOC4yMjIwMDAxLCJzdWIiOiI2YTM3YzY5YThkNjMxZjVmNTM4MGRjZDQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.52mSXuLq717Rfdt7vgqCRllwyAMEpOtShAVLi2OOzsY";
const BASE_URL = "https://api.themoviedb.org/3";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`
  }
};

// Function to get popular movies
export const getPopularMovies = async () => {
  try {
    const response = await fetch(`${BASE_URL}/movie/popular`, options);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Failed to fetch popular movies:", error);
  }
};

// Function to search for movies
export const searchMovies = async (query) => {
  try {
    const response = await fetch(
      `${BASE_URL}/search/movie?query=${encodeURIComponent(query)}`,
      options
    );
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Failed to search movies:", error);
  }
};