import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpModule } from '@angular/http';
//import * as $ from 'jquery';

declare var google;

@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
  providers: []
})
export class MapPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  locations: any;

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad(){
    this.loadMap();
  }

  loadLocations(){
    /*this.locationService.load()
      .then(data => {
        this.locations = data;
      });*/
  }

  loadMap() {

    //this.loadLocations();

    let locations = [{
      "id": 1,
      "lat": 54.5967204,
      "long": -5.9322092,
      'name': 'Belfast City Hall',
      'description': 'Belfast City Hall, the greatest place on the planet.... Yeah right...',
      'category': 'architecture',
      'image': 'https://placeholdit.imgix.net/~text?txtsize=33&txt=200x100&w=200&h=100',
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



    let myLatlng = new google.maps.LatLng(54.6628224, -6.7461567);
    let mapOptions = {
      zoom: 7,
      center: myLatlng
    };

    var marker;
    var marker2;
    var pos;
    var bounds;
    // Belfast
    var desLatlng = new google.maps.LatLng(54.597399, -5.930188);

    let map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);



    navigator.geolocation.getCurrentPosition(function(position) {

      let latLongs = [];
      for(var i=0; i< locations.length; i++) {
        var latLong = new google.maps.LatLng(locations[i].lat, locations[i].long);
        var marker = new google.maps.Marker({
          position: latLong,
          //title: 'my Location',
          //icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
          map: map
        });
        latLongs[i] = latLong;
      }
        pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

        // mark the user with a blue dot
        marker = new google.maps.Marker({
            position: pos,
            title: 'my Location',
            icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
            map: map
        });

        var latLng = marker.getPosition(); // returns LatLng object

        // mark red dot for Belfast
        marker2 = new google.maps.Marker({
            position: desLatlng,
            title: 'Belfast',
            icon: 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png',
            map: map
        });

        // Add circle overlay and bind to marker
        var circle = new google.maps.Circle({
            map: map,
            radius: 4828.03,    // 3 miles in metres
            fillColor: '#ffff00'
        });
        circle.bindTo('center', marker2, 'position');
        // ** check circle for user **
        bounds = new google.maps.LatLngBounds();

      map.fitBounds(bounds);
      var listener = google.maps.event.addListener(map, "idle", function() {
        if (map.getZoom() > 64) map.setZoom(64);
        google.maps.event.removeListener(listener);
      });
        map.setCenter(latLng);
    });
  }
}
