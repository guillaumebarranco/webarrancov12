import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from '../../components/book/book.component';
import { MenuComponent } from '../../components/menu/menu.component';
import { SortDropdownComponent, SortOption } from '../../components/sort-dropdown/sort-dropdown.component';
import { Book } from '../../utils/books/books';

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
  imports: [CommonModule, BookComponent, MenuComponent, SortDropdownComponent],
  templateUrl: './books.html',
  styleUrls: ['./books.scss']
})
export class BooksComponent implements OnInit {
  allBooks: Book[] = [];
  sortedBooks: Book[] = [];
  selectedSort: string = 'readDate';

  sortOptions: SortOption[] = [
    { value: 'title', label: 'Titre (A-Z)' },
    { value: 'title-desc', label: 'Titre (Z-A)' },
    { value: 'author', label: 'Auteur (A-Z)' },
    { value: 'author-desc', label: 'Auteur (Z-A)' },
    { value: 'readDate', label: 'Date de lecture (récent)' },
    { value: 'readDate-asc', label: 'Date de lecture (ancien)' },
    { value: 'rating', label: 'Note (élevée)' },
    { value: 'rating-asc', label: 'Note (faible)' },
    { value: 'pages', label: 'Pages (élevé)' },
    { value: 'pages-asc', label: 'Pages (faible)' },
    { value: 'genre', label: 'Genre (A-Z)' },
    { value: 'genre-desc', label: 'Genre (Z-A)' }
  ];

  ngOnInit() {
    // Agréger tous les livres de tous les fichiers
    this.allBooks = [
      ...books,
      ...booksFantasySaga,
      ...booksSaga
    ];

    this.sortBooks();
    console.log(`Collection de ${this.allBooks.length} livres chargée`);
  }

  onSortChange(sortValue: string) {
    this.selectedSort = sortValue;
    this.sortBooks();
  }

  private sortBooks() {
    this.sortedBooks = [...this.allBooks];

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
        this.sortedBooks.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case 'rating-asc':
        this.sortedBooks.sort((a, b) => (a.rating || 0) - (b.rating || 0));
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
}
