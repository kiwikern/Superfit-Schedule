import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { MatSnackBar } from '@angular/material';


@Injectable()
export class Logger {

  constructor(private snackbar: MatSnackBar) {
  }

  log(value: any, ...rest) {
    if (!environment.production) {
      console.log(value, ...rest);
    }
  }

  debug(value: any, ...rest) {
    if (environment.debug) {
      console.log(value, ...rest);
    }
  }

  error(value: any, ...rest) {
    this.snackbar.open('Ups, ein Fehler ist aufgetreten. 😳', 'OK', {duration: 5000});
    console.error(value, ...rest);
  }

  warn(value: any, ...rest) {
    console.warn(value, ...rest);
  }
}
