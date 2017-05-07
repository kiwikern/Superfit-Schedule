import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassListComponent } from './class-list.component';
import { NgRedux } from '@angular-redux/store';
import { Component, Input } from '@angular/core';
import { OrderClassesPipe } from '../pipes/order-classes.pipe';
import { FilterClassesPipe } from '../pipes/filter-classes.pipe';
import { SfsMaterialModule } from '../../material/sfs-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { OrderDaysPipe } from '../pipes/order-days.pipe';
import { MappingService } from '../services/mapping.service';
import { ScheduleActions } from '../store/schedule.actions';

describe('ClassListComponent', () => {
  let component: ClassListComponent;
  let fixture: ComponentFixture<ClassListComponent>;

  beforeEach(async(() => {
    const reduxFactory = () => {
      const ngRedux = new MockRedux({});
      return ngRedux;
    };

    TestBed.configureTestingModule({
      declarations: [
        ClassListComponent,
        MockMainComponent,
        OrderClassesPipe,
        OrderDaysPipe,
        FilterClassesPipe
      ],
      imports: [
        SfsMaterialModule,
        FlexLayoutModule
      ],
      providers: [
        {provide: NgRedux, useFactory: reduxFactory},
        MappingService,
        ScheduleActions
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


class MockRedux extends NgRedux<any> {
  constructor(private state: any) {
    super(null);
  }

  dispatch = () => undefined;
  getState = () => this.state;
}

@Component({
  selector: 'sfs-fitness-class',
  template: ''
})
class MockMainComponent {
  @Input()
  fitnessClass: any;
}
