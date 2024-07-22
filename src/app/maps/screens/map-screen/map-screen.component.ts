import { Component, inject } from '@angular/core';
import { PlacesService } from '../../services';

@Component({
  selector: 'screens-map-screen',
  standalone: true,
  imports: [],
  templateUrl: './map-screen.component.html',
  styleUrl: './map-screen.component.css'
})
export default class MapScreenComponent {

  private placesService = inject(PlacesService);

  

}
