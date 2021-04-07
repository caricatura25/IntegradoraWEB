import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocheraComponent } from './cochera.component';

describe('CocheraComponent', () => {
  let component: CocheraComponent;
  let fixture: ComponentFixture<CocheraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CocheraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CocheraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
