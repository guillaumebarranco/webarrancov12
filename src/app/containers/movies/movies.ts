import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from '../../components/movie/movie.component';
import { MenuComponent } from '../../components/menu/menu.component';
import { SortDropdownComponent, SortOption } from '../../components/sort-dropdown/sort-dropdown.component';
import { StatsDisplayComponent, StatItem } from '../../components/stats-display/stats-display.component';
import { Movie } from '../../utils/movies/movies_1';
import { getTotalWatchingTime, getTotalDuration } from '../../utils/stats.utils';

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
import { moviesMcu } from '../../utils/movies/movies_mcu';
import { moviesDc } from '../../utils/movies/movies_dc';
import { moviesOtherSuperheroes } from '../../utils/movies/movies_other_superheroes';
import { moviesLove1 } from '../../utils/movies/movies_love_1';
import { moviesLove2 } from '../../utils/movies/movies_love_2';
import { moviesAnimated1 } from '../../utils/movies/movies_animated_1';
import { moviesAnimated2 } from '../../utils/movies/movies_animated_2';
import { moviesSagaPage1 } from '../../utils/movies/movies_saga_1';
import { moviesSagaPage2 } from '../../utils/movies/movies_saga_2';
import { moviesSagaPage3 } from '../../utils/movies/movies_saga_3';
import { moviesSagaPage4 } from '../../utils/movies/movies_saga_4';
import { moviesSagaPage5 } from '../../utils/movies/movies_saga_5';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule, MovieComponent, MenuComponent, SortDropdownComponent, StatsDisplayComponent],
  templateUrl: './movies.html',
  styleUrls: ['./movies.scss']
})
export class MoviesComponent implements OnInit {
  allMovies: Movie[] = [];
  sortedMovies: Movie[] = [];
  selectedSort: string = 'rating';
  stats: StatItem[] = [];

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
    { value: 'lastViewedDate-asc', label: 'Dernier visionnage (ancien)' }
  ];

  ngOnInit() {
    // Agréger tous les films de tous les fichiers
    this.allMovies = [
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
    ];

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
        color: 'success'
      },
      {
        label: 'Temps total passé devant des films',
        value: totalWatchingTime.formatted,
        icon: '⏱️',
        color: 'primary'
      }
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
        this.sortedMovies.sort((a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime());
        break;
      case 'releaseDate-asc':
        this.sortedMovies.sort((a, b) => new Date(a.releaseDate).getTime() - new Date(b.releaseDate).getTime());
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
          const dateA = a.lastViewedDate ? new Date(a.lastViewedDate).getTime() : 0;
          const dateB = b.lastViewedDate ? new Date(b.lastViewedDate).getTime() : 0;
          return dateB - dateA;
        });
        break;
      case 'lastViewedDate-asc':
        this.sortedMovies.sort((a, b) => {
          const dateA = a.lastViewedDate ? new Date(a.lastViewedDate).getTime() : 0;
          const dateB = b.lastViewedDate ? new Date(b.lastViewedDate).getTime() : 0;
          return dateA - dateB;
        });
        break;
      default:
        this.sortedMovies.sort((a, b) => a.title.localeCompare(b.title));
    }
  }
}