import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkDotsComponent } from './link-dots.component';
import { RepeatPipe } from '../../common/repeat.pipe';
import { LinkDotComponent } from '../link-dot/link-dot.component';

describe('LinkDotsComponent', () => {
  let component: LinkDotsComponent;
  let fixture: ComponentFixture<LinkDotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LinkDotsComponent,
        LinkDotComponent,
        RepeatPipe
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkDotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
