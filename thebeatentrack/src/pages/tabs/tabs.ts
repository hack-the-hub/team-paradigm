import { Component } from '@angular/core';

import { MapPage } from "../map/map";
import { ToursPage } from "../tours/tours";
import { InfoPage } from '../info/info';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab2Root = MapPage;
  tab3Root = ToursPage;
  tab4Root = InfoPage;

  constructor() {

  }
}
