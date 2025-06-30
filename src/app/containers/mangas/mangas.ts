import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from '../../components/book/book.component';
import { MenuComponent } from '../../components/menu/menu.component';
import { Book } from '../../utils/books/books';
import { mangas } from '../../utils/mangas/mangas';

interface SagaGroup {
  saga: string;
  books: Book[];
}

@Component({
  selector: 'app-mangas',
  standalone: true,
  imports: [CommonModule, BookComponent, MenuComponent],
  templateUrl: './mangas.html',
  styleUrls: ['./mangas.scss']
})
export class MangasComponent {
  public getMangas(): Book[] {
    return mangas.map(manga => {
      return {
        title: manga._source.manga.frenchName || manga._source.manga.name,
        author: manga._source.manga.authors[0].name,
        coverUrl: manga._source.manga.france.logo || '',
        readDate: manga._source.manga.lastUpdate || '',
        rating: manga._score / 2 || 0,
        genre: manga._source.manga.type || '',
        saga: manga._source.manga.name,
        sagaOrder: 0,
        nbTomes: manga._source.manga.france.nbBooks || 0,
        isFinished: manga._source.manga.isFinished || false,
      }
    }).sort((a, b) => b.rating - a.rating);
  }
}
