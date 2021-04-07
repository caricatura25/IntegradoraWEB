import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTempComponent } from './card-temp.component';

describe('CardTempComponent', () => {
  let component: CardTempComponent;
  let fixture: ComponentFixture<CardTempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardTempComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
