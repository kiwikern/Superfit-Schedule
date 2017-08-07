import { Component, Input, OnInit } from '@angular/core';
import { ClassComment } from '../class-comment';
import { HighlightService } from '../highlight.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'sfs-comment-detail',
  templateUrl: './comment-detail.component.html',
  styleUrls: ['./comment-detail.component.css']
})
export class CommentDetailComponent implements OnInit {

  @Input() comment: ClassComment;
  classId: string;

  constructor(public highlightService: HighlightService,
              private router: ActivatedRoute) {
  }

  ngOnInit() {
    this.router.paramMap.subscribe(params => this.classId = params.get('id'));
  }

}
