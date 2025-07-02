import { Routes } from '@angular/router';
import { HomeComponent } from './containers/home/home.component';
import { BooksComponent } from './containers/books/books';
import { MangasComponent } from './containers/mangas/mangas';
import { ManwhasComponent } from './containers/manwhas/manwhas';
import { MoviesComponent } from './containers/movies/movies';
import { SeriesComponent } from './containers/series/series';
import { DashboardComponent } from './containers/dashboard/dashboard';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'books',
    component: BooksComponent,
  },
  {
    path: 'mangas',
    component: MangasComponent,
  },
  {
    path: 'manwhas',
    component: ManwhasComponent,
  },
  {
    path: 'movies',
    component: MoviesComponent,
  },
  {
    path: 'series',
    component: SeriesComponent,
  },
];
