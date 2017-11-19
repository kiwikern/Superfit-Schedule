import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { OnboardingDialogComponent } from '../onboarding-dialog/onboarding-dialog.component';

@Component({
  selector: 'sfs-onboarding',
  template: '<div fxLayoutAlign="center"><mat-spinner></mat-spinner></div>',
})
export class OnboardingComponent implements OnInit {

  constructor(private dialog: MatDialog,
              private router: Router) {
    this.dialog.open(OnboardingDialogComponent, {height: '100vh', width: '100vw', maxWidth: '100vw'});
  }

  ngOnInit() {
    this.router.navigate(['/onboarding', {outlets: {onboarding: ['start']}}]);
  }

}
