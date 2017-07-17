import { select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { ReleasenotesActions } from '../../releasenotes/store/releasenotes.actions';

@Component({
  selector: 'sfs-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  @select(['releasenotes', 'version']) version$;
  @select(['authentication', 'userName']) userName;
  mailAddress = 'sfs@kimkern.de';

  constructor(private actions: ReleasenotesActions) {
  }

  ngOnInit() {
  }

  openReleasenotes() {
    this.actions.showReleasenotes();
  }

}
