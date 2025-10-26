import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

type Item = { name: string; desc: string };

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './items-list.html',
  styleUrl: './items-list.css'
})
export class ItemsListComponent {
  items: Item[] = [
    { name: 'Angular',   desc: 'Framework para SPA' },
    { name: 'Bootstrap', desc: 'Estilos responsivos y modernos' },
  ];

  add(nameInput: HTMLInputElement, descInput: HTMLInputElement) {
    const name = nameInput.value.trim();
    const desc = descInput.value.trim();
    if (!name || !desc) return;
    this.items.push({ name, desc });
    nameInput.value = '';
    descInput.value = '';
  }
}
