import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HighlightService } from '../highlight.service';
import { Highlight } from '../highlights.enum';

@Component({
  selector: 'sfs-highlights-selection',
  templateUrl: './highlights-selection.component.html',
  styleUrls: ['./highlights-selection.component.css']
})
export class HighlightsSelectionComponent implements OnInit {

  highlights: Highlight[] = [];
  @Output() onSelect: EventEmitter<Highlight[]> = new EventEmitter();

  constructor(public service: HighlightService) {
  }

  ngOnInit() {
  }

  select(highlight: Highlight) {
    if (!this.highlights.includes(highlight)) {
      this.highlights.push(highlight);
    } else {
      const index = this.highlights.indexOf(highlight);
      this.highlights.splice(index, 1);
    }
    this.onSelect.emit(this.highlights);
  }

}
