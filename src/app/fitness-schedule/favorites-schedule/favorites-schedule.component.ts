import { Component, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { ScheduleParserService } from '../services/schedule-parser.service';
import { FitnessClass } from '../interfaces/fitness-class';

@Component({
  selector: 'sfs-favorites-schedule',
  templateUrl: './favorites-schedule.component.html',
  styleUrls: ['./favorites-schedule.component.css']
})
export class FavoritesScheduleComponent implements OnInit {

  @select(['favorites', 'workouts']) favorites$: Observable<FitnessClass[]>;
  favoritesPerDay = [];
  hasFavorites: boolean = false;

  constructor(private parseService: ScheduleParserService) {
  }

  ngOnInit() {
    this.favorites$.subscribe((favs) => this.hasFavorites = favs && favs.length > 0);
    this.favorites$.subscribe((favs) => this.favoritesPerDay = this.parseService.getAllClassesByDay(favs));
  }

}
