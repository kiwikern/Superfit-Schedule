import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsComponent } from './settings.component';
import { SfsMaterialModule } from '../../material/sfs-material.module';
import { FormsModule } from '@angular/forms';
import { NgRedux } from '@angular-redux/store';
import { SettingsActions } from '../store/settings.actions';

describe('SettingsComponent', () => {
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;

  beforeEach(async(() => {
    const reduxFactory = () => {
      const ngRedux = new MockRedux({});
      return ngRedux;
    };

    TestBed.configureTestingModule({
      declarations: [SettingsComponent],
      imports: [SfsMaterialModule, FormsModule],
      providers: [
        {provide: NgRedux, useFactory: reduxFactory},
        SettingsActions
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsComponent);
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
