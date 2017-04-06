import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { NgRedux } from '@angular-redux/store';
import { RootActions } from './store/root.actions';
import { MaterialModule } from '@angular/material';
import { Directive, Input } from '@angular/core';

describe('AppComponent', () => {
  beforeEach(async(() => {
    let reduxFactory = () => {
      let ngRedux = new MockRedux({});
      return ngRedux;
    };

    TestBed.configureTestingModule({
      declarations: [
        AppComponent, MockMainComponent
      ],
      imports: [
        MaterialModule
      ],
      providers: [
        { provide: NgRedux, useFactory: reduxFactory},
        RootActions
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  }));
});

class MockRedux extends NgRedux<any> {
  constructor(private state: any) {
    super(null);
  }
  dispatch = () => undefined;
  getState = () => this.state;
}

@Directive({
  selector: 'sfs-fitness-class',
})
class MockMainComponent {
  @Input()
  fitnessClass: any;
}
