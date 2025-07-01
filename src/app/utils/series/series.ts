export interface Serie {
  title: string;
  director: string;
  actors: { name: string }[];
  coverUrl: string;
  releaseDate: string;
  rating: number;
  length: number;
  genre: string;
  nbEpisodes?: number;
  timesWatched: number;
}

export const series: Serie[] = [
  {
    title: "Squid Game",
    director: "Hwang Dong-hyuk",
    actors: [
      {
        name: "Lee Jung-jae",
      },
    ],
    coverUrl: "/movies/dWg33ektXuHmxjSjEulwDPTWbC2-0-150-0-225-crop.jpg",
    releaseDate: "2021-09-17",
    rating: 0,
    length: 0,
    genre: "Thriller",
    nbEpisodes: 10,
    timesWatched: 0,
  },
  {
    title: "Black Mirror : Mazey Day",
    director: "Uta Briesewitz",
    actors: [
      {
        name: "Zazie Beetz",
      },
    ],
    coverUrl: "/movies_pictures/validated/425862-black-mirror-shut-up-and-dance-0-150-0-225-crop.jpg",
    releaseDate: "2023-06-15",
    rating: 0,
    length: 0,
    genre: "Science Fiction",
    timesWatched: 0,
  },
  {
    title: "Black Mirror : Joan est Horrible",
    director: "Ally Pankiw",
    actors: [
      {
        name: "Annie Murphy",
      },
    ],
    coverUrl: "/movies_pictures/validated/42559-oss-117-cairo-nest-of-spies-0-150-0-225-crop.jpg",
    releaseDate: "2023-06-15",
    rating: 0,
    length: 0,
    genre: "Science Fiction",
    timesWatched: 0,
  },
  {
    title: "Black Mirror: Striking Vipers",
    director: "Owen Harris",
    actors: [
      {
        name: "Anthony Mackie",
      },
    ],
    coverUrl: "/movies_pictures/validated/striking-0-150-0-225-crop.jpg",
    releaseDate: "2019-06-05",
    rating: 0,
    length: 0,
    genre: "Science Fiction",
    timesWatched: 0,
  },
  {
    title: "Black Mirror: Bandersnatch",
    director: "David Slade",
    actors: [
      {
        name: "Fionn Whitehead",
      },
    ],
    coverUrl: "/movies_pictures/validated/498044-black-mirror-bandersnatch-0-150-0-225-crop.jpg",
    releaseDate: "2018-12-28",
    rating: 0,
    length: 0,
    genre: "Science Fiction",
    timesWatched: 0,
  },
  {
    title: "Black Mirror: Black Museum",
    director: "Colm McCarthy",
    actors: [
      {
        name: "Douglas Hodge",
      },
    ],
    coverUrl: "/movies_pictures/validated/51513-men-in-black-ii-0-150-0-225-crop.jpg",
    releaseDate: "2017-12-29",
    rating: 0,
    length: 0,
    genre: "Science Fiction",
    timesWatched: 0,
  },
  {
    title: "Black Mirror: USS Callister",
    director: "Toby Haynes",
    actors: [
      {
        name: "Jesse Plemons",
      },
    ],
    coverUrl: "/movies_pictures/validated/black-museum-p-0-150-0-225-crop.jpg",
    releaseDate: "2017-12-29",
    rating: 0,
    length: 0,
    genre: "Science Fiction",
    timesWatched: 0,
  },
  {
    title: "Black Mirror : Shut Up and Dance",
    director: "James Watkins",
    actors: [{ name: "Alex Lawther" }],
    coverUrl: "/movies_pictures/validated/46813-the-fast-and-the-furious-0-150-0-225-crop.jpg",
    releaseDate: "2016-10-21",
    rating: 0,
    length: 52,
    genre: "Science Fiction",
    timesWatched: 0,
  },
  {
    title: "Black Mirror : Nosedive",
    director: "Joe Wright",
    actors: [{ name: "Bryce Dallas Howard" }],
    coverUrl: "/movies_pictures/validated/nosedive-0-150-0-225-crop.jpg",
    releaseDate: "2016-10-21",
    rating: 0,
    length: 63,
    genre: "Science Fiction",
    timesWatched: 0,
  },
  {
    title: "Black Mirror : White Christmas",
    director: "Carl Tibbetts",
    actors: [{ name: "Jon Hamm" }],
    coverUrl: "",
    releaseDate: "2014-12-16",
    rating: 0,
    length: 74,
    genre: "Science Fiction",
    timesWatched: 0,
  },
  {
    title: "Black Mirror : White Bear",
    director: "Carl Tibbetts",
    actors: [{ name: "Lenora Crichlow" }],
    coverUrl: "/movies_pictures/validated/beware_white_bear.jpg",
    releaseDate: "2013-02-18",
    rating: 0,
    length: 42,
    genre: "Science Fiction",
    timesWatched: 0,
  },
  {
    title: "Black Mirror : The National Anthem",
    director: "Otto Bathurst",
    actors: [{ name: "Rory Kinnear" }],
    coverUrl: "/movies_pictures/validated/425523-the-national-anthem-0-150-0-225-crop.jpg",
    releaseDate: "2011-12-04",
    rating: 0,
    length: 44,
    genre: "Science Fiction",
    timesWatched: 0,
  },

  {
    title: "DAHMER - Monstre : L'Histoire de Jeffrey Dahmer",
    director: "Carl Franklin",
    actors: [
      {
        name: "Evan Peters",
      },
    ],
    coverUrl: "/movies_pictures/validated/926280-dahmer-monster-the-jeffrey-dahmer-story-0-150-0-225-crop.jpg",
    releaseDate: "2022-09-21",
    rating: 0,
    length: 0,
    genre: "Crime",
    timesWatched: 0,
  },
  {
    title: "Obi-Wan Kenobi",
    director: "Deborah Chow",
    actors: [
      {
        name: "Ewan McGregor",
      },
    ],
    coverUrl: "/movies_pictures/validated/828615-obi-wan-kenobi-0-150-0-225-crop.jpg",
    releaseDate: "2022-05-27",
    rating: 0,
    length: 0,
    genre: "Science Fiction",
    timesWatched: 0,
  },
  {
    title: "WandaVision",
    director: "Matt Shakman",
    actors: [
      {
        name: "Elizabeth Olsen",
      },
    ],
    coverUrl: "/movies_pictures/validated/671813-wandavision-0-150-0-225-crop.jpg",
    releaseDate: "2021-01-15",
    rating: 0,
    length: 0,
    genre: "Science Fiction",
    timesWatched: 0,
  },
  {
    title: "Le Jeu de la Dame",
    director: "Scott Frank",
    actors: [
      {
        name: "Anya Taylor-Joy",
      },
    ],
    coverUrl: "/movies_pictures/validated/668077-the-queen-s-gambit-0-150-0-225-crop.jpg",
    releaseDate: "2020-10-23",
    rating: 0,
    length: 0,
    genre: "Drama",
    timesWatched: 0,
  },
];