import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleRouterComponent } from './schedule-router.component';
import { SfsMaterialModule } from '../../material/sfs-material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('ScheduleRouterComponent', () => {
  let component: ScheduleRouterComponent;
  let fixture: ComponentFixture<ScheduleRouterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleRouterComponent ],
      imports: [
        SfsMaterialModule,
        RouterTestingModule,
        NoopAnimationsModule
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
