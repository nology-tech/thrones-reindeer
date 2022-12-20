import React from "react";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import "./CharacterCards.scss";

const CharacterCards = ({ characters }) => {
  const cardJSX = characters.map(character => {
    return <CharacterCard key={character.id} character={character} />;
  });

  return <div className="character-container">{cardJSX.length > 0 ? cardJSX : <p>No results found</p>}</div>;
};

export default CharacterCards;
