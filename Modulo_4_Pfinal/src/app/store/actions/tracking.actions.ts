import { createAction, props } from '@ngrx/store';

export const trackClick = createAction(
  '[Tracking] Track Click',
  props<{ tag: string; timestamp: string; element: string }>()
);

export const resetTracking = createAction('[Tracking] Reset Counts');
