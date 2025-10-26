import { Routes } from '@angular/router';
import { MapComponent } from './components/map-component/map-component';

export const routes: Routes = [
  { path: '', component: MapComponent },
  { path: 'map', component: MapComponent }
];
