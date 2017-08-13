import { Injectable } from '@angular/core';
import { Logger } from './logger.service';


@Injectable()
export class ScrollService {

  constructor(private logger: Logger) {
  }

  scrollToTop() {
    if (window && window.scrollBy) {
      this.logger.debug('ScrollService.scrollToTop()');
      window.scrollTo(0, 0);
    } else {
      this.logger.warn('ScrollService.scrollToTop(): no window found');
    }
  }

}
