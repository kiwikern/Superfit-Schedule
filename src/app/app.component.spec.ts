import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { Component, Directive } from '@angular/core';
import { SfsMaterialModule } from './material/sfs-material.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MockClassListComponent,
        MockFilterComponent,
        MockRouterOutletComponent,
        MockRouterLinkDirective,
      ],
      imports: [
        SfsMaterialModule
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

@Component({
  selector: 'router-outlet',
  template: ''
})
class MockRouterOutletComponent {
}

@Directive({
  selector: '[routerLink], [routerLinkActive]'
})
class MockRouterLinkDirective {
}
