import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnessClassComponent } from './fitness-class.component';
import { TimePeriodComponent } from '../time-period/time-period.component';
import { MappingService } from '../services/mapping.service';
import { Day } from '../enums/day.enum';
import { Gym } from '../enums/gym.enum';
import { Language } from '../enums/language.enum';
import { SfsMaterialModule } from '../../material/sfs-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FavoriteActions } from '../store/favorite.actions';
import { NgReduxTestingModule } from '@angular-redux/store/lib/testing';

describe('FitnessClassComponent', () => {
  let component: FitnessClassComponent;
  let fixture: ComponentFixture<FitnessClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FitnessClassComponent, TimePeriodComponent],
      imports: [
        SfsMaterialModule,
        FlexLayoutModule,
        NgReduxTestingModule
      ],
      providers: [
        MappingService,
        FavoriteActions
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FitnessClassComponent);
    component = fixture.componentInstance;
    component.fitnessClass = {
      startHour: 10,
      startMinute: 30,
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
