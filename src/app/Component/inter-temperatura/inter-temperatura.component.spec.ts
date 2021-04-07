import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterTemperaturaComponent } from './inter-temperatura.component';

describe('InterTemperaturaComponent', () => {
  let component: InterTemperaturaComponent;
  let fixture: ComponentFixture<InterTemperaturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterTemperaturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterTemperaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
