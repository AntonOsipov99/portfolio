import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { JoinComponent } from './join/join.component';
import { ElPolloLocoComponent } from './el-pollo-loco/el-pollo-loco.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule,
    JoinComponent,
    ElPolloLocoComponent
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  icons = [
    { url: 'assets/img/icon1.svg', description: 'Angular' },
    { url: 'assets/img/icon2.svg', description: 'TypeScript' },
    { url: 'assets/img/icon3.svg', description: 'JavaScript' },
    { url: 'assets/img/icon4.svg', description: 'HTML' },
    { url: 'assets/img/icon5.svg', description: 'Firebase' },
    { url: 'assets/img/icon6.svg', description: 'Git' },
    { url: 'assets/img/icon7.svg', description: 'CSS' },
    { url: 'assets/img/icon8.svg', description: 'Rest-Api' },
    { url: 'assets/img/icon9.svg', description: 'Scrum' },
    { url: 'assets/img/icon10.svg', description: 'Material design' },
  ];
}
