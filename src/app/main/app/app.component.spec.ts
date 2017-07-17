import { async, TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { Component, Injectable, Input } from '@angular/core';
import { SfsMaterialModule } from '../../material/sfs-material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { NavigationComponent } from '../navigation/navigation.component';
import { SwUpdateNotificationsService } from '../../sw-updates/sw-update-notifications.service';
import { Angulartics2, Angulartics2GoogleAnalytics, Angulartics2Piwik } from 'angulartics2';

describe('AppComponent', () => {
  beforeEach(async(() => {
    const mockAngulartics = jasmine.createSpyObj<Angulartics2>('angulartics2', ['eventTrack']);
    mockAngulartics.eventTrack = jasmine.createSpyObj('angulartics2', ['next']);
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MockClassListComponent,
        MockFilterComponent,
        MockNavComponent,
        MockSyncStatusComponent
      ],
      imports: [
        SfsMaterialModule,
        RouterTestingModule.withRoutes([{path: '', children: []}])
      ],
      providers: [
        {provide: SwUpdateNotificationsService, useClass: MockService},
        {provide: Angulartics2, useValue: mockAngulartics},
        {provide: Angulartics2GoogleAnalytics, useValue: mockAngulartics},
        {provide: Angulartics2Piwik, useValue: mockAngulartics},
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});

@Component({
  selector: 'sfs-schedule',
  template: ''
})
class MockClassListComponent {
}

@Component({
  selector: 'sfs-filter',
  template: ''
})
class MockFilterComponent {
}

@Component({
  selector: 'sfs-sync-status',
  template: ''
})
class MockSyncStatusComponent {
}

@Component({
  selector: 'sfs-navigation',
  template: ''
})
class MockNavComponent {
  @Input() fullWidth;
  @Input() sideNav;
}

@Injectable()
class MockService {
}
