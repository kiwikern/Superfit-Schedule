import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalNavComponent } from './legal-nav.component';

describe('LegalNavComponent', () => {
  let component: LegalNavComponent;
  let fixture: ComponentFixture<LegalNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegalNavComponent ]
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
