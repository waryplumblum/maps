import { Component, inject } from '@angular/core';
import { MapService, PlacesService } from '../../services';
import { Feature } from '../../interfaces/places';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.css'
})
export class SearchResultsComponent {


  private placesService = inject(PlacesService);
  private mapService    = inject(MapService   );

  public selectedId:string = '';

  get isLoadingPlaces():boolean {
    return this.placesService.isLoadingPlaces;
  }

  get places():Feature[]{
    return this.placesService.places;
  }

  flyTo(place:Feature){
    this.selectedId = place.id;
    const [lng,lat] = place.center;
    this.mapService.flyTo([lng,lat]);
  }

  getDirections(place: Feature) {
    if(!this.placesService.userLocation) throw Error('No hay userLocation');

    this.placesService.deletePlaces();

    const start = this.placesService.userLocation;
    const end   = place.center as [number,number];

    this.mapService.getRouteBetweenPoints(start,end);
  }

}
