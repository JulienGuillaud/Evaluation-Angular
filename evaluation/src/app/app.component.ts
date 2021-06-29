import { Component } from '@angular/core';
import { Appreciation, Statistique } from './models/statistique';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'evaluation';

  stat1 = new Statistique("zdh7465h1zdh5", "Test1", "valeur1", Appreciation.WARNING);
  stat2 = new Statistique("gk78uk9t871kt", "Test2", "valeur2", Appreciation.SUCCESS);
}
