import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LocationsPage } from "../locations/locations";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  locations: any;
  constructor(public navCtrl:NavController) {
    this.loadLocations();
  }

  loadLocations = function () {
    this.locations = [{
      "id": 1,
      "lat": 54.5967204,
      "long": -5.9322092,
      'name': 'Route 1',
      'description': 'Follow route 1...',
      'category': 'architecture',
      'image': 'https://files.slack.com/files-pri/T22GN32KB-F55SEDMME/image.png',
      'rating': 5,
      'type': 'indoor'
    }, {
      'id': 2,
      'lat': 54.5844087,
      'long': -5.9362381,
      'name': 'Queens University Belfast',
      'description': "The best university in the world, yeah... whatever. It is the Hogwarts of Belfast",
      'category': 'education',
      'image': 'https://placeholdit.imgix.net/~text?txtsize=33&txt=200x100&w=200&h=100',
      'rating': 4,
      'type': 'outdoor'
    }, {
      'id': 3,
      'lat': 54.582222,
      'long': -5.9377901,
      'name': 'Ulster Museum',
      'description': 'Ulster Museum, see the history of Ulster!',
      'category': 'museum',
      'image': 'https://placeholdit.imgix.net/~text?txtsize=33&txt=200x100&w=200&h=100',
      'rating': 4,
      'type': 'outdoor'
    }, {
      'id': 4,
      'lat': 54.5815729,
      'long': -5.934193,
      'name': 'Botanic Gardens',
      'description': 'See the smallest park you have ever seen! It is great - Trump',
      'category': 'park',
      'image': 'https://placeholdit.imgix.net/~text?txtsize=33&txt=200x100&w=200&h=100',
      'rating': 4,
      'type': 'outdoor'
    }, {
      'id': 5,
      'lat': 54.5909701,
      'long': -5.9278936,
      'name': 'Titanic Quarter',
      'description': 'Titanic museum, the history of the unsinkable, indestructible ship.',
      'category': 'museum',
      'image': 'https://placeholdit.imgix.net/~text?txtsize=33&txt=200x100&w=200&h=100',
      'rating': 4,
      'type': 'indoor'
    }, {
      'id': 6,
      'lat': 54.595607,
      'long': -5.9308554,
      'name': 'The Titanic Memorial Garden',
      'description': 'The Titanic Memorial Garden description',
      'category': 'park',
      'image': 'https://placeholdit.imgix.net/~text?txtsize=33&txt=200x100&w=200&h=100',
      'rating': 4,
      'type': 'outdoor'
    }];

  }
}
