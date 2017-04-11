import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassListComponent } from './class-list.component';
import { NgRedux } from '@angular-redux/store';
import { RootActions } from '../../store/root.actions';
import { Input, Directive } from '@angular/core';
import { OrderClassesPipe } from '../order-classes/order-classes.pipe';

describe('ClassListComponent', () => {
  let component: ClassListComponent;
  let fixture: ComponentFixture<ClassListComponent>;

  beforeEach(async(() => {
    let reduxFactory = () => {
      let ngRedux = new MockRedux({});
      return ngRedux;
    };

    TestBed.configureTestingModule({
      declarations: [
        ClassListComponent,
        MockMainComponent,
        OrderClassesPipe
      ],
      imports: [
        // MaterialModule
      ],
      providers: [
        { provide: NgRedux, useFactory: reduxFactory},
        RootActions
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassListComponent);
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

@Directive({
  selector: 'sfs-fitness-class',
})
class MockMainComponent {
  @Input()
  fitnessClass: any;
}
