import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

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
import { Angulartics2Module } from 'angulartics2';
import { ReleasenotesModule } from '../releasenotes/releasenotes.module';
import { ReleasenotesStoreModule } from '../releasenotes/store/releasenotes-store.module';
import { LegalModule } from '../legal/legal.module';
import { NavigationButtonComponent } from './navigation-button/navigation-button.component';
import { FeedbackStoreModule } from '../feedback/store/feedback-store.module';
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import { Angulartics2Piwik } from 'angulartics2/piwik';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
import { environment } from '../../environments/environment';
import { RemoteErrorHandler } from './RemoteErrorHandler';
import { SharingService } from './sharing.service';
import { ShareButtonComponent } from './share-button/share-button.component';
import { AuthInterceptor } from '../authentication/store/auth-interceptor';
import { ShareDialogComponent } from './share-dialog/share-dialog.component';
import { OnboardingStoreModule } from '../onboarding/store/onboarding-store.module';

registerLocaleData(localeDe);

const appRoutes: Routes = [
  {path: '', redirectTo: 'schedule', pathMatch: 'prefix'},
  {path: 'schedule', loadChildren: '../fitness-schedule/fitness-schedule.module#FitnessScheduleModule'},
  {path: 'auth', loadChildren: '../authentication/authentication.module#AuthenticationModule'},
  {path: 'feedback', loadChildren: '../feedback/feedback.module#FeedbackModule'},
  {path: 'about', component: AboutComponent},
  {path: 'onboarding', loadChildren: '../onboarding/onboarding.module#OnboardingModule'}
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NavigationComponent,
    NavigationButtonComponent,
    ShareButtonComponent,
    ShareDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgReduxModule,
    StoreModule,
    FitnessScheduleStoreModule,
    SfsMaterialModule,
    FlexLayoutModule,
    RouterModule.forRoot(appRoutes),
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
    PushNotificationModule,
    AuthenticationStoreModule,
    RecaptchaModule.forRoot(),
    SyncModule,
    SwUpdatesModule,
    Angulartics2Module.forRoot({developerMode: !environment.production}),
    ReleasenotesModule,
    ReleasenotesStoreModule,
    LegalModule,
    FeedbackStoreModule,
    OnboardingStoreModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'de-DE'},
    {provide: ErrorHandler, useClass: RemoteErrorHandler},
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    SharingService
  ],
  entryComponents: [
    ShareDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
