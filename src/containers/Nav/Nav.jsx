import React from 'react'
import Checkbox from '../../components/Checkbox/Checkbox'
import SearchBox from '../../components/SearchBox/SearchBox'
import "./Nav.scss"

const Nav = ({getSearchTerm, getCheckboxValue}) => {
  return (
    <div className='nav'>
      <SearchBox getSearchTerm={getSearchTerm}/>
      <Checkbox family="Targaryen" getCheckboxValue={getCheckboxValue}/>
      <Checkbox family="Stark" getCheckboxValue={getCheckboxValue}/>
      <Checkbox family="Lannister" getCheckboxValue={getCheckboxValue}/>
      <Checkbox family="Baratheon" getCheckboxValue={getCheckboxValue}/>
    </div>
  )
}

export default Nav