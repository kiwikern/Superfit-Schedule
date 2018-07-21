import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { Logger } from '../common/logger.service';
import { LocationStrategy } from '@angular/common';

@Injectable()
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
    if (this.log) {
      this.log.error(message, url, error);
    } else {
      console.error(message, url, error);
    }
  }
}
