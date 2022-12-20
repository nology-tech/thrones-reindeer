import React from 'react'
import "./Checkbox.scss";

const Checkbox = ({family}) => {
  return (
    <div>
      <input type="checkbox" name={family} id={family} />
      <label htmlFor={family}>{family}</label>
    </div>
  )
}

export default Checkbox