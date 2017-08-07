import { Component, OnInit } from '@angular/core';
import { Highlight } from '../highlights.enum';
import { Observable } from 'rxjs/Observable';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'sfs-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {

  text: string;
  instructors: string[];
  highlights: Highlight[];
  attendance: number;
  instructorControl = new FormControl();
  instructorsAuto;
  allInstructors: string[];
  filteredInstructors: Observable<string[]>;
  classId: string;

  constructor(private router: ActivatedRoute) {
  }

  ngOnInit() {
    this.router.params.subscribe(params => this.classId = params['id']);
    this.allInstructors = ['Marius', 'Yvonne'];
    this.filteredInstructors = this.instructorControl.valueChanges
      .startWith(null)
      .map(value => value ? this.filterInstructors(value) : this.allInstructors.slice());
  }

  onSubmit() {
    // TODO
  }

  private filterInstructors(value: string): string[] {
    return this.allInstructors.filter(instructor => new RegExp(`${value}`, 'gi').test(instructor));
  }
}
