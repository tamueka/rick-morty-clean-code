import React, { useEffect } from "react";
import { RickAndMortyContext } from "./RickAndMortyContext";
import { useFetchCharacters } from "./useFetchCharacters";
import { useFetchCharacterById } from "./useFetchCharacterById";

export const RickAndMortyProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { characters, fetchCharacters } = useFetchCharacters();
  const { character, fetchCharacterById } = useFetchCharacterById();

  useEffect(() => {
    fetchCharacters();
  }, [fetchCharacters]);

  return (
    <RickAndMortyContext.Provider
      value={{ characters, character, fetchCharacters, fetchCharacterById }}
    >
      {children}
    </RickAndMortyContext.Provider>
  );
};
