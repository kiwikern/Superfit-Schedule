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
import { FilterModule } from '../filter/filter.module';
import { ClassSelectionComponent } from './class-selection/class-selection.component';
import { RegisterComponent } from './register/register.component';
import { TimeSelectionComponent } from './time-selection/time-selection.component';

const onboardingRoutes: Routes = [
  {path: '', component: OnboardingComponent},
  {path: 'start', component: WelcomeComponent, outlet: 'onboarding'},
  {path: 'gymselection', component: GymselectionComponent, outlet: 'onboarding'},
  {path: 'classselection', component: ClassSelectionComponent, outlet: 'onboarding'},
  {path: 'timeselection', component: TimeSelectionComponent, outlet: 'onboarding'},
  {path: 'registration', component: RegisterComponent, outlet: 'onboarding'}
];

@NgModule({
  imports: [
    CommonModule,
    SfsCommonModule,
    SfsMaterialModule,
    RouterModule.forChild(onboardingRoutes),
    FlexLayoutModule,
    FilterModule
  ],
  declarations: [
    OnboardingDialogComponent,
    WelcomeComponent,
    GymselectionComponent,
    OnboardingComponent,
    LinkDotsComponent,
    LinkDotComponent,
    ClassSelectionComponent,
    RegisterComponent,
    TimeSelectionComponent
  ],
  entryComponents: [
    OnboardingDialogComponent
  ]
})
export class OnboardingModule {

}
