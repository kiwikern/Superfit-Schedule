import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnessClassComponent } from './fitness-class.component';
import { TimePeriodComponent } from './time-period/time-period.component';
import { MappingService } from '../mapping.service';
import { Day } from '../../fitness-schedule/enums/day.enum';
import { Gym } from '../../fitness-schedule/enums/gym.enum';
import { Language } from '../../fitness-schedule/enums/language.enum';
import { SfsMaterialModule } from '../../material/sfs-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FavoriteActions } from '../../fitness-schedule/store/favorites/favorite.actions';
import { NgReduxTestingModule } from '@angular-redux/store/lib/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('FitnessClassComponent', () => {
  let component: FitnessClassComponent;
  let fixture: ComponentFixture<FitnessClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FitnessClassComponent, TimePeriodComponent],
      imports: [
        SfsMaterialModule,
        FlexLayoutModule,
        NgReduxTestingModule,
        RouterTestingModule
      ],
      providers: [
        MappingService,
        {provide: FavoriteActions, useClass: MockActions}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FitnessClassComponent);
    component = fixture.componentInstance;
    component.fitnessClass = {
      id: '',
      startHour: 10,
      startMinute: 30,
      workoutId: 'TestWorkout',
      type: 'class',
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

class MockActions {
}
