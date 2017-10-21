import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalNavComponent } from './legal-nav.component';
import { MatDialog } from '@angular/material';

describe('LegalNavComponent', () => {
  let component: LegalNavComponent;
  let fixture: ComponentFixture<LegalNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegalNavComponent ],
      providers: [
        {provide: MatDialog, useValue: ''}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
