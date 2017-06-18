import { select } from '@angular-redux/store';
declare function require(moduleName: string): any;
const { version: appVersion } = require('../../../../package.json');
import { Component, OnInit } from '@angular/core';

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
  constructor() {
    this.appVersion = appVersion;
  }

  ngOnInit() {
  }

}
