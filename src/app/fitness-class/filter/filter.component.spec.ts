import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterComponent } from './filter.component';
import { MaterialModule } from '@angular/material';
import { SelectFilterComponent } from './select-filter/select-filter.component';
import { FormsModule } from '@angular/forms';
import { MappingService } from '../services/mapping.service';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../store/root.types';
import { FilterActions } from '../store/filter.actions';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;

  beforeEach(async(() => {
    let reduxFactory = () => {
      let ngRedux = new MockRedux({});
      return ngRedux;
    };

    TestBed.configureTestingModule({
      declarations: [ FilterComponent, SelectFilterComponent ],
      imports: [
        MaterialModule,
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
