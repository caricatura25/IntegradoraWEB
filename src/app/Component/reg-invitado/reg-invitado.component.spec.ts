import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegInvitadoComponent } from './reg-invitado.component';

describe('RegInvitadoComponent', () => {
  let component: RegInvitadoComponent;
  let fixture: ComponentFixture<RegInvitadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegInvitadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegInvitadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
