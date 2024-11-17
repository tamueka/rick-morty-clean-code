import React from "react";
import { Link } from "react-router-dom";
import { characterContext } from "../context/CharacterContext";

const CharacterList: React.FC = () => {
  const { characters } = characterContext();

  return (
    <div>
      <h1>Characters</h1>
      <ul>
        {characters.map((character: any) => (
          <li key={character.id}>
            <Link to={`/detail/${character.id}`}>
              <img src={character.image} alt={character.name} />
              <p>{character.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterList;
