import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicComponent } from '../../../components/music/music.component';
import { MenuComponent } from '../../../components/menu/menu.component';
import {
  SortDropdownComponent,
  SortOption,
} from '../../../components/sort-dropdown/sort-dropdown.component';
import {
  StatsDisplayComponent,
  StatItem,
} from '../../../components/stats-display/stats-display.component';
import { Music } from '../../../models/music-model';
import { musics } from '../../../utils/guillaume/musics';
import { ActivatedRoute, Params, RouterLink } from '@angular/router';

interface Album {
  name: string;
  artist: string;
  coverUrl: string;
  musics: Music[];
  totalDuration: number;
}

@Component({
  selector: 'app-musics',
  imports: [
    RouterLink,
    CommonModule,
    MusicComponent,
    MenuComponent,
    SortDropdownComponent,
    StatsDisplayComponent,
  ],
  templateUrl: './musics.component.html',
  styleUrls: ['./musics.component.scss'],
})
export class MusicsComponent {
  activatedRoute = inject(ActivatedRoute);

  selectedSort = signal<string>('rating');
  viewMode = signal<'albums' | 'all'>('albums'); // Mode d'affichage : albums ou toutes les chansons

  sortOptions: SortOption[] = [
    { value: 'title', label: 'Titre (A-Z)' },
    { value: 'title-desc', label: 'Titre (Z-A)' },
    { value: 'artist', label: 'Artiste (A-Z)' },
    { value: 'artist-desc', label: 'Artiste (Z-A)' },
    { value: 'releaseDate', label: 'Date de sortie (récent)' },
    { value: 'releaseDate-asc', label: 'Date de sortie (ancien)' },
    { value: 'rating', label: 'Note (élevée)' },
    { value: 'rating-asc', label: 'Note (faible)' },
    { value: 'timesListened', label: 'Écoutes (élevé)' },
    { value: 'timesListened-asc', label: 'Écoutes (faible)' },
    { value: 'duration', label: 'Durée (long)' },
    { value: 'duration-asc', label: 'Durée (court)' },
  ];

  musicsList = signal<{ [key: string]: Music[] }>({
    guillaume: [...musics],
    william: [],
    kevin: [],
  });

  allMusics = computed<Music[]>(() => {
    const params: Params = this.activatedRoute.snapshot.params;
    const hasNameParam = params['id'] !== undefined;
    return hasNameParam
      ? this.musicsList()[params['id']]
      : this.musicsList()['guillaume'];
  });

  // Grouper les musiques par album et identifier les albums complets (8+ chansons)
  completeAlbums = computed<Album[]>(() => {
    const albumsMap = new Map<string, Music[]>();

    // Grouper les musiques par album
    this.allMusics().forEach((music) => {
      const key = `${music.album}|${music.artist}`;
      if (!albumsMap.has(key)) {
        albumsMap.set(key, []);
      }
      albumsMap.get(key)!.push(music);
    });

    // Filtrer les albums complets (8+ chansons) et créer des objets Album
    const albums: Album[] = [];
    albumsMap.forEach((musics, key) => {
      if (musics.length >= 8) {
        const [albumName, artist] = key.split('|');
        albums.push({
          name: albumName,
          artist: artist,
          coverUrl: musics[0].coverUrl,
          musics: musics.sort((a, b) => a.title.localeCompare(b.title)),
          totalDuration: musics.reduce((sum, m) => sum + m.duration, 0),
        });
      }
    });

    // Tri par artiste, puis par nom d'album
    return albums.sort((a, b) => {
      const artistCompare = a.artist.localeCompare(b.artist);
      if (artistCompare !== 0) {
        return artistCompare;
      }
      return a.name.localeCompare(b.name);
    });
  });

  // Musiques qui ne font pas partie d'un album complet
  standaloneMusics = computed<Music[]>(() => {
    const completeAlbumNames = new Set(
      this.completeAlbums().map((album) => `${album.name}|${album.artist}`)
    );

    return this.allMusics().filter((music) => {
      const key = `${music.album}|${music.artist}`;
      return !completeAlbumNames.has(key);
    });
  });

  sortedMusics = computed<Music[]>(() => {
    const sortedMusics = [...this.allMusics()];

    switch (this.selectedSort()) {
      case 'title':
        return sortedMusics.sort((a, b) => a.title.localeCompare(b.title));
      case 'title-desc':
        return sortedMusics.sort((a, b) => b.title.localeCompare(a.title));
      case 'artist':
        return sortedMusics.sort((a, b) => a.artist.localeCompare(b.artist));
      case 'artist-desc':
        return sortedMusics.sort((a, b) => b.artist.localeCompare(a.artist));
      case 'releaseDate':
        return sortedMusics.sort(
          (a, b) =>
            new Date(b.releaseDate).getTime() -
            new Date(a.releaseDate).getTime()
        );
      case 'releaseDate-asc':
        return sortedMusics.sort(
          (a, b) =>
            new Date(a.releaseDate).getTime() -
            new Date(b.releaseDate).getTime()
        );
      case 'rating':
        return sortedMusics.sort((a, b) => {
          if (b.rating !== a.rating) {
            return b.rating - a.rating;
          }
          return b.timesListened - a.timesListened;
        });
      case 'rating-asc':
        return sortedMusics.sort((a, b) => {
          if (a.rating !== b.rating) {
            return a.rating - b.rating;
          }
          return b.timesListened - a.timesListened;
        });
      case 'timesListened':
        return sortedMusics.sort((a, b) => b.timesListened - a.timesListened);
      case 'timesListened-asc':
        return sortedMusics.sort((a, b) => a.timesListened - b.timesListened);
      case 'duration':
        return sortedMusics.sort((a, b) => b.duration - a.duration);
      case 'duration-asc':
        return sortedMusics.sort((a, b) => a.duration - b.duration);
      default:
        return sortedMusics.sort((a, b) => a.title.localeCompare(b.title));
    }
  });

  stats = computed<StatItem[]>(() => {
    const totalDuration = this.calculateTotalDuration();
    const totalListeningTime = this.calculateTotalListeningTime();

    return [
      {
        label: 'Durée totale de toutes les musiques',
        value: totalDuration,
        icon: '🎵',
        color: 'success',
      },
      {
        label: 'Temps total passé en écoute',
        value: totalListeningTime,
        icon: '🎧',
        color: 'primary',
      },
    ];
  });

  onSortChange(sortValue: string) {
    this.selectedSort.set(sortValue);
  }

  getSelectMusicsRoute(): string {
    const params: Params = this.activatedRoute.snapshot.params;
    const hasNameParam = params['id'] !== undefined;
    return hasNameParam ? `/${params['id']}/select-musics` : '/select-musics';
  }

  private calculateTotalDuration(): string {
    const totalSeconds = this.allMusics().reduce(
      (sum, music) => sum + music.duration,
      0
    );
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    return `${hours}h ${minutes}min`;
  }

  private calculateTotalListeningTime(): string {
    const totalSeconds = this.allMusics().reduce(
      (sum, music) => sum + music.duration * music.timesListened,
      0
    );
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    return `${hours}h ${minutes}min`;
  }

  toggleViewMode() {
    this.viewMode.set(this.viewMode() === 'albums' ? 'all' : 'albums');
  }

  formatAlbumDuration(seconds: number): string {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    if (hours > 0) {
      return `${hours}h ${minutes}min`;
    }
    return `${minutes}min`;
  }

  sortedStandaloneMusics = computed<Music[]>(() => {
    const sorted = [...this.standaloneMusics()];
    return sorted.sort((a, b) => a.title.localeCompare(b.title));
  });
}
