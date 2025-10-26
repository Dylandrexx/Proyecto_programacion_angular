import { Directive, ElementRef, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { trackClick } from '../store/actions/tracking.actions';

@Directive({
  selector: '[appClickTracker]',
  standalone: true
})
export class ClickTrackerDirective implements OnInit {
  @Input() trackingTag: string = '';

  constructor(
    private elementRef: ElementRef,
    private store: Store
  ) {}

  ngOnInit() {
    this.elementRef.nativeElement.addEventListener('click', (event: Event) => {
      this.store.dispatch(trackClick({ 
        tag: this.trackingTag || 'unknown',
        timestamp: new Date().toISOString(),
        element: this.elementRef.nativeElement.tagName
      }));
    });
  }
}
