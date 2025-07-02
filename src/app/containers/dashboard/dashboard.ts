import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../../components/menu/menu.component';
import { StatsDisplayComponent, StatItem } from '../../components/stats-display/stats-display.component';
import { Book } from '../../utils/books/books';
import { Movie } from '../../utils/movies/movies_1';
import { Serie } from '../../utils/series/series_1';
import {
  getTotalPages,
  getTotalPagesRead,
  getEstimatedReadingTime,
  getTotalMangaPages,
  getTotalMangaTomesRead,
  getEstimatedMangaReadingTime,
  getTotalWatchingTime,
  getTotalDuration,
  formatTimeStats
} from '../../utils/stats.utils';

// Import de tous les fichiers de données
import { books } from '../../utils/books/books';
import { booksFantasySaga } from '../../utils/books/books-fantasy-saga';
import { booksSaga } from '../../utils/books/books-saga';
import { mangas } from '../../utils/mangas/mangas';
import { manwhas } from '../../utils/mangas/manwhas';
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
import { series1 } from '../../utils/series/series_1';
import { series2 } from '../../utils/series/series_2';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MenuComponent, StatsDisplayComponent],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss']
})
export class DashboardComponent implements OnInit {
  stats: StatItem[] = [];
  readingStats: StatItem[] = [];
  watchingStats: StatItem[] = [];

  ngOnInit() {
    this.loadAllData();
    this.calculateStats();
  }

  private loadAllData() {
    // Les données sont chargées directement depuis les imports
    console.log('Dashboard: Données chargées');
  }

  private calculateStats() {
    // Calcul des statistiques de lecture
    const allBooks = [...books, ...booksFantasySaga, ...booksSaga];
    const allMangas = mangas.map(manga => ({
      title: manga._source.manga.frenchName || manga._source.manga.name,
      nbTomes: manga._source.manga.france.nbBooks || 0,
      readTimes: manga._readTimes || 1
    }));
    const allManwhas = manwhas.map(manwha => ({
      title: manwha._source.manga.name,
      nbTomes: manwha._source.manga.france.nbBooks || 0,
      readTimes: manwha._readTimes || 1
    }));

    // Calcul des statistiques de visionnage
    const allMovies = [
      ...moviesPage1, ...moviesPage2, ...moviesBigSagas, ...moviesLove,
      ...moviesMcu, ...moviesOtherSuperheroes, ...moviesAnimated,
      ...moviesPage3, ...moviesPage4, ...moviesPage5, ...moviesPage6,
      ...moviesPage7, ...moviesPage8, ...moviesPage9, ...moviesPage10, ...moviesPage11
    ];
    const allSeries = [...series1, ...series2];

    // Statistiques de lecture
    const booksPages = getTotalPages(allBooks);
    const booksPagesRead = getTotalPagesRead(allBooks);
    const booksReadingTime = getEstimatedReadingTime(allBooks);
    const mangasPages = getTotalMangaPages(allMangas);
    const mangasTomesRead = getTotalMangaTomesRead(allMangas);
    const mangasReadingTime = getEstimatedMangaReadingTime(allMangas);
    const manwhasPages = getTotalMangaPages(allManwhas);
    const manwhasTomesRead = getTotalMangaTomesRead(allManwhas);
    const manwhasReadingTime = getEstimatedMangaReadingTime(allManwhas);

    // Statistiques de visionnage
    const moviesWatchingTime = getTotalWatchingTime(allMovies);
    const moviesDuration = getTotalDuration(allMovies);
    const seriesWatchingTime = getTotalWatchingTime(allSeries);
    const seriesDuration = getTotalDuration(allSeries);

    // Temps total de lecture
    const totalReadingMinutes = booksReadingTime.days * 24 * 60 + booksReadingTime.hours * 60 + booksReadingTime.minutes +
      mangasReadingTime.days * 24 * 60 + mangasReadingTime.hours * 60 + mangasReadingTime.minutes +
      manwhasReadingTime.days * 24 * 60 + manwhasReadingTime.hours * 60 + manwhasReadingTime.minutes;
    const totalReadingTime = formatTimeStats(totalReadingMinutes);

    // Temps total de visionnage
    const totalWatchingMinutes = moviesWatchingTime.days * 24 * 60 + moviesWatchingTime.hours * 60 + moviesWatchingTime.minutes +
      seriesWatchingTime.days * 24 * 60 + seriesWatchingTime.hours * 60 + seriesWatchingTime.minutes;
    const totalWatchingTime = formatTimeStats(totalWatchingMinutes);

    // Statistiques générales
    this.stats = [
      {
        label: 'Temps total passé à lire (livres + mangas)',
        value: totalReadingTime.formatted,
        icon: '📚',
        color: 'primary'
      },
      {
        label: 'Temps total passé à regarder (films + séries)',
        value: totalWatchingTime.formatted,
        icon: '🎬',
        color: 'success'
      },
      {
        label: 'Livres lus',
        value: `${allBooks.length} livres`,
        icon: '📖',
        color: 'info'
      },
      {
        label: 'Mangas lus',
        value: `${allMangas.length} mangas`,
        icon: '📚',
        color: 'warning'
      },
      {
        label: 'Manwhas lus',
        value: `${allManwhas.length} manwhas`,
        icon: '📖',
        color: 'secondary'
      },
      {
        label: 'Films visionnés',
        value: `${allMovies.length} films`,
        icon: '🎬',
        color: 'success'
      },
      {
        label: 'Séries visionnées',
        value: `${allSeries.length} séries`,
        icon: '📺',
        color: 'warning'
      }
    ];

    // Statistiques détaillées de lecture
    this.readingStats = [
      {
        label: 'Pages de livres lues',
        value: `${booksPagesRead.toLocaleString()} pages`,
        icon: '📖',
        color: 'info'
      },
      {
        label: 'Tomes de mangas lus',
        value: `${mangasTomesRead.toLocaleString()} tomes`,
        icon: '📚',
        color: 'warning'
      },
      {
        label: 'Tomes de manwhas lus',
        value: `${manwhasTomesRead.toLocaleString()} tomes`,
        icon: '📖',
        color: 'secondary'
      }
    ];

    // Statistiques détaillées de visionnage
    this.watchingStats = [
      {
        label: 'Durée totale des films',
        value: moviesDuration.formatted,
        icon: '🎬',
        color: 'success'
      },
      {
        label: 'Durée totale des séries',
        value: seriesDuration.formatted,
        icon: '📺',
        color: 'warning'
      }
    ];
  }
}