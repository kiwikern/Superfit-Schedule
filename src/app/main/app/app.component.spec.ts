import { async, TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { Component, Injectable } from '@angular/core';
import { SfsMaterialModule } from '../../material/sfs-material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { NavigationComponent } from '../navigation/navigation.component';
import { SwUpdateNotificationsService } from '../../sw-updates/sw-update-notifications.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MockClassListComponent,
        MockFilterComponent,
        NavigationComponent,
        MockSyncStatusComponent
      ],
      imports: [
        SfsMaterialModule,
        RouterTestingModule.withRoutes([{path: '', children: []}])
      ],
      providers: [
        {provide: SwUpdateNotificationsService, useClass: MockService}
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

@Injectable()
class MockService {
}
