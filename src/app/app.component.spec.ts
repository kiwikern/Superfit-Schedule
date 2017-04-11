import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { Directive } from '@angular/core';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, MockClassListComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});

@Directive({
  selector: 'sfs-class-list',
})
class MockClassListComponent {
}
