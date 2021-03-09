import React from "react";
import Loop from "../../icons/Loop";

const Search = () => {
  return (
    <div className="search">
      <Loop className="loop_left" />
      <input type="text" className="search_input" placeholder="Rechercher" />
      <Loop className="loop_right" />
    </div>
  );
};

export default Search;
