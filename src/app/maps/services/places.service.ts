import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Feature, PlacesResponse } from '../interfaces/places';
import { PlacesApiClient } from '../api/placesApiClient';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  public userLocation?:[number,number];

  public isLoadingPlaces:boolean = false;
  public places:Feature[]=[];

  get isUserLocationReady():boolean{
    return !!this.userLocation;
  }

  constructor( private placesApi:PlacesApiClient) {
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

  getPlacesByQuery( query:String = '') {

    if(!this.userLocation) throw Error('No hay UserLocation.');

    this.isLoadingPlaces = true;

    this.placesApi.get<PlacesResponse>(`/${query}.json`,{
      params: {
        proximity: this.userLocation.join(',')
      }
    })
      .subscribe( resp => {
        console.log(resp.features);
        this.isLoadingPlaces = false;
        this.places = resp.features;
      });
  }

}
