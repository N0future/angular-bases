import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {

    name: '',
    power: 0

  }

  emitCharacter(): void {

    if (this.character.name.length == 0) return

    this.onNewCharacter.emit(this.character);

    console.log(this.character)
    /*  this.character.name = ''
     this.character.power = 0; */
    this.character = { name: '', power: 0 }
  }

}
