import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleComponent } from './schedule.component';
import { Component, Input } from '@angular/core';
import { SfsMaterialModule } from '../../material/sfs-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { OrderDaysPipe } from '../pipes/order-days.pipe';
import { ScheduleActions } from '../store/schedule/schedule.actions';
import { NgReduxTestingModule } from '@angular-redux/store/lib/testing';

describe('ScheduleComponent', () => {
  let component: ScheduleComponent;
  let fixture: ComponentFixture<ScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ScheduleComponent,
        MockDayColumnComponent,
        OrderDaysPipe,
      ],
      imports: [
        SfsMaterialModule,
        FlexLayoutModule,
        NgReduxTestingModule
      ],
      providers: [
        ScheduleActions
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

@Component({
  selector: 'sfs-day-column',
  template: ''
})
class MockDayColumnComponent {
  @Input() classesPerDay: any;
  @Input() filter: any;
  @Input() removedFavorites;
}
