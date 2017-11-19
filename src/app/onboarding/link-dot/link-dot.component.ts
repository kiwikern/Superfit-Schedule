import { Component, Input } from '@angular/core';

@Component({
  selector: 'sfs-link-dot',
  templateUrl: './link-dot.component.html',
  styleUrls: ['./link-dot.component.css']
})
export class LinkDotComponent {

  @Input() isActive: boolean;

  constructor() {
  }

}
