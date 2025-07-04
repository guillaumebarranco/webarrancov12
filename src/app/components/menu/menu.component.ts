import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  isMobile = false;

  menuItems = [
    { label: 'Dashboard', route: '/dashboard', icon: '📊', hideOnMobile: false },
    { label: 'Livres', route: '/books', icon: '📚', hideOnMobile: false },
    { label: 'Mangas', route: '/mangas', icon: '📖', hideOnMobile: false },
    { label: 'Manwhas', route: '/manwhas', icon: '🎨', hideOnMobile: true },
    { label: 'Films', route: '/movies', icon: '🎬', hideOnMobile: false },
    { label: 'Séries', route: '/series', icon: '📺', hideOnMobile: false },
    { label: 'Jeux', route: '/games', icon: '🎮', hideOnMobile: false }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
    this.checkScreenSize();
  }

  @HostListener('window:resize')
  onResize() {
    this.checkScreenSize();
  }

  private checkScreenSize() {
    this.isMobile = window.innerWidth < 768;
  }

  get visibleMenuItems() {
    return this.menuItems.filter(item => !item.hideOnMobile || !this.isMobile);
  }

  isActive(route: string): boolean {
    return this.router.url === route;
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}