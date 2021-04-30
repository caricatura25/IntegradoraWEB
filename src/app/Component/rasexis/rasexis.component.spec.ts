import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RasexisComponent } from './rasexis.component';

describe('RasexisComponent', () => {
  let component: RasexisComponent;
  let fixture: ComponentFixture<RasexisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RasexisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RasexisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
