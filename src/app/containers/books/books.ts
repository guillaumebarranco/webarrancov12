import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookComponent } from '../../components/book/book.component';
import { MenuComponent } from '../../components/menu/menu.component';
import { SortDropdownComponent, SortOption } from '../../components/sort-dropdown/sort-dropdown.component';
import { StatsDisplayComponent, StatItem } from '../../components/stats-display/stats-display.component';
import { Book } from '../../utils/books/books';
import { getTotalPages, getTotalPagesRead, getEstimatedReadingTime } from '../../utils/stats.utils';

// Import de tous les fichiers de livres
import { books } from '../../utils/books/books';
import { booksFantasySaga } from '../../utils/books/books-fantasy-saga';
import { booksSaga } from '../../utils/books/books-saga';

interface SagaGroup {
  saga: string;
  books: Book[];
}

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule, FormsModule, BookComponent, MenuComponent, SortDropdownComponent, StatsDisplayComponent],
  templateUrl: './books.html',
  styleUrls: ['./books.scss']
})
export class BooksComponent implements OnInit {
  allBooks: Book[] = [];
  sortedBooks: Book[] = [];
  selectedSort: string = 'readDate';
  selectedYearFilter: string = 'all';
  selectedGroupBy: string = 'none';
  stats: StatItem[] = [];

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
    { value: 'pages', label: 'Pages (élevé)' },
    { value: 'pages-asc', label: 'Pages (faible)' },
    { value: 'genre', label: 'Genre (A-Z)' },
    { value: 'genre-desc', label: 'Genre (Z-A)' }
  ];

  yearFilterOptions = [
    { value: 'all', label: 'Toutes' },
    { value: '2025', label: '2025' },
    { value: '2024', label: '2024' },
    { value: 'before2024', label: 'Avant 2024' },
  ];

  groupByOptions = [
    { value: 'none', label: 'Aucun' },
    { value: 'author', label: 'Auteur' },
    { value: 'genre', label: 'Genre' },
  ];

  ngOnInit() {
    // Agréger tous les livres de tous les fichiers
    this.allBooks = [
      ...books,
      ...booksFantasySaga,
      ...booksSaga
    ];

    this.sortBooks();
    this.updateStats();
    console.log(`Collection de ${this.allBooks.length} livres chargée`);
  }

  onSortChange(sortValue: string) {
    this.selectedSort = sortValue;
    this.sortBooks();
  }

  onYearFilterChange(year: string) {
    this.selectedYearFilter = year;
    this.sortBooks();
  }

  onGroupByChange(groupBy: string) {
    this.selectedGroupBy = groupBy;
    this.sortBooks();
  }

  private updateStats() {
    const totalPages = getTotalPages(this.allBooks);
    const totalPagesRead = getTotalPagesRead(this.allBooks);
    const estimatedReadingTime = getEstimatedReadingTime(this.allBooks);

    this.stats = [
      {
        label: 'Pages totales de tous les livres',
        value: `${totalPages.toLocaleString()} pages`,
        icon: '📚',
        color: 'success'
      },
      {
        label: 'Pages totales lues (avec relectures)',
        value: `${totalPagesRead.toLocaleString()} pages`,
        icon: '📖',
        color: 'info'
      },
      {
        label: 'Temps estimé de lecture',
        value: estimatedReadingTime.formatted,
        icon: '⏱️',
        color: 'primary'
      },
    ];
  }

  private sortBooks() {
    // Filtrage par année
    let filteredBooks = [...this.allBooks];
    if (this.selectedYearFilter === '2025') {
      filteredBooks = filteredBooks.filter(b => b.readDate.startsWith('2025'));
    } else if (this.selectedYearFilter === '2024') {
      filteredBooks = filteredBooks.filter(b => b.readDate.startsWith('2024'));
    } else if (this.selectedYearFilter === 'before2024') {
      filteredBooks = filteredBooks.filter(b => {
        const year = parseInt(b.readDate.substring(0, 4));
        return year < 2024;
      });
    }
    this.sortedBooks = [...filteredBooks];

    switch (this.selectedSort) {
      case 'title':
        this.sortedBooks.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'title-desc':
        this.sortedBooks.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case 'author':
        this.sortedBooks.sort((a, b) => a.author.localeCompare(b.author));
        break;
      case 'author-desc':
        this.sortedBooks.sort((a, b) => b.author.localeCompare(a.author));
        break;
      case 'readDate':
        this.sortedBooks.sort((a, b) => new Date(b.readDate).getTime() - new Date(a.readDate).getTime());
        break;
      case 'readDate-asc':
        this.sortedBooks.sort((a, b) => new Date(a.readDate).getTime() - new Date(b.readDate).getTime());
        break;
      case 'rating':
        this.sortedBooks.sort((a, b) => {
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
        this.sortedBooks.sort((a, b) => {
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
        this.sortedBooks.sort((a, b) => (b.readTimes || 0) - (a.readTimes || 0));
        break;
      case 'readTimes-asc':
        this.sortedBooks.sort((a, b) => (a.readTimes || 0) - (b.readTimes || 0));
        break;
      case 'pages':
        this.sortedBooks.sort((a, b) => (b.pages || 0) - (a.pages || 0));
        break;
      case 'pages-asc':
        this.sortedBooks.sort((a, b) => (a.pages || 0) - (b.pages || 0));
        break;
      case 'genre':
        this.sortedBooks.sort((a, b) => a.genre.localeCompare(b.genre));
        break;
      case 'genre-desc':
        this.sortedBooks.sort((a, b) => b.genre.localeCompare(a.genre));
        break;
      default:
        this.sortedBooks.sort((a, b) => new Date(b.readDate).getTime() - new Date(a.readDate).getTime());
    }
  }

  get booksBySaga(): SagaGroup[] {
    // Grouper les livres par saga
    const sagaMap = new Map<string, Book[]>();

    this.sortedBooks.forEach(book => {
      const saga = book.saga || 'Sans saga';
      if (!sagaMap.has(saga)) {
        sagaMap.set(saga, []);
      }
      sagaMap.get(saga)!.push(book);
    });

    // Convertir en tableau et trier les livres de chaque saga par sagaOrder
    const sagaGroups: SagaGroup[] = Array.from(sagaMap.entries()).map(([saga, books]) => ({
      saga,
      books: books.sort((a, b) => (a.sagaOrder || 0) - (b.sagaOrder || 0))
    }));

    // Trier les sagas : d'abord les sagas avec des livres ordonnés, puis les autres
    return sagaGroups.sort((a, b) => {
      if (a.books.length > b.books.length) {
        return -1;
      } else if (a.books.length < b.books.length) {
        return 1;
      } else {
        return 0;
      }
    });
  }

  // Nouvelle méthode pour obtenir les groupes selon le groupBy sélectionné
  get groupedBooks() {
    if (this.selectedGroupBy === 'none') {
      return null;
    }
    const groups: { key: string, books: Book[] }[] = [];
    const map = new Map<string, Book[]>();
    for (const book of this.sortedBooks) {
      let key = '';
      if (this.selectedGroupBy === 'author') key = book.author;
      else if (this.selectedGroupBy === 'genre') key = book.genre;
      if (!map.has(key)) map.set(key, []);
      map.get(key)!.push(book);
    }
    for (const [key, books] of map.entries()) {
      groups.push({ key, books });
    }
    // Tri des groupes par nombre de livres
    groups.sort((a, b) => b.books.length - a.books.length);
    return groups;
  }
}
