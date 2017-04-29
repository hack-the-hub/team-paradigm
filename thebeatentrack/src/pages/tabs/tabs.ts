import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { BeatenTrackPage } from "../beatentrack/beatentrack";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = BeatenTrackPage;
  tab3Root = AboutPage;

  constructor() {

  }
}
