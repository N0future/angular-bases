import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'Oscar'
  public age: number = 100;
  public method: string = 'Algun metodo'
  public capitalized: string = 'Nombre capitalizado'
  public reset: boolean = false

  get getName(): string {
    return this.name
  }
  get getNameCapitalized(): string {
    return 'Capitalied Value'
  }
  get getAge(): number {
    return this.age
  }
  get getMethod(): string {
    return 'Method Value'
  }

  doReset(): void {
    this.name = 'Oscar'
    this.age = 100
    this.reset = false
  }
  public changeAge(): void {
    this.age = 50
    this.reset = true
  }

  public changeName(): void {

    this.name = 'Spiderman'
    this.reset = true
  }
}
