import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  public userLocation?:[number,number];

  get isUserLocationReady():boolean{
    return !!this.userLocation;
  }

  constructor() {
    this.getUserLocation();
  }

  getUserLocation():Promise<[number,number]>{
    return new Promise( (resolve,reject) => {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          this.userLocation = [ coords.longitude, coords.latitude ];
          // console.log('Coordinates: ', this.userLocation);
          resolve( this.userLocation );
        },
        (err) => {
          alert('No se pudo obtener la geolocalización.')
          console.log(err);
          reject();
        }
      );
    });
  }

}
