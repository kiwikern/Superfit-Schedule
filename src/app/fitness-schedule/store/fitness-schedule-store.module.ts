import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleEpics } from './schedule/schedule.epics';
import { ScheduleActions } from './schedule/schedule.actions';
import { FilterActions } from './filter/filter.actions';
import { SettingsActions } from './settings/settings.actions';
import { MappingService } from '../services/mapping.service';
import { FavoriteActions } from './favorites/favorite.actions';
import { ScheduleParserService } from './schedule/schedule-parser.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    ScheduleEpics,
    ScheduleActions,
    FilterActions,
    SettingsActions,
    MappingService,
    FavoriteActions,
    ScheduleParserService
  ]

})
export class FitnessScheduleStoreModule {
}
