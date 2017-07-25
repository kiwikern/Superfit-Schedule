import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FabButtonComponent } from './fab-button.component';
import { MdButtonModule, MdIconModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('FabButtonComponent', () => {
  let component: FabButtonComponent;
  let fixture: ComponentFixture<FabButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FabButtonComponent ],
      imports: [
        MdIconModule,
        MdButtonModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FabButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
