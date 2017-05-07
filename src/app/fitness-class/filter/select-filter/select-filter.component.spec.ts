import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectFilterComponent } from './select-filter.component';
import { FormsModule } from '@angular/forms';
import { MappingService } from '../../services/mapping.service';
import { SfsMaterialModule } from '../../../material/sfs-material.module';

describe('SelectFilterComponent', () => {
  let component: SelectFilterComponent;
  let fixture: ComponentFixture<SelectFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelectFilterComponent],
      imports: [
        SfsMaterialModule,
        FormsModule,
        // NoopAnimationsModule
      ],
      providers: [MappingService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectFilterComponent);
    component = fixture.componentInstance;
    component.nameMapping = {};
    component.selectedValues = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
