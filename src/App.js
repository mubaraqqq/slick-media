import { useState, useEffect } from "react";
import { CircularProgress, Box } from "@mui/material";

import "./App.css";

import axios from "axios";

import Header from "./components/Header";
import Section1 from "./components/Section1";
import Search from "./components/Search";
import SearchResults from "./components/SearchResults";

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://www.omdbapi.com/?s=${search}&apikey=fab9af00`)
      .then((res) => {
        setMovies(res.data.Search);
        setIsLoading(false);
      });
  }, [search]);

  const moviesMovies = movies?.filter((movie) => movie.Type === "movie");
  const moviesSeries = movies?.filter((movie) => movie.Type === "series");

  return (
    <div className="App">
      <Header />
      <Section1 />
      <Search search={search} setSearch={setSearch} />
      {isLoading ? (
        <Box m="50px" height="40px" sx={{ overflow: "none" }}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          <SearchResults movies={moviesMovies} />
          <SearchResults movies={moviesSeries} series />
        </>
      )}
    </div>
  );
}

export default App;
