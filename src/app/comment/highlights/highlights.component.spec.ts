import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightsComponent } from './highlights.component';
import { HighlightService } from '../highlight.service';
import { MatIconModule } from '@angular/material';

describe('HighlightsComponent', () => {
  let component: HighlightsComponent;
  let fixture: ComponentFixture<HighlightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighlightsComponent ],
      imports: [
        MatIconModule
      ],
      providers: [HighlightService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
