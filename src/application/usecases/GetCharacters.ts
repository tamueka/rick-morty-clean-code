import { CharacterRepository } from "@/domain/repositories/CharacterRepository";
import { Character } from "@/domain/entities/Character";

export class GetCharacters {
  constructor(private repository: CharacterRepository) {}

  async execute(): Promise<Character[]> {
    return this.repository.getAllCharacters();
  }
}
