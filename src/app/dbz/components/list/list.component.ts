import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';


@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  //Usamos @Input para traer información del componente padre
  //y renderizar en el html padre


  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  public onDeleteCharacter(id?: string):void{
    if( !id ) return;  //si no tengo un id, no hago nada,
    this.onDelete.emit(id);
    console.log({id});


  }
}
