import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from '../../components/movie/movie.component';
import { MenuComponent } from '../../components/menu/menu.component';
import {
  SortDropdownComponent,
  SortOption,
} from '../../components/sort-dropdown/sort-dropdown.component';
import {
  StatsDisplayComponent,
  StatItem,
} from '../../components/stats-display/stats-display.component';
import {
  getTotalWatchingTime,
  getTotalDuration,
} from '../../utils/stats.utils';
import { Movie } from '../../models/movie-model';
import {
  moviesPage1,
  moviesPage2,
  moviesPage3,
  moviesPage4,
  moviesPage5,
  moviesPage6,
  moviesPage7,
  moviesPage8,
  moviesPage9,
  moviesMcu,
  moviesDc,
  moviesOtherSuperheroes,
  moviesLove1,
  moviesLove2,
  moviesAnimated1,
  moviesAnimated2,
  moviesSagaPage1,
  moviesSagaPage2,
  moviesSagaPage3,
  moviesSagaPage4,
  moviesSagaPage5,
} from '../../utils/guillaume/movies';
import { williamMovies } from '../../utils/william/movies/william_movies';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [
    CommonModule,
    MovieComponent,
    MenuComponent,
    SortDropdownComponent,
    StatsDisplayComponent,
  ],
  templateUrl: './movies.html',
  styleUrls: ['./movies.scss'],
})
export class MoviesComponent implements OnInit {
  allMovies: Movie[] = [];
  sortedMovies: Movie[] = [];
  selectedSort: string = 'rating';
  stats: StatItem[] = [];
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);

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
    { value: 'length-asc', label: 'Durée (court)' },
    { value: 'lastViewedDate', label: 'Dernier visionnage (récent)' },
    { value: 'lastViewedDate-asc', label: 'Dernier visionnage (ancien)' },
  ];

  ngOnInit() {
    const movies = {
      guillaume: [
        ...moviesPage1,
        ...moviesPage2,
        ...moviesPage3,
        ...moviesPage4,
        ...moviesPage5,
        ...moviesPage6,
        ...moviesPage7,
        ...moviesPage8,
        ...moviesPage9,
        ...moviesSagaPage1,
        ...moviesSagaPage2,
        ...moviesSagaPage3,
        ...moviesSagaPage4,
        ...moviesSagaPage5,
        ...moviesLove1,
        ...moviesLove2,
        ...moviesMcu,
        ...moviesDc,
        ...moviesOtherSuperheroes,
        ...moviesAnimated1,
        ...moviesAnimated2,
      ],
      william: [...williamMovies],
    };
    const params: Params = this.activatedRoute.snapshot.params;

    const hasNameParam = params['id'] !== undefined;

    if (hasNameParam) {
      this.allMovies = movies[params['id'] as keyof typeof movies];
    } else {
      this.allMovies = movies.guillaume;
    }

    this.sortMovies();
    this.updateStats();
    console.log(`Collection de ${this.allMovies.length} films chargée`);
  }

  onSortChange(sortValue: string) {
    this.selectedSort = sortValue;
    this.sortMovies();
  }

  private updateStats() {
    const totalDuration = getTotalDuration(this.allMovies);
    const totalWatchingTime = getTotalWatchingTime(this.allMovies);

    this.stats = [
      {
        label: 'Durée totale de tous les films',
        value: totalDuration.formatted,
        icon: '🎬',
        color: 'success',
      },
      {
        label: 'Temps total passé devant des films',
        value: totalWatchingTime.formatted,
        icon: '⏱️',
        color: 'primary',
      },
    ];
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
        this.sortedMovies.sort(
          (a, b) =>
            new Date(b.releaseDate).getTime() -
            new Date(a.releaseDate).getTime()
        );
        break;
      case 'releaseDate-asc':
        this.sortedMovies.sort(
          (a, b) =>
            new Date(a.releaseDate).getTime() -
            new Date(b.releaseDate).getTime()
        );
        break;
      case 'rating':
        this.sortedMovies.sort((a, b) => {
          if (b.rating !== a.rating) {
            return b.rating - a.rating;
          }
          return b.timesWatched - a.timesWatched;
        });
        break;
      case 'rating-asc':
        this.sortedMovies.sort((a, b) => {
          if (a.rating !== b.rating) {
            return a.rating - b.rating;
          }
          return b.timesWatched - a.timesWatched;
        });
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
      case 'lastViewedDate':
        this.sortedMovies.sort((a, b) => {
          const dateA = a.lastViewedDate
            ? new Date(a.lastViewedDate).getTime()
            : 0;
          const dateB = b.lastViewedDate
            ? new Date(b.lastViewedDate).getTime()
            : 0;
          return dateB - dateA;
        });
        break;
      case 'lastViewedDate-asc':
        this.sortedMovies.sort((a, b) => {
          const dateA = a.lastViewedDate
            ? new Date(a.lastViewedDate).getTime()
            : 0;
          const dateB = b.lastViewedDate
            ? new Date(b.lastViewedDate).getTime()
            : 0;
          return dateA - dateB;
        });
        break;
      default:
        this.sortedMovies.sort((a, b) => a.title.localeCompare(b.title));
    }
  }
}
