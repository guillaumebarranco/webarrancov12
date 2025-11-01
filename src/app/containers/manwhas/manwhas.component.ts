import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from '../../components/book/book.component';
import { MenuComponent } from '../../components/menu/menu.component';
import {
  SortDropdownComponent,
  SortOption,
} from '../../components/sort-dropdown/sort-dropdown.component';
import { manwhas } from '../../utils/guillaume/mangas/manwhas';
import { Book } from '../../models/book-model';

interface SagaGroup {
  saga: string;
  books: Book[];
}

@Component({
  selector: 'app-manwhas',
  standalone: true,
  imports: [CommonModule, BookComponent, MenuComponent, SortDropdownComponent],
  templateUrl: './manwhas.component.html',
  styleUrls: ['./manwhas.component.scss'],
})
export class ManwhasComponent implements OnInit {
  allManwhas: Book[] = [];
  sortedManwhas: Book[] = [];
  selectedSort: string = 'rating';

  sortOptions: SortOption[] = [
    { value: 'title', label: 'Titre (A-Z)' },
    { value: 'title-desc', label: 'Titre (Z-A)' },
    { value: 'author', label: 'Auteur (A-Z)' },
    { value: 'author-desc', label: 'Auteur (Z-A)' },
    { value: 'readDate', label: 'Date de lecture (récent)' },
    { value: 'readDate-asc', label: 'Date de lecture (ancien)' },
    { value: 'rating', label: 'Note (élevée)' },
    { value: 'rating-asc', label: 'Note (faible)' },
    { value: 'readTimes', label: 'Relectures (élevé)' },
    { value: 'readTimes-asc', label: 'Relectures (faible)' },
    { value: 'nbTomes', label: 'Nombre de tomes (élevé)' },
    { value: 'nbTomes-asc', label: 'Nombre de tomes (faible)' },
    { value: 'genre', label: 'Genre (A-Z)' },
    { value: 'genre-desc', label: 'Genre (Z-A)' },
  ];

  ngOnInit() {
    this.allManwhas = manwhas.map((manwha) => {
      return {
        title: manwha._source.manga.name,
        author: manwha._source.manga.authors[0].name,
        coverUrl: manwha._source.manga.france.logo || '',
        readDate: manwha._source.manga.lastUpdate || '',
        rating: manwha._score || 0,
        genre: manwha._source.manga.type || '',
        saga: manwha._source.manga.name,
        sagaOrder: 0,
        nbTomes: manwha._source.manga.france.nbBooks || 0,
        isFinished: manwha._source.manga.isFinished || false,
        readTimes: manwha._readTimes || 1,
      };
    });

    this.sortManwhas();
    console.log(`Collection de ${this.allManwhas.length} manwhas chargée`);
  }

  onSortChange(sortValue: string) {
    this.selectedSort = sortValue;
    this.sortManwhas();
  }

  private sortManwhas() {
    this.sortedManwhas = [...this.allManwhas];

    switch (this.selectedSort) {
      case 'title':
        this.sortedManwhas.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'title-desc':
        this.sortedManwhas.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case 'author':
        this.sortedManwhas.sort((a, b) => a.author.localeCompare(b.author));
        break;
      case 'author-desc':
        this.sortedManwhas.sort((a, b) => b.author.localeCompare(a.author));
        break;
      case 'readDate':
        this.sortedManwhas.sort(
          (a, b) =>
            new Date(b.readDate).getTime() - new Date(a.readDate).getTime()
        );
        break;
      case 'readDate-asc':
        this.sortedManwhas.sort(
          (a, b) =>
            new Date(a.readDate).getTime() - new Date(b.readDate).getTime()
        );
        break;
      case 'rating':
        this.sortedManwhas.sort((a, b) => {
          const ratingA = a.rating || 0;
          const ratingB = b.rating || 0;
          if (ratingB !== ratingA) {
            return ratingB - ratingA;
          }
          const readTimesA = a.readTimes || 0;
          const readTimesB = b.readTimes || 0;
          return readTimesB - readTimesA;
        });
        break;
      case 'rating-asc':
        this.sortedManwhas.sort((a, b) => {
          const ratingA = a.rating || 0;
          const ratingB = b.rating || 0;
          if (ratingA !== ratingB) {
            return ratingA - ratingB;
          }
          const readTimesA = a.readTimes || 0;
          const readTimesB = b.readTimes || 0;
          return readTimesB - readTimesA;
        });
        break;
      case 'readTimes':
        this.sortedManwhas.sort(
          (a, b) => (b.readTimes || 0) - (a.readTimes || 0)
        );
        break;
      case 'readTimes-asc':
        this.sortedManwhas.sort(
          (a, b) => (a.readTimes || 0) - (b.readTimes || 0)
        );
        break;
      case 'nbTomes':
        this.sortedManwhas.sort((a, b) => (b.nbTomes || 0) - (a.nbTomes || 0));
        break;
      case 'nbTomes-asc':
        this.sortedManwhas.sort((a, b) => (a.nbTomes || 0) - (b.nbTomes || 0));
        break;
      case 'genre':
        this.sortedManwhas.sort((a, b) => a.genre.localeCompare(b.genre));
        break;
      case 'genre-desc':
        this.sortedManwhas.sort((a, b) => b.genre.localeCompare(a.genre));
        break;
      default:
        this.sortedManwhas.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    }
  }
}
