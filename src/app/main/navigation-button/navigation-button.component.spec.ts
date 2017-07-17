import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationButtonComponent } from './navigation-button.component';
import { SfsMaterialModule } from '../../material/sfs-material.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('NavigationButtonComponent', () => {
  let component: NavigationButtonComponent;
  let fixture: ComponentFixture<NavigationButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavigationButtonComponent],
      imports: [
        RouterTestingModule,
        SfsMaterialModule
      ]
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
