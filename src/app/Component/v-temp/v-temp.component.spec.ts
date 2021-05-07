import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VTempComponent } from './v-temp.component';

describe('VTempComponent', () => {
  let component: VTempComponent;
  let fixture: ComponentFixture<VTempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VTempComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
