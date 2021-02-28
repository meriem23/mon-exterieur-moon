import React from "react";
import Loop from "../../icons/Loop";

const Search = () => {
  return (
    <div className="search">
      <Loop className="loop-left" />
      <input type="text" className="search-input" placeholder="Rechercher" />
      <Loop className="loop-right" />
    </div>
  );
};

export default Search;
