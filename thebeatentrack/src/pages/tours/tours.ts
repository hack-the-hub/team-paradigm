import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform, ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'page-tours',
  templateUrl: 'tours.html'
})
export class ToursPage {

  constructor(
    //public platform: Platform,
    public actionsheetCtrl: ActionSheetController
  ) { }

  // functionality to the buttons still needs to be added!!!
    openMenu() {
      let actionSheet = this.actionsheetCtrl.create({
        title: 'Filter',
        cssClass: 'action-sheets-tours-page',
        buttons: [
          {
            text: 'Select category',
            //icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
            handler: () => {
              console.log('category selection clicked');
              // open category page
            }
          },
          {
            text: 'Cancel',
            role: 'cancel', // will always sort to be on the bottom
            //icon: !this.platform.is('ios') ? 'close' : null,
            handler: () => {
              console.log('Cancel clicked');
            }
          }
        ]
      });
      actionSheet.present();
    }

}
