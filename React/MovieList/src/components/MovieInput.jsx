import React, { useContext, useMemo, useState } from "react";
import { Context } from "./Context";
import { useCallback } from "react";

export const MovieInput =React.memo(()=> {
  const {movies, setMovies} = useContext(Context);
  const [addM, setAddM] = useState("");
  let [index,setIndex]=useState(0);
  const addMovies=useCallback((e)=> {
    e.preventDefault()
    setMovies([...movies,addM])
    setAddM("")
    setIndex(index+1);
  })
  return (
    <>
      <form onSubmit={addMovies}>
        <input
          type="text"
          value={addM}
          onChange={(e) => setAddM(e.target.value)}
        />
        <button type="submit" >
          Submit
        </button>
      </form>
      <h1>
        {movies.map((e,index) => (
          <p key={index}>{e}</p>
        ))}
      </h1>
    </>
  );
}
)