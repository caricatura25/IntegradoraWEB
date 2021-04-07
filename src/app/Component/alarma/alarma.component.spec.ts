import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlarmaComponent } from './alarma.component';

describe('AlarmaComponent', () => {
  let component: AlarmaComponent;
  let fixture: ComponentFixture<AlarmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlarmaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlarmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
