import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

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
import { AuthenticationStoreModule } from '../authentication/store/authentication-store.module';
import { SwUpdatesModule } from '../sw-updates/sw-updates.module';
import { Angulartics2GoogleAnalytics, Angulartics2Module, Angulartics2Piwik } from 'angulartics2';
import { ReleasenotesModule } from '../releasenotes/releasenotes.module';
import { ReleasenotesStoreModule } from '../releasenotes/store/releasenotes-store.module';
import { LegalModule } from '../legal/legal.module';
import { NavigationButtonComponent } from './navigation-button/navigation-button.component';
import { FeedbackStoreModule } from '../feedback/store/feedback-store.module';


const appRoutes: Routes = [
  {path: '', redirectTo: 'schedule', pathMatch: 'prefix'},
  {path: 'schedule', loadChildren: '../fitness-schedule/fitness-schedule.module#FitnessScheduleModule'},
  {path: 'auth', loadChildren: '../authentication/authentication.module#AuthenticationModule'},
  {path: 'feedback', loadChildren: '../feedback/feedback.module#FeedbackModule'},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NavigationComponent,
    NavigationButtonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
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
    SwUpdatesModule,
    Angulartics2Module.forRoot([Angulartics2Piwik, Angulartics2GoogleAnalytics]),
    ReleasenotesModule,
    ReleasenotesStoreModule,
    LegalModule,
    FeedbackStoreModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'de-DE'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
