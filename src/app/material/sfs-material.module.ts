import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDialogModule,
  MatExpansionModule,
  MatIconModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSnackBarModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import 'hammerjs';

@NgModule({
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatChipsModule,
    MatCardModule,
    MatRadioModule,
    MatSliderModule,
    MatSnackBarModule,
    MatInputModule,
    MatButtonToggleModule,
    MatTabsModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatExpansionModule
  ],
  exports: [
    CommonModule,
    MatCheckboxModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatChipsModule,
    MatCardModule,
    MatRadioModule,
    MatSliderModule,
    MatSnackBarModule,
    MatInputModule,
    MatButtonToggleModule,
    MatTabsModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatExpansionModule
  ]
})
export class SfsMaterialModule {
}
