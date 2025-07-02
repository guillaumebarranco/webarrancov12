import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  menuItems = [
    { label: 'Tableau de bord', route: '/dashboard', icon: '📊' },
    { label: 'Livres', route: '/books', icon: '📚' },
    { label: 'Mangas', route: '/mangas', icon: '📖' },
    { label: 'Manwhas', route: '/manwhas', icon: '🎨' },
    { label: 'Films', route: '/movies', icon: '🎬' },
    { label: 'Séries', route: '/series', icon: '📺' }
  ];

  constructor(private router: Router) { }

  isActive(route: string): boolean {
    return this.router.url === route;
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}