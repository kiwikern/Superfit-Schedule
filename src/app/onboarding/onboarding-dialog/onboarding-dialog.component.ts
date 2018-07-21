import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Subject } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';
import { filter, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'sfs-onboarding-dialog',
  templateUrl: './onboarding-dialog.component.html',
  styleUrls: ['./onboarding-dialog.component.css']
})
export class OnboardingDialogComponent implements OnInit {

  @Input() steps: string[];
  activeIndex = 0;
  private onDestroy = new Subject();

  constructor(private router: Router,
              private dialogRef: MatDialogRef<OnboardingDialogComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any) {
    this.steps = this.data.steps;
  }

  ngOnInit() {
    this.router.events.pipe(
      takeUntil(this.onDestroy),
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => this.activeIndex = this.getActiveIndex());
  }

  next() {
    if (this.activeIndex < this.steps.length - 1) {
      this.activeIndex++;
      this.navigateToActiveIndex();
    } else {
      this.dialogRef.close();
      this.router.navigate(['/schedule']);
    }
  }

  navigateTo(index: number) {
    this.activeIndex = index;
    this.navigateToActiveIndex();
  }

  private navigateToActiveIndex() {
    const activeOutlet = this.steps[this.activeIndex];
    const ouletConfig = {outlets: {onboarding: [activeOutlet]}};
    this.router.navigate(['/onboarding', ouletConfig]);
  }

  private getActiveIndex(): number {
    return this.steps.findIndex(step => this.isActiveRoute(this.router.url, step));
  }

  private isActiveRoute(route: string, step: string): boolean {
    const regex = new RegExp(`onboarding:${step}`);
    return regex.test(route);
  }

}
