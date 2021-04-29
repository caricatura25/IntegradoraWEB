import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrorasComponent } from './registroras.component';

describe('RegistrorasComponent', () => {
  let component: RegistrorasComponent;
  let fixture: ComponentFixture<RegistrorasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrorasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
