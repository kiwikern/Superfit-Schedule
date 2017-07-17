import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SfsMaterialModule } from '../material/sfs-material.module';
import { EntryComponent } from './entry/entry.component';
import { ReleaseComponent } from './release/release.component';
import { ReleasenotesComponent } from './releasenotes/releasenotes.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    SfsMaterialModule,
    FlexLayoutModule
  ],
  declarations: [
    EntryComponent,
    ReleaseComponent,
    ReleasenotesComponent
  ],
  entryComponents: [
    ReleasenotesComponent
  ]
})
export class ReleasenotesModule {
}
