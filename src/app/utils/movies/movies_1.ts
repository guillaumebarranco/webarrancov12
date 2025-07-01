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
    coverUrl: "/movies_pictures/validated/i_robot.jpg",
    releaseDate: "2004-12-10",
    rating: 5,
    length: 101,
    genre: "Science Fiction",
    timesWatched: 30,
  },

  {
    title: "Mickey 17",
    director: "Bong Joon-ho",
    actors: [
      {
        name: "Robert Pattinson",
      },
    ],
    coverUrl: "/movies_pictures/validated/620281-mickey-17-0-150-0-225-crop.jpg",
    releaseDate: "2025-01-31",
    rating: 0,
    length: 0,
    genre: "Science Fiction",
    timesWatched: 1,
  },

  {
    title: "Carry-On",
    director: "Jaume Collet-Serra",
    actors: [
      {
        name: "Taron Egerton",
      },
    ],
    coverUrl: "/movies_pictures/validated/905876-carry-on-2024-0-150-0-225-crop.jpg",
    releaseDate: "2024-11-15",
    rating: 0,
    length: 0,
    genre: "Action",
    timesWatched: 1,
  },


  {
    title: "Le Comte de Monte-Cristo",
    director: "Alexandre de La Patellière, Matthieu Delaporte",
    actors: [
      {
        name: "Pierre Niney",
      },
    ],
    coverUrl: "/movies_pictures/validated/977835-the-count-of-monte-cristo-2024-0-150-0-225-crop.jpg",
    releaseDate: "2024-06-28",
    rating: 0,
    length: 0,
    genre: "Adventure",
    timesWatched: 1,
  },
  {
    title: "Challengers",
    director: "Luca Guadagnino",
    actors: [
      {
        name: "Zendaya",
      },
    ],
    coverUrl: "/movies_pictures/validated/842301-challengers-0-150-0-225-crop.jpg",
    releaseDate: "2024-04-26",
    rating: 2,
    length: 0,
    genre: "Drama",
    timesWatched: 1,
  },
  {
    title: "Road House",
    director: "Doug Liman",
    actors: [
      {
        name: "Jake Gyllenhaal",
      },
    ],
    coverUrl: "/movies_pictures/validated/291213-road-house-0-150-0-225-crop.jpg",
    releaseDate: "2024-03-21",
    rating: 0,
    length: 0,
    genre: "Action",
    timesWatched: 5,
  },
  {
    title: "Damsel",
    director: "Juan Carlos Fresnadillo",
    actors: [
      {
        name: "Millie Bobby Brown",
      },
    ],
    coverUrl: "/movies_pictures/validated/683451-damsel-0-150-0-225-crop.jpg",
    releaseDate: "2024-03-08",
    rating: 0,
    length: 0,
    genre: "Fantasy",
    timesWatched: 2,
  },
  {
    title: "Dune : Partie 2",
    director: "Denis Villeneuve",
    actors: [
      {
        name: "Timothée Chalamet",
      },
    ],
    coverUrl: "/movies_pictures/validated/617443-dune-part-two-0-150-0-225-crop.jpg",
    releaseDate: "2024-03-01",
    rating: 0,
    length: 0,
    genre: "Science Fiction",
    timesWatched: 1,
  },
  {
    title: "Sly",
    director: "Thom Zimny",
    actors: [
      {
        name: "Sylvester Stallone",
      },
    ],
    coverUrl: "/movies_pictures/validated/073f18caf5a23116b09d9b12d9828837.jpg",
    releaseDate: "2023-11-03",
    rating: 0,
    length: 0,
    genre: "Documentary",
    timesWatched: 1,
  },
  {
    title: "Gran Turismo",
    director: "Neill Blomkamp",
    actors: [
      {
        name: "Archie Madekwe",
      },
    ],
    coverUrl: "/movies_pictures/validated/882718-gran-turismo-0-150-0-225-crop.jpg",
    releaseDate: "2023-08-25",
    rating: 0,
    length: 0,
    genre: "Action",
    timesWatched: 1,
  },
  {
    title: "Oppenheimer",
    director: "Christopher Nolan",
    actors: [
      {
        name: "Cillian Murphy",
      },
    ],
    coverUrl: "/movies_pictures/validated/784328-oppenheimer-0-150-0-225-crop.jpg",
    releaseDate: "2023-07-21",
    rating: 0,
    length: 0,
    genre: "Drama",
    timesWatched: 1,
  },
  {
    title: "Barbie",
    director: "Greta Gerwig",
    actors: [
      {
        name: "Margot Robbie",
      },
    ],
    coverUrl: "/movies_pictures/validated/277064-barbie-0-150-0-225-crop.jpg",
    releaseDate: "2023-07-21",
    rating: 3,
    length: 0,
    genre: "Comedy",
    timesWatched: 1,
  },
  {
    title: "The Flash",
    director: "Andy Muschietti",
    actors: [
      {
        name: "Ezra Miller",
      },
    ],
    coverUrl: "/movies_pictures/validated/225845-the-flash-0-150-0-225-crop.jpg",
    releaseDate: "2023-06-16",
    rating: 0,
    length: 0,
    genre: "Action",
    timesWatched: 1,
  },
  {
    title: "Arnold",
    director: "Lesley Chilcott",
    actors: [
      {
        name: "Arnold Schwarzenegger",
      },
    ],
    coverUrl: "/movies_pictures/validated/1014180-arnold-0-150-0-225-crop.jpg",
    releaseDate: "2023-06-07",
    rating: 0,
    length: 0,
    genre: "Documentary",
    timesWatched: 1,
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
    coverUrl: "/movies_pictures/validated/564996-murder-mystery-2-0-150-0-225-crop.jpg",
    releaseDate: "2023-03-31",
    rating: 0,
    length: 0,
    genre: "Comedy",
    timesWatched: 1,
  },
  {
    title: "John Wick : Chapitre 4",
    director: "Chad Stahelski",
    actors: [
      {
        name: "Keanu Reeves",
      },
    ],
    coverUrl: "/movies_pictures/validated/530882-john-wick-chapter-4-0-150-0-225-crop.jpg",
    releaseDate: "2023-03-24",
    rating: 0,
    length: 0,
    genre: "Action",
    timesWatched: 2,
  },
  {
    title: "Creed III",
    director: "Michael B. Jordan",
    actors: [
      {
        name: "Michael B. Jordan",
      },
    ],
    coverUrl: "/movies_pictures/validated/601624-creed-iii-0-150-0-225-crop.jpg",
    releaseDate: "2023-03-03",
    rating: 0,
    length: 0,
    genre: "Drama",
    timesWatched: 1,
  },
  {
    title: "Babylon",
    director: "Damien Chazelle",
    actors: [
      {
        name: "Brad Pitt",
      },
    ],
    coverUrl: "/movies_pictures/validated/542773-babylon-0-150-0-225-crop.jpg",
    releaseDate: "2022-12-23",
    rating: 0,
    length: 0,
    genre: "Drama",
    timesWatched: 1,
  },
  {
    title: "Avatar : La Voie de l'Eau",
    director: "James Cameron",
    actors: [
      {
        name: "Sam Worthington",
      },
    ],
    coverUrl: "/movies_pictures/validated/63058-avatar-the-way-of-water-0-150-0-225-crop.jpg",
    releaseDate: "2022-12-16",
    rating: 0,
    length: 0,
    genre: "Science Fiction",
    timesWatched: 1,
  },
  {
    title: "Le Chat Potté 2 : La Dernière Quête",
    director: "Joel Crawford",
    actors: [
      {
        name: "Antonio Banderas",
      },
    ],
    coverUrl: "/movies_pictures/validated/242285-puss-in-boots-the-last-wish-0-150-0-225-crop.jpg",
    releaseDate: "2022-12-21",
    rating: 4,
    length: 0,
    genre: "Animation",
    timesWatched: 1,
  },
  {
    title: "Enola Holmes 2",
    director: "Harry Bradbeer",
    actors: [
      {
        name: "Millie Bobby Brown",
      },
    ],
    coverUrl: "/movies_pictures/validated/744826-enola-holmes-2-0-150-0-225-crop.jpg",
    releaseDate: "2022-11-04",
    rating: 0,
    length: 0,
    genre: "Mystery",
    timesWatched: 2,
  },
  {
    title: "L'École du Bien et du Mal",
    director: "Paul Feig",
    actors: [
      {
        name: "Sofia Wylie",
      },
    ],
    coverUrl: "/movies_pictures/validated/698765-the-school-for-good-and-evil-0-150-0-225-crop.jpg",
    releaseDate: "2022-10-19",
    rating: 0,
    length: 0,
    genre: "Fantasy",
    timesWatched: 1,
  },
  {
    title: "Glass Onion",
    director: "Rian Johnson",
    actors: [
      {
        name: "Daniel Craig",
      },
    ],
    coverUrl: "/movies_pictures/validated/586723-glass-onion-a-knives-out-mystery-0-150-0-225-crop.jpg",
    releaseDate: "2022-12-23",
    rating: 0,
    length: 0,
    genre: "Mystery",
    timesWatched: 1,
  },
  {
    title: "Samaritan",
    director: "Julius Avery",
    actors: [
      {
        name: "Sylvester Stallone",
      },
    ],
    coverUrl: "/movies_pictures/validated/555588-samaritan-0-150-0-225-crop.jpg",
    releaseDate: "2022-08-26",
    rating: 0,
    length: 0,
    genre: "Action",
    timesWatched: 1,
  },
  {
    title: "Prey",
    director: "Dan Trachtenberg",
    actors: [
      {
        name: "Amber Midthunder",
      },
    ],
    coverUrl: "/movies_pictures/validated/686389-prey-0-150-0-225-crop.jpg",
    releaseDate: "2022-08-05",
    rating: 0,
    length: 0,
    genre: "Action",
    timesWatched: 1,
  },

  {
    title: "Bullet Train",
    director: "David Leitch",
    actors: [
      {
        name: "Brad Pitt",
      },
    ],
    coverUrl: "/movies_pictures/validated/641961-bullet-train-0-150-0-225-crop.jpg",
    releaseDate: "2022-08-05",
    rating: 3.75,
    length: 0,
    genre: "Action",
    timesWatched: 1,
  },
  {
    title: "Le haut du panier",
    director: "Jeremiah Zagar",
    actors: [
      {
        name: "Adam Sandler",
      },
    ],
    coverUrl: "/movies_pictures/validated/629376-hustle-0-150-0-225-crop.jpg",
    releaseDate: "2022-06-08",
    rating: 0,
    length: 0,
    genre: "Drama",
    timesWatched: 1,
  },
  {
    title: "Top Gun : Maverick",
    director: "Joseph Kosinski",
    actors: [
      {
        name: "Tom Cruise",
      },
    ],
    coverUrl: "/movies_pictures/validated/293465-top-gun-maverick-0-150-0-225-crop.jpg",
    releaseDate: "2022-05-27",
    rating: 3.75,
    length: 0,
    genre: "Action",
    timesWatched: 1,
  },
  {
    title: "Les Animaux Fantastiques : Les Secrets de Dumbledore",
    director: "David Yates",
    actors: [
      {
        name: "Eddie Redmayne",
      },
    ],
    coverUrl: "/movies_pictures/validated/268366-fantastic-beasts-the-secrets-of-dumbledore-0-150-0-225-crop.jpg",
    releaseDate: "2022-04-15",
    rating: 0,
    length: 0,
    genre: "Fantasy",
    timesWatched: 1,
  },
  {
    title: "Everything Everywhere All at Once",
    director: "Daniel Kwan, Daniel Scheinert",
    actors: [
      {
        name: "Michelle Yeoh",
      },
    ],
    coverUrl: "/movies_pictures/validated/474474-everything-everywhere-all-at-once-0-150-0-225-crop.jpg",
    releaseDate: "2022-03-25",
    rating: 0,
    length: 0,
    genre: "Science Fiction",
    timesWatched: 1,
  },
  {
    title: "The Adam Project",
    director: "Shawn Levy",
    actors: [
      {
        name: "Ryan Reynolds",
      },
    ],
    coverUrl: "/movies_pictures/validated/620665-the-adam-project-0-150-0-225-crop.jpg",
    releaseDate: "2022-03-11",
    rating: 0,
    length: 0,
    genre: "Science Fiction",
    timesWatched: 1,
  },
  {
    title: "Don't look up, déni cosmique",
    director: "Adam McKay",
    actors: [
      {
        name: "Leonardo DiCaprio",
      },
    ],
    coverUrl: "/movies_pictures/validated/572255-don-t-look-up-0-150-0-225-crop.jpg",
    releaseDate: "2021-12-24",
    rating: 3.75,
    length: 0,
    genre: "Comedy",
    timesWatched: 1,
  },
  {
    title: "Red Notice",
    director: "Rawson Marshall Thurber",
    actors: [
      {
        name: "Dwayne Johnson",
      },
    ],
    coverUrl: "/movies_pictures/validated/441858-red-notice-0-150-0-225-crop.jpg",
    releaseDate: "2021-11-12",
    rating: 0,
    length: 0,
    genre: "Action",
    timesWatched: 3,
  },
  {
    title: "Mourir Peut Attendre",
    director: "Cary Joji Fukunaga",
    actors: [
      {
        name: "Daniel Craig",
      },
    ],
    coverUrl: "/movies_pictures/validated/305964-no-time-to-die-0-150-0-225-crop.jpg",
    releaseDate: "2021-10-08",
    rating: 0,
    length: 0,
    genre: "Action",
    timesWatched: 2,
  },
  {
    title: "The Guilty",
    director: "Antoine Fuqua",
    actors: [
      {
        name: "Jake Gyllenhaal",
      },
    ],
    coverUrl: "/movies_pictures/validated/496198-the-guilty-0-150-0-225-crop.jpg",
    releaseDate: "2021-10-01",
    rating: 0,
    length: 0,
    genre: "Thriller",
    timesWatched: 1,
  },
  {
    title: "Dune",
    director: "Denis Villeneuve",
    actors: [
      {
        name: "Timothée Chalamet",
      },
    ],
    coverUrl: "/movies_pictures/validated/617443-dune-part-two-0-150-0-225-crop.jpg",
    releaseDate: "2021-10-22",
    rating: 0,
    length: 0,
    genre: "Science Fiction",
    timesWatched: 1,
  },
  {
    title: "La méthode Williams",
    director: "Reinaldo Marcus Green",
    actors: [
      {
        name: "Will Smith",
      },
    ],
    coverUrl: "/movies_pictures/validated/541998-king-richard-0-150-0-225-crop.jpg",
    releaseDate: "2021-11-19",
    rating: 3.75,
    length: 0,
    genre: "Drama",
    timesWatched: 1,
  },
  {
    title: "Free Guy",
    director: "Shawn Levy",
    actors: [
      {
        name: "Ryan Reynolds",
      },
    ],
    coverUrl: "/movies_pictures/validated/479814-free-guy-0-150-0-225-crop.jpg",
    releaseDate: "2021-08-13",
    rating: 0,
    length: 0,
    genre: "Comedy",
    timesWatched: 1,
  },
  {
    title: "OSS 117 : Alerte Rouge en Afrique Noire",
    director: "Nicolas Bedos",
    actors: [
      {
        name: "Jean Dujardin",
      },
    ],
    coverUrl: "/movies_pictures/validated/531701-oss-117-red-alert-in-black-africa-0-150-0-225-crop.jpg",
    releaseDate: "2021-07-14",
    rating: 0,
    length: 0,
    genre: "Comedy",
    timesWatched: 1,
  },
  {
    title: "Jolt",
    director: "Tanya Wexler",
    actors: [
      {
        name: "Kate Beckinsale",
      },
    ],
    coverUrl: "/movies_pictures/validated/544435-jolt-0-150-0-225-crop.jpg",
    releaseDate: "2021-07-23",
    rating: 0,
    length: 0,
    genre: "Action",
    timesWatched: 3,
  },
];