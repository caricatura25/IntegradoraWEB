import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterCocheraComponent } from './inter-cochera.component';

describe('InterCocheraComponent', () => {
  let component: InterCocheraComponent;
  let fixture: ComponentFixture<InterCocheraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterCocheraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterCocheraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
