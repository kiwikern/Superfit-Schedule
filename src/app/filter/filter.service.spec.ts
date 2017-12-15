import { inject, TestBed } from '@angular/core/testing';

import { FilterService } from './filter.service';
import { FilterActions } from '../fitness-schedule/store/filter/filter.actions';

describe('FilterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FilterService,
        {provide: FilterActions, useClass: MockFilterActions}
      ]
    });
  });

  it('should be created', inject([FilterService], (service: FilterService) => {
    expect(service).toBeTruthy();
  }));
});

class MockFilterActions {
}
