import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: ` <h3>Numero: {{ numero }}</h3>

    <button (click)="changeby(1)">+1</button>
    <button (click)="changeby(-1)">-1</button>`,
})
export class CounterComponent {
    public numero: number = 10;

  changeby(number: number): void {
    this.numero += number;
  }

}
