import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { Component, Directive } from '@angular/core';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, MockClassListComponent, MockFilterComponent
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
})
class MockClassListComponent {
}

@Component({
  selector: 'sfs-filter',
})
class MockFilterComponent {
}
