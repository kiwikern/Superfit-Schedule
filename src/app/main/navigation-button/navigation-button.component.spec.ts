import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationButtonComponent } from './navigation-button.component';

describe('NavigationButtonComponent', () => {
  let component: NavigationButtonComponent;
  let fixture: ComponentFixture<NavigationButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
