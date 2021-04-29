import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuRComponent } from './menu-r.component';

describe('MenuRComponent', () => {
  let component: MenuRComponent;
  let fixture: ComponentFixture<MenuRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuRComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
