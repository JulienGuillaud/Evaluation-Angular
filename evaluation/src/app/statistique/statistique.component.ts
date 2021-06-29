import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Appreciation, Statistique } from '../models/statistique';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.scss']
})
export class StatistiqueComponent implements OnInit {

  stat1 = new Statistique("zdh7465h1zdh5", "Test1", "valeur1", Appreciation.WARNING);
  stat2 = new Statistique("gk78uk9t871kt", "Test2", "valeur2", Appreciation.SUCCESS);

  public tabStats = [
    this.stat1, this.stat2
  ];

  
  constructor() { }
  
  ngOnInit(): void {
    setTimeout(() => {  this.tabStats.push(new Statistique("e89h74d58fgh6", "Test3", "valeur3", Appreciation.DANGER)) }, 3000);
  }

}
