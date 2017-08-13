import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Logger } from './logger.service';


@Injectable()
export class ScrollService {

  constructor(private logger: Logger,
              @Inject(DOCUMENT) private document: any) {
  }

  scrollToTop() {
    this.logger.debug('ScrollService.scrollToTop()');
    this.setScrollRestoration('auto');
    this.scrollTo(0);
  }

  scrollToId(id: string) {
    this.logger.debug('ScrollService.scrollToId()', id);
    this.setScrollRestoration('manual');
    const element = this.document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top - 64;
      this.scrollTo(y);
    } else {
      this.logger.warn('ScrollService.scrollToId(): element not found', {id, element});
    }
  }

  private scrollTo(y) {
    if (window && window.scrollBy) {
      window.scrollTo(0, y);
    } else {
      this.logger.warn('ScrollService.scrollTo(): no window found');
    }
  }

  /**
   * Do not return to previous scroll position on reload
   */
  private setScrollRestoration(mode: ScrollRestoration) {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = mode;
    }
  }

}
