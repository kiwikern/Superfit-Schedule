import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesScheduleComponent } from './favorites-schedule.component';
import { SfsMaterialModule } from '../../material/sfs-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Component, Injectable, Input } from '@angular/core';
import { ScheduleParserService } from '../services/schedule-parser.service';
import { FitnessClass } from '../interfaces/fitness-class';
import { FitnessClassesPerDay } from '../interfaces/fitness-classes-per-day';
import { Day } from '../enums/day.enum';
import { Language } from '../enums/language.enum';
import { Gym } from '../enums/gym.enum';
import { NgReduxTestingModule, MockNgRedux } from '@angular-redux/store/lib/testing';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';

describe('FavoritesScheduleComponent', () => {
  let component: FavoritesScheduleComponent;
  let fixture: ComponentFixture<FavoritesScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FavoritesScheduleComponent,
        MockClassListComponent
      ],
      imports: [
        SfsMaterialModule,
        FlexLayoutModule,
        NgReduxTestingModule
      ],
      providers: [
        ScheduleParserService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    MockNgRedux.reset();
    const favoritesStub = MockNgRedux.getSelectorStub(['favorites', 'workouts']);
    favoritesStub.next(getFavorites());
    favoritesStub.complete();
    const scheduleStub = MockNgRedux.getSelectorStub(['schedule', 'schedulePerDay']);
    scheduleStub.next(getSchedulePerDay());
    scheduleStub.complete();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should find removed favorite', done => {
    const combined = Observable.combineLatest(component.favorites$, component.schedulePerDay$, () => {
      expect(component.removedFavorites.length).toBe(1);
      expect(component.removedFavorites[0].startHour).toBe(13);
      done();
    });
    combined.subscribe();
  });

})
;

function getFavorites(): FitnessClass[] {
  return [
    {
      day: Day.MONDAY,
      startHour: 10,
      startMinute: 0,
      duration: 60,
      workoutId: '',
      gym: Gym.CHARLOTTENBURG,
      language: Language.GERMAN
    },
    {
      day: Day.MONDAY,
      startHour: 13,
      startMinute: 0,
      duration: 60,
      workoutId: '',
      gym: Gym.EUROPACENTER,
      language: Language.GERMAN
    }
  ];
}
function getSchedulePerDay(): FitnessClassesPerDay[] {
  return [
    {
      day: Day.MONDAY, classes: [
      {
        day: Day.MONDAY,
        startHour: 10,
        startMinute: 0,
        duration: 60,
        workoutId: '',
        gym: Gym.CHARLOTTENBURG,
        language: Language.GERMAN
      },
      {
        day: Day.MONDAY,
        startHour: 11,
        startMinute: 0,
        duration: 60,
        workoutId: '',
        gym: Gym.EUROPACENTER,
        language: Language.GERMAN
      }
    ]
    },
    {
      day: Day.WEDNESDAY,
      classes: [
        {
          day: Day.WEDNESDAY,
          startHour: 10,
          startMinute: 0,
          duration: 60,
          workoutId: '',
          gym: Gym.CHARLOTTENBURG,
          language: Language.GERMAN
        }
      ]
    }
  ];
}

@Component({
  selector: 'sfs-schedule',
  template: ''
})
class MockClassListComponent {

  @Input() schedulePerDay;
  @Input() filter;
  @Input() showSchedule;

}

