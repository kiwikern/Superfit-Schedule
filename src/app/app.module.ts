import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NgReduxModule } from '@angular-redux/store';
import { StoreModule } from './store/store.module';
import { FitnessClassModule } from './fitness-class/fitness-class.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { MaterialModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgReduxModule,
    StoreModule,
    FitnessClassModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
