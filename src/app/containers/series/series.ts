import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SerieComponent } from '../../components/serie/serie.component';
import { MenuComponent } from '../../components/menu/menu.component';
import { SortDropdownComponent, SortOption } from '../../components/sort-dropdown/sort-dropdown.component';
import { StatsDisplayComponent, StatItem } from '../../components/stats-display/stats-display.component';
import { Serie } from '../../utils/series/series_1';
import { getTotalWatchingTime, getTotalDuration } from '../../utils/stats.utils';

// Import de tous les fichiers de séries
import { series1 } from '../../utils/series/series_1';
import { series2 } from '../../utils/series/series_2';

@Component({
  selector: 'app-series',
  standalone: true,
  imports: [CommonModule, SerieComponent, MenuComponent, SortDropdownComponent, StatsDisplayComponent],
  templateUrl: './series.html',
  styleUrls: ['./series.scss']
})
export class SeriesComponent implements OnInit {
  allSeries: Serie[] = [];
  sortedSeries: Serie[] = [];
  selectedSort: string = 'timesWatched';
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
    { value: 'totalLength', label: 'Durée (long)' },
    { value: 'totalLength-asc', label: 'Durée (court)' },
    { value: 'nbSeasons', label: 'Saisons (élevé)' },
    { value: 'nbSeasons-asc', label: 'Saisons (faible)' },
    { value: 'nbEpisodesTotal', label: 'Épisodes (élevé)' },
    { value: 'nbEpisodesTotal-asc', label: 'Épisodes (faible)' }
  ];

  ngOnInit() {
    // Agréger toutes les séries de tous les fichiers
    this.allSeries = [
      ...series1,
      ...series2
    ];

    this.sortSeries();
    this.updateStats();
    console.log(`Collection de ${this.allSeries.length} séries chargée`);
  }

  onSortChange(sortValue: string) {
    this.selectedSort = sortValue;
    this.sortSeries();
  }

  private updateStats() {
    const totalDuration = getTotalDuration(this.allSeries);
    const totalWatchingTime = getTotalWatchingTime(this.allSeries);

    this.stats = [
      {
        label: 'Durée totale de toutes les séries',
        value: totalDuration.formatted,
        icon: '📺',
        color: 'success'
      },
      {
        label: 'Temps total passé devant des séries',
        value: totalWatchingTime.formatted,
        icon: '⏱️',
        color: 'primary'
      }
    ];
  }

  private sortSeries() {
    this.sortedSeries = [...this.allSeries];

    switch (this.selectedSort) {
      case 'title':
        this.sortedSeries.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'title-desc':
        this.sortedSeries.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case 'releaseDate':
        this.sortedSeries.sort((a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime());
        break;
      case 'releaseDate-asc':
        this.sortedSeries.sort((a, b) => new Date(a.releaseDate).getTime() - new Date(b.releaseDate).getTime());
        break;
      case 'rating':
        this.sortedSeries.sort((a, b) => b.rating - a.rating);
        break;
      case 'rating-asc':
        this.sortedSeries.sort((a, b) => a.rating - b.rating);
        break;
      case 'timesWatched':
        this.sortedSeries.sort((a, b) => b.timesWatched - a.timesWatched);
        break;
      case 'timesWatched-asc':
        this.sortedSeries.sort((a, b) => a.timesWatched - b.timesWatched);
        break;
      case 'totalLength':
        this.sortedSeries.sort((a, b) => b.totalLength - a.totalLength);
        break;
      case 'totalLength-asc':
        this.sortedSeries.sort((a, b) => a.totalLength - b.totalLength);
        break;
      case 'nbSeasons':
        this.sortedSeries.sort((a, b) => b.nbSeasons - a.nbSeasons);
        break;
      case 'nbSeasons-asc':
        this.sortedSeries.sort((a, b) => a.nbSeasons - b.nbSeasons);
        break;
      case 'nbEpisodesTotal':
        this.sortedSeries.sort((a, b) => b.nbEpisodesTotal - a.nbEpisodesTotal);
        break;
      case 'nbEpisodesTotal-asc':
        this.sortedSeries.sort((a, b) => a.nbEpisodesTotal - b.nbEpisodesTotal);
        break;
      default:
        this.sortedSeries.sort((a, b) => a.title.localeCompare(b.title));
    }
  }
}