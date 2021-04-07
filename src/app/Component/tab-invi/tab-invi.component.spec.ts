import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabInviComponent } from './tab-invi.component';

describe('TabInviComponent', () => {
  let component: TabInviComponent;
  let fixture: ComponentFixture<TabInviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabInviComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabInviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
