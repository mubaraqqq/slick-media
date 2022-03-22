import React from 'react'

const Search = ({ search, setSearch}) => {
  const handleChange = (e) => {
      setSearch(e.target.value)
  };

  return (
    <>
        <div className="search">
            Search
            <input type="text" onChange={handleChange} value={search}/>
        </div>
    </> 
  )
}

export default Search;