import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from '../../components/game/game.component';
import { MenuComponent } from '../../components/menu/menu.component';
import {
  SortDropdownComponent,
  SortOption,
} from '../../components/sort-dropdown/sort-dropdown.component';
import {
  StatsDisplayComponent,
  StatItem,
} from '../../components/stats-display/stats-display.component';
import { Game } from '../../models/game-model';
import { games1, games2, games3, games4 } from '../../utils/guillaume/games';
import {
  formatTimeStats,
  ItemWithGameLength,
  TimeStats,
} from '../../utils/stats.utils';

export function getTotalDuration(items: ItemWithGameLength[]): TimeStats {
  let totalHours = 0;
  for (const item of items) {
    const length = item.averageTimeToFinish;
    totalHours += length;
  }
  return formatTimeStats(totalHours * 60);
}

export function getTotalPlayedTime(items: ItemWithGameLength[]): TimeStats {
  let totalHours = 0;
  for (const item of items) {
    const length =
      item.averageTimeToFinish * item.timesFinished +
      item.additionnalEstimatedTime;
    if (length) {
      totalHours += length;
    } else {
      console.log(`Missing data for: ${item.title}`);
    }
  }
  return formatTimeStats(totalHours * 60);
}

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [
    CommonModule,
    GameComponent,
    MenuComponent,
    SortDropdownComponent,
    StatsDisplayComponent,
  ],
  templateUrl: './games.html',
  styleUrls: ['./games.scss'],
})
export class GamesComponent implements OnInit {
  allGames: Game[] = [];
  sortedGames: Game[] = [];
  selectedSort: string = 'rating';
  stats: StatItem[] = [];

  sortOptions: SortOption[] = [
    { value: 'title', label: 'Titre (A-Z)' },
    { value: 'title-desc', label: 'Titre (Z-A)' },
    { value: 'releaseDate', label: 'Date de sortie (récent)' },
    { value: 'releaseDate-asc', label: 'Date de sortie (ancien)' },
    { value: 'rating', label: 'Note (élevée)' },
    { value: 'rating-asc', label: 'Note (faible)' },
    { value: 'timesFinished', label: 'Terminés (élevé)' },
    { value: 'timesFinished-asc', label: 'Terminés (faible)' },
    { value: 'averageTimeToFinish', label: 'Temps (long)' },
    { value: 'averageTimeToFinish-asc', label: 'Temps (court)' },
    { value: 'totalPlayedTime', label: 'Temps passé (élevé)' },
    { value: 'totalPlayedTime-asc', label: 'Temps passé (faible)' },
  ];

  ngOnInit() {
    // Utiliser les jeux du fichier existant
    this.allGames = [...games1, ...games2, ...games3, ...games4];

    this.sortGames();
    this.updateStats();
    console.log(`Collection de ${this.allGames.length} jeux chargée`);
  }

  onSortChange(sortValue: string) {
    this.selectedSort = sortValue;
    this.sortGames();
  }

  private updateStats() {
    const totalTime = getTotalDuration(this.allGames);
    const totalPlayTime = getTotalPlayedTime(this.allGames);

    this.stats = [
      {
        label: 'Temps total pour terminer tous les jeux',
        value: totalTime.formatted,
        icon: '🎮',
        color: 'success',
      },
      {
        label: 'Temps total passé à jouer',
        value: totalPlayTime.formatted,
        icon: '⏱️',
        color: 'primary',
      },
    ];
  }

  private sortGames() {
    this.sortedGames = [...this.allGames];

    switch (this.selectedSort) {
      case 'title':
        this.sortedGames.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'title-desc':
        this.sortedGames.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case 'releaseDate':
        this.sortedGames.sort(
          (a, b) =>
            new Date(b.releaseDate).getTime() -
            new Date(a.releaseDate).getTime()
        );
        break;
      case 'releaseDate-asc':
        this.sortedGames.sort(
          (a, b) =>
            new Date(a.releaseDate).getTime() -
            new Date(b.releaseDate).getTime()
        );
        break;
      case 'rating':
        this.sortedGames.sort((a, b) => {
          if (b.rating !== a.rating) {
            return b.rating - a.rating;
          }
          const totalTimeA =
            a.averageTimeToFinish * a.timesFinished +
            a.additionnalEstimatedTime;
          const totalTimeB =
            b.averageTimeToFinish * b.timesFinished +
            b.additionnalEstimatedTime;
          return totalTimeB - totalTimeA;
        });
        break;
      case 'rating-asc':
        this.sortedGames.sort((a, b) => {
          if (a.rating !== b.rating) {
            return a.rating - b.rating;
          }
          const totalTimeA =
            a.averageTimeToFinish * a.timesFinished +
            a.additionnalEstimatedTime;
          const totalTimeB =
            b.averageTimeToFinish * b.timesFinished +
            b.additionnalEstimatedTime;
          return totalTimeB - totalTimeA;
        });
        break;
      case 'timesFinished':
        this.sortedGames.sort((a, b) => b.timesFinished - a.timesFinished);
        break;
      case 'timesFinished-asc':
        this.sortedGames.sort((a, b) => a.timesFinished - b.timesFinished);
        break;
      case 'averageTimeToFinish':
        this.sortedGames.sort(
          (a, b) => b.averageTimeToFinish - a.averageTimeToFinish
        );
        break;
      case 'averageTimeToFinish-asc':
        this.sortedGames.sort(
          (a, b) => a.averageTimeToFinish - b.averageTimeToFinish
        );
        break;
      case 'totalPlayedTime':
        this.sortedGames.sort((a, b) => {
          const totalTimeA =
            a.averageTimeToFinish * a.timesFinished +
            a.additionnalEstimatedTime;
          const totalTimeB =
            b.averageTimeToFinish * b.timesFinished +
            b.additionnalEstimatedTime;
          return totalTimeB - totalTimeA;
        });
        break;
      case 'totalPlayedTime-asc':
        this.sortedGames.sort((a, b) => {
          const totalTimeA =
            a.averageTimeToFinish * a.timesFinished +
            a.additionnalEstimatedTime;
          const totalTimeB =
            b.averageTimeToFinish * b.timesFinished +
            b.additionnalEstimatedTime;
          return totalTimeA - totalTimeB;
        });
        break;
      default:
        this.sortedGames.sort((a, b) => a.title.localeCompare(b.title));
    }
  }
}
