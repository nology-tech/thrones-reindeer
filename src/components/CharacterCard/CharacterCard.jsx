import React from "react";
import "./CharacterCard.scss";

const CharacterCard = ({ character }) => {
  return (
    <div className="character-card">
      <h1>{character.fullName}</h1>
      <p>{character.family}</p>
      <img className="character-card__image" src={character.imageUrl} alt={character.fullName} />
      <p>{character.title}</p>
    </div>
  );
};

export default CharacterCard;
