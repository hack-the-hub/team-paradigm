import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { MapPage } from "../map/map";
import { ToursPage } from "../tours/tours";
import { LocationsPage } from "../locations/locations";
import { InfoPage } from '../info/info';
//import { CategoriesPage } from '../pages/categories/categories';
import { ArPage } from '../ar_page/ar_page';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MapPage;
  tab3Root = ToursPage;
  tab4Root = InfoPage;
  tab5Root = LocationsPage;
  // tab6Root = CategoriesPage;
  tab7Root = ArPage;

  constructor() {

  }
}
