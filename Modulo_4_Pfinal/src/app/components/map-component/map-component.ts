import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TrackingState } from '../../store/reducers/tracking.reducer';
import { AnimatedCounterComponent } from '../animated-counter/animated-counter';
import { ClickTrackerDirective } from '../../directives/click-tracker';

@Component({
  selector: 'app-map-component',
  templateUrl: './map-component.html',
  styleUrls: ['./map-component.scss'],
  standalone: true,
  imports: [CommonModule, AnimatedCounterComponent, ClickTrackerDirective]
})
export class MapComponent {
  center: [number, number] = [-74.0817, 4.6097];
  markerPosition: [number, number] = [-74.0817, 4.6097];
  trackingData$: Observable<TrackingState>;

  constructor(private store: Store<{ tracking: TrackingState }>) {
    this.trackingData$ = this.store.select('tracking');
  }

  onMarkerClick() {
    alert('¡Marker clickeado! Este es el popup/mensaje del Requerimiento 2');
  }

  getTrackingTags(trackingData: TrackingState | null): string[] {
    return trackingData ? Object.keys(trackingData.clickCounts) : [];
  }

  getClickCount(trackingData: TrackingState | null, tag: string): number {
    return trackingData?.clickCounts?.[tag] || 0;
  }
}
