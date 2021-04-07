import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterHumedadComponent } from './inter-humedad.component';

describe('InterHumedadComponent', () => {
  let component: InterHumedadComponent;
  let fixture: ComponentFixture<InterHumedadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterHumedadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterHumedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
