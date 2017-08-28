import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FitnessClass } from '../../workout/fitness-class';
import { select } from '@angular-redux/store';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/takeUntil';
import { Observable } from 'rxjs/Observable';
import { FitnessClassesPerDay } from '../../fitness-schedule/interfaces/fitness-classes-per-day';
import { Subscription } from 'rxjs/Subscription';
import { ClassComment } from '../class-comment';
import { MappingService } from '../../workout/mapping.service';
import { Subject } from 'rxjs/Subject';


@Component({
  selector: 'sfs-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentListComponent implements OnInit, OnDestroy {

  @select(['schedule', 'schedulePerDay']) schedulePerDay$;
  @select(['schedule', 'isLoading']) isLoading$;
  isOtherPanelExpanded: boolean = false;
  id: string;
  fitnessClass: FitnessClass;
  otherClasses: FitnessClass[];
  subscription: Subscription;
  comments: ClassComment[] = [];
  private onDestroy = new Subject();

  constructor(private route: ActivatedRoute,
              private cdRef: ChangeDetectorRef,
              public mappingService: MappingService) {
  }

  ngOnInit() {
    this.subscription = Observable.combineLatest(this.route.paramMap, this.schedulePerDay$, (paramMap: ParamMap, schedulePerDay: any) => {
      this.id = paramMap.get('id');
      this.fitnessClass = this.findFitnessClass(schedulePerDay);
      this.comments = this.fitnessClass.comments;
      this.otherClasses = this.findWorkoutsWithComments(schedulePerDay);
      if (!this.comments || this.comments.length < 1) {
        setTimeout(() => this.isOtherPanelExpanded = true, 500);
      }
      this.cdRef.detectChanges();
    }).takeUntil(this.onDestroy)
      .subscribe();
  }

  ngOnDestroy() {
    this.onDestroy.next();
  }

  private findFitnessClass(schedulePerDay: FitnessClassesPerDay[]): FitnessClass {
    const allClasses: FitnessClass[] = schedulePerDay
      .map(s => s.classes)
      .reduce((f1, f2) => f1.concat(f2), []);
    return allClasses.find(f => f.id === this.id);
  }

  private findWorkoutsWithComments(schedulePerDay: FitnessClassesPerDay[]): FitnessClass[] {
    return schedulePerDay
      .map(s => s.classes)
      .reduce((f1, f2) => f1.concat(f2), [])
      .filter(f => f.workoutId === this.fitnessClass.workoutId)
      .filter(f => f.id !== this.fitnessClass.id)
      .filter(f => f.comments && f.comments.length > 0);
  }
}
