import { CharacterRepository } from "@/domain/repositories/CharacterRepository";
import { Character } from "@/domain/entities/Character";

export class GetCharacterById {
  constructor(private repository: CharacterRepository) {}

  async execute(id: string): Promise<Character> {
    return this.repository.getCharacterById(id);
  }
}
