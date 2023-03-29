import { createContext, useState } from "react";
import { data } from "../data";

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [searchParam, setSearchParam] = useState("");
  const [moviesList, setMoviesList] = useState(data);

  return (
    <MovieContext.Provider value={{ searchParam, moviesList, setSearchParam }}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContext;
