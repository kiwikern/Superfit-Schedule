import { select } from '@angular-redux/store';
declare function require(moduleName: string): any;
const {version: appVersion} = require('../../../../package.json');
import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { ReleasenotesComponent } from '../../releasenotes/releasenotes/releasenotes.component';

@Component({
  selector: 'sfs-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  @select(['authentication', 'userName']) userName;
  mailAddress = 'sfs@kimkern.de';
  showLegal = false;
  appVersion: string;

  constructor(private dialog: MdDialog) {
    this.appVersion = appVersion;
  }

  ngOnInit() {
  }

  openReleasenotes() {
    this.dialog.open(ReleasenotesComponent);
  }

}
