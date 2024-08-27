import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  //EventEmitter es un generico que puede enviar string, number etc.
  // y necesita del @Output para emitir la información al padre
  @Output()
  public onNewCharacterAdd: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  }

  emitCharacter():void{
    console.log(this.character);

    //Si no vienen nombres no lo vamos a aceptar
    if(this.character.name.length === 0 ) return;
    //pero si viene con nombre, emitimos el onNewCharacter
    this.onNewCharacterAdd.emit(this.character);
    //una ves emitido el valor, los input del formulario regresan
    //a tal como estaban antes
    this.character = {name: '', power: 0};

  }
}
