import { ScrollMenu } from "react-horizontal-scrolling-menu";
import SearchItem from "./SearchItem";

const SearchResults = ({ movies, series, isLoading }) => {
  return (
    <div className="search-results">
      {series ? <h3>Series</h3> : <h3>Movies</h3>}
      {movies?.length > 0 ? (
        <ScrollMenu className="search1">
          {movies?.map((movie) => (
            <SearchItem
              itemId={movie.imdbID}
              title={movie.Title}
              key={movie.imdbID}
              poster={movie.Poster}
            />
          ))}
        </ScrollMenu>
      ) : (
        <p>No {series ? "Series" : "Movies"} found</p>
      )}
    </div>
  );
};

export default SearchResults;
