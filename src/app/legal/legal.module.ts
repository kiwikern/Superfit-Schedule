import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { LegalNavComponent } from './legal-nav/legal-nav.component';
import { SfsMaterialModule } from '../material/sfs-material.module';

@NgModule({
  imports: [
    CommonModule,
    SfsMaterialModule
  ],
  declarations: [
    PrivacyPolicyComponent,
    LegalNavComponent
  ],
  exports: [
    LegalNavComponent
  ],
  entryComponents: [
    PrivacyPolicyComponent
  ]
})
export class LegalModule {
}
