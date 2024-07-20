import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'map-screen', loadComponent: () => import('./maps/screens/map-screen/map-screen.component'),
    children: [
      // { path: 'change-detection', title: 'Change Detection',loadComponent: () => import('./dashboard/pages/change-detection/change-detection.component'),},
      // { path: '', redirectTo: (route) => { return '' }, pathMatch: 'full' },
    ]
  },
  { path: '', redirectTo: '/map-screen', pathMatch: 'full'}
];
