import React from 'react'
import Checkbox from '../../components/Checkbox/Checkbox'
import SearchBox from '../../components/SearchBox/SearchBox'
import "./Nav.scss"

const Nav = () => {
  return (
    <div className='nav'>
      <SearchBox />
      <Checkbox />
      <Checkbox />
      <Checkbox />
      <Checkbox />
    </div>
  )
}

export default Nav