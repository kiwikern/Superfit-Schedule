import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { OnboardingDialogComponent } from '../onboarding-dialog/onboarding-dialog.component';

@Component({
  selector: 'sfs-onboarding',
  template: '<div fxLayoutAlign="center"><mat-spinner></mat-spinner></div>',
})
export class OnboardingComponent implements OnInit, OnDestroy {
  private dialogRef: MatDialogRef<OnboardingDialogComponent>;

  constructor(private dialog: MatDialog,
              private router: Router) {
  }

  ngOnInit() {
    this.dialogRef = this.dialog.open(OnboardingDialogComponent, {
      height: '100vh',
      width: '100vw',
      maxWidth: '100vw',
      closeOnNavigation: false,
      disableClose: true,
      data: {steps: ['start', 'gymselection', 'classselection', 'timeselection', 'registration']}
    });
    this.router.navigate(['/onboarding', {outlets: {onboarding: ['start']}}]);
  }

  ngOnDestroy() {
    this.dialogRef.close();
  }

}
