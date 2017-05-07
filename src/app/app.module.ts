import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NgReduxModule } from '@angular-redux/store';
import { StoreModule } from './store/store.module';
import { FitnessScheduleModule } from './fitness-schedule/fitness-schedule.module';
import 'hammerjs';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { SfsMaterialModule } from './material/sfs-material.module';


const appRoutes: Routes = [
  {path: '', redirectTo: 'schedule', pathMatch: 'prefix'},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgReduxModule,
    StoreModule,
    FitnessScheduleModule,
    SfsMaterialModule,
    FlexLayoutModule,
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
