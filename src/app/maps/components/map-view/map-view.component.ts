import { AfterViewInit, Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { PlacesService } from '../../services/places.service';
import { Map } from 'mapbox-gl';

@Component({
  selector: 'app-map-view',
  standalone: true,
  imports: [],
  templateUrl: './map-view.component.html',
  styleUrl: './map-view.component.css'
})
export class MapViewComponent implements AfterViewInit {

  private placesService = inject(PlacesService);

  @ViewChild('mapDiv') mapDivElement!:ElementRef;

  ngAfterViewInit(): void {
    if(!this.placesService.userLocation) throw Error('No hay placesService.useLocation');
    const map = new Map({
      container: this.mapDivElement.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.placesService.userLocation, // starting position [lng, lat]
      zoom: 14, // starting zoom
    });
  }

}
