import { Component } from '@angular/core';

import { ExercisesPage } from '../exercises/exercises';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { SettingsPage } from '../settings/settings';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ExercisesPage;
  tab3Root = ContactPage;
  tab4Root = SettingsPage;

  constructor() {

  }
}
