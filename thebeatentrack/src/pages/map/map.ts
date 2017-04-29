import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var google;

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad(){
    this.loadMap();
  }

  loadMap() {

    let myLatlng = new google.maps.LatLng(54.6628224, -6.7461567);
    let mapOptions = {
      zoom: 7,
      center: myLatlng
    }

    var dist = 0;
    var marker;
    var marker2;
    var pos;
    var bool = false;
    var bounds;
    // Belfast
    var desLatlng = new google.maps.LatLng(54.597399, -5.930188);

    let map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    navigator.geolocation.getCurrentPosition(function(position) {

        pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

        // mark the user with a blue dot
        marker = new google.maps.Marker({
            position: pos,
            title: 'my Location',
            icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
            map: map
        });

        var latLng = marker.getPosition(); // returns LatLng object
        map.setCenter(latLng);

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
    });
  }
}
