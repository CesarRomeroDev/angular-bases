import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid'


import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  public characterMain: Character[] = [{
    id: uuid(),
    name: 'Krilliin',
    power: 1000
  },
  {
    id: uuid(),
    name: 'Goku',
    power: 9500
  },
  {
    id: uuid(),
    name: 'vegeta',
    power: 7500
  },
  {
    id: uuid(),
    name: 'picolo',
    power: 5000
  },
];

  addCharacter(charater: Character):void{
    const newCharacter: Character = {id: uuid(), ...charater}
    this.characterMain.push(newCharacter);
    //console.log('MainPage');
    //console.log(charater);

  }

  deleteCharacterById(id: string):void{
      this.characterMain = this.characterMain.filter(character => character.id != id);
  }
}
