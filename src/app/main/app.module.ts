import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app/app.component';
import { NgReduxModule } from '@angular-redux/store';
import { StoreModule } from '../store/store.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { SfsMaterialModule } from '../material/sfs-material.module';
import { NavigationComponent } from './navigation/navigation.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { PushNotificationModule } from '../push-notification/push-notification.module';
import { RecaptchaModule } from 'ng-recaptcha';
import { SyncModule } from '../sync/sync.module';
import { FitnessScheduleStoreModule } from '../fitness-schedule/store/fitness-schedule-store.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthenticationStoreModule } from 'app/authentication/store/authentication-store.module';
import { SwUpdatesModule } from '../sw-updates/sw-updates.module';


const appRoutes: Routes = [
  {path: '', redirectTo: 'schedule', pathMatch: 'prefix'},
  {path: 'schedule', loadChildren: '../fitness-schedule/fitness-schedule.module#FitnessScheduleModule' },
  {path: 'auth', loadChildren: '../authentication/authentication.module#AuthenticationModule' },
  {path: 'about', component: AboutComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    NgReduxModule,
    StoreModule,
    FitnessScheduleStoreModule,
    SfsMaterialModule,
    FlexLayoutModule,
    RouterModule.forRoot(appRoutes),
    ServiceWorkerModule,
    PushNotificationModule,
    AuthenticationStoreModule,
    RecaptchaModule.forRoot(),
    SyncModule,
    SwUpdatesModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'de-DE'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
