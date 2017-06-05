import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountComponent } from './account.component';
import { SfsMaterialModule } from '../../material/sfs-material.module';
import { NgReduxTestingModule } from '@angular-redux/store/lib/testing';
import { AuthenticationActions } from '../store/authentication.actions';

describe('AccountComponent', () => {
  let component: AccountComponent;
  let fixture: ComponentFixture<AccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountComponent ],
      imports: [
        SfsMaterialModule,
        NgReduxTestingModule
      ],
      providers: [
        AuthenticationActions
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
