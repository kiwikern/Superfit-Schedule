import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdCheckboxModule,
  MdChipsModule,
  MdIconModule,
  MdInputModule,
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
    MdInputModule,
    MdButtonToggleModule
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
    MdInputModule,
    MdButtonToggleModule
  ]
})
export class SfsMaterialModule {
}
