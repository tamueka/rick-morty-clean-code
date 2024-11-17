import React from "react";
import { Link, useParams } from "react-router-dom";
import {  characterContext } from "../context/CharacterContext";

 const CharacterDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { characters } = characterContext();

  const character = characters.find(
    (char: any) => char.id === parseInt(id || "", 10)
  );

  if (!character) {
    return <p>Character not found!</p>;
  }

  return (
    <div>
      <h1>{character.name}</h1>
      <img src={character.image} alt={character.name} />
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <p>Gender: {character.gender}</p>
      <Link to="/">Back to List</Link>
    </div>
  );
};
export default CharacterDetail;
