import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleasenotesComponent } from './releasenotes.component';
import { SfsMaterialModule } from '../../material/sfs-material.module';
import { Component, Input } from '@angular/core';
import { MdDialogRef } from '@angular/material';

describe('ReleasenotesComponent', () => {
  let component: ReleasenotesComponent;
  let fixture: ComponentFixture<ReleasenotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReleasenotesComponent, MockComponent],
      imports: [
        SfsMaterialModule,
      ],
      providers: [
        {provide: MdDialogRef, useValue: ''}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleasenotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

@Component({
  selector: 'sfs-release',
  template: ''
})
class MockComponent {
  @Input() release;
}
