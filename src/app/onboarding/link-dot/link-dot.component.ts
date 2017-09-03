import { Component, Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sfs-link-dot',
  templateUrl: './link-dot.component.html',
  styleUrls: ['./link-dot.component.css']
})
export class LinkDotComponent implements OnChanges {

  @Input() link: string;
  @Input() isActive: boolean;

  constructor(private router: Router) {
  }

  ngOnChanges() {
    if (this.isActive) {
      this.navigate();
    }
  }

  navigate() {
    this.router.navigate(['/onboarding', {outlets: {onboarding: [this.link]}}]);
  }

}
