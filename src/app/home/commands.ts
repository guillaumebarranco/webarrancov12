export const commands = [
  {
    command: 'presentation',
    responseType: 'list',
    value: ['La commande a bien été effectuée !'],
  },
  {
    command: 'home',
    responseType: 'list',
    value: ['La commande a bien été effectuée !'],
  },
  {
    command: 'experiences',
    responseType: 'list',
    value: ['La commande a bien été effectuée !'],
  },
  {
    command: 'skills',
    responseType: 'list',
    value: ['La commande a bien été effectuée !'],
  },
  {
    command: 'notgeek',
    responseType: 'list',
    value: ['Eh oui, on ne va pas refaire la roue.'],
  },
  {
    command: 'help',
    responseType: 'list',
    value: [
      '<code>a-propos</code> : Affiche les informations me concernant',
      '<code>clear</code> : Nettoie le terminal',
      '<code>experiences</code> : Affiche la liste de mes expériences',
      '<code>get cv</code> : Télécharge le CV',
      '<code>hobby</code> : Affiche la liste de mes passes temps',
      '<code>projets-perso</code> : Affiche la liste de mes projets personnels',
      '<em>Vous pouvez utiliser la touche TAB afin de compléter une commande</em>',
      '<em>Vous pouvez retrouver les anciennes commandes avec les flèches haut et bas.</em>',
    ],
  },
  {
    command: 'a-propos',
    responseType: 'code',
    value: [
      '{',
      '   "nom" : "Guillaume BARRANCO",',
      '   "poste" : "Développeur Fullstack",',
      '   "experience" : "2 ans",',
      '   "ville" : "Nantes, France"',
      '}',
    ],
  },
  {
    command: 'hobby',
    responseType: 'list',
    value: [
      'Musique: Piano, Guitare',
      'Programmation: JS, Angular, PHP',
      'Autre: Cinéma, Aéronautique, Photographie',
    ],
  },
  {
    command: 'projets-perso',
    responseType: 'table',
    headers: ['Nom', 'Description', 'Tech', 'Liens'],
    rows: [
      [
        'Chartsfinder - Web<br/>(2021)',
        "Application web pour trouver rapidement des cartes aéronautiques. Une version C# existait déjà mais j'ai préféré la mettre à jour avec une version web qui est plus simple d'utilisation.",
        'Angular 11, PHP 7.4',
        '<a href="https://chartsfinder.adautry.fr" target="blank">Lien</a>',
      ],
      [
        'Personal website<br/>(2021)',
        'Site web personnel me permettant de montrer mes projets et de déployer une nouvelle version du logiciel.<br/>Il y a même un jeu caché...',
        'Symfony 5',
        '<a href="https://adautry.fr" target="blank">Lien</a>',
      ],
      [
        'Chartsfinder - Software<br/>(2020)',
        'Logiciel permettant de récupérer rapidement les cartes aéronautiques.',
        'C# WPF',
        '<a href="https://adautry.fr/software/chartsfinder" target="blank">Lien</a>',
      ],
    ],
  },
];
