import { Character } from "@/domain/entities/Character";
import { CharacterRepository } from "@/domain/repositories/CharacterRepository";

export class CharacterAPIRepository implements CharacterRepository {
  private readonly baseUrl = "https://rickandmortyapi.com/api";

  async getAllCharacters(): Promise<Character[]> {
    const response = await fetch(`${this.baseUrl}/character`);
    const data = await response.json();
    return data.results;
  }

  async getCharacterById(id: string): Promise<Character> {
    const response = await fetch(`${this.baseUrl}/character/${id}`);
    return await response.json();
  }
}
