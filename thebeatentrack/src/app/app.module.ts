import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ToursPage } from '../pages/tours/tours';
import { InfoPage } from '../pages/info/info';
import { MapPage } from '../pages/map/map';
import { LocationsPage } from '../pages/locations/locations';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
//import { CategoriesPage } from '../pages/categories/categories';
import { ArPage } from '../pages/ar_page/ar_page';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    ToursPage,
    InfoPage,
    MapPage,
    HomePage,
    TabsPage,
    LocationsPage,
    ArPage
  //  CategoriesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ToursPage,
    InfoPage,
    MapPage,
    HomePage,
    TabsPage,
    LocationsPage,
    ArPage
  //  CategoriesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
