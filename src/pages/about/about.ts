import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

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
