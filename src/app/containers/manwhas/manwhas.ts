import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from '../../components/book/book.component';
import { MenuComponent } from '../../components/menu/menu.component';
import { Book } from '../../utils/books/books';
import { manwhas } from '../../utils/mangas/manwhas';

interface SagaGroup {
  saga: string;
  books: Book[];
}

@Component({
  selector: 'app-manwhas',
  standalone: true,
  imports: [CommonModule, BookComponent, MenuComponent],
  templateUrl: './manwhas.html',
  styleUrls: ['./manwhas.scss']
})
export class ManwhasComponent {
  public getManwhas(): Book[] {
    return manwhas.map(manwha => {
      return {
        title: manwha._source.manga.name,
        author: manwha._source.manga.authors[0].name,
        coverUrl: manwha._source.manga.france.logo || '',
        readDate: manwha._source.manga.lastUpdate || '',
        rating: manwha._score / 2 || 0,
        genre: manwha._source.manga.type || '',
        saga: manwha._source.manga.name,
        sagaOrder: 0,
        nbTomes: manwha._source.manga.france.nbBooks || 0,
        isFinished: manwha._source.manga.isFinished || false,
      }
    }).sort((a, b) => b.rating - a.rating);
  }
}
