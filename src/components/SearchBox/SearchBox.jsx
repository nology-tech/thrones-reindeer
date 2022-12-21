import React from "react";
import "./SearchBox.scss";

const Searchbox = ({ handleInput, searchTerm }) => {
  return <input className="search" onInput={handleInput} type="text" placeholder="Search.." value={searchTerm} />;
};

export default Searchbox;
