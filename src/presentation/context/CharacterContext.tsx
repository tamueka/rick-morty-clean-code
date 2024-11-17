import { Character } from "@/domain/entities/Character";
import { createContext, useContext } from "react";

interface CharacterContextProps {
  characters: Character[];
  character: Character | null;
  fetchCharacters: () => void;
  fetchCharacterById: (id: string) => void;
}

export const characterContextProps = createContext<
  CharacterContextProps | undefined
>(undefined);

export const characterContext = () => {
  const context = useContext(characterContextProps);
  if (!context) {
    throw new Error("CharacterContext debe usarse dentro de CharacterProvider");
  }
  return context;
};
