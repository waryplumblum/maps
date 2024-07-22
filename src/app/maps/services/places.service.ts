import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Feature, PlacesResponse } from '../interfaces/places';

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

  constructor( private http:HttpClient) {
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

    this.isLoadingPlaces = true;

    this.http.get<PlacesResponse>(`https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?country=mx&proximity=-103.3774625890349%2C20.643222603680016&language=es&access_token=pk.eyJ1Ijoid2FjaGltaXJvIiwiYSI6ImNseWoxNjRoZjBsODYycW9tZDZqNGcxdXkifQ.WhbOpeFml-jIjGjTTTJFzw`)
      .subscribe( resp => {
        console.log(resp.features);
        this.isLoadingPlaces = false;
        this.places = resp.features;
      });
  }

}
