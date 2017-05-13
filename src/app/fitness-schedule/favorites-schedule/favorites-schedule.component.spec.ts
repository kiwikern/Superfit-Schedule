import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesScheduleComponent } from './favorites-schedule.component';

describe('FavoritesScheduleComponent', () => {
  let component: FavoritesScheduleComponent;
  let fixture: ComponentFixture<FavoritesScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoritesScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
