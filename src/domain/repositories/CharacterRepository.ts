import { Character } from "../entities/Character";

export interface CharacterRepository {
  getAllCharacters(): Promise<Character[]>;
  getCharacterById(id: string): Promise<Character>;
}
