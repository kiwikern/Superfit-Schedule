import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleComponent } from './schedule/schedule.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SortClassesPipe } from './pipes/sort-classes.pipe';
import { FilterClassesPipe } from './pipes/filter-classes.pipe';
import { FilterComponent } from '../filter/filter.component';
import { FormsModule } from '@angular/forms';
import { OrderDaysPipe } from './pipes/order-days.pipe';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { SfsMaterialModule } from '../material/sfs-material.module';
import { ScheduleParserService } from './store/schedule/schedule-parser.service';
import { FilteredScheduleComponent } from './filtered-schedule/filtered-schedule.component';
import { FavoritesScheduleComponent } from './favorites-schedule/favorites-schedule.component';
import { DayColumnComponent } from './day-column/day-column.component';
import { FitnessScheduleStoreModule } from './store/fitness-schedule-store.module';
import { ChangesComponent } from './changes/changes.component';
import { ScheduleRouterComponent } from './schedule-router/schedule-router.component';
import { WorkoutModule } from '../workout/workout.module';
import { BottomNavigationButtonComponent } from './bottom-navigation/bottom-navigation-button/bottom-navigation-button.component';
import { BottomNavigationComponent } from './bottom-navigation/bottom-navigation.component';
import { FilterModule } from '../filter/filter.module';
import { PushNotificationModule } from '../push-notification/push-notification.module';
import { PushNotificationRequestDialogComponent } from './push-notification-request-dialog/push-notification-request-dialog.component';

const fitnessRoutes: Routes = [
  {
    path: '', component: ScheduleRouterComponent, children: [
    {path: '', component: FilteredScheduleComponent, data: {position: 0}},
    {path: 'favorites', component: FavoritesScheduleComponent, data: {position: 1}},
    {path: 'filter', component: FilterComponent, data: {position: 2}},
    {path: 'settings', component: SettingsComponent, data: {position: 4}},
    {path: 'changes', component: ChangesComponent, data: {position: 3}}
  ]
  },
  {path: 'class', loadChildren: '../comment/comments.module#CommentsModule'},
];

@NgModule({
  imports: [
    CommonModule,
    SfsMaterialModule,
    FlexLayoutModule,
    FormsModule,
    RouterModule.forChild(fitnessRoutes),
    FitnessScheduleStoreModule,
    WorkoutModule,
    FilterModule
  ],
  declarations: [
    ScheduleComponent,
    OrderDaysPipe,
    FilterClassesPipe,
    SortClassesPipe,
    SettingsComponent,
    FilteredScheduleComponent,
    FavoritesScheduleComponent,
    DayColumnComponent,
    ChangesComponent,
    ScheduleRouterComponent,
    BottomNavigationButtonComponent,
    BottomNavigationComponent,
    PushNotificationRequestDialogComponent
  ],
  exports: [
    ScheduleComponent
  ],
  providers: [
    ScheduleParserService
  ],
  entryComponents: [PushNotificationRequestDialogComponent]
})
export class FitnessScheduleModule {
}
