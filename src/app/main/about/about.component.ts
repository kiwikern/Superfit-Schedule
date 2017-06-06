import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sfs-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  mailAddress = 'sfs@kimkern.de';
  showLegal = false;
  constructor() { }

  ngOnInit() {
  }

}
