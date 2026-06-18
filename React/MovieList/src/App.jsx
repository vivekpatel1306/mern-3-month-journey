import { useState } from "react";
import { Context } from "./components/Context";
import {MovieInput} from "./components/MovieInput";
function App() {
  const [movies, setMovies] = useState([]);
  return (
    <>
      <Context.Provider value={{ movies, setMovies }}>
        <MovieInput />
      </Context.Provider>
    </>
  );
}

export default App;
