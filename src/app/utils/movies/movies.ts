export interface Movie {
  title: string;
  director: string;
  actors: { name: string }[];
  coverUrl: string;
  releaseDate: string;
  rating: number;
  length: number;
  genre: string;
}

export const movies: Movie[] = [
  {
    title: "I, Robot",
    director: "Alex Proyas",
    actors: [
      {
        name: "Will Smith",
      },
    ],
    coverUrl: "/movies/i_robot.jpg",
    releaseDate: "2004-12-10",
    rating: 5,
    length: 101,
    genre: "Science Fiction",
  },
  {
    title: "Spider-Man: Beyond the Spider-Verse",
    director: "Joaquim Dos Santos, Kemp Powers, Justin K. Thompson",
    actors: [
      {
        name: "Shameik Moore",
      },
    ],
    coverUrl: "/movies/spider_man_beyond.jpg",
    releaseDate: "2024-10-25",
    rating: 0,
    length: 0,
    genre: "Animation",
  },
  {
    title: "The Life List",
    director: "Liz W. Garcia",
    actors: [
      {
        name: "Katherine Heigl",
      },
    ],
    coverUrl: "/movies/the_life_list.jpg",
    releaseDate: "2024-07-18",
    rating: 0,
    length: 0,
    genre: "Romance",
  },
  {
    title: "Mickey 17",
    director: "Bong Joon-ho",
    actors: [
      {
        name: "Robert Pattinson",
      },
    ],
    coverUrl: "/movies/mickey_17.jpg",
    releaseDate: "2025-01-31",
    rating: 0,
    length: 0,
    genre: "Science Fiction",
  },
  {
    title: "All the Blue in the Sky",
    director: "João Canijo",
    actors: [
      {
        name: "Rita Blanco",
      },
    ],
    coverUrl: "/movies/all_the_blue.jpg",
    releaseDate: "2022-09-08",
    rating: 3.5,
    length: 0,
    genre: "Drama",
  },
  {
    title: "Carry-On",
    director: "Jaume Collet-Serra",
    actors: [
      {
        name: "Taron Egerton",
      },
    ],
    coverUrl: "/movies/carry_on.jpg",
    releaseDate: "2024-11-15",
    rating: 0,
    length: 0,
    genre: "Action",
  },
  {
    title: "Deadpool & Wolverine",
    director: "Shawn Levy",
    actors: [
      {
        name: "Ryan Reynolds",
      },
      {
        name: "Hugh Jackman",
      },
    ],
    coverUrl: "/movies/deadpool_wolverine.jpg",
    releaseDate: "2024-07-26",
    rating: 0,
    length: 0,
    genre: "Action",
  },
  {
    title: "Beating Hearts",
    director: "Ludovic Bernard",
    actors: [
      {
        name: "Malik Zidi",
      },
    ],
    coverUrl: "/movies/beating_hearts.jpg",
    releaseDate: "2024-01-24",
    rating: 0,
    length: 0,
    genre: "Drama",
  },
  {
    title: "The Count of Monte Cristo",
    director: "Alexandre de La Patellière, Matthieu Delaporte",
    actors: [
      {
        name: "Pierre Niney",
      },
    ],
    coverUrl: "/movies/count_monte_cristo.jpg",
    releaseDate: "2024-06-28",
    rating: 0,
    length: 0,
    genre: "Adventure",
  },
  {
    title: "Challengers",
    director: "Luca Guadagnino",
    actors: [
      {
        name: "Zendaya",
      },
    ],
    coverUrl: "/movies/challengers.jpg",
    releaseDate: "2024-04-26",
    rating: 2,
    length: 0,
    genre: "Drama",
  },
  {
    title: "Road House",
    director: "Doug Liman",
    actors: [
      {
        name: "Jake Gyllenhaal",
      },
    ],
    coverUrl: "/movies/road_house.jpg",
    releaseDate: "2024-03-21",
    rating: 0,
    length: 0,
    genre: "Action",
  },
  {
    title: "Damsel",
    director: "Juan Carlos Fresnadillo",
    actors: [
      {
        name: "Millie Bobby Brown",
      },
    ],
    coverUrl: "/movies/damsel.jpg",
    releaseDate: "2024-03-08",
    rating: 0,
    length: 0,
    genre: "Fantasy",
  },
  {
    title: "Dune: Part Two",
    director: "Denis Villeneuve",
    actors: [
      {
        name: "Timothée Chalamet",
      },
    ],
    coverUrl: "/movies/dune_part_two.jpg",
    releaseDate: "2024-03-01",
    rating: 0,
    length: 0,
    genre: "Science Fiction",
  },
  {
    title: "The Marvels",
    director: "Nia DaCosta",
    actors: [
      {
        name: "Brie Larson",
      },
    ],
    coverUrl: "/movies/the_marvels.jpg",
    releaseDate: "2023-11-10",
    rating: 0,
    length: 0,
    genre: "Action",
  },
  {
    title: "Burning Betrayal",
    director: "Diego Freitas",
    actors: [
      {
        name: "Giovanna Lancellotti",
      },
    ],
    coverUrl: "/movies/burning_betrayal.jpg",
    releaseDate: "2023-10-25",
    rating: 0,
    length: 0,
    genre: "Romance",
  },
  {
    title: "Sly",
    director: "Thom Zimny",
    actors: [
      {
        name: "Sylvester Stallone",
      },
    ],
    coverUrl: "/movies/sly.jpg",
    releaseDate: "2023-11-03",
    rating: 0,
    length: 0,
    genre: "Documentary",
  },
  {
    title: "Love at First Sight",
    director: "Vanessa Caswill",
    actors: [
      {
        name: "Haley Lu Richardson",
      },
    ],
    coverUrl: "/movies/love_at_first_sight.jpg",
    releaseDate: "2023-09-15",
    rating: 0,
    length: 0,
    genre: "Romance",
  },
  {
    title: "Gran Turismo",
    director: "Neill Blomkamp",
    actors: [
      {
        name: "Archie Madekwe",
      },
    ],
    coverUrl: "/movies/gran_turismo.jpg",
    releaseDate: "2023-08-25",
    rating: 0,
    length: 0,
    genre: "Action",
  },
  {
    title: "Oppenheimer",
    director: "Christopher Nolan",
    actors: [
      {
        name: "Cillian Murphy",
      },
    ],
    coverUrl: "/movies/oppenheimer.jpg",
    releaseDate: "2023-07-21",
    rating: 0,
    length: 0,
    genre: "Drama",
  },
  {
    title: "Barbie",
    director: "Greta Gerwig",
    actors: [
      {
        name: "Margot Robbie",
      },
    ],
    coverUrl: "/movies/barbie.jpg",
    releaseDate: "2023-07-21",
    rating: 3,
    length: 0,
    genre: "Comedy",
  },
  {
    title: "Black Mirror: Mazey Day",
    director: "Uta Briesewitz",
    actors: [
      {
        name: "Zazie Beetz",
      },
    ],
    coverUrl: "/movies/black_mirror_mazey.jpg",
    releaseDate: "2023-06-15",
    rating: 0,
    length: 0,
    genre: "Science Fiction",
  },
  {
    title: "Black Mirror: Joan Is Awful",
    director: "Ally Pankiw",
    actors: [
      {
        name: "Annie Murphy",
      },
    ],
    coverUrl: "/movies/black_mirror_joan.jpg",
    releaseDate: "2023-06-15",
    rating: 0,
    length: 0,
    genre: "Science Fiction",
  },
  {
    title: "The Flash",
    director: "Andy Muschietti",
    actors: [
      {
        name: "Ezra Miller",
      },
    ],
    coverUrl: "/movies/the_flash.jpg",
    releaseDate: "2023-06-16",
    rating: 0,
    length: 0,
    genre: "Action",
  },
  {
    title: "Arnold",
    director: "Lesley Chilcott",
    actors: [
      {
        name: "Arnold Schwarzenegger",
      },
    ],
    coverUrl: "/movies/arnold.jpg",
    releaseDate: "2023-06-07",
    rating: 0,
    length: 0,
    genre: "Documentary",
  },
  {
    title: "Spider-Man: Across the Spider-Verse",
    director: "Joaquim Dos Santos, Kemp Powers, Justin K. Thompson",
    actors: [
      {
        name: "Shameik Moore",
      },
    ],
    coverUrl: "/movies/spider_man_across.jpg",
    releaseDate: "2023-06-02",
    rating: 0,
    length: 0,
    genre: "Animation",
  },
  {
    title: "Fast X",
    director: "Louis Leterrier",
    actors: [
      {
        name: "Vin Diesel",
      },
    ],
    coverUrl: "/movies/fast_x.jpg",
    releaseDate: "2023-05-19",
    rating: 0,
    length: 0,
    genre: "Action",
  },
  {
    title: "Guardians of the Galaxy Vol. 3",
    director: "James Gunn",
    actors: [
      {
        name: "Chris Pratt",
      },
    ],
    coverUrl: "/movies/guardians_vol_3.jpg",
    releaseDate: "2023-05-05",
    rating: 0,
    length: 0,
    genre: "Action",
  },
  {
    title: "The Super Mario Bros. Movie",
    director: "Aaron Horvath, Michael Jelenic",
    actors: [
      {
        name: "Chris Pratt",
      },
    ],
    coverUrl: "/movies/super_mario_bros.jpg",
    releaseDate: "2023-04-05",
    rating: 0,
    length: 0,
    genre: "Animation",
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
    coverUrl: "/movies/murder_mystery_2.jpg",
    releaseDate: "2023-03-31",
    rating: 0,
    length: 0,
    genre: "Comedy",
  },
  {
    title: "Scream VI",
    director: "Matt Bettinelli-Olpin, Tyler Gillett",
    actors: [
      {
        name: "Jenna Ortega",
      },
    ],
    coverUrl: "/movies/scream_vi.jpg",
    releaseDate: "2023-03-10",
    rating: 0,
    length: 0,
    genre: "Horror",
  },
  {
    title: "John Wick: Chapter 4",
    director: "Chad Stahelski",
    actors: [
      {
        name: "Keanu Reeves",
      },
    ],
    coverUrl: "/movies/john_wick_4.jpg",
    releaseDate: "2023-03-24",
    rating: 0,
    length: 0,
    genre: "Action",
  },
  {
    title: "Love at First Kiss",
    director: "Alauda Ruiz de Azúa",
    actors: [
      {
        name: "Silvia Alonso",
      },
    ],
    coverUrl: "/movies/love_at_first_kiss.jpg",
    releaseDate: "2023-02-10",
    rating: 0,
    length: 0,
    genre: "Romance",
  },
  {
    title: "Creed III",
    director: "Michael B. Jordan",
    actors: [
      {
        name: "Michael B. Jordan",
      },
    ],
    coverUrl: "/movies/creed_iii.jpg",
    releaseDate: "2023-03-03",
    rating: 0,
    length: 0,
    genre: "Drama",
  },
  {
    title: "Ant-Man and the Wasp: Quantumania",
    director: "Peyton Reed",
    actors: [
      {
        name: "Paul Rudd",
      },
    ],
    coverUrl: "/movies/ant_man_quantumania.jpg",
    releaseDate: "2023-02-17",
    rating: 0,
    length: 0,
    genre: "Action",
  },
  {
    title: "Babylon",
    director: "Damien Chazelle",
    actors: [
      {
        name: "Brad Pitt",
      },
    ],
    coverUrl: "/movies/babylon.jpg",
    releaseDate: "2022-12-23",
    rating: 0,
    length: 0,
    genre: "Drama",
  },
  {
    title: "Avatar: The Way of Water",
    director: "James Cameron",
    actors: [
      {
        name: "Sam Worthington",
      },
    ],
    coverUrl: "/movies/avatar_way_of_water.jpg",
    releaseDate: "2022-12-16",
    rating: 0,
    length: 0,
    genre: "Science Fiction",
  },
  {
    title: "Puss in Boots: The Last Wish",
    director: "Joel Crawford",
    actors: [
      {
        name: "Antonio Banderas",
      },
    ],
    coverUrl: "/movies/puss_in_boots_last_wish.jpg",
    releaseDate: "2022-12-21",
    rating: 0,
    length: 0,
    genre: "Animation",
  },
  {
    title: "Enola Holmes 2",
    director: "Harry Bradbeer",
    actors: [
      {
        name: "Millie Bobby Brown",
      },
    ],
    coverUrl: "/movies/enola_holmes_2.jpg",
    releaseDate: "2022-11-04",
    rating: 0,
    length: 0,
    genre: "Mystery",
  },
  {
    title: "Black Panther: Wakanda Forever",
    director: "Ryan Coogler",
    actors: [
      {
        name: "Letitia Wright",
      },
    ],
    coverUrl: "/movies/black_panther_wakanda.jpg",
    releaseDate: "2022-11-11",
    rating: 0,
    length: 0,
    genre: "Action",
  },
  {
    title: "The School for Good and Evil",
    director: "Paul Feig",
    actors: [
      {
        name: "Sofia Wylie",
      },
    ],
    coverUrl: "/movies/school_good_evil.jpg",
    releaseDate: "2022-10-19",
    rating: 0,
    length: 0,
    genre: "Fantasy",
  },
  {
    title: "Black Adam",
    director: "Jaume Collet-Serra",
    actors: [
      {
        name: "Dwayne Johnson",
      },
    ],
    coverUrl: "/movies/black_adam.jpg",
    releaseDate: "2022-10-21",
    rating: 0,
    length: 0,
    genre: "Action",
  },
  {
    title: "DAHMER - Monster: The Jeffrey Dahmer Story",
    director: "Carl Franklin",
    actors: [
      {
        name: "Evan Peters",
      },
    ],
    coverUrl: "/movies/dahmer.jpg",
    releaseDate: "2022-09-21",
    rating: 0,
    length: 0,
    genre: "Crime",
  },
  {
    title: "Glass Onion",
    director: "Rian Johnson",
    actors: [
      {
        name: "Daniel Craig",
      },
    ],
    coverUrl: "/movies/glass_onion.jpg",
    releaseDate: "2022-12-23",
    rating: 0,
    length: 0,
    genre: "Mystery",
  },
  {
    title: "Samaritan",
    director: "Julius Avery",
    actors: [
      {
        name: "Sylvester Stallone",
      },
    ],
    coverUrl: "/movies/samaritan.jpg",
    releaseDate: "2022-08-26",
    rating: 0,
    length: 0,
    genre: "Action",
  },
  {
    title: "Prey",
    director: "Dan Trachtenberg",
    actors: [
      {
        name: "Amber Midthunder",
      },
    ],
    coverUrl: "/movies/prey.jpg",
    releaseDate: "2022-08-05",
    rating: 0,
    length: 0,
    genre: "Action",
  },
  {
    title: "Purple Hearts",
    director: "Elizabeth Allen Rosenbaum",
    actors: [
      {
        name: "Sofia Carson",
      },
    ],
    coverUrl: "/movies/purple_hearts.jpg",
    releaseDate: "2022-07-29",
    rating: 0,
    length: 0,
    genre: "Romance",
  },
  {
    title: "Bullet Train",
    director: "David Leitch",
    actors: [
      {
        name: "Brad Pitt",
      },
    ],
    coverUrl: "/movies/bullet_train.jpg",
    releaseDate: "2022-08-05",
    rating: 0,
    length: 0,
    genre: "Action",
  },
  {
    title: "Hello, Goodbye, and Everything in Between",
    director: "Michael Lewen",
    actors: [
      {
        name: "Talia Ryder",
      },
    ],
    coverUrl: "/movies/hello_goodbye.jpg",
    releaseDate: "2022-07-06",
    rating: 0,
    length: 0,
    genre: "Romance",
  },
  {
    title: "Thor: Love and Thunder",
    director: "Taika Waititi",
    actors: [
      {
        name: "Chris Hemsworth",
      },
    ],
    coverUrl: "/movies/thor_love_thunder.jpg",
    releaseDate: "2022-07-08",
    rating: 0,
    length: 0,
    genre: "Action",
  },
  {
    title: "Hustle",
    director: "Jeremiah Zagar",
    actors: [
      {
        name: "Adam Sandler",
      },
    ],
    coverUrl: "/movies/hustle.jpg",
    releaseDate: "2022-06-08",
    rating: 0,
    length: 0,
    genre: "Drama",
  },
  {
    title: "Obi-Wan Kenobi",
    director: "Deborah Chow",
    actors: [
      {
        name: "Ewan McGregor",
      },
    ],
    coverUrl: "/movies/obi_wan_kenobi.jpg",
    releaseDate: "2022-05-27",
    rating: 0,
    length: 0,
    genre: "Science Fiction",
  },
  {
    title: "A Perfect Pairing",
    director: "Stuart McDonald",
    actors: [
      {
        name: "Victoria Justice",
      },
    ],
    coverUrl: "/movies/perfect_pairing.jpg",
    releaseDate: "2022-05-19",
    rating: 0,
    length: 0,
    genre: "Romance",
  },
  {
    title: "Top Gun: Maverick",
    director: "Joseph Kosinski",
    actors: [
      {
        name: "Tom Cruise",
      },
    ],
    coverUrl: "/movies/top_gun_maverick.jpg",
    releaseDate: "2022-05-27",
    rating: 0,
    length: 0,
    genre: "Action",
  },
  {
    title: "Doctor Strange in the Multiverse of Madness",
    director: "Sam Raimi",
    actors: [
      {
        name: "Benedict Cumberbatch",
      },
    ],
    coverUrl: "/movies/doctor_strange_multiverse.jpg",
    releaseDate: "2022-05-06",
    rating: 0,
    length: 0,
    genre: "Action",
  },
  {
    title: "Fantastic Beasts: The Secrets of Dumbledore",
    director: "David Yates",
    actors: [
      {
        name: "Eddie Redmayne",
      },
    ],
    coverUrl: "/movies/fantastic_beasts_secrets.jpg",
    releaseDate: "2022-04-15",
    rating: 0,
    length: 0,
    genre: "Fantasy",
  },
  {
    title: "Everything Everywhere All at Once",
    director: "Daniel Kwan, Daniel Scheinert",
    actors: [
      {
        name: "Michelle Yeoh",
      },
    ],
    coverUrl: "/movies/everything_everywhere.jpg",
    releaseDate: "2022-03-25",
    rating: 0,
    length: 0,
    genre: "Science Fiction",
  },
  {
    title: "The Adam Project",
    director: "Shawn Levy",
    actors: [
      {
        name: "Ryan Reynolds",
      },
    ],
    coverUrl: "/movies/adam_project.jpg",
    releaseDate: "2022-03-11",
    rating: 0,
    length: 0,
    genre: "Science Fiction",
  },
  {
    title: "The Batman",
    director: "Matt Reeves",
    actors: [
      {
        name: "Robert Pattinson",
      },
    ],
    coverUrl: "/movies/the_batman.jpg",
    releaseDate: "2022-03-04",
    rating: 0,
    length: 0,
    genre: "Action",
  },
  {
    title: "The In Between",
    director: "Arie Posin",
    actors: [
      {
        name: "Joey King",
      },
    ],
    coverUrl: "/movies/in_between.jpg",
    releaseDate: "2022-02-11",
    rating: 0,
    length: 0,
    genre: "Romance",
  },
  {
    title: "Through My Window",
    director: "Marçal Forés",
    actors: [
      {
        name: "Julio Peña",
      },
    ],
    coverUrl: "/movies/through_my_window.jpg",
    releaseDate: "2022-02-04",
    rating: 0,
    length: 0,
    genre: "Romance",
  },
  {
    title: "Spider-Man: No Way Home",
    director: "Jon Watts",
    actors: [
      {
        name: "Tom Holland",
      },
    ],
    coverUrl: "/movies/spider_man_no_way_home.jpg",
    releaseDate: "2021-12-17",
    rating: 0,
    length: 0,
    genre: "Action",
  },
  {
    title: "Don't Look Up",
    director: "Adam McKay",
    actors: [
      {
        name: "Leonardo DiCaprio",
      },
    ],
    coverUrl: "/movies/dont_look_up.jpg",
    releaseDate: "2021-12-24",
    rating: 0,
    length: 0,
    genre: "Comedy",
  },
  {
    title: "Love Hard",
    director: "Hernán Jiménez",
    actors: [
      {
        name: "Nina Dobrev",
      },
    ],
    coverUrl: "/movies/love_hard.jpg",
    releaseDate: "2021-11-05",
    rating: 0,
    length: 0,
    genre: "Romance",
  },
  {
    title: "Red Notice",
    director: "Rawson Marshall Thurber",
    actors: [
      {
        name: "Dwayne Johnson",
      },
    ],
    coverUrl: "/movies/red_notice.jpg",
    releaseDate: "2021-11-12",
    rating: 0,
    length: 0,
    genre: "Action",
  },
  {
    title: "Eternals",
    director: "Chloé Zhao",
    actors: [
      {
        name: "Gemma Chan",
      },
    ],
    coverUrl: "/movies/eternals.jpg",
    releaseDate: "2021-11-05",
    rating: 0,
    length: 0,
    genre: "Action",
  },
  {
    title: "Encanto",
    director: "Jared Bush, Byron Howard",
    actors: [
      {
        name: "Stephanie Beatriz",
      },
    ],
    coverUrl: "/movies/encanto.jpg",
    releaseDate: "2021-11-24",
    rating: 0,
    length: 0,
    genre: "Animation",
  },
  {
    title: "No Time to Die",
    director: "Cary Joji Fukunaga",
    actors: [
      {
        name: "Daniel Craig",
      },
    ],
    coverUrl: "/movies/no_time_to_die.jpg",
    releaseDate: "2021-10-08",
    rating: 0,
    length: 0,
    genre: "Action",
  },
  {
    title: "Squid Game",
    director: "Hwang Dong-hyuk",
    actors: [
      {
        name: "Lee Jung-jae",
      },
    ],
    coverUrl: "/movies/squid_game.jpg",
    releaseDate: "2021-09-17",
    rating: 0,
    length: 0,
    genre: "Thriller",
  },
  {
    title: "Venom: Let There Be Carnage",
    director: "Andy Serkis",
    actors: [
      {
        name: "Tom Hardy",
      },
    ],
    coverUrl: "/movies/venom_carnage.jpg",
    releaseDate: "2021-10-01",
    rating: 0,
    length: 0,
    genre: "Action",
  },
  {
    title: "The Guilty",
    director: "Antoine Fuqua",
    actors: [
      {
        name: "Jake Gyllenhaal",
      },
    ],
    coverUrl: "/movies/the_guilty.jpg",
    releaseDate: "2021-10-01",
    rating: 0,
    length: 0,
    genre: "Thriller",
  },
  {
    title: "Dune",
    director: "Denis Villeneuve",
    actors: [
      {
        name: "Timothée Chalamet",
      },
    ],
    coverUrl: "/movies/dune.jpg",
    releaseDate: "2021-10-22",
    rating: 0,
    length: 0,
    genre: "Science Fiction",
  },
  {
    title: "King Richard",
    director: "Reinaldo Marcus Green",
    actors: [
      {
        name: "Will Smith",
      },
    ],
    coverUrl: "/movies/king_richard.jpg",
    releaseDate: "2021-11-19",
    rating: 0,
    length: 0,
    genre: "Drama",
  },
  {
    title: "Shang-Chi and the Legend of the Ten Rings",
    director: "Destin Daniel Cretton",
    actors: [
      {
        name: "Simu Liu",
      },
    ],
    coverUrl: "/movies/shang_chi.jpg",
    releaseDate: "2021-09-03",
    rating: 0,
    length: 0,
    genre: "Action",
  },
  {
    title: "Free Guy",
    director: "Shawn Levy",
    actors: [
      {
        name: "Ryan Reynolds",
      },
    ],
    coverUrl: "/movies/free_guy.jpg",
    releaseDate: "2021-08-13",
    rating: 0,
    length: 0,
    genre: "Comedy",
  },
  {
    title: "Resort to Love",
    director: "Steven Tsuchida",
    actors: [
      {
        name: "Christina Milian",
      },
    ],
    coverUrl: "/movies/resort_to_love.jpg",
    releaseDate: "2021-07-29",
    rating: 0,
    length: 0,
    genre: "Romance",
  },
  {
    title: "OSS 117: From Africa with Love",
    director: "Nicolas Bedos",
    actors: [
      {
        name: "Jean Dujardin",
      },
    ],
    coverUrl: "/movies/oss_117_africa.jpg",
    releaseDate: "2021-07-14",
    rating: 0,
    length: 0,
    genre: "Comedy",
  },
  {
    title: "Jolt",
    director: "Tanya Wexler",
    actors: [
      {
        name: "Kate Beckinsale",
      },
    ],
    coverUrl: "/movies/jolt.jpg",
    releaseDate: "2021-07-23",
    rating: 0,
    length: 0,
    genre: "Action",
  },
  {
    title: "Black Widow",
    director: "Cate Shortland",
    actors: [
      {
        name: "Scarlett Johansson",
      },
    ],
    coverUrl: "/movies/black_widow.jpg",
    releaseDate: "2021-07-09",
    rating: 0,
    length: 0,
    genre: "Action",
  },
  {
    title: "F9",
    director: "Justin Lin",
    actors: [
      {
        name: "Vin Diesel",
      },
    ],
    coverUrl: "/movies/f9.jpg",
    releaseDate: "2021-06-25",
    rating: 0,
    length: 0,
    genre: "Action",
  },
  {
    title: "Zack Snyder's Justice League",
    director: "Zack Snyder",
    actors: [
      {
        name: "Ben Affleck",
      },
    ],
    coverUrl: "/movies/justice_league_snyder.jpg",
    releaseDate: "2021-03-18",
    rating: 0,
    length: 0,
    genre: "Action",
  },
  {
    title: "Raya and the Last Dragon",
    director: "Don Hall, Carlos López Estrada",
    actors: [
      {
        name: "Kelly Marie Tran",
      },
    ],
    coverUrl: "/movies/raya_last_dragon.jpg",
    releaseDate: "2021-03-05",
    rating: 0,
    length: 0,
    genre: "Animation",
  },
  {
    title: "Chaos Walking",
    director: "Doug Liman",
    actors: [
      {
        name: "Tom Holland",
      },
    ],
    coverUrl: "/movies/chaos_walking.jpg",
    releaseDate: "2021-03-05",
    rating: 0,
    length: 0,
    genre: "Science Fiction",
  },
  {
    title: "Squared Love",
    director: "Filip Zylber",
    actors: [
      {
        name: "Adrianna Chlebicka",
      },
    ],
    coverUrl: "/movies/squared_love.jpg",
    releaseDate: "2021-02-11",
    rating: 0,
    length: 0,
    genre: "Romance",
  },
  {
    title: "WandaVision",
    director: "Matt Shakman",
    actors: [
      {
        name: "Elizabeth Olsen",
      },
    ],
    coverUrl: "/movies/wandavision.jpg",
    releaseDate: "2021-01-15",
    rating: 0,
    length: 0,
    genre: "Science Fiction",
  },
  {
    title: "Wonder Woman 1984",
    director: "Patty Jenkins",
    actors: [
      {
        name: "Gal Gadot",
      },
    ],
    coverUrl: "/movies/wonder_woman_1984.jpg",
    releaseDate: "2020-12-25",
    rating: 0,
    length: 0,
    genre: "Action",
  },
  {
    title: "The Princess Switch: Switched Again",
    director: "Mike Rohl",
    actors: [
      {
        name: "Vanessa Hudgens",
      },
    ],
    coverUrl: "/movies/princess_switch_2.jpg",
    releaseDate: "2020-11-19",
    rating: 0,
    length: 0,
    genre: "Romance",
  },
  {
    title: "Holidate",
    director: "John Whitesell",
    actors: [
      {
        name: "Emma Roberts",
      },
    ],
    coverUrl: "/movies/holidate.jpg",
    releaseDate: "2020-10-28",
    rating: 0,
    length: 0,
    genre: "Romance",
  },
  {
    title: "The Queen's Gambit",
    director: "Scott Frank",
    actors: [
      {
        name: "Anya Taylor-Joy",
      },
    ],
    coverUrl: "/movies/queens_gambit.jpg",
    releaseDate: "2020-10-23",
    rating: 0,
    length: 0,
    genre: "Drama",
  },
  {
    title: "Love and Monsters",
    director: "Michael Matthews",
    actors: [
      {
        name: "Dylan O'Brien",
      },
    ],
    coverUrl: "/movies/love_and_monsters.jpg",
    releaseDate: "2020-10-16",
    rating: 0,
    length: 0,
    genre: "Adventure",
  },
  {
    title: "Enola Holmes",
    director: "Harry Bradbeer",
    actors: [
      {
        name: "Millie Bobby Brown",
      },
    ],
    coverUrl: "/movies/enola_holmes.jpg",
    releaseDate: "2020-09-23",
    rating: 0,
    length: 0,
    genre: "Mystery",
  },
  {
    title: "Tenet",
    director: "Christopher Nolan",
    actors: [
      {
        name: "John David Washington",
      },
    ],
    coverUrl: "/movies/tenet.jpg",
    releaseDate: "2020-09-03",
    rating: 0,
    length: 0,
    genre: "Science Fiction",
  },
  {
    title: "Ava",
    director: "Tate Taylor",
    actors: [
      {
        name: "Jessica Chastain",
      },
    ],
    coverUrl: "/movies/ava.jpg",
    releaseDate: "2020-07-02",
    rating: 0,
    length: 0,
    genre: "Action",
  },
  {
    title: "Rich in Love",
    director: "Bruno Garotti",
    actors: [
      {
        name: "Maisa Silva",
      },
    ],
    coverUrl: "/movies/rich_in_love.jpg",
    releaseDate: "2020-06-19",
    rating: 0,
    length: 0,
    genre: "Romance",
  },
  {
    title: "Mulan",
    director: "Niki Caro",
    actors: [
      {
        name: "Yifei Liu",
      },
    ],
    coverUrl: "/movies/mulan.jpg",
    releaseDate: "2020-09-04",
    rating: 0,
    length: 0,
    genre: "Action",
  },
  {
    title: "Isi & Ossi",
    director: "Oliver Kienle",
    actors: [
      {
        name: "Lisa Vicari",
      },
    ],
    coverUrl: "/movies/isi_ossi.jpg",
    releaseDate: "2020-02-14",
    rating: 0,
    length: 0,
    genre: "Romance",
  },
  {
    title: "Palm Springs",
    director: "Max Barbakow",
    actors: [
      {
        name: "Andy Samberg",
      },
    ],
    coverUrl: "/movies/palm_springs.jpg",
    releaseDate: "2020-07-10",
    rating: 0,
    length: 0,
    genre: "Comedy",
  },
  {
    title: "Birds of Prey (and the Fantabulous Emancipation of One Harley Quinn)",
    director: "Cathy Yan",
    actors: [
      {
        name: "Margot Robbie",
      },
    ],
    coverUrl: "/movies/birds_of_prey.jpg",
    releaseDate: "2020-02-07",
    rating: 0,
    length: 0,
    genre: "Action",
  },
  {
    title: "Star Wars: The Rise of Skywalker",
    director: "J.J. Abrams",
    actors: [
      {
        name: "Daisy Ridley",
      },
    ],
    coverUrl: "/movies/star_wars_rise_skywalker.jpg",
    releaseDate: "2019-12-20",
    rating: 0,
    length: 0,
    genre: "Science Fiction",
  },
  {
    title: "Last Christmas",
    director: "Paul Feig",
    actors: [
      {
        name: "Emilia Clarke",
      },
    ],
    coverUrl: "/movies/last_christmas.jpg",
    releaseDate: "2019-11-08",
    rating: 0,
    length: 0,
    genre: "Romance",
  },
  {
    title: "Terminator: Dark Fate",
    director: "Tim Miller",
    actors: [
      {
        name: "Linda Hamilton",
      },
    ],
    coverUrl: "/movies/terminator_dark_fate.jpg",
    releaseDate: "2019-11-01",
    rating: 0,
    length: 0,
    genre: "Action",
  },
  {
    title: "Guns Akimbo",
    director: "Jason Lei Howden",
    actors: [
      {
        name: "Daniel Radcliffe",
      },
    ],
    coverUrl: "/movies/guns_akimbo.jpg",
    releaseDate: "2020-02-28",
    rating: 0,
    length: 0,
    genre: "Action",
  },
  {
    title: "Knives Out",
    director: "Rian Johnson",
    actors: [
      {
        name: "Daniel Craig",
      },
    ],
    coverUrl: "/movies/knives_out.jpg",
    releaseDate: "2019-11-27",
    rating: 0,
    length: 0,
    genre: "Mystery",
  },
  {
    title: "Joker",
    director: "Todd Phillips",
    actors: [
      {
        name: "Joaquin Phoenix",
      },
    ],
    coverUrl: "/movies/joker.jpg",
    releaseDate: "2019-10-04",
    rating: 0,
    length: 0,
    genre: "Crime",
  },
  {
    title: "Someone, Somewhere",
    director: "Cédric Klapisch",
    actors: [
      {
        name: "Ana Girardot",
      },
    ],
    coverUrl: "/movies/someone_somewhere.jpg",
    releaseDate: "2019-09-25",
    rating: 0,
    length: 0,
    genre: "Drama",
  },
  {
    title: "Fast & Furious Presents: Hobbs & Shaw",
    director: "David Leitch",
    actors: [
      {
        name: "Dwayne Johnson",
      },
    ],
    coverUrl: "/movies/hobbs_shaw.jpg",
    releaseDate: "2019-08-02",
    rating: 0,
    length: 0,
    genre: "Action",
  },
  {
    title: "Spider-Man: Far From Home",
    director: "Jon Watts",
    actors: [
      {
        name: "Tom Holland",
      },
    ],
    coverUrl: "/movies/spider_man_far_from_home.jpg",
    releaseDate: "2019-07-02",
    rating: 0,
    length: 0,
    genre: "Action",
  },
  {
    title: "Escape Plan: The Extractors",
    director: "John Herzfeld",
    actors: [
      {
        name: "Sylvester Stallone",
      },
    ],
    coverUrl: "/movies/escape_plan_extractors.jpg",
    releaseDate: "2019-07-02",
    rating: 0,
    length: 0,
    genre: "Action",
  },
  {
    title: "Black Mirror: Striking Vipers",
    director: "Owen Harris",
    actors: [
      {
        name: "Anthony Mackie",
      },
    ],
    coverUrl: "/movies/black_mirror_striking_vipers.jpg",
    releaseDate: "2019-06-05",
    rating: 0,
    length: 0,
    genre: "Science Fiction",
  },
  {
    title: "Dark Phoenix",
    director: "Simon Kinberg",
    actors: [
      {
        name: "Sophie Turner",
      },
    ],
    coverUrl: "/movies/dark_phoenix.jpg",
    releaseDate: "2019-06-07",
    rating: 0,
    length: 0,
    genre: "Action",
  },
  {
    title: "Murder Mystery",
    director: "Kyle Newacheck",
    actors: [
      {
        name: "Adam Sandler",
      },
      {
        name: "Jennifer Aniston",
      },
    ],
    coverUrl: "/movies/murder_mystery.jpg",
    releaseDate: "2019-06-14",
    rating: 0,
    length: 0,
    genre: "Comedy",
  },
  {
    title: "John Wick: Chapter 3 – Parabellum",
    director: "Chad Stahelski",
    actors: [
      {
        name: "Keanu Reeves",
      },
    ],
    coverUrl: "/movies/john_wick_3.jpg",
    releaseDate: "2019-05-17",
    rating: 0,
    length: 0,
    genre: "Action",
  },
  {
    title: "Aladdin",
    director: "Guy Ritchie",
    actors: [
      {
        name: "Will Smith",
      },
    ],
    coverUrl: "/movies/aladdin.jpg",
    releaseDate: "2019-05-24",
    rating: 0,
    length: 0,
    genre: "Fantasy",
  },
  {
    title: "Avengers: Endgame",
    director: "Anthony Russo, Joe Russo",
    actors: [
      {
        name: "Robert Downey Jr.",
      },
    ],
    coverUrl: "/movies/avengers_endgame.jpg",
    releaseDate: "2019-04-26",
    rating: 0,
    length: 0,
    genre: "Action",
  },
  {
    title: "Shazam!",
    director: "David F. Sandberg",
    actors: [
      {
        name: "Zachary Levi",
      },
    ],
    coverUrl: "/movies/shazam.jpg",
    releaseDate: "2019-04-05",
    rating: 0,
    length: 0,
    genre: "Action",
  },
  {
    title: "Captain Marvel",
    director: "Anna Boden, Ryan Fleck",
    actors: [
      {
        name: "Brie Larson",
      },
    ],
    coverUrl: "/movies/captain_marvel.jpg",
    releaseDate: "2019-03-08",
    rating: 0,
    length: 0,
    genre: "Action",
  },
  {
    title: "Alita: Battle Angel",
    director: "Robert Rodriguez",
    actors: [
      {
        name: "Rosa Salazar",
      },
    ],
    coverUrl: "/movies/alita_battle_angel.jpg",
    releaseDate: "2019-02-14",
    rating: 0,
    length: 0,
    genre: "Science Fiction",
  },
  {
    title: "Love at Second Sight",
    director: "Hugo Gélin",
    actors: [
      {
        name: "François Civil",
      },
    ],
    coverUrl: "/movies/love_second_sight.jpg",
    releaseDate: "2019-01-30",
    rating: 0,
    length: 0,
    genre: "Romance",
  },
  {
    title: "The Wolf's Call",
    director: "Antonin Baudry",
    actors: [
      {
        name: "François Civil",
      },
    ],
    coverUrl: "/movies/wolfs_call.jpg",
    releaseDate: "2019-02-20",
    rating: 0,
    length: 0,
    genre: "Thriller",
  },
  {
    title: "Glass",
    director: "M. Night Shyamalan",
    actors: [
      {
        name: "James McAvoy",
      },
    ],
    coverUrl: "/movies/glass.jpg",
    releaseDate: "2019-01-18",
    rating: 0,
    length: 0,
    genre: "Thriller",
  },
  {
    title: "How to Train Your Dragon: The Hidden World",
    director: "Dean DeBlois",
    actors: [
      {
        name: "Jay Baruchel",
      },
    ],
    coverUrl: "/movies/how_to_train_dragon_3.jpg",
    releaseDate: "2019-02-22",
    rating: 0,
    length: 0,
    genre: "Animation",
  },
  {
    title: "Black Mirror: Bandersnatch",
    director: "David Slade",
    actors: [
      {
        name: "Fionn Whitehead",
      },
    ],
    coverUrl: "/movies/black_mirror_bandersnatch.jpg",
    releaseDate: "2018-12-28",
    rating: 0,
    length: 0,
    genre: "Science Fiction",
  },
  {
    title: "Spider-Man: Into the Spider-Verse",
    director: "Bob Persichetti, Peter Ramsey, Rodney Rothman",
    actors: [
      {
        name: "Shameik Moore",
      },
    ],
    coverUrl: "/movies/spider_man_into_spiderverse.jpg",
    releaseDate: "2018-12-14",
    rating: 0,
    length: 0,
    genre: "Animation",
  },
  {
    title: "Aquaman",
    director: "James Wan",
    actors: [
      {
        name: "Jason Momoa",
      },
    ],
    coverUrl: "/movies/aquaman.jpg",
    releaseDate: "2018-12-21",
    rating: 0,
    length: 0,
    genre: "Action",
  },
  {
    title: "Creed II",
    director: "Steven Caple Jr.",
    actors: [
      {
        name: "Michael B. Jordan",
      },
    ],
    coverUrl: "/movies/creed_ii.jpg",
    releaseDate: "2018-11-21",
    rating: 0,
    length: 0,
    genre: "Drama",
  },
  {
    title: "Bird Box",
    director: "Susanne Bier",
    actors: [
      {
        name: "Sandra Bullock",
      },
    ],
    coverUrl: "/movies/bird_box.jpg",
    releaseDate: "2018-12-21",
    rating: 0,
    length: 0,
    genre: "Thriller",
  },
  {
    title: "Fantastic Beasts: The Crimes of Grindelwald",
    director: "David Yates",
    actors: [
      {
        name: "Eddie Redmayne",
      },
    ],
    coverUrl: "/movies/fantastic_beasts_crimes.jpg",
    releaseDate: "2018-11-16",
    rating: 0,
    length: 0,
    genre: "Fantasy",
  },
  {
    title: "Ralph Breaks the Internet",
    director: "Rich Moore, Phil Johnston",
    actors: [
      {
        name: "John C. Reilly",
      },
    ],
    coverUrl: "/movies/ralph_breaks_internet.jpg",
    releaseDate: "2018-11-21",
    rating: 0,
    length: 0,
    genre: "Animation",
  },
  {
    title: "The Princess Switch",
    director: "Mike Rohl",
    actors: [
      {
        name: "Vanessa Hudgens",
      },
    ],
    coverUrl: "/movies/princess_switch.jpg",
    releaseDate: "2018-11-16",
    rating: 0,
    length: 0,
    genre: "Romance",
  },
  {
    title: "Venom",
    director: "Ruben Fleischer",
    actors: [
      {
        name: "Tom Hardy",
      },
    ],
    coverUrl: "/movies/venom.jpg",
    releaseDate: "2018-10-05",
    rating: 0,
    length: 0,
    genre: "Action",
  },
  {
    title: "The Predator",
    director: "Shane Black",
    actors: [
      {
        name: "Boyd Holbrook",
      },
    ],
    coverUrl: "/movies/predator.jpg",
    releaseDate: "2018-09-14",
    rating: 0,
    length: 0,
    genre: "Action",
  },
  {
    title: "A Star Is Born",
    director: "Bradley Cooper",
    actors: [
      {
        name: "Lady Gaga",
      },
    ],
    coverUrl: "/movies/star_is_born.jpg",
    releaseDate: "2018-10-05",
    rating: 0,
    length: 0,
    genre: "Drama",
  },
  {
    title: "Ant-Man and the Wasp",
    director: "Peyton Reed",
    actors: [
      {
        name: "Paul Rudd",
      },
    ],
    coverUrl: "/movies/ant_man_wasp.jpg",
    releaseDate: "2018-07-06",
    rating: 0,
    length: 0,
    genre: "Action",
  },
  {
    title: "Set It Up",
    director: "Claire Scanlon",
    actors: [
      {
        name: "Zoey Deutch",
      },
    ],
    coverUrl: "/movies/set_it_up.jpg",
    releaseDate: "2018-06-15",
    rating: 0,
    length: 0,
    genre: "Romance",
  },
  {
    title: "Escape Plan 2: Hades",
    director: "Steven C. Miller",
    actors: [
      {
        name: "Sylvester Stallone",
      },
    ],
    coverUrl: "/movies/escape_plan_2.jpg",
    releaseDate: "2018-06-29",
    rating: 0,
    length: 0,
    genre: "Action",
  },
  {
    title: "Ocean's Eight",
    director: "Gary Ross",
    actors: [
      {
        name: "Sandra Bullock",
      },
    ],
    coverUrl: "/movies/oceans_eight.jpg",
    releaseDate: "2018-06-08",
    rating: 0,
    length: 0,
    genre: "Crime",
  },
  {
    title: "Incredibles 2",
    director: "Brad Bird",
    actors: [
      {
        name: "Craig T. Nelson",
      },
    ],
    coverUrl: "/movies/incredibles_2.jpg",
    releaseDate: "2018-06-15",
    rating: 0,
    length: 0,
    genre: "Animation",
  },
  {
    title: "Deadpool 2",
    director: "David Leitch",
    actors: [
      {
        name: "Ryan Reynolds",
      },
    ],
    coverUrl: "/movies/deadpool_2.jpg",
    releaseDate: "2018-05-18",
    rating: 0,
    length: 0,
    genre: "Action",
  },
  {
    title: "Solo: A Star Wars Story",
    director: "Ron Howard",
    actors: [
      {
        name: "Alden Ehrenreich",
      },
    ],
    coverUrl: "/movies/solo_star_wars.jpg",
    releaseDate: "2018-05-25",
    rating: 0,
    length: 0,
    genre: "Science Fiction",
  },
  {
    title: "Avengers: Infinity War",
    director: "Anthony Russo, Joe Russo",
    actors: [
      {
        name: "Robert Downey Jr.",
      },
    ],
    coverUrl: "/movies/avengers_infinity_war.jpg",
    releaseDate: "2018-04-27",
    rating: 0,
    length: 0,
    genre: "Action",
  },
  {
    title: "Ready Player One",
    director: "Steven Spielberg",
    actors: [
      {
        name: "Tye Sheridan",
      },
    ],
    coverUrl: "/movies/ready_player_one.jpg",
    releaseDate: "2018-03-29",
    rating: 0,
    length: 0,
    genre: "Science Fiction",
  },
  {
    title: "Black Panther",
    director: "Ryan Coogler",
    actors: [
      {
        name: "Chadwick Boseman",
      },
    ],
    coverUrl: "/movies/black_panther.jpg",
    releaseDate: "2018-02-16",
    rating: 0,
    length: 0,
    genre: "Action",
  },
  {
    title: "Maze Runner: The Death Cure",
    director: "Wes Ball",
    actors: [
      {
        name: "Dylan O'Brien",
      },
    ],
    coverUrl: "/movies/maze_runner_death_cure.jpg",
    releaseDate: "2018-01-26",
    rating: 0,
    length: 0,
    genre: "Action",
  },
  {
    title: "Black Mirror: Black Museum",
    director: "Colm McCarthy",
    actors: [
      {
        name: "Douglas Hodge",
      },
    ],
    coverUrl: "/movies/black_mirror_black_museum.jpg",
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
    coverUrl: "/movies/black_mirror_uss_callister.jpg",
    releaseDate: "2017-12-29",
    rating: 0,
    length: 0,
    genre: "Science Fiction",
  },
  {
    title: "Star Wars: The Last Jedi",
    director: "Rian Johnson",
    actors: [
      {
        name: "Daisy Ridley",
      },
    ],
    coverUrl: "/movies/star_wars_last_jedi.jpg",
    releaseDate: "2017-12-15",
    rating: 0,
    length: 0,
    genre: "Science Fiction",
  },
];