import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroName: string[] = [
    'Spiderman',
    'Ironman',
    'Hulk',
    'Shi Hulk',
    'Thor'
  ];
  //para utilizar una variable dentro del scop de un metodo o funcion
  //es necesario hacerla una propiedad de la clase principal.
  public deletedHero?: string;

  public removeLastHero():void{
   this.deletedHero = this.heroName.pop();
  }

}
