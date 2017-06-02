import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app/app.component';
import { NgReduxModule } from '@angular-redux/store';
import { StoreModule } from '../store/store.module';
import { FitnessScheduleModule } from '../fitness-schedule/fitness-schedule.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { SfsMaterialModule } from '../material/sfs-material.module';
import { NavigationComponent } from './navigation/navigation.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { PushNotificationModule } from '../push-notification/push-notification.module';
import { AuthenticationModule } from '../authentication/authentication.module';
import { RecaptchaModule } from 'ng-recaptcha';


const appRoutes: Routes = [
  {path: '', redirectTo: 'schedule', pathMatch: 'prefix'},
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
    FormsModule,
    HttpModule,
    NgReduxModule,
    StoreModule,
    FitnessScheduleModule,
    SfsMaterialModule,
    FlexLayoutModule,
    RouterModule.forRoot(appRoutes, {useHash: true}),
    ServiceWorkerModule,
    PushNotificationModule,
    AuthenticationModule,
    RecaptchaModule.forRoot()
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
