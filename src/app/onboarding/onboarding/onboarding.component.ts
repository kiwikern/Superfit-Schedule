import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { Router } from '@angular/router';
import { OnboardingDialogComponent } from '../onboarding-dialog/onboarding-dialog.component';

@Component({
  selector: 'sfs-onboarding',
  template: '<div fxLayoutAlign="center"><md-spinner></md-spinner></div>',
})
export class OnboardingComponent implements OnInit {

  constructor(private dialog: MdDialog,
              private router: Router) {
    this.dialog.open(OnboardingDialogComponent, {height: '100%', width: '100%'});
  }

  ngOnInit() {
    this.router.navigate(['/onboarding', {outlets: {onboarding: ['start']}}]);
  }

}
