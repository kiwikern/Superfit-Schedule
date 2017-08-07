import { Component, Input, OnInit } from '@angular/core';
import { HighlightService } from '../highlight.service';

@Component({
  selector: 'sfs-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.css']
})
export class HighlightsComponent implements OnInit {

  @Input() highlights: string[];

  constructor(public service: HighlightService) { }

  ngOnInit() {
  }

}
