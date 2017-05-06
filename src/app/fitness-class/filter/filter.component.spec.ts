import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterComponent } from './filter.component';
import { SelectFilterComponent } from './select-filter/select-filter.component';
import { FormsModule } from '@angular/forms';
import { MappingService } from '../services/mapping.service';
import { NgRedux } from '@angular-redux/store';
import { FilterActions } from '../store/filter.actions';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TimeFilterComponent } from './time-filter/time-filter.component';
import { SfsMaterialModule } from '../../material/sfs-material.module';

describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;

  beforeEach(async(() => {
    const reduxFactory = () => {
      const ngRedux = new MockRedux({});
      return ngRedux;
    };

    TestBed.configureTestingModule({
      declarations: [ FilterComponent, SelectFilterComponent, TimeFilterComponent ],
      imports: [
        SfsMaterialModule,
        FormsModule,
        NoopAnimationsModule
      ],
      providers: [
        MappingService,
        FilterActions,
        { provide: NgRedux, useFactory: reduxFactory}
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


class MockRedux extends NgRedux<any> {
  constructor(private state: any) {
    super(null);
  }
  dispatch = () => undefined;
  getState = () => this.state;
}
