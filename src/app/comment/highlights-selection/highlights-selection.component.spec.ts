import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightsSelectionComponent } from './highlights-selection.component';
import { HighlightService } from '../highlight.service';
import { SfsMaterialModule } from '../../material/sfs-material.module';
import { MdButtonModule } from '@angular/material';

describe('HighlightsSelectionComponent', () => {
  let component: HighlightsSelectionComponent;
  let fixture: ComponentFixture<HighlightsSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighlightsSelectionComponent ],
      imports: [
        MdButtonModule
      ],
      providers: [HighlightService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighlightsSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
