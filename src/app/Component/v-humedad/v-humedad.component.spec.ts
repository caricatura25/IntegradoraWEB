import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VHumedadComponent } from './v-humedad.component';

describe('VHumedadComponent', () => {
  let component: VHumedadComponent;
  let fixture: ComponentFixture<VHumedadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VHumedadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VHumedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
