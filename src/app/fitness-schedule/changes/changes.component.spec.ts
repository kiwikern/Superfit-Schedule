import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangesComponent } from './changes.component';
import { SfsMaterialModule } from '../../material/sfs-material.module';
import { Component, Input } from '@angular/core';
import { ScheduleParserService } from '../store/schedule/schedule-parser.service';
import { FormsModule } from '@angular/forms';

describe('ChangesComponent', () => {
  let component: ChangesComponent;
  let fixture: ComponentFixture<ChangesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ChangesComponent,
        MockClassListComponent
      ],
      imports: [
        SfsMaterialModule,
        FormsModule
      ],
      providers: [
        {provide: ScheduleParserService, useClass: MockClassListComponent}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});


@Component({
  selector: 'sfs-schedule',
  template: ''
})
class MockClassListComponent {

  @Input() schedulePerDay;
  @Input() filter;
  @Input() showSchedule;
  @Input() removedFavorites;
  @Input() showFavoriteButton;
  @Input() newClasses;

}
