import { ClickTrackerDirective } from './click-tracker';
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

@Component({
  template: '<button appClickTracker trackingTag="test-button">Test</button>',
  standalone: true,
  imports: [ClickTrackerDirective]
})
class TestComponent {}

describe('ClickTrackerDirective', () => {
  let store: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestComponent, ClickTrackerDirective],
      providers: [provideMockStore({})]
    });

    store = TestBed.inject(MockStore);
    spyOn(store, 'dispatch');
  });

  it('should create directive', () => {
    const fixture = TestBed.createComponent(TestComponent);
    const button = fixture.nativeElement.querySelector('button');
    
    expect(button).toBeTruthy();
    expect(button.getAttribute('trackingTag')).toBe('test-button');
  });
});
