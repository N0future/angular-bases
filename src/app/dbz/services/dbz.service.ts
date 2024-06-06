import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';
@Injectable({ providedIn: 'root' })
export class DBZService {


  public characters: Character[] = [{
    id: uuid(),
    name: 'Krilin',
    power: 500
  },
  {
    id: uuid(),
    name: "Goku",
    power: 10000
  },
  {
    id: uuid(),
    name: "Vegeta",
    power: 9000
  }
  ]

  public addCharacter(character: Character): void {


    const newCharacter: Character = { id: uuid(), ...character }
    this.characters.push(newCharacter)
  }

  public deleteCharacterById(id: string): void {

    this.characters = this.characters.filter(character => character.id !== id)
  }

}
