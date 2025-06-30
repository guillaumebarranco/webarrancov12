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
  },
  {
    title: "Black Mirror : Mazey Day",
    director: "Uta Briesewitz",
    actors: [
      {
        name: "Zazie Beetz",
      },
    ],
    coverUrl: "/movies/validated/425862-black-mirror-shut-up-and-dance-0-150-0-225-crop.jpg",
    releaseDate: "2023-06-15",
    rating: 0,
    length: 0,
    genre: "Science Fiction",
  },
  {
    title: "Black Mirror : Joan est Horrible",
    director: "Ally Pankiw",
    actors: [
      {
        name: "Annie Murphy",
      },
    ],
    coverUrl: "/movies/validated/42559-oss-117-cairo-nest-of-spies-0-150-0-225-crop.jpg",
    releaseDate: "2023-06-15",
    rating: 0,
    length: 0,
    genre: "Science Fiction",
  },
  {
    title: "Black Mirror: Striking Vipers",
    director: "Owen Harris",
    actors: [
      {
        name: "Anthony Mackie",
      },
    ],
    coverUrl: "/movies/validated/striking-0-150-0-225-crop.jpg",
    releaseDate: "2019-06-05",
    rating: 0,
    length: 0,
    genre: "Science Fiction",
  },
  {
    title: "Black Mirror: Bandersnatch",
    director: "David Slade",
    actors: [
      {
        name: "Fionn Whitehead",
      },
    ],
    coverUrl: "/movies/validated/498044-black-mirror-bandersnatch-0-150-0-225-crop.jpg",
    releaseDate: "2018-12-28",
    rating: 0,
    length: 0,
    genre: "Science Fiction",
  },
  {
    title: "Black Mirror: Black Museum",
    director: "Colm McCarthy",
    actors: [
      {
        name: "Douglas Hodge",
      },
    ],
    coverUrl: "/movies/validated/51513-men-in-black-ii-0-150-0-225-crop.jpg",
    releaseDate: "2017-12-29",
    rating: 0,
    length: 0,
    genre: "Science Fiction",
  },
  {
    title: "Black Mirror: USS Callister",
    director: "Toby Haynes",
    actors: [
      {
        name: "Jesse Plemons",
      },
    ],
    coverUrl: "/movies/validated/black-museum-p-0-150-0-225-crop.jpg",
    releaseDate: "2017-12-29",
    rating: 0,
    length: 0,
    genre: "Science Fiction",
  },
  {
    title: "Black Mirror : Shut Up and Dance",
    director: "James Watkins",
    actors: [{ name: "Alex Lawther" }],
    coverUrl: "/movies/validated/46813-the-fast-and-the-furious-0-150-0-225-crop.jpg",
    releaseDate: "2016-10-21",
    rating: 0,
    length: 52,
    genre: "Science Fiction",
  },
  {
    title: "Black Mirror : Nosedive",
    director: "Joe Wright",
    actors: [{ name: "Bryce Dallas Howard" }],
    coverUrl: "/movies/validated/nosedive-0-150-0-225-crop.jpg",
    releaseDate: "2016-10-21",
    rating: 0,
    length: 63,
    genre: "Science Fiction",
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
  },
  {
    title: "Black Mirror : White Bear",
    director: "Carl Tibbetts",
    actors: [{ name: "Lenora Crichlow" }],
    coverUrl: "/movies/validated/beware_white_bear.jpg",
    releaseDate: "2013-02-18",
    rating: 0,
    length: 42,
    genre: "Science Fiction",
  },
  {
    title: "Black Mirror : The National Anthem",
    director: "Otto Bathurst",
    actors: [{ name: "Rory Kinnear" }],
    coverUrl: "/movies/validated/425523-the-national-anthem-0-150-0-225-crop.jpg",
    releaseDate: "2011-12-04",
    rating: 0,
    length: 44,
    genre: "Science Fiction",
  },
];