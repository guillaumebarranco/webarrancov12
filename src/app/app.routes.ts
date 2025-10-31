import { Routes } from '@angular/router';
import { HomeComponent } from './containers/home/home.component';
import { BooksComponent } from './containers/books/books';
import { MangasComponent } from './containers/mangas/mangas';
import { ManwhasComponent } from './containers/manwhas/manwhas';
import { MoviesComponent } from './containers/movies/movies';
import { SeriesComponent } from './containers/series/series';
import { GamesComponent } from './containers/games/games';
import { DashboardComponent } from './containers/dashboard/dashboard';
import { NewsComponent } from './containers/news/news';

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
    children: [
      {
        path: ':id',
        component: MoviesComponent,
      },
    ],
  },
  {
    path: 'series',
    component: SeriesComponent,
  },
  {
    path: 'games',
    component: GamesComponent,
  },
  {
    path: 'news',
    component: NewsComponent,
  },
  {
    path: ':id',
    children: [
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
        children: [
          {
            path: ':id',
            component: MoviesComponent,
          },
        ],
      },
      {
        path: 'series',
        component: SeriesComponent,
      },
      {
        path: 'games',
        component: GamesComponent,
      },
    ],
  },
];
