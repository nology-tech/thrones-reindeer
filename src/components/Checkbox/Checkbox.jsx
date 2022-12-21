import React from "react";
import { capitalizeString } from "../../utilities/utilities";
import "./Checkbox.scss";

const Checkbox = ({ family, handleCheckbox, checked }) => {
  return (
    <div>
      <input onChange={handleCheckbox} type="checkbox" checked={checked} name={family} id={family} />
      <label htmlFor={family}>{capitalizeString(family)}</label>
    </div>
  );
};

export default Checkbox;
