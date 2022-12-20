import React from 'react'
import CharacterCard from '../../components/CharacterCard/CharacterCard'
import "./CharacterContainer.scss"

const CharacterContainer = ({charArray}) => {

  const cardArray = charArray.map((character) => {
    return (
      <CharacterCard key={character.id} character={character}/>
    )
  })
  
  return (
    <div className='character-container'>
      {cardArray}
    </div>
  )
}

export default CharacterContainer