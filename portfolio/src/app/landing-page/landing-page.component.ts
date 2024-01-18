import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { PresentationComponent } from './presentation/presentation.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [NavbarComponent,
    PresentationComponent,
    AboutMeComponent,
    SkillsComponent
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
