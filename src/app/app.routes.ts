import { Routes } from '@angular/router';
import { HomeComponent } from './containers/home/home.component';
import { BooksComponent } from './containers/books/books';

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
    path: 'books',
    component: BooksComponent,
  },
];
