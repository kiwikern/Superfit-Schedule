import { Component, OnDestroy, OnInit } from '@angular/core';
import { Highlight } from '../highlights.enum';
import { Observable } from 'rxjs/Observable';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ScheduleActions } from '../../fitness-schedule/store/schedule/schedule.actions';
import { ClassComment } from '../class-comment';
import { select } from '@angular-redux/store';
import { Subscription } from 'rxjs/Subscription';
import { AuthService } from '../../authentication/store/auth-service/auth.service';
import { AuthenticationActions } from '../../authentication/store/authentication.actions';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'sfs-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit, OnDestroy {

  text: string;
  instructors: string[] = [];
  highlights: Highlight[] = [];
  attendance: number;
  instructorControl = new FormControl();
  instructorsAuto;
  allInstructors: string[] = [];
  filteredInstructors: Observable<string[]>;
  classId: string;
  @select(['authentication', 'jwt'])
  subscription: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private authService: AuthService,
              private authActions: AuthenticationActions,
              private actions: ScheduleActions) {
  }

  ngOnInit() {
    if (!this.authService.isLoggedIn()) {
      this.authActions.needsLogin(this.router.url, 'Logge dich ein, um einen Kommentar zu verfassen.');
    }
    this.route.params.subscribe(params => this.classId = params['id']);
    this.allInstructors = ['Antonia', 'Basti', 'Burak', 'Carolin', 'Didier', 'Dominik', 'Elli', 'Emilie', 'Gabriela',
      'Jasmin', 'Jenny', 'Judith', 'Mariusz', 'Max', 'Milena', 'Nadja', 'Nicola', 'Laura', 'Lea',
      'Pascal', 'Patrick', 'Richy', 'Ronny', 'Stefan', 'Tareq', 'Theresa', 'Toni', 'Vivian', 'Yannick', 'Yvonne'];
    this.filteredInstructors = this.instructorControl.valueChanges
      .pipe(
      startWith(''),
      map(value => this.filterInstructors(value)));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit() {
    const comment: ClassComment = {
      text: this.text,
      instructors: this.instructors,
      highlights: this.highlights,
      attendance: this.attendance,
      workoutId: this.classId
    };
    this.actions.addComment(comment);
    this.router.navigate(['..'], {relativeTo: this.route});
  }

  setHighlights(highlights: Highlight[]) {
    this.highlights = highlights;
  }

  addInstructor() {
    const instructor: string = this.instructorControl.value;
    if (instructor && !this.instructors.includes(instructor) && instructor.length >= 2) {
      this.instructors.push(instructor);
      this.instructorControl.patchValue('');
    }
  }

  removeInstructor(instructor: string) {
    const index = this.instructors.indexOf(instructor);
    this.instructors.splice(index, 1);
  }

  private filterInstructors(value: string = ''): string[] {
    return this.allInstructors.filter(instructor => {
      return (new RegExp(`${value}`, 'gi').test(instructor)) && !this.instructors.includes(instructor);
    });
  }
}
