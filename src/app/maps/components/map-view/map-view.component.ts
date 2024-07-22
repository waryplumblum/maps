import { Component, inject, OnInit } from '@angular/core';
import { PlacesService } from '../../services/places.service';

@Component({
  selector: 'app-map-view',
  standalone: true,
  imports: [],
  templateUrl: './map-view.component.html',
  styleUrl: './map-view.component.css'
})
export class MapViewComponent implements OnInit {

  private placesService = inject(PlacesService);

  ngOnInit(): void {
    console.log(this.placesService.userLocation);
  }

}
