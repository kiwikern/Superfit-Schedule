import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';
import { LinkDotsComponent } from '../link-dots/link-dots.component';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'sfs-onboarding-dialog',
  templateUrl: './onboarding-dialog.component.html',
  styleUrls: ['./onboarding-dialog.component.css']
})
export class OnboardingDialogComponent implements OnInit {

  private onDestroy = new Subject();

  constructor(private router: Router,
              private dialogRef: MatDialogRef<OnboardingDialogComponent>) {
  }
 
  ngOnInit() {
    this.dialogRef.afterClosed()
      .pipe(
        takeUntil(this.onDestroy)
      )
      .subscribe(() => {
        this.router.navigate(['/schedule']);
        this.onDestroy.next();
      });
  }

  next(dots: LinkDotsComponent) {
    const hadNext = dots.next();
    if (!hadNext) {
      this.dialogRef.close();
    }
  }

}
