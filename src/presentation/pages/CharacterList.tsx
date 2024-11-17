import React from "react";
import { Link } from "react-router-dom";
import { useRickAndMortyContext } from "../context/RickAndMortyContext";

export const CharacterList: React.FC = () => {
  const { characters } = useRickAndMortyContext();

  return (
    <div>
      <h1>Rick and Morty Characters</h1>
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
