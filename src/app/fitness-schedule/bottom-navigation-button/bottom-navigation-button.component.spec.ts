import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomNavigationButtonComponent } from './bottom-navigation-button.component';

describe('BottomNavigationButtonComponent', () => {
  let component: BottomNavigationButtonComponent;
  let fixture: ComponentFixture<BottomNavigationButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomNavigationButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomNavigationButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
