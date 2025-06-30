export interface Movie {
  title: string;
  director: string;
  actors: {
    name: string
  }[];
  coverUrl: string;
  releaseDate: string;
  rating: number;
  length: number;
  genre: string;
  timesWatched: number;
}

export const moviesPage1: Movie[] = [
  {
    title: "I, Robot",
    director: "Alex Proyas",
    actors: [
      {
        name: "Will Smith",
      },
    ],
    coverUrl: "/movies/validated/i_robot.jpg",
    releaseDate: "2004-12-10",
    rating: 5,
    length: 101,
    genre: "Science Fiction",
    timesWatched: 0,
  },
  {
    title: "The life list",
    director: "Liz W. Garcia",
    actors: [
      {
        name: "Katherine Heigl",
      },
    ],
    coverUrl: "/movies/validated/1138997-the-life-list-0-150-0-225-crop.jpg",
    releaseDate: "2024-07-18",
    rating: 0,
    length: 0,
    genre: "Romance",
    timesWatched: 0,
  },
  {
    title: "Mickey 17",
    director: "Bong Joon-ho",
    actors: [
      {
        name: "Robert Pattinson",
      },
    ],
    coverUrl: "/movies/validated/620281-mickey-17-0-150-0-225-crop.jpg",
    releaseDate: "2025-01-31",
    rating: 0,
    length: 0,
    genre: "Science Fiction",
    timesWatched: 0,
  },
  {
    title: "Tout le Bleu du Ciel",
    director: "João Canijo",
    actors: [
      {
        name: "Rita Blanco",
      },
    ],
    coverUrl: "/movies/validated/1307347-tout-le-bleu-du-ciel-2025-0-150-0-225-crop.jpg",
    releaseDate: "2022-09-08",
    rating: 3.5,
    length: 0,
    genre: "Drama",
    timesWatched: 0,
  },
  {
    title: "Carry-On",
    director: "Jaume Collet-Serra",
    actors: [
      {
        name: "Taron Egerton",
      },
    ],
    coverUrl: "/movies/validated/905876-carry-on-2024-0-150-0-225-crop.jpg",
    releaseDate: "2024-11-15",
    rating: 0,
    length: 0,
    genre: "Action",
    timesWatched: 0,
  },
  {
    title: "Deadpool et Wolverine",
    director: "Shawn Levy",
    actors: [
      {
        name: "Ryan Reynolds",
      },
      {
        name: "Hugh Jackman",
      },
    ],
    coverUrl: "/movies/validated/462870-deadpool-wolverine-0-150-0-225-crop.jpg",
    releaseDate: "2024-07-26",
    rating: 0,
    length: 0,
    genre: "Action",
    timesWatched: 0,
  },
  {
    title: "Cœurs Battants",
    director: "Ludovic Bernard",
    actors: [
      {
        name: "Malik Zidi",
      },
    ],
    coverUrl: "/movies/validated/683195-purple-hearts-0-150-0-225-crop.jpg",
    releaseDate: "2024-01-24",
    rating: 0,
    length: 0,
    genre: "Drama",
    timesWatched: 0,
  },
  {
    title: "Le Comte de Monte-Cristo",
    director: "Alexandre de La Patellière, Matthieu Delaporte",
    actors: [
      {
        name: "Pierre Niney",
      },
    ],
    coverUrl: "/movies/validated/977835-the-count-of-monte-cristo-2024-0-150-0-225-crop.jpg",
    releaseDate: "2024-06-28",
    rating: 0,
    length: 0,
    genre: "Adventure",
    timesWatched: 0,
  },
  {
    title: "Challengers",
    director: "Luca Guadagnino",
    actors: [
      {
        name: "Zendaya",
      },
    ],
    coverUrl: "/movies/validated/842301-challengers-0-150-0-225-crop.jpg",
    releaseDate: "2024-04-26",
    rating: 2,
    length: 0,
    genre: "Drama",
    timesWatched: 0,
  },
  {
    title: "Road House",
    director: "Doug Liman",
    actors: [
      {
        name: "Jake Gyllenhaal",
      },
    ],
    coverUrl: "/movies/validated/291213-road-house-0-150-0-225-crop.jpg",
    releaseDate: "2024-03-21",
    rating: 0,
    length: 0,
    genre: "Action",
    timesWatched: 0,
  },
  {
    title: "Damsel",
    director: "Juan Carlos Fresnadillo",
    actors: [
      {
        name: "Millie Bobby Brown",
      },
    ],
    coverUrl: "/movies/validated/683451-damsel-0-150-0-225-crop.jpg",
    releaseDate: "2024-03-08",
    rating: 0,
    length: 0,
    genre: "Fantasy",
    timesWatched: 0,
  },
  {
    title: "Dune : Partie 2",
    director: "Denis Villeneuve",
    actors: [
      {
        name: "Timothée Chalamet",
      },
    ],
    coverUrl: "/movies/validated/617443-dune-part-two-0-150-0-225-crop.jpg",
    releaseDate: "2024-03-01",
    rating: 0,
    length: 0,
    genre: "Science Fiction",
    timesWatched: 0,
  },
  {
    title: "Les Marvels",
    director: "Nia DaCosta",
    actors: [
      {
        name: "Brie Larson",
      },
    ],
    coverUrl: "/movies/validated/536970-the-marvels-0-150-0-225-crop.jpg",
    releaseDate: "2023-11-10",
    rating: 0,
    length: 0,
    genre: "Action",
    timesWatched: 0,
  },
  {
    title: "Trahison Brûlante",
    director: "Diego Freitas",
    actors: [
      {
        name: "Giovanna Lancellotti",
      },
    ],
    coverUrl: "/movies/validated/1060546-burning-betrayal-0-150-0-225-crop.jpg",
    releaseDate: "2023-10-25",
    rating: 0,
    length: 0,
    genre: "Romance",
    timesWatched: 0,
  },
  {
    title: "Sly",
    director: "Thom Zimny",
    actors: [
      {
        name: "Sylvester Stallone",
      },
    ],
    coverUrl: "/movies/validated/073f18caf5a23116b09d9b12d9828837.jpg",
    releaseDate: "2023-11-03",
    rating: 0,
    length: 0,
    genre: "Documentary",
    timesWatched: 0,
  },
  {
    title: "La Probabilité statistique de l'amour au premier regard",
    director: "Vanessa Caswill",
    actors: [
      {
        name: "Haley Lu Richardson",
      },
    ],
    coverUrl: "/movies/validated/1146306_300x450.webp",
    releaseDate: "2023-09-15",
    rating: 0,
    length: 0,
    genre: "Romance",
    timesWatched: 0,
  },
  {
    title: "Gran Turismo",
    director: "Neill Blomkamp",
    actors: [
      {
        name: "Archie Madekwe",
      },
    ],
    coverUrl: "/movies/validated/882718-gran-turismo-0-150-0-225-crop.jpg",
    releaseDate: "2023-08-25",
    rating: 0,
    length: 0,
    genre: "Action",
    timesWatched: 0,
  },
  {
    title: "Oppenheimer",
    director: "Christopher Nolan",
    actors: [
      {
        name: "Cillian Murphy",
      },
    ],
    coverUrl: "/movies/validated/784328-oppenheimer-0-150-0-225-crop.jpg",
    releaseDate: "2023-07-21",
    rating: 0,
    length: 0,
    genre: "Drama",
    timesWatched: 0,
  },
  {
    title: "Barbie",
    director: "Greta Gerwig",
    actors: [
      {
        name: "Margot Robbie",
      },
    ],
    coverUrl: "/movies/validated/277064-barbie-0-150-0-225-crop.jpg",
    releaseDate: "2023-07-21",
    rating: 3,
    length: 0,
    genre: "Comedy",
    timesWatched: 0,
  },
  {
    title: "Flash",
    director: "Andy Muschietti",
    actors: [
      {
        name: "Ezra Miller",
      },
    ],
    coverUrl: "/movies/validated/225845-the-flash-0-150-0-225-crop.jpg",
    releaseDate: "2023-06-16",
    rating: 0,
    length: 0,
    genre: "Action",
    timesWatched: 0,
  },
  {
    title: "Arnold",
    director: "Lesley Chilcott",
    actors: [
      {
        name: "Arnold Schwarzenegger",
      },
    ],
    coverUrl: "/movies/validated/1014180-arnold-0-150-0-225-crop.jpg",
    releaseDate: "2023-06-07",
    rating: 0,
    length: 0,
    genre: "Documentary",
    timesWatched: 0,
  },
  {
    title: "Spider-Man : À Travers le Spider-Verse",
    director: "Joaquim Dos Santos, Kemp Powers, Justin K. Thompson",
    actors: [
      {
        name: "Shameik Moore",
      },
    ],
    coverUrl: "/movies/validated/497631-spider-man-across-the-spider-verse-0-150-0-225-crop.jpg",
    releaseDate: "2023-06-02",
    rating: 0,
    length: 0,
    genre: "Animation",
    timesWatched: 0,
  },
  {
    title: "Fast & Furious X",
    director: "Louis Leterrier",
    actors: [
      {
        name: "Vin Diesel",
      },
    ],
    coverUrl: "/movies/validated/320481-fast-x-0-150-0-225-crop.jpg",
    releaseDate: "2023-05-19",
    rating: 0,
    length: 0,
    genre: "Action",
    timesWatched: 0,
  },
  {
    title: "Les Gardiens de la Galaxie Vol. 3",
    director: "James Gunn",
    actors: [
      {
        name: "Chris Pratt",
      },
    ],
    coverUrl: "/movies/validated/379711-guardians-of-the-galaxy-volume-3-0-150-0-225-crop.jpg",
    releaseDate: "2023-05-05",
    rating: 0,
    length: 0,
    genre: "Action",
    timesWatched: 0,
  },
  {
    title: "Super Mario Bros. le Film",
    director: "Aaron Horvath, Michael Jelenic",
    actors: [
      {
        name: "Chris Pratt",
      },
    ],
    coverUrl: "/movies/validated/432302-the-super-mario-bros-movie-0-150-0-225-crop.jpg",
    releaseDate: "2023-04-05",
    rating: 0,
    length: 0,
    genre: "Animation",
    timesWatched: 0,
  },
  {
    title: "Murder Mystery 2",
    director: "Jeremy Garelick",
    actors: [
      {
        name: "Adam Sandler",
      },
      {
        name: "Jennifer Aniston",
      },
    ],
    coverUrl: "/movies/validated/564996-murder-mystery-2-0-150-0-225-crop.jpg",
    releaseDate: "2023-03-31",
    rating: 0,
    length: 0,
    genre: "Comedy",
    timesWatched: 0,
  },
  {
    title: "John Wick : Chapitre 4",
    director: "Chad Stahelski",
    actors: [
      {
        name: "Keanu Reeves",
      },
    ],
    coverUrl: "/movies/validated/530882-john-wick-chapter-4-0-150-0-225-crop.jpg",
    releaseDate: "2023-03-24",
    rating: 0,
    length: 0,
    genre: "Action",
    timesWatched: 0,
  },
  {
    title: "Amour au Premier Baiser",
    director: "Alauda Ruiz de Azúa",
    actors: [
      {
        name: "Silvia Alonso",
      },
    ],
    coverUrl: "/movies/validated/735234-love-at-first-kiss-0-150-0-225-crop.jpg",
    releaseDate: "2023-02-10",
    rating: 0,
    length: 0,
    genre: "Romance",
    timesWatched: 0,
  },
  {
    title: "Creed III",
    director: "Michael B. Jordan",
    actors: [
      {
        name: "Michael B. Jordan",
      },
    ],
    coverUrl: "/movies/validated/601624-creed-iii-0-150-0-225-crop.jpg",
    releaseDate: "2023-03-03",
    rating: 0,
    length: 0,
    genre: "Drama",
    timesWatched: 0,
  },
  {
    title: "Ant-Man et la Guêpe : Quantumania",
    director: "Peyton Reed",
    actors: [
      {
        name: "Paul Rudd",
      },
    ],
    coverUrl: "/movies/validated/566237-ant-man-and-the-wasp-quantumania-0-150-0-225-crop.jpg",
    releaseDate: "2023-02-17",
    rating: 0,
    length: 0,
    genre: "Action",
    timesWatched: 0,
  },
  {
    title: "Babylon",
    director: "Damien Chazelle",
    actors: [
      {
        name: "Brad Pitt",
      },
    ],
    coverUrl: "/movies/validated/542773-babylon-0-150-0-225-crop.jpg",
    releaseDate: "2022-12-23",
    rating: 0,
    length: 0,
    genre: "Drama",
    timesWatched: 0,
  },
  {
    title: "Avatar : La Voie de l'Eau",
    director: "James Cameron",
    actors: [
      {
        name: "Sam Worthington",
      },
    ],
    coverUrl: "/movies/validated/63058-avatar-the-way-of-water-0-150-0-225-crop.jpg",
    releaseDate: "2022-12-16",
    rating: 0,
    length: 0,
    genre: "Science Fiction",
    timesWatched: 0,
  },
  {
    title: "Le Chat Potté 2 : La Dernière Quête",
    director: "Joel Crawford",
    actors: [
      {
        name: "Antonio Banderas",
      },
    ],
    coverUrl: "/movies/validated/242285-puss-in-boots-the-last-wish-0-150-0-225-crop.jpg",
    releaseDate: "2022-12-21",
    rating: 0,
    length: 0,
    genre: "Animation",
    timesWatched: 0,
  },
  {
    title: "Enola Holmes 2",
    director: "Harry Bradbeer",
    actors: [
      {
        name: "Millie Bobby Brown",
      },
    ],
    coverUrl: "/movies/validated/744826-enola-holmes-2-0-150-0-225-crop.jpg",
    releaseDate: "2022-11-04",
    rating: 0,
    length: 0,
    genre: "Mystery",
    timesWatched: 0,
  },
  {
    title: "Black Panther : Wakanda pour Toujours",
    director: "Ryan Coogler",
    actors: [
      {
        name: "Letitia Wright",
      },
    ],
    coverUrl: "/movies/validated/435460-black-panther-wakanda-forever-0-150-0-225-crop.jpg",
    releaseDate: "2022-11-11",
    rating: 0,
    length: 0,
    genre: "Action",
    timesWatched: 0,
  },
  {
    title: "L'École du Bien et du Mal",
    director: "Paul Feig",
    actors: [
      {
        name: "Sofia Wylie",
      },
    ],
    coverUrl: "/movies/validated/698765-the-school-for-good-and-evil-0-150-0-225-crop.jpg",
    releaseDate: "2022-10-19",
    rating: 0,
    length: 0,
    genre: "Fantasy",
    timesWatched: 0,
  },
  {
    title: "Black Adam",
    director: "Jaume Collet-Serra",
    actors: [
      {
        name: "Dwayne Johnson",
      },
    ],
    coverUrl: "/movies/validated/369179-black-adam-0-150-0-225-crop.jpg",
    releaseDate: "2022-10-21",
    rating: 0,
    length: 0,
    genre: "Action",
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
    coverUrl: "/movies/validated/926280-dahmer-monster-the-jeffrey-dahmer-story-0-150-0-225-crop.jpg",
    releaseDate: "2022-09-21",
    rating: 0,
    length: 0,
    genre: "Crime",
    timesWatched: 0,
  },
  {
    title: "Glass Onion",
    director: "Rian Johnson",
    actors: [
      {
        name: "Daniel Craig",
      },
    ],
    coverUrl: "/movies/validated/586723-glass-onion-a-knives-out-mystery-0-150-0-225-crop.jpg",
    releaseDate: "2022-12-23",
    rating: 0,
    length: 0,
    genre: "Mystery",
    timesWatched: 0,
  },
  {
    title: "Samaritan",
    director: "Julius Avery",
    actors: [
      {
        name: "Sylvester Stallone",
      },
    ],
    coverUrl: "/movies/validated/555588-samaritan-0-150-0-225-crop.jpg",
    releaseDate: "2022-08-26",
    rating: 0,
    length: 0,
    genre: "Action",
    timesWatched: 0,
  },
  {
    title: "Prey",
    director: "Dan Trachtenberg",
    actors: [
      {
        name: "Amber Midthunder",
      },
    ],
    coverUrl: "/movies/validated/686389-prey-0-150-0-225-crop.jpg",
    releaseDate: "2022-08-05",
    rating: 0,
    length: 0,
    genre: "Action",
    timesWatched: 0,
  },
  {
    title: "Cœurs Violets",
    director: "Elizabeth Allen Rosenbaum",
    actors: [
      {
        name: "Sofia Carson",
      },
    ],
    coverUrl: "/movies/validated/683195-purple-hearts-0-150-0-225-crop.jpg",
    releaseDate: "2022-07-29",
    rating: 0,
    length: 0,
    genre: "Romance",
    timesWatched: 0,
  },
  {
    title: "Bullet Train",
    director: "David Leitch",
    actors: [
      {
        name: "Brad Pitt",
      },
    ],
    coverUrl: "/movies/validated/641961-bullet-train-0-150-0-225-crop.jpg",
    releaseDate: "2022-08-05",
    rating: 0,
    length: 0,
    genre: "Action",
    timesWatched: 0,
  },
  {
    title: "Bonjour, Au Revoir et Tout le Reste",
    director: "Michael Lewen",
    actors: [
      {
        name: "Talia Ryder",
      },
    ],
    coverUrl: "/movies/validated/666928-hello-goodbye-and-everything-in-between-0-150-0-225-crop.jpg",
    releaseDate: "2022-07-06",
    rating: 0,
    length: 0,
    genre: "Romance",
    timesWatched: 0,
  },
  {
    title: "Thor : Amour et Tonnerre",
    director: "Taika Waititi",
    actors: [
      {
        name: "Chris Hemsworth",
      },
    ],
    coverUrl: "/movies/validated/543002-thor-love-and-thunder-0-150-0-225-crop.jpg",
    releaseDate: "2022-07-08",
    rating: 0,
    length: 0,
    genre: "Action",
    timesWatched: 0,
  },
  {
    title: "Hustle",
    director: "Jeremiah Zagar",
    actors: [
      {
        name: "Adam Sandler",
      },
    ],
    coverUrl: "/movies/validated/629376-hustle-0-150-0-225-crop.jpg",
    releaseDate: "2022-06-08",
    rating: 0,
    length: 0,
    genre: "Drama",
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
    coverUrl: "/movies/validated/828615-obi-wan-kenobi-0-150-0-225-crop.jpg",
    releaseDate: "2022-05-27",
    rating: 0,
    length: 0,
    genre: "Science Fiction",
    timesWatched: 0,
  },
  {
    title: "Un Accord Parfait",
    director: "Stuart McDonald",
    actors: [
      {
        name: "Victoria Justice",
      },
    ],
    coverUrl: "/movies/validated/839735-a-perfect-pairing-0-150-0-225-crop.jpg",
    releaseDate: "2022-05-19",
    rating: 0,
    length: 0,
    genre: "Romance",
    timesWatched: 0,
  },
  {
    title: "Top Gun : Maverick",
    director: "Joseph Kosinski",
    actors: [
      {
        name: "Tom Cruise",
      },
    ],
    coverUrl: "/movies/validated/293465-top-gun-maverick-0-150-0-225-crop.jpg",
    releaseDate: "2022-05-27",
    rating: 0,
    length: 0,
    genre: "Action",
    timesWatched: 0,
  },
  {
    title: "Doctor Strange dans le Multivers de la Folie",
    director: "Sam Raimi",
    actors: [
      {
        name: "Benedict Cumberbatch",
      },
    ],
    coverUrl: "/movies/validated/385511-doctor-strange-in-the-multiverse-of-madness-0-150-0-225-crop.jpg",
    releaseDate: "2022-05-06",
    rating: 0,
    length: 0,
    genre: "Action",
    timesWatched: 0,
  },
  {
    title: "Les Animaux Fantastiques : Les Secrets de Dumbledore",
    director: "David Yates",
    actors: [
      {
        name: "Eddie Redmayne",
      },
    ],
    coverUrl: "/movies/validated/268366-fantastic-beasts-the-secrets-of-dumbledore-0-150-0-225-crop.jpg",
    releaseDate: "2022-04-15",
    rating: 0,
    length: 0,
    genre: "Fantasy",
    timesWatched: 0,
  },
  {
    title: "Tout Partout Tout à la Fois",
    director: "Daniel Kwan, Daniel Scheinert",
    actors: [
      {
        name: "Michelle Yeoh",
      },
    ],
    coverUrl: "/movies/validated/474474-everything-everywhere-all-at-once-0-150-0-225-crop.jpg",
    releaseDate: "2022-03-25",
    rating: 0,
    length: 0,
    genre: "Science Fiction",
    timesWatched: 0,
  },
  {
    title: "Le Projet Adam",
    director: "Shawn Levy",
    actors: [
      {
        name: "Ryan Reynolds",
      },
    ],
    coverUrl: "/movies/validated/620665-the-adam-project-0-150-0-225-crop.jpg",
    releaseDate: "2022-03-11",
    rating: 0,
    length: 0,
    genre: "Science Fiction",
    timesWatched: 0,
  },
  {
    title: "The Batman",
    director: "Matt Reeves",
    actors: [
      {
        name: "Robert Pattinson",
      },
    ],
    coverUrl: "/movies/validated/348914-the-batman-0-150-0-225-crop.jpg",
    releaseDate: "2022-03-04",
    rating: 0,
    length: 0,
    genre: "Action",
    timesWatched: 0,
  },
  {
    title: "L'Entre-Deux",
    director: "Arie Posin",
    actors: [
      {
        name: "Joey King",
      },
    ],
    coverUrl: "/movies/validated/735089-the-in-between-0-150-0-225-crop.jpg",
    releaseDate: "2022-02-11",
    rating: 0,
    length: 0,
    genre: "Romance",
    timesWatched: 0,
  },
  {
    title: "À Travers Ma Fenêtre",
    director: "Marçal Forés",
    actors: [
      {
        name: "Julio Peña",
      },
    ],
    coverUrl: "/movies/validated/735239-through-my-window-0-150-0-225-crop.jpg",
    releaseDate: "2022-02-04",
    rating: 0,
    length: 0,
    genre: "Romance",
    timesWatched: 0,
  },
  {
    title: "Spider-Man : No Way Home",
    director: "Jon Watts",
    actors: [
      {
        name: "Tom Holland",
      },
    ],
    coverUrl: "/movies/validated/560787-spider-man-no-way-home-0-150-0-225-crop.jpg",
    releaseDate: "2021-12-17",
    rating: 0,
    length: 0,
    genre: "Action",
    timesWatched: 0,
  },
  {
    title: "Ne Regardez Pas en Haut",
    director: "Adam McKay",
    actors: [
      {
        name: "Leonardo DiCaprio",
      },
    ],
    coverUrl: "/movies/validated/572255-don-t-look-up-0-150-0-225-crop.jpg",
    releaseDate: "2021-12-24",
    rating: 0,
    length: 0,
    genre: "Comedy",
    timesWatched: 0,
  },
  {
    title: "Love Hard",
    director: "Hernán Jiménez",
    actors: [
      {
        name: "Nina Dobrev",
      },
    ],
    coverUrl: "/movies/validated/656542-love-hard-0-150-0-225-crop.jpg",
    releaseDate: "2021-11-05",
    rating: 0,
    length: 0,
    genre: "Romance",
    timesWatched: 0,
  },
  {
    title: "Red Notice",
    director: "Rawson Marshall Thurber",
    actors: [
      {
        name: "Dwayne Johnson",
      },
    ],
    coverUrl: "/movies/validated/441858-red-notice-0-150-0-225-crop.jpg",
    releaseDate: "2021-11-12",
    rating: 0,
    length: 0,
    genre: "Action",
    timesWatched: 0,
  },
  {
    title: "Les Éternels",
    director: "Chloé Zhao",
    actors: [
      {
        name: "Gemma Chan",
      },
    ],
    coverUrl: "/movies/validated/454016-eternals-0-150-0-225-crop.jpg",
    releaseDate: "2021-11-05",
    rating: 0,
    length: 0,
    genre: "Action",
    timesWatched: 0,
  },
  {
    title: "Encanto",
    director: "Jared Bush, Byron Howard",
    actors: [
      {
        name: "Stephanie Beatriz",
      },
    ],
    coverUrl: "/movies/validated/496592-encanto-0-150-0-225-crop.jpg",
    releaseDate: "2021-11-24",
    rating: 0,
    length: 0,
    genre: "Animation",
    timesWatched: 0,
  },
  {
    title: "Mourir Peut Attendre",
    director: "Cary Joji Fukunaga",
    actors: [
      {
        name: "Daniel Craig",
      },
    ],
    coverUrl: "/movies/validated/305964-no-time-to-die-0-150-0-225-crop.jpg",
    releaseDate: "2021-10-08",
    rating: 0,
    length: 0,
    genre: "Action",
    timesWatched: 0,
  },
  {
    title: "Venom : Let There Be Carnage",
    director: "Andy Serkis",
    actors: [
      {
        name: "Tom Hardy",
      },
    ],
    coverUrl: "/movies/validated/508638-venom-let-there-be-carnage-0-150-0-225-crop.jpg",
    releaseDate: "2021-10-01",
    rating: 0,
    length: 0,
    genre: "Action",
    timesWatched: 0,
  },
  {
    title: "Le Coupable",
    director: "Antoine Fuqua",
    actors: [
      {
        name: "Jake Gyllenhaal",
      },
    ],
    coverUrl: "/movies/validated/496198-the-guilty-0-150-0-225-crop.jpg",
    releaseDate: "2021-10-01",
    rating: 0,
    length: 0,
    genre: "Thriller",
    timesWatched: 0,
  },
  {
    title: "Dune",
    director: "Denis Villeneuve",
    actors: [
      {
        name: "Timothée Chalamet",
      },
    ],
    coverUrl: "/movies/validated/617443-dune-part-two-0-150-0-225-crop.jpg",
    releaseDate: "2021-10-22",
    rating: 0,
    length: 0,
    genre: "Science Fiction",
    timesWatched: 0,
  },
  {
    title: "King Richard",
    director: "Reinaldo Marcus Green",
    actors: [
      {
        name: "Will Smith",
      },
    ],
    coverUrl: "/movies/validated/541998-king-richard-0-150-0-225-crop.jpg",
    releaseDate: "2021-11-19",
    rating: 0,
    length: 0,
    genre: "Drama",
    timesWatched: 0,
  },
  {
    title: "Shang-Chi et la Légende des Dix Anneaux",
    director: "Destin Daniel Cretton",
    actors: [
      {
        name: "Simu Liu",
      },
    ],
    coverUrl: "/movies/validated/494969-shang-chi-and-the-legend-of-the-ten-rings-0-150-0-225-crop.jpg",
    releaseDate: "2021-09-03",
    rating: 0,
    length: 0,
    genre: "Action",
    timesWatched: 0,
  },
  {
    title: "Free Guy",
    director: "Shawn Levy",
    actors: [
      {
        name: "Ryan Reynolds",
      },
    ],
    coverUrl: "/movies/validated/479814-free-guy-0-150-0-225-crop.jpg",
    releaseDate: "2021-08-13",
    rating: 0,
    length: 0,
    genre: "Comedy",
    timesWatched: 0,
  },
  {
    title: "Resort to Love",
    director: "Steven Tsuchida",
    actors: [
      {
        name: "Christina Milian",
      },
    ],
    coverUrl: "/movies/validated/704151-resort-to-love-0-150-0-225-crop.jpg",
    releaseDate: "2021-07-29",
    rating: 0,
    length: 0,
    genre: "Romance",
    timesWatched: 0,
  },
  {
    title: "OSS 117 : Alerte Rouge en Afrique Noire",
    director: "Nicolas Bedos",
    actors: [
      {
        name: "Jean Dujardin",
      },
    ],
    coverUrl: "/movies/validated/531701-oss-117-red-alert-in-black-africa-0-150-0-225-crop.jpg",
    releaseDate: "2021-07-14",
    rating: 0,
    length: 0,
    genre: "Comedy",
    timesWatched: 0,
  },
  {
    title: "Jolt",
    director: "Tanya Wexler",
    actors: [
      {
        name: "Kate Beckinsale",
      },
    ],
    coverUrl: "/movies/validated/544435-jolt-0-150-0-225-crop.jpg",
    releaseDate: "2021-07-23",
    rating: 0,
    length: 0,
    genre: "Action",
    timesWatched: 0,
  },
  {
    title: "Black Widow",
    director: "Cate Shortland",
    actors: [
      {
        name: "Scarlett Johansson",
      },
    ],
    coverUrl: "/movies/validated/427807-black-widow-0-150-0-225-crop.jpg",
    releaseDate: "2021-07-09",
    rating: 0,
    length: 0,
    genre: "Action",
    timesWatched: 0,
  },
  {
    title: "Fast & Furious 9",
    director: "Justin Lin",
    actors: [
      {
        name: "Vin Diesel",
      },
    ],
    coverUrl: "/movies/validated/fast_and_furious_9.jpg",
    releaseDate: "2021-06-25",
    rating: 0,
    length: 0,
    genre: "Action",
    timesWatched: 0,
  },
];