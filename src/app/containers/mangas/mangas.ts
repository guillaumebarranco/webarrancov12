import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from '../../components/book/book.component';
import { MenuComponent } from '../../components/menu/menu.component';
import { SortDropdownComponent, SortOption } from '../../components/sort-dropdown/sort-dropdown.component';
import { Book } from '../../utils/books/books';
import { mangas } from '../../utils/mangas/mangas';

interface SagaGroup {
  saga: string;
  books: Book[];
}

@Component({
  selector: 'app-mangas',
  standalone: true,
  imports: [CommonModule, BookComponent, MenuComponent, SortDropdownComponent],
  templateUrl: './mangas.html',
  styleUrls: ['./mangas.scss']
})
export class MangasComponent implements OnInit {
  allMangas: Book[] = [];
  sortedMangas: Book[] = [];
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
    { value: 'nbTomes', label: 'Nombre de tomes (élevé)' },
    { value: 'nbTomes-asc', label: 'Nombre de tomes (faible)' },
    { value: 'genre', label: 'Genre (A-Z)' },
    { value: 'genre-desc', label: 'Genre (Z-A)' }
  ];

  ngOnInit() {
    this.allMangas = mangas.map(manga => {
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
    });

    this.sortMangas();
    console.log(`Collection de ${this.allMangas.length} mangas chargée`);
  }

  onSortChange(sortValue: string) {
    this.selectedSort = sortValue;
    this.sortMangas();
  }

  private sortMangas() {
    this.sortedMangas = [...this.allMangas];

    switch (this.selectedSort) {
      case 'title':
        this.sortedMangas.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'title-desc':
        this.sortedMangas.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case 'author':
        this.sortedMangas.sort((a, b) => a.author.localeCompare(b.author));
        break;
      case 'author-desc':
        this.sortedMangas.sort((a, b) => b.author.localeCompare(a.author));
        break;
      case 'readDate':
        this.sortedMangas.sort((a, b) => new Date(b.readDate).getTime() - new Date(a.readDate).getTime());
        break;
      case 'readDate-asc':
        this.sortedMangas.sort((a, b) => new Date(a.readDate).getTime() - new Date(b.readDate).getTime());
        break;
      case 'rating':
        this.sortedMangas.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case 'rating-asc':
        this.sortedMangas.sort((a, b) => (a.rating || 0) - (b.rating || 0));
        break;
      case 'nbTomes':
        this.sortedMangas.sort((a, b) => (b.nbTomes || 0) - (a.nbTomes || 0));
        break;
      case 'nbTomes-asc':
        this.sortedMangas.sort((a, b) => (a.nbTomes || 0) - (b.nbTomes || 0));
        break;
      case 'genre':
        this.sortedMangas.sort((a, b) => a.genre.localeCompare(b.genre));
        break;
      case 'genre-desc':
        this.sortedMangas.sort((a, b) => b.genre.localeCompare(a.genre));
        break;
      default:
        this.sortedMangas.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    }
  }
}
