import { Routes } from '@angular/router';
import { HomeComponent } from './home/containers';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
];
