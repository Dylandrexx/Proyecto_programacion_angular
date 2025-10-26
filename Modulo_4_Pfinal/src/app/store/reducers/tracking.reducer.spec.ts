import { trackingReducer, initialState, TrackingState } from './tracking.reducer';
import { trackClick, resetTracking } from '../actions/tracking.actions';

describe('Tracking Reducer', () => {
  it('should return the initial state', () => {
    const action = { type: 'Unknown' } as any;
    const state = trackingReducer(undefined, action);
    expect(state).toBe(initialState);
  });

  it('should handle trackClick action', () => {
    const action = trackClick({ 
      tag: 'test-button', 
      timestamp: '2023-01-01T00:00:00Z', 
      element: 'BUTTON' 
    });
    
    const state = trackingReducer(initialState, action);
    
    expect(state.totalClicks).toBe(1);
    expect(state.clickCounts['test-button']).toBe(1);
    expect(state.lastClick?.tag).toBe('test-button');
  });

  it('should handle multiple trackClick actions', () => {
    const action1 = trackClick({ 
      tag: 'button1', 
      timestamp: '2023-01-01T00:00:00Z', 
      element: 'BUTTON' 
    });
    
    const action2 = trackClick({ 
      tag: 'button1', 
      timestamp: '2023-01-01T00:00:01Z', 
      element: 'BUTTON' 
    });
    
    const action3 = trackClick({ 
      tag: 'button2', 
      timestamp: '2023-01-01T00:00:02Z', 
      element: 'BUTTON' 
    });
    
    let state = trackingReducer(initialState, action1);
    state = trackingReducer(state, action2);
    state = trackingReducer(state, action3);
    
    expect(state.totalClicks).toBe(3);
    expect(state.clickCounts['button1']).toBe(2);
    expect(state.clickCounts['button2']).toBe(1);
  });

  it('should handle resetTracking action', () => {
    const trackAction = trackClick({ 
      tag: 'test-button', 
      timestamp: '2023-01-01T00:00:00Z', 
      element: 'BUTTON' 
    });
    
    const stateWithClicks = trackingReducer(initialState, trackAction);
    const resetAction = resetTracking();
    const stateAfterReset = trackingReducer(stateWithClicks, resetAction);
    
    expect(stateAfterReset.totalClicks).toBe(0);
    expect(stateAfterReset.clickCounts).toEqual({});
    expect(stateAfterReset.lastClick).toBeNull();
  });

  it('should not mutate the original state', () => {
    const originalState: TrackingState = {
      clickCounts: { 'existing': 1 },
      totalClicks: 1,
      lastClick: { tag: 'existing', timestamp: '2023-01-01T00:00:00Z', element: 'BUTTON' }
    };
    
    const action = trackClick({ 
      tag: 'new-button', 
      timestamp: '2023-01-01T00:00:01Z', 
      element: 'BUTTON' 
    });
    
    const newState = trackingReducer(originalState, action);
    
    // Verify original state is not mutated
    expect(originalState.totalClicks).toBe(1);
    expect(originalState.clickCounts['new-button']).toBeUndefined();
    
    // Verify new state is correct
    expect(newState.totalClicks).toBe(2);
    expect(newState.clickCounts['new-button']).toBe(1);
  });
});
