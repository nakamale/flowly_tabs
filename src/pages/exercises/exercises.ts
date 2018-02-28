import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-exercises',
  templateUrl: 'exercises.html'
})
export class ExercisesPage {

  constructor(public navCtrl: NavController) {

  }

  items = [
    ['Übung 1', 'Lorem Ipsum'],
    ['Übung 2', 'Lorem Ipsum'],
    ['Übung 3', 'Lorem Ipsum'],
  ];

  itemSelected(item: string) {
    console.log("Selected Item", item);
  }

}
