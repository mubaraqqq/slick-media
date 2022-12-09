import { Paper } from "@mui/material";

const SearchItem = ({ itemId, title, Key, onClick, selected, poster }) => {
  return (
    <Paper className="search-item" sx={{ backgroundImage: `url(${poster})` }}>
      {title}
    </Paper>
  );
};

export default SearchItem;
