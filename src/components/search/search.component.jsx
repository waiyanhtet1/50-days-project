import "./search.css";
import React from "react";

const Search = ({ search, setSearch }) => {
  return (
    <input
      type="input"
      className="search--input"
      value={search}
      onChange={(event) => setSearch(event.target.value)}
      placeholder="Type to search..."
    />
  );
};

export default Search;
