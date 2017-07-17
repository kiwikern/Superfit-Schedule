import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';
import { SfsMaterialModule } from '../../material/sfs-material.module';
import { ReleasenotesActions } from '../../releasenotes/store/releasenotes.actions';
import { LegalNavComponent } from '../../legal/legal-nav/legal-nav.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutComponent, LegalNavComponent ],
      imports: [SfsMaterialModule],
      providers: [
        {provide: ReleasenotesActions, useValue: ''}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
