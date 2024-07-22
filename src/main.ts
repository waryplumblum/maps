import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken = 'pk.eyJ1Ijoid2FjaGltaXJvIiwiYSI6ImNseWoxajZwcjA4eGsya3EzaHo2dzZtOTIifQ.E3rhnd7xIkYiViKehhwA-g';

if(!navigator.geolocation){
  alert('Navegador no soporta el Geolocation.');
  console.log('Navegador no soporta el Geolocation.');
  throw new Error('Navegador no soporta el Geolocation.');
}

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

