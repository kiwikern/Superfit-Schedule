import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnessClassComponent } from './fitness-class.component';
import { MaterialModule } from '@angular/material';
import { TimePeriodComponent } from '../time-period/time-period.component';
import { MappingService } from '../services/mapping.service';
import { Day } from '../enums/day.enum';
import { Gym } from '../enums/gym.enum';
import { Language } from '../enums/language.enum';
import { SfsMaterialModule } from '../../material/sfs-material.module';
import { NgRedux } from '@angular-redux/store';
import { FilterActions } from '../store/filter.actions';
import { FlexLayoutModule } from '@angular/flex-layout';

describe('FitnessClassComponent', () => {
  let component: FitnessClassComponent;
  let fixture: ComponentFixture<FitnessClassComponent>;

  beforeEach(async(() => {
    const reduxFactory = () => {
      const ngRedux = new MockRedux({});
      return ngRedux;
    };
    TestBed.configureTestingModule({
      declarations: [FitnessClassComponent, TimePeriodComponent],
      imports: [
        SfsMaterialModule,
        FlexLayoutModule
      ],
      providers: [
        {provide: NgRedux, useFactory: reduxFactory},
        MappingService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FitnessClassComponent);
    component = fixture.componentInstance;
    component.fitnessClass = {
      startTime: new Date(),
      workoutId: 'TestWorkout',
      duration: 20,
      gym: Gym.CHARLOTTENBURG,
      day: Day.MONDAY,
      language: Language.GERMAN
    };
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
