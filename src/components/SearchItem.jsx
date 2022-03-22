import React, { useContext } from 'react';
import { Paper } from '@mui/material';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

const SearchItem = ({ itemId, title, Key, onClick, selected, poster }) => {
    // const visibility = useContext(VisibilityContext);
  return (
    <Paper className='search-item' sx={{backgroundImage: `url(${poster})`}}>
        {title}
    </Paper>
  )
}

export default SearchItem;