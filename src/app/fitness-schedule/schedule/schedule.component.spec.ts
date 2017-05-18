import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleComponent } from './schedule.component';
import { Component, Input } from '@angular/core';
import { OrderClassesPipe } from '../pipes/order-classes.pipe';
import { FilterClassesPipe } from '../pipes/filter-classes.pipe';
import { SfsMaterialModule } from '../../material/sfs-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { OrderDaysPipe } from '../pipes/order-days.pipe';
import { MappingService } from '../services/mapping.service';
import { ScheduleActions } from '../store/schedule.actions';
import { NgReduxTestingModule } from '@angular-redux/store/lib/testing';

describe('ScheduleComponent', () => {
  let component: ScheduleComponent;
  let fixture: ComponentFixture<ScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ScheduleComponent,
        MockMainComponent,
        OrderClassesPipe,
        OrderDaysPipe,
        FilterClassesPipe
      ],
      imports: [
        SfsMaterialModule,
        FlexLayoutModule,
        NgReduxTestingModule
      ],
      providers: [
        MappingService,
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
  selector: 'sfs-fitness-class',
  template: ''
})
class MockMainComponent {
  @Input()
  fitnessClass: any;
}
