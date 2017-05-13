import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesScheduleComponent } from './favorites-schedule.component';
import { SfsMaterialModule } from '../../material/sfs-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Component, Input } from '@angular/core';
import { ScheduleParserService } from '../services/schedule-parser.service';

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
        FlexLayoutModule
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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

@Component({
  selector: 'sfs-class-list',
  template: ''
})
class MockClassListComponent {

  @Input() schedule;
  @Input() filter;
  @Input() showSchedule;

}
