import React from "react";
import "./CharacterCard.scss";

const CharacterCard = ({ character }) => {
  return (
    <div className="character-card">
      <img className="character-card__image" src={character.imageUrl} alt={character.fullName} />
      <h1>{character.fullName}</h1>
      <p>Title: {character.title}</p>
      <p>Family: {character.family}</p>
    </div>
  );
};

export default CharacterCard;
