import { Component, inject } from '@angular/core';
import { PlacesService } from '../../services';
import { MapViewComponent } from "../../components/map-view/map-view.component";
import { LoadingComponent } from '../../components/loading/loading.component';
import { CommonModule } from '@angular/common';
import { AngularLogoComponent } from "../../components/angular-logo/angular-logo.component";
import { BtnMyLocationComponent } from "../../components/btn-my-location/btn-my-location.component";
import { SearchBarComponent } from "../../components/search-bar/search-bar.component";

@Component({
  selector: 'screens-map-screen',
  standalone: true,
  imports: [CommonModule, MapViewComponent, LoadingComponent, AngularLogoComponent, BtnMyLocationComponent, SearchBarComponent],
  templateUrl: './map-screen.component.html',
  styleUrl: './map-screen.component.css'
})
export default class MapScreenComponent {

  private placesService = inject(PlacesService);

  get isUserLocationReady(){
    return this.placesService.isUserLocationReady;
  }



}
