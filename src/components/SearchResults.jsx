import React, { useState } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { CircularProgress, Box } from '@mui/material';
import SearchItem from './SearchItem';

const SearchResults = ({ movies, series, isLoading }) => {
  const [selected, setSelected] = useState([]);
  const [position, setPosition] = useState(0);

  const isItemSelected = (id) => !!selected.find((el) => el === id);

  

  return (
    <div className='search-results'>
        {series
            ? <h3>Series</h3>
            : <h3>Movies</h3>
        }
        {isLoading 
            ? (
                <Box>
                    <CircularProgress />
                </Box>
                )
            : (
                <ScrollMenu className='search1'>
                    {movies?.map(( movie ) => (
                        <SearchItem
                            itemId={movie.imdbID} 
                            title={movie.Title}
                            key={movie.imdbID}
                            selected={isItemSelected(movie.imdbID)}
                            poster={movie.Poster}
                        />
                    ))}
                </ScrollMenu>
            )
        }
        
    </div>
  )
}

export default SearchResults;