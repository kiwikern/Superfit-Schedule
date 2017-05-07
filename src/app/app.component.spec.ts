import { async, TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { Component } from '@angular/core';
import { SfsMaterialModule } from './material/sfs-material.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MockClassListComponent,
        MockFilterComponent,
      ],
      imports: [
        SfsMaterialModule,
        RouterTestingModule.withRoutes([{path: '', children: []}])
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});

@Component({
  selector: 'sfs-class-list',
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
