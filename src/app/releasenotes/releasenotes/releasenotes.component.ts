import { Component, OnInit } from '@angular/core';
import { Release } from '../release/release.interface';
import { releasenotes } from '../releasenotes';

@Component({
  selector: 'sfs-releasenotes',
  templateUrl: './releasenotes.component.html',
  styleUrls: ['./releasenotes.component.css']
})
export class ReleasenotesComponent implements OnInit {

  releases: Release[];

  constructor() {
  }

  ngOnInit() {
    this.releases = releasenotes;
  }

}
