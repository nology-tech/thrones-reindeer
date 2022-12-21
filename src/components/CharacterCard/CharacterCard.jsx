import React from "react";
import "./CharacterCard.scss";

const CharacterCard = ({ character }) => {
  return (
    <div className="character-card">
      <img className="character-card__image" src={character.imageUrl} alt={character.fullName} />
      <h2>{character.fullName}</h2>
      <p>Title: {character.title}</p>
      <p>Family: {character.family}</p>
    </div>
  );
};

export default CharacterCard;
