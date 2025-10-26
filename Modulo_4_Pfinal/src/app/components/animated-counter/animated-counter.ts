import { Component, Input } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';

@Component({
  selector: 'app-animated-counter',
  templateUrl: './animated-counter.html',
  styleUrls: ['./animated-counter.scss'],
  animations: [
    trigger('countAnimation', [
      state('void', style({ opacity: 0, transform: 'scale(0.5)' })),
      transition(':enter', [
        animate('300ms ease-out', style({ opacity: 1, transform: 'scale(1.2)' })),
        animate('200ms ease-in', style({ transform: 'scale(1)' }))
      ]),
      transition('* => *', [
        animate('200ms ease-out', style({ transform: 'scale(1.1)' })),
        animate('200ms ease-in', style({ transform: 'scale(1)' }))
      ])
    ])
  ],
  standalone: true
})
export class AnimatedCounterComponent {
  @Input() count: number = 0;
  @Input() label: string = '';
}
