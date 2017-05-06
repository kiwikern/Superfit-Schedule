import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdButtonModule, MdCardModule, MdCheckboxModule, MdChipsModule, MdIconModule, MdRadioModule,
  MdSelectModule, MdSidenavModule, MdSliderModule, MdToolbarModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    BrowserAnimationsModule,
    MdSliderModule
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
    BrowserAnimationsModule,
    MdSliderModule
  ]
})
export class SfsMaterialModule {
}
