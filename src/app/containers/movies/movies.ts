import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from '../../components/movie/movie.component';
import { MenuComponent } from '../../components/menu/menu.component';
import { Movie } from '../../utils/movies/movies_1';

// Import de tous les fichiers de films
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

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule, MovieComponent, MenuComponent],
  templateUrl: './movies.html',
  styleUrls: ['./movies.scss']
})
export class MoviesComponent implements OnInit {
  allMovies: Movie[] = [];

  ngOnInit() {
    // Agréger tous les films de tous les fichiers
    this.allMovies = [
      ...moviesPage1,
      ...moviesPage2,
      ...moviesPage3,
      ...moviesPage4,
      ...moviesPage5,
      ...moviesPage6,
      ...moviesPage7,
      ...moviesPage8,
      ...moviesPage9,
      ...moviesPage10,
      ...moviesPage11
    ];

    // Trier par date de sortie (du plus récent au plus ancien)
    this.allMovies.sort((a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime());

    console.log(`Collection de ${this.allMovies.length} films chargée`);
  }
}