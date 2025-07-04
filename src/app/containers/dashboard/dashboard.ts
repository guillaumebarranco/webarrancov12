import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../../components/menu/menu.component';
import { StatsDisplayComponent, StatItem } from '../../components/stats-display/stats-display.component';
import { Book } from '../../utils/books/books';
import { Movie } from '../../utils/movies/movies_1';
import { Serie } from '../../utils/series/series_1';
import { Game } from '../../utils/games/games_1';
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
import { games1 } from '../../utils/games/games_1';
import { games2 } from '../../utils/games/games_2';
import { games3 } from '../../utils/games/games_3';
import { games4 } from '../../utils/games/games_4';

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
  gamingStats: StatItem[] = [];
  topBooks: any[] = [];
  topMangas: any[] = [];
  topMovies: any[] = [];
  topSeries: any[] = [];
  topGames: any[] = [];

  ngOnInit() {
    this.loadAllData();
    this.calculateStats();
    this.calculateTop5();
  }

  private loadAllData() {
    // Les données sont chargées directement depuis les imports
    console.log('Dashboard: Données chargées');
  }

  private calculateStats() {
    // Calcul des statistiques des livres
    const allBooks = [...books, ...booksFantasySaga, ...booksSaga];
    const booksCount = allBooks.length;
    const booksReadTimes = allBooks.reduce((sum, book) => sum + (book.readTimes || 1), 0);
    const booksTotalPages = allBooks.reduce((sum, book) => sum + ((book.pages || 0) * (book.readTimes || 1)), 0);
    const booksTotalReadingTime = (booksTotalPages * 2) / 60; // 2 minutes par page, converti en heures

    // Calcul des statistiques des mangas
    const mangasCount = mangas.length;
    const mangasReadTimes = mangas.reduce((sum, manga) => sum + (manga._readTimes || 1), 0);
    const mangasTotalTomes = mangas.reduce((sum, manga) => sum + ((manga._source.manga.france.nbBooks || 0) * (manga._readTimes || 1)), 0);
    const mangasTotalReadingTime = (mangasTotalTomes * 30) / 60; // 30 minutes par tome, converti en heures

    // Calcul des statistiques des manwhas
    const manwhasCount = manwhas.length;
    const manwhasReadTimes = manwhas.reduce((sum, manwha) => sum + (manwha._readTimes || 1), 0);
    const manwhasTotalTomes = manwhas.reduce((sum, manwha) => sum + ((manwha._source.manga.france.nbBooks || 0) * (manwha._readTimes || 1)), 0);
    const manwhasTotalReadingTime = (manwhasTotalTomes * 30) / 60; // 30 minutes par tome, converti en heures

    // Calcul des statistiques des films
    const allMovies = [
      ...moviesPage1, ...moviesPage2, ...moviesBigSagas, ...moviesLove,
      ...moviesMcu, ...moviesOtherSuperheroes, ...moviesAnimated,
      ...moviesPage3, ...moviesPage4, ...moviesPage5, ...moviesPage6,
      ...moviesPage7, ...moviesPage8, ...moviesPage9, ...moviesPage10, ...moviesPage11
    ];
    const moviesCount = allMovies.length;
    const moviesWatchTimes = allMovies.reduce((sum, movie) => sum + movie.timesWatched, 0);
    const moviesTotalWatchingTime = allMovies.reduce((sum, movie) => sum + ((movie.length / 60) * movie.timesWatched), 0);

    // Calcul des statistiques des séries
    const allSeries = [...series1, ...series2];
    const seriesCount = allSeries.length;
    const seriesWatchTimes = allSeries.reduce((sum, serie) => sum + serie.timesWatched, 0);
    const seriesTotalWatchingTime = allSeries.reduce((sum, serie) => sum + ((serie.totalLength / 60) * serie.timesWatched), 0);

    // Calcul des statistiques des jeux
    const allGames = [...games1, ...games2, ...games3, ...games4];
    const gamesCount = allGames.length;
    const gamesTotalTime = allGames.reduce((sum, game) => sum + game.averageTimeToFinish * game.timesFinished + game.additionnalEstimatedTime, 0);

    // Calcul du temps total de visionnage (films + séries)
    const totalWatchingTime = moviesTotalWatchingTime + seriesTotalWatchingTime;

    // Statistiques générales
    this.stats = [
      {
        label: 'Livres lus',
        value: booksCount.toString(),
        icon: '📖',
        color: 'primary'
      },
      {
        label: 'Mangas lus',
        value: mangasCount.toString(),
        icon: '📚',
        color: 'secondary'
      },
      {
        label: 'Manwhas lus',
        value: manwhasCount.toString(),
        icon: '📖',
        color: 'info'
      },
      {
        label: 'Films vus',
        value: moviesCount.toString(),
        icon: '🎬',
        color: 'warning'
      },
      {
        label: 'Séries vues',
        value: seriesCount.toString(),
        icon: '📺',
        color: 'info'
      },
      {
        label: 'Jeux joués',
        value: gamesCount.toString(),
        icon: '🎮',
        color: 'success'
      },
      {
        label: 'Temps total passé à lire (livres + mangas + manwhas)',
        value: this.formatTime(booksTotalReadingTime + mangasTotalReadingTime + manwhasTotalReadingTime),
        icon: '📖',
        color: 'primary'
      },
      {
        label: 'Temps total passé à regarder (films + séries)',
        value: this.formatTime(totalWatchingTime),
        icon: '📺',
        color: 'success'
      },
      {
        label: 'Temps total pour terminer tous les jeux',
        value: this.formatTime(gamesTotalTime),
        icon: '🎮',
        color: 'secondary'
      }
    ];

    // Statistiques détaillées de lecture
    this.readingStats = [
      {
        label: 'Pages de livres lues',
        value: `${booksTotalPages.toLocaleString()} pages`,
        icon: '📖',
        color: 'info'
      },
      {
        label: 'Tomes de mangas lus',
        value: `${mangasTotalTomes.toLocaleString()} tomes`,
        icon: '📚',
        color: 'warning'
      },
      {
        label: 'Tomes de manwhas lus',
        value: `${manwhasTotalTomes.toLocaleString()} tomes`,
        icon: '📖',
        color: 'secondary'
      },
      {
        label: 'Temps total de lecture',
        value: this.formatTime(booksTotalReadingTime + mangasTotalReadingTime + manwhasTotalReadingTime),
        icon: '⏱️',
        color: 'primary'
      }
    ];

    // Statistiques détaillées de visionnage
    this.watchingStats = [
      {
        label: 'Durée totale des films',
        value: this.formatTime(moviesTotalWatchingTime),
        icon: '🎬',
        color: 'success'
      },
      {
        label: 'Durée totale des séries',
        value: this.formatTime(seriesTotalWatchingTime),
        icon: '📺',
        color: 'warning'
      },
      {
        label: 'Temps total de visionnage',
        value: this.formatTime(totalWatchingTime),
        icon: '⏱️',
        color: 'info'
      }
    ];

    // Statistiques détaillées de jeux vidéo
    this.gamingStats = [
      {
        label: 'Temps total pour terminer tous les jeux',
        value: this.formatTime(gamesTotalTime),
        icon: '🎮',
        color: 'secondary'
      },
      {
        label: 'Temps moyen par jeu',
        value: gamesCount > 0 ? this.formatTime(gamesTotalTime / gamesCount) : '0h',
        icon: '⏱️',
        color: 'warning'
      }
    ];
  }

  private formatTime(hours: number): string {
    if (hours >= 200) {
      const days = hours / 24;
      return `${days.toFixed(1)}j`;
    }
    return `${hours.toFixed(1)}h`;
  }

  private calculateTop5() {
    // Top 5 des livres les plus lus
    const allBooks = [...books, ...booksFantasySaga, ...booksSaga];
    this.topBooks = allBooks
      .filter(book => book.readTimes && book.readTimes > 1)
      .map(book => ({
        ...book,
        totalReadingTime: ((book.pages || 0) * 2 * (book.readTimes || 1)) / 60, // 2 minutes par page, converti en heures
        formattedReadingTime: this.formatTime(((book.pages || 0) * 2 * (book.readTimes || 1)) / 60)
      }))
      .sort((a, b) => (b.readTimes || 0) - (a.readTimes || 0))
      .slice(0, 5);

    // Top 5 des mangas les plus lus
    const allMangas = mangas.map(manga => ({
      title: manga._source.manga.frenchName || manga._source.manga.name,
      readTimes: manga._readTimes || 1,
      nbTomes: manga._source.manga.france.nbBooks || 0
    }));
    this.topMangas = allMangas
      .filter(manga => manga.readTimes > 1)
      .map(manga => ({
        ...manga,
        totalReadingTime: (manga.nbTomes * 30 * manga.readTimes) / 60, // 30 minutes par tome, converti en heures
        formattedReadingTime: this.formatTime((manga.nbTomes * 30 * manga.readTimes) / 60)
      }))
      .sort((a, b) => b.readTimes - a.readTimes)
      .slice(0, 5);

    // Top 5 des films les plus vus
    const allMovies = [
      ...moviesPage1, ...moviesPage2, ...moviesBigSagas, ...moviesLove,
      ...moviesMcu, ...moviesOtherSuperheroes, ...moviesAnimated,
      ...moviesPage3, ...moviesPage4, ...moviesPage5, ...moviesPage6,
      ...moviesPage7, ...moviesPage8, ...moviesPage9, ...moviesPage10, ...moviesPage11
    ];
    this.topMovies = allMovies
      .filter(movie => movie.timesWatched > 1)
      .map(movie => ({
        ...movie,
        totalWatchingTime: (movie.length / 60) * movie.timesWatched, // Convertir minutes en heures
        formattedWatchingTime: this.formatTime((movie.length / 60) * movie.timesWatched)
      }))
      .sort((a, b) => b.timesWatched - a.timesWatched)
      .slice(0, 5);

    // Top 5 des séries les plus vues
    const allSeries = [...series1, ...series2];
    this.topSeries = allSeries
      .filter(serie => serie.timesWatched > 1)
      .map(serie => ({
        ...serie,
        totalWatchingTime: (serie.totalLength / 60) * serie.timesWatched, // Convertir minutes en heures
        formattedWatchingTime: this.formatTime((serie.totalLength / 60) * serie.timesWatched)
      }))
      .sort((a, b) => b.timesWatched - a.timesWatched)
      .slice(0, 5);

    // Top 5 des jeux avec le plus de temps passé
    const allGames = [...games1, ...games2, ...games3, ...games4];
    this.topGames = allGames
      .map(game => ({
        ...game,
        totalPlayedTime: game.averageTimeToFinish * game.timesFinished + game.additionnalEstimatedTime,
        formattedPlayedTime: this.formatTime(game.averageTimeToFinish * game.timesFinished + game.additionnalEstimatedTime)
      }))
      .sort((a, b) => b.totalPlayedTime - a.totalPlayedTime)
      .slice(0, 5);
  }

  private getTotalGamesTime(games: Game[]) {
    let totalHours = 0;
    for (const game of games) {
      totalHours += game.averageTimeToFinish;
    }
    return formatTimeStats(totalHours * 60);
  }

  private getTotalGamesPlayedTime(games: Game[]) {
    let totalHours = 0;
    for (const game of games) {
      totalHours += game.averageTimeToFinish * game.timesFinished + game.additionnalEstimatedTime;
    }
    return formatTimeStats(totalHours * 60);
  }
}