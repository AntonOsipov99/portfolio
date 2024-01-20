import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

   toggleImpressum() {
    const element = document.querySelector(".impressum-menu");
    element!.classList.toggle("impressum-menu-open");
  }

  closeImpressum() {
    const element = document.querySelector(".impressum-menu");
    element!.classList.remove("impressum-menu-open");
  }
}
