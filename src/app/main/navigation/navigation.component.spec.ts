import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationComponent } from './navigation.component';
import { SfsMaterialModule } from '../../material/sfs-material.module';
import { Component, Input } from '@angular/core';

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NavigationComponent,
        MockNavButtonComponent
      ],
      imports: [
        SfsMaterialModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

@Component({
  selector: 'sfs-navigation-button',
  template: ''
})
class MockNavButtonComponent {
  @Input() name;
  @Input() icon;
  @Input() path;
  @Input() sideNav;
  @Input() fullWidth;
}
