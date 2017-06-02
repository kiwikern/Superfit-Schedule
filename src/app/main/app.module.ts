import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app/app.component';
import { NgReduxModule } from '@angular-redux/store';
import { StoreModule } from '../store/store.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { SfsMaterialModule } from '../material/sfs-material.module';
import { NavigationComponent } from './navigation/navigation.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { PushNotificationModule } from '../push-notification/push-notification.module';
import { AuthenticationModule } from '../authentication/authentication.module';
import { RecaptchaModule } from 'ng-recaptcha';
import { SyncModule } from '../sync/sync.module';
import { FitnessScheduleStoreModule } from '../fitness-schedule/store/fitness-schedule-store.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const appRoutes: Routes = [
  {path: '', redirectTo: 'schedule', pathMatch: 'prefix'},
  {path: 'schedule', loadChildren: '../fitness-schedule/fitness-schedule.module#FitnessScheduleModule' },
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
    RouterModule.forRoot(appRoutes, {useHash: true}),
    ServiceWorkerModule,
    PushNotificationModule,
    AuthenticationModule,
    RecaptchaModule.forRoot(),
    SyncModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
