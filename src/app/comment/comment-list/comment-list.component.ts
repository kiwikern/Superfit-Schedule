import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FitnessClass } from '../../fitness-schedule/interfaces/fitness-class';
import { select } from '@angular-redux/store';
import 'rxjs/add/observable/combineLatest';
import { Observable } from 'rxjs/Observable';
import { FitnessClassesPerDay } from '../../fitness-schedule/interfaces/fitness-classes-per-day';
import { Subscription } from 'rxjs/Subscription';
import { ClassComment } from '../class-comment';
import { Highlight } from '../highlights.enum';


@Component({
  selector: 'sfs-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentListComponent implements OnInit {

  @select(['schedule', 'schedulePerDay']) schedulePerDay$;
  id: string;
  fitnessClass: FitnessClass;
  subscription: Subscription;
  comments: ClassComment[] = [{
    attendance: 2,
    workoutId: '',
    highlights: [Highlight.Encouragement, Highlight.Exhausting],
    instructors: ['Marius', 'Yvonne'],
    text: 'Das ist der Kommentar',
    userName: 'Kiwi',
    userId: '',
    date: new Date()
  }];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.subscription = Observable.combineLatest(this.route.paramMap, this.schedulePerDay$, (paramMap: ParamMap, schedulePerDay: any) => {
      this.id = paramMap.get('id');
      this.fitnessClass = this.findFitnessClass(schedulePerDay);
    }).subscribe();
  }

  private findFitnessClass(schedulePerDay: FitnessClassesPerDay[]): FitnessClass {
    const allClasses: FitnessClass[] = schedulePerDay
      .map(s => s.classes)
      .reduce((f1, f2) => f1.concat(f2), []);
    return allClasses.find(f => f.id === this.id);
  }
}
