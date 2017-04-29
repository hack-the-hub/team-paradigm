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

  loadMap(){

    //let latLng = new google.maps.LatLng(-34.9290, 138.6010);

    //let mapOptions = {
    //  center: latLng,
    //  zoom: 15,
    //  mapTypeId: google.maps.MapTypeId.ROADMAP
    //}

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
        var cur;
        // method to provide map properties

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        var initialize = function() {
            // *********** geolocate user ************

            // find the user's position
            navigator.geolocation.getCurrentPosition(function(position) {
                pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

                // mark the user with a blue dot
                marker = new google.maps.Marker({
                    position: pos,
                    title: 'my Location',
                    icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
                    map: this.map
                });

				        var latLng = marker.getPosition(); // returns LatLng object
				        this.map.setCenter(latLng);

                // mark red dot for Belfast
                marker2 = new google.maps.Marker({
                    position: desLatlng,
                    title: 'Belfast',
                    icon: 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png',
                    map: this.map
                });

                // Add circle overlay and bind to marker
                var circle = new google.maps.Circle({
                    map: this.map,
                    radius: 4828.03,    // 3 miles in metres
                    fillColor: '#ffff00'
                });
                circle.bindTo('center', marker2, 'position');
                // ** check circle for user **
                bounds = circle.getBounds();
                bool = bounds.contains(pos);
                // change text with bool
                if (bool == true) {
                    document.getElementById("getBool").innerHTML = "in";
                } else {
                    document.getElementById("getBool").innerHTML = "outside";
                }

                // ** difference **
                dist = google.maps.geometry.spherical.computeDistanceBetween(desLatlng, pos);
                // change text with distance
                dist = dist * 0.000621371;
                document.getElementById("getDist").innerHTML = dist.toFixed(2);

            });

            //************ end of geo locate user **************

            //var map = new google.maps.Map(document.getElementById('map'), mapOptions);





        } // end of inital..

        // to launch the map
        //google.maps.event.addDomListener(window, 'load', initialize);


    //this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

  }

}
