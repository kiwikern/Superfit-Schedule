import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GymselectionComponent } from './gymselection.component';

describe('GymselectionComponent', () => {
  let component: GymselectionComponent;
  let fixture: ComponentFixture<GymselectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GymselectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GymselectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
