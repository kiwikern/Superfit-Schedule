import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsComponent } from './settings.component';
import { SfsMaterialModule } from '../../material/sfs-material.module';
import { FormsModule } from '@angular/forms';
import { SettingsActions } from '../store/settings/settings.actions';
import { NgReduxTestingModule } from '@angular-redux/store/lib/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('SettingsComponent', () => {
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SettingsComponent],
      imports: [
        SfsMaterialModule,
        FormsModule,
        NoopAnimationsModule,
        NgReduxTestingModule
      ],
      providers: [
        {provide: SettingsActions, useClass: MockActions}
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

class MockActions {
}
