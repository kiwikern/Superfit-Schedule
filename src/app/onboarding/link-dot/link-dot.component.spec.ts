import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkDotComponent } from './link-dot.component';

describe('LinkDotComponent', () => {
  let component: LinkDotComponent;
  let fixture: ComponentFixture<LinkDotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkDotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkDotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
