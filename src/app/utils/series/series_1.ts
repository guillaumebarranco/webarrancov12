export interface Serie {
  title: string;
  director: string;
  actors: { name: string }[];
  coverUrl: string;
  releaseDate: string;
  endDate: string;
  rating: number;
  nbEpisodesTotal: number;
  nbSeasons: number;
  timesWatched: number;
  genre: string;
  totalLength: number;
}

export const series1: Serie[] = [
  {
    title: "Black Mirror",
    director: "Charlie Brooker",
    actors: [
      { name: "Various" }
    ],
    coverUrl: "/series_pictures/5745341.jpg",
    releaseDate: "2011-12-04",
    endDate: "",
    rating: 0,
    totalLength: 1400,
    genre: "Science Fiction, Thriller",
    nbSeasons: 6,
    nbEpisodesTotal: 28,
    timesWatched: 2,
  },
  {
    title: "How I Met Your Mother",
    director: "Carter Bays, Craig Thomas",
    actors: [
      { name: "Josh Radnor" },
      { name: "Neil Patrick Harris" },
      { name: "Cobie Smulders" },
      { name: "Jason Segel" },
      { name: "Alyson Hannigan" }
    ],
    coverUrl: "/series_pictures/himym.jpg",
    releaseDate: "2005-09-19",
    endDate: "2014-03-31",
    rating: 0,
    totalLength: 7280,
    genre: "Comedy, Romance",
    nbSeasons: 9,
    nbEpisodesTotal: 208,
    timesWatched: 30,
  },
  {
    title: "Loki",
    director: "Kate Herron",
    actors: [
      { name: "Tom Hiddleston" },
      { name: "Owen Wilson" },
      { name: "Sophia Di Martino" }
    ],
    coverUrl: "/series_pictures/loki.jpg",
    releaseDate: "2021-06-09",
    endDate: "",
    rating: 0,
    totalLength: 720,
    genre: "Action, Adventure, Fantasy",
    nbSeasons: 2,
    nbEpisodesTotal: 12,
    timesWatched: 1,
  },
  {
    title: "Le Jeu de la Dame",
    director: "Scott Frank",
    actors: [
      { name: "Anya Taylor-Joy" }
    ],
    coverUrl: "/series_pictures/jeudame.jpg",
    releaseDate: "2020-10-23",
    endDate: "2020-12-25",
    rating: 0,
    totalLength: 420,
    genre: "Drama",
    nbSeasons: 1,
    nbEpisodesTotal: 7,
    timesWatched: 2,
  },
  {
    title: "WandaVision",
    director: "Matt Shakman",
    actors: [
      { name: "Elizabeth Olsen" },
      { name: "Paul Bettany" },
      { name: "Kathryn Hahn" }
    ],
    coverUrl: "/series_pictures/wandavision.jpg",
    releaseDate: "2021-01-15",
    endDate: "2021-03-05",
    rating: 0,
    totalLength: 360,
    genre: "Action, Adventure, Comedy",
    nbSeasons: 1,
    nbEpisodesTotal: 9,
    timesWatched: 1,
  },
  {
    title: "Obi-Wan Kenobi",
    director: "Deborah Chow",
    actors: [
      { name: "Ewan McGregor" },
      { name: "Hayden Christensen" },
      { name: "Moses Ingram" }
    ],
    coverUrl: "/series_pictures/1390919.jpg",
    releaseDate: "2022-05-27",
    endDate: "2022-06-22",
    rating: 0,
    totalLength: 300,
    genre: "Action, Adventure, Fantasy",
    nbSeasons: 1,
    nbEpisodesTotal: 6,
    timesWatched: 1,
  },
  {
    title: "Squid Game",
    director: "Hwang Dong-hyuk",
    actors: [
      { name: "Lee Jung-jae" },
      { name: "Park Hae-soo" },
      { name: "Wi Ha-joon" }
    ],
    coverUrl: "/series_pictures/787181-squid-game-0-150-0-225-crop.jpg",
    releaseDate: "2021-09-17",
    endDate: "",
    rating: 0,
    totalLength: 1020,
    genre: "Action, Drama, Thriller",
    nbSeasons: 2,
    nbEpisodesTotal: 17,
    timesWatched: 1,
  },
  {
    title: "Bodies",
    director: "Marco Kreuzpaintner",
    actors: [
      { name: "Stephen Graham" },
      { name: "Shira Haas" },
      { name: "Kyle Soller" }
    ],
    coverUrl: "/series_pictures/3135444.jpg",
    releaseDate: "2023-10-19",
    endDate: "2023-10-19",
    rating: 0,
    totalLength: 480,
    genre: "Crime, Drama, Mystery",
    nbSeasons: 1,
    nbEpisodesTotal: 8,
    timesWatched: 1,
  },
  {
    title: "Breaking Bad",
    director: "Vince Gilligan",
    actors: [
      { name: "Bryan Cranston" },
      { name: "Aaron Paul" },
      { name: "Anna Gunn" }
    ],
    coverUrl: "/series_pictures/MV5BMzU5ZGYzNmQtMTdhYy00OGRiLTg0NmQtYjVjNzliZTg1ZGE4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    releaseDate: "2008-01-20",
    endDate: "2013-09-29",
    rating: 0,
    totalLength: 3100,
    genre: "Crime, Drama, Thriller",
    nbSeasons: 5,
    nbEpisodesTotal: 62,
    timesWatched: 1,
  },
  {
    title: "Umbrella Academy",
    director: "Steve Blackman",
    actors: [
      { name: "Ellen Page" },
      { name: "Tom Hopper" },
      { name: "David Castañeda" }
    ],
    coverUrl: "/series_pictures/5457570.webp",
    releaseDate: "2019-02-15",
    endDate: "",
    rating: 0,
    totalLength: 1800,
    genre: "Action, Adventure, Comedy",
    nbSeasons: 3,
    nbEpisodesTotal: 30,
    timesWatched: 1,
  },
  {
    title: "You",
    director: "Greg Berlanti",
    actors: [
      { name: "Penn Badgley" },
      { name: "Victoria Pedretti" },
      { name: "Elizabeth Lail" }
    ],
    coverUrl: "/series_pictures/81Qw5nY7vKL.jpg",
    releaseDate: "2018-09-09",
    endDate: "",
    rating: 0,
    totalLength: 2400,
    genre: "Crime, Drama, Romance",
    nbSeasons: 4,
    nbEpisodesTotal: 40,
    timesWatched: 2,
  },
  {
    title: "HPI",
    director: "Julien Zidi",
    actors: [
      { name: "Audrey Fleurot" },
      { name: "Mehdi Nebbou" },
      { name: "Bruno Sanches" }
    ],
    coverUrl: "/series_pictures/5145026.jpg",
    releaseDate: "2021-04-14",
    endDate: "",
    rating: 0,
    totalLength: 1440,
    genre: "Comedy, Crime, Drama",
    nbSeasons: 3,
    nbEpisodesTotal: 24,
    timesWatched: 1,
  },
  {
    title: "The Boys",
    director: "Eric Kripke",
    actors: [
      { name: "Karl Urban" },
      { name: "Jack Quaid" },
      { name: "Antony Starr" }
    ],
    coverUrl: "/series_pictures/2kzjj8l0om391.jpg",
    releaseDate: "2019-07-26",
    endDate: "",
    rating: 0,
    totalLength: 1920,
    genre: "Action, Comedy, Crime",
    nbSeasons: 4,
    nbEpisodesTotal: 32,
    timesWatched: 1,
  },
  {
    title: "Stranger Things",
    director: "The Duffer Brothers",
    actors: [
      { name: "Millie Bobby Brown" },
      { name: "Finn Wolfhard" },
      { name: "Noah Schnapp" }
    ],
    coverUrl: "/series_pictures/MV5BMjg2NmM0MTEtYWY2Yy00NmFlLTllNTMtMjVkZjEwMGVlNzdjXkEyXkFqcGc@._V1_.jpg",
    releaseDate: "2016-07-15",
    endDate: "",
    rating: 0,
    totalLength: 2040,
    genre: "Drama, Fantasy, Horror",
    nbSeasons: 4,
    nbEpisodesTotal: 34,
    timesWatched: 1,
  },
  {
    title: "Lupin",
    director: "Louis Leterrier",
    actors: [
      { name: "Omar Sy" },
      { name: "Ludivine Sagnier" },
      { name: "Clotilde Hesme" }
    ],
    coverUrl: "/series_pictures/1257289.entity.jpg",
    releaseDate: "2021-01-08",
    endDate: "",
    rating: 0,
    totalLength: 1020,
    genre: "Action, Crime, Drama",
    nbSeasons: 3,
    nbEpisodesTotal: 17,
    timesWatched: 2,
  },
  {
    title: "La servante écarlate",
    director: "Bruce Miller",
    actors: [
      { name: "Elisabeth Moss" },
      { name: "Joseph Fiennes" },
      { name: "Yvonne Strahovski" }
    ],
    coverUrl: "/series_pictures/F98890-DVD134867.jpg",
    releaseDate: "2017-04-26",
    endDate: "",
    rating: 0,
    totalLength: 3360,
    genre: "Drama, Sci-Fi, Thriller",
    nbSeasons: 5,
    nbEpisodesTotal: 56,
    timesWatched: 1,
  },
  {
    title: "Arcane",
    director: "Pascal Charrue, Arnaud Delord",
    actors: [
      { name: "Hailee Steinfeld" },
      { name: "Ella Purnell" },
      { name: "Kevin Alejandro" }
    ],
    coverUrl: "/series_pictures/MV5BNDAyZmNlNTUtM2VlMC00ZTkyLWIyNzMtY2RiM2E2ZjA5NTIzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    releaseDate: "2021-11-06",
    endDate: "",
    rating: 0,
    totalLength: 360,
    genre: "Animation, Action, Adventure",
    nbSeasons: 1,
    nbEpisodesTotal: 9,
    timesWatched: 1,
  },
  {
    title: "South Park",
    director: "Trey Parker, Matt Stone",
    actors: [
      { name: "Trey Parker" },
      { name: "Matt Stone" },
      { name: "Mona Marshall" }
    ],
    coverUrl: "/series_pictures/257044.webp",
    releaseDate: "1997-08-13",
    endDate: "",
    rating: 0,
    totalLength: 8125,
    genre: "Animation, Comedy",
    nbSeasons: 26,
    nbEpisodesTotal: 325,
    timesWatched: 10,
  },
  {
    title: "Les Simpsons",
    director: "Matt Groening",
    actors: [
      { name: "Dan Castellaneta" },
      { name: "Julie Kavner" },
      { name: "Nancy Cartwright" }
    ],
    coverUrl: "/series_pictures/les-simpson-affiche-1022674.jpg",
    releaseDate: "1989-12-17",
    endDate: "",
    rating: 0,
    totalLength: 19000,
    genre: "Animation, Comedy",
    nbSeasons: 35,
    nbEpisodesTotal: 760,
    timesWatched: 5,
  },
  {
    title: "Daredevil",
    director: "Drew Goddard",
    actors: [
      { name: "Charlie Cox" },
      { name: "Deborah Ann Woll" },
      { name: "Elden Henson" }
    ],
    coverUrl: "/series_pictures/Dd_vertical-bloodyknuckles_us-main.webp",
    releaseDate: "2015-04-10",
    endDate: "2018-10-19",
    rating: 0,
    totalLength: 2340,
    genre: "Action, Crime, Drama",
    nbSeasons: 3,
    nbEpisodesTotal: 39,
    timesWatched: 2,
  },
  {
    title: "Daredevil : Born Again",
    director: "Matt Corman, Chris Ord",
    actors: [
      { name: "Charlie Cox" },
      { name: "Vincent D'Onofrio" },
      { name: "Jon Bernthal" }
    ],
    coverUrl: "/series_pictures/8c6c4659ab0bc0764f06e2bf7c487d05.jpg",
    releaseDate: "2024-03-10",
    endDate: "",
    rating: 0,
    totalLength: 1080,
    genre: "Action, Crime, Drama",
    nbSeasons: 1,
    nbEpisodesTotal: 18,
    timesWatched: 1,
  },
];