import { createContext, useContext } from "react";
import { Character } from "@/domain/entities/Character";

interface RickAndMortyContextProps {
  characters: Character[];
  character: Character | null;
  fetchCharacters: () => void;
  fetchCharacterById: (id: string) => void;
}

export const RickAndMortyContext = createContext<
  RickAndMortyContextProps | undefined
>(undefined);

export const useRickAndMortyContext = () => {
  const context = useContext(RickAndMortyContext);
  if (!context) {
    throw new Error(
      "useRickAndMortyContext debe usarse dentro de RickAndMortyProvider"
    );
  }
  return context;
};
