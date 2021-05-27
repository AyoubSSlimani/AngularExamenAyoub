import { Component } from '@angular/core';
import { Statistique } from './models/statistique';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'statistique';

  test1 = new Statistique('test1', 'Démographie en France', '60M', 'SUCCESS');
  test2 = new Statistique('test2', 'Démographie en Italie', '30M', 'DANGER');

  public tabStatistique: Statistique[] = [this.test1, this.test2];

  constructor() {
    setTimeout(() => {
      this.tabStatistique.push(
        new Statistique('test3', 'Démographie en Espagne', '50M', 'WARNING')
      );
    }, 5000);
  }
}
