import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusComponent } from './status.component';
import { SfsMaterialModule } from '../../material/sfs-material.module';
import { NgReduxTestingModule } from '@angular-redux/store/lib/testing';
import { SyncActions } from '../sync.actions';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('StatusComponent', () => {
  let component: StatusComponent;
  let fixture: ComponentFixture<StatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusComponent ],
      imports: [
        SfsMaterialModule,
        NgReduxTestingModule,
        NoopAnimationsModule
      ],
      providers: [
        {provide: SyncActions, useClass: MockActions}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

class MockActions {
}
