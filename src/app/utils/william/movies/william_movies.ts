import { Movie } from '../../../models/movie-model';

export const williamMovies: Movie[] = [
  {
    title: 'Cars',
    director: 'John Lasseter',
    actors: [{ name: 'Owen Wilson' }],
    coverUrl:
      '/movies_pictures/dWg33ektXuHmxjSjEulwDPTWbC2-0-150-0-225-crop.jpg',
    releaseDate: '2006-06-09',
    rating: 5,
    length: 117,
    genre: 'Animation',
    timesWatched: 10,
    lastViewedDate: '',
  },
  {
    title: 'Cars 3',
    director: 'Brian Fee',
    actors: [{ name: 'Owen Wilson' }],
    coverUrl: '/movies_pictures/184062-cars-3-0-150-0-225-crop.jpg',
    releaseDate: '2016-06-16',
    rating: 4.5,
    length: 102,
    genre: 'Animation',
    timesWatched: 5,
    lastViewedDate: '',
  },
  {
    title: 'Le monde de Nemo',
    director: 'Andrew Stanton',
    actors: [{ name: 'Albert Brooks' }, { name: 'Ellen DeGeneres' }],
    coverUrl: '/movies_pictures/monde_de_nemo.webp',
    releaseDate: '2003-05-30',
    rating: 4,
    length: 100,
    genre: 'Animation',
    timesWatched: 1,
    lastViewedDate: '',
  },
];
