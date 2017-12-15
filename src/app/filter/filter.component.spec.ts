import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterComponent } from './filter.component';
import { SelectFilterComponent } from './select-filter/select-filter.component';
import { FormsModule } from '@angular/forms';
import { MappingService } from '../workout/mapping.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TimeFilterComponent } from './time-filter/time-filter.component';
import { SfsMaterialModule } from '../material/sfs-material.module';
import { NgReduxTestingModule } from '@angular-redux/store/lib/testing';
import { DurationFilterComponent } from './duration-filter/duration-filter.component';
import { FilterService } from './filter.service';

describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ FilterComponent, SelectFilterComponent, TimeFilterComponent, DurationFilterComponent ],
      imports: [
        SfsMaterialModule,
        FormsModule,
        NoopAnimationsModule,
        NgReduxTestingModule
      ],
      providers: [
        MappingService,
        {provide: FilterService, useClass: MockFilterService},
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

class MockFilterService {
}
