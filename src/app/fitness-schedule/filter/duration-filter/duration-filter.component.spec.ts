import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DurationFilterComponent } from './duration-filter.component';
import { SfsMaterialModule } from '../../../material/sfs-material.module';
import { FormsModule } from '@angular/forms';

describe('DurationFilterComponent', () => {
  let component: DurationFilterComponent;
  let fixture: ComponentFixture<DurationFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DurationFilterComponent ],
      imports: [
        SfsMaterialModule,
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DurationFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
