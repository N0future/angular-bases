import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
    template :`<h1>{{title}}</h1>
    <hr>
    <h3>Counter: {{counter}}</h3>
    <button (click)="increaseBy(1)">+1</button>
    <button (click)="increaseBy(-1)">-1</button>
    <button (click)="reset()">Reset</button>
    <hr>
    `

})

export class CounterComponent implements OnInit {
  public title:string = 'bases'
  public counter:number = 10


  increaseBy(value: number): void {
    this.counter += value;
  }

  reset(): void {
    this.counter = 10
  }
  constructor() { }

  ngOnInit() { }
}
