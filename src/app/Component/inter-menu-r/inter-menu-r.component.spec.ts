import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterMenuRComponent } from './inter-menu-r.component';

describe('InterMenuRComponent', () => {
  let component: InterMenuRComponent;
  let fixture: ComponentFixture<InterMenuRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterMenuRComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterMenuRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
