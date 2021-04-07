import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHumedadComponent } from './card-humedad.component';

describe('CardHumedadComponent', () => {
  let component: CardHumedadComponent;
  let fixture: ComponentFixture<CardHumedadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardHumedadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardHumedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
