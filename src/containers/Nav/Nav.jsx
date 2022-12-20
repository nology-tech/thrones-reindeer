import React from 'react'
import Checkbox from '../../components/Checkbox/Checkbox'
import SearchBox from '../../components/SearchBox/SearchBox'
import "./Nav.scss"

const Nav = ({getSearchTerm}) => {
  return (
    <div className='nav'>
      <SearchBox getSearchTerm={getSearchTerm}/>
      <Checkbox family="Targaryen"/>
      <Checkbox family="Stark"/>
      <Checkbox family="Lannister"/>
      <Checkbox family="Baratheon"/>
    </div>
  )
}

export default Nav