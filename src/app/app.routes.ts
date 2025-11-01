import { Routes } from '@angular/router';
import { HomeComponent } from './containers/home/home.component';
import { BooksComponent } from './containers/books/books.component';
import { MangasComponent } from './containers/mangas/mangas.component';
import { ManwhasComponent } from './containers/manwhas/manwhas.component';
import { MoviesComponent } from './containers/movies/movies.component';
import { SeriesComponent } from './containers/series/series.component';
import { GamesComponent } from './containers/games/games.component';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
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
        path: '',
        component: DashboardComponent,
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
    ],
  },
];
