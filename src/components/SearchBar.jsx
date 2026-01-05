import React from "react";

function SearchBar({ setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search By Book Title..."
      className="search-input"
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export default SearchBar;
