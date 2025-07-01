import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from '../../components/movie/movie.component';
import { MenuComponent } from '../../components/menu/menu.component';
import { SortDropdownComponent, SortOption } from '../../components/sort-dropdown/sort-dropdown.component';
import { Movie } from '../../utils/movies/movies_1';

// Import de tous les fichiers de films
import { moviesPage1 } from '../../utils/movies/movies_1';
import { moviesPage2 } from '../../utils/movies/movies_2';
import { moviesPage3 } from '../../utils/movies/movies_3';
import { moviesPage4 } from '../../utils/movies/movies_4';
import { moviesPage5 } from '../../utils/movies/movies_5';
import { moviesPage6 } from '../../utils/movies/movies_6';
import { moviesPage7 } from '../../utils/movies/movies_7';
import { moviesPage8 } from '../../utils/movies/movies_8';
import { moviesPage9 } from '../../utils/movies/movies_9';
import { moviesPage10 } from '../../utils/movies/movies_10';
import { moviesPage11 } from '../../utils/movies/movies_11';
import { moviesBigSagas } from '../../utils/movies/movies_big_sagas';
import { moviesLove } from '../../utils/movies/movies_love';
import { moviesMcu } from '../../utils/movies/movies_mcu';
import { moviesOtherSuperheroes } from '../../utils/movies/movies_other_superheroes';
import { moviesAnimated } from '../../utils/movies/movies_animated';

function getTotalWatchingTime(movies: Movie[]): { days: number, hours: number, minutes: number, formatted: string } {
  let totalMinutes = 0;
  for (const movie of movies) {
    if (movie.length && movie.timesWatched) {
      totalMinutes += movie.length * movie.timesWatched;
    } else {
      console.log(movie.title);
    }
  }
  const days = Math.floor(totalMinutes / (24 * 60));
  const hours = Math.floor((totalMinutes % (24 * 60)) / 60);
  const minutes = totalMinutes % 60;
  let formatted = '';
  if (days > 0) formatted += `${days} jours`;
  if (hours > 0) formatted += (formatted ? ', ' : '') + `${hours} heures`;
  if (minutes > 0) formatted += (formatted ? ' et ' : '') + `${minutes} minutes`;
  if (!formatted) formatted = '0 minutes';
  return { days, hours, minutes, formatted };
}

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule, MovieComponent, MenuComponent, SortDropdownComponent],
  templateUrl: './movies.html',
  styleUrls: ['./movies.scss']
})
export class MoviesComponent implements OnInit {
  allMovies: Movie[] = [];
  sortedMovies: Movie[] = [];
  selectedSort: string = 'timesWatched';
  totalWatchingTime: string = '';

  sortOptions: SortOption[] = [
    { value: 'title', label: 'Titre (A-Z)' },
    { value: 'title-desc', label: 'Titre (Z-A)' },
    { value: 'releaseDate', label: 'Date de sortie (récent)' },
    { value: 'releaseDate-asc', label: 'Date de sortie (ancien)' },
    { value: 'rating', label: 'Note (élevée)' },
    { value: 'rating-asc', label: 'Note (faible)' },
    { value: 'timesWatched', label: 'Visionnages (élevé)' },
    { value: 'timesWatched-asc', label: 'Visionnages (faible)' },
    { value: 'length', label: 'Durée (long)' },
    { value: 'length-asc', label: 'Durée (court)' }
  ];

  ngOnInit() {
    // Agréger tous les films de tous les fichiers
    this.allMovies = [
      ...moviesPage1,
      ...moviesPage2,
      ...moviesBigSagas,
      ...moviesLove,
      ...moviesMcu,
      ...moviesOtherSuperheroes,
      ...moviesAnimated,
      ...moviesPage3,
      ...moviesPage4,
      ...moviesPage5,
      ...moviesPage6,
      ...moviesPage7,
      ...moviesPage8,
      ...moviesPage9,
      ...moviesPage10,
      ...moviesPage11
    ];

    this.sortMovies();
    this.totalWatchingTime = getTotalWatchingTime(this.allMovies).formatted;
    console.log(`Collection de ${this.allMovies.length} films chargée`);
  }

  onSortChange(sortValue: string) {
    this.selectedSort = sortValue;
    this.sortMovies();
  }

  private sortMovies() {
    this.sortedMovies = [...this.allMovies];

    switch (this.selectedSort) {
      case 'title':
        this.sortedMovies.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'title-desc':
        this.sortedMovies.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case 'releaseDate':
        this.sortedMovies.sort((a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime());
        break;
      case 'releaseDate-asc':
        this.sortedMovies.sort((a, b) => new Date(a.releaseDate).getTime() - new Date(b.releaseDate).getTime());
        break;
      case 'rating':
        this.sortedMovies.sort((a, b) => b.rating - a.rating);
        break;
      case 'rating-asc':
        this.sortedMovies.sort((a, b) => a.rating - b.rating);
        break;
      case 'timesWatched':
        this.sortedMovies.sort((a, b) => b.timesWatched - a.timesWatched);
        break;
      case 'timesWatched-asc':
        this.sortedMovies.sort((a, b) => a.timesWatched - b.timesWatched);
        break;
      case 'length':
        this.sortedMovies.sort((a, b) => b.length - a.length);
        break;
      case 'length-asc':
        this.sortedMovies.sort((a, b) => a.length - b.length);
        break;
      default:
        this.sortedMovies.sort((a, b) => a.title.localeCompare(b.title));
    }
  }
}