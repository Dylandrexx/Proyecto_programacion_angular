import { createReducer, on } from '@ngrx/store';
import { trackClick, resetTracking } from '../actions/tracking.actions';

export interface TrackingState {
  clickCounts: { [tag: string]: number };
  totalClicks: number;
  lastClick: { tag: string; timestamp: string; element: string } | null;
}

export const initialState: TrackingState = {
  clickCounts: {},
  totalClicks: 0,
  lastClick: null
};

export const trackingReducer = createReducer(
  initialState,
  on(trackClick, (state, { tag, timestamp, element }) => ({
    ...state,
    clickCounts: {
      ...state.clickCounts,
      [tag]: (state.clickCounts[tag] || 0) + 1
    },
    totalClicks: state.totalClicks + 1,
    lastClick: { tag, timestamp, element }
  })),
  on(resetTracking, (state) => ({
    ...state,
    clickCounts: {},
    totalClicks: 0,
    lastClick: null
  }))
);
