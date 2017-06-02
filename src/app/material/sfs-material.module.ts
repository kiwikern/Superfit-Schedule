import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdButtonModule,
  MdCardModule,
  MdCheckboxModule,
  MdChipsModule,
  MdIconModule, MdInputModule,
  MdRadioModule,
  MdSelectModule,
  MdSidenavModule,
  MdSliderModule,
  MdSnackBarModule,
  MdToolbarModule
} from '@angular/material';
import 'hammerjs';

@NgModule({
  imports: [
    CommonModule,
    MdCheckboxModule,
    MdSelectModule,
    MdIconModule,
    MdButtonModule,
    MdSidenavModule,
    MdToolbarModule,
    MdChipsModule,
    MdCardModule,
    MdRadioModule,
    MdSliderModule,
    MdSnackBarModule,
    MdInputModule
  ],
  exports: [
    CommonModule,
    MdCheckboxModule,
    MdSelectModule,
    MdIconModule,
    MdButtonModule,
    MdSidenavModule,
    MdToolbarModule,
    MdChipsModule,
    MdCardModule,
    MdRadioModule,
    MdSliderModule,
    MdSnackBarModule,
    MdInputModule
  ]
})
export class SfsMaterialModule {
}
