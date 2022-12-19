import React from 'react'
import "./CharacterCard.scss"

const CharacterCard = ({character}) => {
  
  return (
    <div className='character-card'>
      <h1>{character.fullName}</h1>
      <h2>{character.family}</h2>
      <img className="character-card__image" src={character.imageUrl} alt={character.fullName} />
      <h3>{character.title}</h3>
    </div>
  )
}

export default CharacterCard
