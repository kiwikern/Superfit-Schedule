import { ErrorHandler, Injector } from '@angular/core';
import { Logger } from '../common/logger.service';
import { LocationStrategy } from '@angular/common';

export class RemoteErrorHandler implements ErrorHandler {
  private log: Logger;
  private location: LocationStrategy;

  constructor(private injector: Injector) {
    setTimeout(() => {
        this.log = injector.get(Logger);
        this.location = injector.get(LocationStrategy);
      }
    );
  }

  handleError(error) {
    const message = error.message || error.toString();
    const url = this.location ? this.location.path() : '';
    this.log.error(message, url, error);
  }
}
