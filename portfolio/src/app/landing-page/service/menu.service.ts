import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menuState = new BehaviorSubject<boolean>(true);
  menuState$ = this.menuState.asObservable();

  get isMenuClosed(): boolean {
    return this.menuState.value;
  }

  toggleMenu() {
    this.menuState.next(!this.menuState.value);
  }
}