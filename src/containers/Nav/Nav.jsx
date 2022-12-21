import React from "react";
import Checkbox from "../../components/Checkbox/Checkbox";
import SearchBox from "../../components/SearchBox/SearchBox";
import "./Nav.scss";

const Nav = ({ houseFilters, handleInput, handleCheckbox, searchTerm }) => {
  const checkboxJSX = Object.keys(houseFilters).map(house => (
    <Checkbox key={house} family={house} checked={houseFilters[house]} handleCheckbox={handleCheckbox} />
  ));

  return (
    <div className="nav">
      <SearchBox handleInput={handleInput} searchTerm={searchTerm} />
      {checkboxJSX}
    </div>
  );
};

export default Nav;
