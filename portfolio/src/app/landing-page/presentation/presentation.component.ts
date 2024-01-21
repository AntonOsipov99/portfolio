import { Component, OnInit } from '@angular/core';
import { MenuService } from '../service/menu.service';

@Component({
  selector: 'app-presentation',
  standalone: true,
  imports: [],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.scss'
})

export class PresentationComponent implements OnInit {
  isMenuClosed!: boolean;

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.isMenuClosed = this.menuService.isMenuClosed;
    this.menuService.menuState$.subscribe((state: boolean) => {
      this.isMenuClosed = state;
    });
  }
}