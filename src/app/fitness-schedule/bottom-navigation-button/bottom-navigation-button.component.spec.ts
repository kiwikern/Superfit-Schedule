import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomNavigationButtonComponent } from './bottom-navigation-button.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('BottomNavigationButtonComponent', () => {
  let component: BottomNavigationButtonComponent;
  let fixture: ComponentFixture<BottomNavigationButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomNavigationButtonComponent ],
      imports: [
        RouterTestingModule
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomNavigationButtonComponent);
    component = fixture.componentInstance;
    component.activeRoute = '';
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
