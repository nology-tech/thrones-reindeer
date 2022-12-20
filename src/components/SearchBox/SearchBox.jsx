import React from 'react'
import "./SearchBox.scss";
const Searchbox = () => {

  const getSearchTerm = (event) =>{
    console.log(event.target.value)
  }


  return (
    <div>
      <input onInput={getSearchTerm} type="text" placeholder="Search.."/>
    </div>
  )
}

export default Searchbox