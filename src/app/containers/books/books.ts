import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from '../../components/book/book.component';
import { books, Book } from '../../utils/books';
import { booksSaga } from '../../utils/books-saga';

interface SagaGroup {
  saga: string;
  books: Book[];
}

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule, BookComponent],
  templateUrl: './books.html',
  styleUrls: ['./books.scss']
})
export class BooksComponent {
  books = booksSaga.concat(books);

  get booksBySaga(): SagaGroup[] {
    // Grouper les livres par saga
    const sagaMap = new Map<string, Book[]>();

    this.books.forEach(book => {
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
