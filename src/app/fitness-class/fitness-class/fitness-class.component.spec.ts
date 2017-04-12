import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnessClassComponent } from './fitness-class.component';
import { MaterialModule } from '@angular/material';
import { TimePeriodComponent } from '../time-period/time-period.component';
import { Gym, Day } from '../fitness-class.types';
import { MappingService } from '../services/mapping.service';

describe('FitnessClassComponent', () => {
  let component: FitnessClassComponent;
  let fixture: ComponentFixture<FitnessClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FitnessClassComponent, TimePeriodComponent],
      imports: [
        MaterialModule
      ],
      providers: [MappingService]
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
      day: Day.MONDAY
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
