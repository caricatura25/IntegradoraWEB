import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterInvitadosComponent } from './inter-invitados.component';

describe('InterInvitadosComponent', () => {
  let component: InterInvitadosComponent;
  let fixture: ComponentFixture<InterInvitadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterInvitadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterInvitadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
