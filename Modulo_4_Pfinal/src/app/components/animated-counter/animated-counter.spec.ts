import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnimatedCounterComponent } from './animated-counter';

describe('AnimatedCounterComponent', () => {
  let component: AnimatedCounterComponent;
  let fixture: ComponentFixture<AnimatedCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimatedCounterComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AnimatedCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the count and label', () => {
    component.count = 5;
    component.label = 'Test Label';
    fixture.detectChanges();

    const element = fixture.nativeElement;
    expect(element.querySelector('.counter-value').textContent).toContain('5');
    expect(element.querySelector('.counter-label').textContent).toContain('Test Label');
  });
});
