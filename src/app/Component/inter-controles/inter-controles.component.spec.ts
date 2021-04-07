import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterControlesComponent } from './inter-controles.component';

describe('InterControlesComponent', () => {
  let component: InterControlesComponent;
  let fixture: ComponentFixture<InterControlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterControlesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterControlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
