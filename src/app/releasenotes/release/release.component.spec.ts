import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleaseComponent } from './release.component';
import { SfsMaterialModule } from '../../material/sfs-material.module';
import { EntryComponent } from '../entry/entry.component';

describe('ReleaseComponent', () => {
  let component: ReleaseComponent;
  let fixture: ComponentFixture<ReleaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReleaseComponent, EntryComponent ],
      imports: [
        SfsMaterialModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleaseComponent);
    component = fixture.componentInstance;
    component.release = {version: '', entries: [], date: new Date()};
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
