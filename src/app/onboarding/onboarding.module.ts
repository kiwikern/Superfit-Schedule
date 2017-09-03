import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnboardingDialogComponent } from './onboarding-dialog/onboarding-dialog.component';
import { SfsCommonModule } from '../common/common.module';
import { SfsMaterialModule } from '../material/sfs-material.module';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { WelcomeComponent } from './welcome/welcome.component';
import { GymselectionComponent } from './gymselection/gymselection.component';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { LinkDotsComponent } from './link-dots/link-dots.component';
import { LinkDotComponent } from './link-dot/link-dot.component';

const onboardingRoutes: Routes = [
  {path: '', component: OnboardingComponent},
  {path: 'start', component: WelcomeComponent, outlet: 'onboarding'},
  {path: 'gymselection', component: GymselectionComponent, outlet: 'onboarding'}
];

@NgModule({
  imports: [
    CommonModule,
    SfsCommonModule,
    SfsMaterialModule,
    RouterModule.forChild(onboardingRoutes),
    FlexLayoutModule,
    // WorkoutModule,
    // FitnessScheduleModule
  ],
  declarations: [
    OnboardingDialogComponent,
    WelcomeComponent,
    GymselectionComponent,
    OnboardingComponent,
    LinkDotsComponent,
    LinkDotComponent
  ],
  entryComponents: [
    OnboardingDialogComponent
  ]
})
export class OnboardingModule {

}
