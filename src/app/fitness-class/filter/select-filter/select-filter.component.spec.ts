import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectFilterComponent } from './select-filter.component';
import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { MappingService } from '../../services/mapping.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('SelectFilterComponent', () => {
  let component: SelectFilterComponent;
  let fixture: ComponentFixture<SelectFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelectFilterComponent],
      imports: [
        MaterialModule,
        FormsModule,
        NoopAnimationsModule
      ],
      providers: [MappingService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
