import React from 'react'
import "./Checkbox.scss";

const Checkbox = ({family}) => {
  return (
    <div>
      <label htmlFor={family}>{family}</label>
      <input type="checkbox" name={family} id={family} />
    </div>
  )
}

export default Checkbox