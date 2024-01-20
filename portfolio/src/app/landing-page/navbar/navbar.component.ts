import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuService } from '../service/menu.service';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  isMenuClosed!: boolean;

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.isMenuClosed = this.menuService.isMenuClosed;

    // Subscribe to menu state changes
    this.menuService.menuState$.subscribe((state: boolean) => {
      this.isMenuClosed = state;
    });
  }

  toggleMenu() {
    this.menuService.toggleMenu();
  }
}