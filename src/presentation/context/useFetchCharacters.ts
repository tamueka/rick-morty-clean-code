import { useState, useCallback } from "react";
import { CharacterAPIRepository } from "../../../src/infrastructure/repositories/CharacterAPIRepository";
import { GetCharacters } from "../../../src/application/usecases/GetCharacters";
import { Character } from "../../../src/domain/entities/Character";

export const useFetchCharacters = () => {
  const [characters, setCharacters] = useState<Character[]>([]);

  const fetchCharacters = useCallback(async () => {
    const useCase = new GetCharacters(new CharacterAPIRepository());
    const result = await useCase.execute();
    setCharacters(result);
  }, []);

  return { characters, fetchCharacters };
};
