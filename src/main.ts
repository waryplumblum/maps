import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

if(!navigator.geolocation){
  alert('Navegador no soporta el Geolocation.');
  console.log('Navegador no soporta el Geolocation.');
  throw new Error('Navegador no soporta el Geolocation.');
}

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

