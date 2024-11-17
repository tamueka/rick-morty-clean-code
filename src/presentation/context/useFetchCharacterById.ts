import { useCallback, useState } from "react";
import { GetCharacterById } from "../../../src/application/usecases/GetCharacterById";
import { Character } from "../../../src/domain/entities/Character";
import { CharacterAPIRepository } from "../../../src/infrastructure/repositories/CharacterAPIRepository";

export const useFetchCharacterById = () => {
  const [character, setCharacter] = useState<Character | null>(null);

  const fetchCharacterById = useCallback(async (id: string) => {
    const useCase = new GetCharacterById(new CharacterAPIRepository());
    const result = await useCase.execute(id);
    setCharacter(result);
  }, []);

  return { character, fetchCharacterById };
};
