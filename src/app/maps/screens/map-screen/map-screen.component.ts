import { Component, inject } from '@angular/core';
import { PlacesService } from '../../services';
import { MapViewComponent } from "../../components/map-view/map-view.component";
import { LoadingComponent } from '../../components/loading/loading.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'screens-map-screen',
  standalone: true,
  imports: [CommonModule,MapViewComponent,LoadingComponent],
  templateUrl: './map-screen.component.html',
  styleUrl: './map-screen.component.css'
})
export default class MapScreenComponent {

  private placesService = inject(PlacesService);

  get isUserLocationReady(){
    return this.placesService.isUserLocationReady;
  }



}
