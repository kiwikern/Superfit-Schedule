import { Injectable } from '@angular/core';
import { UPDATE_LOCATION } from '@angular-redux/router';

@Injectable()
export class RouterActions {

   navigateTo(path: string) {
    return {
      type: UPDATE_LOCATION,
      payload: path
    };
  }

}
