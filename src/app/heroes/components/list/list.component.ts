import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman', 'IronMan', 'Hulk', 'She Hulk', 'Thor']
  public heroBorrado?: string

  get getHeroeBorrado():string{

    return this.heroBorrado || ''
  }


  borrarHeroe(): void {
    let ultimoElemento = this.heroNames[this.heroNames.length - 1]
    this.heroNames.pop()
    this.heroBorrado = ultimoElemento
  }
}
