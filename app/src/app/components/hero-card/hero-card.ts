import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hero-card',
  standalone: true,
  templateUrl: './hero-card.html',
  styleUrl: './hero-card.css'
})
export class HeroCardComponent {
  @HostBinding('class') hostClass = 'card shadow-sm border-0';
  @Input() title = 'Bienvenido';
  @Input() subtitle = 'SPA básica con Bootstrap y TS';
  @Output() action = new EventEmitter<void>();
  onAction() { this.action.emit(); }
}
