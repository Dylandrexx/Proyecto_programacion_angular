// src/app/app.ts
import { Component } from '@angular/core';
import { HeroCardComponent } from './components/hero-card/hero-card';
import { ItemsListComponent } from './components/items-list/items-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeroCardComponent, ItemsListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  onHeroAction() {
    alert('¡Acción ejecutada desde HeroCard!');
  }
}
