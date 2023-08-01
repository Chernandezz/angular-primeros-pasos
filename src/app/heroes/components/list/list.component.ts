import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroNames: string[] = ['Mr. Nice', 'Narco', 'Bombasto', 'Celeritas', 'Magneta', 'RubberMan'];
  public deletedHero?: string;

  borrarUltimoHeroe(): void {
    this.deletedHero = this.heroNames.pop(); // Elimina el último elemento del array
  }

}
