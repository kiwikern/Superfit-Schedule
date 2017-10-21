import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { PrivacyPolicyComponent } from '../privacy-policy/privacy-policy.component';

@Component({
  selector: 'sfs-legal-nav',
  templateUrl: './legal-nav.component.html',
  styleUrls: ['./legal-nav.component.css']
})
export class LegalNavComponent implements OnInit {

  constructor(private dialog: MatDialog) {
  }

  ngOnInit() {
  }

  openPrivacyPolicy() {
    this.dialog.open(PrivacyPolicyComponent);
  }

}
